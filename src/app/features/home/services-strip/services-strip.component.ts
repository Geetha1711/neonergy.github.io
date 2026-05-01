import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SlideInDirective } from '../../../shared/slide-in.directive';

interface Service {
  title: string;
  icon: string;
  tagline: string;
  slug: string;
  color: string;
}

interface ServiceGroup {
  label: string;
  services: Service[];
  cols: number;
}

@Component({
  selector: 'app-services-strip',
  standalone: true,
  imports: [RouterLink, MatIconModule, SlideInDirective],
  templateUrl: './services-strip.component.html',
  styleUrls: ['./services-strip.component.scss'],
})
export class ServicesStripComponent {
  groups: ServiceGroup[] = [
    {
      label: 'Advisory',
      cols: 4,
      services: [
        { title: 'Business Advisory',    icon: 'business_center', tagline: 'Market entry, strategic planning, and feasibility',           slug: 'business-advisory',    color: '#0070C0' },
        { title: 'Technical Advisory',   icon: 'engineering',     tagline: 'Design review, due diligence, and technical QA',             slug: 'technical-advisory',   color: '#0b5d3b' },
        { title: 'Transaction Advisory', icon: 'handshake',       tagline: 'M&A, project finance, and deal structuring',                 slug: 'transaction-advisory', color: '#7c3aed' },
        { title: 'Investment Banking',   icon: 'account_balance', tagline: 'Capital raising and project debt solutions',                 slug: 'investment-banking',   color: '#0891b2' },
      ],
    },
    {
      label: 'Engineering & Delivery',
      cols: 5,
      services: [
        { title: 'PMC / PMU / OE',               icon: 'manage_accounts', tagline: "Project management, monitoring, and owner's engineering", slug: 'pmc-pmu-oe',        color: '#dc2626' },
        { title: 'DPR',                          icon: 'description',     tagline: 'Detailed project reports for financing and approvals',   slug: 'dpr',               color: '#059669' },
        { title: 'EPC',                          icon: 'construction',    tagline: 'Engineering, procurement, and construction delivery',    slug: 'epc',               color: '#d97706' },
        { title: 'SCADA & Digital Solutions',    icon: 'monitor',         tagline: 'Real-time monitoring, control, and digital platforms',  slug: 'scada',             color: '#4f46e5' },
        { title: 'Solar Performance Monitoring', icon: 'solar_power',     tagline: 'Analytics and yield optimization for operating plants',  slug: 'solar-monitoring',  color: '#db2777' },
      ],
    },
  ];
}
