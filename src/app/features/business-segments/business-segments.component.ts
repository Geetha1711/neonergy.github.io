import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-segments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-segments.component.html',
  styleUrls: ['./business-segments.component.scss'],
})
export class BusinessSegmentsComponent implements AfterViewInit, OnDestroy {
  currentSlide = 0;

  slides = [
    { src: 'assets/images/businessseg-1.png', alt: 'Renewable Energy & Green Hydrogen' },
    { src: 'assets/images/businessseg-2.png', alt: 'EV Charging & Smart Grid' },
    { src: 'assets/images/businessseg-3.png', alt: 'Maritime & Urban Infrastructure' },
  ];

  private timers: ReturnType<typeof setTimeout>[] = [];

  ngAfterViewInit(): void {
    // Chip scroll-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('bs-caps--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.bs-detail-card__caps, .bs-re-card__caps')
      .forEach(el => observer.observe(el));

    // Auto-advance through all slides once on load (1s between each)
    this.timers.push(setTimeout(() => this.currentSlide = 1, 1000));
    this.timers.push(setTimeout(() => this.currentSlide = 2, 2000));
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
