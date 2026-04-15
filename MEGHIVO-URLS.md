# Személyes meghívó linkek

A gyökér `index.html` alapértelmezésben a **péntek + szombat** meghívót mutatja (pl. saját böngészéshez).

A vendégeknek a lenti **szavas** linkek egyikét add meg (a `/m` előtag **nem** kell).

## Ajánlott URL-ek (GitHub Pages: `…/<repo>/` után)

| Meghívó típus    | Útvonal (rövid) | Vagy query a főoldalon |
| ---------------- | --------------- | ---------------------- |
| Péntek + szombat | `tulipan/`      | `index.html?meghivo=tulipan` |
| Csak szombat     | `gyertya/`      | `index.html?meghivo=gyertya` |

Példa teljes címre: `https://<felhasználó>.github.io/<repo>/tulipan/`

A belépő oldal beállítja a munkamenet-változót, majd a fő `index.html`-re irányít. **Könyvjelzőnek** elég a `tulipan/` vagy `gyertya/` link.

## Régi / alternatív útvonalak (átirányítanak)

- `m/tulipan/`, `m/gyertya/`, `m/hetvege/`, `m/szombatra/`, valamint a régi véletlenszerű mappák → ugyanaz, mint fent.

**Biztonság:** ez nem erős titkosítás; aki ismeri a másik szót, megnyithatja. Ne tedd közzé nyilvánosan.
