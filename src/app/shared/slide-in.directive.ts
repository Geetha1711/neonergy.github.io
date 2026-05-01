import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[slideIn]', standalone: true })
export class SlideInDirective implements OnInit, OnDestroy {
  @Input() slideInDelay: number = 0;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.el.nativeElement as HTMLElement;
    el.classList.add('slide-in-ready');

    if (this.slideInDelay > 0) {
      el.style.animationDelay = `${this.slideInDelay}s`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('slide-in-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
