(function () {
  'use strict';

  function t(key) {
    try {
      if (window.EskuvoI18n && typeof window.EskuvoI18n.t === 'function') {
        return window.EskuvoI18n.t(key);
      }
    } catch (e) {}
    return '';
  }

  function fold(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function groupById(id) {
    var groups = window.ESKUVO_STAY_GROUPS || [];
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].id === id) return groups[i];
    }
    return null;
  }

  function parkingCopy(kind) {
    if (kind === 'estate') return t('stayParkEstate');
    if (kind === 'village') return t('stayParkVillage');
    if (kind === 'zichy') return t('stayParkZichy');
    return '';
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function roomCard(room, group, highlight) {
    var card = el('article', 'stay-room');
    var head = el('header', 'stay-room__head');
    var title = el('h3', 'stay-room__title', room.unit);
    head.appendChild(title);
    if (room.nick) head.appendChild(el('p', 'stay-room__nick', room.nick));
    card.appendChild(head);

    var guests = el('ul', 'stay-room__guests');
    (room.guests || []).forEach(function (name) {
      var li = el('li', highlight && fold(name).indexOf(highlight) !== -1 ? 'is-hit' : '', name);
      guests.appendChild(li);
    });
    card.appendChild(guests);

    if (room.address) {
      card.appendChild(el('p', 'stay-room__addr', room.address));
    }
    if (group && group.maps) {
      var a = el('a', 'btn-map btn-map--venue stay-room__maps', t('venueMapBtn') || 'Maps');
      a.href = group.maps;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      card.appendChild(a);
    }
    return card;
  }

  function renderGroups(filterId) {
    var root = document.getElementById('stay-groups');
    if (!root) return;
    root.innerHTML = '';
    var rooms = window.ESKUVO_STAY_ROOMS || [];
    var groups = window.ESKUVO_STAY_GROUPS || [];

    groups.forEach(function (g) {
      if (filterId && g.id !== filterId) return;
      var details = document.createElement('details');
      details.className = 'stay-group';
      details.open = !!filterId;
      var sum = el('summary', 'stay-group__sum');
      var label = el('span', 'stay-group__name', g.title);
      var count = rooms.filter(function (r) { return r.group === g.id; }).length;
      var meta = el('span', 'stay-group__meta', String(count));
      sum.appendChild(label);
      sum.appendChild(meta);
      details.appendChild(sum);

      var body = el('div', 'stay-group__body');
      body.appendChild(el('p', 'stay-group__addr', g.address));
      var park = parkingCopy(g.parking);
      if (park) body.appendChild(el('p', 'stay-group__note', park));
      if (g.towel) body.appendChild(el('p', 'stay-group__warn', t('stayTowelNote')));

      var grid = el('div', 'stay-room-grid');
      rooms.forEach(function (r) {
        if (r.group === g.id) grid.appendChild(roomCard(r, g, ''));
      });
      body.appendChild(grid);
      details.appendChild(body);
      root.appendChild(details);
    });
  }

  function showResults(matches, queryFold) {
    var box = document.getElementById('stay-results');
    if (!box) return;
    box.innerHTML = '';
    if (!queryFold) {
      box.hidden = true;
      return;
    }
    box.hidden = false;
    if (!matches.length) {
      box.appendChild(el('p', 'stay-empty', t('stayEmpty')));
      return;
    }
    matches.forEach(function (room) {
      var g = groupById(room.group);
      var card = el('article', 'stay-hit');
      card.appendChild(el('p', 'stay-hit__kicker', g ? g.title : ''));
      card.appendChild(el('h3', 'stay-hit__title', room.unit + (room.nick ? ' · ' + room.nick : '')));
      card.appendChild(el('p', 'stay-hit__addr', room.address));
      var guests = el('p', 'stay-hit__guests', (room.guests || []).join(' · '));
      card.appendChild(guests);
      var park = parkingCopy(g && g.parking);
      if (park) card.appendChild(el('p', 'stay-hit__note', park));
      if (g && g.towel) card.appendChild(el('p', 'stay-hit__warn', t('stayTowelNote')));
      if (g && g.maps) {
        var a = el('a', 'btn-map btn-map--venue', t('venueMapBtn') || 'Maps');
        a.href = g.maps;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        card.appendChild(a);
      }
      box.appendChild(card);
    });
  }

  function search(q) {
    var f = fold(q);
    if (f.length < 2) {
      showResults([], '');
      return;
    }
    var rooms = window.ESKUVO_STAY_ROOMS || [];
    var hits = rooms.filter(function (r) {
      var hay = fold((r.guests || []).join(' ') + ' ' + r.unit + ' ' + (r.nick || '') + ' ' + r.address);
      return hay.indexOf(f) !== -1;
    });
    showResults(hits, f);
  }

  function initStay() {
    if (!document.getElementById('stay-groups')) return;
    renderGroups('');
    var input = document.getElementById('stay-q');
    if (!input) return;
    var timer;
    function run() { search(input.value); }
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(run, 120);
    });
    input.addEventListener('search', run);
    window.addEventListener('eskuvo:lang', function () {
      renderGroups('');
      run();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStay);
  } else {
    initStay();
  }
})();
