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
      welcomeIntroFriSat1: 'Kedves Vendégeink!',
      welcomeIntroFriSat2:
        'Nagy örömmel hívunk Benneteket, hogy velünk ünnepeljétek életünk egyik legszebb hétvégéjét.',
      welcomeIntroFriSat3:
        'Csatlakozzatok hozzánk a pénteki közös hangolódásra és a szombati nagy napunkra is, hogy együtt élhessük át ezeket a különleges pillanatokat.',
      welcomeIntroFriSat4: 'Szeretettel várunk Benneteket egy felejthetetlen ünneplésre!',
      welcomeIntroSatOnly1: 'Kedves Vendégeink!',
      welcomeIntroSatOnly2:
        'Nagy örömmel hívunk Benneteket, hogy velünk ünnepeljétek életünk egyik legszebb napját.',
      welcomeIntroSatOnly3:
        'Csatlakozzatok hozzánk a nagy napunkra, hogy együtt élhessük át ezeket a különleges pillanatokat.',
      welcomeIntroSatOnly4: 'Szeretettel várunk Benneteket egy felejthetetlen ünneplésre!',
      welcomeImgAlt: 'Manca és Endre',
      programTitle: 'Program',
      programDayFriLabel: 'Péntek (augusztus 21.)',
      programDaySatLabel: 'Szombat (augusztus 22.)',
      programDaySunLabel: 'Vasárnap (augusztus 23.)',
      programFri0Time: '10:00-tól',
      programFri0t: 'Érkezés, szállások elfoglalása',
      programFri1Time: '11:00',
      programFri1t: 'Teniszbajnokság – átöltözve a pályán',
      programFri2Time: '12:00',
      programFri2t: 'Piknik a parkban',
      programFriMeetTime: '15:30',
      programFriMeet: 'Találkozó Maison és Villabogart között, közös séta',
      programFri3Time: '16:00',
      programFri3t: 'Polgári esküvő az Odvas fánál',
      programFriToastTime: '16:30',
      programFriToast: 'Koccintás',
      programFri4Time: '18:00',
      programFri4t: 'Bográcsgulyás a Maison teraszán',
      programSat1Time: '09:00–10:30',
      programSat1t: 'Reggeli a Veterángarázsban',
      programSatFreeTime: '10:30–14:00',
      programSatFree: 'Szabad program és készülődés',
      programSatArriveTime: '11:00',
      programSatArrive: 'Érkezés és szállás elfoglalása',
      programSat2Time: '12:00–13:00',
      programSat2t: 'Szendvicsebéd a Veterángarázsban',
      programSat3Time: '14:00',
      programSat3t: 'Násznép indulás Kaposvárra',
      programSatChurchTime: '14:45',
      programSatChurch: 'Násznép a templomban',
      programSat4Time: '15:00',
      programSat4t: 'Egyházi nászmise a Nagyboldogasszony Székesegyházban',
      programSat5Time: '17:00',
      programSat5t: 'Vendégvárás Alsóbogáton a Kastélynál',
      programSat6Time: '18:00',
      programSat6t: 'Csoportképek',
      programSat7Time: '19:00',
      programSat7t: 'Vacsora',
      programSat8Time: '21:30',
      programSat8t: 'Torta',
      programSat9Time: '22:30',
      programSat9t: 'Elsőtánc',
      programSat10Time: '24:00',
      programSat10t: 'Éjféli töltött káposzta és hajnalig buli',
      programSun1Time: '09:00–12:00',
      programSun1t: 'Reggeli a Veterángarázsban',
      programSun2Time: '11:00-tól',
      programSun2t: 'Szállás elhagyása – kulcs a zárba',
      programDisclaimer: 'A programváltoztatás jogát fenntartjuk.',
      venueTitle: 'Helyszín',
      venueChurchKind: 'Nászmise',
      venueChurchName: 'Nagyboldogasszony székesegyház',
      venueChurchAddress: '7400 Kaposvár, Kossuth tér 3.',
      venueLagziKind: 'Lagzi',
      venueLagziName: 'Villabogart',
      venueLagziAddress: '7443 Alsóbogát, Szabadság utca 4.',
      venueMap: 'Térkép',
      venueMapBtn: 'Maps megnyitása',
      faqTitle: 'Gyakori kérdések',
      faqLeadAlt: 'Gyakori kérdések – hangulatkép',
      faq1q: 'Hol helyezkednek el a szállások a kastélyhoz képest?',
      faq1a:
        'A VILLABOGArT birtokon található szálláshelyek, mint a VILLABOGArT Vendégház és a Maison BOGArT, mindössze néhány perces sétára helyezkednek el a Magtártól. A Falusi Házak, Tóházak és Majorsági szállások esetében a távolság átlagosan 8–10 perc séta, míg autóval mindössze 3–4 perc.',
      faq1MapAlt: 'Villabogart birtok térképe – szállások és épületek',
      faq1MapZoomAria: 'Birtok térkép megnyitása nagyban',
      faq1MapLightboxTitle: 'Villabogart birtok térképe',
      imageLightboxClose: 'Bezárás',
      faq2q: 'Hogyan lehet a leggyorsabban, legjobban eljutni a Villabogart-hoz?',
      faq2p: 'Három útvonalat javasolunk:',
      faq2l1:
        'M7-esről Balatonszemesnél át kell térni a 67-es útra, majd Mernyeszentmiklósnál letérve egy kövezett úton át Somogygesztin keresztül eljutni Alsóbogát központjába, onnan legurulni a domboldalról és megérkezni a Magtárhoz;',
      faq2l2:
        'vagy továbbmenni a 67-es úton egészen Kaposfüredig, ott egy körforgalomból kitérve Juta–Somogyjád útvonalon elérve Alsóbogátot a táblánál jobbra fordulva megérkezni a Magtárhoz;',
      faq2l3:
        'vagy az M7-esről a 142-es km-nél letérve Lengyeltóti–Somogyvár–Osztopán–Somogyjád falvakon keresztül érnek el Alsóbogátra (ez a leghosszabb, de a legjobb minőségű út a falvak között).',
      faq3q: 'Milyen öltözék a megfelelő?',
      faq3a: 'Elegáns, színes öltözék. Kerüljétek a fehér, fekete és piros viseletet. A vacsora és a buli kint lesz — hozzatok meleg ruhát, magassarkút ajánlott kerülni.',
      faq4q: 'Milyen nászajándékot fogadtok szívesen?',
      faq4a:
        'Háztartásunk teljes, nem is vágyunk másra, csak közös életünk kezdetén egy kis támogatásra.',
      galleryTitle: 'Galéria',
      galleryNote: 'Közös pillanatok.',
      galleryAlt1: 'Galéria 1.',
      galleryAlt2: 'Galéria 2.',
      galleryAlt3: 'Galéria 3.',
      galleryAlt4: 'Galéria 4.',
      galleryAlt5: 'Galéria 5.',
      galleryAlt6: 'Galéria 6.',
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
      navLinkHome: 'Meghívó',
      navLinkMenu: 'Vacsora Menü',
      navLinkRsvp: 'RSVP',
      navLinkStay: 'Szállások',
      navLinkInfo: 'Tudnivalók',
      menuTeaserTitle: 'Vacsora Menü',
      menuTeaserCta: 'Menü megtekintése',
      homeCtaTitle: 'A hétvégéhez',
      homeCtaStay: 'Keresd a neved – megmutatjuk, hol alszol.',
      homeCtaInfo: 'Parkolás, kontaktok, útvonal, transzfer.',
      stayDocTitle: 'Szállások – Manca & Endre',
      stayTitle: 'Szállások',
      stayLead: 'Minden vendégnek foglaltunk helyet. Írd be a neved, és megmutatjuk a szállásod.',
      staySearchLabel: 'Keresés név szerint',
      staySearchPh: 'Pl. Kovács Anna',
      stayEmpty: 'Erre a névre nem találtunk szállást. Próbáld a vezeték- vagy keresztnevet.',
      stayNotesTitle: 'Amit jó tudni',
      stayNoteLinen: 'Tiszta törülköző és ágynemű vár titeket — a többi szükségletről kérlek magatok gondoskodjatok.',
      stayTowelNote: 'Ha a Zichy (kis) Kastélyban laktok: hozzatok törülközőt. Nem minden szobához tartozik fürdő, az emeleten közös fürdők vannak.',
      stayNoteKey: 'Vasárnap 11:00-tól a szállás elhagyásakor a kulcsot tegyétek vissza a zárba.',
      stayNoteGrass: 'A VILLABOGArT területén tilos a fűre parkolni.',
      stayParkEstate: 'A kápolnát elhagyva az úton a jobb oldali főkapun közelítsétek meg a szállást. A kapun belül balra van a parkoló.',
      stayParkVillage: 'A házak előtt vagy a kertben is parkolhattok.',
      stayParkZichy: 'A főkapun behajtva 100 méter múlva jobb oldalt lehet parkolni.',
      stayMapTitle: 'Birtok térkép',
      stayMapLead: 'A VILLABOGArT és a Maison a Magtárhoz közel van. A falusi házak, tóházak és a majorság kb. 8–10 perc séta.',
      stayBrowseTitle: 'Házanként',
      stayToInfo: 'Parkolás, útvonal és kontaktok →',
      infoDocTitle: 'Tudnivalók – Manca & Endre',
      infoTitle: 'Tudnivalók',
      infoLead: 'Kontaktok, parkolás, útvonal és ami a hétvégén jól jön.',
      infoJumpContact: 'Kontaktok',
      infoJumpPark: 'Parkolás',
      infoJumpKapos: 'Kaposvár',
      infoJumpRoute: 'Útvonal',
      infoJumpTransfer: 'Transzfer',
      infoJumpDress: 'Öltözék',
      infoContactTitle: 'Fontos kontaktok',
      infoContactVenueRole: 'Helyszín',
      infoContactProgramRole: 'Program',
      infoContactTransferRole: 'Lagzi transzfer',
      infoParkTitle: 'Parkolás Alsóbogáton',
      infoParkEstateTitle: 'VILLABOGArT & Maison',
      infoParkVillageTitle: 'Falusi házak, tóházak',
      infoParkZichyTitle: 'Zichy (kis) Kastély',
      infoKaposTitle: 'Parkolás Kaposváron',
      infoKaposLead: 'A székesegyház a sétálóutcában van. Ezek a parkolók mind rövid sétára vannak a templomtól — érdemes pár perccel korábban érkezni.',
      infoPark1Meta: '7400 Kaposvár, Városház u. 2. · kb. 90 m',
      infoPark2Title: 'Fizető parkoló – Széchenyi tér',
      infoPark2Meta: '7400 Kaposvár, Széchenyi tér 3. · kb. 230 m',
      infoPark3Meta: '7400 Kaposvár, Korzó utca · kb. 270 m',
      infoPark4Meta: '7400 Kaposvár, Kontrássy köz · kb. 320 m',
      infoKaposMore: 'További fizetőhelyek: Teleki utca, Irányi Dániel utca, Zárda utca, Ady Endre utcai tömbbelső, Kossuth tér.',
      infoKaposOfficial: 'Kaposvár hivatalos parkolási tájékoztatója',
      infoRouteTitle: 'Útvonal Alsóbogátra',
      infoTransferTitle: 'Transzfer a lagzin',
      infoTransferBody: 'Ha a lagziban megfáradtál, és nincs kedved sétálni a szállásodhoz: kisbusz vár a kápolna előtt.',
      infoPlacesTitle: 'Helyszínek a hétvégén',
      infoPlaceTennis: 'Tenisz & piknik',
      infoPlaceTennisMeta: 'Teniszpálya / park',
      infoPlaceCivil: 'Polgári ceremónia',
      infoPlaceCivilMeta: 'Találkozó a Maison és a Villabogart között, séta az Odvas fához.',
      infoPlaceMealsKicker: 'Reggeli & ebéd',
      infoPlaceGarage: 'Veterángarázs',
      infoDressTitle: 'Öltözék',
      infoDressFriTitle: 'Péntek · polgári',
      infoDressFri: 'Summer garden formal. Magassarkút a parkban ajánlott mellőzni.',
      infoDressSatTitle: 'Szombat',
      infoDressSat: 'Elegáns, színes. Kerüljétek a fehér, fekete és piros viseletet. A vacsora és a buli kint lesz, esténként hűvös lehet — hozzatok meleg ruhát. Magassarkút ajánlott kerülni.',
      infoBringTitle: 'Péntekre hozd magaddal',
      infoBring1: 'Fényvédő, szúnyogspray',
      infoBring2: 'Teniszütő és teniszruha, ha játszol',
      infoBring3: 'Pléd vagy pokróc, ha tudsz',
      infoBring4: 'Kerti játékok (tollas, labda, kártya…)',
      infoBring5: 'A piknikétel, amit hozol',
      infoToStay: 'Szállásod keresése →',
      menuPageTitle: 'Menü',
      menuDocTitle: 'Menü – Manca & Endre',
      menuKicker: 'Vendégvárás & vacsora',
      menuLead: 'Amit az este során kínálunk.',
      menuBack: '← Vissza a meghívóhoz',
      menuBlockReceptionLabel: 'Fogadás',
      menuBlockReceptionTitle: 'Finger Food',
      menuBlockReceptionIntro: 'Vendégváró falatok',
      menuW1: 'Mini wrapok, mini burgerek',
      menuW2Title: 'Leveles kosárkák',
      menuW2Meta: '4 féle: sajtos, májas, darált sertéshúsos, vega',
      menuW3: 'Aszalt szilvával göngyölt szárnyasrolád',
      menuW4: 'Tavaszi jércerolád',
      menuW5: 'Sweet chilivel töltött csirkegolyók',
      menuW6: 'Ropogós sajtgolyók',
      menuW7: 'Panírozott rákolló burgonyaspirálban',
      menuW8: 'Prágai sonkás tojássaláta',
      menuW9: 'Cézársaláta szardellával',
      menuW10: 'Majonézes kukoricasaláta kemencés karajszelettel',
      menuW11: 'Franciasaláta grillezett natúr csirkefalatkával',
      menuW12: 'Fekete erdő sonka, vörösboros áfonyamártással',
      menuW13: 'Tonhalsaláta, pirított krutonnal',
      menuW14: 'Csirkemáj baconbe göngyölve, majonézes burgonyasalátával',
      menuW15Title: 'Zöldséghasábok és grissini',
      menuW15Meta: 'Dippek: fokhagymás majonéz, padlizsánkrém, snidlinges tejföl, BBQ',
      menuW16Title: 'Mini pékáruk',
      menuW16Meta: 'Mini zsemle, francia bagett',
      menuBlockDinnerLabel: 'Vacsora',
      menuBlockDinnerTitle: 'Büfé',
      menuBlockDinnerIntro: 'Levesektől az éjféli menüig',
      menuPrepTitle: 'Bekészítés',
      menuPrep1Title: 'Édes és sós aprósütemény',
      menuPrep1Meta: 'Mini pogácsa, mini tepertőspogácsa, sajtos masni',
      menuSoupTitle: 'Leves',
      menuSoup1Title: 'Újházi tyúkhúsleves',
      menuSoup1Meta: 'Gazdagon zöldségelve, főtt hússal és finom metélttel',
      menuSoup2: 'Hideg szederkrémleves',
      menuMainsTitle: 'Főételek',
      menuMainsNote: 'Büfében tálalva',
      menuM1Title: 'Vörösboros marhapörkölt',
      menuM1Meta: 'Galuskával, káposztasalátával',
      menuM2Title: 'BBQ oldalas',
      menuM2Meta: 'Grillezett csöves kukoricával, kemencés burgonyával',
      menuM3Title: 'Baconbe göngyölt csirkemell',
      menuM3Meta: 'Cheddar sajtmártással, tobozkrokettel',
      menuM4Title: 'Pirosra sült kacsacomb',
      menuM4Meta: 'Hagymás tört burgonyával, párolt lilakáposztával',
      menuM5Title: 'Klasszikus cigánypecsenye',
      menuM5Meta: 'Kakastaréjjal, jázmin rizzsel',
      menuM6Title: 'Sertés Cordon Bleu',
      menuM6Meta: 'Steakburgonyával, csalamádéval',
      menuVegBadge: 'Vegetáriánus',
      menuM7Title: 'Cukkinikenu',
      menuM7Meta: 'Sajtmártással, párolt jázmin rizzsel · vegetáriánus',
      menuSaladTitle: 'Salátabüfé',
      menuSaladName: 'Friss saláták',
      menuSaladMeta: 'Paradicsom, uborka, jégsaláta, kukorica · 2 féle öntet',
      menuDessertTitle: 'Édesség',
      menuD1Title: 'Házi rétes válogatás',
      menuD1Meta: 'Túrós mazsola nélkül, meggyes darás, meggyes-túrós, almás-fahéjas',
      menuD2Title: 'Menyasszonyi torta',
      menuMidnightTitle: 'Éjféli menü',
      menuN1Title: 'Töltött káposzta',
      menuN1Meta: 'Friss tejföllel, pékáruval, erős pistával',
      menuBlockDrinksLabel: 'Italok',
      menuBlockDrinksTitle: 'Korlátlan italcsomag',
      menuDrinksNote: 'Vacsora kezdetétől hajnalig',
      menuSoftTitle: 'Üdítők & vizek',
      menuSoft1Title: 'Üdítők',
      menuSoft1Meta: 'Coca-Cola, Coca-Cola Zero, Fanta narancs, Kinley gyömbér, tonic',
      menuSoft2: 'Ásványvíz (szénsavas és mentes)',
      menuSoft3: 'Szikvíz',
      menuSoft4Title: 'Rostos gyümölcslevek',
      menuSoft4Meta: 'Alma, narancs, őszibarack',
      menuBeerWineTitle: 'Sör & bor',
      menuBeer1: 'Csapolt Dreher sör',
      menuBeer2Title: 'Folyó borok',
      menuBeer2Meta: 'Konyári pincészet · vörös, fehér, rosé',
      menuSpiritsTitle: 'Röviditalok',
      menuSpPalinka: 'Pálinka · 3 íz',
      menuLongTitle: 'Long drinkek',
      menuLongNote: 'Az este folyamán',
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
      welcomeIntroFriSat1: 'Dear guests,',
      welcomeIntroFriSat2:
        'We are delighted to invite you to celebrate one of the most beautiful weekends of our lives with us.',
      welcomeIntroFriSat3:
        'Join us for Friday’s warm-up together and our big day on Saturday, so we can share these special moments with you.',
      welcomeIntroFriSat4: 'We look forward to welcoming you to an unforgettable celebration!',
      welcomeIntroSatOnly1: 'Dear guests,',
      welcomeIntroSatOnly2:
        'We are delighted to invite you to celebrate one of the most beautiful days of our lives with us.',
      welcomeIntroSatOnly3:
        'Join us on our big day, so we can share these special moments together.',
      welcomeIntroSatOnly4: 'We look forward to welcoming you to an unforgettable celebration!',
      welcomeImgAlt: 'Manca and Endre',
      programTitle: 'Schedule',
      programDayFriLabel: 'Friday (21 August)',
      programDaySatLabel: 'Saturday (22 August)',
      programDaySunLabel: 'Sunday (23 August)',
      programFri0Time: 'from 10:00 a.m.',
      programFri0t: 'Arrival and check-in',
      programFri1Time: '11:00 a.m.',
      programFri1t: 'Tennis tournament – already changed for play',
      programFri2Time: '12:00',
      programFri2t: 'Picnic in the park',
      programFriMeetTime: '3:30 p.m.',
      programFriMeet: 'Meet between Maison and Villabogart, walk together',
      programFri3Time: '4:00 p.m.',
      programFri3t: 'Civil ceremony at the Hollow Tree',
      programFriToastTime: '4:30 p.m.',
      programFriToast: 'Toast',
      programFri4Time: '6:00 p.m.',
      programFri4t: 'Goulash on the Maison terrace',
      programSat1Time: '9:00–10:30 a.m.',
      programSat1t: 'Breakfast at Veterángarázs',
      programSatFreeTime: '10:30 a.m. – 2:00 p.m.',
      programSatFree: 'Free time and getting ready',
      programSatArriveTime: '11:00 a.m.',
      programSatArrive: 'Arrival and check-in',
      programSat2Time: '12:00–1:00 p.m.',
      programSat2t: 'Sandwich lunch at Veterángarázs',
      programSat3Time: '2:00 p.m.',
      programSat3t: 'Wedding party leaves for Kaposvár',
      programSatChurchTime: '2:45 p.m.',
      programSatChurch: 'Wedding party at the cathedral',
      programSat4Time: '3:00 p.m.',
      programSat4t: 'Wedding mass at the Cathedral of the Assumption',
      programSat5Time: '5:00 p.m.',
      programSat5t: 'Welcome at the castle in Alsóbogát',
      programSat6Time: '6:00 p.m.',
      programSat6t: 'Group photos',
      programSat7Time: '7:00 p.m.',
      programSat7t: 'Dinner',
      programSat8Time: '9:30 p.m.',
      programSat8t: 'Cake',
      programSat9Time: '10:30 p.m.',
      programSat9t: 'First dance',
      programSat10Time: '12:00 a.m.',
      programSat10t: 'Midnight stuffed cabbage and party until dawn',
      programSun1Time: '9:00 a.m. – 12:00 p.m.',
      programSun1t: 'Breakfast at Veterángarázs',
      programSun2Time: 'from 11:00 a.m.',
      programSun2t: 'Check-out — leave the key in the lock',
      programDisclaimer: 'We reserve the right to change the programme.',
      venueTitle: 'Venue',
      venueChurchKind: 'Wedding mass',
      venueChurchName: 'Cathedral of the Assumption',
      venueChurchAddress: '7400 Kaposvár, Kossuth Square 3.',
      venueLagziKind: 'Reception',
      venueLagziName: 'Villabogart',
      venueLagziAddress: '7443 Alsóbogát, Szabadság utca 4.',
      venueMap: 'Map',
      venueMapBtn: 'Open in Maps',
      faqTitle: 'Frequently asked questions',
      faqLeadAlt: 'FAQ – mood photo',
      faq1q: 'Where are the accommodations in relation to the castle?',
      faq1a:
        'On the VILLABOGArT estate, stays such as the VILLABOGArT Guest House and Maison BOGArT are only a few minutes’ walk from the Magtár. For the Village Houses, Lake Houses and Manor Farm stays, it is typically an 8–10 minute walk, or just 3–4 minutes by car.',
      faq1MapAlt: 'Villabogart estate map – accommodation and buildings',
      faq1MapZoomAria: 'Open estate map in full size',
      faq1MapLightboxTitle: 'Villabogart estate map',
      imageLightboxClose: 'Close',
      faq2q: 'What is the best way to get to Villabogart?',
      faq2p: 'We suggest three routes:',
      faq2l1:
        'From the M7, change to route 67 at Balatonszemes, then leave at Mernye and follow the paved road through Somogygeszti to Alsóbogát centre, then down the hillside to the Magtár;',
      faq2l2:
        'or continue on route 67 to Kaposfüred, leave at the roundabout towards Juta–Somogyjád, then Alsóbogát and turn right at the sign to reach the Magtár;',
      faq2l3:
        'or leave the M7 at km 142 via Lengyeltóti–Somogyvár–Osztopán–Somogyjád (the longest route, but the best quality between villages).',
      faq3q: 'What should I wear?',
      faq3a: 'Elegant, colourful attire. Please avoid white, black and red. Dinner and the party are outdoors — bring a warm layer, and we recommend skipping high heels.',
      faq4q: 'What wedding gifts do you welcome?',
      faq4a:
        'Our home is complete and we do not wish for anything else—only a little support as we begin our life together.',
      galleryTitle: 'Gallery',
      galleryNote: 'Moments together.',
      galleryAlt1: 'Gallery 1.',
      galleryAlt2: 'Gallery 2.',
      galleryAlt3: 'Gallery 3.',
      galleryAlt4: 'Gallery 4.',
      galleryAlt5: 'Gallery 5.',
      galleryAlt6: 'Gallery 6.',
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
      navLinkHome: 'Invitation',
      navLinkMenu: 'Dinner Menu',
      navLinkRsvp: 'RSVP',
      navLinkStay: 'Stays',
      navLinkInfo: 'Practical info',
      menuTeaserTitle: 'Dinner Menu',
      menuTeaserCta: 'View the menu',
      homeCtaTitle: 'For the weekend',
      homeCtaStay: 'Search your name to see where you stay.',
      homeCtaInfo: 'Parking, contacts, directions, transfer.',
      stayDocTitle: 'Stays – Manca & Endre',
      stayTitle: 'Stays',
      stayLead: 'We reserved a place for every guest. Type your name to see your room.',
      staySearchLabel: 'Search by name',
      staySearchPh: 'e.g. Anna Kovács',
      stayEmpty: 'No stay found for that name. Try a first or last name.',
      stayNotesTitle: 'Good to know',
      stayNoteLinen: 'Clean towels and linen will be waiting — please bring anything else you need.',
      stayTowelNote: 'If you stay at Zichy (small) Castle: please bring a towel. Not every room has a bathroom; shared bathrooms are on the upper floor.',
      stayNoteKey: 'From 11:00 on Sunday, please leave the key in the lock when you check out.',
      stayNoteGrass: 'Parking on the grass is not allowed on the VILLABOGArT grounds.',
      stayParkEstate: 'After the chapel, take the main gate on the right. Inside the gate, parking is on the left.',
      stayParkVillage: 'You may park in front of the houses or in the garden.',
      stayParkZichy: 'Drive through the main gate; after 100 m you can park on the right.',
      stayMapTitle: 'Estate map',
      stayMapLead: 'VILLABOGArT and Maison are a short walk from the granary. Village houses, lake houses and the farmstead are about 8–10 minutes on foot.',
      stayBrowseTitle: 'By house',
      stayToInfo: 'Parking, directions and contacts →',
      infoDocTitle: 'Practical info – Manca & Endre',
      infoTitle: 'Practical info',
      infoLead: 'Contacts, parking, directions and what helps over the weekend.',
      infoJumpContact: 'Contacts',
      infoJumpPark: 'Parking',
      infoJumpKapos: 'Kaposvár',
      infoJumpRoute: 'Directions',
      infoJumpTransfer: 'Transfer',
      infoJumpDress: 'Dress code',
      infoContactTitle: 'Key contacts',
      infoContactVenueRole: 'Venue',
      infoContactProgramRole: 'Programme',
      infoContactTransferRole: 'Reception transfer',
      infoParkTitle: 'Parking in Alsóbogát',
      infoParkEstateTitle: 'VILLABOGArT & Maison',
      infoParkVillageTitle: 'Village houses & lake houses',
      infoParkZichyTitle: 'Zichy (small) Castle',
      infoKaposTitle: 'Parking in Kaposvár',
      infoKaposLead: 'The cathedral is in the pedestrian zone. These car parks are a short walk away — arrive a few minutes early.',
      infoPark1Meta: '7400 Kaposvár, Városház u. 2 · about 90 m',
      infoPark2Title: 'Paid parking – Széchenyi Square',
      infoPark2Meta: '7400 Kaposvár, Széchenyi tér 3 · about 230 m',
      infoPark3Meta: '7400 Kaposvár, Korzó utca · about 270 m',
      infoPark4Meta: '7400 Kaposvár, Kontrássy köz · about 320 m',
      infoKaposMore: 'More paid spots: Teleki utca, Irányi Dániel utca, Zárda utca, Ady Endre inner block, Kossuth Square.',
      infoKaposOfficial: 'Official Kaposvár parking guide',
      infoRouteTitle: 'Getting to Alsóbogát',
      infoTransferTitle: 'Transfer at the reception',
      infoTransferBody: 'If you are tired after the party and do not want to walk to your stay, a minibus will wait in front of the chapel.',
      infoPlacesTitle: 'Places over the weekend',
      infoPlaceTennis: 'Tennis & picnic',
      infoPlaceTennisMeta: 'Tennis court / park',
      infoPlaceCivil: 'Civil ceremony',
      infoPlaceCivilMeta: 'Meet between Maison and Villabogart, then walk to the Hollow Tree.',
      infoPlaceMealsKicker: 'Breakfast & lunch',
      infoPlaceGarage: 'Veterángarázs',
      infoDressTitle: 'Dress code',
      infoDressFriTitle: 'Friday · civil ceremony',
      infoDressFri: 'Summer garden formal. High heels are best avoided in the park.',
      infoDressSatTitle: 'Saturday',
      infoDressSat: 'Elegant and colourful. Please avoid white, black and red. Dinner and the party are outdoors and evenings get cool — bring a warm layer. High heels are best avoided.',
      infoBringTitle: 'Please bring on Friday',
      infoBring1: 'Sunscreen and mosquito spray',
      infoBring2: 'Tennis racket and tennis clothes if you are playing',
      infoBring3: 'A blanket if you can',
      infoBring4: 'Garden games (badminton, ball, cards…)',
      infoBring5: 'The picnic food you are bringing',
      infoToStay: 'Find your stay →',
      menuPageTitle: 'Menu',
      menuDocTitle: 'Menu – Manca & Endre',
      menuKicker: 'Welcome drinks & dinner',
      menuLead: 'What we will be serving this evening.',
      menuBack: '← Back to the invitation',
      menuBlockReceptionLabel: 'Reception',
      menuBlockReceptionTitle: 'Finger Food',
      menuBlockReceptionIntro: 'Welcome bites',
      menuW1: 'Mini wraps, mini burgers',
      menuW2Title: 'Puff pastry cups',
      menuW2Meta: '4 flavours: cheese, liver, minced pork, veggie',
      menuW3: 'Poultry roulade wrapped with dried plum',
      menuW4: 'Spring chicken roulade',
      menuW5: 'Chicken balls filled with sweet chili',
      menuW6: 'Crispy cheese balls',
      menuW7: 'Breaded crab claws with potato spiral',
      menuW8: 'Prague ham egg salad',
      menuW9: 'Caesar salad with anchovies',
      menuW10: 'Mayonnaise corn salad with oven-roasted loin',
      menuW11: 'Russian salad with grilled chicken bites',
      menuW12: 'Black Forest ham with red-wine cranberry sauce',
      menuW13: 'Tuna salad with toasted croutons',
      menuW14: 'Chicken liver wrapped in bacon, with mayonnaise potato salad',
      menuW15Title: 'Vegetable sticks & grissini',
      menuW15Meta: 'Dips: garlic mayo, aubergine cream, chives sour cream, BBQ',
      menuW16Title: 'Mini breads',
      menuW16Meta: 'Mini rolls, French baguette',
      menuBlockDinnerLabel: 'Dinner',
      menuBlockDinnerTitle: 'Buffet',
      menuBlockDinnerIntro: 'From soup to midnight menu',
      menuPrepTitle: 'Table snacks',
      menuPrep1Title: 'Sweet & savoury pastries',
      menuPrep1Meta: 'Mini pogácsa, crackling pogácsa, cheese twists',
      menuSoupTitle: 'Soup',
      menuSoup1Title: 'Újházi chicken soup',
      menuSoup1Meta: 'Richly vegetable-filled, with cooked meat and fine noodles',
      menuSoup2: 'Cold blackberry cream soup',
      menuMainsTitle: 'Mains',
      menuMainsNote: 'Served as a buffet',
      menuM1Title: 'Red-wine beef stew',
      menuM1Meta: 'With galuska and cabbage salad',
      menuM2Title: 'BBQ spare ribs',
      menuM2Meta: 'Grilled corn on the cob, oven potatoes',
      menuM3Title: 'Bacon-wrapped chicken breast',
      menuM3Meta: 'Cheddar sauce, croquettes',
      menuM4Title: 'Roast duck leg',
      menuM4Meta: 'Onion mash, braised red cabbage',
      menuM5Title: 'Classic gypsy roast',
      menuM5Meta: 'Onion rings, jasmine rice',
      menuM6Title: 'Pork Cordon Bleu',
      menuM6Meta: 'Steak fries, pickles',
      menuVegBadge: 'Vegetarian',
      menuM7Title: 'Courgette kenu',
      menuM7Meta: 'Cheese sauce, steamed jasmine rice · vegetarian',
      menuSaladTitle: 'Salad buffet',
      menuSaladName: 'Fresh salads',
      menuSaladMeta: 'Tomato, cucumber, iceberg, corn · 2 dressings',
      menuDessertTitle: 'Sweets',
      menuD1Title: 'Homemade strudel selection',
      menuD1Meta: 'Cottage cheese without raisins, sour-cherry semolina, sour-cherry & cottage cheese, apple-cinnamon',
      menuD2Title: 'Wedding cake',
      menuMidnightTitle: 'Midnight menu',
      menuN1Title: 'Stuffed cabbage',
      menuN1Meta: 'Fresh sour cream, bread, hot paprika paste',
      menuBlockDrinksLabel: 'Drinks',
      menuBlockDrinksTitle: 'Unlimited drinks package',
      menuDrinksNote: 'From dinner until dawn',
      menuSoftTitle: 'Soft drinks & water',
      menuSoft1Title: 'Soft drinks',
      menuSoft1Meta: 'Coca-Cola, Coca-Cola Zero, Fanta orange, Kinley ginger, tonic',
      menuSoft2: 'Mineral water (sparkling and still)',
      menuSoft3: 'Soda water',
      menuSoft4Title: 'Fruit nectars',
      menuSoft4Meta: 'Apple, orange, peach',
      menuBeerWineTitle: 'Beer & wine',
      menuBeer1: 'Draught Dreher beer',
      menuBeer2Title: 'House wines',
      menuBeer2Meta: 'Konyári winery · red, white, rosé',
      menuSpiritsTitle: 'Spirits',
      menuSpPalinka: 'Pálinka · 3 flavours',
      menuLongTitle: 'Long drinks',
      menuLongNote: 'Throughout the evening',
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
