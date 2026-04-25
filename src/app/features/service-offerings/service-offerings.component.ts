import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-offerings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-offerings.component.html',
  styleUrls: ['./service-offerings.component.scss'],
})
export class ServiceOfferingsComponent implements AfterViewInit, OnDestroy {
  currentSlide = 0;

  slides = [
    { src: 'assets/images/servicesbanner/serban-1.png', alt: 'Service Offerings' },
    { src: 'assets/images/servicesbanner/servban-2.png', alt: 'Advisory & Engineering' },
    { src: 'assets/images/servicesbanner/serban-3.png', alt: 'Execution & Operations' },
  ];

  private timers: ReturnType<typeof setTimeout>[] = [];

  ngAfterViewInit(): void {
    this.timers.push(setTimeout(() => this.currentSlide = 1, 1000));
    this.timers.push(setTimeout(() => this.currentSlide = 2, 2000));

    const chipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('svc-caps--animated');
          chipObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.svc-caps')
      .forEach(el => chipObserver.observe(el));
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length;
  }

  goToSlide(i: number): void {
    this.currentSlide = i;
  }
}
