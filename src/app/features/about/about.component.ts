import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="container" style="padding: var(--space-9) var(--container-padding-x);">
      <h1>About Us</h1>
      <p>Coming soon — content goes here.</p>
    </section>
  `,
})
export class AboutComponent {}
