(function () {
  'use strict';

  var STORAGE_KEY = 'eskuvo_lang';

  var T = {
    hu: {
      docTitle: 'Manca & Endre – Köszönjük!',
      heroBadge: 'KÖSZÖNJÜK!',
      heroDate: '2026. augusztus 22.',
      heroScrollAria: 'Ugrás az eltelt idő számlálóhoz',
      heroLinkPhotosTitle: 'Fotók',
      heroLinkPhotosText: 'Nézd meg a hétvége képeit.',
      heroLinkReviewTitle: 'Értékelés',
      heroLinkReviewText: 'Segíts egy jó szóval a Villabogartnak.',
      elapsedTitle: 'Ennyi ideje vagyunk házasok',
      countdownDays: 'nap',
      countdownHours: 'óra',
      countdownMins: 'perc',
      countdownSecs: 'másodperc',
      thanksTitle: 'Drága Családunk és Barátaink!',
      thanksP1: 'Immár egy hónapja, hogy együtt ünnepeltük életünk egybekötését :)',
      thanksP2:
        'Szeretnénk megköszönni mindent! Végtelenül hálásak vagyunk, hogy ott voltatok, egyenként és közösen is egy tökéletes násznépet alkotva. A szeretet és boldogság, amit kaptunk a hétvége folyamán, a felhők fölé emelt minket.',
      thanksP3:
        'Nagyon reméljük, hogy mindenki jól érezte magát, és ha nem is emlékszik mindenre, van legalább egy ismerőse, aki segít kiegészíteni a sötét foltokat :)',
      thanksSignature: 'Hálásan, Manca & Endre',
      welcomeImgAlt: 'Manca és Endre',
      photosTitle: 'Fotók a hétvégéről',
      photosIntro:
        'Az updatelt weboldalunkon (itt!) megtaláljátok a képeket az alábbi eseményekről, egyelőre:',
      photosCta: 'Összes kép megnyitása',
      photoCat1: 'Tenisz és piknik',
      photoCat2: 'Polgári szertartás és bográcsozás',
      photoCatChurch: 'Templomi szertartás',
      photoCat3: 'Selfie Booth',
      photoCat4: 'Szombati lagzi',
      photoCat6: 'Csoportképek',
      photosNote: 'A szombati képek már fent vannak, a videó hamarosan érkezik!',
      galleryAlt1: 'Pillanatkép 1.',
      galleryAlt2: 'Pillanatkép 2.',
      galleryAlt3: 'Pillanatkép 3.',
      galleryAlt4: 'Pillanatkép 4.',
      galleryAlt5: 'Pillanatkép 5.',
      galleryAlt6: 'Pillanatkép 6.',
      reviewTitle: 'Egy apró szívesség',
      reviewText:
        'Mint helyszín, szeretnénk megkérni titeket, hogy hagyjatok egy pozitív értékelést a Villabogart Google-oldalán — ezzel segítve a feleség és az após munkáját :)',
      reviewCta: 'Villabogart értékelése',
      langSwitchAria: 'Nyelv választása',
      langHu: 'Magyar',
      langEn: 'English',
      navSiteAria: 'Ugrás egy szakaszra',
      navDrawerTitle: 'Menü',
      navMenuOpenAria: 'Menü megnyitása',
      navMenuCloseAria: 'Menü bezárása',
      navDrawerCloseAria: 'Menü bezárása',
      navLinkHome: 'Főoldal',
      navLinkThanks: 'Köszönet',
      navLinkPhotos: 'Fotók',
      navLinkReview: 'Értékelés',
      imgFallback1: 'Esküvői fotó',
      imgFallback2: 'Kép feltöltés alatt',
      imgFallbackAlt: 'Esküvői helyettesítő kép'
    },
    en: {
      docTitle: 'Manca & Endre – Thank you!',
      heroBadge: 'THANK YOU!',
      heroDate: 'August 22, 2026',
      heroScrollAria: 'Go to the elapsed-time counter',
      heroLinkPhotosTitle: 'Photos',
      heroLinkPhotosText: "See the weekend's photos.",
      heroLinkReviewTitle: 'Review',
      heroLinkReviewText: 'Help Villabogart with a kind word.',
      elapsedTitle: "This long we've been married",
      countdownDays: 'days',
      countdownHours: 'hours',
      countdownMins: 'minutes',
      countdownSecs: 'seconds',
      thanksTitle: 'Dear Family and Friends!',
      thanksP1: "It's already been a month since we celebrated the joining of our lives together :)",
      thanksP2:
        'We want to thank you for everything! We are endlessly grateful that you were there — each of you, and together forming a perfect wedding party. The love and happiness we received over the weekend lifted us above the clouds.',
      thanksP3:
        "We really hope everyone had a great time, and even if you don't remember it all, you've got at least one friend around who can help fill in the blanks :)",
      thanksSignature: 'With gratitude, Manca & Endre',
      welcomeImgAlt: 'Manca and Endre',
      photosTitle: 'Photos from the weekend',
      photosIntro: "On our updated website (right here!) you'll find photos from the following events, for now:",
      photosCta: 'Open all photos',
      photoCat1: 'Tennis & picnic',
      photoCat2: 'Civil ceremony & goulash cooking',
      photoCatChurch: 'Church ceremony',
      photoCat3: 'Selfie Booth',
      photoCat4: 'Saturday wedding party',
      photoCat6: 'Group photos',
      photosNote: 'The Saturday photos are already up — the video is coming soon!',
      galleryAlt1: 'Snapshot 1.',
      galleryAlt2: 'Snapshot 2.',
      galleryAlt3: 'Snapshot 3.',
      galleryAlt4: 'Snapshot 4.',
      galleryAlt5: 'Snapshot 5.',
      galleryAlt6: 'Snapshot 6.',
      reviewTitle: 'A small favour',
      reviewText:
        "As the venue, we'd like to ask you to leave a positive review on Villabogart's Google page — it helps out the wife and her father :)",
      reviewCta: 'Review Villabogart',
      langSwitchAria: 'Choose language',
      langHu: 'Hungarian',
      langEn: 'English',
      navSiteAria: 'Jump to a section',
      navDrawerTitle: 'Menu',
      navMenuOpenAria: 'Open menu',
      navMenuCloseAria: 'Close menu',
      navDrawerCloseAria: 'Close menu',
      navLinkHome: 'Home',
      navLinkThanks: 'Thank you',
      navLinkPhotos: 'Photos',
      navLinkReview: 'Review',
      imgFallback1: 'Wedding photo',
      imgFallback2: 'Image uploading',
      imgFallbackAlt: 'Wedding placeholder image'
    }
  };

  function getLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (typeof s === 'string') {
        s = s.toLowerCase();
        if (s === 'en' || s === 'hu') return s;
      }
    } catch (e) {}
    return 'hu';
  }

  function setLang(lang) {
    if (typeof lang === 'string') lang = lang.toLowerCase();
    if (lang !== 'en' && lang !== 'hu') return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    apply(lang);
  }

  function txt(lang, key) {
    return pickStr(lang, key);
  }

  /** Aktuális nyelv szövege; ha hiányzik, HU majd EN (ne maradjon üres / elavult DOM). */
  function pickStr(lang, key) {
    var primary = T[lang] || T.hu;
    if (primary[key] != null) return primary[key];
    if (T.hu[key] != null) return T.hu[key];
    if (T.en[key] != null) return T.en[key];
    return '';
  }

  function apply(lang) {
    if (typeof lang === 'string') lang = lang.toLowerCase();
    if (lang !== 'en' && lang !== 'hu') lang = 'hu';
    document.documentElement.lang = lang === 'en' ? 'en' : 'hu';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var s = pickStr(lang, key);
      if (s === '') return;
      el.textContent = s;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key) return;
      var s = pickStr(lang, key);
      if (s === '') return;
      el.innerHTML = s;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      var s = pickStr(lang, key);
      if (s === '') return;
      el.setAttribute('placeholder', s);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      var s = pickStr(lang, key);
      if (s === '') return;
      el.setAttribute('aria-label', s);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (!key) return;
      var s = pickStr(lang, key);
      if (s === '') return;
      el.setAttribute('title', s);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      var s = pickStr(lang, key);
      if (s === '') return;
      el.setAttribute('alt', s);
    });

    var tEl = document.querySelector('title');
    if (tEl) {
      var titleKey = tEl.getAttribute('data-i18n') || 'docTitle';
      var titleStr = pickStr(lang, titleKey);
      if (titleStr) tEl.textContent = titleStr;
    }

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      var l = btn.getAttribute('data-set-lang');
      var active = l === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    var langRoot = document.querySelector('.lang-switch');
    if (langRoot) langRoot.setAttribute('aria-label', pickStr(lang, 'langSwitchAria'));

    try {
      window.dispatchEvent(new CustomEvent('eskuvo:lang', { detail: { lang: lang } }));
    } catch (e) {}
  }

  function wireLangSwitch() {
    var root = document.querySelector('.lang-switch');
    if (!root) return;
    root.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var l = btn.getAttribute('data-set-lang');
        if (typeof l === 'string') l = l.toLowerCase();
        setLang(l);
      });
    });
  }

  function init() {
    wireLangSwitch();
    apply(getLang());
  }

  window.EskuvoI18n = {
    getLang: getLang,
    setLang: setLang,
    apply: apply,
    init: init,
    t: function (key) {
      return txt(getLang(), key);
    },
    imgFallbackStrings: function () {
      var l = getLang();
      return { line1: txt(l, 'imgFallback1'), line2: txt(l, 'imgFallback2'), alt: txt(l, 'imgFallbackAlt') };
    }
  };
})();
