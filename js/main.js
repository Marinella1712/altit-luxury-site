/* ============================================
   ALTIT LUXURY — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== CUSTOM CURSOR ===== */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (cursor) {
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }
  });

  function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    if (follower) {
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
    }
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .service-row, .g-item, .tc-av').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) { cursor.style.width = '16px'; cursor.style.height = '16px'; }
      if (follower) { follower.style.width = '60px'; follower.style.height = '60px'; }
    });
    el.addEventListener('mouseleave', () => {
      if (cursor) { cursor.style.width = '8px'; cursor.style.height = '8px'; }
      if (follower) { follower.style.width = '36px'; follower.style.height = '36px'; }
    });
  });

  /* ===== NAVBAR ===== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  /* ===== BURGER MENU ===== */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ===== SCROLL ANIMATIONS ===== */
  const scrollEls = document.querySelectorAll('[data-scroll]');
  const scrollObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        scrollObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  scrollEls.forEach(el => scrollObs.observe(el));

  /* ===== STAT COUNTERS ===== */
  let counted = false;
  const statsSection = document.getElementById('stats');
  const countObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.count').forEach(el => {
        const target = parseInt(el.dataset.target);
        const dur = 1800;
        const step = target / (dur / 16);
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
  const cards = document.querySelectorAll('.tc');
  const dots = document.querySelectorAll('.td');
  let cur = 0;
  let timer;

  function showTC(idx) {
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    cur = (idx + cards.length) % cards.length;
    cards[cur].classList.add('active');
    dots[cur].classList.add('active');
  }

  function startTimer() {
    timer = setInterval(() => showTC(cur + 1), 5000);
  }

  document.getElementById('tNext')?.addEventListener('click', () => { clearInterval(timer); showTC(cur + 1); startTimer(); });
  document.getElementById('tPrev')?.addEventListener('click', () => { clearInterval(timer); showTC(cur - 1); startTimer(); });
  dots.forEach(d => d.addEventListener('click', () => { clearInterval(timer); showTC(parseInt(d.dataset.i)); startTimer(); }));
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
      form.classList.add('hidden');
      formOk.classList.remove('hidden');
    }, 700);
  });

  /* ===== ACTIVE NAV ===== */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    sections.forEach(sec => {
      const link = document.querySelector(`.nav-center a[href="#${sec.id}"]`);
      if (link) link.style.color = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight ? '#fff' : '';
    });
  });

});
