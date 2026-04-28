// src/app/features/hero-intro/hero-intro.component.ts

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { animationFrameScheduler, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import {
  geoOrthographic,
  geoGraticule,
  geoPath,
  GeoProjection,
} from 'd3-geo';
import { feature as topoFeature } from 'topojson-client';
import type { Topology } from 'topojson-specification';
import type { FeatureCollection, Geometry, Feature } from 'geojson';

import {
  LABEL_LAYOUTS,
  PROJECTS,
  SOUTH_STATE_NAMES,
  STATE_LABEL_NAMES,
  TYPE_STYLES,
  formatStateName,
} from '../footprint-map/footprint-map.data';
import {
  INDIA_BBOX,
  SOUTH_BBOX,
  StatesGeo,
  clamp,
  easeInOutCubic,
  easeOutBack,
  easeOutCubic,
  featureCentroid,
  featurePath,
  getStateName,
  interpolate,
  lerpBbox,
  projectionForBbox,
} from '../footprint-map/footprint-map.geo';
import { LabelLayout, Project, TypeStyle } from '../footprint-map/footprint-map.types';

// ── Timeline constants (absolute seconds, matching design file) ────────────────
const DURATION            = 26;
const STAGE_W             = 1920;
const STAGE_H             = 1080;
const BASE_RADIUS         = Math.min(STAGE_W, STAGE_H) * 0.32; // 345.6

// India map (absolute t — from scene-india-map.jsx)
const MAP_BG_FADE_START   = 6.7;
const MAP_BG_FADE_END     = 7.6;
const MAP_FADE_IN_START   = 7.0;
const MAP_FADE_IN_END     = 8.2;
const MAP_ZOOM_START      = 8.4;
const MAP_ZOOM_END        = 10.5;
const MAP_SOUTHLIGHT_AT   = 9.5;
const MAP_MARKERS_START   = 11.0;
const MAP_MARKER_SPACING  = 0.85;
const MAP_MARKER_FADE_IN  = 0.6;

const WORLD_ATLAS_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const INDIA_GEO_URL = 'assets/footprint-map/india-states.geojson';

// ── Easing helpers (linear needed for globe rotation segment 1) ────────────────
const linear = (t: number): number => t;

function multiInterp(
  input: number[],
  output: number[],
  easings: Array<(t: number) => number>,
): (t: number) => number {
  return (t: number): number => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const eased = (easings[i] ?? linear)(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// ── Static star definitions (seeded pseudo-random, matches design file) ────────
interface StarDef {
  i: number; x: number; y: number; r: number; baseO: number; tw: number;
}

function makeStars(count = 120): StarDef[] {
  const out: StarDef[] = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < count; i++) {
    out.push({
      i, x: rand() * STAGE_W, y: rand() * STAGE_H,
      r: rand() < 0.85 ? 0.6 : 1.4,
      baseO: 0.25 + rand() * 0.55,
      tw: rand() * Math.PI * 2,
    });
  }
  return out;
}

// ── View model interfaces ──────────────────────────────────────────────────────

interface GlobePathView {
  d: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
}

interface IndiaHaloView {
  cx: number; cy: number; r: number; highlightOn: number;
}

interface MapStateView {
  d: string; fill: string; isSouth: boolean; dimOpacity: number;
}

interface MapStateLabelView {
  name: string; cx: number; cy: number; opacity: number;
}

interface MarkerView {
  p: Project; x: number; y: number; scale: number;
  pulseR: number; pulseO: number; ringR: number; ringO: number;
  glow: string; fill: string;
}

interface LabelView {
  p: Project; x: number; y: number;
  labelX: number; labelY: number;
  anchorX: number; anchorY: number;
  side: 'left' | 'right';
  fill: string; opacity: number; tx: number;
}

@Component({
  selector: 'app-hero-intro',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-intro.component.html',
  styleUrls: ['./hero-intro.component.scss'],
})
export class HeroIntroComponent implements OnInit, AfterViewInit {
  private readonly http = inject(HttpClient);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  // ── SVG stage dimensions exposed to template ───────────────────────────────
  readonly viewBox = `0 0 ${STAGE_W} ${STAGE_H}`;
  readonly stageW  = STAGE_W;
  readonly stageH  = STAGE_H;
  readonly baseR   = BASE_RADIUS;

  // Static star definitions — computed once
  readonly stars = makeStars(120);

  // ── State signals ──────────────────────────────────────────────────────────
  readonly time    = signal(0);
  readonly playing = signal(false);
  readonly worldGeo  = signal<FeatureCollection<Geometry> | null>(null);
  readonly indiaGeo  = signal<StatesGeo | null>(null);
  readonly hostDims  = signal({ w: 0, h: 0 });

  readonly typeStyles: Record<string, TypeStyle> = TYPE_STYLES;

  // ── SVG letterbox transform (HTML overlay alignment) ──────────────────────
  readonly svgTransform = computed(() => {
    const { w, h } = this.hostDims();
    if (w === 0 || h === 0) return { scale: 1, offX: 0, offY: 0, w: STAGE_W };
    const scale = Math.min(w / STAGE_W, h / STAGE_H);
    const offX  = (w - STAGE_W * scale) / 2;
    const offY  = (h - STAGE_H * scale) / 2;
    return { scale, offX, offY, w };
  });

  // ── Globe scene ────────────────────────────────────────────────────────────

  readonly globeSceneOpacity = computed(() =>
    multiInterp([0, 0.4, 6.5, 7.4], [0, 1, 1, 0],
      [easeInOutCubic, easeInOutCubic, easeInOutCubic])(this.time()),
  );

  private readonly globeRotation = computed(() => {
    const t = this.time();
    return {
      lambda: multiInterp([0, 4, 6.5], [-30, -55, -82], [linear, easeInOutCubic])(t),
      phi:    multiInterp([0, 4, 6.5], [-12, -15, -22], [linear, easeInOutCubic])(t),
    };
  });

  private readonly globeProjection = computed((): GeoProjection => {
    const { lambda, phi } = this.globeRotation();
    return geoOrthographic()
      .scale(BASE_RADIUS)
      .translate([STAGE_W / 2, STAGE_H / 2])
      .clipAngle(90)
      .rotate([lambda, phi, 0]);
  });

  readonly globeCamTransform = computed(() => {
    const t = this.time();
    const camScale = multiInterp(
      [0, 4, 6.8, 7.5], [1.0, 1.05, 1.45, 1.55],
      [easeInOutCubic, easeInOutCubic, easeOutCubic],
    )(t);
    const camX = multiInterp([0, 4, 6.8], [0, 0, -110],
      [easeInOutCubic, easeInOutCubic])(t);
    const camY = multiInterp([0, 4, 6.8], [0, 0, 30],
      [easeInOutCubic, easeInOutCubic])(t);
    const cx = STAGE_W / 2 + camX;
    const cy = STAGE_H / 2 + camY;
    return `translate(${cx},${cy}) scale(${camScale}) translate(${-STAGE_W / 2},${-STAGE_H / 2})`;
  });

  readonly globeGraticulePath = computed(() => {
    const proj = this.globeProjection();
    const graticule = geoGraticule().step([15, 15]);
    return geoPath(proj)(graticule()) ?? '';
  });

  readonly globePaths = computed((): GlobePathView[] => {
    const w = this.worldGeo();
    if (!w) return [];
    const t = this.time();
    const highlightOn = clamp((t - 4) / 1.5, 0, 1);
    const proj = this.globeProjection();
    const pathFn = geoPath(proj);
    return w.features.map(f => {
      const isIndia = f.id === '356' || f.id === 356;
      if (isIndia) {
        return {
          d: pathFn(f) ?? '',
          fill: `rgba(0, ${Math.round(120 + 56 * highlightOn)}, ${Math.round(80 - 30 * highlightOn)}, ${0.7 + 0.3 * highlightOn})`,
          stroke: 'rgba(140,240,180,0.9)',
          strokeWidth: 1.1,
        };
      }
      return {
        d: pathFn(f) ?? '',
        fill: `rgba(120, 145, 175, ${0.55 - 0.15 * highlightOn})`,
        stroke: 'rgba(180,200,230,0.18)',
        strokeWidth: 0.5,
      };
    });
  });

  readonly indiaHalo = computed((): IndiaHaloView | null => {
    const w = this.worldGeo();
    const t = this.time();
    const highlightOn = clamp((t - 4) / 1.5, 0, 1);
    if (!w || highlightOn <= 0) return null;
    const proj = this.globeProjection();
    const indiaFeat = w.features.find(f => f.id === '356' || f.id === 356);
    if (!indiaFeat) return null;
    const c = geoPath(proj).centroid(indiaFeat as Feature<Geometry>);
    if (!isFinite(c[0])) return null;
    const pulse = 1 + 0.06 * Math.sin(t * 3.2);
    return { cx: c[0], cy: c[1], r: 42 * pulse, highlightOn };
  });

  readonly starFlickers = computed(() => {
    const t = this.time();
    return this.stars.map(s => s.baseO * (0.6 + 0.4 * Math.sin(t * 1.4 + s.tw)));
  });

  // ── Globe text overlays ────────────────────────────────────────────────────

  readonly introEyebrowOp = computed(() =>
    interpolate([0.3, 1.2, 4.8, 5.5], [0, 1, 1, 0], easeInOutCubic)(this.time()),
  );
  readonly introTitleOp = computed(() =>
    interpolate([0.7, 1.8, 4.8, 5.5], [0, 1, 1, 0], easeInOutCubic)(this.time()),
  );
  readonly introSubOp = computed(() =>
    interpolate([1.4, 2.4, 4.8, 5.5], [0, 1, 1, 0], easeInOutCubic)(this.time()),
  );
  readonly introTitleY = computed(() =>
    interpolate([0.7, 1.8], [12, 0], easeOutCubic)(this.time()),
  );

  // Intro overlay positioned using svgTransform (bottom of 1080px stage)
  readonly introTopPx = computed(() => {
    const { scale, offY } = this.svgTransform();
    return (STAGE_H - 180) * scale + offY;
  });

  // India lock label: Sprite start=4.2, end=7.4
  readonly lockOp = computed(() => {
    const localT = Math.max(0, this.time() - 4.2);
    return interpolate([0, 0.6, 2.2, 3.0], [0, 1, 1, 0], easeInOutCubic)(localT);
  });
  readonly lockTy = computed(() => {
    const localT = Math.max(0, this.time() - 4.2);
    return interpolate([0, 0.6], [10, 0], easeOutCubic)(localT);
  });
  readonly lockTopPx = computed(() => {
    const { scale, offY } = this.svgTransform();
    return 90 * scale + offY;
  });

  // ── India map scene (absolute timeline) ───────────────────────────────────

  readonly mapBgOpacity = computed(() =>
    interpolate([MAP_BG_FADE_START, MAP_BG_FADE_END], [0, 1])(this.time()),
  );

  readonly mapContentOpacity = computed(() =>
    interpolate([MAP_FADE_IN_START, MAP_FADE_IN_END], [0, 1])(this.time()),
  );

  private readonly mapCurrentBbox = computed(() => {
    const t = this.time();
    const zoomT = clamp(
      (t - MAP_ZOOM_START) / (MAP_ZOOM_END - MAP_ZOOM_START), 0, 1,
    );
    return lerpBbox(INDIA_BBOX, SOUTH_BBOX, easeInOutCubic(zoomT));
  });

  private readonly mapProjection = computed(() =>
    projectionForBbox(this.mapCurrentBbox(), STAGE_W, STAGE_H, 60),
  );

  readonly mapSouthlight = computed(() =>
    clamp((this.time() - MAP_SOUTHLIGHT_AT) / 1.5, 0, 1),
  );

  readonly mapStates = computed((): MapStateView[] => {
    const g = this.indiaGeo();
    if (!g) return [];
    const proj = this.mapProjection();
    const dim = 1 - this.mapSouthlight();
    return g.features.map(f => {
      const south = SOUTH_STATE_NAMES.has(getStateName(f));
      return {
        d: featurePath(proj, f),
        fill: south ? 'url(#hi-state-south)' : 'url(#hi-state-north)',
        isSouth: south,
        dimOpacity: south ? 0 : 1 - dim,
      };
    });
  });

  readonly mapSouthStrokes = computed((): string[] => {
    const g = this.indiaGeo();
    if (!g) return [];
    const proj = this.mapProjection();
    return g.features
      .filter(f => SOUTH_STATE_NAMES.has(getStateName(f)))
      .map(f => featurePath(proj, f));
  });

  readonly mapStateLabels = computed((): MapStateLabelView[] => {
    const g = this.indiaGeo();
    if (!g) return [];
    const proj = this.mapProjection();
    const op = this.mapSouthlight() * 0.7;
    return g.features
      .filter(f => STATE_LABEL_NAMES.has(getStateName(f)))
      .map(f => {
        const c = featureCentroid(proj, f);
        return {
          name: formatStateName(getStateName(f)).toUpperCase(),
          cx: c[0], cy: c[1], opacity: op,
        };
      })
      .filter(v => isFinite(v.cx));
  });

  readonly mapMarkers = computed((): MarkerView[] => {
    const t = this.time();
    const proj = this.mapProjection();
    const out: MarkerView[] = [];
    PROJECTS.forEach((p, i) => {
      const start = MAP_MARKERS_START + i * MAP_MARKER_SPACING;
      const introT = clamp((t - start) / MAP_MARKER_FADE_IN, 0, 1);
      if (introT <= 0) return;
      const xy = proj([p.lng, p.lat]);
      if (!xy || !isFinite(xy[0])) return;
      const sincePulse = Math.max(0, t - start - 0.4);
      const pulsePhase = (sincePulse % 2.2) / 2.2;
      const activeT = clamp((t - start) / 1.2, 0, 1);
      const style = TYPE_STYLES[p.type];
      out.push({
        p, x: xy[0], y: xy[1], scale: easeOutBack(introT),
        pulseR: 6 + pulsePhase * 22, pulseO: (1 - pulsePhase) * 0.45,
        ringR: activeT < 1 && activeT > 0 ? 14 + activeT * 18 : 0,
        ringO: activeT < 1 && activeT > 0 ? (1 - activeT) * 0.85 : 0,
        glow: style.glow, fill: style.fill,
      });
    });
    return out;
  });

  readonly mapLabels = computed((): LabelView[] => {
    const t = this.time();
    const proj = this.mapProjection();
    const out: LabelView[] = [];
    PROJECTS.forEach((p, i) => {
      const start = MAP_MARKERS_START + i * MAP_MARKER_SPACING + 0.15;
      const introT = clamp((t - start) / 0.55, 0, 1);
      if (introT <= 0) return;
      const xy = proj([p.lng, p.lat]);
      if (!xy || !isFinite(xy[0])) return;
      const layout: LabelLayout = LABEL_LAYOUTS[p.id] ?? { side: 'right', offX: 90, offY: 0 };
      const labelX = xy[0] + layout.offX;
      const labelY = xy[1] + layout.offY;
      const anchorX = layout.side === 'right' ? labelX - 4 : labelX + 4;
      const eased = easeOutCubic(introT);
      out.push({
        p, x: xy[0], y: xy[1],
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
    interpolate([10.6, 11.4], [0, 1], easeOutCubic)(this.time()) > 0.01,
  );
  readonly legendOpacity = computed(() =>
    interpolate([10.6, 11.4], [0, 1], easeOutCubic)(this.time()),
  );

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  ngOnInit(): void {
    // Load world atlas topojson for globe
    this.http.get(WORLD_ATLAS_URL)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((topo: unknown) => {
        try {
          const t = topo as Topology;
          const countries = topoFeature(t, (t as any).objects.countries) as unknown as FeatureCollection<Geometry>;
          this.worldGeo.set(countries);
        } catch (e) {
          console.warn('World atlas decode failed', e);
        }
      });

    // Load India states geojson for map scene
    this.http.get<StatesGeo>(INDIA_GEO_URL)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(g => {
        this.indiaGeo.set(g);
        this.play();
      });
  }

  ngAfterViewInit(): void {
    this.measureHost();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.measureHost();
  }

  @HostListener('window:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) this.pause();
    else if (this.time() < DURATION) this.play();
  }

  private measureHost(): void {
    const el = this.host.nativeElement as HTMLElement;
    this.hostDims.set({ w: el.clientWidth, h: el.clientHeight });
  }

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
        const next = Math.min(this.time() + dt, DURATION);
        if (next >= DURATION) this.playing.set(false);
        this.time.set(next);
      });
  }

  pause(): void { this.playing.set(false); }
}
