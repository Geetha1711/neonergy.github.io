import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-content container" style="padding: var(--space-9) var(--container-padding-x);">
      <h1>404 — Page Not Found</h1>
      <p>Coming soon — content goes here.</p>
      <a routerLink="/">Back to home</a>
    </section>
  `,
})
export class NotFoundComponent {}
