/* ============================================
   ALTIT LUXURY — GSAP Scroll Animations
   ============================================ */

gsap.registerPlugin(ScrollTrigger);

/* ─── Utility: split text into word spans ─── */
function splitWords(el) {
  if (!el) return [];
  const text = el.textContent.trim();
  el.innerHTML = text.split(' ').map(w => `<span class="word"><span class="word-inner">${w}</span></span>`).join(' ');
  return el.querySelectorAll('.word-inner');
}

/* ─── Utility: split text into char spans ─── */
function splitChars(el) {
  if (!el) return [];
  const text = el.textContent.trim();
  el.innerHTML = text.split('').map(c => c === ' ' ? ' ' : `<span class="char">${c}</span>`).join('');
  return el.querySelectorAll('.char');
}

window.addEventListener('load', () => {

  /* ===== HERO ANIMATIONS ===== */
  const heroName = document.querySelector('.hero-name');
  const heroLuxury = document.querySelector('.hero-luxury');
  const heroTag = document.querySelector('.hero-tag');
  const heroTagline = document.querySelector('.hero-tagline');
  const heroDivider = document.querySelector('.hero-divider');
  const heroBtns = document.querySelector('.hero-btns');
  const heroBgImg = document.querySelector('.hero-bg-img');

  /* Parallax on hero orbs */
  gsap.to('.hero-orb1', {
    y: -80, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });
  gsap.to('.hero-orb2', {
    y: -50, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* Hero logo */
  gsap.from('.hero-logo-wrap', {
    opacity: 0, y: -20, duration: 0.9, delay: 0.2, ease: 'power3.out'
  });

  /* Hero tag pill */
  if (heroTag) {
    gsap.from(heroTag, {
      opacity: 0, y: 20, duration: 0.8, delay: 0.5, ease: 'power3.out'
    });
  }

  /* Hero title — char by char */
  if (heroName) {
    const chars = splitChars(heroName);
    gsap.from(chars, {
      opacity: 0, y: 60, rotateX: -40,
      stagger: 0.06, duration: 1, delay: 0.6,
      ease: 'power4.out',
      transformOrigin: '0% 50% -50'
    });
  }

  /* LUXURY subtitle */
  if (heroLuxury) {
    gsap.from(heroLuxury, {
      opacity: 0, letterSpacing: '1em', duration: 1.2, delay: 1,
      ease: 'power3.out'
    });
  }

  /* Divider line */
  if (heroDivider) {
    gsap.from(heroDivider, {
      scaleX: 0, duration: 1, delay: 1.3, ease: 'power3.out', transformOrigin: 'center'
    });
  }

  /* Tagline words */
  if (heroTagline) {
    const words = splitWords(heroTagline);
    gsap.from(words, {
      opacity: 0, y: 30,
      stagger: 0.05, duration: 0.7, delay: 1.4,
      ease: 'power3.out'
    });
  }

  /* Buttons */
  if (heroBtns) {
    gsap.from(heroBtns.children, {
      opacity: 0, y: 20, stagger: 0.15, duration: 0.7, delay: 1.8,
      ease: 'power3.out'
    });
  }

  /* ===== MARQUEE — speed up on scroll ===== */
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    ScrollTrigger.create({
      trigger: '.marquee-wrap',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: self => {
        const speed = 28 - self.getVelocity() / 200;
        gsap.to(marqueeTrack, { animationDuration: `${Math.max(8, speed)}s`, overwrite: 'auto' });
      }
    });
  }

  /* ===== STATS — stagger in ===== */
  gsap.from('.stat-box', {
    opacity: 0, y: 50, stagger: 0.12, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '#stats', start: 'top 80%' }
  });

  /* ===== ABOUT ===== */
  const aboutVisual = document.querySelector('.about-visual');
  const aboutText = document.querySelector('.about-text');

  if (aboutVisual) {
    gsap.from(aboutVisual, {
      opacity: 0, y: 80, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 80%' }
    });
    gsap.from('.about-photo-badge', {
      opacity: 0, scale: 0.7, duration: 0.8, delay: 0.5, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: '#about', start: 'top 80%' }
    });
    gsap.from('.about-card', {
      opacity: 0, x: 30, duration: 0.8, delay: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 80%' }
    });
  }

  if (aboutText) {
    const aboutH2 = aboutText.querySelector('.h2');
    if (aboutH2) {
      const words = splitWords(aboutH2);
      gsap.from(words, {
        opacity: 0, y: 40, stagger: 0.05, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: aboutText, start: 'top 80%' }
      });
    }
    gsap.from(aboutText.querySelectorAll('.body-text, .values, .founder-pill, .btn'), {
      opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: aboutText, start: 'top 75%' }
    });
  }

  /* ===== SERVICES heading ===== */
  const servicesHead = document.querySelector('.services-head');
  if (servicesHead) {
    const h2 = servicesHead.querySelector('.h2');
    if (h2) splitWords(h2);
    gsap.from(servicesHead.querySelectorAll('.eyebrow, .word-inner'), {
      opacity: 0, y: 40, stagger: 0.04, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: servicesHead, start: 'top 80%' }
    });
  }

  /* ===== BENTO CARDS — stagger from bottom ===== */
  gsap.from('.bento-card', {
    opacity: 0, y: 60, scale: 0.96, stagger: 0.08, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.bento', start: 'top 80%' }
  });

  /* ===== WHY heading ===== */
  const whyTop = document.querySelector('.why-top');
  if (whyTop) {
    const h2 = whyTop.querySelector('.h2');
    if (h2) {
      const words = splitWords(h2);
      gsap.from(words, {
        opacity: 0, y: 40, stagger: 0.06, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: whyTop, start: 'top 80%' }
      });
    }
  }

  /* ===== WHY items ===== */
  gsap.from('.why-item', {
    opacity: 0, y: 50, stagger: 0.15, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '.why-grid', start: 'top 80%' }
  });

  /* ===== WHY big number scrub ===== */
  const whyBgText = document.querySelector('.why-bg-text');
  if (whyBgText) {
    gsap.fromTo(whyBgText,
      { xPercent: -5 },
      { xPercent: 5, ease: 'none',
        scrollTrigger: { trigger: '#why', start: 'top bottom', end: 'bottom top', scrub: 1 }
      }
    );
  }

  /* ===== DARIMPO ===== */
  gsap.from('.darimpo-section', {
    opacity: 0, y: 60, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.darimpo-section', start: 'top 80%' }
  });
  gsap.from('.device-shell', {
    opacity: 0, y: 40, rotateY: -8, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: '.darimpo-section', start: 'top 75%' }
  });
  gsap.from('.dp-feat', {
    opacity: 0, x: -20, stagger: 0.1, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: '.darimpo-section', start: 'top 70%' }
  });

  /* ===== GALLERY ===== */
  gsap.from('.gi', {
    opacity: 0, scale: 0.94, stagger: 0.12, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' }
  });

  /* Parallax inside gallery big image */
  const giBig = document.querySelector('.gi.big img');
  if (giBig) {
    gsap.to(giBig, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: { trigger: '.gi.big', start: 'top bottom', end: 'bottom top', scrub: true }
    });
  }

  /* ===== TESTIMONIALS heading ===== */
  const testiHead = document.querySelector('.testi-head');
  if (testiHead) {
    const h2 = testiHead.querySelector('.h2');
    if (h2) {
      const words = splitWords(h2);
      gsap.from(words, {
        opacity: 0, y: 40, stagger: 0.06, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: testiHead, start: 'top 80%' }
      });
    }
  }
  gsap.from('.testi-quote', {
    opacity: 0, scale: 0.7, duration: 1, ease: 'back.out(1.2)',
    scrollTrigger: { trigger: '#testimonials', start: 'top 80%' }
  });

  /* ===== CONTACT ===== */
  const contactLeft = document.querySelector('.contact-left');
  const contactRight = document.querySelector('.contact-right');
  if (contactLeft) {
    const h2 = contactLeft.querySelector('.h2');
    if (h2) {
      const words = splitWords(h2);
      gsap.from(words, {
        opacity: 0, y: 40, stagger: 0.06, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: contactLeft, start: 'top 80%' }
      });
    }
    gsap.from(contactLeft.querySelectorAll('.gold-rule, .body-text, .ci-row, .socials'), {
      opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: contactLeft, start: 'top 75%' }
    });
  }
  if (contactRight) {
    gsap.from(contactRight, {
      opacity: 0, x: 50, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: contactRight, start: 'top 80%' }
    });
  }

  /* ===== FOOTER ===== */
  gsap.from('.footer-brand, .footer-col', {
    opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#footer', start: 'top 90%' }
  });

  /* ===== SECTION EYEBROWS (all) ===== */
  document.querySelectorAll('.eyebrow').forEach(el => {
    gsap.from(el, {
      opacity: 0, x: -20, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  /* ===== GOLD RULES ===== */
  document.querySelectorAll('.gold-rule').forEach(el => {
    gsap.from(el, {
      scaleX: 0, duration: 0.8, ease: 'power3.out', transformOrigin: 'left center',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  /* ===== PIN HERO on scroll start (subtle) ===== */
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: '+=200',
    onLeave: () => gsap.to('.hero-content', { opacity: 0.4, y: -30, duration: 0.5 }),
    onEnterBack: () => gsap.to('.hero-content', { opacity: 1, y: 0, duration: 0.5 })
  });

  /* Disable .reveal CSS fallback since GSAP handles everything */
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

});
