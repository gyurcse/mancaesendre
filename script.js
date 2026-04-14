(function () {
  'use strict';

  var STORAGE_KEY = 'eskuvo_boritek_megnyitva';
  var overlay = document.getElementById('envelope-overlay');
  var mainContent = document.getElementById('main-content');

  var WEDDING_DATE = new Date('2026-08-22T14:00:00');

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

  /** Oldalsó timeline: szekciók = pontok, görgetés + aktív állapot + kitöltött sáv */
  function initPageTimeline() {
    var pointsRoot = document.getElementById('timeline-points');
    var progressPath = document.getElementById('timeline-progress-path');
    var main = document.getElementById('main-content');
    if (!pointsRoot || !main) return;

    var steps = [
      { id: 'hero', label: 'Kezdőlap' },
      { id: 'countdown', label: 'Visszaszámlálás' },
      { id: 'welcome', label: 'Üdvözlő' },
      { id: 'couple', label: 'Mi vagyunk' },
      { id: 'program', label: 'Program' },
      { id: 'venue', label: 'Helyszín' },
      { id: 'faq', label: 'GYIK' },
      { id: 'gallery', label: 'Galéria' },
      { id: 'rsvp', label: 'RSVP' }
    ];

    var segments = [];
    for (var s = 0; s < steps.length; s++) {
      var el = document.getElementById(steps[s].id);
      if (el) segments.push({ id: steps[s].id, label: steps[s].label, el: el });
    }
    if (!segments.length) return;

    pointsRoot.innerHTML = '';
    var pointEls = [];

    for (var i = 0; i < segments.length; i++) {
      (function (seg, index) {
        var a = document.createElement('a');
        a.href = '#' + seg.id;
        a.className =
          'page-timeline-point ' + (index % 2 === 0 ? 'page-timeline-point--stem-a' : 'page-timeline-point--stem-b');
        a.title = seg.label;
        a.setAttribute('aria-label', seg.label + ' szekció');
        a.addEventListener('click', function (e) {
          e.preventDefault();
          seg.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.replaceState) {
            history.replaceState(null, '', '#' + seg.id);
          }
        });
        pointsRoot.appendChild(a);
        pointEls.push(a);
      })(segments[i], i);
    }

    function sectionTop(el) {
      return el.getBoundingClientRect().top + window.scrollY;
    }

    function updateTimeline() {
      var triggerY = window.scrollY + window.innerHeight * 0.32;
      var activeIndex = 0;
      for (var j = segments.length - 1; j >= 0; j--) {
        if (sectionTop(segments[j].el) <= triggerY) {
          activeIndex = j;
          break;
        }
      }

      var docEl = document.documentElement;
      var maxScroll = docEl.scrollHeight - window.innerHeight;
      var scrollPct = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;
      if (progressPath) {
        progressPath.style.strokeDashoffset = String(100 - scrollPct);
      }

      for (var k = 0; k < pointEls.length; k++) {
        var p = pointEls[k];
        p.classList.toggle('is-active', k === activeIndex);
        p.classList.toggle('is-passed', k < activeIndex);
        if (k === activeIndex) {
          p.setAttribute('aria-current', 'true');
        } else {
          p.removeAttribute('aria-current');
        }
      }
    }

    var ticking = false;
    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        updateTimeline();
      });
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('hashchange', onScrollOrResize);
    updateTimeline();
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

  function initImageFallbacks() {
    var images = document.querySelectorAll('img');
    if (!images.length) return;

    var fallbackSvg =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>" +
          "<defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>" +
          "<stop offset='0%' stop-color='%23d7e6ef'/><stop offset='100%' stop-color='%23b9d3e3'/>" +
          "</linearGradient></defs>" +
          "<rect width='1200' height='800' fill='url(%23g)'/>" +
          "<circle cx='1030' cy='130' r='180' fill='rgba(255,255,255,0.35)'/>" +
          "<circle cx='220' cy='700' r='220' fill='rgba(212,168,75,0.25)'/>" +
          "<text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' fill='%233d6a87' font-size='56' font-family='Arial, sans-serif'>Esküvői fotó</text>" +
          "<text x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' fill='%235a6c7d' font-size='30' font-family='Arial, sans-serif'>Kép feltöltés alatt</text>" +
        "</svg>"
      );

    images.forEach(function (img) {
      img.addEventListener('error', function handleImageError() {
        if (img.dataset.fallbackApplied === '1') return;
        img.dataset.fallbackApplied = '1';
        img.src = fallbackSvg;
        if (!img.alt || !img.alt.trim()) {
          img.alt = 'Esküvői helyettesítő kép';
        }
      });
    });
  }

  function init() {
    initEnvelope();
    initScrollAnimations();
    initPageTimeline();
    initCountdown();
    initImageFallbacks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
