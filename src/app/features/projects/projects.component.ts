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
    { service: 'Investment Planning & Project Advisory Services',           mwp: '1,045.25' },
    { service: 'Proposal Support & Tariff Estimation',                     mwp: '553.25'   },
    { service: 'PPA & Transaction Advisory Services',                      mwp: '594.00'   },
    { service: 'Detailed Project Report Preparation',                      mwp: '1,045.25' },
    { service: 'Debt Syndication Services',                                mwp: '529.00'   },
    { service: 'Bid Process Management (Identification of EPC Contractor)', mwp: '563.80'   },
    { service: 'Engineering Services',                                      mwp: '1,045.25' },
    { service: 'Battery Energy Storage System Development',                mwp: '240.00'   },
    { service: 'Procurement Support Services',                             mwp: '968.45'   },
    { service: 'Project Management Consultancy',                           mwp: '1,055.25' },
    { service: 'O&M Services',                                             mwp: '516.25'   },
  ];
}
