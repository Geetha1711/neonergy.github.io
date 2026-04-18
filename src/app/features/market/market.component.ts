import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="market-page page-content">
      <div class="market-page__inner">
        <div class="market-page__icon" aria-hidden="true">
          <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#F5A623" stroke-width="2" stroke-dasharray="6 4"/>
            <path d="M26 52 L26 36 M33 52 L33 28 M40 52 L40 32 M47 52 L47 24 M54 52 L54 30"
                  stroke="#0B5D3B" stroke-width="3" stroke-linecap="round"/>
            <path d="M24 38 Q32 20 40 30 Q48 40 56 22"
                  stroke="#F5A623" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <circle cx="56" cy="22" r="3" fill="#F5A623"/>
          </svg>
        </div>

        <div class="market-page__badge">Under Construction</div>
        <h1 class="market-page__title">Market Intelligence</h1>
        <p class="market-page__lead">
          Latest renewable energy news, market trends, policy updates, and industry insights will be loaded here.
        </p>

        <div class="market-page__features">
          <div class="market-page__feature">
            <span class="market-page__feature-icon">☀️</span>
            <span>Solar &amp; Wind market updates</span>
          </div>
          <div class="market-page__feature">
            <span class="market-page__feature-icon">📋</span>
            <span>Renewable energy policy &amp; regulatory news</span>
          </div>
          <div class="market-page__feature">
            <span class="market-page__feature-icon">📈</span>
            <span>Investment &amp; financing trends</span>
          </div>
          <div class="market-page__feature">
            <span class="market-page__feature-icon">🔋</span>
            <span>BESS &amp; storage technology insights</span>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .market-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-9) var(--container-padding-x);
      background:
        radial-gradient(ellipse at 20% 30%, rgba(11,93,59,0.08), transparent 55%),
        radial-gradient(ellipse at 80% 70%, rgba(212,146,10,0.07), transparent 55%),
        var(--color-neutral-50);
    }

    .market-page__inner {
      max-width: 620px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-5);
    }

    .market-page__icon { margin-bottom: var(--space-2); }

    .market-page__badge {
      display: inline-block;
      background: #F5A623;
      color: #111;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: var(--fs-small);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 5px 18px;
      border-radius: var(--radius-pill);
    }

    .market-page__title {
      font-family: 'Inter', sans-serif;
      font-size: var(--fs-h1);
      font-weight: 700;
      color: var(--color-primary-dark);
      margin: 0;
    }

    .market-page__lead {
      font-size: var(--fs-body-lg);
      color: var(--color-neutral-600);
      line-height: 1.7;
      max-width: 500px;
      margin: 0;
    }

    .market-page__features {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      width: 100%;
      margin-top: var(--space-2);
    }

    .market-page__feature {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      background: white;
      border: 1px solid var(--color-neutral-100);
      border-left: 4px solid #F5A623;
      border-radius: var(--radius-md);
      padding: var(--space-4) var(--space-5);
      font-size: var(--fs-body);
      color: var(--color-neutral-900);
      font-family: 'Inter', sans-serif;
      text-align: left;
    }

    .market-page__feature-icon { font-size: 1.3rem; flex-shrink: 0; }

    .market-page__back {
      margin-top: var(--space-4);
      font-size: var(--fs-small);
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      color: var(--color-primary-dark);
      text-decoration: none;
      &:hover { color: var(--color-primary); text-decoration: underline; }
    }
  `]
})
export class MarketComponent {}
