import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  fullBio: string;
  photo: string;
  linkedin?: string;
  objectPosition?: string;
}

interface Client {
  name: string;
  initials: string;
  sector: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  currentSlide = 0;

  slides = [
    { src: 'assets/images/thecompany-1.png', alt: 'Neonergy Company' },
    { src: 'assets/images/thecompany-2.jpg', alt: 'The Company' },
    { src: 'assets/images/thecompany-3.jpeg', alt: 'The Company' },
  ];

  private timers: ReturnType<typeof setTimeout>[] = [];
  private autoSlideInterval: ReturnType<typeof setInterval> | null = null;

  ngAfterViewInit(): void {
    this.autoSlideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4000);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('team-card--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.team-card')
      .forEach(el => observer.observe(el));

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-stat--visible');
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.about-stat')
      .forEach(el => statObserver.observe(el));
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length;
  }

  goToSlide(i: number): void {
    this.currentSlide = i;
  }

  stats = [
    { num: '1045 MWp', label: 'Total Projects under Development' },
    { num: '240 MWH',  label: 'BESS under Development' },
    { num: '516 MWp',  label: 'Asset Performance Monitoring (O&M)' },
  ];

  team: TeamMember[] = [
    {
      name: 'Balakumaran J',
      title: 'Chief Business Officer',
      bio: '20+ years across EPC, Consulting & Investment Banking in Renewable and Conventional Power.',
      fullBio: 'A seasoned renewable energy professional with over 20 years of experience spanning EPC operations, Consulting, and Investment Banking across Renewable and Conventional Power sectors, as well as large-scale Infrastructure Projects, including Maritime and Urban & Industrial Infrastructure. He holds a triple postgraduate qualification in Power Systems Engineering, Project Management, and Finance. He has played a pivotal role in the development and execution of over 4 GW of renewable energy projects.',
      photo: 'assets/images/team/bala.jpg',
      linkedin: 'https://www.linkedin.com/in/balakumaran-jayaprakasam/',
    },
    {
      name: 'Naveen M',
      title: 'RE - Business Unit Head',
      bio: '17+ years in solar EPC and project development, delivering over 3 GW of solar projects across India.',
      fullBio: 'A renewable energy professional with 17+ years of experience in solar EPC and project development, with a track record of delivering over 3 GW of solar projects across India. A Graduate in Electronics with an MBA in Project Management, he currently leads large-scale solar and BESS developments, with a strong focus on execution excellence and operational efficiency.',
      photo: 'assets/images/team/naveen.jpg',
      linkedin: 'https://www.linkedin.com/in/naveen-m-b2514220/',
    },
    {
      name: 'Sijith K',
      title: 'Head - Contracts',
      bio: '24+ years across solar and wind sectors, contributing to 3 GW+ solar and 1.5 GW wind projects.',
      fullBio: 'A seasoned professional with over 24 years of experience in renewable energy project development across solar and wind sectors. He has contributed to over 3 GW of solar and 1.5 GW of wind projects. He brings deep expertise in contract management, project development, system design, and supply chain strategy, with extensive experience leading complex project executions across India and Sri Lanka.',
      photo: 'assets/images/team/sijith.jpg',
      linkedin: 'https://www.linkedin.com/company/neonergy-engineering-private-limited/',
    },
    {
      name: 'Shreya Desai',
      title: 'Legal Counsel',
      bio: 'Nearly two decades advising on M&A, private equity, foreign investments & capital markets.',
      fullBio: 'A seasoned corporate legal professional with nearly two decades of experience advising on complex transactions and strategic legal matters. As Legal Counsel, she brings deep expertise across M&A, private equity, foreign investments, capital markets, and corporate advisory, supporting high-value businesses across energy, financial services, IT, and manufacturing. She currently provides legal oversight for energy projects exceeding 1 GW capacity.',
      photo: 'assets/images/team/shreya.jpg',
      linkedin: 'https://www.linkedin.com/in/shreya-desai-68baa9b6/',
    },
    {
      name: 'Rajasekhar Reddy M',
      title: 'Head – Constructions',
      bio: '36+ years in EPC operations & O&M. Led construction of 3 GW+ solar power projects across India.',
      fullBio: 'A highly experienced professional with over 36 years of expertise in EPC operations, O&M for renewable energy projects. He has led construction activities as Construction Head for more than 3 GW of solar power projects and has additionally delivered over 1 GW of solar capacity as Construction Manager across diverse geographical terrains in India.',
      photo: 'assets/images/team/reddy.jpg',
      linkedin: 'https://www.linkedin.com/company/neonergy-engineering-private-limited/',
      objectPosition: '60% 5%',
    },
    {
      name: 'Daniel G',
      title: 'AGM – Engineering',
      bio: '11+ years in EPC, consulting & O&M for solar and green energy across India, ASEAN, Europe & Middle East.',
      fullBio: 'A renewable energy professional with over 11 years of experience in EPC operations, consulting, and O&M for solar and green energy projects. He holds a Master of Engineering in Solar Energy and a degree in Mechanical Engineering. His experience spans diverse geographies including the Indian subcontinent, ASEAN, Europe, and the Middle East, with extensive exposure to on-grid, off-grid, microgrid, and wind hybrid systems.',
      photo: 'assets/images/team/daniel.jpg',
      linkedin: 'https://www.linkedin.com/in/daniel-gnanaselvam/',
    },
  ];

  clients: Client[] = [
    { name: 'NTPC Renewable Energy', initials: 'NTPC', sector: 'PSU' },
    { name: 'Adani Green Energy', initials: 'AGEL', sector: 'IPP' },
    { name: 'ReNew Power', initials: 'RNW', sector: 'IPP' },
    { name: 'Greenko Group', initials: 'GKO', sector: 'IPP' },
    { name: 'Torrent Power', initials: 'TPL', sector: 'Utility' },
    { name: 'Azure Power', initials: 'AZR', sector: 'IPP' },
    { name: 'Hero Future Energies', initials: 'HFE', sector: 'IPP' },
    { name: 'Ayana Renewable', initials: 'AYN', sector: 'IPP' },
  ];
}
