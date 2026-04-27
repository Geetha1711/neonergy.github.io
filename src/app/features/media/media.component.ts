import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="uc-page page-content">
      <div class="uc-bg-circles">
        <span class="uc-circle uc-circle--1"></span>
        <span class="uc-circle uc-circle--2"></span>
        <span class="uc-circle uc-circle--3"></span>
      </div>

      <div class="uc-inner">
        <div class="uc-rainbow"></div>

        <div class="uc-icon-wrap">
          <svg viewBox="0 0 96 96" width="96" height="96" fill="none">
            <circle cx="48" cy="48" r="44" stroke="#0070C0" stroke-width="2" stroke-dasharray="8 5" opacity="0.4"/>
            <rect x="18" y="28" width="44" height="32" rx="4" stroke="#0070C0" stroke-width="3"/>
            <polygon points="38,36 38,52 56,44" fill="#00B050"/>
            <line x1="28" y1="68" x2="68" y2="68" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
            <line x1="38" y1="68" x2="38" y2="74" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
            <line x1="58" y1="68" x2="58" y2="74" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
            <line x1="30" y1="74" x2="66" y2="74" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="uc-badge">Coming Soon</div>
        <h1 class="uc-title">Media Centre</h1>
        <p class="uc-lead">Our media hub is being built — press releases, news coverage, videos, and company announcements will be available here shortly.</p>

        <div class="uc-features">
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l6 6v8a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            </div>
            <span>Press Releases</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            </div>
            <span>Videos &amp; Presentations</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--amber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>
            </div>
            <span>News Coverage</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <span>Company Announcements</span>
          </div>
        </div>

        <a routerLink="/" class="uc-back">← Back to Home</a>
      </div>
    </section>
  `,
  styles: [`
    .uc-page {
      min-height: 100vh;
      background: #EAF4FB;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 140px 24px 80px;
    }

    .uc-bg-circles {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .uc-circle {
      position: absolute;
      border-radius: 50%;
      opacity: 0.07;

      &--1 { width: 500px; height: 500px; background: #0070C0; top: -120px; right: -120px; }
      &--2 { width: 400px; height: 400px; background: #00B050; bottom: -100px; left: -100px; }
      &--3 { width: 250px; height: 250px; background: #F5A623; top: 30%; left: 10%; }
    }

    .uc-inner {
      max-width: 640px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      position: relative;
      z-index: 1;
    }

    .uc-rainbow {
      width: 120px;
      height: 4px;
      border-radius: 2px;
      background: linear-gradient(to right, #ff4d4d, #ff8c00, #f0c000, #44dd66, #00bfff, #6a5acd);
      margin-bottom: 8px;
    }

    .uc-icon-wrap {
      animation: ucFloat 3.5s ease-in-out infinite;
    }

    @keyframes ucFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }

    .uc-badge {
      background: linear-gradient(135deg, #0070C0, #0b5d3b);
      color: #fff;
      font-weight: 700;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      padding: 6px 20px;
      border-radius: 40px;
    }

    .uc-title {
      font-family: 'Manrope', sans-serif;
      font-size: 2.6rem;
      font-weight: 900;
      color: #0070C0;
      margin: 0;
      line-height: 1.15;
    }

    .uc-lead {
      font-size: 1rem;
      color: #555;
      line-height: 1.8;
      max-width: 480px;
      margin: 0;
    }

    .uc-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      width: 100%;
      margin-top: 8px;
    }

    .uc-feature {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #fff;
      border-radius: 12px;
      padding: 14px 18px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #333;
      text-align: left;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
    }

    .uc-feature__icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      &--green { background: #eaf7f0; color: #00B050; }
      &--blue  { background: #e8f4fb; color: #0070C0; }
      &--amber { background: #fff8e8; color: #F5A623; }
      &--teal  { background: #e0f4f4; color: #006064; }
    }

    .uc-back {
      font-size: 0.88rem;
      font-weight: 700;
      color: #0070C0;
      text-decoration: none;
      margin-top: 8px;
      &:hover { color: #0b5d3b; text-decoration: underline; }
    }
  `]
})
export class MediaComponent {}
