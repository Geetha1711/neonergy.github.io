import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideInDirective } from '../../../shared/slide-in.directive';

interface Update {
  tag: string;
  emoji: string;
  title: string;
  desc: string;
  route: string;
  fragment?: string;
  bg: string;
  accent: string;
}

@Component({
  selector: 'app-latest-updates',
  standalone: true,
  imports: [RouterLink, SlideInDirective],
  templateUrl: './latest-updates.component.html',
  styleUrls: ['./latest-updates.component.scss'],
})
export class LatestUpdatesComponent {
  updates: Update[] = [
    { tag: 'Portfolio Update', emoji: '☀️', title: '1,045 MWp Advisory Portfolio — Karnataka & Tamil Nadu', desc: 'Neonergy\'s advisory and engineering portfolio spans 1,045 MWp across solar project development, DPR, debt syndication, and performance monitoring.', route: '/projects', bg: '#eaf7f0', accent: '#0b5d3b' },
    { tag: 'Project Update', emoji: '🔋', title: 'Solar + BESS Projects Underway in Thoothukudi', desc: '450 MWp of solar paired with 240 MWH of battery storage across three projects — advancing grid-scale energy independence in Tamil Nadu.', route: '/projects', bg: '#e8f4fb', accent: '#0070C0' },
    { tag: 'Careers', emoji: '💼', title: 'We\'re Hiring — Associate Manager & SCADA Engineer', desc: 'Neonergy is looking for transaction advisory and solar SCADA monitoring professionals to join our Bengaluru team. Apply via the Careers page.', route: '/career', fragment: 'open-positions', bg: '#fff8e8', accent: '#b45309' },
  ];
}
