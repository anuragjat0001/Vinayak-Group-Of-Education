/**
 * VINAYAK GROUP OF INSTITUTIONS
 * Master JavaScript — Complete Functionality
 * Version: 2.0 Production
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════
   1. COMPONENT LOADER
═══════════════════════════════════════════════════════════════ */
async function loadComponent(id, path) {
  const container = document.getElementById(id);
  if (!container) return;
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
    const html = await response.text();
    container.innerHTML = html;
    container.removeAttribute('data-component');
    return true;
  } catch (e) {
    console.error('Component load error:', e);
    return false;
  }
}

async function loadComponents() {
  const root = getRoot();
  await Promise.all([
    loadComponent('nav-container',    root + 'components/nav.html'),
    loadComponent('footer-container', root + 'components/footer.html'),
  ]);
  // After loading, initialize nav-specific functionality
  initNavbar();
  initMobileMenu();
  setActiveNavLink();
  // Mark body loaded
  document.body.classList.add('components-loaded');
}

function getRoot() {
  // Determine relative path to root based on current page location
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length;
  // If index.html or root-level page, root = './'
  // All our pages are at root level
  return './';
}

/* ═══════════════════════════════════════════════════════════════
   2. NAVBAR
═══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const announcementBar = document.getElementById('announcement-bar');
  if (!navbar) return;

  // Check for announcement bar
  if (announcementBar) {
    navbar.classList.add('has-announcement');
  }

  // Scroll behavior
  let lastScroll = 0;
  const scrollHandler = () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('has-announcement');
    } else {
      navbar.classList.remove('scrolled');
      if (announcementBar) navbar.classList.add('has-announcement');
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
  scrollHandler(); // Run on load
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link[href]');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href === './' + currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   3. MOBILE MENU
═══════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay   = document.getElementById('mobile-menu-overlay');
  if (!hamburger || !mobileMenu || !overlay) return;

  const open = () => {
    hamburger.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) close(); else open();
  });
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', close);
  });
}

/* ═══════════════════════════════════════════════════════════════
   4. SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   5. COUNTER ANIMATION
═══════════════════════════════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeFn = t => 1 - Math.pow(1 - t, 3); // easeOutCubic

  const animateCounter = (el) => {
    const target = el.dataset.count;
    const hasPlus = String(target).includes('+');
    const num = parseInt(String(target).replace(/[^0-9]/g, ''));
    const duration = parseInt(el.dataset.duration || '2000');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || (hasPlus ? '+' : '');
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeFn(progress);
      const current = Math.floor(eased * num);
      el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + num.toLocaleString('en-IN') + suffix;
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   6. GALLERY FILTER + LIGHTBOX
═══════════════════════════════════════════════════════════════ */
function initGallery() {
  initGalleryFilter();
  initLightbox();
}

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        const cat = item.dataset.category;
        const show = filter === 'all' || cat === filter;
        item.style.display = show ? '' : 'none';
        // Re-apply grid span if needed
        if (show) {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          });
        }
      });
    });
  });

  // Course filter (separate data attribute)
  const courseFilters = document.querySelectorAll('.filter-btn[data-course-filter]');
  const courseCards   = document.querySelectorAll('.course-card[data-cat]');
  if (!courseFilters.length) return;

  courseFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      courseFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.courseFilter;
      courseCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
      });
    });
  });
}

// Lightbox
let lightboxImages = [];
let lightboxIndex  = 0;

function initLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbCounter = document.getElementById('lb-counter');
  const lbClose   = document.getElementById('lb-close');
  const lbPrev    = document.getElementById('lb-prev');
  const lbNext    = document.getElementById('lb-next');
  if (!lightbox) return;

  // Collect all gallery items
  function collectImages() {
    lightboxImages = Array.from(document.querySelectorAll('.gallery-item[data-src]')).filter(el => el.style.display !== 'none');
  }

  function openLightbox(idx) {
    collectImages();
    lightboxIndex = idx;
    updateLightbox();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = lightboxImages[lightboxIndex];
    if (!item) return;
    lbImg.src = item.dataset.src;
    lbImg.alt = item.dataset.caption || '';
    if (lbCaption) lbCaption.textContent = item.dataset.caption || '';
    if (lbCounter) lbCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  }

  function navigate(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    updateLightbox();
  }

  // Attach click handlers to gallery items
  document.querySelectorAll('.gallery-item[data-src]').forEach((item, idx) => {
    item.addEventListener('click', () => {
      collectImages();
      const currentIdx = lightboxImages.indexOf(item);
      openLightbox(currentIdx >= 0 ? currentIdx : 0);
    });
  });

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', () => navigate(-1));
  lbNext?.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/* ═══════════════════════════════════════════════════════════════
   7. TABS
═══════════════════════════════════════════════════════════════ */
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach(nav => {
    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const wrapper = nav.closest('[data-tabs]') || nav.parentElement;
        const target = btn.dataset.tab;
        wrapper.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        wrapper.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = wrapper.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   8. FACULTY SEARCH + FILTER
═══════════════════════════════════════════════════════════════ */
function initFacultySearch() {
  const searchInput = document.getElementById('faculty-search');
  const deptFilter  = document.getElementById('faculty-dept-filter');
  if (!searchInput && !deptFilter) return;

  const cards = document.querySelectorAll('.faculty-card[data-dept]');
  const sections = document.querySelectorAll('.faculty-dept-section[data-dept]');
  const noResults = document.getElementById('faculty-no-results');

  function applyFilter() {
    const q    = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const dept = deptFilter  ? deptFilter.value : 'all';
    let count = 0;

    cards.forEach(card => {
      const name    = (card.dataset.name    || '').toLowerCase();
      const cardDept = (card.dataset.dept   || '').toLowerCase();
      const subject = (card.dataset.subject || '').toLowerCase();
      const matchSearch = !q || name.includes(q) || subject.includes(q);
      const matchDept   = dept === 'all' || cardDept === dept;
      const show = matchSearch && matchDept;
      card.style.display = show ? '' : 'none';
      if (show) count++;
    });

    // Show/hide department sections
    sections.forEach(section => {
      const hasVisible = Array.from(section.querySelectorAll('.faculty-card')).some(c => c.style.display !== 'none');
      section.style.display = hasVisible ? '' : 'none';
    });

    if (noResults) noResults.style.display = count === 0 ? '' : 'none';
  }

  searchInput?.addEventListener('input', applyFilter);
  deptFilter?.addEventListener('change', applyFilter);
}

/* ═══════════════════════════════════════════════════════════════
   9. SMOOTH SCROLL
═══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      // Only handle same-page anchors
      if (href.startsWith('#') || href.startsWith(window.location.pathname + '#')) {
        const id = href.split('#')[1];
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
          const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   10. BACK TO TOP + SCROLL PERCENTAGE
═══════════════════════════════════════════════════════════════ */
function initScrollUtils() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ═══════════════════════════════════════════════════════════════
   11. FORM HANDLING (Formspree + Validation)
═══════════════════════════════════════════════════════════════ */
function initForms() {
  document.querySelectorAll('[data-formspree]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const endpoint = form.dataset.formspree;
      const btn = form.querySelector('[type="submit"]');
      const successMsg = form.querySelector('[data-success]');
      const errorMsg   = form.querySelector('[data-error]');

      if (!validateForm(form)) return;

      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>Sending…</span>';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        const resp = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (resp.ok) {
          btn.innerHTML = '✓ Message Sent!';
          btn.style.background = '#2E7D52';
          form.reset();
          if (successMsg) {
            successMsg.style.display = '';
            setTimeout(() => successMsg.style.display = 'none', 6000);
          }
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.background = '';
          }, 5000);
        } else {
          throw new Error('Server error');
        }
      } catch (err) {
        btn.innerHTML = '✗ Failed — Try Again';
        btn.style.background = '#C0392B';
        if (errorMsg) {
          errorMsg.style.display = '';
          setTimeout(() => errorMsg.style.display = 'none', 5000);
        }
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 4000);
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const errorEl = form.querySelector(`[data-error-for="${field.name}"]`);
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--error)';
      if (errorEl) errorEl.style.display = '';
      isValid = false;
      setTimeout(() => { field.style.borderColor = ''; if (errorEl) errorEl.style.display = 'none'; }, 3500);
    }
    if (field.type === 'email' && field.value && !field.value.includes('@')) {
      field.style.borderColor = 'var(--error)';
      isValid = false;
      setTimeout(() => field.style.borderColor = '', 3500);
    }
  });
  if (!isValid) {
    form.querySelector('[required]')?.focus();
  }
  return isValid;
}

/* ═══════════════════════════════════════════════════════════════
   12. ANNOUNCEMENT BAR TICKER
═══════════════════════════════════════════════════════════════ */
function initTicker() {
  const track = document.querySelector('.trust-strip-track');
  if (!track) return;
  // Clone for seamless loop
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}

/* ═══════════════════════════════════════════════════════════════
   13. IMAGE LAZY LOADING
═══════════════════════════════════════════════════════════════ */
function initLazyImages() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        if (img.dataset.srcset) img.srcset = img.dataset.srcset;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '200px 0px' });

  document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
}

/* ═══════════════════════════════════════════════════════════════
   14. TESTIMONIAL AUTO-ROTATE
═══════════════════════════════════════════════════════════════ */
function initTestimonialSlider() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  let current = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;

  function getVisible() {
    const w = window.innerWidth;
    if (w < 640)  return 1;
    if (w < 1024) return 2;
    return 3;
  }

  function slide() {
    const visible = getVisible();
    const maxIdx = total - visible;
    current = current >= maxIdx ? 0 : current + 1;
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(track).gap || '24');
    track.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  }

  let interval = setInterval(slide, 4500);
  track.closest('.testimonials-wrapper')?.addEventListener('mouseenter', () => clearInterval(interval));
  track.closest('.testimonials-wrapper')?.addEventListener('mouseleave', () => { interval = setInterval(slide, 4500); });
}

/* ═══════════════════════════════════════════════════════════════
   15. PAGE TRANSITION
═══════════════════════════════════════════════════════════════ */
function initPageTransition() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { document.body.style.opacity = '1'; }, 50);
  });
}

/* ═══════════════════════════════════════════════════════════════
   16. ACCORDIONS / FAQ
═══════════════════════════════════════════════════════════════ */
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item    = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen  = item.classList.contains('is-open');

      // Close all
      document.querySelectorAll('.accordion-item.is-open').forEach(openItem => {
        openItem.classList.remove('is-open');
        const c = openItem.querySelector('.accordion-content');
        if (c) c.style.maxHeight = '0';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('is-open');
        if (content) content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   17. UTILITY FUNCTIONS
═══════════════════════════════════════════════════════════════ */
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); };
}

function throttle(fn, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); }
  };
}

/* ═══════════════════════════════════════════════════════════════
   18. INIT — ORCHESTRATE EVERYTHING
═══════════════════════════════════════════════════════════════ */
async function init() {
  // Load components first (nav + footer)
  await loadComponents();

  // Then initialize everything
  initScrollReveal();
  initCounters();
  initGallery();
  initTabs();
  initFacultySearch();
  initSmoothScroll();
  initScrollUtils();
  initForms();
  initTicker();
  initLazyImages();
  initTestimonialSlider();
  initAccordions();
  initPageTransition();

  // Window events
  window.addEventListener('resize', debounce(() => {
    // Re-run any size-dependent logic
  }, 200));
}

// Entry point
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
