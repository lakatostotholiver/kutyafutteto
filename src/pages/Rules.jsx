import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import PosterDownloads from '../components/PosterDownloads.jsx'
import { CITY, OPERATOR } from '../data/location.js'
import { LAST_UPDATED, LEGAL_NOTES, RULE_GROUPS, SMOKING_BAN } from '../data/rules.js'

// A szabályok sorszáma a fejezeteken át folytatódik
const NUMBERED_GROUPS = (() => {
  let n = 0
  return RULE_GROUPS.map((group, gi) => ({
    ...group,
    chapter: gi + 1,
    items: group.items.map((item) => ({ ...item, number: ++n })),
  }))
})()

const SECTION_IDS = NUMBERED_GROUPS.map((g) => g.id)

// Az oldalsó menüben kiemeli az éppen olvasott fejezetet
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-100px 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

export default function Rules() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <div className="legal">
      <title>Házirend – Kutyafuttató – Törökbálint Város Önkormányzata</title>

      <div className="container legal__grid">
        <nav className="legal__nav" aria-label="A házirend fejezetei">
          <p className="legal__nav-title">Fejezetek</p>
          <ul>
            {NUMBERED_GROUPS.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`} aria-current={active === group.id ? 'true' : undefined}>
                  {group.chapter}. {group.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#jogszabalyok">Jogszabályi háttér</a>
            </li>
            <li>
              <a href="#uzemelteto">Üzemeltető</a>
            </li>
          </ul>
          <Link className="legal__back" to="/">
            ← Vissza a főoldalra
          </Link>
        </nav>

        <article className="legal__body">
          <h1>A kutyafuttató házirendje</h1>
          <p className="legal__meta">Utolsó módosítás: {LAST_UPDATED}</p>

          <p className="legal__lead">
            A házirend a temető és a Diósdi út közötti kutyafuttató használatának szabályait tartalmazza.
          </p>

          <div className="alert">
            <p>
              <strong>A futtató kizárólag a kutyával való játékra szolgál, más célra nem használható.</strong> A mindenkori
              törökbálinti együttélési szabályokat kötelező betartani.
            </p>
            <p>
              <strong>{SMOKING_BAN}</strong>
            </p>
          </div>

          <div className="download-box no-print">
            <div>
              <h2 className="download-box__title">Nyomtatható változat</h2>
              <p>Kifüggesztéshez, grafikával: az első oldalon a legfontosabb szabályok, a másodikon a teljes házirend.</p>
            </div>
            <PosterDownloads />
          </div>

          {NUMBERED_GROUPS.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
              <h2 id={`${group.id}-title`}>
                {group.chapter}. {group.title}
              </h2>
              <ol className="rule-list">
                {group.items.map((item) => (
                  <li key={item.number} className={item.important ? 'is-important' : undefined}>
                    <span className="rule-list__n">{item.number}.</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}

          <section id="jogszabalyok" aria-labelledby="jogszabalyok-title">
            <h2 id="jogszabalyok-title">Jogszabályi háttér</h2>
            <ul>
              {LEGAL_NOTES.map((note) => (
                <li key={note}>{note}</li>
              ))}
              <li>
                A mindenkori törökbálinti együttélési szabályokat a város rendeletei tartalmazzák:{' '}
                <a href={CITY.regulationsUrl} target="_blank" rel="noopener">
                  torokbalint.hu – Rendeletek
                </a>
                .
              </li>
            </ul>
          </section>

          <section id="uzemelteto" aria-labelledby="uzemelteto-title">
            <h2 id="uzemelteto-title">Üzemeltető</h2>
            <p>
              <strong>{OPERATOR.name}</strong>
              <br />
              {OPERATOR.address}
              <br />
              Telefon: <a href={OPERATOR.phoneHref}>{OPERATOR.phone}</a>
              <br />
              E-mail: <a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
