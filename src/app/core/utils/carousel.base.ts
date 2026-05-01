import { Directive, OnDestroy } from '@angular/core';

export interface Slide {
  src: string;
  alt: string;
}

/**
 * Base class for components that need a simple carousel (prev/next/dot nav).
 * Subclasses declare `slides` and call `super.ngOnDestroy()` if they add
 * their own `ngOnDestroy`.
 */
@Directive()
export abstract class CarouselBase implements OnDestroy {
  currentSlide = 0;
  abstract slides: Slide[];

  protected timers: ReturnType<typeof setTimeout>[] = [];
  protected autoSlideInterval: ReturnType<typeof setInterval> | null = null;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length;
  }

  goToSlide(i: number): void {
    this.currentSlide = i;
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
  }
}
