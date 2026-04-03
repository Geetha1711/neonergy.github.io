/**
 * NEONERGY – Renderer
 * Reads from SITE (content.js) and populates the DOM.
 * To edit content, open content.js — do not edit here.
 */

document.addEventListener('DOMContentLoaded', () => {

  renderNav();
  renderStripSocial();
  renderFooterContact();
  renderSocialLinks();
  renderHeaderSlogan();

  const page = detectPage();
  if (page === 'home')    renderHome();
  if (page === 'careers') renderCareers();
  if (page === 'contact') renderContact();
  if (page === 'team')    renderTeam();
  if (page === 'about')    renderAbout();
  if (page === 'segments') renderSegments();

});

/* ─── Page detection ─────────────────────────────────────────── */
function detectPage() {
  const path = location.pathname;
  if (path.endsWith('careers.html'))  return 'careers';
  if (path.endsWith('contact.html'))  return 'contact';
  if (path.endsWith('neocare.html'))  return 'neocare';
  if (path.endsWith('team.html'))     return 'team';
  if (path.endsWith('about.html'))    return 'about';
  if (path.endsWith('segments.html')) return 'segments';
  return 'home'; // index.html or /
}

/* ─── Top strip social icons ─────────────────────────────────── */
function renderStripSocial() {
  const svgs = {
    linkedin:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
    facebook:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    youtube:   `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  };
  document.querySelectorAll('.strip-social').forEach(el => {
    el.innerHTML = Object.entries(SITE.social).map(([platform, url]) => {
      const isExternal = url.startsWith('http');
      const target = isExternal ? ' target="_blank" rel="noopener"' : '';
      const label  = platform.charAt(0).toUpperCase() + platform.slice(1);
      return `<a href="${url}"${target} class="strip-social-btn" aria-label="${label}" title="${label}">${svgs[platform]}</a>`;
    }).join('');
  });
}

/* ─── Nav dropdowns ──────────────────────────────────────────── */
function renderNav() {
  const dropdowns = document.querySelectorAll('.main-nav .dropdown');
  const keys = ['theCompany', 'segments', 'services', 'projects'];
  keys.forEach((key, i) => {
    if (!dropdowns[i] || !SITE.nav[key]) return;
    dropdowns[i].innerHTML = SITE.nav[key]
      .map(item => `<a href="${item.href}">${item.label}</a>`)
      .join('');
  });
}

/* ─── Header slogan ──────────────────────────────────────────── */
function renderHeaderSlogan() {
  document.querySelectorAll('.header-slogan').forEach(el => {
    el.textContent = SITE.company.slogan;
  });
}

/* ─── Footer contact column ──────────────────────────────────── */
function renderFooterContact() {
  const waNumber = SITE.company.whatsapp.replace(/\D/g, '');
  document.querySelectorAll('.footer-contact').forEach(el => {
    el.innerHTML = `
      <h4>Contact</h4>
      <p><span class="contact-icon">📍</span> ${SITE.company.address.line1}, ${SITE.company.address.line2}</p>
      <p><span class="contact-icon">✉️</span> ${SITE.company.email}</p>
      <p><span class="contact-icon">📞</span> ${SITE.company.phone} &nbsp;|&nbsp; ${SITE.company.landline}</p>
      <p>
        <a href="https://wa.me/${waNumber}" target="_blank" rel="noopener" class="whatsapp-link">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:14px;height:14px;vertical-align:middle;margin-right:4px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          WhatsApp: ${SITE.company.whatsapp}
        </a>
      </p>`;
  });

  // Powered by
  document.querySelectorAll('.footer-powered').forEach(el => {
    el.innerHTML = `<a href="https://neosashti.com/" target="_blank" rel="noopener">${SITE.footer.poweredBy}</a>`;
  });
}

/* ─── Social links ───────────────────────────────────────────── */
function renderSocialLinks() {
  const svgs = {
    linkedin:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
    facebook:  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    youtube:   `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  };
  document.querySelectorAll('.footer-social').forEach(el => {
    el.innerHTML = Object.entries(SITE.social).map(([platform, url]) => {
      const isExternal = url.startsWith('http');
      const target = isExternal ? ' target="_blank" rel="noopener"' : '';
      const label  = platform.charAt(0).toUpperCase() + platform.slice(1);
      return `<a href="${url}"${target} class="social-btn" aria-label="${label}">${svgs[platform]}</a>`;
    }).join('');
  });
}

/* ─── HOME page ──────────────────────────────────────────────── */
function renderHome() {

  // Hero
  const heroTag   = document.querySelector('.hero-tag');
  const heroH1    = document.querySelector('#heroContent h1');
  const heroP     = document.querySelector('#heroContent p');
  const heroCta   = document.querySelector('.btn-primary');
  if (heroTag)  heroTag.textContent  = SITE.home.heroTag;
  if (heroH1)   heroH1.innerHTML     = `${SITE.home.heroTitle}<br><span>${SITE.home.heroSpan}</span>`;
  if (heroP)    heroP.textContent    = SITE.home.heroDesc;
  if (heroCta)  heroCta.textContent  = SITE.home.heroCta;

  // Latest Updates
  const updatesGrid = document.getElementById('updatesGrid');
  if (updatesGrid) {
    updatesGrid.innerHTML = SITE.updates.map(u => `
      <div class="update-card">
        <div class="update-img">${u.icon}</div>
        <div class="update-body">
          <span class="update-tag">${u.tag}</span>
          <h3>${u.title}</h3>
          <p>${u.desc}</p>
          <a href="${u.link}" class="update-link">Know More →</a>
        </div>
      </div>`).join('');
  }

  // About – description paragraphs
  const aboutDesc = document.getElementById('aboutDesc');
  if (aboutDesc) {
    aboutDesc.innerHTML = `
      <p>${SITE.about.desc1}</p>
      <p>${SITE.about.desc2}</p>
      <p>${SITE.about.desc3}</p>`;
  }

  // About – stats
  const aboutStats = document.getElementById('aboutStats');
  if (aboutStats) {
    aboutStats.innerHTML = SITE.about.stats.map(s => `
      <div class="stat-item">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
  }

  // Business Segments
  const segmentsGrid = document.getElementById('segmentsGrid');
  if (segmentsGrid) {
    segmentsGrid.innerHTML = SITE.segments.map(s => `
      <div class="segment-card">
        <div class="segment-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="#" class="know-more">Know More →</a>
      </div>`).join('');
  }

  // Services
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    servicesGrid.innerHTML = SITE.services.map(s => `
      <div class="service-card">
        <div class="service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`).join('');
  }
}

/* ─── CAREERS page ───────────────────────────────────────────── */
function renderCareers() {

  // Intro text
  const intro = document.querySelector('.careers-intro p');
  if (intro) intro.textContent = SITE.careers.intro;

  // Job cards
  const grid = document.getElementById('openingsGrid');
  if (grid) {
    const openPositions = SITE.careers.positions
      .map((p, i) => ({ ...p, originalIndex: i }))
      .filter(p => p.status !== 'filled');

    if (openPositions.length === 0) {
      grid.innerHTML = `
        <div class="no-openings">
          <div class="no-openings-icon">📭</div>
          <h3>No Current Openings</h3>
          <p>We don't have any open positions right now, but we're always looking for great talent.</p>
          <p>Send us your resume and we'll reach out when there's a match.</p>
          <a href="mailto:${SITE.company.careersEmail}" class="no-openings-btn">📧 ${SITE.company.careersEmail}</a>
        </div>`;
    } else {
      grid.innerHTML = openPositions.map(p => `
        <div class="job-card job-card--clickable" data-job="${p.originalIndex}" tabindex="0" role="button" aria-label="View details for ${p.title}">
          <div class="job-card-top">
            <span class="job-type">${p.type}</span>
            ${p.travel ? '<span class="job-travel">✈ Travel Required</span>' : ''}
          </div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="job-meta">
            <span>📍 ${p.location}</span>
            <span>${p.segment}</span>
            <span>🕐 ${p.experience}</span>
          </div>
          <div class="job-date">📅 Posted: ${p.datePosted}</div>
          <span class="job-view-more">View Details →</span>
        </div>`).join('');

      // Click handler for each card
      grid.querySelectorAll('.job-card--clickable').forEach(card => {
        const open = () => openJobModal(parseInt(card.dataset.job));
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
      });
    }
  }

  // Modal open
  function openJobModal(index) {
    const p = SITE.careers.positions[index];
    const backdrop = document.getElementById('jobModalBackdrop');
    const body     = document.getElementById('jobModalBody');
    if (!backdrop || !body) return;

    body.innerHTML = `
      <div class="modal-header">
        <div>
          <div class="modal-tags">
            <span class="job-type">${p.type}</span>
            <span class="job-type" style="background:rgba(31,58,138,0.12);color:var(--blue-dark)">${p.segment}</span>
            ${p.travel ? '<span class="job-travel">✈ Travel Required</span>' : ''}
          </div>
          <h2 id="modalTitle">${p.title}</h2>
          <div class="job-meta" style="margin-top:8px">
            <span>📍 ${p.location}</span>
            <span>🕐 ${p.experience}</span>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <h4>About the Role</h4>
        <p>${p.details.about}</p>
      </div>

      <div class="modal-section">
        <h4>Key Responsibilities</h4>
        <ul>${p.details.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>

      <div class="modal-section">
        <h4>Requirements</h4>
        <ul>${p.details.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>

      <div class="modal-apply">
        <p>To apply, send your resume to <a href="mailto:${SITE.company.careersEmail}">${SITE.company.careersEmail}</a></p>
      </div>`;

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Modal close
  function closeJobModal() {
    const backdrop = document.getElementById('jobModalBackdrop');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  const closeBtn = document.getElementById('jobModalClose');
  const backdrop = document.getElementById('jobModalBackdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeJobModal);
  if (backdrop) backdrop.addEventListener('click', e => { if (e.target === backdrop) closeJobModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeJobModal(); });

  // Resume CTA
  const openApp = document.getElementById('openApp');
  if (openApp) {
    openApp.innerHTML = `
      <h3>Interested in Joining Us?</h3>
      <p>${SITE.careers.resumeNote}</p>
      <a href="mailto:${SITE.company.careersEmail}">📧 ${SITE.company.careersEmail}</a>`;
  }
}

/* ─── SEGMENTS page ──────────────────────────────────────────── */
function renderSegments() {
  const sp = SITE.segmentsPage;
  if (!sp) return;

  function buildSection(data, id, flip) {
    const imgBlock = `
      <div class="seg-img-wrap">
        <img src="${data.image}" alt="${data.heading}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="seg-img-placeholder" style="display:none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Image coming soon</span>
        </div>
      </div>`;

    const textBlock = `
      <div class="seg-text">
        <span class="seg-tag">${data.tag}</span>
        <h2>${data.heading}</h2>
        <p class="seg-intro">${data.intro}</p>
        <ul class="seg-list">
          ${data.services.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>`;

    return `
      <div class="seg-split${flip ? ' seg-split--flip' : ''}">
        ${flip ? imgBlock + textBlock : textBlock + imgBlock}
      </div>`;
  }

  const c = document.getElementById('segConsultancy');
  if (c) c.innerHTML = buildSection(sp.consultancy, 'consultancy', false);

  const o = document.getElementById('segOm');
  if (o) o.innerHTML = buildSection(sp.om, 'om-solutions', true);

  const e = document.getElementById('segEv');
  if (e) e.innerHTML = buildSection(sp.ev, 'ev-battery', false);
}

/* ─── ABOUT page ─────────────────────────────────────────────── */
function renderAbout() {
  const ap = SITE.aboutPage;
  if (!ap) return;

  function imgOrPlaceholder(src, alt, cls) {
    return `
      <div class="${cls} about-img-wrap">
        <img src="${src}" alt="${alt}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="img-placeholder" style="display:none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Image coming soon</span>
        </div>
      </div>`;
  }

  // About section
  const aboutEl = document.getElementById('aboutContent');
  if (aboutEl) {
    aboutEl.innerHTML = `
      <div class="about-split">
        <div class="about-text">
          <p class="section-label">Who We Are</p>
          <h2>${ap.about.heading}</h2>
          <p>${ap.about.desc1}</p>
          <p>${ap.about.desc2}</p>
          <p>${ap.about.desc3}</p>
          <div class="about-stats-row">
            ${SITE.about.stats.map(s => `
              <div class="astat">
                <div class="astat-num">${s.num}</div>
                <div class="astat-label">${s.label}</div>
              </div>`).join('')}
          </div>
        </div>
        ${imgOrPlaceholder(ap.about.image, 'Neonergy team at work', 'about-img-right')}
      </div>`;
  }

  // Vision & Mission
  const vmEl = document.getElementById('vmContent');
  if (vmEl) {
    vmEl.innerHTML = `
      <div class="vm-block">
        ${imgOrPlaceholder(ap.vision.image, 'Neonergy Vision', 'vm-img')}
        <div class="vm-text vision-text">
          <span class="vm-label-tag">${ap.vision.label}</span>
          <blockquote class="vm-statement">"${ap.vision.statement}"</blockquote>
        </div>
      </div>
      <div class="vm-block vm-block--flip">
        <div class="vm-text mission-text">
          <span class="vm-label-tag mission-tag">${ap.mission.label}</span>
          <blockquote class="vm-statement">"${ap.mission.statement}"</blockquote>
        </div>
        ${imgOrPlaceholder(ap.mission.image, 'Neonergy Mission', 'vm-img')}
      </div>`;
  }

  // Values
  const valEl = document.getElementById('valuesContent');
  if (valEl) {
    valEl.innerHTML = ap.values.map(v => `
      <div class="value-card">
        <div class="value-icon">${v.icon}</div>
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>`).join('');
  }
}

/* ─── TEAM page ──────────────────────────────────────────────── */
function renderTeam() {
  const list = document.getElementById('leaderList');
  if (!list || !SITE.team) return;

  list.innerHTML = SITE.team.map(member => {
    // Generate initials from name (first letter of first + last word)
    const words    = member.name.trim().split(' ');
    const initials = (words[0][0] + (words[words.length - 1][0] || '')).toUpperCase();

    // Expected photo path: assets/team/<first-last>.jpg (lowercase, hyphenated)
    const slug     = member.name.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const photoSrc = `assets/team/${slug}.jpg`;

    return `
      <div class="leader-card">
        <div class="leader-avatar">
          <img
            src="${photoSrc}"
            alt="${member.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <span class="avatar-initials" style="display:none">${initials}</span>
        </div>
        <div class="leader-info">
          <div class="leader-name">${member.name}</div>
          <span class="leader-title">${member.title}</span>
          <p class="leader-bio">${member.bio}</p>
          <ul class="leader-highlights">
            ${member.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      </div>`;
  }).join('');
}

/* ─── CONTACT page ───────────────────────────────────────────── */
function renderContact() {

  // Address
  const addrEl = document.getElementById('contactAddress');
  if (addrEl) {
    addrEl.innerHTML = `
      <a href="${SITE.company.address.mapsUrl}" target="_blank" rel="noopener"
         class="info-icon map-pin" title="Open in Google Maps">📍</a>
      <div class="info-text">
        <strong>Office</strong>
        <a href="${SITE.company.address.mapsUrl}" target="_blank" rel="noopener" class="map-link">
          ${SITE.company.address.line1},<br>${SITE.company.address.line2}
        </a>
      </div>`;
  }

  // Phone
  const phoneEl = document.getElementById('contactPhone');
  if (phoneEl) {
    phoneEl.innerHTML = `
      <div class="info-icon">📞</div>
      <div class="info-text">
        <strong>Phone</strong>
        <span>${SITE.company.phone}</span>
      </div>`;
  }

  // Landline
  const landlineEl = document.getElementById('contactLandline');
  if (landlineEl) {
    landlineEl.innerHTML = `
      <div class="info-icon">☎️</div>
      <div class="info-text">
        <strong>Landline</strong>
        <span>${SITE.company.landline}</span>
      </div>`;
  }

  // WhatsApp
  const waEl = document.getElementById('contactWhatsapp');
  if (waEl) {
    const waNumber = SITE.company.whatsapp.replace(/\D/g, '');
    waEl.innerHTML = `
      <div class="info-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:20px;height:20px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      </div>
      <div class="info-text">
        <strong>WhatsApp</strong>
        <span>${SITE.company.whatsapp}</span>
      </div>`;
  }

  // Business Hours
  const hoursEl = document.getElementById('contactHours');
  if (hoursEl) {
    const rows = SITE.hours.map(h => `
      <span class="hours-row${h.closed ? ' hours-closed' : ''}">
        <span class="hours-day">${h.days}</span>
        <span class="hours-time">${h.time}</span>
      </span>`).join('');
    hoursEl.innerHTML = `
      <div class="info-icon">🕐</div>
      <div class="info-text">
        <strong>Business Hours</strong>
        ${rows}
      </div>`;
  }
}
