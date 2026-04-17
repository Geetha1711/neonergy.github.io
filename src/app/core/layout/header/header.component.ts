import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
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
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = false;
  isMobile = false;

  navItems: NavItem[] = [
    {
      label: 'About Us',
      path: '/about',
      children: [
        { label: 'Vision', path: '/about/vision' },
        { label: 'Mission', path: '/about/mission' },
        { label: 'Who We Are', path: '/about/who-we-are' },
        { label: 'Core Team', path: '/about/team' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
    {
      label: 'Business Segment',
      path: '/business-segments',
      children: [
        { label: 'Renewable Energy', path: '/business-segments/renewable-energy' },
        { label: 'Solar', path: '/business-segments/solar' },
        { label: 'Wind', path: '/business-segments/wind' },
        { label: 'Hydro', path: '/business-segments/hydro' },
        { label: 'Plant Electrification & Automation', path: '/business-segments/plant-electrification' },
        { label: 'EV Charging & Swap', path: '/business-segments/ev-charging' },
        { label: 'Urban Infra & Maritime', path: '/business-segments/urban-maritime' },
      ],
    },
    {
      label: 'Service Offering',
      path: '/services',
      children: [
        { label: 'Business Advisory', path: '/services/business-advisory' },
        { label: 'Technical Advisory', path: '/services/technical-advisory' },
        { label: 'Transaction Advisory', path: '/services/transaction-advisory' },
        { label: 'Investment Advisory', path: '/services/investment-advisory' },
        { label: 'Investment Banking', path: '/services/investment-banking' },
        { label: 'PMC/PMU/OE', path: '/services/pmc-pmu-oe' },
        { label: 'DPR', path: '/services/dpr' },
        { label: 'EPC', path: '/services/epc' },
        { label: 'SCADA & Digital Solutions', path: '/services/scada-digital' },
        { label: 'Solar Performance Monitoring', path: '/services/solar-monitoring' },
      ],
    },
    {
      label: 'Projects',
      path: '/projects',
      children: [
        { label: 'Map', path: '/projects' },
        { label: 'Numbers +', path: '/projects' },
        { label: 'Site Photos', path: '/projects' },
      ],
    },
    { label: 'Media', path: '/media' },
    { label: 'SCADA LOGIN', path: '/scada-login' },
  ];

  utilityLinks = [
    { label: 'Market', path: '#' },
    { label: 'Career', path: '/career' },
    { label: 'Contact us', path: '/contact' },
  ];

  socialLinks = [
    { icon: 'linkedin', label: 'LinkedIn', url: '#', svgPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { icon: 'youtube', label: 'YouTube', url: '#', svgPath: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' },
    { icon: 'x', label: 'X / Twitter', url: '#', svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  ];

  ngOnInit(): void {
    this.checkMobile();
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
