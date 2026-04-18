import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, MatDividerModule],
  template: `
    <div class="policy-page page-content">

      <div class="policy-hero">
        <div class="container">
          <h1>Privacy Policy</h1>
          <p>How Neonergy Engineering collects, uses, and protects your information.</p>
        </div>
      </div>

      <div class="container policy-body">
        <p class="policy-effective">Effective Date: April 2026</p>

        <section class="policy-section">
          <h2>Information We Collect</h2>
          <mat-divider></mat-divider>
          <p>We collect information you provide directly to us when you use our website, submit enquiry forms, or contact us by email or phone — this includes your name, email address, phone number, and any project details you share. We also automatically collect certain technical data such as your IP address, browser type, and pages visited through standard web server logs and analytics tools. This information is used solely to improve our services and respond effectively to your enquiries.</p>
        </section>

        <section class="policy-section">
          <h2>How We Use Information</h2>
          <mat-divider></mat-divider>
          <p>The information we collect is used to respond to your enquiries, provide requested services, and communicate updates relevant to your project or engagement with Neonergy. We may use aggregate, anonymised data to understand how visitors interact with our website and to improve our content and user experience. We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
        </section>

        <section class="policy-section">
          <h2>Data Security</h2>
          <mat-divider></mat-divider>
          <p>Neonergy Engineering takes reasonable technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our website uses HTTPS encryption for all data transmitted between your browser and our servers. While we implement industry-standard safeguards, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
        </section>

        <section class="policy-section">
          <h2>Third-Party Links</h2>
          <mat-divider></mat-divider>
          <p>Our website may contain links to third-party websites, including project partners, regulatory bodies, or reference resources — these sites operate independently and have their own privacy policies. Neonergy Engineering is not responsible for the content or privacy practices of any linked external sites. We encourage you to review the privacy policy of any third-party site you visit through links on our website.</p>
        </section>

        <section class="policy-section">
          <h2>Your Rights</h2>
          <mat-divider></mat-divider>
          <p>You have the right to request access to the personal information we hold about you, and to request correction or deletion of that information where applicable. If you believe your data has been processed incorrectly, you may contact us and we will address your concern promptly and in accordance with applicable law. Neonergy Engineering will not discriminate against you for exercising any of your data rights.</p>
        </section>

        <section class="policy-section">
          <h2>Contact Us</h2>
          <mat-divider></mat-divider>
          <p>If you have any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal data, please reach out to us. You can contact us by email at <a href="mailto:info@neonergy.co">info&#64;neonergy.co</a> or by visiting our <a routerLink="/contact">Contact Us</a> page. We aim to respond to all privacy-related enquiries within five business days.</p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .policy-hero {
      background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-secondary) 100%);
      padding: var(--space-8) 0 var(--space-7);
      h1 { color: white; margin-bottom: var(--space-2); }
      p  { color: rgba(255,255,255,0.8); font-size: var(--fs-body-lg); margin: 0; }
    }
    .policy-body {
      max-width: 800px;
      padding-top: var(--space-7);
      padding-bottom: var(--space-9);
    }
    .policy-effective {
      font-size: var(--fs-small);
      color: var(--color-neutral-600);
      font-style: italic;
      margin-bottom: var(--space-7);
    }
    .policy-section {
      margin-bottom: var(--space-7);
      h2 { color: var(--color-primary-dark); margin-bottom: var(--space-3); font-size: var(--fs-h4); }
      mat-divider { margin-bottom: var(--space-4); }
      p { color: var(--color-neutral-600); line-height: 1.8; margin: 0; }
      a { color: var(--color-primary-dark); text-decoration: underline; &:hover { color: #F5A623; } }
    }
  `]
})
export class PrivacyPolicyComponent {}
