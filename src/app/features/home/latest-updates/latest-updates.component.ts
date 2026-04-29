import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Update {
  tag: string;
  emoji: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-latest-updates',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './latest-updates.component.html',
  styleUrls: ['./latest-updates.component.scss'],
})
export class LatestUpdatesComponent {
  updates: Update[] = [
    { tag: 'Portfolio Update', emoji: '☀️', title: '1,045 MWp Advisory Portfolio — Karnataka & Tamil Nadu', desc: 'Neonergy\'s advisory and engineering portfolio spans 1,045 MWp across solar project development, DPR, debt syndication, and performance monitoring.' },
    { tag: 'Project Update', emoji: '🔋', title: 'Solar + BESS Projects Underway in Thoothukudi', desc: '450 MWp of solar paired with 240 MWH of battery storage across three projects — advancing grid-scale energy independence in Tamil Nadu.' },
    { tag: 'Careers', emoji: '💼', title: 'We\'re Hiring — Associate Manager & SCADA Engineer', desc: 'Neonergy is looking for transaction advisory and solar SCADA monitoring professionals to join our Bengaluru team. Apply via the Careers page.' },
  ];
}
