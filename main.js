// ============================================================
// VINAYAK GROUP — SHARED COMPONENTS & UTILITIES
// ============================================================

// ── NAV HTML ─────────────────────────────────────────────────
const NAV_HTML = `
<div class="top-bar">
  <div class="top-bar-left">
    <div class="top-bar-item">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="13" height="13"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      <span>9414247984 / 01423-517031</span>
    </div>
    <div class="top-bar-item">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="13" height="13"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      <span>vinayakgroup2003@gmail.com</span>
    </div>
  </div>
  <div class="top-bar-right">
    <span>Admissions Open 2026–27</span>
    <a href="admissions.html" style="font-weight:600;">Apply Now →</a>
  </div>
</div>
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <div class="navbar-logo-emblem">VG</div>
      <div class="navbar-logo-text">
        <strong>Vinayak Group</strong>
        <span>of Institutions, Chomu</span>
      </div>
    </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="index.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="about.html" class="nav-link">
          About
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </a>
        <div class="dropdown">
          <a href="about.html#history">Our Legacy</a>
          <a href="about.html#leadership">Leadership</a>
          <a href="about.html#vision">Vision &amp; Mission</a>
          <a href="about.html#accreditations">Accreditations &amp; Rankings</a>
        </div>
      </li>
      <li class="nav-item">
        <a href="institutions.html" class="nav-link">
          Institutions
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </a>
        <div class="dropdown">
          <a href="institution-pg.html">Vinayak PG College</a>
          <a href="institution-international.html">Vinayak International College</a>
          <a href="institution-law.html">Vinayak Law College</a>
          <a href="institution-girls.html">Vinayak Girls College</a>
          <a href="institution-school.html">Vinayak International School</a>
        </div>
      </li>
      <li class="nav-item">
        <a href="courses.html" class="nav-link">
          Academics
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </a>
        <div class="dropdown">
          <a href="courses.html#ug">UG Programs</a>
          <a href="courses.html#pg">PG Programs</a>
          <a href="courses.html#law">Law (LL.B.)</a>
          <a href="courses.html#bed">Education / B.Ed.</a>
          <a href="faculty.html">Faculty Directory</a>
        </div>
      </li>
      <li class="nav-item">
        <a href="campus.html" class="nav-link">
          Campus
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </a>
        <div class="dropdown">
          <a href="campus.html#infrastructure">50-Acre Infrastructure</a>
          <a href="campus.html#mootcourt">Moot Court</a>
          <a href="campus.html#labs">DBT Star Labs</a>
          <a href="campus.html#sports">Sports &amp; Military Training</a>
          <a href="gallery.html">Photo Gallery</a>
        </div>
      </li>
      <li class="nav-item">
        <a href="admissions.html" class="nav-link">
          Admissions
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </a>
        <div class="dropdown">
          <a href="admissions.html#apply">Apply Online 2026</a>
          <a href="admissions.html#fees">Fee Structure</a>
          <a href="admissions.html#eligibility">Eligibility</a>
          <a href="admissions.html#scholarships">Scholarships &amp; Aid</a>
        </div>
      </li>
      <li class="nav-item">
        <a href="placements.html" class="nav-link">Career</a>
      </li>
      <li class="nav-item">
        <a href="contact.html" class="nav-link">Contact</a>
      </li>
    </ul>
    <div class="navbar-cta">
      <a href="admissions.html#apply" class="btn btn-primary">Apply Now 2026</a>
    </div>
    <div class="hamburger" id="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div class="mobile-overlay" id="mobileOverlay" onclick="toggleMenu()"></div>
<div class="mobile-nav" id="mobileNav">
  <a href="index.html">🏠 Home</a>
  <a href="about.html">📖 About Us</a>
  <a href="institutions.html">🏫 Our Institutions</a>
  <a href="courses.html">📚 Courses</a>
  <a href="faculty.html">👨‍🏫 Faculty</a>
  <a href="campus.html">🌿 Campus</a>
  <a href="admissions.html">📝 Admissions</a>
  <a href="placements.html">💼 Placements</a>
  <a href="gallery.html">🖼️ Gallery</a>
  <a href="contact.html">📞 Contact</a>
  <br>
  <a href="admissions.html#apply" class="btn btn-primary" style="display:inline-flex;margin-top:16px;">Apply Now 2026</a>
</div>
`;

// ── FOOTER HTML ───────────────────────────────────────────────
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-logo">
          <div class="footer-brand-logo-emblem">VG</div>
          <div class="footer-brand-logo-text">
            <strong>Vinayak Group of Institutions</strong>
            <span>Chomu, Jaipur, Rajasthan</span>
          </div>
        </div>
        <p class="footer-desc">
          Shaping tomorrow's leaders since 2004. A premier multi-disciplinary educational ecosystem in Chomu, Jaipur — backed by NAAC A++, BCI, NCTE approvals and a 50-acre campus of opportunity.
        </p>
        <div class="footer-socials">
          <a href="#" class="social-btn" title="Facebook">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" class="social-btn" title="Instagram">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2"/></svg>
          </a>
          <a href="https://www.youtube.com/@VinayakCoachingInstitute" class="social-btn" title="YouTube (12.9K)">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon fill="#0D1B2A" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
          <a href="tel:9414247984" class="social-btn" title="WhatsApp">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Quick Links</div>
        <ul class="footer-links">
          <li><a href="about.html">About the Group</a></li>
          <li><a href="institutions.html">Our Institutions</a></li>
          <li><a href="courses.html">Courses Offered</a></li>
          <li><a href="admissions.html">Admissions 2026</a></li>
          <li><a href="faculty.html">Faculty Directory</a></li>
          <li><a href="placements.html">Career & Placements</a></li>
          <li><a href="gallery.html">Photo Gallery</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Institutions</div>
        <ul class="footer-links">
          <li><a href="institution-pg.html">Vinayak PG College</a></li>
          <li><a href="institution-international.html">Vinayak International College</a></li>
          <li><a href="institution-law.html">Vinayak Law College</a></li>
          <li><a href="institution-girls.html">Vinayak Girls P.G. College</a></li>
          <li><a href="institution-school.html">Vinayak International School</a></li>
          <li><a href="institutions.html#affiliates">Sister Concerns</a></li>
        </ul>
        <div class="footer-col-title" style="margin-top:28px;">Recognitions</div>
        <ul class="footer-links">
          <li><a href="about.html#accreditations">NAAC A++ (3.82 CGPA)</a></li>
          <li><a href="about.html#accreditations">NIRF Rank 81</a></li>
          <li><a href="about.html#accreditations">DBT Star College</a></li>
          <li><a href="about.html#accreditations">BCI Approved</a></li>
          <li><a href="about.html#accreditations">NCTE Approved</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact Us</div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div class="footer-contact-text">
            <strong>Main Campus</strong>
            Vinayak Vihar, Vinayak Path, Kacholiya Road, Chomu, Jaipur — 303702, Rajasthan
          </div>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          </div>
          <div class="footer-contact-text">
            <strong>Phone</strong>
            <a href="tel:9414247984">+91-9414247984</a><br>
            <a href="tel:01423517031">01423-517031</a>
          </div>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div class="footer-contact-text">
            <strong>Email</strong>
            <a href="mailto:vinayakgroup2003@gmail.com">vinayakgroup2003@gmail.com</a>
          </div>
        </div>
        <div style="margin-top:20px;padding:14px;background:rgba(201,147,58,0.08);border-radius:8px;border:1px solid rgba(201,147,58,0.2);">
          <div style="font-size:0.7rem;color:rgba(255,255,255,0.45);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">Admission Helpline</div>
          <div style="font-family:'Bebas Neue',cursive;font-size:1.4rem;color:#E8AF4A;letter-spacing:0.05em;">9414247984</div>
          <div style="font-size:0.7rem;color:rgba(255,255,255,0.35);margin-top:2px;">Mon – Sat: 9:00 AM – 5:00 PM</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Vinayak Group of Institutions, Chomu. All rights reserved. | Affiliated to University of Rajasthan, Jaipur.</span>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Mandatory Disclosure</a>
      <a href="#">Grievance</a>
    </div>
  </div>
</footer>
`;

// ── WHATSAPP FAB ──────────────────────────────────────────────
const FAB_HTML = `
<a href="https://wa.me/919414247984?text=Hello%2C%20I%20want%20to%20know%20more%20about%20admissions%20at%20Vinayak%20Group%20of%20Institutions." class="fab-whatsapp" title="Chat on WhatsApp" target="_blank">
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
`;

// ── INJECT COMPONENTS ─────────────────────────────────────────
function injectComponents() {
  const navContainer = document.getElementById('nav-container');
  const footerContainer = document.getElementById('footer-container');
  const fabContainer = document.getElementById('fab-container');
  if (navContainer)    navContainer.innerHTML = NAV_HTML;
  if (footerContainer) footerContainer.innerHTML = FOOTER_HTML;
  if (fabContainer)    fabContainer.innerHTML = FAB_HTML;

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.startsWith(currentPage.split('.')[0]))) {
      link.classList.add('active');
    }
  });

  // Navbar scroll behavior
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 60) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
  });
}

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const overlay   = document.getElementById('mobileOverlay');
  if (hamburger && mobileNav && overlay) {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  }
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

// ── COUNTER ANIMATION ─────────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  const isPlus = String(target).includes('+');
  const num = parseInt(String(target).replace(/\D/g, ''));
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * num);
    el.textContent = current.toLocaleString() + (isPlus ? '+' : '');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = num.toLocaleString() + (isPlus ? '+' : '');
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, entry.target.dataset.count);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ── TABS ──────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach(nav => {
    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        const wrapper = nav.closest('.tabs-wrapper') || nav.parentElement;
        wrapper.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        wrapper.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = wrapper.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });
}

// ── COURSE FILTER ─────────────────────────────────────────────
function initCourseFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      courseCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ── LIGHTBOX ──────────────────────────────────────────────────
function initGallery() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.src;
      const caption = item.dataset.caption || '';
      lightbox.querySelector('.lightbox-img').innerHTML = item.querySelector('svg') ? item.querySelector('svg').outerHTML : `<img src="${src}" alt="${caption}">`;
      lightbox.querySelector('.lightbox-caption').textContent = caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
}

// ── TESTIMONIAL SLIDER ────────────────────────────────────────
function initTestimonialSlider() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;
  let idx = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  const visible = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIdx = total - visible;

  function slide() {
    idx = idx >= maxIdx ? 0 : idx + 1;
    const w = cards[0].offsetWidth + 28;
    track.style.transform = `translateX(-${idx * w}px)`;
  }
  setInterval(slide, 4000);
}

// ── FORM VALIDATION ───────────────────────────────────────────
function initForms() {
  document.querySelectorAll('.enquiry-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Submitted! We will call you back.';
        btn.style.background = 'var(--green-accent)';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
          btn.disabled = false;
          form.reset();
        }, 4000);
      }, 1200);
    });
  });
}

// ── SMOOTH ANCHOR ─────────────────────────────────────────────
function initSmoothAnchors() {
  document.querySelectorAll('a[href*="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.startsWith('#') || (href.includes(window.location.pathname.split('/').pop()) && href.includes('#'))) {
        const id = href.split('#')[1];
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          const offset = 90;
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
      }
    });
  });
}

// ── INIT ALL ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  setTimeout(() => {
    initScrollReveal();
    initCounters();
    initTabs();
    initCourseFilter();
    initGallery();
    initTestimonialSlider();
    initForms();
    initSmoothAnchors();
  }, 50);
});
