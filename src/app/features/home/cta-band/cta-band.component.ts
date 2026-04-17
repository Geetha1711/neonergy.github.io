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
      <div class="container cta-band__inner">
        <div class="cta-band__text">
          <h2>Ready to Build Energy Independence?</h2>
          <p>Partner with Neonergy to design and implement sustainable, future-ready energy solutions tailored to your needs.</p>
        </div>
        <a mat-flat-button routerLink="/contact" class="cta-band__btn">
          Contact Experts <mat-icon>arrow_forward</mat-icon>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .cta-band {
      background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%);
      color: white;
      padding: var(--space-9) 0;
    }
    .cta-band__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-6);
      flex-wrap: wrap;
    }
    .cta-band__text h2 { color: white; margin: 0 0 var(--space-2); }
    .cta-band__text p { color: rgba(255,255,255,0.85); margin: 0; font-size: var(--fs-body-lg); max-width: 600px; }
    .cta-band__btn {
      background: white !important;
      color: var(--color-primary-dark) !important;
      font-weight: 700;
      white-space: nowrap;
      flex-shrink: 0;
    }
  `]
})
export class CtaBandComponent {}
