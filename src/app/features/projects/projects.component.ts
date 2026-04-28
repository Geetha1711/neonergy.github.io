import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FootprintMapComponent } from '../footprint-map/footprint-map.component';
import { HeroIntroComponent } from '../hero-intro/hero-intro.component';

// Star colours matching the reference JPEG
const COLORS = {
  solar:   '#44BB44',   // green  — Solar Project Development
  ppm:     '#00BCD4',   // cyan   — Plant Performance Monitoring
  bess:    '#FFD740',   // amber  — Solar & BESS Project
};

// Positions are % of the JPEG image dimensions (928 × 1222 px)
// Calibrated using two anchor points:
//   Gulbarga  (17.33°N, 76.83°E) ≈ x 30.5 %, y 57 %
//   Thoothukudi (8.76°N, 78.13°E) ≈ x 35 %, y 86 %
export interface MapPin {
  id:        number;
  location:  string;
  capacity:  string;
  type:      string;
  color:     string;
  x:         number;   // left %
  y:         number;   // top  %
  labelSide: 'left' | 'right';
}

export const MAP_PINS: MapPin[] = [
  // ── Karnataka: Solar Project Development ──────────────────────────────────
  { id:  1, location: 'Gulbarga',    capacity: '37 MWp',                   type: 'Solar Project Development',    color: COLORS.solar, x: 30.5, y: 57.0, labelSide: 'right' },
  { id:  2, location: 'Davangere',   capacity: '76.8 MWp',                 type: 'Solar Project Development',    color: COLORS.solar, x: 28.5, y: 70.5, labelSide: 'right' },
  { id:  3, location: 'Mysore',      capacity: '160 MWp',                  type: 'Solar Project Development',    color: COLORS.solar, x: 30.0, y: 74.5, labelSide: 'left'  },
  { id:  4, location: 'Mysore',      capacity: '210 MWp',                  type: 'Solar Project Development',    color: COLORS.solar, x: 29.0, y: 76.5, labelSide: 'left'  },
  { id:  5, location: 'Chintamani',  capacity: '42 MWp',                   type: 'Solar Project Development',    color: COLORS.solar, x: 36.5, y: 73.5, labelSide: 'right' },
  { id:  6, location: 'Kolar',       capacity: '68 MWp',                   type: 'Solar Project Development',    color: COLORS.solar, x: 37.0, y: 75.0, labelSide: 'right' },
  // ── Karnataka: Plant Performance Monitoring ───────────────────────────────
  { id:  7, location: 'Bengaluru',   capacity: '515 MWp',                  type: 'Plant Performance Monitoring', color: COLORS.ppm,   x: 33.5, y: 73.0, labelSide: 'left'  },
  // ── Tamil Nadu: Solar & BESS ──────────────────────────────────────────────
  { id:  8, location: 'Thoothukudi', capacity: '225 MWp + 120MWH  (P-1)', type: 'Solar & BESS Project',         color: COLORS.bess,  x: 35.5, y: 86.0, labelSide: 'right' },
  { id:  9, location: 'Thoothukudi', capacity: '150 MWp + 80MWH  (P-2)',  type: 'Solar & BESS Project',         color: COLORS.bess,  x: 34.5, y: 87.8, labelSide: 'right' },
  { id: 10, location: 'Thoothukudi', capacity: '75 MWp + 40MWH  (P-3)',   type: 'Solar & BESS Project',         color: COLORS.bess,  x: 34.0, y: 89.5, labelSide: 'right' },
];

export const LEGEND = [
  { type: 'Plant Performance Monitoring', color: COLORS.ppm   },
  { type: 'Solar Project Development',    color: COLORS.solar  },
  { type: 'Solar & BESS Project',         color: COLORS.bess   },
];

// 5-pointed star path (outer r=10, inner r=4)
export const STAR_PATH =
  'M0,-10 L2.94,-4.05 L9.51,-3.09 L4.75,1.55 L5.88,8.09 ' +
  'L0,5 L-5.88,8.09 L-4.75,1.55 L-9.51,-3.09 L-2.94,-4.05 Z';

interface PosterSlide {
  type: 'hero-intro' | 'image' | 'footprint';
  src:  string;
  alt:  string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, FootprintMapComponent, HeroIntroComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  // ── Poster carousel ────────────────────────────────────────────────────────
  currentSlide = 0;

  slides: PosterSlide[] = [
    { type: 'hero-intro', src: '', alt: 'Neonergy hero intro animation' },
    { type: 'image',      src: 'assets/images/projects/ongoingprojects.png', alt: 'Ongoing solar projects' },
    { type: 'footprint',  src: '', alt: 'Animated India footprint map' },
  ];

  nextSlide(): void { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  prevSlide(): void { this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length; }
  goToSlide(i: number): void { this.currentSlide = i; }

  // ── Service summary table ──────────────────────────────────────────────────
  serviceTable = [
    { service: 'Business Advisory Services',           mwp: '1,045.25', unit: 'MWp' },
    { service: 'Proposal Support & Tariff Estimation', mwp: '553.25',   unit: 'MWp' },
    { service: 'PPA & Transaction Advisory Services',  mwp: '529.00',   unit: 'MWp' },
    { service: 'Detailed Project Report Preparation',  mwp: '1,045.25', unit: 'MWp' },
    { service: 'Debt Syndication Services',            mwp: '529.00',   unit: 'MWp' },
    { service: 'Bid Process Management',               mwp: '113.80',   unit: 'MWp' },
    { service: 'Engineering Services',                 mwp: '1,045.25', unit: 'MWp' },
    { service: 'BESS Development',                     mwp: '240.00',   unit: 'MWH' },
    { service: 'Procurement Support Services',         mwp: '968.45',   unit: 'MWp' },
    { service: 'Asset Performance Monitoring (O&M)',   mwp: '516',      unit: 'MWp' },
  ];
}
