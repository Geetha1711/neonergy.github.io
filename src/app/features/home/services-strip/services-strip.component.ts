import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface Service {
  title: string;
  icon: string;
  tagline: string;
  slug: string;
}

@Component({
  selector: 'app-services-strip',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './services-strip.component.html',
  styleUrls: ['./services-strip.component.scss'],
})
export class ServicesStripComponent {
  services: Service[] = [
    { title: 'Business Advisory', icon: 'business_center', tagline: 'Market entry, strategic planning, and feasibility', slug: 'business-advisory' },
    { title: 'Technical Advisory', icon: 'engineering', tagline: 'Design review, due diligence, and technical QA', slug: 'technical-advisory' },
    { title: 'Transaction Advisory', icon: 'handshake', tagline: 'M&A, project finance, and deal structuring', slug: 'transaction-advisory' },
    { title: 'Investment Advisory', icon: 'trending_up', tagline: 'Portfolio strategy and renewable investment guidance', slug: 'investment-advisory' },
    { title: 'Investment Banking', icon: 'account_balance', tagline: 'Capital raising and project debt solutions', slug: 'investment-banking' },
    { title: 'PMC / PMU / OE', icon: 'manage_accounts', tagline: 'Project management, monitoring, and owner\'s engineering', slug: 'pmc-pmu-oe' },
    { title: 'DPR', icon: 'description', tagline: 'Detailed project reports for financing and approvals', slug: 'dpr' },
    { title: 'EPC', icon: 'construction', tagline: 'Engineering, procurement, and construction delivery', slug: 'epc' },
    { title: 'SCADA & Digital Solutions', icon: 'monitor', tagline: 'Real-time monitoring, control, and digital platforms', slug: 'scada-digital' },
    { title: 'Solar Performance Monitoring', icon: 'solar_power', tagline: 'Analytics and yield optimization for operating plants', slug: 'solar-monitoring' },
  ];
}
