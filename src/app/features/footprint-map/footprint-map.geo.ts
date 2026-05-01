// src/app/features/footprint-map/footprint-map.geo.ts
//
// Geometry helpers — projections, easing, interpolation. All pure functions
// so the component template can call them safely.

import { geoMercator, geoPath, GeoProjection } from 'd3-geo';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import { BBox } from './footprint-map.types';

// ── Camera bounds ───────────────────────────────────────────────────────────

export const INDIA_BBOX: BBox = { lng: [68, 97], lat: [6.5, 37.5] };
export const SOUTH_BBOX: BBox = { lng: [68, 84], lat: [6.5, 19] };

// ── Easing ──────────────────────────────────────────────────────────────────

export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

export const easeOutCubic = (t: number): number => --t * t * t + 1;

export const easeOutBack = (t: number): number => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export const clamp = (v: number, lo: number, hi: number): number =>
  Math.max(lo, Math.min(hi, v));

// ── Interpolation ───────────────────────────────────────────────────────────

/** Linear keyframe interpolator with optional easing per segment. */
export function interpolate(
  input: number[],
  output: number[],
  ease: (t: number) => number = easeInOutCubic,
): (t: number) => number {
  return (t: number): number => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        return output[i] + (output[i + 1] - output[i]) * ease(local);
      }
    }
    return output[output.length - 1];
  };
}

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export function lerpBbox(a: BBox, b: BBox, t: number): BBox {
  return {
    lng: [lerp(a.lng[0], b.lng[0], t), lerp(a.lng[1], b.lng[1], t)],
    lat: [lerp(a.lat[0], b.lat[0], t), lerp(a.lat[1], b.lat[1], t)],
  };
}

// ── Projections ─────────────────────────────────────────────────────────────

/** Build a Mercator projection that fits a given bbox into width×height. */
export function projectionForBbox(
  bbox: BBox,
  width: number,
  height: number,
  padding = 60,
): GeoProjection {
  const proj = geoMercator()
    .scale(1)
    .translate([0, 0])
    .center([0, 0])
    .rotate([0, 0, 0]);

  const p0 = proj([bbox.lng[0], bbox.lat[1]])!;
  const p1 = proj([bbox.lng[1], bbox.lat[0]])!;
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];

  const scale = Math.min(
    (width - 2 * padding) / dx,
    (height - 2 * padding) / dy,
  );

  const cx = (bbox.lng[0] + bbox.lng[1]) / 2;
  const cy = (bbox.lat[0] + bbox.lat[1]) / 2;

  proj.scale(scale).center([cx, cy]).translate([width / 2, height / 2]);
  return proj;
}

/** Convenience: read state name from a feature regardless of source schema. */
export function getStateName(f: Feature): string {
  const p = (f.properties ?? {}) as Record<string, unknown>;
  return (
    (p['NAME_1'] as string) ||
    (p['st_nm'] as string) ||
    (p['STATE'] as string) ||
    (p['state'] as string) ||
    (p['name'] as string) ||
    ''
  );
}

export type StatesGeo = FeatureCollection<Geometry, { [k: string]: unknown }>;

/** Build a path string for a feature using a projection. */
export function featurePath(proj: GeoProjection, feature: Feature): string {
  return geoPath(proj)(feature) ?? '';
}

/** Centroid of a feature in screen coordinates. */
export function featureCentroid(
  proj: GeoProjection,
  feature: Feature,
): [number, number] {
  return geoPath(proj).centroid(feature);
}
