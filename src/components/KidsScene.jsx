import DogSide from './DogSide.jsx'
import './scene.css'

const HEARTS = [
  [150, 150, 0],
  [178, 140, 1.4],
  [330, 156, 0.7],
  [356, 146, 2.1],
]

// Nappali jelenet a gyerekoldalhoz: egy kutya és egy kölyök labdázik, szívecskék szállnak fel
export default function KidsScene() {
  return (
    <svg className="scene" viewBox="0 0 480 360" role="img" aria-label="Animáció: egy kutya és egy kölyökkutya labdázik a füvön">
      <defs>
        <linearGradient id="kidsSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde9b8" />
          <stop offset="1" stopColor="#f4f9ef" />
        </linearGradient>
      </defs>

      <rect width="480" height="360" fill="url(#kidsSky)" />

      <g className="scene-sun-spin">
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x="86" y="34" width="4" height="12" rx="2" fill="#f2b632" transform={`rotate(${i * 30} 88 76)`} />
        ))}
      </g>
      <circle cx="88" cy="76" r="22" fill="#f7c948" />

      <g className="scene-clouds" fill="#ffffff">
        <ellipse cx="300" cy="64" rx="36" ry="12" />
        <ellipse cx="324" cy="55" rx="22" ry="13" />
        <ellipse cx="420" cy="100" rx="24" ry="8" />
      </g>

      <path d="M0 240 C 100 210 200 214 280 226 C 360 238 420 222 480 228 L480 360 L0 360 Z" fill="#9fd09a" />
      <path d="M0 268 C 140 256 340 256 480 268 L480 360 L0 360 Z" fill="#b4dcab" />

      <g fill="#f08aa2">
        {HEARTS.map(([x, y, delay]) => (
          <path
            key={x}
            className="scene-heart"
            style={{ animationDelay: `${delay}s` }}
            d={`M${x} ${y} c -3 -4 -9 -2 -9 3 c 0 4 6 7 9 10 c 3 -3 9 -6 9 -10 c 0 -5 -6 -7 -9 -3 z`}
          />
        ))}
      </g>

      <g transform="translate(60 214) scale(0.66)">
        <DogSide hopClass="hop-a" />
      </g>
      <g transform="translate(420 248) scale(-0.44 0.44)">
        <DogSide coat="#2f2b2b" dark="#1c1919" light="#c98b52" collar="#2563eb" patch={false} hopClass="hop-b" />
      </g>

      <g className="ball-x ball-x--kids">
        <ellipse cx="190" cy="304" rx="8" ry="2.5" fill="#000" opacity="0.15" />
        <g className="ball-y">
          <circle cx="190" cy="258" r="9" fill="#e5484d" />
          <path d="M182 255 Q190 262 198 255" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}
