import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBase, Slide } from '../../core/utils/carousel.base';
import { observeScrollIn } from '../../core/utils/scroll-animate.util';

@Component({
  selector: 'app-service-offerings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-offerings.component.html',
  styleUrls: ['./service-offerings.component.scss'],
})
export class ServiceOfferingsComponent extends CarouselBase implements AfterViewInit {
  slides: Slide[] = [
    { src: 'assets/images/servicesbanner/serban-1.png', alt: 'Service Offerings' },
    { src: 'assets/images/servicesbanner/servban-2.png', alt: 'Advisory & Engineering' },
    { src: 'assets/images/servicesbanner/serban-3.png', alt: 'Execution & Operations' },
  ];

  ngAfterViewInit(): void {
    this.timers.push(setTimeout(() => (this.currentSlide = 1), 1000));
    this.timers.push(setTimeout(() => (this.currentSlide = 2), 2000));
    observeScrollIn('.svc-caps', 'svc-caps--animated', 0.2);
  }
}
