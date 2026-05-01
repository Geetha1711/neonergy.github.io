import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselBase, Slide } from '../../core/utils/carousel.base';
import { observeScrollIn } from '../../core/utils/scroll-animate.util';
import { TeamMember, Client } from '../../core/models/team.model';
import { TEAM_MEMBERS, CLIENTS } from '../../core/data/team.data';
import { SlideInDirective } from '../../shared/slide-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SlideInDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends CarouselBase implements AfterViewInit {
  slides: Slide[] = [
    { src: 'assets/images/thecompany-1.png', alt: 'Neonergy Company' },
    { src: 'assets/images/thecompany-2.jpg', alt: 'The Company' },
    { src: 'assets/images/thecompany-3.jpeg', alt: 'The Company' },
  ];

  stats = [
    { num: '1045 MWp', label: 'Total Projects under Development' },
    { num: '240 MWH',  label: 'BESS under Development' },
    { num: '516 MWp',  label: 'Asset Performance Monitoring (O&M)' },
  ];

  team: TeamMember[] = TEAM_MEMBERS;
  clients: Client[]  = CLIENTS;

  ngAfterViewInit(): void {
    this.autoSlideInterval = setInterval(() => {
      if (this.currentSlide < this.slides.length - 1) {
        this.nextSlide();
      } else {
        clearInterval(this.autoSlideInterval!);
        this.autoSlideInterval = null;
      }
    }, 4000);
    observeScrollIn('.about-stat', 'about-stat--visible');
  }
}
