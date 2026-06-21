/* ============================================
   ALTIT LUXURY — GSAP Scroll Animations
   ============================================ */

gsap.registerPlugin(ScrollTrigger);

function splitWords(el) {
  if (!el) return [];
  el.innerHTML = el.textContent.trim().split(' ')
    .map(w => `<span class="word"><span class="word-inner">${w}</span></span>`).join(' ');
  return el.querySelectorAll('.word-inner');
}

function splitChars(el) {
  if (!el) return [];
  el.innerHTML = el.textContent.trim().split('')
    .map(c => c === ' ' ? ' ' : `<span class="char">${c}</span>`).join('');
  return el.querySelectorAll('.char');
}

window.addEventListener('load', () => {

  /* ===== HERO ===== */
  gsap.from('.hero-logo-wrap', { opacity: 0, y: -20, duration: .9, delay: .2, ease: 'power3.out' });
  gsap.from('.hero-tag',       { opacity: 0, y: 16,  duration: .8, delay: .5, ease: 'power3.out' });

  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    const chars = splitChars(heroName);
    gsap.from(chars, {
      opacity: 0, y: 70, rotateX: -45, stagger: .055,
      duration: 1.1, delay: .7, ease: 'power4.out',
      transformOrigin: '0 50% -50'
    });
  }

  gsap.from('.hero-luxury',  { opacity: 0, letterSpacing: '1.2em', duration: 1.3, delay: 1.1, ease: 'power3.out' });
  gsap.from('.hero-divider', { scaleX: 0, duration: .9, delay: 1.4, ease: 'power3.out', transformOrigin: 'center' });

  const heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline) {
    const words = splitWords(heroTagline);
    gsap.from(words, { opacity: 0, y: 22, stagger: .04, duration: .7, delay: 1.5, ease: 'power3.out' });
  }

  gsap.from('.hero-btns > *', { opacity: 0, y: 18, stagger: .15, duration: .7, delay: 1.9, ease: 'power3.out' });

  /* Hero orbs parallax */
  gsap.to('.hero-orb1', { y: -100, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });
  gsap.to('.hero-orb2', { y: -60,  ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });

  /* Hero content fades as you scroll away */
  gsap.to('.hero-content', {
    opacity: 0, y: -60, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'center top', end: 'bottom top', scrub: .8 }
  });

  /* ===== STATS ===== */
  gsap.from('.stat-box', {
    opacity: 0, y: 40, stagger: .12, duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: '#stats', start: 'top 82%' }
  });

  /* ===== ABOUT photo + text ===== */
  gsap.from('.about-photo-side', {
    opacity: 0, x: -60, duration: 1.2, ease: 'power3.out',
    scrollTrigger: { trigger: '#about', start: 'top 78%' }
  });
  gsap.from('.about-photo-badge', {
    opacity: 0, scale: .75, duration: .9, delay: .3, ease: 'back.out(1.5)',
    scrollTrigger: { trigger: '#about', start: 'top 78%' }
  });

  const aboutH2 = document.querySelector('.about-text-side .h2');
  if (aboutH2) {
    const words = splitWords(aboutH2);
    gsap.from(words, {
      opacity: 0, y: 35, stagger: .05, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: '.about-text-side', start: 'top 80%' }
    });
  }
  gsap.from('.about-text-side .gold-rule, .about-text-side p, .values, .founder-pill, .about-text-side .btn', {
    opacity: 0, y: 25, stagger: .1, duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: '.about-text-side', start: 'top 78%' }
  });

  /* ===== SERVICES heading ===== */
  const svcH2 = document.querySelector('.services-head .h2');
  if (svcH2) {
    const words = splitWords(svcH2);
    gsap.from(words, {
      opacity: 0, y: 30, stagger: .05, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: '.services-head', start: 'top 82%' }
    });
  }

  /* Services rows — slide from side */
  document.querySelectorAll('.svc-item').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0, x: document.documentElement.dir === 'rtl' ? 40 : -40,
      duration: .7, delay: i * .06, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* ===== WHY ===== */
  const whyH2 = document.querySelector('.why-top .h2');
  if (whyH2) {
    const words = splitWords(whyH2);
    gsap.from(words, {
      opacity: 0, y: 35, stagger: .06, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: '.why-top', start: 'top 82%' }
    });
  }
  gsap.from('.why-item', {
    opacity: 0, y: 50, stagger: .14, duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: '.why-grid', start: 'top 82%' }
  });
  /* WHY background word scrub */
  gsap.fromTo('.why-bg-word',
    { xPercent: -8 },
    { xPercent: 8, ease: 'none',
      scrollTrigger: { trigger: '#why', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
    }
  );

  /* ===== DARIMPO ===== */
  gsap.from('.darimpo-section', {
    opacity: 0, y: 55, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.darimpo-section', start: 'top 82%' }
  });
  gsap.from('.device-shell', {
    opacity: 0, y: 40, rotateY: -10, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.darimpo-section', start: 'top 78%' }
  });
  gsap.from('.dp-feat', {
    opacity: 0, x: -18, stagger: .09, duration: .6, ease: 'power3.out',
    scrollTrigger: { trigger: '.dp-features', start: 'top 82%' }
  });

  /* ===== GALLERY ===== */
  gsap.from('.gallery-head .eyebrow, .gallery-head .h2', {
    opacity: 0, y: 25, stagger: .12, duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: '.gallery-head', start: 'top 84%' }
  });
  gsap.from('.gi', {
    opacity: 0, scale: .95, stagger: .1, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.gallery-grid', start: 'top 82%' }
  });
  /* Parallax inside big gallery image */
  const giBigImg = document.querySelector('.gi.big img');
  if (giBigImg) {
    gsap.to(giBigImg, {
      yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: '.gi.big', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  /* ===== TESTIMONIALS ===== */
  const testiH2 = document.querySelector('.testi-head .h2');
  if (testiH2) {
    const words = splitWords(testiH2);
    gsap.from(words, {
      opacity: 0, y: 30, stagger: .06, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: '.testi-head', start: 'top 82%' }
    });
  }
  gsap.from('.testi-quote', {
    opacity: 0, scale: .6, duration: 1, ease: 'back.out(1.3)',
    scrollTrigger: { trigger: '#testimonials', start: 'top 82%' }
  });

  /* ===== CONTACT ===== */
  const contactH2 = document.querySelector('.contact-left .h2');
  if (contactH2) {
    const words = splitWords(contactH2);
    gsap.from(words, {
      opacity: 0, y: 30, stagger: .06, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: '.contact-left', start: 'top 82%' }
    });
  }
  gsap.from('.contact-left .gold-rule, .contact-left p, .ci-row, .socials', {
    opacity: 0, y: 22, stagger: .09, duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: '.contact-left', start: 'top 78%' }
  });
  gsap.from('.contact-right', {
    opacity: 0, x: 50, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '#contact', start: 'top 80%' }
  });

  /* ===== FOOTER ===== */
  gsap.from('.footer-brand, .footer-col', {
    opacity: 0, y: 25, stagger: .1, duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: '#footer', start: 'top 92%' }
  });

  /* ===== GOLD RULES ===== */
  document.querySelectorAll('.gold-rule').forEach(el => {
    gsap.from(el, {
      scaleX: 0, duration: .9, ease: 'power3.out', transformOrigin: 'left center',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  /* Disable CSS reveal fallback — GSAP handles everything */
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

});
