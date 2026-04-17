import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent, FooterComponent, MatIconModule],
  template: `
    <a class="skip-link" href="#main">Skip to main content</a>
    <app-header></app-header>
    <main id="main" class="site-main" role="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>

    <!-- Floating contact ribbon -->
    <a routerLink="/contact" class="float-contact" aria-label="Contact Experts">CONTACT EXPERTS</a>

    <!-- Scroll to top -->
    @if (showScrollTop) {
      <button class="scroll-top-btn" (click)="scrollToTop()" aria-label="Scroll to top">
        <mat-icon>keyboard_arrow_up</mat-icon>
      </button>
    }
  `,
  styles: [`
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
    .site-main { min-height: 60vh; }

    .float-contact {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      transform-origin: right center;
      background: var(--color-primary-dark);
      color: white;
      padding: 8px 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-decoration: none;
      z-index: 900;
      border-radius: 4px 4px 0 0;
      white-space: nowrap;
      transition: background 0.2s;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      right: -1px;
      &:hover { background: var(--color-primary-darker); color: white; text-decoration: none; }
    }

    .scroll-top-btn {
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      width: 44px;
      height: 44px;
      background: var(--color-primary-dark);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 900;
      box-shadow: var(--shadow-md);
      transition: background 0.2s, transform 0.2s;
      &:hover { background: var(--color-primary-darker); transform: translateY(-2px); }
    }
  `]
})
export class AppComponent implements OnInit {
  showScrollTop = false;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
