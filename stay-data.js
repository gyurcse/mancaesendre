(function () {
  'use strict';

  function maps(q) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  }

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

  window.ESKUVO_STAY_GROUPS = [
    {
      id: 'villabogart',
      title: 'VILLABOGArT',
      address: ADDR.estate,
      parking: 'estate',
      maps: maps(ADDR.estate)
    },
    {
      id: 'maison',
      title: 'MaisonBOGArT',
      address: ADDR.estate,
      parking: 'estate',
      maps: maps(ADDR.estate)
    },
    {
      id: 'falusi',
      title: 'Falusi házak',
      address: 'Alsóbogát, Vörösmarty utca',
      parking: 'village',
      maps: maps('Alsóbogát Vörösmarty utca')
    },
    {
      id: 'lila',
      title: 'Lila Ház',
      address: ADDR.lila,
      parking: 'village',
      maps: maps(ADDR.lila)
    },
    {
      id: 'tohaz',
      title: 'Tóházak',
      address: 'Alsóbogát',
      parking: 'village',
      maps: maps('Alsóbogát Tóházak')
    },
    {
      id: 'majorsagi',
      title: 'Majorsági Ház',
      address: ADDR.majorsagi,
      parking: 'village',
      maps: maps(ADDR.majorsagi)
    },
    {
      id: 'zichy',
      title: 'Zichy (kis) Kastély',
      address: ADDR.zichy,
      parking: 'zichy',
      maps: maps(ADDR.zichy),
      towel: true
    }
  ];

  window.ESKUVO_STAY_ROOMS = [
    { id: 'v1', group: 'villabogart', unit: 'Szoba I.', nick: 'Orsolya Nagyságos Asszony', address: ADDR.estate, guests: ['Gyurcsovics Hajnalka', 'Stubits Dénes', 'Gyurcsovics Lilla', 'Semsei Marci'] },
    { id: 'v2', group: 'villabogart', unit: 'Szoba II.', nick: 'Bence Ödön úr', address: ADDR.estate, guests: ['Gyurcsovics Árpi', 'Meszlényi Kármen'] },
    { id: 'v3', group: 'villabogart', unit: 'Szoba III.', nick: 'Mariann Kisasszony', address: ADDR.estate, guests: ['Mérő-Gyurcsovics Noémi', 'Mérő Dávid', 'Mérő Kende'] },
    { id: 'v4', group: 'villabogart', unit: 'Szoba IV.', nick: 'Karolin Hercegnő', address: ADDR.estate, guests: ['Blaskovich Bence', 'Mazur Virág'] },
    { id: 'v5', group: 'villabogart', unit: 'Szoba V.', nick: 'Elizabet Hercegnő', address: ADDR.estate, guests: ['Blaskovich Manca', 'Gyurcsovics Endre'] },
    { id: 'v6', group: 'villabogart', unit: 'Szoba VI.', nick: 'Dr. Borbála Nagyságos Asszony', address: ADDR.estate, guests: ['Kersch Emőke', 'Gyurcsovics Péter'] },
    { id: 'v7', group: 'villabogart', unit: 'Szoba VII.', nick: 'Benedek Úrfi', address: ADDR.estate, guests: ['Gyurcsovics Lajos', 'Pusztai Ágnes'] },
    { id: 'v8', group: 'villabogart', unit: 'Szoba VIII.', nick: 'Ákos Junior', address: ADDR.estate, guests: ['Gyurcsovics Máté', 'Berecz Veronika'] },
    { id: 'v9', group: 'villabogart', unit: 'Szoba IX.', nick: 'Alexa Hercegnő', address: ADDR.estate, guests: ['Gyurcsovics Misi', 'Csordás Dóra'] },
    { id: 'va', group: 'villabogart', unit: 'Apartman', nick: '', address: ADDR.estate, guests: ['Gyurcsovics Márk', 'Gyurcsovics Zita', 'Gyurcsovics Mór', 'Gyurcsovics Miló'] },

    { id: 'm1', group: 'maison', unit: 'MaisonBOGArT I.', nick: '', address: ADDR.estate, guests: ['Kersch Ferenc', 'Szilágyi Ágota', 'Kersch Imola'] },
    { id: 'm2', group: 'maison', unit: 'MaisonBOGArT II.', nick: '', address: ADDR.estate, guests: ['Vass Ágnes'] },
    { id: 'm3', group: 'maison', unit: 'MaisonBOGArT III.', nick: '', address: ADDR.estate, guests: ['Győrfi Ágnes', 'Zsidi László'] },
    { id: 'm4', group: 'maison', unit: 'MaisonBOGArT IV.', nick: '', address: ADDR.estate, guests: ['Szabó Bálint', 'Szabóné Réthy Mónika', 'Szabó Tádé'] },
    { id: 'm5', group: 'maison', unit: 'MaisonBOGArT V.', nick: '', address: ADDR.estate, guests: ['Apáthy Soma', 'Apáthy Anna', 'Apáthy Léda', 'Apáthy Bíbor'] },
    { id: 'm6', group: 'maison', unit: 'MaisonBOGArT VI.', nick: '', address: ADDR.estate, guests: ['Blaskovich Orsi', 'Végső Tamás', 'Végső András', 'Végső Vilmos'] },
    { id: 'm7', group: 'maison', unit: 'MaisonBOGArT VII.', nick: '', address: ADDR.estate, guests: ['Zsidi Zoli', 'Zsidi Tünde'] },
    { id: 'm8', group: 'maison', unit: 'MaisonBOGArT VIII.', nick: '', address: ADDR.estate, guests: ['Csák Levente', 'Csák Tímea', 'Csák Lili', 'Csák Bella'] },

    { id: 'f72', group: 'falusi', unit: 'Falusi Ház 72-es', nick: '', address: ADDR.falusi72, guests: ['Tácsik Ádám', 'Müller Laura', 'Varga Marci', 'Farkas Réka'] },
    { id: 'f73', group: 'falusi', unit: 'Falusi Ház 73-as', nick: '', address: ADDR.falusi73, guests: ['Zalai Enikő', 'Boros József', 'Csák Örs', 'Csák Botond', 'Kratochwill Petra'] },
    { id: 'f80', group: 'falusi', unit: 'Falusi Ház 80-as', nick: '', address: ADDR.falusi80, guests: ['Blaskovich Eszter', 'Blaskovich Borbála', 'Schneider Max', 'Schneider Eli', 'Blaskovich Beni', 'Blaskovich Zsuzsi'] },

    { id: 'li', group: 'lila', unit: 'Lila Ház', nick: '', address: ADDR.lila, guests: ['Csák Mónika', 'Csák Attila', 'Szabó Dido', 'Csák Miki'] },

    { id: 'tpb', group: 'tohaz', unit: 'Piros Tóház bal', nick: '', address: ADDR.piros, guests: ['Almási Dani', 'Bodnár Fanni'] },
    { id: 'tpj', group: 'tohaz', unit: 'Piros Tóház jobb', nick: '', address: ADDR.piros, guests: ['Nagy-Hegyi Kamilla', 'Hegyi Marci', 'Velkei Zsuzsi'] },
    { id: 'tz', group: 'tohaz', unit: 'Zöld Tóház', nick: '', address: ADDR.zold, guests: ['Vastag Luca Kata', 'Géczy Boldizsár', 'Sáska Lili', 'Márkus Káleb'] },

    { id: 'mj', group: 'majorsagi', unit: 'Majorsági Ház', nick: '', address: ADDR.majorsagi, guests: ['Vas Vince', 'Kiss-Szemán Johanna', 'Horváth Levente', 'Madácsi Réka'] },

    { id: 'zf', group: 'zichy', unit: 'Magtár földszint', nick: '', address: ADDR.zichy, guests: ['Farkas Mercédesz', 'Pap Judit'] },
    { id: 'z1a', group: 'zichy', unit: 'Magtár 1. emelet', nick: '', address: ADDR.zichy, guests: ['Székely Marci', 'Dávid Kamilla'] },
    { id: 'z1b', group: 'zichy', unit: 'Magtár 1. emelet', nick: '', address: ADDR.zichy, guests: ['Farkas Zita', 'Stefanie Stolzlechner'] },
    { id: 'z2a', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, guests: ['Kiss András', 'Lengyel Miklós'] },
    { id: 'z2b', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, guests: ['Szalontay Panni', 'Lakatos János'] },
    { id: 'z2c', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, guests: ['Bruno Cubic'] },
    { id: 'z2d', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, guests: ['Csernus Palkó', 'Zink Zsófi'] },
    { id: 'z2e', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, guests: ['Lauf Dorka', 'Miheller Sándor'] },
    { id: 'z2f', group: 'zichy', unit: 'Magtár 2. emelet', nick: '', address: ADDR.zichy, guests: ['Petik Ábel', 'Petik-Kisbán Petra'] },
    { id: 'p1', group: 'zichy', unit: 'Portaház · 1. apartman', nick: 'egyből jobbra', address: ADDR.zichy, guests: ['Horváth Petra', 'Horváth Helga', 'Enes Ucan'] },
    { id: 'p2', group: 'zichy', unit: 'Portaház · 2. apartman', nick: 'egyből jobbra', address: ADDR.zichy, guests: ['Putnoky Csanád', 'Kiss Martin'] },
    { id: 'p3', group: 'zichy', unit: 'Portaház · 3. apartman', nick: 'egyből jobbra', address: ADDR.zichy, guests: ['Komróczki Ági', 'Kiss Heni'] }
  ];
})();
