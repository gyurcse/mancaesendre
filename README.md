# Esküvő utáni köszönő oldal – Manca & Endre

Az esküvő után átalakított egyoldalas weboldal: köszönő szöveg, az esküvő óta eltelt idő számlálója, linkek a fotókhoz és egy kérés a Villabogart Google-értékeléséhez.

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

- `index.html` – tartalom (köszönő szöveg, eltelt idő számláló, fotó linkek, értékelés kérés)
- `styles.css` – stílusok, reszponzív elrendezés
- `script.js` – eltelt idő számláló, scroll animációk, navigáció
- `i18n.js` – magyar/angol szövegek

## Fotók

A `#photos` szekció kártyái egyelőre mind a fő Pixieset galériára mutatnak
(`https://emimage75.pixieset.com/mancaendre/`). Ha később külön album-linkek lesznek
az egyes eseményekhez (tenisz, polgári szertartás, stb.), az `index.html`-ben a
`.photo-link-card` elemek `href` attribútumát kell egyenként lecserélni.

## Későbbi módosítások

- Szövegek: az `index.html`-ben közvetlenül módosíthatók, vagy az `i18n.js`-ben
  (magyar és angol verzió is van, kulcsonként).
- Az esküvő utáni számláló dátuma a `script.js` tetején, a `WEDDING_DATE` konstansban van.

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
