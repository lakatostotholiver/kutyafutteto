import { EMERGENCY, OPERATOR, PARK } from '../data/location.js'
import { LAST_UPDATED, RULE_GROUPS, SMOKING_BAN } from '../data/rules.js'
import './poster.css'

// Kifüggeszthető házirend két fekvő lapon, a város sportpálya-tábláinak mintájára.
// A PDF-eket a tools/make-posters.mjs készíti ebből az oldalból (/plakat és /plakat?meret=A3).

const NUMBERED_GROUPS = (() => {
  let n = 0
  return RULE_GROUPS.map((group, gi) => ({
    ...group,
    chapter: gi + 1,
    items: group.items.map((item) => ({ ...item, number: ++n })),
  }))
})()

const BUILDER = 'Törökbálint Város Önkormányzata'

const RED = '#dd1f25'
const INK = '#231f20'

// Kerek tábla: piros gyűrű vékony fekete szegéllyel; a tilalmaknál átlós áthúzással
function Sign({ banned, children }) {
  return (
    <svg className="sign" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="49.4" fill={INK} />
      <circle cx="50" cy="50" r="48.4" fill={RED} />
      <circle cx="50" cy="50" r="38" fill="#fff" />
      {children}
      {banned && <path d="M23.1 23.1 76.9 76.9" stroke={RED} strokeWidth="10" />}
    </svg>
  )
}

// Oldalnézetű kutya sziluett, jobbra néz (kb. 84 × 66 egység)
function DogShape(props) {
  return (
    <path
      fill={INK}
      d="M2 10c2 8 7 13 12 15 6-2 14-2 24-2h17l6-12-1-9 7 5h7l11 7c1 3-1 6-4 6l-11 1-2 12v33h-7l-3-21H24l-5 21h-7l2-27c-6-6-13-17-12-29z"
      {...props}
    />
  )
}

function CrossSign() {
  return (
    <Sign>
      <path d="M41 27h18v14h14v18H59v14H41V59H27V41h14z" fill={RED} stroke={INK} strokeWidth="1" />
    </Sign>
  )
}

function LampSign() {
  return (
    <Sign>
      {/* a fénykúp a lámpa alatt, mellette a hold */}
      <path d="M49 42h20l11 33H40z" fill="#c9c9c9" />
      <path d="M29 77h20v-5h-6V38c0-4 2-6 6-6h7v-6h-7c-7 0-12 5-12 12v34h-8z" fill={INK} />
      <path d="M50 34h18l3 8H47z" fill={INK} />
      <path d="M27 31a8.5 8.5 0 1 0 6 14 7.5 7.5 0 0 1-6-14z" fill={INK} />
    </Sign>
  )
}

function PlaySign() {
  return (
    <Sign>
      <DogShape transform="translate(19 30) scale(.56)" />
      <circle cx="74" cy="60" r="5.5" fill={INK} />
    </Sign>
  )
}

function SmokingSign() {
  return (
    <Sign banned>
      <path d="M33 39c-5-5 4-8 0-14M43 39c-5-5 4-8 0-14" fill="none" stroke={INK} strokeWidth="3.2" strokeLinecap="round" />
      {/* cigaretta */}
      <path d="M20 44h44v9H20z" fill="#fff" stroke={INK} strokeWidth="2.6" />
      <path d="M64 42.7h16v11.6H64z" fill={INK} />
      {/* e-cigaretta */}
      <rect x="26" y="60" width="41" height="11" rx="2.5" fill={INK} />
      <path d="M67 62.5h11v6H67z" fill={INK} />
    </Sign>
  )
}

function GlassSign() {
  return (
    <Sign banned>
      <path d="M36 24h28c2 14 0 26-11 28v18h9v5H38v-5h9V52c-11-2-13-14-11-28z" fill={INK} />
    </Sign>
  )
}

function WasteSign() {
  return (
    <Sign>
      <path d="M41 24h18v5h15v6H26v-6h15z" fill={INK} />
      <path d="M31 38h38l-3 38H34z" fill={INK} />
      <path d="M42 44v26M50 44v26M58 44v26" stroke="#fff" strokeWidth="3" />
    </Sign>
  )
}

function LeashSign() {
  return (
    <Sign>
      <circle cx="35" cy="26" r="6" fill={INK} />
      <path d="M28 36c0-2 2-3 4-3h6c3 0 5 2 5 4l1 12h7v5H39v8l2 16h-6l-3-16-3 16h-6l3-20V48l-3 10h-5z" fill={INK} />
      <path d="M45 46c8 7 13 9 21 7" fill="none" stroke={INK} strokeWidth="2.2" />
      <DogShape transform="translate(50 49) scale(.36)" />
    </Sign>
  )
}

function VaccineSign() {
  return (
    <Sign>
      <g transform="rotate(45 50 50) translate(5 5) scale(.9)">
        <path d="M49 12h2v15h-2z" fill={INK} />
        <path d="M42 27h16v36H42z" fill={INK} />
        <path d="M46 34h8M46 41h8M46 48h8" stroke="#fff" strokeWidth="2.4" />
        <path d="M47 63h6v15h-6z" fill={INK} />
        <path d="M39 78h22v5H39z" fill={INK} />
      </g>
    </Sign>
  )
}

// Az „e-cigaretta” ne törjön két sorba a kötőjelnél
const keepHyphen = (text) => text.replaceAll('e-cigarett', 'e\u2011cigarett')

const [smokingHead] = keepHyphen(SMOKING_BAN).split(' szigorúan tilos')

const SIGN_ROWS = [
  {
    Pic: LampSign,
    text: 'A LED-lámpák miatt a kutyafuttató este is használható, de kizárólag kutyával való játékra, más célra nem!',
  },
  {
    Pic: PlaySign,
    text: 'A kutyafuttatót mindenki saját felelősségére használhatja! A mindenkori törökbálinti együttélési szabályokat kötelező betartani!',
  },
  {
    Pic: SmokingSign,
    text: (
      <>
        {smokingHead} <em>szigorúan tilos!</em>
      </>
    ),
  },
  { Pic: GlassSign, text: 'A kutyafuttatón szeszes italt fogyasztani, üveget és törékeny tárgyat bevinni tilos!' },
  { Pic: WasteSign, text: 'A kutya ürülékét össze kell szedni, szemetelni tilos!' },
  { Pic: LeashSign, text: 'A kutyafuttató területén kívül a kutyát mindig pórázon kell vezetni!' },
  { Pic: VaccineSign, text: 'Csak egészséges, veszettség ellen oltott, mikrochippel ellátott kutya vihető be!' },
]

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill={INK}
        d="M6.6 2.5 9.8 8l-2 2c1 2.4 3.8 5.2 6.2 6.2l2-2 5.5 3.2c-.5 2.6-2.3 4.1-4.5 4.1C9.5 21.5 2.5 14.5 2.5 7c0-2.2 1.5-4 4.1-4.5z"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill={INK} d="M2 5h20v14H2z" />
      <path fill="none" stroke="#fff" strokeWidth="1.6" d="m2.5 5.5 9.5 8 9.5-8" />
    </svg>
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
        <header className="head">
          <h1 className="head__title">Kutyafuttató</h1>
          <p className="head__sub">Házirend · {PARK.place}</p>
        </header>

        <div className="body">
          <div className="rows">
            <div className="row row--alert">
              <div className="row__pic">
                <span className="row__label">
                  Baleset
                  <br />
                  esetén
                </span>
                <CrossSign />
              </div>
              <div className="row__text">
                <strong>A legközelebbi orvosi rendelő helye:</strong>
                <span>
                  {EMERGENCY.clinic} • {EMERGENCY.clinicHours}
                </span>
                <strong>Baleset esetén hívható telefonszámok:</strong>
                <span>Központi segélyhívó: {EMERGENCY.phone}</span>
              </div>
            </div>

            {SIGN_ROWS.map(({ Pic, text }, i) => (
              <div className="row" key={i}>
                <div className="row__pic">
                  <Pic />
                </div>
                <p className="row__text">{text}</p>
              </div>
            ))}
          </div>

          <aside className="side">
            <div className="side__org">
              <img src="/img/plakat/cimer.png" alt="Törökbálint címere" />
              <span>Építtető:</span>
              <strong>{BUILDER}</strong>
            </div>
            <div className="side__rule" />
            <div className="side__org">
              <img src="/img/plakat/varosgondnoksag.png" alt="A Törökbálinti Városgondnokság logója" />
              <span>Üzemeltető:</span>
              <strong>{OPERATOR.name}</strong>
            </div>
            <ul className="side__contact">
              <li>
                <PhoneIcon />
                {OPERATOR.phone}
              </li>
              <li>
                <MailIcon />
                {OPERATOR.email}
              </li>
            </ul>
            <div className="side__qr">
              <img src="/img/qr-hazirend.svg" alt="QR-kód a teljes házirendhez" />
              <span>A teljes házirend</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="sheet">
        <header className="head head--small">
          <h1 className="head__title">Kutyafuttató – teljes házirend</h1>
        </header>

        <div className="body body--rules">
          <div className="chapters">
            {NUMBERED_GROUPS.map((group) => (
              <section key={group.id} className="chapter">
                <h2>
                  {group.chapter}. {group.title}
                </h2>
                <ol>
                  {group.items.map((item) => (
                    <li key={item.number} className={item.important ? 'is-important' : undefined}>
                      <span className="chapter__n">{item.number}.</span>
                      <span>{keepHyphen(item.text)}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <footer className="foot">
            <div className="foot__org">
              <img src="/img/plakat/cimer.png" alt="Törökbálint címere" />
              <span>
                Építtető:
                <strong>{BUILDER}</strong>
              </span>
            </div>
            <div className="foot__org">
              <img src="/img/plakat/varosgondnoksag.png" alt="A Törökbálinti Városgondnokság logója" />
              <span>
                Üzemeltető:
                <strong>{OPERATOR.name}</strong>
              </span>
            </div>
            <div className="foot__info">
              <span>{OPERATOR.address}</span>
              <span>
                {OPERATOR.phone} · {OPERATOR.email}
              </span>
              <span>Utolsó módosítás: {LAST_UPDATED}</span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}
