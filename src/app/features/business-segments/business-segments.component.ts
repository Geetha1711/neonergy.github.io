import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-segments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-segments.component.html',
  styleUrls: ['./business-segments.component.scss'],
})
export class BusinessSegmentsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
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
  }
}
