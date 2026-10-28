import { Ban, DoorClosed, ShieldCheck } from 'lucide-react'

import DogSide from '../components/DogSide.jsx'
import ParkScene from '../components/ParkScene.jsx'
import { OPERATOR, PARK } from '../data/location.js'
import { KEY_RULES, LAST_UPDATED, RULE_GROUPS } from '../data/rules.js'
import './poster.css'

// Kifüggeszthető házirend két A4-es oldalon. A PDF-eket a tools/make-posters.mjs
// készíti ebből az oldalból (/plakat és /plakat?meret=A3).

const NUMBERED_GROUPS = (() => {
  let n = 0
  return RULE_GROUPS.map((group, gi) => ({
    ...group,
    chapter: gi + 1,
    items: group.items.map((item) => ({ ...item, number: ++n })),
  }))
})()

// A „kizárólag kutyával való játékra” a piros sávban szerepel, ezért a rácsban a kapus szabály áll a helyén
const POSTER_RULES = KEY_RULES.map((rule) =>
  rule.title === 'Csak kutyával való játékra'
    ? { Icon: DoorClosed, title: 'Ne jusson ki kutya', text: 'Belépéskor és távozáskor ügyelni kell, hogy egyetlen kutya se jusson ki.' }
    : rule,
)

function Crest({ className }) {
  return (
    <span className={`crest ${className ?? ''}`}>
      <img src="/img/cimer-96.png" width="50" height="48" alt="Törökbálint címere" />
    </span>
  )
}

export default function Poster() {
  // ?meret=A3: ugyanaz a két lap A3-as oldalra nagyítva
  const a3 = new URLSearchParams(window.location.search).get('meret') === 'A3'

  return (
    <div className={`poster${a3 ? ' poster--a3' : ''}`}>
      <title>Kutyafuttató – házirend – Törökbálint Város Önkormányzata</title>
      <meta name="robots" content="noindex" />

      <section className="sheet">
        <header className="band">
          <div className="band__text">
            <div className="band__org">
              <Crest />
              <span>Törökbálint Város Önkormányzata</span>
            </div>
            <h1 className="band__title">Kutyafuttató</h1>
            <p className="band__sub">Használati szabályok</p>
            <p className="band__place">{PARK.place}</p>
          </div>
          <div className="band__art">
            <ParkScene still viewBox="0 96 480 236" />
          </div>
        </header>

        <div className="alert-strip">
          <Ban aria-hidden="true" />
          <div>
            <strong>Kizárólag kutyával való játékra!</strong>
            <span>A futtató más célra nem használható.</span>
          </div>
        </div>

        <ul className="key-rules">
          {POSTER_RULES.map(({ Icon, title, text, red }) => (
            <li key={title} className={red ? 'is-red' : undefined}>
              <span className="key-rules__icon">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <strong>{title}</strong>
                <span>{text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="info-boxes">
          <div className="info-box info-box--red">
            <ShieldCheck aria-hidden="true" />
            <div>
              <strong>Kötelező betartani</strong>
              <span>A házirendet és a mindenkori törökbálinti együttélési szabályokat.</span>
            </div>
          </div>
        </div>

        <footer className="sheet-foot">
          <div className="sheet-foot__text">
            <strong>Fenntartó: {OPERATOR.name}</strong>
            <span>{OPERATOR.address}</span>
            <span>
              Telefon: {OPERATOR.phone} · E-mail: {OPERATOR.email}
            </span>
            <span>Hibát, rongálást itt lehet bejelenteni.</span>
          </div>
          <div className="qr">
            <img src="/img/qr-hazirend.svg" alt="QR-kód a teljes házirendhez" />
            <span>
              A teljes házirend:
              <br />
              kutyafuttato.tbesemeny.hu
            </span>
          </div>
        </footer>
      </section>

      <section className="sheet">
        <header className="band band--small">
          <Crest className="crest--small" />
          <div className="band__text">
            <p className="band__org-line">Törökbálint Város Önkormányzata</p>
            <h1 className="band__title band__title--small">Kutyafuttató – házirend</h1>
            <p className="band__place">{PARK.place}</p>
          </div>
          <svg className="band__dog" viewBox="0 0 190 128" aria-hidden="true">
            <DogSide />
          </svg>
        </header>

        <p className="rules-intro">
          A házirend a temető és a Diósdi út közötti kutyafuttató használatának szabályait tartalmazza. A területre lépéssel
          a látogató a házirendet elfogadja.
        </p>

        <div className="rules-columns">
          {NUMBERED_GROUPS.map((group) => (
            <section key={group.id} className="chapter">
              <h2>
                {group.chapter}. {group.title}
              </h2>
              <ol>
                {group.items.map((item) => (
                  <li key={item.number} className={item.important ? 'is-important' : undefined}>
                    <span className="chapter__n">{item.number}.</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <footer className="sheet-foot sheet-foot--small">
          <div className="sheet-foot__text">
            <strong>Fenntartó: {OPERATOR.name}</strong>
            <span>
              {OPERATOR.address} · Telefon: {OPERATOR.phone} · E-mail: {OPERATOR.email}
            </span>
            <span>Utolsó módosítás: {LAST_UPDATED}</span>
          </div>
          <div className="qr qr--small">
            <img src="/img/qr-hazirend.svg" alt="QR-kód a házirend weboldalához" />
          </div>
        </footer>
      </section>
    </div>
  )
}
