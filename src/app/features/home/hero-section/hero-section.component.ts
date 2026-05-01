import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
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

  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  videoEnded = false;
  isPlaying = true;
  isMuted = true; // starts muted to satisfy browser autoplay policy

  ngAfterViewInit(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    if (this.reducedMotion) {
      video.pause();
      this.videoEnded = true;
      return;
    }

    video.volume = 0.5;
    video.muted = true; // enforce muted — some browsers reset it after volume is set

    video.play().catch(() => {
      // Autoplay still blocked (e.g. data-saver mode) — show paused state
      this.isPlaying = false;
    });

    video.addEventListener('ended', () => {
      this.videoEnded = true;
    });
  }

  togglePlay(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
      this.videoEnded = false;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }

  scrollToNext(): void {
    const hero = document.querySelector('.hero') as HTMLElement;
    if (!hero) return;
    const target = hero.offsetTop + hero.offsetHeight;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
}
