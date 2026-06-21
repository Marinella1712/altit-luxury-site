/* ============================================
   ALTIT LUXURY - Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== NAVBAR SCROLL ===== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ===== MOBILE NAV TOGGLE ===== */
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });

  /* ===== PARTICLES ===== */
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        --dur: ${Math.random() * 8 + 6}s;
        --delay: ${Math.random() * 6}s;
      `;
      particleContainer.appendChild(p);
    }
  }

  /* ===== COUNTER ANIMATION ===== */
  const counters = document.querySelectorAll('.stat-num');
  let counted = false;

  function animateCounters() {
    if (counted) return;
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counted = true;
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.round(current);
        }, 16);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters();

  /* ===== SCROLL ANIMATIONS (AOS) ===== */
  const aosElements = document.querySelectorAll('[data-aos]');

  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-visible');
        }, parseInt(delay));
        aosObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  aosElements.forEach(el => aosObserver.observe(el));

  /* ===== TESTIMONIALS SLIDER ===== */
  const cards = document.querySelectorAll('.testi-card');
  const dots = document.querySelectorAll('.dot');
  let currentTesti = 0;
  let testiTimer;

  function showTesti(idx) {
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentTesti = (idx + cards.length) % cards.length;
    cards[currentTesti].classList.add('active');
    dots[currentTesti].classList.add('active');
  }

  function startAutoplay() {
    testiTimer = setInterval(() => showTesti(currentTesti + 1), 5000);
  }

  function resetAutoplay() {
    clearInterval(testiTimer);
    startAutoplay();
  }

  document.getElementById('testiNext')?.addEventListener('click', () => {
    showTesti(currentTesti + 1);
    resetAutoplay();
  });
  document.getElementById('testiPrev')?.addEventListener('click', () => {
    showTesti(currentTesti - 1);
    resetAutoplay();
  });
  dots.forEach(d => {
    d.addEventListener('click', () => {
      showTesti(parseInt(d.dataset.idx));
      resetAutoplay();
    });
  });

  startAutoplay();

  /* ===== CONTACT FORM ===== */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.style.opacity = '0.7';
    // Simulate send (replace with real endpoint)
    setTimeout(() => {
      form.classList.add('hidden');
      formSuccess.classList.remove('hidden');
    }, 800);
  });

  /* ===== SMOOTH SCROLL OFFSET (fixed nav) ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===== ACTIVE NAV LINK ON SCROLL ===== */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.style.color = scrollY >= top && scrollY < top + height
          ? 'var(--gold-light)'
          : '';
      }
    });
  });

});
