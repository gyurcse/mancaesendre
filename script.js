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

  function init() {
    initEnvelope();
    initScrollAnimations();
    initCountdown();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
