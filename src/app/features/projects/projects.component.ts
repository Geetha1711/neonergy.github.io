import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectCards = [
    { cap: '42',    unit: 'MWp', type: 'Solar PV' },
    { cap: '76.8',  unit: 'MWp', type: 'Solar PV' },
    { cap: '210.9', unit: 'MWp', type: 'Solar PV' },
    { cap: '37',    unit: 'MWp', type: 'Solar PV' },
    { cap: '160.5', unit: 'MWp', type: 'Solar PV' },
    { cap: '210',   unit: 'MWp', type: 'Solar PV' },
    { cap: '67',    unit: 'MWp', type: 'Solar PV' },
    { cap: '105',   unit: 'MWH', type: 'BESS' },
  ];

  serviceTable = [
    { service: 'Business Advisory Services',                mwp: '1,045.25', unit: 'MWp' },
    { service: 'Proposal Support & Tariff Estimation',      mwp: '553.25',   unit: 'MWp' },
    { service: 'PPA & Transaction Advisory Services',       mwp: '529.00',   unit: 'MWp' },
    { service: 'Detailed Project Report Preparation',       mwp: '1,045.25', unit: 'MWp' },
    { service: 'Debt Syndication Services',                 mwp: '529.00',   unit: 'MWp' },
    { service: 'Bid Process Management',                    mwp: '113.80',   unit: 'MWp' },
    { service: 'Engineering Services',                      mwp: '1,045.25', unit: 'MWp' },
    { service: 'BESS Development',                          mwp: '240.00',   unit: 'MWH' },
    { service: 'Procurement Support Services',              mwp: '968.45',   unit: 'MWp' },
    { service: 'Asset Performance Monitoring (O&M)',        mwp: '516',      unit: 'MWp' },
  ];
}
