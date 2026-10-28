import { Ban, Hand, TreePine } from 'lucide-react'

import { BODY_SIGNALS, FACTS, GREETING_STEPS, SIGNAL_LEVELS, TOXIC_FOODS, TREE_STEPS } from '../../data/knowledge.js'

function Steps({ steps }) {
  return (
    <ol className="steps">
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="step-num">{i + 1}</span>
          <span>
            <strong>{step.title}</strong> {step.text}
          </span>
        </li>
      ))}
    </ol>
  )
}

export default function Knowledge() {
  return (
    <div className="knowledge">
      <section aria-labelledby="tudtad">
        <div className="module-head">
          <div>
            <h2 id="tudtad">Tudtad?</h2>
            <p>Érdekes tények a kutyákról.</p>
          </div>
        </div>
        <ul className="facts-grid">
          {FACTS.map(({ Icon, title, text }) => (
            <li key={title} className="fact-card">
              <span className="fact-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="testbeszed">
        <div className="module-head">
          <div>
            <h2 id="testbeszed">Mit üzen a kutya teste?</h2>
            <p>A kutyák nem beszélnek, de a testükkel sokat elárulnak. Figyeld meg őket!</p>
          </div>
        </div>
        <div className="table-wrap">
          <table className="signal-table">
            <thead>
              <tr>
                <th scope="col">Amit látsz</th>
                <th scope="col">Amit jelent</th>
                <th scope="col">Hangulat</th>
              </tr>
            </thead>
            <tbody>
              {BODY_SIGNALS.map((s) => (
                <tr key={s.sign}>
                  <td>{s.sign}</td>
                  <td>{s.meaning}</td>
                  <td>
                    <span className={`level level-${s.level}`}>{SIGNAL_LEVELS[s.level]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">A csóváló farok nem mindig jelent örömöt. Mindig a kutya egész testét figyeld!</p>
      </section>

      <section className="two-col">
        <div className="panel">
          <h2>
            <Hand size={22} aria-hidden="true" /> Hogyan köszönj egy kutyának?
          </h2>
          <Steps steps={GREETING_STEPS} />
          <p className="muted">Soha ne zavard az evő, alvó vagy kölykeit gondozó kutyát!</p>
        </div>

        <div className="panel">
          <h2>
            <TreePine size={22} aria-hidden="true" /> Ha egy idegen kutya rohan feléd
          </h2>
          <Steps steps={TREE_STEPS} />
          <p className="muted">
            Ha a kutya feldöntene, légy kő: gömbölyödj össze, a kezeddel védd a tarkódat, és maradj mozdulatlan.
          </p>
        </div>
      </section>

      <section className="panel panel-warn" aria-labelledby="mergezo">
        <h2 id="mergezo">
          <Ban size={22} aria-hidden="true" /> Ezek mérgezők a kutyának
        </h2>
        <p>Akármilyen szépen kéreget, ezekből soha ne adj neki:</p>
        <ul className="toxic-list">
          {TOXIC_FOODS.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ul>
        <p className="muted">Ha a kutya mégis megevett valamit, a felnőttek azonnal hívják az állatorvost.</p>
      </section>
    </div>
  )
}
