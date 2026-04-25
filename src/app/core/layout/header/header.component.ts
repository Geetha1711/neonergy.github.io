import { Component, HostListener, OnInit, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

interface NavChild { label: string; path: string; fragment?: string; skipActive?: boolean; indent?: boolean; }
interface NavItem {
  label: string;
  path?: string;
  children?: NavChild[];
  isExternal?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatExpansionModule, MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @ViewChildren(MatMenuTrigger) menuTriggers!: QueryList<MatMenuTrigger>;
  mobileMenuOpen = false;
  isMobile = false;
  isScrolled = false;
  isHomePage = false;
  currentPath = '/';

  private heroPages = ['/', '/about', '/business-segments', '/services', '/projects', '/media'];

  constructor(private router: Router) {}

  get isTransparent(): boolean {
    return this.heroPages.some(p => this.currentPath === p || this.currentPath.startsWith(p + '#')) && !this.isScrolled;
  }

  navItems: NavItem[] = [
    {
      label: 'THE COMPANY',
      path: '/about',
      children: [
        { label: 'About Us',   path: '/about', fragment: 'about',          skipActive: true },
        { label: 'Vision & Mission', path: '/about', fragment: 'vision-mission', skipActive: true },
        { label: 'Core Team',        path: '/about', fragment: 'team',           skipActive: true },
      ],
    },
    {
      label: 'BUSINESS SEGMENTS',
      path: '/business-segments',
      children: [
        { label: 'Renewable Energy',                          path: '/business-segments', fragment: 'renewable-energy',      skipActive: true },
        { label: 'Solar Energy',       path: '/business-segments', fragment: 'solar',          skipActive: true, indent: true },
        { label: 'Wind Energy',        path: '/business-segments', fragment: 'wind',           skipActive: true, indent: true },
        { label: 'Hydro Energy',       path: '/business-segments', fragment: 'hydro',          skipActive: true, indent: true },
        { label: 'Green Hydrogen',     path: '/business-segments', fragment: 'green-hydrogen', skipActive: true, indent: true },
        { label: 'Plant Electrification & Process Automation', path: '/business-segments', fragment: 'plant-electrification', skipActive: true },
        { label: 'EV Charging & Battery Swap Solutions',      path: '/business-segments', fragment: 'ev-charging',           skipActive: true },
        { label: 'Urban Infrastructure',                      path: '/business-segments', fragment: 'urban-infrastructure',   skipActive: true },
        { label: 'Maritime & Transportation Infrastructure',  path: '/business-segments', fragment: 'maritime-transport',     skipActive: true },
      ],
    },
    {
      label: 'SERVICES',
      path: '/services',
      children: [
        { label: 'Business Advisory',              path: '/services', fragment: 'business-advisory',   skipActive: true },
        { label: 'Technical Advisory',             path: '/services', fragment: 'technical-advisory',  skipActive: true },
        { label: 'Transaction Advisory',           path: '/services', fragment: 'transaction-advisory',skipActive: true },
        { label: 'Investment Banking',             path: '/services', fragment: 'investment-banking',  skipActive: true },
        { label: 'PMC / PMU / OE',                path: '/services', fragment: 'pmc-pmu-oe',          skipActive: true },
        { label: 'Detailed Project Report (DPR)',  path: '/services', fragment: 'dpr',                 skipActive: true },
        { label: 'EPC Services',                   path: '/services', fragment: 'epc',                 skipActive: true },
        { label: 'SCADA & Digital Solutions',      path: '/services', fragment: 'scada',               skipActive: true },
        { label: 'Solar Performance Monitoring',   path: '/services', fragment: 'solar-monitoring',    skipActive: true },
      ],
    },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'MEDIA', path: '/media' },
    { label: 'SCADA', path: '/scada' },
  ];

  utilityLinks = [
    { label: 'Market', path: '#' },
    { label: 'Career', path: '/career' },
    { label: 'Contact us', path: '/contact' },
  ];

  socialLinks = [
    { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/neonergy-engineering-private-limited/', svgPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { icon: 'youtube', label: 'YouTube', url: 'https://www.youtube.com', svgPath: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' },
    { icon: 'x', label: 'X / Twitter', url: 'https://x.com', svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  ];

  ngOnInit(): void {
    this.checkMobile();
    this.currentPath = this.router.url.split('#')[0].split('?')[0];
    this.isHomePage = this.currentPath === '/';
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      this.currentPath = (e as NavigationEnd).urlAfterRedirects.split('#')[0].split('?')[0];
      this.isHomePage = this.currentPath === '/';
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
    this.menuTriggers?.forEach(t => {
      if (t.menuOpen) {
        t.closeMenu();
        setTimeout(() => (document.activeElement as HTMLElement)?.blur(), 0);
      }
    });
  }

  @HostListener('window:resize')
  checkMobile(): void {
    this.isMobile = window.innerWidth < 1024;
    if (!this.isMobile) this.mobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
