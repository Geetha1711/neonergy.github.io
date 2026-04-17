import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { AboutSnippetComponent } from './about-snippet/about-snippet.component';
import { SegmentsGridComponent } from './segments-grid/segments-grid.component';
import { ServicesStripComponent } from './services-strip/services-strip.component';
import { ProjectsBandComponent } from './projects-band/projects-band.component';
import { TeamPreviewComponent } from './team-preview/team-preview.component';
import { CtaBandComponent } from './cta-band/cta-band.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    LatestUpdatesComponent,
    AboutSnippetComponent,
    SegmentsGridComponent,
    ServicesStripComponent,
    ProjectsBandComponent,
    TeamPreviewComponent,
    CtaBandComponent,
  ],
  template: `
    <app-hero-section />
    <app-latest-updates />
    <app-about-snippet />
    <app-segments-grid />
    <app-services-strip />
    @defer (on viewport) {
      <app-projects-band />
    } @placeholder { <div style="min-height: 400px"></div> }
    @defer (on viewport) {
      <app-team-preview />
    } @placeholder { <div style="min-height: 300px"></div> }
    @defer (on viewport) {
      <app-cta-band />
    } @placeholder { <div style="min-height: 200px"></div> }
  `,
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Neonergy — Your One Stop Energy Partner');
    this.meta.updateTag({ name: 'description', content: 'Neonergy Engineering Pvt Ltd delivers sustainable, self-reliant energy ecosystems through engineering excellence — solar, SCADA, process automation, and more.' });
    this.meta.updateTag({ property: 'og:title', content: 'Neonergy — Your One Stop Energy Partner' });
    this.meta.updateTag({ property: 'og:description', content: 'Engineering the transition to clean, reliable, and self-sufficient energy systems.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}
