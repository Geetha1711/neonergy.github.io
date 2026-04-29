import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-snippet',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-snippet.component.html',
  styleUrls: ['./about-snippet.component.scss'],
})
export class AboutSnippetComponent {}
