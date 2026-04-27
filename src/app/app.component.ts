import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent, FooterComponent],
  template: `
    <!-- Global decorative background bubbles — fixed so they persist across all pages -->
    <span class="g-bubble g-bubble--1"></span>
    <span class="g-bubble g-bubble--2"></span>
    <span class="g-bubble g-bubble--3"></span>

    <a class="skip-link" href="#main">Skip to main content</a>
    <app-header></app-header>
    <main id="main" class="site-main" role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>

    <!-- Contact Experts sidebar tab -->
    <a routerLink="/contact" class="contact-sidebar" aria-label="Contact Experts">
      CONTACT EXPERTS
    </a>

    <!-- Scroll to top -->
    @if (showScrollTop) {
      <button class="scroll-top-btn" (click)="scrollToTop()" aria-label="Scroll to top">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#111"
             stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    }
  `,
  styles: [`
    /* ── Global background bubbles ─────────────────────────────────── */
    .g-bubble {
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.07;
    }
    .g-bubble--1 { width: 300px; height: 300px; background: #0070C0; top: -80px; right: -80px; }
    .g-bubble--2 { width: 250px; height: 250px; background: #00B050; bottom: -70px; left: -70px; }
    .g-bubble--3 { width: 150px; height: 150px; background: #F5A623; top: 38%; left: 7%;  }

    .skip-link {
      position: absolute;
      top: -100%;
      left: var(--space-4);
      z-index: 9999;
      background: var(--color-primary-dark);
      color: white;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-md);
      font-weight: 600;
      text-decoration: none;
      &:focus { top: var(--space-2); }
    }
    .site-main { min-height: 60vh; padding-top: 0; }

    .contact-sidebar {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 800;
      background: #F5A623;
      color: #111;
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-decoration: none;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: translateY(-50%) rotate(180deg);
      padding: 20px 10px;
      border-radius: 0 6px 6px 0;
      box-shadow: 2px 0 12px rgba(245,166,35,0.35);
      transition: background 0.2s, box-shadow 0.2s;
      white-space: nowrap;
      &:hover { background: #d4920a; box-shadow: 3px 0 16px rgba(212,146,10,0.5); color: #111; text-decoration: none; }
    }

    .scroll-top-btn {
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      width: 52px;
      height: 52px;
      background: #F5A623;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 900;
      box-shadow: 0 4px 16px rgba(212,146,10,0.45);
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
      &:hover { background: #b87a08; transform: translateY(-3px); box-shadow: 0 6px 20px rgba(212,146,10,0.55); }
    }
  `]
})
export class AppComponent implements OnInit {
  showScrollTop = false;

  constructor(private scroller: ViewportScroller) {
    this.scroller.setOffset([0, 160]);
  }

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
