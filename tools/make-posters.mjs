// A kifüggeszthető házirend PDF-jei (A4 és A3) a /plakat oldalból.
// Előtte: npm run build és npm run preview (vagy bármely futó példány).
//
// Használat:
//   CHROMIUM=/út/chrome PLAYWRIGHT_CORE=/út/playwright-core/index.mjs \
//   node tools/make-posters.mjs [http://localhost:4173]
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const { chromium } = await import(process.env.PLAYWRIGHT_CORE ?? 'playwright-core')
const base = process.argv[2] ?? 'http://localhost:4173'
// fileURLToPath: a mappanév ékezetes és szóközös, a URL.pathname ezt kódolva adná vissza
const out = fileURLToPath(new URL('../public/letoltes/', import.meta.url))
await mkdir(out, { recursive: true })

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM })
const page = await browser.newPage()
await page.emulateMedia({ media: 'print' })

// A lapméretet mindkét esetben a CSS adja (@page poster / poster-a3)
for (const [size, query] of [['A4', ''], ['A3', '?meret=A3']]) {
  await page.goto(`${base}/plakat${query}`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.pdf({
    path: `${out}kutyafuttato-hazirend-${size}.pdf`,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })
}

await browser.close()
console.log('Kész: public/letoltes/kutyafuttato-hazirend-A4.pdf, -A3.pdf')
