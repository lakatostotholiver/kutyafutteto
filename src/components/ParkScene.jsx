import DogSide from './DogSide.jsx'
import './scene.css'

const STARS = [
  [40, 40, 1.4],
  [96, 24, 1.1],
  [150, 58, 1.6],
  [214, 30, 1.2],
  [270, 64, 1.1],
  [318, 22, 1.5],
  [446, 44, 1.2],
  [470, 92, 1],
  [24, 104, 1.1],
  [122, 112, 0.9],
]

function Lamp({ x, dir = 1 }) {
  // dir: 1 = a lámpafej jobbra nyúlik, -1 = balra
  const head = x + dir * 28
  return (
    <g>
      <rect x={x - 2.5} y="112" width="5" height="156" rx="2" fill="#5b6472" />
      <path d={`M${x} 114 H${head}`} stroke="#5b6472" strokeWidth="4" strokeLinecap="round" />
      <rect x={head - 15} y="109" width="30" height="7" rx="3" fill="#3a4250" />
      <rect x={head - 12} y="115" width="24" height="3" rx="1.5" fill="#e3e7ec" />
    </g>
  )
}

function Beam({ x, dir = 1 }) {
  const head = x + dir * 28
  return (
    <g className="scene-glow">
      <polygon points={`${head - 11},118 ${head + 11},118 ${head + 80},312 ${head - 80},312`} fill="url(#beam)" />
      <ellipse cx={head} cy="312" rx="86" ry="16" fill="url(#pool)" />
      <circle cx={head} cy="117" r="14" fill="url(#led)" />
    </g>
  )
}

// A futtató este: nappal-éjszaka ciklus, este felkapcsolnak a LED-lámpák, két kutya labdázik
export default function ParkScene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 480 360"
      role="img"
      aria-label="Animáció: két kutya labdázik a futtatón, este a LED-lámpák világítanak"
    >
      <defs>
        <linearGradient id="skyDay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe8f5" />
          <stop offset="1" stopColor="#f2f9f0" />
        </linearGradient>
        <linearGradient id="skyNight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#15213f" />
          <stop offset="1" stopColor="#3b4c79" />
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff4c2" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff4c2" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pool">
          <stop offset="0" stopColor="#fff2b8" stopOpacity="0.7" />
          <stop offset="1" stopColor="#fff2b8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="led">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff7d1" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="360" fill="url(#skyDay)" />
      <rect className="scene-night" width="480" height="360" fill="url(#skyNight)" />

      <g className="scene-sun">
        <circle cx="392" cy="78" r="40" fill="#f7c948" opacity="0.25" />
        <circle cx="392" cy="78" r="26" fill="#f7c948" />
      </g>

      <g className="scene-clouds" fill="#ffffff">
        <ellipse cx="96" cy="70" rx="34" ry="11" />
        <ellipse cx="118" cy="62" rx="22" ry="12" />
        <ellipse cx="262" cy="46" rx="28" ry="9" />
        <ellipse cx="280" cy="40" rx="17" ry="9" />
      </g>

      <path d="M0 236 C 80 206 170 200 250 214 C 330 228 400 210 480 220 L480 360 L0 360 Z" fill="#86c093" />
      <g>
        <rect x="147" y="194" width="6" height="22" rx="2" fill="#7a5a3a" />
        <circle cx="150" cy="186" r="20" fill="#4f9a62" />
        <rect x="249" y="196" width="5" height="16" rx="2" fill="#7a5a3a" />
        <circle cx="251" cy="190" r="13" fill="#5aa76c" />
        <rect x="315" y="198" width="7" height="24" rx="2" fill="#7a5a3a" />
        <circle cx="318" cy="186" r="25" fill="#4f9a62" />
      </g>
      <path d="M0 262 C 120 250 360 250 480 262 L480 360 L0 360 Z" fill="#a7d3a1" />
      <path d="M0 322 C 140 312 340 314 480 322 L480 360 L0 360 Z" fill="#98ca93" />

      <Lamp x={50} dir={1} />
      <Lamp x={430} dir={-1} />

      <rect className="scene-dim" width="480" height="360" fill="#0b1733" />

      <g className="scene-stars" fill="#fffbe8">
        {STARS.map(([cx, cy, r], i) => (
          <circle key={i} className="scene-star" style={{ animationDelay: `${(i % 5) * 0.6}s` }} cx={cx} cy={cy} r={r} />
        ))}
      </g>

      <path className="scene-moon" d="M392 56 A20 20 0 0 0 392 96 A11 20 0 0 1 392 56 Z" fill="#f3eed8" />

      <Beam x={50} dir={1} />
      <Beam x={430} dir={-1} />

      <g transform="translate(76 216) scale(0.62)">
        <DogSide hopClass="hop-a" />
      </g>
      <g transform="translate(404 220) scale(-0.62 0.62)">
        <DogSide coat="#f4f1ea" dark="#3d3a3a" light="#ffffff" collar="#c2410c" hopClass="hop-b" />
      </g>

      <g className="ball-x">
        <ellipse cx="200" cy="304" rx="8" ry="2.5" fill="#000" opacity="0.15" />
        <g className="ball-y">
          <circle cx="200" cy="262" r="9" fill="#f2a93b" />
          <path d="M192 259 Q200 266 208 259" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
