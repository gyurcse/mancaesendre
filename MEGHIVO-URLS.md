# Személyes meghívó linkek

## Vendégeknek (ajánlott)

A lenti **szavas** útvonalak egyikét add meg (a `/m` előtag **nem** kell).


| Meghívó típus    | Útvonal (rövid) | Vagy query a főoldalon         |
| ---------------- | --------------- | ------------------------------ |
| Péntek + szombat | `babakocsi/`    | `index.html?meghivo=babakocsi` |
| Csak szombat     | `gyertya/`      | `index.html?meghivo=gyertya`   |


Példa teljes címre: `https://<felhasználó>.github.io/<repo>/babakocsi/`

A belépő oldal beállítja a munkamenet-változót, majd a fő `index.html`-re irányít. **Könyvjelzőnek** elég a `babakocsi/` vagy `gyertya/` link.

## Gyökér (`/` vagy `index.html`) – választó

Ha valaki **csak a főoldalt** nyitja meg (nincs `babakocsi/` / `gyertya/` / `?meghivo=` és nincs munkamenetben mentett választás), két **nagy ikon** (babakocsi / gyertya) közül választhat – a meghívón szereplő jelnek megfelelőt.

## Régi linkek

- `?meghivo=tulipan` továbbra is a **hétvégi** meghívót nyitja (kompatibilitás).
- `m/tulipan/`, `m/babakocsi/`, `m/gyertya/`, `m/hetvege/`, `m/szombatra/`, régi véletlenszerű mappák → átirányítás vagy ugyanaz.

**Biztonság:** ez nem erős titkosítás; aki ismeri a másik útvonalat, megnyithatja. Ne tedd közzé nyilvánosan.