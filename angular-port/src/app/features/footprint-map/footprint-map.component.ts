// src/app/features/footprint-map/footprint-map.component.ts

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { animationFrameScheduler, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import {
  LABEL_LAYOUTS,
  PROJECTS,
  SOUTH_STATE_NAMES,
  STATE_LABEL_NAMES,
  TYPE_STYLES,
  computeTotals,
} from './footprint-map.data';
import {
  INDIA_BBOX,
  SOUTH_BBOX,
  StatesGeo,
  clamp,
  easeOutBack,
  easeOutCubic,
  featureCentroid,
  featurePath,
  getStateName,
  interpolate,
  lerpBbox,
  projectionForBbox,
} from './footprint-map.geo';
import { LabelLayout, Project, ProjectTotals } from './footprint-map.types';
// (ProjectTotals re-exported above is consumed by the aria-label)

// ── Timeline (seconds, scene-3 onward — globe scene is omitted in this port) ─
const SCENE_FADE_IN: [number, number] = [0.0, 0.8];
const ZOOM_RANGE: [number, number]    = [1.4, 3.5];
const MARKERS_START                   = 4.0;
const MARKER_SPACING                  = 0.85;
const MARKER_FADE_IN                  = 0.6;
const STAGE_W = 1920;
const STAGE_H = 1080;

interface MarkerView {
  p: Project;
  x: number; y: number;
  scale: number;          // intro scale 0..1
  pulseR: number;         // continuous pulse ring radius
  pulseO: number;         // continuous pulse ring opacity
  ringR: number;          // appear-burst ring radius
  ringO: number;          // appear-burst ring opacity
  glow: string;           // type colour glow
  fill: string;
}

interface LabelView {
  p: Project;
  layout: LabelLayout;
  x: number; y: number;
  labelX: number; labelY: number;
  anchorX: number; anchorY: number;
  side: 'left' | 'right';
  fill: string;
  opacity: number;
  tx: number;             // entrance translate x
}

interface StateView {
  d: string;
  fill: string;
  isSouth: boolean;
  dimOpacity: number;
}

interface StateLabelView {
  name: string;
  cx: number;
  cy: number;
  opacity: number;
}

@Component({
  selector: 'app-footprint-map',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footprint-map.component.html',
  styleUrls: ['./footprint-map.component.scss'],
})
export class FootprintMapComponent implements OnInit {
  // ── Inputs ────────────────────────────────────────────────────────────────
  @Input() autoplay = true;
  @Input() loop = false;
  @Input() duration = 14;
  /** Override the geojson URL if you bundle it elsewhere. */
  @Input() geoJsonUrl: string = 'assets/footprint-map/india-states.geojson';

  // ── DI ────────────────────────────────────────────────────────────────────
  private readonly http = inject(HttpClient);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  // ── State ─────────────────────────────────────────────────────────────────
  readonly viewBox = `0 0 ${STAGE_W} ${STAGE_H}`;
  readonly stageW = STAGE_W;
  readonly stageH = STAGE_H;

  /** Current playhead, seconds. */
  readonly time = signal(0);
  readonly playing = signal(false);
  readonly geo = signal<StatesGeo | null>(null);

  /** Reduced-motion: jump straight to final state and skip animation. */
  private reducedMotion = false;

  // Derived projections (computed every frame — they're cheap)
  private currentBbox = computed(() => {
    const t = this.time();
    const zoomT = clamp((t - ZOOM_RANGE[0]) / (ZOOM_RANGE[1] - ZOOM_RANGE[0]), 0, 1);
    return lerpBbox(INDIA_BBOX, SOUTH_BBOX, easeOutCubic(zoomT));
  });

  private projection = computed(() =>
    projectionForBbox(this.currentBbox(), STAGE_W, STAGE_H, 60),
  );

  // ── Derived view models — used directly by the template ───────────────────

  readonly bgOpacity = computed(() =>
    interpolate([SCENE_FADE_IN[0] - 0.3, SCENE_FADE_IN[0] + 0.6], [0, 1])(this.time()),
  );

  readonly contentOpacity = computed(() =>
    interpolate([SCENE_FADE_IN[0], SCENE_FADE_IN[1]], [0, 1])(this.time()),
  );

  readonly southlight = computed(() =>
    clamp((this.time() - 2.5) / 1.5, 0, 1),
  );

  readonly states = computed<StateView[]>(() => {
    const g = this.geo();
    if (!g) return [];
    const proj = this.projection();
    const dim = 1 - this.southlight();
    return g.features.map(f => {
      const south = SOUTH_STATE_NAMES.has(getStateName(f));
      return {
        d: featurePath(proj, f),
        fill: south ? 'url(#nfp-state-south)' : 'url(#nfp-state-north)',
        isSouth: south,
        dimOpacity: south ? 0 : 1 - dim, // overlay opacity to dim non-south states
      };
    });
  });

  /** Re-stroke south state borders on top so they pop after zoom. */
  readonly southStrokes = computed<string[]>(() => {
    const g = this.geo();
    if (!g) return [];
    const proj = this.projection();
    return g.features
      .filter(f => SOUTH_STATE_NAMES.has(getStateName(f)))
      .map(f => featurePath(proj, f));
  });

  readonly stateLabels = computed<StateLabelView[]>(() => {
    const g = this.geo();
    if (!g) return [];
    const proj = this.projection();
    const op = this.southlight() * 0.7;
    return g.features
      .filter(f => STATE_LABEL_NAMES.has(getStateName(f)))
      .map(f => {
        const c = featureCentroid(proj, f);
        return {
          name: getStateName(f).toUpperCase(),
          cx: c[0],
          cy: c[1],
          opacity: op,
        };
      })
      .filter(v => isFinite(v.cx));
  });

  readonly markers = computed<MarkerView[]>(() => {
    const t = this.time();
    const proj = this.projection();
    const out: MarkerView[] = [];
    PROJECTS.forEach((p, i) => {
      const start = MARKERS_START + i * MARKER_SPACING;
      const introT = clamp((t - start) / MARKER_FADE_IN, 0, 1);
      if (introT <= 0) return;

      const xy = proj([p.lng, p.lat]);
      if (!xy || !isFinite(xy[0])) return;

      // Continuous pulse
      const sincePulse = Math.max(0, t - start - 0.4);
      const pulsePhase = (sincePulse % 2.2) / 2.2;
      const pulseR = 6 + pulsePhase * 22;
      const pulseO = (1 - pulsePhase) * 0.45;

      // Appear burst ring
      const activeT = clamp((t - start) / 1.2, 0, 1);
      const ringR = activeT < 1 && activeT > 0 ? 14 + activeT * 18 : 0;
      const ringO = activeT < 1 && activeT > 0 ? (1 - activeT) * 0.85 : 0;

      const style = TYPE_STYLES[p.type];
      out.push({
        p,
        x: xy[0],
        y: xy[1],
        scale: easeOutBack(introT),
        pulseR, pulseO,
        ringR, ringO,
        glow: style.glow,
        fill: style.fill,
      });
    });
    return out;
  });

  readonly labels = computed<LabelView[]>(() => {
    const t = this.time();
    const proj = this.projection();
    const out: LabelView[] = [];
    PROJECTS.forEach((p, i) => {
      const start = MARKERS_START + i * MARKER_SPACING + 0.15;
      const introT = clamp((t - start) / 0.55, 0, 1);
      if (introT <= 0) return;
      const xy = proj([p.lng, p.lat]);
      if (!xy || !isFinite(xy[0])) return;

      const layout = LABEL_LAYOUTS[p.id] ?? { side: 'right' as const, offX: 90, offY: 0 };
      const labelX = xy[0] + layout.offX;
      const labelY = xy[1] + layout.offY;
      const anchorX = layout.side === 'right' ? labelX - 4 : labelX + 4;
      const eased = easeOutCubic(introT);

      out.push({
        p,
        layout,
        x: xy[0], y: xy[1],
        labelX, labelY,
        anchorX, anchorY: labelY,
        side: layout.side,
        fill: TYPE_STYLES[p.type].fill,
        opacity: eased,
        tx: (1 - eased) * (layout.side === 'right' ? -10 : 10),
      });
    });
    return out;
  });

  readonly legendVisible = computed(() =>
    interpolate([3.6, 4.4], [0, 1], easeOutCubic)(this.time()) > 0.01,
  );
  readonly legendOpacity = computed(() =>
    interpolate([3.6, 4.4], [0, 1], easeOutCubic)(this.time()),
  );

  /** Used only for the aria-label. */
  readonly totals: ProjectTotals = computeTotals(PROJECTS);

  readonly typeStyles = TYPE_STYLES;

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  ngOnInit(): void {
    this.reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches === true;

    // Load India geojson
    this.http
      .get<StatesGeo>(this.geoJsonUrl)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(g => {
        this.geo.set(g);
        if (this.reducedMotion) {
          this.time.set(this.duration);
        } else if (this.autoplay) {
          this.play();
        }
      });
  }

  // ── Public API ────────────────────────────────────────────────────────────

  play(): void {
    if (this.playing()) return;
    this.playing.set(true);
    let last = performance.now();
    interval(0, animationFrameScheduler)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        takeWhile(() => this.playing()),
      )
      .subscribe(() => {
        const now = performance.now();
        const dt = (now - last) / 1000;
        last = now;
        let next = this.time() + dt;
        if (next >= this.duration) {
          if (this.loop) {
            next = next % this.duration;
          } else {
            next = this.duration;
            this.playing.set(false);
          }
        }
        this.time.set(next);
      });
  }

  pause(): void { this.playing.set(false); }

  reset(): void {
    this.time.set(0);
    if (this.autoplay) this.play();
  }

  // ── Template helpers ──────────────────────────────────────────────────────

  trackById = (_: number, x: { p?: Project; name?: string; d?: string }): string =>
    x.p?.id ?? x.name ?? x.d ?? '';

  // ── Stop the timeline if the host is removed from the DOM ─────────────────
  @HostListener('window:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) this.pause();
    else if (this.autoplay && this.time() < this.duration) this.play();
  }
}
