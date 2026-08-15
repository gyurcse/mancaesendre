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
      programFri1Time: '11:00–14:00',
      programFri1t: 'Tenisz bajnokság',
      programFri2Time: '12:00',
      programFri2t: 'Piknik a parkban',
      programFri3Time: '16:00',
      programFri3t: 'Polgári ceremónia az Odvas fánál',
      programFri4Time: '18:00',
      programFri4t: 'Bogrács vacsora a Maison teraszán',
      programSat1Time: '08:00–10:00',
      programSat1t: 'Reggeli a Veterángarázsban',
      programSat2Time: '12:00–13:00',
      programSat2t: 'Pizza ebéd a Veterángarázsban',
      programSat3Time: '14:15',
      programSat3t: 'Indulás Kaposvárra',
      programSat4Time: '15:00–16:00',
      programSat4t: 'Nászmise a Kaposvári Nagyboldogasszony templomban',
      programSat5Time: '17:00',
      programSat5t: 'Vendégvárás Alsóbogáton',
      programSat6Time: '18:00',
      programSat6t: 'Csoportképek',
      programSat7Time: '19:00',
      programSat7t: 'Vacsora',
      programSat8Time: '21:30',
      programSat8t: 'Torta',
      programSat9Time: '22:00',
      programSat9t: 'Nyitótánc és buli hajnalig',
      programSat10Time: '24:00',
      programSat10t: 'Éjféli menü',
      programSun1Time: '08:30–12:00',
      programSun1t: 'Reggeli',
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
      faq3a: 'Elegáns, színes öltözékre gondolunk — kérjük, kerüljétek a sötét színeket.',
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
      navLinkMenu: 'Büfémenü',
      navLinkRsvp: 'RSVP',
      menuPageTitle: 'Büfémenü',
      menuDocTitle: 'Büfémenü – Manca & Endre',
      menuKicker: 'Vendégvárás & vacsora',
      menuLead: 'Amit az este során kínálunk nektek.',
      menuBack: '← Vissza a meghívóhoz',
      menuWelcomeTitle: 'Vendégváró',
      menuWelcomeNote: 'Finger food jellegű kínálat',
      menuW1: 'Mini wrapok, mini burgerek',
      menuW2: 'Leveles kosárkák 4 féle ízben (sajtos, májas, darált sertéshúsos, vega)',
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
      menuW15:
        'Zöldséghasábok és grissini dippekkel (fokhagymás majonéz, padlizsánkrém, snidlinges tejföl, BBQ)',
      menuW16: 'Mini pékáruk (mini zsemle, francia bagett)',
      menuPrepTitle: 'Bekészítés',
      menuPrep1: 'Édes és sós aprósütemény (mini pogácsa, mini tepertőspogácsa, sajtos masni)',
      menuDinnerTitle: 'Vacsora – büfé',
      menuSoupTitle: 'Leves',
      menuSoup1: 'Újházi tyúkhúsleves gazdagon zöldségelve, főtt hússal és metélttel',
      menuSoup2: 'Hideg szederkrémleves',
      menuMainsTitle: 'Főételek',
      menuM1: 'Vörösboros marhapörkölt galuskával, káposztasalátával',
      menuM2: 'BBQ oldalas, grillezett csöves kukoricával, kemencés burgonyával',
      menuM3: 'Baconbe göngyölt csirkemell, cheddar sajtmártással, tobozkrokettel',
      menuM4: 'Pirosra sült kacsacomb, hagymás tört burgonyával, párolt lilakáposztával',
      menuM5: 'Klasszikus cigánypecsenye, kakastaréjjal, jázmin rizzsel',
      menuM6: 'Sertés Cordon Bleu, steakburgonyával, csalamádéval',
      menuM7: 'Cukkinikenu sajtmártással, párolt jázmin rizzsel (vegetáriánus)',
      menuM8: 'Salátabüfé: paradicsom, uborka, jégsaláta, kukorica, 2 féle öntettel',
      menuDessertTitle: 'Rétes & torta',
      menuD1:
        'Házi rétes válogatás (túrós mazsola nélkül, meggyes darás, meggyes-túrós, almás-fahéjas)',
      menuD2: 'Menyasszonyi torta',
      menuMidnightTitle: 'Éjféli menü',
      menuN1: 'Töltöttkáposzta friss tejföllel, pékáruval, erős pistával',
      menuN2: 'Visszatálalt főételek',
      menuDrinksTitle: 'Italcsomag',
      menuDrinksNote: 'Korlátlan alkoholos – vacsora kezdetétől hajnalig',
      menuSoftTitle: 'Üdítők & víz',
      menuSoft1: 'Üdítők: Coca-Cola, Coca-Cola Zero, Fanta narancs, Kinley gyömbér, tonic',
      menuSoft2: 'Ásványvíz (szénsavas és mentes), szikvíz',
      menuSoft3: 'Rostos levek: alma, narancs, őszibarack',
      menuBeerWineTitle: 'Sör & bor',
      menuBeer1: 'Csapolt Dreher sör',
      menuBeer2: 'Folyó borok a Konyári pincészetből (vörös, fehér, rosé)',
      menuSpiritsTitle: 'Röviditalok',
      menuSp1:
        'Jägermeister, Bombay gin, Finlandia vodka, Jack Daniel’s whiskey, Bacardi, Aperol, Tubi 60, pálinka (3 íz), Baileys',
      menuLongTitle: 'Long drinkek',
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
      programFri1Time: '11:00 a.m. – 2:00 p.m.',
      programFri1t: 'Tennis tournament',
      programFri2Time: '12:00',
      programFri2t: 'Picnic in the park',
      programFri3Time: '4:00 p.m.',
      programFri3t: 'Civil ceremony at the Odvas tree',
      programFri4Time: '6:00 p.m.',
      programFri4t: 'Goulash dinner on the Maison terrace',
      programSat1Time: '8:00–10:00 a.m.',
      programSat1t: 'Breakfast at Veterángarázs',
      programSat2Time: '12:00–1:00 p.m.',
      programSat2t: 'Pizza lunch at Veterángarázs',
      programSat3Time: '2:15 p.m.',
      programSat3t: 'Departure to Kaposvár',
      programSat4Time: '3:00–4:00 p.m.',
      programSat4t: 'Wedding mass at Kaposvár Cathedral of the Assumption',
      programSat5Time: '5:00 p.m.',
      programSat5t: 'Guest welcome in Alsóbogát',
      programSat6Time: '6:00 p.m.',
      programSat6t: 'Group photos',
      programSat7Time: '7:00 p.m.',
      programSat7t: 'Dinner',
      programSat8Time: '9:30 p.m.',
      programSat8t: 'Cake',
      programSat9Time: '10:00 p.m.',
      programSat9t: 'First dance and party until dawn',
      programSat10Time: '12:00 a.m.',
      programSat10t: 'Midnight menu',
      programSun1Time: '8:30 a.m. – 12:00 p.m.',
      programSun1t: 'Breakfast',
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
      faq3a: 'Elegant, colourful attire — please avoid dark colours.',
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
      navLinkMenu: 'Buffet menu',
      navLinkRsvp: 'RSVP',
      menuPageTitle: 'Buffet menu',
      menuDocTitle: 'Buffet menu – Manca & Endre',
      menuKicker: 'Welcome drinks & dinner',
      menuLead: 'What we will be serving throughout the evening.',
      menuBack: '← Back to the invitation',
      menuWelcomeTitle: 'Welcome reception',
      menuWelcomeNote: 'Finger-food selection',
      menuW1: 'Mini wraps, mini burgers',
      menuW2: 'Puff pastry cups in 4 flavours (cheese, liver, minced pork, veggie)',
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
      menuW15:
        'Vegetable sticks and grissini with dips (garlic mayo, aubergine cream, chives sour cream, BBQ)',
      menuW16: 'Mini breads (mini rolls, French baguette)',
      menuPrepTitle: 'Table snacks',
      menuPrep1: 'Sweet and savoury pastries (mini pogácsa, crackling pogácsa, cheese twists)',
      menuDinnerTitle: 'Dinner – buffet',
      menuSoupTitle: 'Soup',
      menuSoup1: 'Újházi chicken soup richly vegetable-filled, with cooked meat and noodles',
      menuSoup2: 'Cold blackberry cream soup',
      menuMainsTitle: 'Mains',
      menuM1: 'Red-wine beef stew with galuska and cabbage salad',
      menuM2: 'BBQ spare ribs with grilled corn on the cob and oven potatoes',
      menuM3: 'Bacon-wrapped chicken breast with cheddar sauce and croquettes',
      menuM4: 'Roast duck leg with onion mash and braised red cabbage',
      menuM5: 'Classic gypsy roast with onion rings and jasmine rice',
      menuM6: 'Pork Cordon Bleu with steak fries and pickles',
      menuM7: 'Courgette kenu with cheese sauce and steamed jasmine rice (vegetarian)',
      menuM8: 'Salad buffet: tomato, cucumber, iceberg, corn, with 2 dressings',
      menuDessertTitle: 'Strudel & cake',
      menuD1:
        'Homemade strudel selection (cottage cheese without raisins, sour-cherry semolina, sour-cherry & cottage cheese, apple-cinnamon)',
      menuD2: 'Wedding cake',
      menuMidnightTitle: 'Midnight menu',
      menuN1: 'Stuffed cabbage with fresh sour cream, bread and hot paprika paste',
      menuN2: 'Re-served mains',
      menuDrinksTitle: 'Drinks package',
      menuDrinksNote: 'Unlimited alcoholic – from dinner until dawn',
      menuSoftTitle: 'Soft drinks & water',
      menuSoft1: 'Soft drinks: Coca-Cola, Coca-Cola Zero, Fanta orange, Kinley ginger, tonic',
      menuSoft2: 'Mineral water (sparkling and still), soda water',
      menuSoft3: 'Fruit nectars: apple, orange, peach',
      menuBeerWineTitle: 'Beer & wine',
      menuBeer1: 'Draught Dreher beer',
      menuBeer2: 'House wines from Konyári winery (red, white, rosé)',
      menuSpiritsTitle: 'Spirits',
      menuSp1:
        'Jägermeister, Bombay gin, Finlandia vodka, Jack Daniel’s whiskey, Bacardi, Aperol, Tubi 60, pálinka (3 flavours), Baileys',
      menuLongTitle: 'Long drinks',
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
