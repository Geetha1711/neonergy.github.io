import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeroSectionComponent } from './hero-section/hero-section.component';
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
    AboutSnippetComponent,
    SegmentsGridComponent,
    ServicesStripComponent,
    ProjectsBandComponent,
    TeamPreviewComponent,
    CtaBandComponent,
  ],
  template: `
    <app-hero-section />
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
    this.title.setTitle('Neonergy — One-stop energy partner');
    this.meta.updateTag({ name: 'description', content: 'Neonergy Engineering delivers integrated advisory, engineering, and EPC services across solar, wind, hydro, storage, and urban infrastructure — from concept to commissioning.' });
    this.meta.updateTag({ property: 'og:title', content: 'Neonergy — One-stop energy partner' });
    this.meta.updateTag({ property: 'og:description', content: 'Integrated renewable energy engineering and advisory across India.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}
