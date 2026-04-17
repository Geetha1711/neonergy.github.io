import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#main">Skip to main content</a>
    <app-header></app-header>
    <main id="main" class="site-main" role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .skip-link {
      position: absolute;
      top: -100%;
      left: var(--space-4);
      z-index: 9999;
      background: var(--color-primary);
      color: white;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-md);
      font-weight: 600;
      text-decoration: none;
      &:focus { top: var(--space-2); }
    }
    .site-main { min-height: 60vh; }
  `]
})
export class AppComponent {}
