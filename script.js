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

  function initSectionTimeline() {
    var timelinePoints = document.getElementById('timeline-points');
    var progress = document.getElementById('timeline-progress');
    if (!timelinePoints || !progress) return;

    var trackedSections = [
      'countdown',
      'welcome',
      'couple',
      'program',
      'venue',
      'faq',
      'gallery',
      'rsvp'
    ]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if (!trackedSections.length) return;

    var points = trackedSections.map(function (section, index) {
      var point = document.createElement('a');
      point.href = '#' + section.id;
      point.className = 'page-timeline-point';
      point.setAttribute('aria-label', 'Ugrás: ' + section.id);
      point.title = section.id;
      if (index === 0) point.classList.add('is-active');
      timelinePoints.appendChild(point);
      return point;
    });

    function setActive(index) {
      points.forEach(function (point, i) {
        point.classList.toggle('is-active', i === index);
        point.classList.toggle('is-passed', i < index);
      });

      var stepRatio = trackedSections.length > 1 ? index / (trackedSections.length - 1) : 0;
      progress.style.height = stepRatio * 100 + '%';
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var idx = trackedSections.indexOf(entry.target);
          if (idx >= 0) setActive(idx);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.01 }
    );

    trackedSections.forEach(function (section) {
      observer.observe(section);
    });
    setActive(0);
  }

  function init() {
    initEnvelope();
    initScrollAnimations();
    initCountdown();
    initImageFallbacks();
    initSectionTimeline();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
