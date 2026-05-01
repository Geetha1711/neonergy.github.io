// src/app/features/footprint-map/footprint-map.data.ts

import { LabelLayout, Project, ProjectTotals, ProjectType, TypeStyle } from './footprint-map.types';

export const PROJECTS: Project[] = [
  // Karnataka — Solar Project Development
  { id: 'k-gul',    state: 'Karnataka',  location: 'Gulberga',    lat: 17.3297, lng: 76.8343, capacity: '37 MWp',            type: 'Solar Project Development' },
  { id: 'k-chi',    state: 'Karnataka',  location: 'Chintamani',  lat: 13.4000, lng: 78.0500, capacity: '42 MWp',            type: 'Solar Project Development' },
  { id: 'k-kol',    state: 'Karnataka',  location: 'Kolar',       lat: 13.1360, lng: 78.1290, capacity: '68 MWp',            type: 'Solar Project Development' },
  { id: 'k-dav',    state: 'Karnataka',  location: 'Davangere',   lat: 14.4644, lng: 75.9218, capacity: '76.8 MWp',          type: 'Solar Project Development' },
  { id: 'k-mys-1',  state: 'Karnataka',  location: 'Mysore',      lat: 12.2958, lng: 76.6394, capacity: '160 MWp',           type: 'Solar Project Development' },
  { id: 'k-mys-2',  state: 'Karnataka',  location: 'Mysore',      lat: 12.2958, lng: 76.6394, capacity: '210 MWp',           type: 'Solar Project Development' },
  { id: 'k-ben',    state: 'Karnataka',  location: 'Bengaluru',   lat: 12.9716, lng: 77.5946, capacity: '515 MWp',           type: 'Plant Performance Monitoring' },
  // Tamil Nadu — Solar & BESS
  { id: 'tn-thu-1', state: 'Tamil Nadu', location: 'Thoothukudi', lat: 8.7642,  lng: 78.1348, capacity: '225 MWp + 120 MWh', type: 'Solar & BESS Project', phase: 'P-1' },
  { id: 'tn-thu-2', state: 'Tamil Nadu', location: 'Thoothukudi', lat: 8.7642,  lng: 78.1348, capacity: '150 MWp + 80 MWh',  type: 'Solar & BESS Project', phase: 'P-2' },
  { id: 'tn-thu-3', state: 'Tamil Nadu', location: 'Thoothukudi', lat: 8.7642,  lng: 78.1348, capacity: '75 MWp + 40 MWh',   type: 'Solar & BESS Project', phase: 'P-3' },
];

export const TYPE_STYLES: Record<ProjectType, TypeStyle> = {
  'Solar Project Development': {
    fill: '#00B050',
    glow: 'rgba(0,176,80,0.55)',
    label: 'Solar Project Development',
    short: 'Solar',
  },
  'Plant Performance Monitoring': {
    fill: '#F5A623',
    glow: 'rgba(245,166,35,0.55)',
    label: 'Plant Performance Monitoring',
    short: 'Monitoring',
  },
  'Solar & BESS Project': {
    fill: '#0070C0',
    glow: 'rgba(0,112,192,0.55)',
    label: 'Solar & BESS Project',
    short: 'Solar + BESS',
  },
};

/**
 * Manual layout slots so labels never overlap markers or each other.
 * Tweak in tandem with marker positions if you change the project list.
 */
/**
 * Offsets are in SVG units (1920×1080 space) and are scaled at render time.
 * Co-located projects need ≥200 SVG units apart on the same side
 * (at the home-page scale of ~0.29 that yields ≈58 px — just above the
 * label card height of ~55 px). Alternate sides further reduce conflicts.
 */
export const LABEL_LAYOUTS: Record<string, LabelLayout> = {
  'k-gul':    { side: 'left',  offX:  -90, offY:   30 },
  'k-chi':    { side: 'right', offX:  110, offY: -110 },
  'k-kol':    { side: 'right', offX:  100, offY:   40 },
  'k-dav':    { side: 'left',  offX: -120, offY:    0 },
  // Mysore: two projects at identical coords — push one far above, one below
  'k-mys-1':  { side: 'left',  offX: -120, offY: -200 },
  'k-mys-2':  { side: 'left',  offX: -120, offY:   30 },
  'k-ben':    { side: 'right', offX:  130, offY:  160 },
  // Thoothukudi: three projects at identical coords — alternate sides
  'tn-thu-1': { side: 'right', offX:  180, offY: -260 },
  'tn-thu-2': { side: 'right', offX:  180, offY:   10 },
  'tn-thu-3': { side: 'left',  offX: -150, offY:  -80 },
};

/** Aggregate totals shown in the bottom-left stats strip. */
export function computeTotals(projects: Project[]): ProjectTotals {
  let solarMWp = 0;
  let bessMWh = 0;
  for (const p of projects) {
    const m = String(p.capacity).match(/([\d.]+)\s*MWp/);
    if (m) solarMWp += parseFloat(m[1]);
    const h = String(p.capacity).match(/([\d.]+)\s*MWh/);
    if (h) bessMWh += parseFloat(h[1]);
  }
  return { solarMWp, bessMWh, count: projects.length };
}

/** South Indian states whose names should be highlighted on the map.
 *  Names match india-states-2019 NAME_1 property. */
export const SOUTH_STATE_NAMES = new Set<string>([
  'Tamil Nadu',
  'Karnataka',
  'Andhra Pradesh',
  'Telangana',
  'Kerala',
  'Puducherry',
  'Goa',
]);

export const STATE_LABEL_NAMES = new Set<string>([
  'Tamil Nadu',
  'Karnataka',
  'Andhra Pradesh',
  'Telangana',
  'Kerala',
]);

/** Return the display name for a state (names already use proper spacing in 2019 GeoJSON). */
export function formatStateName(raw: string): string {
  return raw;
}
