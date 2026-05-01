import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBase, Slide } from '../../core/utils/carousel.base';
import { observeScrollIn } from '../../core/utils/scroll-animate.util';

@Component({
  selector: 'app-business-segments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-segments.component.html',
  styleUrls: ['./business-segments.component.scss'],
})
export class BusinessSegmentsComponent extends CarouselBase implements AfterViewInit {
  slides: Slide[] = [
    { src: 'assets/images/businessseg-1.png', alt: 'Renewable Energy & Green Hydrogen' },
    { src: 'assets/images/businessseg-2.png', alt: 'EV Charging & Smart Grid' },
    { src: 'assets/images/businessseg-3.png', alt: 'Maritime & Urban Infrastructure' },
  ];

  ngAfterViewInit(): void {
    observeScrollIn('.bs-detail-card__caps, .bs-re-card__caps', 'bs-caps--visible', 0.2);
    // Auto-advance through all slides once on load
    this.timers.push(setTimeout(() => (this.currentSlide = 1), 1000));
    this.timers.push(setTimeout(() => (this.currentSlide = 2), 2000));
  }
}
