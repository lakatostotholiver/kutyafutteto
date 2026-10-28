import { Link } from 'react-router-dom'

// A lábléc a gyumolcsfa.tbesemeny.hu láblécének másolata; csak az utolsó,
// oldalspecifikus oszlop szól a kutyafuttatóról.

const CITY_MENU = [
  ['Hírek', 5],
  ['Információk', 26],
  ['Hivatal', 4],
  ['Testület – testületi munka', 420],
  ['Programok', 31],
  ['Civilek', 32],
  ['Civil és sportszervezetek', 33],
  ['Egészségügy', 21],
  ['Felhívások', 46],
  ['Képviselő-testület', 42],
  ['Oktatás', 23],
  ['Polgármester', 41],
  ['Telefonkönyv', 431],
]

const CITY_MENU_MORE = [
  ['Állategészségügy', 25],
  ['Bálinti Sikersztorik', 36],
  ['Dokumentumok', 47],
  ['Egyházak', 34],
  ['Fényképalbum', 12],
  ['Hatóságok, hivatalok', 29],
  ['Intézmények', 44],
  ['Képviselő-testületi bizottságok', 421],
  ['Közbiztonság', 22],
  ['Közérdekű adatok', 471],
  ['Közlekedés', 24],
  ['Közüzemi szolgáltatások', 27],
  ['Nemzetiségi önkormányzatok', 426],
  ['Országgyűlési képviselő', 20],
  ['Törökbálintról', 10],
  ['Pályázatok', 48],
  ['Rendeletek', 45],
  ['Városi Újság', 410],
  ['Választások', 405],
  ['Videóalbum', 13],
]

const cityUrl = (id) => `https://www.torokbalint.hu/app/cms/TorokbalintApp/index?id=${id}`

function CityLinks({ items }) {
  return (
    <ul className="footer-list footer-list--cols">
      {items.map(([label, id]) => (
        <li key={id}>
          <a href={cityUrl(id)} target="_blank" rel="noopener">
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Hours({ rows }) {
  return (
    <dl className="hours">
      {rows.map(([day, time]) => (
        <div key={day}>
          <dt>{day}</dt>
          <dd>{time}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-col footer-col--brand" aria-labelledby="ft-contact">
          <a className="footer-brand" href="https://www.torokbalint.hu" target="_blank" rel="noopener">
            <img src="/img/cimer-96.png" width="50" height="48" alt="" />
            <span>Törökbálint Város Önkormányzata</span>
          </a>
          <h2 className="footer-title" id="ft-contact">
            Elérhetőségek
          </h2>
          <ul className="footer-list footer-list--icons">
            <li>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              2045 Törökbálint, Munkácsy Mihály utca 79.
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              <a href="tel:+3623335021">+36 / 23 335 021</a>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <a href="mailto:hivatal@torokbalint.hu">hivatal@torokbalint.hu</a>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
                <path d="M9 4v14M15 6v14" />
              </svg>
              <a href="https://terkep.torokbalint.hu/" target="_blank" rel="noopener">
                Térkép – térinformatika
              </a>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              <a href="https://www.torokbalint.hu" target="_blank" rel="noopener">
                www.torokbalint.hu
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-col" aria-labelledby="ft-hours">
          <h2 className="footer-title" id="ft-hours">
            Ügyfélszolgálat a portán
          </h2>
          <Hours
            rows={[
              ['Hétfő', '08:00–12:00, 13:00–18:00'],
              ['Kedd', '08:00–12:00, 13:00–16:00'],
              ['Szerda', '08:00–12:00, 13:00–16:00'],
              ['Csütörtök', '08:00–12:00, 13:00–16:00'],
              ['Péntek', 'nincs'],
            ]}
          />
          <h2 className="footer-title footer-title--spaced">Általános ügyfélfogadás</h2>
          <Hours
            rows={[
              ['Hétfő', '13:00–18:00'],
              ['Kedd', 'nincs'],
              ['Szerda', '08:00–12:00, 13:00–16:00'],
              ['Csütörtök', 'nincs'],
              ['Péntek', 'nincs'],
            ]}
          />
        </section>

        <nav className="footer-col" aria-labelledby="ft-links">
          <h2 className="footer-title" id="ft-links">
            A város honlapján
          </h2>
          <CityLinks items={CITY_MENU} />
          <details className="footer-more">
            <summary>További menük</summary>
            <CityLinks items={CITY_MENU_MORE} />
          </details>
        </nav>

        <nav className="footer-col" aria-labelledby="ft-site">
          <h2 className="footer-title" id="ft-site">
            Kutyafuttató
          </h2>
          <ul className="footer-list">
            <li>
              <Link to="/#hasznalat">Használat</Link>
            </li>
            <li>
              <Link to="/#helyszin">Helyszín</Link>
            </li>
            <li>
              <Link to="/hazirend">Házirend</Link>
            </li>
            <li>
              <Link to="/gyerekeknek">Gyerekeknek</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>
            2004–2026. ©{' '}
            <a href="https://www.torokbalint.hu" target="_blank" rel="noopener">
              www.torokbalint.hu
            </a>{' '}
            · Törökbálint Város Önkormányzata
          </p>
          <ul className="footer-bottom__links">
            <li>
              <a href={cityUrl(52)} target="_blank" rel="noopener">
                Szerzői jog, adatvédelem
              </a>
            </li>
            <li>
              <a href={cityUrl(51)} target="_blank" rel="noopener">
                Impresszum
              </a>
            </li>
            <li>
              Webmester: <a href="mailto:webmaster@torokbalint.hu">webmaster@torokbalint.hu</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
