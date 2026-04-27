import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scada-login',
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
            <circle cx="48" cy="48" r="44" stroke="#5c1a5c" stroke-width="2" stroke-dasharray="8 5" opacity="0.4"/>
            <rect x="14" y="20" width="68" height="44" rx="5" stroke="#5c1a5c" stroke-width="3"/>
            <line x1="28" y1="64" x2="28" y2="74" stroke="#5c1a5c" stroke-width="3" stroke-linecap="round"/>
            <line x1="68" y1="64" x2="68" y2="74" stroke="#5c1a5c" stroke-width="3" stroke-linecap="round"/>
            <line x1="20" y1="74" x2="76" y2="74" stroke="#5c1a5c" stroke-width="3" stroke-linecap="round"/>
            <rect x="24" y="30" width="18" height="12" rx="2" fill="#e0f4f4" stroke="#006064" stroke-width="1.5"/>
            <rect x="50" y="30" width="18" height="12" rx="2" fill="#e8f4fb" stroke="#0070C0" stroke-width="1.5"/>
            <polyline points="26,48 32,42 38,46 44,38 50,44 56,36 62,40 68,34" stroke="#00B050" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="48" cy="48" r="3" fill="#F5A623"/>
          </svg>
        </div>

        <div class="uc-badge">Integration Portal</div>
        <h1 class="uc-title">SCADA Remote Systems</h1>
        <p class="uc-lead">This page is for integration with our remote systems. Secure access to monitoring dashboards, real-time data feeds, and control interfaces will be available here.</p>

        <div class="uc-features">
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <span>Real-Time Monitoring</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span>Secure Access Controls</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <span>Live Data Feeds</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--amber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <span>Remote Control Interface</span>
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

      &--1 { width: 500px; height: 500px; background: #5c1a5c; top: -120px; left: -120px; }
      &--2 { width: 400px; height: 400px; background: #0070C0; bottom: -100px; right: -100px; }
      &--3 { width: 250px; height: 250px; background: #00B050; top: 35%; right: 8%; }
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
      background: linear-gradient(135deg, #5c1a5c, #0070C0);
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
      color: #5c1a5c;
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

      &--purple { background: #f4e8f4; color: #5c1a5c; }
      &--blue   { background: #e8f4fb; color: #0070C0; }
      &--green  { background: #eaf7f0; color: #00B050; }
      &--amber  { background: #fff8e8; color: #F5A623; }
    }

    .uc-back {
      font-size: 0.88rem;
      font-weight: 700;
      color: #5c1a5c;
      text-decoration: none;
      margin-top: 8px;
      &:hover { color: #0070C0; text-decoration: underline; }
    }
  `]
})
export class ScadaLoginComponent {}
