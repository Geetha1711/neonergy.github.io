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
    { name: 'Balakumaran J', role: 'Chief Business Officer', bio: 'Two decades of renewable energy leadership across advisory, EPC, and project financing in India.', linkedIn: '#', photo: 'assets/images/team/bala.jpg' },
    { name: 'Naveen M', role: 'RE Business Unit Head', bio: 'Led large-scale solar and wind projects from feasibility through commissioning across South India.', linkedIn: '#', photo: 'assets/images/team/naveen.jpg' },
    { name: 'Sijith K', role: 'Head, Contracts', bio: 'Specialist in project contracting, risk allocation, and procurement for energy infrastructure.', linkedIn: '#', photo: 'assets/images/team/sijith.jpg' },
    { name: 'Shreya Desai', role: 'Legal Counsel', bio: 'Energy sector legal expert focusing on project finance, regulatory compliance, and agreements.', linkedIn: '#', photo: 'assets/images/team/reddy.jpg' },
  ];
}
