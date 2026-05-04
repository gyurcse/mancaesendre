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

## Részvételi űrlap – levelek a Gmailbe (mancaendre@gmail.com)

Az űrlap a [Formspree](https://formspree.io) szolgáltatáson keresztül küldi a válaszokat. Beállítás:

1. Menj a **https://formspree.io/create** oldalra.
2. Add meg a **mancaendre@gmail.com** címet (ide érkeznek majd a részvételi válaszok).
3. Hozz létre egy formot; a Formspree kiad egy **form ID**-t (pl. `xjvqyqwe`).
4. Az `index.html`-ben keresd meg a form `action` attribútumát és cseréld ki a **YOUR_FORM_ID** részt a kapott ID-ra, pl.:
   `action="https://formspree.io/f/xjvqyqwe"`

Ezután minden kitöltött űrlap a mancaendre@gmail.com postafiókba érkezik.

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
