import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Neonergy — One-stop energy partner',
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
  {
    path: 'scada-login',
    loadComponent: () => import('./features/scada-login/scada-login.component').then(m => m.ScadaLoginComponent),
  },
  { path: '__styleguide', loadComponent: () => import('./features/styleguide/styleguide.component').then(m => m.StyleguideComponent) },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
