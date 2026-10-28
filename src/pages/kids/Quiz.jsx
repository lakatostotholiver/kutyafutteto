import { ArrowRight, CircleCheck, CircleX, RotateCcw, Trophy } from 'lucide-react'
import { useState } from 'react'

import { QUIZ } from '../../data/quiz.js'
import { readNumber, shuffle, writeNumber } from '../../utils.js'

const ROUND_LENGTH = 10
const BEST_KEY = 'kutyafuttato-kviz-legjobb'
const LETTERS = ['A', 'B', 'C', 'D']

function buildRound() {
  return shuffle(QUIZ)
    .slice(0, ROUND_LENGTH)
    .map((q) => ({
      ...q,
      options: shuffle([{ text: q.answer, correct: true }, ...q.wrong.map((text) => ({ text, correct: false }))]),
    }))
}

function verdict(score) {
  if (score >= 9) return { title: 'Kiváló! Igazi kutyabarát vagy.', text: 'Mindent tudsz a felelős kutyatartásról.' }
  if (score >= 6) return { title: 'Nagyon jó eredmény!', text: 'Még egy kör, és tökéletes lesz.' }
  return { title: 'Jó kezdet!', text: 'Olvasd el figyelmesen a magyarázatokat, és próbáld újra.' }
}

export default function Quiz() {
  const [questions, setQuestions] = useState(buildRound)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(() => readNumber(BEST_KEY))
  const finished = index >= questions.length

  function choose(i) {
    if (picked !== null) return
    setPicked(i)
    if (questions[index].options[i].correct) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= questions.length && score > best) {
      setBest(score)
      writeNumber(BEST_KEY, score)
    }
    setPicked(null)
    setIndex((i) => i + 1)
  }

  function restart() {
    setQuestions(buildRound())
    setIndex(0)
    setPicked(null)
    setScore(0)
  }

  if (finished) {
    const v = verdict(score)
    return (
      <div className="game-card result">
        <span className="result-icon" aria-hidden="true">
          <Trophy size={32} />
        </span>
        <p className="result-score">
          {score}
          <span>/ {questions.length}</span>
        </p>
        <h2>{v.title}</h2>
        <p>{v.text}</p>
        {best > 0 && <p className="muted">Legjobb eredményed ezen az eszközön: {best} pont</p>}
        <button type="button" className="button" onClick={restart}>
          <RotateCcw size={18} aria-hidden="true" />
          Új kör, új kérdések
        </button>
      </div>
    )
  }

  const q = questions[index]
  const answered = picked !== null
  const correct = answered && q.options[picked].correct

  return (
    <div className="game-card">
      <div className="game-head">
        <span className="tag">{q.topic}</span>
        <span className="game-count">
          {index + 1} / {questions.length}
        </span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={index}
        aria-label="Haladás"
      >
        <span style={{ transform: `scaleX(${index / questions.length})` }} />
      </div>

      <h2 className="question">{q.question}</h2>

      <div className="options">
        {q.options.map((opt, i) => {
          let state = ''
          if (answered) {
            if (opt.correct) state = 'is-correct'
            else if (i === picked) state = 'is-wrong'
            else state = 'is-dim'
          }
          return (
            <button key={opt.text} type="button" className={`option ${state}`} onClick={() => choose(i)} disabled={answered}>
              <span className="option-letter">{LETTERS[i]}</span>
              <span className="option-text">{opt.text}</span>
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
            {correct ? 'Helyes válasz!' : 'Ez most nem talált.'}
          </p>
          <p>{q.explain}</p>
          <button type="button" className="button" onClick={next} autoFocus>
            {index + 1 >= questions.length ? 'Eredmény' : 'Következő kérdés'}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      <p className="game-score">Pontszám: {score}</p>
    </div>
  )
}
