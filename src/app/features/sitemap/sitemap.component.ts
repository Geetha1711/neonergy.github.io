import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SitemapCard {
  icon: string;
  title: string;
  desc: string;
  route: string;
}

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="sitemap-page page-content">

      <div class="sitemap-hero">
        <div class="container">
          <h1>Sitemap</h1>
          <p>A complete overview of all pages on the Neonergy Engineering website.</p>
        </div>
      </div>

      <div class="container sitemap-body">
        <p class="sitemap-intro">
          Use the cards below to navigate directly to any section of our website.
          If you cannot find what you are looking for, please
          <a routerLink="/contact">contact us</a>.
        </p>

        <div class="sitemap-grid">
          @for (card of cards; track card.title) {
            <div class="sitemap-card">
              <div class="sitemap-card__icon">{{ card.icon }}</div>
              <h3 class="sitemap-card__title">{{ card.title }}</h3>
              <p class="sitemap-card__desc">{{ card.desc }}</p>
              <a [routerLink]="card.route" class="sitemap-card__btn">Visit Page →</a>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sitemap-hero {
      background: linear-gradient(135deg, #0b5d3b 0%, #0070C0 100%);
      padding: var(--space-5) 0 var(--space-4);
      h1 { color: white; margin-bottom: var(--space-2); font-size: 2.4rem; font-weight: 800; letter-spacing: 0.01em; }
      p  { color: rgba(255,255,255,0.85); font-size: var(--fs-body-lg); margin: 0; }
    }
    .sitemap-body {
      padding-top: var(--space-7);
      padding-bottom: var(--space-9);
    }
    .sitemap-intro {
      color: var(--color-neutral-600);
      margin-bottom: var(--space-6);
      font-size: var(--fs-body);
      a { color: #0b5d3b; text-decoration: underline; &:hover { color: #0070C0; } }
    }
    .sitemap-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: var(--space-5);
    }
    .sitemap-card {
      display: flex;
      flex-direction: column;
      background: #fff;
      border: 1px solid #dde6ed;
      border-left: 4px solid #0b5d3b;
      border-radius: var(--radius-md);
      padding: var(--space-5);
      transition: box-shadow 0.2s, transform 0.2s;
      &:hover { box-shadow: 0 6px 24px rgba(11,93,59,0.12); transform: translateY(-3px); border-left-color: #0070C0; }
    }
    .sitemap-card__icon {
      font-size: 1.8rem;
      margin-bottom: var(--space-3);
    }
    .sitemap-card__title {
      font-family: 'Manrope', sans-serif;
      font-size: var(--fs-body);
      font-weight: 700;
      color: var(--color-neutral-900);
      margin: 0 0 var(--space-2);
    }
    .sitemap-card__desc {
      font-size: var(--fs-small);
      color: var(--color-neutral-600);
      line-height: 1.6;
      margin: 0 0 var(--space-4);
      flex: 1;
    }
    .sitemap-card__btn {
      display: inline-block;
      font-size: var(--fs-small);
      font-weight: 700;
      color: #0b5d3b;
      text-decoration: none;
      letter-spacing: 0.02em;
      &:hover { color: #0070C0; }
    }
  `]
})
export class SitemapComponent {
  cards: SitemapCard[] = [
    { icon: '🏠', title: 'Home',              route: '/',                  desc: 'Our main landing page — services, business segments, projects, and latest updates.' },
    { icon: '🏢', title: 'About Us',          route: '/about',             desc: 'Learn about our vision, mission, values, and the team driving Neonergy.' },
    { icon: '⚡', title: 'Business Segments', route: '/business-segments', desc: 'Renewable energy, plant electrification, EV charging, urban infra, and more.' },
    { icon: '🛠️', title: 'Services',          route: '/services',          desc: 'Advisory, PMC, EPC, DPR, SCADA, and investment banking services.' },
    { icon: '📍', title: 'Projects',          route: '/projects',          desc: 'Explore our project portfolio — map, key numbers, and site photos.' },
    { icon: '📰', title: 'Media',             route: '/media',             desc: 'News, press releases, and media coverage about Neonergy.' },
    { icon: '💼', title: 'Careers',           route: '/career',            desc: 'Open positions — join a team building the future of clean energy.' },
    { icon: '✉️', title: 'Contact Us',        route: '/contact',           desc: 'Reach our engineering and advisory team by form, email, or phone.' },
    { icon: '📈', title: 'Market',            route: '/market',            desc: 'Renewable energy market intelligence, trends, and policy updates.' },
    { icon: '🔒', title: 'Privacy Policy',    route: '/privacy-policy',   desc: 'How we collect, use, and protect your personal information.' },
    { icon: '📄', title: 'Terms of Use',      route: '/terms-of-use',     desc: 'Terms and conditions governing use of the Neonergy Engineering website.' },
  ];
}
