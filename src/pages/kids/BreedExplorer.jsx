import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

import DogFace from '../../components/DogFace.jsx'
import { BREEDS } from '../../data/breeds.js'

const FILTERS = [
  { id: 'all', label: 'Összes' },
  { id: 'magyar', label: 'Magyar fajták' },
  { id: 'vilag', label: 'A nagyvilágból' },
]

function BreedCard({ breed }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <li>
      <button
        type="button"
        className={`flip${flipped ? ' flipped' : ''}`}
        aria-pressed={flipped}
        aria-label={`${breed.name}: ${flipped ? 'vissza az adatlapra' : 'érdekesség megjelenítése'}`}
        onClick={() => setFlipped((v) => !v)}
      >
        <span className="flip-inner">
          <span className="face front" aria-hidden={flipped}>
            <span className="portrait">
              <DogFace {...breed.face} size={104} />
            </span>
            <span className="breed-name">{breed.name}</span>
            <span className="breed-data">
              <span>
                <span className="breed-key">Származás</span>
                {breed.origin}
              </span>
              <span>
                <span className="breed-key">Méret</span>
                {breed.size}
              </span>
            </span>
            <span className="flip-hint">Érdekesség megjelenítése</span>
          </span>
          <span className="face back" aria-hidden={!flipped}>
            <span className="breed-name">{breed.name}</span>
            <span className="breed-key">Eredeti feladata</span>
            <span>{breed.job}</span>
            <span className="breed-key">Tudtad?</span>
            <span>{breed.fact}</span>
            <span className="flip-hint">
              <RotateCcw size={14} aria-hidden="true" /> Vissza
            </span>
          </span>
        </span>
      </button>
    </li>
  )
}

export default function BreedExplorer() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? BREEDS : BREEDS.filter((b) => b.group === filter)

  return (
    <div>
      <div className="module-head">
        <div>
          <h2>Fajtaismerő</h2>
          <p>Kattints egy kártyára, és fordítsd meg, hogy kiderüljön, mi a különleges az adott fajtában!</p>
        </div>
        <div className="segmented" role="group" aria-label="Szűrés">
          {FILTERS.map((f) => (
            <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="muted result-count" aria-live="polite">
        {list.length} fajta
      </p>

      <ul className="breed-grid">
        {list.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </ul>
    </div>
  )
}
