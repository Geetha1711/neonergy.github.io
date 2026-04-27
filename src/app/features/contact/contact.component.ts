import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const ACCESS_KEY    = 'e4d2aa8f-8144-45cf-9a62-48cf4607aea6';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private http = inject(HttpClient);

  form = {
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    subject:   '',
    message:   '',
  };

  submitted = false;
  sending   = false;
  error     = '';

  subjects = [
    'General Enquiry',
    'Solar Project Development',
    'BESS & Storage Projects',
    'Plant Performance Monitoring (O&M)',
    'Business Advisory Services',
    'Debt Syndication / Financing',
    'Engineering & DPR Services',
    'Partnership / Collaboration',
    'Career Opportunities',
    'Other',
  ];

  sendMessage() {
    this.sending = true;
    this.error   = '';

    const payload = {
      access_key: ACCESS_KEY,
      name:       `${this.form.firstName} ${this.form.lastName}`.trim(),
      email:      this.form.email,
      phone:      this.form.phone,
      subject:    this.form.subject,
      message:    this.form.message,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' });

    this.http.post<{ success: boolean; message: string }>(WEB3FORMS_URL, payload, { headers }).subscribe({
      next: res => {
        this.sending = false;
        if (res.success) {
          this.submitted = true;
        } else {
          this.error = res.message || 'Submission failed. Please try again.';
        }
      },
      error: () => {
        this.sending = false;
        this.error   = 'Something went wrong. Please try again or email us directly at info&#64;neonergy.co';
      },
    });
  }

  resetForm() {
    this.form      = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };
    this.submitted = false;
    this.error     = '';
  }
}
