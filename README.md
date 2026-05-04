# Esküvői meghívó weboldal – Manca & Endre

Mobilon első megnyitáskor egy boríték animáció jelenik meg; kattintásra kinyílik, majd az oldal láthatóvá válik. A vendég legközelebbi látogatásától már nem jelenik meg a boríték (localStorage).

## Élő oldal (GitHub Pages)

A repóban be van kötve egy **GitHub Actions** workflow (`.github/workflows/deploy-pages.yml`), ami minden **`main`** push után kiteszi az oldalt.

### Első bekapcsolás (egyszer)

1. Nyisd meg a repót: [github.com/gyurcse/mancaesendre](https://github.com/gyurcse/mancaesendre)
2. **Settings** → **Pages**
3. **Build and deployment** → **Source**: válaszd a **GitHub Actions** lehetőséget (ne „Deploy from a branch”).

Ezután a **Actions** fülön lefut a „Deploy static content to Pages” workflow; ha kész, az oldal:

- **https://gyurcse.github.io/mancaesendre/**

### Saját domain (`mancaesendre.hu`)

A repó gyökerében van egy **`CNAME`** fájl (`mancaesendre.hu`). A GitHubon:

1. **Settings** → **Pages** → **Custom domain** → írd be: `mancaesendre.hu` → Save  
   (GitHub ellenőrzi a DNS-t; a **Enforce HTTPS** később kapcsolható, ha már zöld a DNS.)

2. A domain DNS-énél (amikor a domain **aktív** és szerkeszthető) állíts be rekordokat a [GitHub Pages DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) szerint – apex domainhez általában GitHub **A** rekordok, vagy **ALIAS/ANAME** a szolgáltatód szerint.

Amíg a regisztrátornál a domain „nem aktív”, addig a DNS-et sem tudod rendesen kezelni; először azt kell rendezni náluk.

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

## Részvételi űrlap – Google Forms (ingyenes, exportálható)

A RSVP szekció egy **beágyazott Google űrlapot** mutat. A válaszok a **Google Táblázatokban** gyűlnek; onnan **Fájl → Letöltés → CSV / Excel**.

1. Készíts két űrlapot (vagy egyet, ha ugyanaz a kérdőív): **péntek+szombat** meghívó és **csak szombat** meghívó.
2. Mindkét űrlapon: **Válaszok** fül → **Táblázat ikon** → hozz létre táblázatot.
3. **Küldés** (Send) → **<>** Beágyazás → másold a **viewform?embedded=true** linket (vagy a `src` URL-t az iframe-ből).
4. Az `index.html`-ben a `#rsvp-google-root` elemnél töltsd ki:
   - `data-form-fri-sat="…viewform?embedded=true"`
   - `data-form-sat-only="…viewform?embedded=true"`

Ha mindkét attribútum üres, az oldal egy rövid útmutatót jelenít meg a fejlesztőknek.

## Későbbi módosítások

- Képek: cseréld a `.placeholder-img` osztályú elemeket valódi `<img>` tagre, vagy töltsd fel a háttérképeket.
- Szövegek: neveket, dátumot, helyszínt, programot közvetlenül az `index.html`-ben tudod módosítani.
- Boríték újramutatása: mobilon a böngészőben töröld a helyi adatokat az oldalhoz, vagy localStorage-ból töröld a `eskuvo_boritek_megnyitva` kulcsot.

## Merge conflict feloldás + hogyan dolgozzunk `main` branchen

Ha a GitHub PR képernyőn azt látod, hogy **“Unable to merge – Conflicts must be resolved”**, akkor ezeket a lépéseket futtasd lokálisan:

```bash
git fetch origin
git checkout main
git pull origin main
git checkout <sajat-branch-nev>
git rebase origin/main
```

Konfliktus esetén javítsd a fájlokat, majd:

```bash
git add .
git rebase --continue
```

Ha kész:

```bash
git push --force-with-lease origin <sajat-branch-nev>
```

### Ha közvetlenül `main`-re szeretnél dolgozni

```bash
git checkout main
git pull origin main
# módosítások...
git add .
git commit -m "Leíró commit üzenet"
git push origin main
```

> Fontos: a közvetlen `main` push csak akkor ajánlott, ha nincs branch protection szabály (kötelező review / kötelező PR / kötelező check).
