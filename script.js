(function () {
  'use strict';

  var STORAGE_KEY = 'eskuvo_boritek_megnyitva';
  var overlay = document.getElementById('envelope-overlay');
  var mainContent = document.getElementById('main-content');

  /* 2026. augusztus 22., szombat 15:00 (helyi idő) */
  var WEDDING_DATE = new Date(2026, 7, 22, 15, 0, 0);

  function marMegnyitottak() {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function megnyitvaMent() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}
  }

  function mutasdAzOldalt() {
    overlay.classList.add('open');
    mainContent.classList.remove('content-hidden');
    mainContent.classList.add('content-zoom-in');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        mainContent.classList.add('zoom-done');
      });
    });
    setTimeout(function () {
      overlay.classList.add('zoom-phase');
    }, 450);
    setTimeout(function () {
      overlay.classList.add('hidden');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('zoom-phase');
      mainContent.classList.remove('content-zoom-in', 'zoom-done');
    }, 1700);
    megnyitvaMent();
  }

  function initEnvelope() {
    if (document.documentElement.getAttribute('data-invite') === 'chooser') return;
    if (!overlay || !mainContent) return;

    /* Mobilon és gépen is: első látogatáskor boríték, utána már az oldal */
    if (marMegnyitottak()) {
      overlay.style.display = 'none';
      mainContent.classList.remove('content-hidden');
      return;
    }

    mainContent.classList.add('content-hidden');
    overlay.setAttribute('aria-hidden', 'false');

    overlay.addEventListener('click', function handleOpen() {
      overlay.removeEventListener('click', handleOpen);
      mutasdAzOldalt();
    });
  }

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

  function updateCountdown() {
    try {
      var now = new Date();
      if (now >= WEDDING_DATE) {
        var elD = document.getElementById('countdown-days');
        var elH = document.getElementById('countdown-hours');
        var elM = document.getElementById('countdown-mins');
        var elS = document.getElementById('countdown-secs');
        if (elD) elD.textContent = '0';
        if (elH) elH.textContent = '00';
        if (elM) elM.textContent = '00';
        if (elS) elS.textContent = '00';
        return;
      }
      var diff = WEDDING_DATE - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var secs = Math.floor((diff % (1000 * 60)) / 1000);

      var elDays = document.getElementById('countdown-days');
      var elHours = document.getElementById('countdown-hours');
      var elMins = document.getElementById('countdown-mins');
      var elSecs = document.getElementById('countdown-secs');
      if (elDays) elDays.textContent = isNaN(days) ? '—' : days;
      if (elHours) elHours.textContent = isNaN(hours) ? '—' : pad(hours);
      if (elMins) elMins.textContent = isNaN(mins) ? '—' : pad(mins);
      if (elSecs) elSecs.textContent = isNaN(secs) ? '—' : pad(secs);
    } catch (e) {}
  }

  function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
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

  function ensureGoogleFormEmbeddedUrl(raw) {
    var u = (raw || '').trim();
    if (!u) return '';
    try {
      var url = new URL(u, window.location.href);
      url.searchParams.set('embedded', 'true');
      return url.toString();
    } catch (e) {
      if (/\bembedded=true\b/i.test(u)) return u;
      return u + (u.indexOf('?') === -1 ? '?' : '&') + 'embedded=true';
    }
  }

  function googleFormOpenUrl(raw) {
    var u = (raw || '').trim();
    if (!u) return '';
    try {
      var url = new URL(u, window.location.href);
      url.searchParams.delete('embedded');
      var s = url.toString();
      return s.replace(/\?$/, '');
    } catch (e2) {
      return u.replace(/[?&]embedded=true\b/gi, '').replace(/\?$/, '');
    }
  }

  function syncRsvpGoogleEmbed() {
    var root = document.getElementById('rsvp-google-root');
    if (!root) return;
    var iframe = document.getElementById('rsvp-google-iframe');
    var fb = document.getElementById('rsvp-google-fallback');
    var openA = document.getElementById('rsvp-google-open');
    var extRow = document.querySelector('.rsvp-google-external');
    var v = document.documentElement.getAttribute('data-invite') || 'fri-sat';

    if (v === 'chooser') {
      if (iframe) {
        iframe.removeAttribute('src');
        iframe.hidden = true;
      }
      if (fb) fb.hidden = true;
      if (extRow) extRow.hidden = true;
      return;
    }

    var urlFri = (root.getAttribute('data-form-fri-sat') || '').trim();
    var urlSat = (root.getAttribute('data-form-sat-only') || '').trim();
    var url = v === 'sat-only' ? urlSat : urlFri;

    if (!url) {
      if (iframe) {
        iframe.removeAttribute('src');
        iframe.hidden = true;
      }
      if (fb) fb.hidden = false;
      if (extRow) extRow.hidden = true;
      if (openA) openA.setAttribute('href', '#');
      return;
    }

    var embed = ensureGoogleFormEmbeddedUrl(url);
    if (iframe) {
      iframe.hidden = false;
      if (iframe.getAttribute('src') !== embed) iframe.setAttribute('src', embed);
    }
    if (fb) fb.hidden = true;
    if (extRow) extRow.hidden = false;
    if (openA) openA.setAttribute('href', googleFormOpenUrl(url));
  }

  function initInviteVariant() {
    var v = document.documentElement.getAttribute('data-invite') || 'fri-sat';
    if (v === 'chooser') return;
    syncRsvpGoogleEmbed();
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

    drawer.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        setOpen(false);
      });
    });

    window.addEventListener('eskuvo:lang', function () {
      refreshToggleLabel();
    });
  }

  function initImageLightbox() {
    var trigger = document.querySelector('.faq-plan-trigger');
    var dialog = document.getElementById('faq-plan-lightbox');
    if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

    var panel = dialog.querySelector('.image-lightbox__panel');
    var closeBtn = dialog.querySelector('.image-lightbox__close');

    trigger.addEventListener('click', function () {
      dialog.showModal();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        dialog.close();
      });
    }

    dialog.addEventListener('click', function (e) {
      if (panel && !panel.contains(e.target)) {
        dialog.close();
      }
    });

    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dialog.close();
      }
    });
  }

  function initCoreAfterInvite() {
    initInviteVariant();
    initEnvelope();
    initScrollAnimations();
    initCountdown();
    initImageFallbacks();
    initSiteNav();
    initImageLightbox();
  }

  function initInviteLanding() {
    var html = document.documentElement;
    if (html.getAttribute('data-invite') !== 'chooser') return false;

    var land = document.getElementById('invite-landing');
    var mainContent = document.getElementById('main-content');
    var envelope = document.getElementById('envelope-overlay');
    if (!land) return false;

    land.hidden = false;
    land.setAttribute('aria-hidden', 'false');
    if (mainContent) mainContent.classList.add('content-hidden');
    if (envelope) envelope.style.display = 'none';

    function unlock(variant) {
      try {
        sessionStorage.setItem('eskuvo_invite_variant', variant);
      } catch (e) {}
      try {
        var maxAge = 60 * 60 * 24 * 120;
        var sec = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
        document.cookie =
          'eskuvo_invite_variant=' +
          encodeURIComponent(variant) +
          '; path=/; max-age=' +
          maxAge +
          '; SameSite=Lax' +
          sec;
      } catch (eCookie) {}
      html.setAttribute('data-invite', variant);
      land.hidden = true;
      land.setAttribute('aria-hidden', 'true');
      if (envelope) envelope.style.display = '';
      try {
        if (window.EskuvoI18n && typeof window.EskuvoI18n.apply === 'function') {
          window.EskuvoI18n.apply(window.EskuvoI18n.getLang());
        }
      } catch (e2) {}
      initCoreAfterInvite();
    }

    var b1 = document.getElementById('invite-choice-fri-sat');
    var b2 = document.getElementById('invite-choice-sat-only');
    if (b1) b1.addEventListener('click', function () { unlock('fri-sat'); });
    if (b2) b2.addEventListener('click', function () { unlock('sat-only'); });

    return true;
  }

  function init() {
    if (window.EskuvoI18n && typeof window.EskuvoI18n.init === 'function') {
      window.EskuvoI18n.init();
    }
    if (initInviteLanding()) {
      try {
        if (window.EskuvoI18n && typeof window.EskuvoI18n.apply === 'function') {
          window.EskuvoI18n.apply(window.EskuvoI18n.getLang());
        }
      } catch (e3) {}
      return;
    }
    initCoreAfterInvite();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
