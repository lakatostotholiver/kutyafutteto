# Kutyafuttató – Törökbálint

React + Vite weboldal a temető és a Diósdi út közötti kutyafuttatóhoz.
Élesben: https://kutyafuttato.tbesemeny.hu

## Fejlesztés

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # éles build a dist/ mappába
```

## Oldalak

| Útvonal        | Tartalom                                                                 |
| -------------- | ------------------------------------------------------------------------ |
| `/`            | Használat, helyszín (OpenStreetMap), legfontosabb szabályok, GYIK, a fenntartó elérhetősége |
| `/hazirend`    | A teljes házirend, jogszabályi háttér, PDF-letöltés (A4, A3)             |
| `/gyerekeknek` | Kvíz, Fajtaismerő, „Ki vagyok én?” kitalálós játék, Tudástár             |
| `/plakat`      | A kifüggeszthető házirend két A4-es lapon (`?meret=A3`: A3-ra nagyítva), ebből készülnek a PDF-ek |

## Dizájn

A dizájn, a címer, a betűk és a lábléc a gyumolcsfa.tbesemeny.hu oldalról származik:
ugyanazok a színek és osztálynevek (`src/index.css`), saját tárhelyről kiszolgált Lexend + Source Sans 3
(`public/fonts.css`), Törökbálint címere (`public/img/cimer-*.png`, Kaboldy, CC BY-SA 4.0).
A lábléc a város honlapjának adatait és menüit tartalmazza, csak az utolsó oszlop szól a kutyafuttatóról.

Az animációk saját rajzolású SVG-k (`src/components/ParkScene.jsx`, `KidsScene.jsx`, `DogSide.jsx`, `scene.css`).

## Hol mit kell átírni?

- **Helyszín, térkép, a város és a fenntartó (Törökbálinti Városgondnokság) elérhetőségei:** `src/data/location.js`
- **Házirend:** `src/data/rules.js`
- **Kvízkérdések:** `src/data/quiz.js`
- **Kutyafajták:** `src/data/breeds.js`
- **Tudástár:** `src/data/knowledge.js`
- **Lábléc:** `src/components/Footer.jsx`

## Nyomtatható házirend (PDF)

A `public/letoltes/kutyafuttato-hazirend-A4.pdf` és `-A3.pdf` a `/plakat` oldalból készül, a házirend
(`src/data/rules.js`) minden módosítása után újra kell generálni:

```bash
npm run build && npm run preview &          # http://localhost:4173
CHROMIUM=/út/chrome PLAYWRIGHT_CORE=/út/playwright-core/index.mjs node tools/make-posters.mjs
npm run build                               # hogy a friss PDF-ek bekerüljenek a dist-be
```

A QR-kód (`public/img/qr-hazirend.svg`) a https://kutyafuttato.tbesemeny.hu/hazirend címre mutat.

## Közzététel

Az `npm run build` után a `dist/` mappa tartalma bármilyen statikus webszerverről kiszolgálható.
Az oldal kliensoldali útvonalakat használ, ezért a szervert úgy kell beállítani, hogy az ismeretlen
útvonalakra (`/hazirend`, `/gyerekeknek`, `/plakat`) az `index.html`-t adja vissza.
