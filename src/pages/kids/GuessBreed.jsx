import { ArrowRight, CircleCheck, CircleHelp, CircleX, Lightbulb, RotateCcw, Trophy } from 'lucide-react'
import { useState } from 'react'

import DogFace from '../../components/DogFace.jsx'
import { BREEDS } from '../../data/breeds.js'
import { article, shuffle } from '../../utils.js'

const ROUND_LENGTH = 5
const MAX_POINTS = 3

function buildRound() {
  return shuffle(BREEDS)
    .slice(0, ROUND_LENGTH)
    .map((breed) => ({
      breed,
      options: shuffle([breed, ...shuffle(BREEDS.filter((b) => b.id !== breed.id)).slice(0, 3)]),
    }))
}

export default function GuessBreed() {
  const [round, setRound] = useState(buildRound)
  const [index, setIndex] = useState(0)
  const [clues, setClues] = useState(1)
  const [picked, setPicked] = useState(null)
  const [total, setTotal] = useState(0)
  const finished = index >= round.length

  function guess(id) {
    if (picked) return
    setPicked(id)
    if (id === round[index].breed.id) setTotal((t) => t + (MAX_POINTS + 1 - clues))
  }

  function next() {
    setIndex((i) => i + 1)
    setClues(1)
    setPicked(null)
  }

  function restart() {
    setRound(buildRound())
    setIndex(0)
    setClues(1)
    setPicked(null)
    setTotal(0)
  }

  if (finished) {
    const max = round.length * MAX_POINTS
    return (
      <div className="game-card result">
        <span className="result-icon" aria-hidden="true">
          <Trophy size={32} />
        </span>
        <p className="result-score">
          {total}
          <span>/ {max}</span>
        </p>
        <h2>{total >= max * 0.7 ? 'Igazi fajtaszakértő vagy!' : 'Szép munka!'}</h2>
        <p>Minél kevesebb tippből találod ki a fajtát, annál több pontot kapsz.</p>
        <button type="button" className="button" onClick={restart}>
          <RotateCcw size={18} aria-hidden="true" />
          Új játék
        </button>
      </div>
    )
  }

  const { breed, options } = round[index]
  const answered = picked !== null
  const correct = picked === breed.id
  const worth = MAX_POINTS + 1 - clues

  return (
    <div className="game-card">
      <div className="game-head">
        <span className="tag">Ki vagyok én?</span>
        <span className="game-count">
          {index + 1} / {round.length}
        </span>
      </div>

      <div className="guess-head">
        <div className={`mystery${answered ? ' revealed' : ''}`} aria-hidden="true">
          {answered ? <DogFace {...breed.face} size={96} /> : <CircleHelp size={44} strokeWidth={1.5} />}
        </div>
        <div>
          <h2 className="question">Melyik kutyafajtára gondoltunk?</h2>
          <p className="muted">
            {answered
              ? `Ezért a kutyáért kapott pont: ${correct ? worth : 0}`
              : `A helyes válasz most ${worth} pontot ér.`}
          </p>
        </div>
      </div>

      <ol className="clues">
        {breed.clues.slice(0, clues).map((clue, i) => (
          <li key={clue}>
            <span className="clue-num">{i + 1}. tipp</span>
            <span>{clue}</span>
          </li>
        ))}
      </ol>

      {!answered && clues < breed.clues.length && (
        <button type="button" className="button button--secondary button--sm" onClick={() => setClues((c) => c + 1)}>
          <Lightbulb size={16} aria-hidden="true" />
          Kérek még egy tippet
        </button>
      )}

      <div className="options options-grid">
        {options.map((opt) => {
          let state = ''
          if (answered) {
            if (opt.id === breed.id) state = 'is-correct'
            else if (opt.id === picked) state = 'is-wrong'
            else state = 'is-dim'
          }
          return (
            <button key={opt.id} type="button" className={`option ${state}`} onClick={() => guess(opt.id)} disabled={answered}>
              <span className="option-text">{opt.name}</span>
              {state === 'is-correct' && <CircleCheck size={20} className="option-mark" aria-label="Helyes válasz" />}
              {state === 'is-wrong' && <CircleX size={20} className="option-mark" aria-label="Rossz válasz" />}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`feedback ${correct ? 'is-correct' : 'is-wrong'}`} role="status">
          <p className="feedback-title">
            {correct ? <CircleCheck size={20} aria-hidden="true" /> : <CircleX size={20} aria-hidden="true" />}
            {correct
              ? `Eltaláltad! Ez ${article(breed.name)} ${breed.name.toLowerCase()}.`
              : `A helyes válasz: ${breed.name}.`}
          </p>
          <p>{breed.fact}</p>
          <button type="button" className="button" onClick={next} autoFocus>
            {index + 1 >= round.length ? 'Eredmény' : 'Következő kutya'}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      <p className="game-score">Pontszám: {total}</p>
    </div>
  )
}
