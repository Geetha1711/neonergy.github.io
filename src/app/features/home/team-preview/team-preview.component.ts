import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
  photo: string;
}

@Component({
  selector: 'app-team-preview',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.scss'],
})
export class TeamPreviewComponent {
  members: TeamMember[] = [
    { name: 'Balakumaran J',     role: 'Chief Business Officer',  bio: '20+ years across EPC, Consulting & Investment Banking in Renewable and Conventional Power.', linkedIn: 'https://www.linkedin.com/in/balakumaran-jayaprakasam/', photo: 'assets/images/team/bala.jpg' },
    { name: 'Naveen M',          role: 'RE – Business Unit Head', bio: '17+ years in solar EPC and project development, delivering over 3 GW of solar projects across India.', linkedIn: 'https://www.linkedin.com/in/naveen-m-b2514220/', photo: 'assets/images/team/naveen.jpg' },
    { name: 'Sijith K',          role: 'Head – Contracts',        bio: '24+ years across solar and wind sectors, contributing to 3 GW+ solar and 1.5 GW wind projects.', linkedIn: 'https://www.linkedin.com/company/neonergy-engineering-private-limited/', photo: 'assets/images/team/sijith.jpg' },
    { name: 'Shreya Desai',      role: 'Legal Counsel',           bio: 'Nearly two decades advising on M&A, private equity, foreign investments & capital markets.', linkedIn: 'https://www.linkedin.com/in/shreya-desai-68baa9b6/', photo: 'assets/images/team/shreya.jpg' },
  ];
}
