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
    { tag: 'Neonergy Updates', emoji: '☀️', title: 'Solar Project Commissioned in Karnataka', desc: 'Neonergy successfully commissioned a utility-scale solar project enhancing clean energy adoption across the region.' },
    { tag: 'Industry News', emoji: '📋', title: 'Renewable Energy Policy Updates – India 2026', desc: 'Key regulatory changes shaping the future of renewable investments and infrastructure development in India.' },
    { tag: 'Neonergy Updates', emoji: '🔋', title: 'BESS Integration for Industrial Client', desc: 'Advanced battery storage solutions deployed to improve energy efficiency and reliability for a major industrial client.' },
  ];
}
