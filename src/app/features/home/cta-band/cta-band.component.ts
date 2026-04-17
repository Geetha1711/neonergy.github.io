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
          <h2>Have a project in mind?</h2>
          <p>Whether you're at feasibility stage or scaling an operating portfolio, we can help.</p>
        </div>
        <a mat-flat-button routerLink="/contact" class="cta-band__btn">
          Talk to us <mat-icon>arrow_forward</mat-icon>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .cta-band {
      background: var(--color-primary);
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
    .cta-band__text p { color: rgba(255,255,255,0.85); margin: 0; font-size: var(--fs-body-lg); }
    .cta-band__btn {
      background: white !important;
      color: var(--color-primary) !important;
      font-weight: 700;
      white-space: nowrap;
      flex-shrink: 0;
    }
  `]
})
export class CtaBandComponent {}
