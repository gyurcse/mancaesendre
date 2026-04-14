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
    var nav = document.querySelector('.page-timeline');
    var hero = document.getElementById('hero');
    if (!pointsRoot || !main || !nav || !hero) return;

    function timelineLabelsFromI18n() {
      if (window.EskuvoI18n && typeof window.EskuvoI18n.getTimelineLabels === 'function') {
        var lang = window.EskuvoI18n.getLang();
        return window.EskuvoI18n.getTimelineLabels(lang);
      }
      return [
        'Kezdőlap',
        'Visszaszámlálás',
        'Üdvözlő',
        'Mi vagyunk',
        'Program',
        'Helyszín',
        'GYIK',
        'Galéria',
        'RSVP'
      ];
    }

    var ids = ['hero', 'countdown', 'welcome', 'couple', 'program', 'venue', 'faq', 'gallery', 'rsvp'];
    var labelsArr = timelineLabelsFromI18n();
    var steps = ids.map(function (id, i) {
      return { id: id, label: labelsArr[i] || id };
    });

    var segments = [];
    for (var s = 0; s < steps.length; s++) {
      var el = document.getElementById(steps[s].id);
      if (el) segments.push({ id: steps[s].id, label: steps[s].label, el: el });
    }
    if (!segments.length) return;

    pointsRoot.innerHTML = '';
    var pointEls = [];

    /* 8 szirmú virág (középen „lyuk”), vékony háttérvonal a szirmok között */
    var tlPetals = '';
    for (var fi = 0; fi < 8; fi++) {
      tlPetals +=
        '<ellipse cx="0" cy="-5.4" rx="2.05" ry="4.45" transform="rotate(' +
        fi * 45 +
        ')" fill="currentColor" stroke="var(--color-bg)" stroke-width="0.3"/>';
    }
    var TL_FLOWER_ICON =
      '<svg class="tl-flower-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
      '<g class="tl-flower-icon__g">' +
      '<g transform="translate(12,12)">' +
      tlPetals +
      '</g>' +
      '<circle class="tl-flower-icon__center" cx="12" cy="12" r="2.7" fill="var(--color-bg)"/>' +
      '</g></svg>';

    var TL_NODE_INNER =
      '<span class="page-timeline-node__port">' +
      '<span class="page-timeline-node__stem" aria-hidden="true"></span>' +
      '<span class="page-timeline-node__flower">' +
      TL_FLOWER_ICON +
      '</span></span>';

    function layoutPointsOnPath() {
      var anchor = document.getElementById('timeline-anchor-path');
      var branch = document.querySelector('.page-timeline-branch');
      if (!anchor || !branch || !pointEls.length) return;
      try {
        var len = anchor.getTotalLength();
        if (!isFinite(len) || len <= 0) return;
        var n = pointEls.length;
        var branchRect = branch.getBoundingClientRect();
        var svg = anchor.ownerSVGElement;
        if (!svg || branchRect.width <= 0 || branchRect.height <= 0) return;
        var ctm = anchor.getScreenCTM();
        if (!ctm) return;
        for (var pi = 0; pi < n; pi++) {
          var t = n === 1 ? 0.5 : pi / (n - 1);
          var L = t * len;
          var pt = anchor.getPointAtLength(L);
          var svgPt = svg.createSVGPoint();
          svgPt.x = pt.x;
          svgPt.y = pt.y;
          var scr = svgPt.matrixTransform(ctm);
          var lx = ((scr.x - branchRect.left) / branchRect.width) * 100;
          var ty = ((scr.y - branchRect.top) / branchRect.height) * 100;
          pointEls[pi].style.left = lx + '%';
          pointEls[pi].style.top = ty + '%';

          var delta = Math.max(0.35, len * 0.0035);
          var pA = anchor.getPointAtLength(Math.max(0, L - delta));
          var pB = anchor.getPointAtLength(Math.min(len, L + delta));
          var pathAng = Math.atan2(pB.y - pA.y, pB.x - pA.x);
          /* Mindig a „jobbra” mutató merőleges (a tartalom felé), ne váltogasson az oldal szélére */
          var angOut = pathAng + Math.PI / 2;
          var angIn = pathAng - Math.PI / 2;
          var perpAng = Math.cos(angOut) >= Math.cos(angIn) ? angOut : angIn;
          if (Math.cos(perpAng) < 0.08) {
            perpAng += Math.PI;
          }
          var perpDeg = perpAng * (180 / Math.PI);
          pointEls[pi].style.setProperty('--stem-deg', perpDeg + 'deg');
        }
      } catch (e) {}
    }

    function scheduleLayoutPoints() {
      requestAnimationFrame(function () {
        requestAnimationFrame(layoutPointsOnPath);
      });
    }

    for (var i = 0; i < segments.length; i++) {
      (function (seg, index) {
        var a = document.createElement('a');
        a.href = '#' + seg.id;
        a.className = 'page-timeline-node';
        a.innerHTML = TL_NODE_INNER;
        a.title = seg.label;
        var ariaSuf =
          window.EskuvoI18n && typeof window.EskuvoI18n.getTimelineAriaSuffix === 'function'
            ? window.EskuvoI18n.getTimelineAriaSuffix(window.EskuvoI18n.getLang())
            : ' szekció';
        a.setAttribute('aria-label', seg.label + ariaSuf);
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

    /** Timeline csak a hero alá görgetve (hero alja a nézet teteje fölött) */
    function updateTimelineVisibility() {
      var pastHero = hero.getBoundingClientRect().bottom < 40;
      nav.classList.toggle('page-timeline--revealed', pastHero);
      nav.setAttribute('aria-hidden', pastHero ? 'false' : 'true');
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

    var scrollTick = false;
    function onScroll() {
      if (scrollTick) return;
      scrollTick = true;
      requestAnimationFrame(function () {
        scrollTick = false;
        updateTimelineVisibility();
        updateTimeline();
      });
    }

    var resizeTick = false;
    function onResize() {
      if (resizeTick) return;
      resizeTick = true;
      requestAnimationFrame(function () {
        resizeTick = false;
        layoutPointsOnPath();
        updateTimelineVisibility();
        updateTimeline();
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', onResize);
    updateTimelineVisibility();
    updateTimeline();
    scheduleLayoutPoints();

    window.addEventListener('eskuvo:lang', function (ev) {
      var lang = ev.detail && ev.detail.lang;
      if (!lang || !window.EskuvoI18n) return;
      var nextLabels = window.EskuvoI18n.getTimelineLabels(lang);
      var suf = window.EskuvoI18n.getTimelineAriaSuffix(lang);
      for (var ti = 0; ti < pointEls.length && ti < nextLabels.length; ti++) {
        pointEls[ti].title = nextLabels[ti];
        pointEls[ti].setAttribute('aria-label', nextLabels[ti] + suf);
      }
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

  function init() {
    if (window.EskuvoI18n && typeof window.EskuvoI18n.init === 'function') {
      window.EskuvoI18n.init();
    }
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
