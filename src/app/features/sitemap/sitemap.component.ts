import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface SitemapCard {
  icon: string;
  title: string;
  desc: string;
  route: string;
  external?: boolean;
}

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
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
            <mat-card class="sitemap-card">
              <div class="sitemap-card__icon">{{ card.icon }}</div>
              <mat-card-header>
                <mat-card-title>{{ card.title }}</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>{{ card.desc }}</p>
              </mat-card-content>
              <mat-card-actions>
                <a mat-flat-button [routerLink]="card.route" class="sitemap-card__btn">Visit Page</a>
              </mat-card-actions>
            </mat-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sitemap-hero {
      background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%);
      padding: var(--space-8) 0 var(--space-7);
      h1 { color: white; margin-bottom: var(--space-2); }
      p  { color: rgba(255,255,255,0.8); font-size: var(--fs-body-lg); margin: 0; }
    }
    .sitemap-body {
      padding-top: var(--space-7);
      padding-bottom: var(--space-9);
    }
    .sitemap-intro {
      color: var(--color-neutral-600);
      margin-bottom: var(--space-6);
      font-size: var(--fs-body);
      a { color: var(--color-primary-dark); text-decoration: underline; &:hover { color: #F5A623; } }
    }
    .sitemap-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: var(--space-5);
    }
    .sitemap-card {
      display: flex;
      flex-direction: column;
      border-left: 4px solid var(--color-primary-dark) !important;
      border-radius: var(--radius-md) !important;
      transition: box-shadow 0.2s, transform 0.2s;
      &:hover { box-shadow: 0 6px 24px rgba(11,93,59,0.12) !important; transform: translateY(-3px); }
    }
    .sitemap-card__icon { font-size: 1.8rem; padding: var(--space-4) var(--space-4) 0; }
    mat-card-title { font-family: 'Lora', Georgia, serif !important; color: var(--color-neutral-900) !important; font-size: 1rem !important; }
    mat-card-content p { color: var(--color-neutral-600); font-size: var(--fs-small); line-height: 1.6; margin: 0; }
    mat-card-actions { margin-top: auto; padding: var(--space-3) var(--space-4) var(--space-4) !important; }
    .sitemap-card__btn {
      background: var(--color-primary-dark) !important;
      color: white !important;
      font-size: 0.8rem !important;
      font-weight: 700 !important;
      letter-spacing: 0.04em;
    }
  `]
})
export class SitemapComponent {
  cards: SitemapCard[] = [
    { icon: '🏠', title: 'Home',             route: '/',                    desc: 'Our main landing page — services, business segments, projects, and latest updates.' },
    { icon: '🏢', title: 'About Us',         route: '/about',               desc: 'Learn about our vision, mission, values, and the team driving Neonergy.' },
    { icon: '⚡', title: 'Business Segments',route: '/business-segments',   desc: 'Renewable energy, plant electrification, EV charging, urban infra, and more.' },
    { icon: '🛠️', title: 'Services',         route: '/services',            desc: 'Advisory, PMC, EPC, DPR, SCADA, and investment banking services.' },
    { icon: '📍', title: 'Projects',         route: '/projects',            desc: 'Explore our project portfolio — map, key numbers, and site photos.' },
    { icon: '📰', title: 'Media',            route: '/media',               desc: 'News, press releases, and media coverage about Neonergy.' },
    { icon: '💼', title: 'Careers',          route: '/career',              desc: 'Open positions — join a team building the future of clean energy.' },
    { icon: '✉️', title: 'Contact Us',       route: '/contact',             desc: 'Reach our engineering and advisory team by form, email, or phone.' },
    { icon: '📈', title: 'Market',           route: '/market',              desc: 'Renewable energy market intelligence, trends, and policy updates.' },
    { icon: '🔒', title: 'Privacy Policy',   route: '/privacy-policy',      desc: 'How we collect, use, and protect your personal information.' },
    { icon: '📄', title: 'Terms of Use',     route: '/terms-of-use',        desc: 'Terms and conditions governing use of the Neonergy Engineering website.' },
  ];
}
