import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [RouterLink, MatDividerModule],
  template: `
    <div class="policy-page page-content">

      <div class="policy-hero">
        <div class="container">
          <h1>Terms of Use</h1>
          <p>Please read these terms carefully before using the Neonergy Engineering website.</p>
        </div>
      </div>

      <div class="container policy-body">
        <p class="policy-effective">Effective Date: April 2026</p>

        <section class="policy-section">
          <h2>Acceptance of Terms</h2>
          <mat-divider></mat-divider>
          <p>By accessing or using the Neonergy Engineering Pvt Ltd website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site. Neonergy Engineering reserves the right to update these Terms of Use at any time without prior notice, and continued use of the website constitutes acceptance of any changes.</p>
        </section>

        <section class="policy-section">
          <h2>Use of Website</h2>
          <mat-divider></mat-divider>
          <p>This website is intended for lawful purposes only — you agree not to use it to transmit any material that is unlawful, harmful, defamatory, or otherwise objectionable. You may not attempt to gain unauthorised access to any part of this website or its underlying systems, servers, or networks. Neonergy Engineering reserves the right to restrict or terminate access to the website at its sole discretion, without notice, for any violation of these terms.</p>
        </section>

        <section class="policy-section">
          <h2>Intellectual Property</h2>
          <mat-divider></mat-divider>
          <p>All content on this website — including text, graphics, logos, images, and software — is the property of Neonergy Engineering Pvt Ltd and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this site without our express written permission. The Neonergy name, logo, and brand elements are trademarks of Neonergy Engineering Pvt Ltd and may not be used without prior written consent.</p>
        </section>

        <section class="policy-section">
          <h2>Limitation of Liability</h2>
          <mat-divider></mat-divider>
          <p>Neonergy Engineering Pvt Ltd provides this website on an "as is" basis and makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of the information presented. To the fullest extent permitted by law, Neonergy Engineering shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website. We are not responsible for the content or reliability of any external websites linked from this site.</p>
        </section>

        <section class="policy-section">
          <h2>Governing Law</h2>
          <mat-divider></mat-divider>
          <p>These Terms of Use shall be governed by and construed in accordance with the laws of the State of Karnataka, India, without regard to its conflict of law provisions. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India. By using this website, you consent to the personal jurisdiction of such courts and waive any objection to their venue.</p>
        </section>

        <section class="policy-section">
          <h2>Contact</h2>
          <mat-divider></mat-divider>
          <p>If you have any questions or concerns regarding these Terms of Use, please contact us at <a href="mailto:info@neonergy.co">info&#64;neonergy.co</a> or through our <a routerLink="/contact">Contact Us</a> page. We welcome your feedback and are committed to addressing any queries promptly. Neonergy Engineering Pvt Ltd, 1st Floor, 682/2, 12th Main Rd, 3rd Block, Rajajinagar, Bengaluru 560010.</p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .policy-hero {
      background: linear-gradient(135deg, #0b5d3b 0%, #0070C0 100%);
      padding: var(--space-5) 0 var(--space-4);
      h1 { color: white; margin-bottom: var(--space-2); font-size: 2.4rem; font-weight: 800; letter-spacing: 0.01em; }
      p  { color: rgba(255,255,255,0.85); font-size: var(--fs-body-lg); margin: 0; }
    }
    .policy-body {
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
      h2 { color: var(--color-primary-dark); margin-bottom: var(--space-3); font-size: var(--fs-h3); font-weight: 700; }
      mat-divider { margin-bottom: var(--space-4); }
      p { color: var(--color-neutral-600); line-height: 1.8; margin: 0; font-size: var(--fs-body); }
      a { color: var(--color-primary-dark); text-decoration: underline; &:hover { color: #F5A623; } }
    }
  `]
})
export class TermsOfUseComponent {}
