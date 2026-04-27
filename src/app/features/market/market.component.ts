import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-market',
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
            <circle cx="48" cy="48" r="44" stroke="#00B050" stroke-width="2" stroke-dasharray="8 5" opacity="0.4"/>
            <path d="M48 20 a28 28 0 1 1 0 56 a28 28 0 0 1 0-56" stroke="#0070C0" stroke-width="3" stroke-linecap="round"/>
            <path d="M36 60 L36 44 M44 60 L44 34 M52 60 L52 40 M60 60 L60 28" stroke="#00B050" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M33 46 Q42 28 52 38 Q60 46 66 30" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <circle cx="66" cy="30" r="4" fill="#F5A623"/>
            <circle cx="48" cy="48" r="6" fill="#0070C0" opacity="0.15"/>
          </svg>
        </div>

        <div class="uc-badge">Coming Soon</div>
        <h1 class="uc-title">Market Intelligence</h1>
        <p class="uc-lead">We're building a comprehensive hub for renewable energy market insights, trends, and policy updates. Check back soon.</p>

        <div class="uc-features">
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
            </div>
            <span>Solar &amp; Wind Market Updates</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <span>Policy &amp; Regulatory News</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--amber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <span>Investment &amp; Financing Trends</span>
          </div>
          <div class="uc-feature">
            <div class="uc-feature__icon uc-feature__icon--teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            </div>
            <span>BESS &amp; Storage Insights</span>
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

      &--1 { width: 500px; height: 500px; background: #00B050; top: -120px; left: -120px; }
      &--2 { width: 400px; height: 400px; background: #0070C0; bottom: -100px; right: -100px; }
      &--3 { width: 250px; height: 250px; background: #F5A623; top: 40%; left: 70%; }
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
      background: linear-gradient(135deg, #0b5d3b, #0070C0);
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
      color: #0b5d3b;
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
      color: #0b5d3b;
      text-decoration: none;
      margin-top: 8px;
      &:hover { color: #0070C0; text-decoration: underline; }
    }
  `]
})
export class MarketComponent {}
