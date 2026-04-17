import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface Segment {
  title: string;
  icon: string;
  tagline: string;
  slug: string;
}

@Component({
  selector: 'app-segments-grid',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './segments-grid.component.html',
  styleUrls: ['./segments-grid.component.scss'],
})
export class SegmentsGridComponent {
  segments: Segment[] = [
    { title: 'Renewable Energy', icon: 'bolt', tagline: 'Solar, wind, hydro, and hybrid solutions across the lifecycle', slug: 'renewable-energy' },
    { title: 'Plant Electrification & Automation', icon: 'precision_manufacturing', tagline: 'HT/LT systems, PLC/SCADA/DCS, Industry 4.0 plant control', slug: 'plant-electrification' },
    { title: 'EV Charging & Battery Swap', icon: 'ev_station', tagline: 'AC/DC chargers, swap stations, BESS-integrated networks', slug: 'ev-charging' },
    { title: 'Urban Infrastructure', icon: 'location_city', tagline: 'Smart cities, water, waste-to-energy, PPP advisory', slug: 'urban-maritime' },
    { title: 'Maritime & Transport', icon: 'directions_boat', tagline: 'Ports, terminals, inland waterways, multimodal corridors', slug: 'maritime-transport' },
    { title: 'Storage & Hybrid (BESS)', icon: 'battery_charging_full', tagline: 'Solar + wind + BESS integration for grid reliability', slug: 'storage-bess' },
  ];
}
