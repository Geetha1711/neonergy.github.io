import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  template: `
    <section class="cta-band">
      <!-- Watermark bubbles -->
      <svg class="cta-band__wm cta-band__wm--left" viewBox="0 0 300 300" aria-hidden="true">
        <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <circle cx="150" cy="150" r="80"  fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/>
        <circle cx="150" cy="150" r="40"  fill="rgba(255,255,255,0.04)"/>
        <!-- solar rays -->
        <line x1="150" y1="10"  x2="150" y2="40"  stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <line x1="150" y1="260" x2="150" y2="290" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <line x1="10"  y1="150" x2="40"  y2="150" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <line x1="260" y1="150" x2="290" y2="150" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <line x1="47"  y1="47"  x2="68"  y2="68"  stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <line x1="232" y1="47"  x2="253" y2="68"  stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <line x1="47"  y1="253" x2="68"  y2="232" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <line x1="232" y1="253" x2="253" y2="232" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
      </svg>
      <svg class="cta-band__wm cta-band__wm--right" viewBox="0 0 260 260" aria-hidden="true">
        <!-- battery shape -->
        <rect x="40" y="70" width="160" height="110" rx="10" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <rect x="185" y="100" width="20" height="50" rx="4" fill="rgba(255,255,255,0.05)"/>
        <rect x="55" y="85" width="50" height="80" rx="4" fill="rgba(255,255,255,0.05)"/>
        <rect x="115" y="85" width="50" height="80" rx="4" fill="rgba(255,255,255,0.04)"/>
        <!-- wind turbine blades -->
        <circle cx="200" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
        <line x1="200" y1="20" x2="200" y2="5"  stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <line x1="200" y1="80" x2="214" y2="93" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <line x1="200" y1="80" x2="186" y2="93" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
      </svg>

      <div class="container cta-band__inner">
        <div class="cta-band__text">
          <h2>Ready to Build Energy Independence?</h2>
          <p>Partner with Neonergy to design and implement sustainable, future-ready energy solutions tailored to your needs.</p>
        </div>
        <a routerLink="/contact" class="cta-band__btn">CONTACT EXPERTS</a>
      </div>
    </section>
  `,
  styles: [`
    .cta-band {
      position: relative;
      background: #F5A623;
      padding: var(--space-5) 0;
      overflow: hidden;
    }
    .cta-band__wm {
      position: absolute;
      opacity: 1;
      pointer-events: none;
    }
    .cta-band__wm--left  { width: 260px; height: 260px; left: -30px; top: 50%; transform: translateY(-50%); }
    .cta-band__wm--right { width: 220px; height: 220px; right: -20px; top: 50%; transform: translateY(-50%); }
    .cta-band__inner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-5);
      flex-wrap: wrap;
    }
    .cta-band__text { flex: 1; }
    .cta-band__text h2 { color: #111111; margin: 0 0 4px; font-size: var(--fs-h3); white-space: nowrap; }
    .cta-band__text p  { color: rgba(0,0,0,0.72); margin: 0; font-size: var(--fs-body); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .cta-band__btn {
      display: inline-block;
      background: #87ceeb;
      color: #0b5d3b;
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: var(--radius-pill);
      white-space: nowrap;
      flex-shrink: 0;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 4px 18px rgba(212,146,10,0.4);
      &:hover { background: #5bb8e8; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.2); text-decoration: none; color: #0b5d3b; }
    }
  `]
})
export class CtaBandComponent {}
