import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SlideInDirective } from '../../../shared/slide-in.directive';
import { TeamMember } from '../../../core/models/team.model';
import { TEAM_MEMBERS } from '../../../core/data/team.data';

@Component({
  selector: 'app-team-preview',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, SlideInDirective],
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.scss'],
})
export class TeamPreviewComponent {
  members: TeamMember[] = TEAM_MEMBERS;
}
