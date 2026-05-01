import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlideInDirective } from '../../../shared/slide-in.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterLink, SlideInDirective],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
  stats = [
    { num: '1045 MWp', label: 'Total Projects under Development' },
    { num: '240 MWH',  label: 'BESS under Development' },
    { num: '516 MWp',  label: 'Asset Performance Monitoring (O&M)' },
  ];
}
