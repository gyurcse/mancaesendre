(function () {
  'use strict';

  var ADDR = {
    estate: '7443 Alsóbogát, Szabadság utca 4.',
    falusi72: '7443 Alsóbogát, Vörösmarty utca 72.',
    falusi73: '7443 Alsóbogát, Vörösmarty utca 73.',
    falusi80: '7443 Alsóbogát, Vörösmarty utca 80.',
    lila: '7443 Alsóbogát, Petőfi utca 4.',
    piros: '7443 Alsóbogát, Piros Ház',
    zold: '7443 Alsóbogát, Zöld Ház',
    majorsagi: '7443 Alsóbogát, Vörösmarty utca 1.',
    zichy: '7443 Alsóbogát, Vörösmarty utca 47.'
  };

  /* Pontos Google Maps pin a MasterPlan „szállás összesítő” lapjáról */
  var MAPS = {
    villabogart: "https://www.google.com/maps/place/46%C2%B030'21.0%22N+17%C2%B044'35.6%22E/@46.505833,17.7424688,287m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d46.505833!4d17.743231",
    maison: "https://www.google.com/maps/place/46%C2%B030'20.0%22N+17%C2%B044'34.4%22E/@46.505549,17.7415995,287m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d46.505549!4d17.742887",
    falusi72: 'https://www.google.com/maps/place/Als%C3%B3bog%C3%A1t,+V%C3%B6r%C3%B6smarty+u.+72,+7443/@46.5131845,17.7462824,98m/data=!3m1!1e3!4m10!1m2!2m1!1zdsO2csO2c21hcnR5IHV0Y2EgNzI!3m6!1s0x476847c6facf18f7:0x89898aa83a0c483a!8m2!3d46.513352!4d17.7468688!15sChR2w7Zyw7ZzbWFydHkgdXRjYSA3MpIBCnN1YnByZW1pc2XgAQA!16s%2Fg%2F11pzt26tkt',
    falusi73: 'https://www.google.com/maps/place/Als%C3%B3bog%C3%A1t,+V%C3%B6r%C3%B6smarty+u.+69,+7443/@46.5130383,17.7467291,166m/data=!3m1!1e3!4m15!1m8!3m7!1s0x476847c6e485554d:0x40413c19f5718ab3!2zQWxzw7Nib2fDoXQsIFbDtnLDtnNtYXJ0eSB1LiA3MywgNzQ0Mw!3b1!8m2!3d46.5122881!4d17.7472997!16s%2Fg%2F11rqt_v8h4!3m5!1s0x476847c6f5a65b85:0xc29035edb42f033c!8m2!3d46.5130692!4d17.7469263!16s%2Fg%2F11rqttntj1',
    falusi80: 'https://www.google.com/maps/place/Als%C3%B3bog%C3%A1t,+V%C3%B6r%C3%B6smarty+u.+77,+7443/@46.5115682,17.7471256,151m/data=!3m1!1e3!4m9!1m2!2m1!1zVsO2csO2c21hcnR5IHUuIDgw!3m5!1s0x476847c71f138f7d:0xc1dab84cd73c532a!8m2!3d46.5116944!4d17.7475081!16s%2Fg%2F11pztgh42q',
    lila: "https://www.google.com/maps/place/46%C2%B030'37.5%22N+17%C2%B044'53.2%22E/@46.510409,17.7472018,287m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x476847c74f3e430f:0xaa4b0e52e7b1fb63!2zQWxzw7Nib2fDoXQsIFBldMWRZmkgdS4gNCwgNzQ0Mw!3b1!8m2!3d46.51025!4d17.747721!16s%2Fg%2F11csfhqvx8!3m3!8m2!3d46.510409!4d17.748102",
    piros: 'https://www.google.com/maps/place/Piros+h%C3%A1z/@46.5074928,17.7379371,200m/data=!3m1!1e3!4m6!3m5!1s0x476847e921eba29f:0x62b13f73ce17f1d6!8m2!3d46.5075896!4d17.7375967!16s%2Fg%2F11n__78jm2',
    zold: 'https://www.google.com/maps/search/z%C3%B6ld+h%C3%A1z/@46.5074928,17.7379371,200m/data=!3m1!1e3',
    majorsagi: "https://www.google.com/maps/place/46%C2%B030'10.8%22N+17%C2%B045'01.5%22E/@46.503179,17.7500377,139m/data=!3m1!1e3!4m4!3m3!8m2!3d46.503009!4d17.75042",
    magtar: "https://www.google.com/maps/place/46%C2%B031'16.3%22N+17%C2%B044'46.4%22E/@46.521181,17.7455268,287m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x476847d01ca25bcf:0xa8b714eba6e35cb5!2sZichy-+(kis-)+kast%C3%A9ly!8m2!3d46.5210784!4d17.7444026!16s%2Fg%2F11g6w5xkmr!3m3!8m2!3d46.521181!4d17.74623",
    portahaz: "https://www.google.com/maps/place/46%C2%B031'12.1%22N+17%C2%B044'47.6%22E/@46.520018,17.7455883,287m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d46.520018!4d17.746554"
  };

  window.ESKUVO_STAY_GROUPS = [
    {
      id: 'villabogart',
      title: 'VILLABOGArT',
      address: ADDR.estate,
      parking: 'estate',
      maps: MAPS.villabogart
    },
    {
      id: 'maison',
      title: 'MaisonBOGArT',
      address: ADDR.estate,
      parking: 'estate',
      maps: MAPS.maison
    },
    {
      id: 'falusi',
      title: 'Falusi házak',
      address: 'Alsóbogát, Vörösmarty utca',
      parking: 'village',
      maps: MAPS.falusi72
    },
    {
      id: 'lila',
      title: 'Lila Ház',
      address: ADDR.lila,
      parking: 'village',
      maps: MAPS.lila
    },
    {
      id: 'tohaz',
      title: 'Tóházak',
      address: 'Alsóbogát',
      parking: 'village',
      maps: MAPS.piros
    },
    {
      id: 'majorsagi',
      title: 'Majorsági Ház',
      address: ADDR.majorsagi,
      parking: 'village',
      maps: MAPS.majorsagi
    },
    {
      id: 'zichy',
      title: 'Zichy (kis) Kastély',
      address: ADDR.zichy,
      parking: 'zichy',
      maps: MAPS.magtar,
      towel: true
    }
  ];

  window.ESKUVO_STAY_ROOMS = [
    { id: 'v1', group: 'villabogart', unit: 'Szoba I.', nick: 'Orsolya Nagyságos Asszony', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Gyurcsovics Hajnalka', 'Stubits Dénes', 'Gyurcsovics Lilla', 'Semsei Marci'] },
    { id: 'v2', group: 'villabogart', unit: 'Szoba II.', nick: 'Bence Ödön úr', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Gyurcsovics Árpi', 'Meszlényi Kármen'] },
    { id: 'v3', group: 'villabogart', unit: 'Szoba III.', nick: 'Mariann Kisasszony', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Mérő-Gyurcsovics Noémi', 'Mérő Dávid', 'Mérő Kende'] },
    { id: 'v4', group: 'villabogart', unit: 'Szoba IV.', nick: 'Karolin Hercegnő', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Blaskovich Bence', 'Mazur Virág'] },
    { id: 'v5', group: 'villabogart', unit: 'Szoba V.', nick: 'Elizabet Hercegnő', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Blaskovich Manca', 'Gyurcsovics Endre'] },
    { id: 'v6', group: 'villabogart', unit: 'Szoba VI.', nick: 'Dr. Borbála Nagyságos Asszony', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Kersch Emőke', 'Gyurcsovics Péter'] },
    { id: 'v7', group: 'villabogart', unit: 'Szoba VII.', nick: 'Benedek Úrfi', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Gyurcsovics Lajos', 'Pusztai Ágnes'] },
    { id: 'v8', group: 'villabogart', unit: 'Szoba VIII.', nick: 'Ákos Junior', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Gyurcsovics Máté', 'Berecz Veronika'] },
    { id: 'v9', group: 'villabogart', unit: 'Szoba IX.', nick: 'Alexa Hercegnő', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Gyurcsovics Misi', 'Csordás Dóra'] },
    { id: 'va', group: 'villabogart', unit: 'Apartman', nick: '', address: ADDR.estate, maps: MAPS.villabogart, guests: ['Gyurcsovics Márk', 'Gyurcsovics Zita', 'Gyurcsovics Mór', 'Gyurcsovics Miló'] },

    { id: 'm1', group: 'maison', unit: 'MaisonBOGArT I.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Kersch Ferenc', 'Szilágyi Ágota', 'Kersch Imola'] },
    { id: 'm2', group: 'maison', unit: 'MaisonBOGArT II.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Vass Ágnes'] },
    { id: 'm3', group: 'maison', unit: 'MaisonBOGArT III.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Győrfi Ágnes', 'Zsidi László'] },
    { id: 'm4', group: 'maison', unit: 'MaisonBOGArT IV.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Szabó Bálint', 'Szabóné Réthy Mónika', 'Szabó Tádé'] },
    { id: 'm5', group: 'maison', unit: 'MaisonBOGArT V.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Apáthy Soma', 'Apáthy Anna', 'Apáthy Léda', 'Apáthy Bíbor'] },
    { id: 'm6', group: 'maison', unit: 'MaisonBOGArT VI.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Blaskovich Orsi', 'Végső Tamás', 'Végső András', 'Végső Vilmos'] },
    { id: 'm7', group: 'maison', unit: 'MaisonBOGArT VII.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Zsidi Zoli', 'Zsidi Tünde'] },
    { id: 'm8', group: 'maison', unit: 'MaisonBOGArT VIII.', nick: '', address: ADDR.estate, maps: MAPS.maison, guests: ['Csák Levente', 'Csák Tímea', 'Csák Lili', 'Csák Bella'] },

    { id: 'f72', group: 'falusi', unit: 'Falusi Ház 72-es', nick: '', address: ADDR.falusi72, maps: MAPS.falusi72, guests: ['Tácsik Ádám', 'Müller Laura', 'Varga Marci', 'Farkas Réka'] },
    { id: 'f73', group: 'falusi', unit: 'Falusi Ház 73-as', nick: '', address: ADDR.falusi73, maps: MAPS.falusi73, guests: ['Zalai Enikő', 'Boros József', 'Csák Örs', 'Csák Botond', 'Kratochwill Petra'] },
    { id: 'f80', group: 'falusi', unit: 'Falusi Ház 80-as', nick: '', address: ADDR.falusi80, maps: MAPS.falusi80, guests: ['Blaskovich Eszter', 'Blaskovich Borbála', 'Schneider Max', 'Schneider Eli', 'Blaskovich Beni', 'Blaskovich Zsuzsi'] },

    { id: 'li', group: 'lila', unit: 'Lila Ház', nick: '', address: ADDR.lila, maps: MAPS.lila, guests: ['Csák Mónika', 'Csák Attila', 'Szabó Dido', 'Csák Miki'] },

    { id: 'tpb', group: 'tohaz', unit: 'Piros Tóház bal', nick: '', address: ADDR.piros, maps: MAPS.piros, guests: ['Almási Dani', 'Bodnár Fanni'] },
    { id: 'tpj', group: 'tohaz', unit: 'Piros Tóház jobb', nick: '', address: ADDR.piros, maps: MAPS.piros, guests: ['Nagy-Hegyi Kamilla', 'Hegyi Marci', 'Velkei Zsuzsi'] },
    { id: 'tz', group: 'tohaz', unit: 'Zöld Tóház', nick: '', address: ADDR.zold, maps: MAPS.zold, guests: ['Vastag Luca Kata', 'Géczy Boldizsár', 'Sáska Lili', 'Márkus Káleb'] },

    { id: 'mj', group: 'majorsagi', unit: 'Majorsági Ház', nick: '', address: ADDR.majorsagi, maps: MAPS.majorsagi, guests: ['Vas Vince', 'Kiss-Szemán Johanna', 'Horváth Levente', 'Madácsi Réka'] },

    { id: 'zf', group: 'zichy', unit: 'Magtár földszint', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Farkas Mercédesz', 'Pap Judit'] },
    { id: 'z1a', group: 'zichy', unit: 'Magtár 1. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Székely Marci', 'Dávid Kamilla'] },
    { id: 'z1b', group: 'zichy', unit: 'Magtár 1. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Farkas Zita', 'Stefanie Stolzlechner'] },
    { id: 'z2a', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Kiss András', 'Lengyel Miklós'] },
    { id: 'z2b', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Szalontay Panni', 'Lakatos János'] },
    { id: 'z2c', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Bruno Cubic'] },
    { id: 'z2d', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Csernus Palkó', 'Zink Zsófi'] },
    { id: 'z2e', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Lauf Dorka', 'Miheller Sándor'] },
    { id: 'z2f', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, maps: MAPS.magtar, guests: ['Petik Ábel', 'Petik-Kisbán Petra'] },
    { id: 'p1', group: 'zichy', unit: 'Portaház · 1. apartman', nick: 'egyből jobbra', address: ADDR.zichy, maps: MAPS.portahaz, guests: ['Horváth Petra', 'Horváth Helga', 'Enes Ucan'] },
    { id: 'p2', group: 'zichy', unit: 'Portaház · 2. apartman', nick: 'egyből jobbra', address: ADDR.zichy, maps: MAPS.portahaz, guests: ['Putnoky Csanád', 'Kiss Martin'] },
    { id: 'p3', group: 'zichy', unit: 'Portaház · 3. apartman', nick: 'egyből jobbra', address: ADDR.zichy, maps: MAPS.portahaz, guests: ['Komróczki Ági', 'Kiss Heni'] }
  ];
})();
