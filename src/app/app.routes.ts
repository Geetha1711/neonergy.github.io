import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Neonergy — One Stop Energy Partner',
  },
  {
    path: 'about',
    children: [
      { path: '', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
      { path: 'vision', loadComponent: () => import('./features/about/vision/vision.component').then(m => m.VisionComponent) },
      { path: 'mission', loadComponent: () => import('./features/about/mission/mission.component').then(m => m.MissionComponent) },
      { path: 'who-we-are', loadComponent: () => import('./features/about/who-we-are/who-we-are.component').then(m => m.WhoWeAreComponent) },
      { path: 'team', loadComponent: () => import('./features/about/team/team.component').then(m => m.TeamComponent) },
    ],
  },
  {
    path: 'business-segments',
    children: [
      { path: '', loadComponent: () => import('./features/business-segments/business-segments.component').then(m => m.BusinessSegmentsComponent) },
      { path: ':slug', loadComponent: () => import('./features/business-segments/segment-detail/segment-detail.component').then(m => m.SegmentDetailComponent) },
    ],
  },
  {
    path: 'services',
    children: [
      { path: '', loadComponent: () => import('./features/service-offerings/service-offerings.component').then(m => m.ServiceOfferingsComponent) },
      { path: ':slug', loadComponent: () => import('./features/service-offerings/service-detail/service-detail.component').then(m => m.ServiceDetailComponent) },
    ],
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'media',
    loadComponent: () => import('./features/media/media.component').then(m => m.MediaComponent),
  },
  {
    path: 'career',
    loadComponent: () => import('./features/careers/careers.component').then(m => m.CareersComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
  },
  { path: 'scada-login', redirectTo: 'scada', pathMatch: 'full' },
  {
    path: 'scada',
    loadComponent: () => import('./features/scada-login/scada-login.component').then(m => m.ScadaLoginComponent),
    title: 'SCADA — Neonergy',
  },
  { path: 'market', loadComponent: () => import('./features/market/market.component').then(m => m.MarketComponent), title: 'Market — Neonergy' },
  { path: 'privacy-policy', loadComponent: () => import('./features/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent), title: 'Privacy Policy — Neonergy' },
  { path: 'terms-of-use', loadComponent: () => import('./features/terms-of-use/terms-of-use.component').then(m => m.TermsOfUseComponent), title: 'Terms of Use — Neonergy' },
  { path: 'sitemap', loadComponent: () => import('./features/sitemap/sitemap.component').then(m => m.SitemapComponent), title: 'Sitemap — Neonergy' },
  { path: '__styleguide', loadComponent: () => import('./features/styleguide/styleguide.component').then(m => m.StyleguideComponent) },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
