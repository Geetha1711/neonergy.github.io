// src/app/features/careers/careers.component.ts
import { Component, signal, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ResponsibilityGroup {
  section: string;
  items: string[];
}

interface JobListing {
  id: string;
  jobCode: string;
  title: string;
  subtitle: string;
  department: string;
  employmentType: string;
  location: string;
  vacancies: number;
  shiftNote?: string;
  tags: string[];
  eligibility: string[];
  summary: string;
  responsibilities: ResponsibilityGroup[];
  accentColor: string;
  iconPath: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent implements AfterViewInit, OnDestroy {
  @ViewChild('processSection') processSection!: ElementRef;
  private observer?: IntersectionObserver;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cr-process--visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.processSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  safe(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // ── Hero carousel ──
  readonly carouselSlides = [
    { src: 'assets/images/servicesbanner/serban-1.png',  alt: 'Neonergy careers' },
    { src: 'assets/images/servicesbanner/servban-2.png', alt: 'Neonergy team' },
    { src: 'assets/images/servicesbanner/serban-3.png',  alt: 'Neonergy operations' },
  ];
  currentSlide = 0;

  nextSlide(): void { this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length; }
  prevSlide(): void { this.currentSlide = (this.currentSlide + this.carouselSlides.length - 1) % this.carouselSlides.length; }
  goToSlide(i: number): void { this.currentSlide = i; }

  // ── Job accordion ──
  readonly expanded = signal<string | null>(null);

  toggle(id: string): void {
    this.expanded.set(this.expanded() === id ? null : id);
  }

  readonly hiringSteps = [
    { num: '01', label: 'Apply',                       desc: 'Send your CV to info@neonergy.co with the job code in the subject line',                                              icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>` },
    { num: '02', label: 'Resume Filter',               desc: 'Our team reviews your profile and shortlists candidates within 5 business days',                                      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>` },
    { num: '03', label: 'Aptitude Test',                desc: 'Written round assessing analytical thinking and problem-solving ability — conducted in person',                       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
    { num: '04', label: 'Technical Round',             desc: 'In-person technical interview with the core team to assess domain knowledge and skills',                              icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    { num: '05', label: 'Culture Fit',                 desc: 'In-person discussion with leadership to assess alignment with Neonergy\'s values and mission',                        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
    { num: '06', label: 'Offer',                       desc: 'Receive your offer or internship letter with clear on-roll conversion criteria',                                       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><polyline points="20 6 9 17 4 12"/></svg>` },
    { num: '07', label: 'Join',                        desc: 'Onboard as an Intern and transition On-Roll upon successful graduation',                                               icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="22" height="22"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>` },
  ];

  readonly jobs: JobListing[] = [
    {
      id: 'adota',
      jobCode: 'NEO-46127 ADOTA',
      title: 'Associate Manager',
      subtitle: 'Transaction Advisor',
      department: 'Advisory & DevOps (ADO)',
      employmentType: 'Internship → On-Roll (Upon Graduation)',
      location: 'Bengaluru HO',
      vacancies: 1,
      accentColor: '#0070C0',
      iconPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="26" height="26"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
      tags: ['Finance', 'M&A', 'Governance', 'Due Diligence', 'Advisory'],
      eligibility: [
        'B.E. / B.Tech  or  BSc / BBA / BCom',
        'MBA in Finance / Business Analytics / Operations or equivalent',
        'Final-year students may apply (Internship + PPO model)',
      ],
      summary:
        'We are seeking a qualified and detail-oriented professional to handle Transaction Advisory Services. The role involves managing corporate transactions, due diligence, compliance, regulatory filings, and secretarial functions while supporting strategic business initiatives such as mergers, acquisitions, fundraising, joint ventures, and restructuring.',
      responsibilities: [
        {
          section: 'Transaction Advisory',
          items: [
            'Assist in financial analysis, modeling, and valuation exercises',
            'Support preparation of Information Memorandums, pitch decks, and financial reports',
            'Conduct preliminary due diligence (financial, legal, and compliance data review)',
            'Research industry trends, benchmarks, and comparable transactions',
            'Assist senior team members in M&A, fundraising, and investment advisory assignments',
            "Preparation and review of transaction documents such as Share Purchase Agreements, Shareholders' Agreements, Project Development Agreements, and other transaction-related legal documentation",
          ],
        },
        {
          section: 'Company Secretary Functions',
          items: [
            'Prepare, review, and file statutory returns, forms, and disclosures with MCA/ROC and other authorities',
            'Maintain statutory registers, minutes books, records, and corporate documentation in accordance with regulatory standards',
            'Organize and coordinate Board Meetings, Committee Meetings, AGM/EGM, including logistics and documentation',
            'Draft board resolutions, notices, agendas, minutes, and other governance documents',
            'Monitor and track compliance calendars, statutory deadlines, and regulatory filings',
            'Liaise and correspond with regulatory authorities such as ROC, MCA, SEBI, and other statutory bodies',
            'Support corporate governance initiatives and ensure adherence to internal policies and legal requirements',
            'Assist in corporate actions including share allotments, transfers, capital restructuring, and restructuring transactions',
            'Support drafting, review, and maintenance of corporate documents, agreements, and disclosures',
          ],
        },
      ],
    },
    {
      id: 'doo',
      jobCode: 'NEO-46127 DOO',
      title: 'Lead Engineer',
      subtitle: 'Solar SCADA Monitoring',
      department: 'Advisory & DevOps (ADO)',
      employmentType: 'Internship → On-Roll (Post Graduation)',
      location: 'Bengaluru HO',
      vacancies: 2,
      shiftNote: 'Shift basis — 5 AM–2 PM  or  10 AM–7 PM',
      accentColor: '#00B050',
      iconPath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="26" height="26"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      tags: ['SCADA', 'Solar', 'Real-Time Monitoring', 'Operations', 'Electrical'],
      eligibility: [
        'B.Sc in Electrical / Electronics Stream',
        'Final-year students may apply (Internship + PPO model)',
      ],
      summary:
        'The Solar SCADA Monitoring Engineer is responsible for real-time monitoring and performance analysis of solar power plants through SCADA systems. The role focuses on ensuring maximum plant availability, identifying faults, optimizing generation, and coordinating with site teams to maintain operational efficiency and compliance with performance KPIs.',
      responsibilities: [
        {
          section: 'Key Responsibilities',
          items: [
            'Continuous monitoring of live plant performance via SCADA dashboards',
            'Track generation, PR (Performance Ratio), CUF, availability, and inverter performance',
            'Identify alarms, faults, and generation deviations in real time',
            'Escalate critical issues to site teams and stakeholders promptly',
          ],
        },
        {
          section: 'Behavioral Competencies',
          items: [
            'Attention to detail and precision in data interpretation',
            'Analytical thinking for fault diagnosis and performance optimization',
            'Quick decision-making under time-sensitive operational conditions',
            'Strong communication and coordination skills across remote site teams',
            'Ability to thrive in shift-based monitoring environments',
          ],
        },
      ],
    },
  ];
}
