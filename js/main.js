/* ============================================
   ALTIT LUXURY — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== HERO STARS ===== */
  const starsContainer = document.getElementById('heroStars');
  if (starsContainer) {
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const size = Math.random() * 2.5 + 0.5;
      s.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 100}%; left:${Math.random() * 100}%;
        --d:${(Math.random() * 4 + 2).toFixed(1)}s;
        --del:${(Math.random() * 4).toFixed(1)}s;
      `;
      starsContainer.appendChild(s);
    }
  }

  /* ===== CUSTOM CURSOR ===== */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    if (follower) { follower.style.left = fx + 'px'; follower.style.top = fy + 'px'; }
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .bento-card, .why-item, .gi, .ta-av').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  /* ===== NAVBAR ===== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  /* ===== BURGER MENU ===== */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  /* ===== SCROLL REVEAL ===== */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ===== STAT COUNTERS ===== */
  let counted = false;
  const statsSection = document.getElementById('stats');
  const countObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.count').forEach(el => {
        const target = parseInt(el.dataset.target);
        const step = target / (1800 / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = Math.round(cur);
          if (cur >= target) clearInterval(t);
        }, 16);
      });
    }
  }, { threshold: 0.3 });
  if (statsSection) countObs.observe(statsSection);

  /* ===== TESTIMONIALS ===== */
  const cards = document.querySelectorAll('.testi-card');
  const dots = document.querySelectorAll('.tn-dot');
  let cur = 0;
  let timer;

  function showTC(idx) {
    cards.forEach(c => c.classList.remove('on'));
    dots.forEach(d => d.classList.remove('on'));
    cur = (idx + cards.length) % cards.length;
    cards[cur].classList.add('on');
    dots[cur].classList.add('on');
  }

  function startTimer() {
    timer = setInterval(() => showTC(cur + 1), 5000);
  }

  document.getElementById('tNext')?.addEventListener('click', () => { clearInterval(timer); showTC(cur + 1); startTimer(); });
  document.getElementById('tPrev')?.addEventListener('click', () => { clearInterval(timer); showTC(cur - 1); startTimer(); });
  dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); showTC(parseInt(d.dataset.i)); startTimer(); }));
  showTC(0);
  startTimer();

  /* ===== CONTACT FORM ===== */
  const form = document.getElementById('contactForm');
  const formOk = document.getElementById('formOk');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.style.opacity = '0.6';
    setTimeout(() => {
      form.style.display = 'none';
      formOk.classList.add('show');
    }, 700);
  });

  /* ===== ACTIVE NAV LINKS ===== */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    sections.forEach(sec => {
      const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if (link) link.style.color = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight ? '#fff' : '';
    });
  });

});
