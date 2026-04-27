// src/app/features/footprint-map/footprint-map.types.ts

export type ProjectType =
  | 'Solar Project Development'
  | 'Plant Performance Monitoring'
  | 'Solar & BESS Project';

export interface Project {
  id: string;
  state: string;
  location: string;
  lat: number;
  lng: number;
  /** Display string, e.g. "225 MWp + 120 MWh" */
  capacity: string;
  type: ProjectType;
  /** Optional phase tag, e.g. "P-1" */
  phase?: string;
}

export interface TypeStyle {
  fill: string;
  glow: string;
  label: string;
  short: string;
}

export interface BBox {
  lng: [number, number];
  lat: [number, number];
}

/** A laid-out marker label slot — computed in the template helper. */
export interface LabelLayout {
  side: 'left' | 'right';
  offX: number;
  offY: number;
}

export interface ProjectTotals {
  solarMWp: number;
  bessMWh: number;
  count: number;
}
