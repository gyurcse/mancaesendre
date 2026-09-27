(function () {
  'use strict';

  /* 2026. augusztus 22., szombat 15:00 (helyi idő) – az esküvő napja */
  var WEDDING_DATE = new Date(2026, 7, 22, 15, 0, 0);

  function initScrollAnimations() {
    var sections = document.querySelectorAll('.animate-on-scroll');
    if (!sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
    );

    sections.forEach(function (el) {
      observer.observe(el);
    });
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function updateElapsed() {
    try {
      var now = new Date();
      var diff = Math.max(0, now - WEDDING_DATE);
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var secs = Math.floor((diff % (1000 * 60)) / 1000);

      var elDays = document.getElementById('countdown-days');
      var elHours = document.getElementById('countdown-hours');
      var elMins = document.getElementById('countdown-mins');
      var elSecs = document.getElementById('countdown-secs');
      if (elDays) elDays.textContent = days;
      if (elHours) elHours.textContent = pad(hours);
      if (elMins) elMins.textContent = pad(mins);
      if (elSecs) elSecs.textContent = pad(secs);
    } catch (e) {}
  }

  function initElapsed() {
    updateElapsed();
    setInterval(updateElapsed, 1000);
  }

  function buildFallbackSvg() {
    var s =
      window.EskuvoI18n && typeof window.EskuvoI18n.imgFallbackStrings === 'function'
        ? window.EskuvoI18n.imgFallbackStrings()
        : { line1: 'Esküvői fotó', line2: 'Kép feltöltés alatt', alt: 'Esküvői helyettesítő kép' };
    return (
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>" +
          "<defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>" +
          "<stop offset='0%' stop-color='%23d7e6ef'/><stop offset='100%' stop-color='%23b9d3e3'/>" +
          "</linearGradient></defs>" +
          "<rect width='1200' height='800' fill='url(%23g)'/>" +
          "<circle cx='1030' cy='130' r='180' fill='rgba(255,255,255,0.35)'/>" +
          "<circle cx='220' cy='700' r='220' fill='rgba(212,168,75,0.25)'/>" +
          "<text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' fill='%233d6a87' font-size='56' font-family='Arial, sans-serif'>" +
          String(s.line1).replace(/</g, "") +
          "</text>" +
          "<text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' fill='%235a6c7d' font-size='30' font-family='Arial, sans-serif'>" +
          String(s.line2).replace(/</g, "") +
          "</text>" +
          "</svg>"
      )
    );
  }

  function initImageFallbacks() {
    var images = document.querySelectorAll('img');
    if (!images.length) return;

    images.forEach(function (img) {
      img.addEventListener('error', function handleImageError() {
        if (img.dataset.fallbackApplied === '1') return;
        img.dataset.fallbackApplied = '1';
        img.src = buildFallbackSvg();
        var s =
          window.EskuvoI18n && typeof window.EskuvoI18n.imgFallbackStrings === 'function'
            ? window.EskuvoI18n.imgFallbackStrings()
            : { alt: 'Esküvői helyettesítő kép' };
        if (!img.alt || !img.alt.trim()) {
          img.alt = s.alt;
        }
      });
    });
  }

  function initSiteNav() {
    var root = document.getElementById('site-nav');
    var toggle = document.getElementById('site-nav-toggle');
    var drawer = document.getElementById('site-nav-menu');
    var backdrop = document.getElementById('site-nav-backdrop');
    if (!root || !toggle || !drawer || !backdrop || root.dataset.navBound === '1') return;
    root.dataset.navBound = '1';

    function tAria(key) {
      try {
        if (window.EskuvoI18n && typeof window.EskuvoI18n.t === 'function') {
          return window.EskuvoI18n.t(key);
        }
      } catch (e) {}
      return '';
    }

    function refreshToggleLabel() {
      var open = root.classList.contains('is-open');
      var label = open ? tAria('navMenuCloseAria') : tAria('navMenuOpenAria');
      if (label) toggle.setAttribute('aria-label', label);
    }

    function setOpen(open) {
      root.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      backdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.classList.toggle('site-nav--open', open);
      refreshToggleLabel();
    }

    refreshToggleLabel();

    toggle.addEventListener('click', function () {
      setOpen(!root.classList.contains('is-open'));
    });

    var closeBtn = document.getElementById('site-nav-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        setOpen(false);
      });
    }

    backdrop.addEventListener('click', function () {
      setOpen(false);
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && root.classList.contains('is-open')) {
        setOpen(false);
      }
    });

    drawer.querySelectorAll('a.site-nav__link').forEach(function (a) {
      a.addEventListener('click', function () {
        setOpen(false);
      });
    });

    window.addEventListener('eskuvo:lang', function () {
      refreshToggleLabel();
    });
  }

  function init() {
    if (window.EskuvoI18n && typeof window.EskuvoI18n.init === 'function') {
      window.EskuvoI18n.init();
    }
    initScrollAnimations();
    initElapsed();
    initImageFallbacks();
    initSiteNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
