import { Link } from 'react-router-dom'

import DogFace from '../components/DogFace.jsx'
import { BuildingIcon, PawIcon, PinIcon, RulesIcon } from '../components/icons.jsx'
import ParkMap from '../components/ParkMap.jsx'
import ParkScene from '../components/ParkScene.jsx'
import PosterDownloads from '../components/PosterDownloads.jsx'
import UsageTable from '../components/UsageTable.jsx'
import { BREEDS } from '../data/breeds.js'
import { CITY, OPERATOR, OSM_ROUTE_URL, OSM_VIEW_URL, PARK } from '../data/location.js'
import { KEY_RULES, POSTER_PDFS } from '../data/rules.js'

const TEASER_DOGS = ['puli', 'dalmata', 'husky'].map((id) => BREEDS.find((b) => b.id === id))

const FAQ = [
  {
    q: 'Hol található a kutyafuttató?',
    a: (
      <>
        Törökbálinton, a temető és a Diósdi út közötti zöld területen. A pontos hely a <a href="#helyszin">térképen</a> látható.
      </>
    ),
  },
  { q: 'Mire használható a terület?', a: 'Kizárólag a kutyával való játékra, más célra nem.' },
  {
    q: 'Kell pórázt használni?',
    a: 'A futtatón belül a kutya póráz nélkül is lehet. A futtató területén kívül viszont mindig pórázon kell vezetni.',
  },
  {
    q: 'Milyen kutya vihető be?',
    a: 'Egészséges, érvényes veszettség elleni oltással és mikrochippel rendelkező kutya. Tüzelő szukát, beteg vagy fertőzésre gyanús kutyát bevinni tilos.',
  },
  { q: 'Tartózkodhatnak gyerekek a futtatón?', a: '14 év alatti gyermek csak felnőtt felügyeletével.' },
  {
    q: 'Milyen szabályokat kell betartani?',
    a: (
      <>
        A futtató <Link to="/hazirend">házirendjét</Link> és a mindenkori törökbálinti együttélési szabályokat. A város
        rendeletei a{' '}
        <a href={CITY.regulationsUrl} target="_blank" rel="noopener">
          torokbalint.hu oldalon
        </a>{' '}
        olvashatók.
      </>
    ),
  },
  {
    q: 'Hol jelezhető, ha valami elromlott?',
    a: 'Rongálást, nem működő lámpát vagy más hibát a fenntartónál, a Törökbálinti Városgondnokságnál lehet bejelenteni.',
  },
]

export default function Home() {
  return (
    <>
      <title>Kutyafuttató – Törökbálint Város Önkormányzata</title>

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <h1 id="hero-title">Kutyafuttató a temető és a Diósdi út között</h1>
            <p className="hero__lead">
              Törökbálint kutyafuttatója a temető és a Diósdi út közötti zöld területen található. A területen a kutyák
              póráz nélkül játszhatnak.
            </p>

            <dl className="facts">
              <div className="facts__row">
                <dt>
                  <PinIcon />
                  Helyszín
                </dt>
                <dd>{PARK.placeDetail}</dd>
              </div>
              <div className="facts__row">
                <dt>
                  <PawIcon />
                  Használat
                </dt>
                <dd>Kizárólag kutyával való játékra</dd>
              </div>
              <div className="facts__row">
                <dt>
                  <RulesIcon />
                  Házirend
                </dt>
                <dd>
                  <Link to="/hazirend">Megtekintés</Link> ·{' '}
                  <a href={POSTER_PDFS[0].href} download>
                    Letöltés PDF-ben
                  </a>
                </dd>
              </div>
              <div className="facts__row">
                <dt>
                  <BuildingIcon />
                  Fenntartó
                </dt>
                <dd>{OPERATOR.name}</dd>
              </div>
            </dl>

            <div className="hero__actions">
              <a className="button" href="#hasznalat">
                Használat
              </a>
              <a className="button button--secondary" href="#helyszin">
                Térkép
              </a>
            </div>
          </div>
          <figure className="hero__media">
            <ParkScene />
          </figure>
        </div>
      </section>

      <section className="section" id="hasznalat" aria-labelledby="hasznalat-title">
        <div className="container container--narrow">
          <h2 id="hasznalat-title">Használat</h2>
          <UsageTable />
        </div>
      </section>

      <section className="section section--muted" id="helyszin" aria-labelledby="helyszin-title">
        <div className="container">
          <h2 id="helyszin-title">Helyszín</h2>
          <div className="location">
            <div className="location__frame">
              <ParkMap />
            </div>
            <div className="location__info panel-box">
              <h3>{PARK.place}</h3>
              <address>
                {PARK.town}
                <br />
                {PARK.placeDetail}
              </address>
              <div className="location__actions">
                <a className="button" href={OSM_ROUTE_URL} target="_blank" rel="noopener">
                  Útvonaltervezés
                </a>
                <a className="button button--secondary" href={OSM_VIEW_URL} target="_blank" rel="noopener">
                  Nagyobb térkép
                </a>
              </div>
              <div className="callout">
                <p>A futtató területén kívül a kutyát mindig pórázon kell vezetni.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="szabalyok-title">
        <div className="container">
          <h2 id="szabalyok-title">A legfontosabb szabályok</h2>
          <ol className="tips">
            {KEY_RULES.map((rule) => (
              <li key={rule.title} className={rule.red ? 'tips__item--red' : undefined}>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </li>
            ))}
          </ol>
          <div className="rules-cta">
            <Link className="button button--secondary" to="/hazirend">
              A teljes házirend
            </Link>
            <PosterDownloads />
          </div>
        </div>
      </section>

      <section className="section section--muted" id="gyik" aria-labelledby="gyik-title">
        <div className="container faq-layout">
          <div className="faq-layout__aside">
            <h2 id="gyik-title">Gyakori kérdések</h2>
            <p className="section__intro">Nem találta a választ? Keresse a kutyafuttató fenntartóját.</p>
            <div className="panel-box contact-box">
              <p>
                <strong>{OPERATOR.name}</strong>
              </p>
              <p>{OPERATOR.address}</p>
              <p>
                Telefon: <a href={OPERATOR.phoneHref}>{OPERATOR.phone}</a>
              </p>
              <p>
                E-mail: <a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>
              </p>
            </div>
          </div>
          <div className="faq">
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="gyerek-title">
        <div className="container">
          <div className="kids-teaser">
            <div className="kids-teaser__art" aria-hidden="true">
              {TEASER_DOGS.map((breed, i) => (
                <span key={breed.id} className="bob" style={{ animationDelay: `${i * 0.4}s` }}>
                  <DogFace {...breed.face} size={104} />
                </span>
              ))}
            </div>
            <div className="kids-teaser__body">
              <h2 id="gyerek-title">Gyerekeknek</h2>
              <p>Kvíz a helyes állattartásról, kutyafajták, kitalálós játék és érdekességek a kutyák viselkedéséről.</p>
              <Link className="button" to="/gyerekeknek">
                Tovább a gyerekoldalra
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
