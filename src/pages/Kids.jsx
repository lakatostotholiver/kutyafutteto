import { useState } from 'react'

import KidsScene from '../components/KidsScene.jsx'
import BreedExplorer from './kids/BreedExplorer.jsx'
import GuessBreed from './kids/GuessBreed.jsx'
import Knowledge from './kids/Knowledge.jsx'
import Quiz from './kids/Quiz.jsx'
import './kids.css'

const TABS = [
  { id: 'kviz', label: 'Kvíz', hint: 'A helyes állattartásról', Component: Quiz },
  { id: 'fajtak', label: 'Fajtaismerő', hint: '22 különleges kutyafajta', Component: BreedExplorer },
  { id: 'kitalalos', label: 'Ki vagyok én?', hint: 'Találd ki a fajtát!', Component: GuessBreed },
  { id: 'tudastar', label: 'Tudástár', hint: 'Érdekességek, jó tanácsok', Component: Knowledge },
]

export default function Kids() {
  const [active, setActive] = useState(TABS[0].id)
  const current = TABS.find((t) => t.id === active)
  const { Component } = current

  // Nyílbillentyűkkel (és Home/End) is lehet váltani a fülek között, a fókuszban lévőhöz képest
  function onKeyDown(e) {
    const i = TABS.findIndex((t) => `tab-${t.id}` === e.target.id)
    if (i === -1) return
    let next = null
    if (e.key === 'ArrowRight') next = (i + 1) % TABS.length
    if (e.key === 'ArrowLeft') next = (i - 1 + TABS.length) % TABS.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = TABS.length - 1
    if (next === null) return
    e.preventDefault()
    setActive(TABS[next].id)
    document.getElementById(`tab-${TABS[next].id}`)?.focus()
  }

  return (
    <>
      <title>Gyerekeknek – Kutyafuttató – Törökbálint Város Önkormányzata</title>

      <section className="hero" aria-labelledby="kids-title">
        <div className="container hero__grid">
          <div className="hero__text">
            <h1 id="kids-title">Gyerekeknek</h1>
            <p className="hero__lead">
              Kvíz a helyes állattartásról, 22 kutyafajta bemutatása, kitalálós játék és érdekességek a kutyák viselkedéséről.
            </p>
          </div>
          <figure className="hero__media">
            <KidsScene />
          </figure>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Feladatok" onKeyDown={onKeyDown}>
            {TABS.map(({ id, label, hint }) => (
              <button
                key={id}
                id={`tab-${id}`}
                type="button"
                role="tab"
                className="tab"
                aria-selected={id === active}
                aria-controls={`panel-${id}`}
                tabIndex={id === active ? 0 : -1}
                onClick={() => setActive(id)}
              >
                <span className="tab__label">{label}</span>
                <span className="tab__hint">{hint}</span>
              </button>
            ))}
          </div>

          <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="tab-panel">
            <Component key={current.id} />
          </div>
        </div>
      </section>
    </>
  )
}
