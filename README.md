# Esküvői meghívó weboldal

Mobilon első megnyitáskor egy boríték animáció jelenik meg; kattintásra kinyílik, majd az oldal láthatóvá válik. A vendég legközelebbi látogatásától már nem jelenik meg a boríték (localStorage).

## Lokális futtatás

```bash
cd /Users/endre.gyurcsovics/Egyetem/Eskuvo
python3 -m http.server 8080
```

Ezután böngészőben: **http://localhost:8080**

Mobilos nézet teszteléséhez nyisd meg ugyanazt a címet mobilon (ugyanabban a hálózatban), vagy a böngésző DevTools-ban (F12) kapcsold be a mobilos nézetet.

## Fájlok

- `index.html` – tartalom (dummy szövegek, placeholder képek)
- `styles.css` – stílusok, boríték animáció, reszponzív elrendezés
- `script.js` – boríték megnyitás (első látogatás, kattintás), localStorage

## Későbbi módosítások

- Képek: cseréld a `.placeholder-img` osztályú elemeket valódi `<img>` tagre, vagy töltsd fel a háttérképeket.
- Szövegek: neveket, dátumot, helyszínt, programot közvetlenül az `index.html`-ben tudod módosítani.
- Boríték újramutatása: mobilon a böngészőben töröld a helyi adatokat az oldalhoz, vagy localStorage-ból töröld a `eskuvo_boritek_megnyitva` kulcsot.
