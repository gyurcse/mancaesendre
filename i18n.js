(function () {
  'use strict';

  var STORAGE_KEY = 'eskuvo_lang';

  var T = {
    hu: {
      docTitle: 'Esküvőnk meghívója',
      envelopeText: 'Ez a meghívó csak Neked szól.<br>Érintsd meg a megnyitáshoz.',
      heroBadge: 'ÖSSZEHÁZASODUNK',
      heroCta: 'ERŐSÍTSD MEG RÉSZVÉTELED',
      heroDate: '2026. augusztus 22.',
      heroScrollAria: 'Visszaszámlálás részhez',
      heroMuteAria: 'Hang ki/be',
      heroMuteTitle: 'Hang',
      countdownTitle: 'Visszaszámlálás a nagy napig',
      navLinkCountdown: 'Visszaszámlálás',
      countdownDays: 'nap',
      countdownHours: 'óra',
      countdownMins: 'perc',
      countdownSecs: 'másodperc',
      countdownDetails: 'Részletek',
      welcomeTitle: 'Szeretettel várunk',
      welcomeIntroFriSat:
        'Kedves Vendégeink! Meghívlak titeket a pénteki közös ünneplésre és a szombati nagy napunkra. Készüljetek egy felejthetetlen hétvégére – várunk szeretettel.',
      welcomeIntroSatOnly:
        'Kedves Vendégeink! Meghívlak titeket a szombati nagy napunkra. A pénteki programra ezúttal nem számítunk veletek – ha kérdésetek van, írjatok nyugodtan.',
      welcomeImgAlt: 'Manca és Endre',
      programTitle: 'Program',
      programSubtitle: 'Amit nektek készítettünk',
      programDayFriLabel: 'Péntek – 2026. augusztus 21.',
      programDaySatLabel: 'Szombat – 2026. augusztus 22.',
      programFri1Time: '17:00 – 19:00',
      programFri1t: 'Érkezés, köszöntő',
      programFri1d: 'Könnyű fogadás, ismerkedés',
      programFri2Time: '20:00',
      programFri2t: 'Pénteki vacsora',
      programFri2d: 'Közös est a hétvége kezdetéhez',
      programSat1Time: '09:00–11:00',
      programSat1t: 'Érkezés, reggeli',
      programSat1d: 'Kávé, péksütemény – lazább start',
      program1t: 'Reggeli',
      program1d: 'Reggeli',
      program2t: 'Egyházi esküvő',
      program2d: 'A templomban',
      program3t: 'Fotózás',
      program3d: 'Fotózás',
      program4t: 'Vacsora',
      program4d: 'Vacsora',
      program5t: 'Első tánc, menyasszonytánc',
      program5d: 'Első tánc és buli',
      program6t: 'Éjféli menü',
      program6d: 'Éjféli menü',
      programMidnight: 'Éjfél',
      venueTitle: 'Helyszín',
      venueImgAlt: 'Villabogart – helyszín',
      venueTime: '17:00 – 01:00',
      venueMap: 'Térkép',
      venueMapBtn: 'Maps megnyitása',
      faqTitle: 'Gyakori kérdések',
      faqLeadAlt: 'Gyakori kérdések – hangulatkép',
      faq1q: 'Hozhatok kísérőt?',
      faq1a: 'Igen — kérjük, jelezd az RSVP Google űrlapon (vagy írj nekünk emailben).',
      faq2q: 'Hogyan lehet a leggyorsabban, legjobban eljutni a Villabogart-hoz?',
      faq2p: 'Három útvonalat javasolunk:',
      faq2l1:
        'M7-esről Balatonszemesnél át kell térni a 67-es útra, majd Mernyeszentmiklósnál letérve egy kövezett úton át Somogygesztin keresztül eljutni Alsóbogát központjába, onnan legurulni a domboldalról és megérkezni a Magtárhoz;',
      faq2l2:
        'vagy továbbmenni a 67-es úton egészen Kaposfüredig, ott egy körforgalomból kitérve Juta–Somogyjád útvonalon elérve Alsóbogátot a táblánál jobbra fordulva megérkezni a Magtárhoz;',
      faq2l3:
        'vagy az M7-esről a 142-es km-nél letérve Lengyeltóti–Somogyvár–Osztopán–Somogyjád falvakon keresztül érnek el Alsóbogátra (ez a leghosszabb, de a legjobb minőségű út a falvak között).',
      faq3q: 'Milyen öltözék a megfelelő?',
      faq3a: 'Ünnepélyes, de kellemes: öltöny / elegáns ruha.',
      faq4q: 'Fényképezhetek a szertartás alatt?',
      faq4a:
        'A ceremónia alatt kérjük, ne használj telefont. A fogadás és mulatság alatt szívesen várjuk a fotókat.',
      galleryTitle: 'Galéria',
      galleryNote: 'Közös pillanatok.',
      galleryAlt1: 'Galéria 1.',
      galleryAlt2: 'Galéria 2.',
      galleryAlt3: 'Galéria 3.',
      galleryAlt4: 'Galéria 4.',
      galleryAlt5: 'Galéria 5.',
      rsvpTitle: 'Erősítsd meg részvételed',
      rsvpSubtitle: 'Szeretnénk, ha velünk lennél',
      rsvpGoogleLead:
        'Töltsd ki az alábbi űrlapot – a válaszok a Google Táblázatban gyűlnek, onnan bármikor letölthetők (CSV, Excel).',
      rsvpGoogleMissing:
        'Állítsd be a Google űrlap beágyazási linkjeit az index.html fájlban: a #rsvp-google-root elem data-form-fri-sat és data-form-sat-only attribútumai.',
      rsvpGoogleOpenNewTab: 'Űrlap megnyitása új lapon',
      rsvpIframeTitle: 'RSVP – válasz űrlap',
      formSubject: 'Esküvői részvétel – meghívó oldal',
      formSubjectFriSat: 'Esküvő RSVP – péntek+szombat meghívó',
      formSubjectSatOnly: 'Esküvő RSVP – szombat meghívó',
      formDaysLegend: 'Mely napokon jössz? *',
      formDaysHintWeekend: 'Ha jössz, legalább egy napot jelölj meg.',
      formDaysSatOnlyNote: 'A meghívó a szombati programra szól. A válaszodnál ezt vessük figyelembe.',
      formDayFri: 'Péntek',
      formDaySat: 'Szombat',
      formName: 'Teljes név *',
      formNamePh: 'A neved',
      formEmail: 'Email (opcionális)',
      formEmailPh: 'email@pelda.hu',
      formAttend: 'Részt veszel? *',
      formYes: 'Igen, részt veszek',
      formNo: 'Nem tudok jönni',
      formDietLegend: 'Ételallergia / intolerancia',
      formDietHint: 'Fontos, hogy tudjuk. Jelöld be, ami igaz rád.',
      formDietGluten: 'Gluténmentes / celiák',
      formDietLactose: 'Laktózmentes',
      formDietVeg: 'Vegetáriánus',
      formDietVegan: 'Vegán',
      formDietNuts: 'Mogyoróallergia',
      formDietShellfish: 'Rákallergia',
      formOther: 'Egyéb allergia vagy restrikció',
      formOtherPh: 'Pl. tojásallergia, fruktóz intolerancia…',
      formMsg: 'Üzenet a párnak (opcionális)',
      formMsgPh: 'Írj nekünk pár sort…',
      formSubmit: 'Válasz küldése',
      formDaysValidation: 'Kérjük, jelölj legalább egy napot (péntek vagy szombat).',
      langSwitchAria: 'Nyelv választása',
      langHu: 'Magyar',
      langEn: 'English',
      inviteChoiceTitle: 'Melyik jel van a meghívódon?',
      inviteChoiceGroupAria: 'Meghívó típus választása',
      inviteChoicePezsgoKicker: 'Pezsgő',
      inviteChoicePezsgoAria: 'Pezsgő illusztráció kiválasztása',
      inviteChoiceGyertyaKicker: 'Gyertya',
      inviteChoiceGyertyaAria: 'Gyertya illusztráció kiválasztása',
      navSiteAria: 'Ugrás egy szakaszra',
      navDrawerTitle: 'Menü',
      navMenuOpenAria: 'Menü megnyitása',
      navMenuCloseAria: 'Menü bezárása',
      navDrawerCloseAria: 'Menü bezárása',
      navLinkHero: 'Címlap',
      navLinkRsvp: 'RSVP',
      imgFallback1: 'Esküvői fotó',
      imgFallback2: 'Kép feltöltés alatt',
      imgFallbackAlt: 'Esküvői helyettesítő kép'
    },
    en: {
      docTitle: 'Our wedding invitation',
      envelopeText: 'This invitation is just for you.<br>Tap to open.',
      heroBadge: 'WE ARE GETTING MARRIED',
      heroCta: 'CONFIRM YOUR ATTENDANCE',
      heroDate: 'August 22, 2026',
      heroScrollAria: 'Go to countdown section',
      heroMuteAria: 'Sound on/off',
      heroMuteTitle: 'Sound',
      countdownTitle: 'Countdown until the big day',
      navLinkCountdown: 'Countdown',
      countdownDays: 'days',
      countdownHours: 'hours',
      countdownMins: 'minutes',
      countdownSecs: 'seconds',
      countdownDetails: 'Details',
      welcomeTitle: 'You are warmly invited',
      welcomeIntroFriSat:
        'Dear guests, you are invited to join us on Friday for a shared celebration and on Saturday for our wedding day. We look forward to a wonderful weekend together.',
      welcomeIntroSatOnly:
        'Dear guests, you are invited to our wedding day on Saturday. We are not expecting you on Friday this time — if you have any questions, just write to us.',
      welcomeImgAlt: 'Manca and Endre',
      programTitle: 'Schedule',
      programSubtitle: 'What we have planned for you',
      programDayFriLabel: 'Friday – 21 August 2026',
      programDaySatLabel: 'Saturday – 22 August 2026',
      programFri1Time: '5:00 – 7:00 p.m.',
      programFri1t: 'Arrival & welcome',
      programFri1d: 'Light reception and mingling',
      programFri2Time: '8:00 p.m.',
      programFri2t: 'Friday dinner',
      programFri2d: 'An evening together to kick off the weekend',
      programSat1Time: '9:00–11:00 a.m.',
      programSat1t: 'Arrival & breakfast',
      programSat1d: 'Coffee and pastries — a relaxed start',
      program1t: 'Breakfast',
      program1d: 'Breakfast',
      program2t: 'Church ceremony',
      program2d: 'At the church',
      program3t: 'Photos',
      program3d: 'Photo session',
      program4t: 'Dinner',
      program4d: 'Dinner',
      program5t: 'First dance & bridal dance',
      program5d: 'First dance and party',
      program6t: 'Midnight supper',
      program6d: 'Midnight menu',
      programMidnight: 'Midnight',
      venueTitle: 'Venue',
      venueImgAlt: 'Villabogart – venue',
      venueTime: '5:00 p.m. – 1:00 a.m.',
      venueMap: 'Map',
      venueMapBtn: 'Open in Maps',
      faqTitle: 'Frequently asked questions',
      faqLeadAlt: 'FAQ – mood photo',
      faq1q: 'May I bring a plus-one?',
      faq1a: 'Yes — please mention it on the RSVP Google Form (or email us).',
      faq2q: 'What is the best way to get to Villabogart?',
      faq2p: 'We suggest three routes:',
      faq2l1:
        'From the M7, change to route 67 at Balatonszemes, then leave at Mernye and follow the paved road through Somogygeszti to Alsóbogát centre, then down the hillside to the Magtár;',
      faq2l2:
        'or continue on route 67 to Kaposfüred, leave at the roundabout towards Juta–Somogyjád, then Alsóbogát and turn right at the sign to reach the Magtár;',
      faq2l3:
        'or leave the M7 at km 142 via Lengyeltóti–Somogyvár–Osztopán–Somogyjád (the longest route, but the best quality between villages).',
      faq3q: 'What should I wear?',
      faq3a: 'Smart festive: suit / elegant dress.',
      faq4q: 'May I take photos during the ceremony?',
      faq4a:
        'Please do not use your phone during the ceremony. Photos are welcome at the reception and party.',
      galleryTitle: 'Gallery',
      galleryNote: 'Moments together.',
      galleryAlt1: 'Gallery 1.',
      galleryAlt2: 'Gallery 2.',
      galleryAlt3: 'Gallery 3.',
      galleryAlt4: 'Gallery 4.',
      galleryAlt5: 'Gallery 5.',
      rsvpTitle: 'Confirm your attendance',
      rsvpSubtitle: 'We would love to have you with us',
      rsvpGoogleLead:
        'Please fill in the form below — responses are collected in Google Sheets and can be downloaded anytime (CSV, Excel).',
      rsvpGoogleMissing:
        'Set the Google Form embed URLs on the #rsvp-google-root element in index.html: data-form-fri-sat and data-form-sat-only.',
      rsvpGoogleOpenNewTab: 'Open form in a new tab',
      rsvpIframeTitle: 'RSVP response form',
      formSubject: 'Wedding RSVP – invitation site',
      formSubjectFriSat: 'Wedding RSVP – Fri+Sat invitation',
      formSubjectSatOnly: 'Wedding RSVP – Saturday invitation',
      formDaysLegend: 'Which days will you attend? *',
      formDaysHintWeekend: 'If you are coming, please tick at least one day.',
      formDaysSatOnlyNote: 'This invitation is for the Saturday programme. We will assume Saturday when you reply.',
      formDayFri: 'Friday',
      formDaySat: 'Saturday',
      formName: 'Full name *',
      formNamePh: 'Your name',
      formEmail: 'Email (optional)',
      formEmailPh: 'you@example.com',
      formAttend: 'Will you attend? *',
      formYes: 'Yes, I will attend',
      formNo: 'I cannot make it',
      formDietLegend: 'Food allergies / intolerances',
      formDietHint: 'Please tick anything that applies to you.',
      formDietGluten: 'Gluten-free / coeliac',
      formDietLactose: 'Lactose-free',
      formDietVeg: 'Vegetarian',
      formDietVegan: 'Vegan',
      formDietNuts: 'Nut allergy',
      formDietShellfish: 'Shellfish allergy',
      formOther: 'Other allergy or restriction',
      formOtherPh: 'E.g. egg allergy, fructose intolerance…',
      formMsg: 'Message to the couple (optional)',
      formMsgPh: 'Write us a few lines…',
      formSubmit: 'Send reply',
      formDaysValidation: 'Please tick at least one day (Friday or Saturday).',
      langSwitchAria: 'Choose language',
      langHu: 'Hungarian',
      langEn: 'English',
      inviteChoiceTitle: 'Which symbol is on your invitation?',
      inviteChoiceGroupAria: 'Choose invitation type',
      inviteChoicePezsgoKicker: 'Champagne',
      inviteChoicePezsgoAria: 'Select champagne illustration',
      inviteChoiceGyertyaKicker: 'Candle',
      inviteChoiceGyertyaAria: 'Select candle illustration',
      navSiteAria: 'Jump to a section',
      navDrawerTitle: 'Menu',
      navMenuOpenAria: 'Open menu',
      navMenuCloseAria: 'Close menu',
      navDrawerCloseAria: 'Close menu',
      navLinkHero: 'Home',
      navLinkRsvp: 'RSVP',
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
    if (tEl) tEl.textContent = pickStr(lang, 'docTitle');

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
