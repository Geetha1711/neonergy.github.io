import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroVideo') videoRef!: ElementRef<HTMLVideoElement>;

  hasVideo = false;
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit(): void {
    if (this.reducedMotion && this.videoRef?.nativeElement) {
      this.videoRef.nativeElement.pause();
    }
  }

  scrollToNext(): void {
    const hero = document.querySelector('.hero');
    const next = hero?.nextElementSibling as HTMLElement;
    next?.scrollIntoView({ behavior: 'smooth' });
  }
}
