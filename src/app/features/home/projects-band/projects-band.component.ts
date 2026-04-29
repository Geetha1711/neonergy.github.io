import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-projects-band',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './projects-band.component.html',
  styleUrls: ['./projects-band.component.scss'],
})
export class ProjectsBandComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bandRef') bandRef!: ElementRef;

  stats: Stat[] = [
    { value: 4,    suffix: '+ GW',   label: 'Renewable energy project experience',    current: 0 },
    { value: 1045, suffix: ' MWp',   label: 'Current advisory & engineering portfolio', current: 0 },
    { value: 62,   suffix: ' MWp',   label: 'Capacity commissioned',                  current: 0 },
    { value: 20,   suffix: '+ years',label: 'Of combined leadership experience',       current: 0 },
  ];

  private observer?: IntersectionObserver;
  private animated = false;
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.reducedMotion) {
      this.stats.forEach(s => s.current = s.value);
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.bandRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounters(): void {
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.forEach(s => {
        s.current = Math.round(s.value * eased);
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}
