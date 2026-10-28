// Paraméterezhető, rajzolt kutyafej (SVG). A kabala és a fajtakártyák is ezt használják.

const EARS = {
  floppy: ['M31 36 C13 38 9 72 22 82 C32 88 39 72 41 54 Z', 'M89 36 C107 38 111 72 98 82 C88 88 81 72 79 54 Z'],
  long: ['M31 38 C11 42 8 92 20 104 C31 111 40 86 41 56 Z', 'M89 38 C109 42 112 92 100 104 C89 111 80 86 79 56 Z'],
  pointy: ['M32 46 L27 8 L57 31 Z', 'M88 46 L93 8 L63 31 Z'],
  big: ['M34 48 L13 5 L58 32 Z', 'M86 48 L107 5 L62 32 Z'],
  rose: ['M33 42 C21 32 23 14 40 20 C48 23 53 30 53 35 Z', 'M87 42 C99 32 97 14 80 20 C72 23 67 30 67 35 Z'],
  small: ['M33 40 C27 22 38 16 49 27 Z', 'M87 40 C93 22 82 16 71 27 Z'],
}

const INNER_EARS = {
  pointy: ['M35 40 L31 17 L51 32 Z', 'M85 40 L89 17 L69 32 Z'],
  big: ['M37 42 L21 14 L53 33 Z', 'M83 42 L99 14 L67 33 Z'],
}

const SPOTS = [
  [40, 44, 4],
  [78, 40, 3.6],
  [86, 64, 4.2],
  [35, 72, 3.2],
  [66, 33, 3],
  [50, 36, 2.6],
  [84, 50, 2.4],
]

const CURLS = [
  [38, 40],
  [47, 33],
  [56, 29],
  [65, 29],
  [74, 33],
  [83, 40],
  [31, 52],
  [89, 52],
]

// Zsinóros bunda (puli, komondor): a homlokra lógó és oldalt lelógó tincsek
const CORDS = (() => {
  const paths = []
  for (let x = 30; x <= 90; x += 6) {
    const dx = (x - 60) / 34
    const top = 62 - 36 * Math.sqrt(Math.max(0, 1 - dx * dx))
    paths.push(`M${x} ${(top - 3).toFixed(1)} q3 6 0 12 q-3 6 0 12 q3 6 0 10`)
  }
  for (const x of [28, 33, 87, 92]) {
    paths.push(`M${x} 52 q-3 7 0 14 q3 7 0 14 q-3 7 0 14`)
  }
  return paths
})()

function isDark(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70
}

export default function DogFace({
  coat = '#d9a066',
  dark = '#8a5a3b',
  muzzle = '#f3dcbc',
  earColor,
  cord,
  spot,
  eyes,
  nose = '#2b1d14',
  tongue = '#e8737a',
  ears = 'floppy',
  features = [],
  size = 120,
  label,
  className,
}) {
  const has = (f) => features.includes(f)
  const [earL, earR] = EARS[ears] ?? EARS.floppy
  const inner = INNER_EARS[ears]
  const earFill = earColor ?? (ears === 'pointy' || ears === 'big' ? coat : dark)
  const eyeRing = isDark(coat)

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {has('mane') && (
        <g fill={dark}>
          <circle cx="60" cy="64" r="42" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2
            return <circle key={i} cx={60 + 41 * Math.cos(a)} cy={64 + 41 * Math.sin(a)} r="10" />
          })}
        </g>
      )}

      <path d={earL} fill={earFill} />
      <path d={earR} fill={earFill} />
      {inner && (
        <g fill="#f2b8b0" opacity="0.85">
          <path d={inner[0]} />
          <path d={inner[1]} />
        </g>
      )}

      <ellipse cx="60" cy="62" rx="34" ry="36" fill={coat} />

      {has('cap') && (
        <>
          <path
            d="M27 58 C27 36 42 26 60 26 C78 26 93 36 93 58 C86 52 78 47 70 49 L60 63 L50 49 C42 47 34 52 27 58 Z"
            fill={dark}
          />
          <circle cx="47" cy="47" r="3.5" fill={coat} />
          <circle cx="73" cy="47" r="3.5" fill={coat} />
        </>
      )}
      {has('patch') && <ellipse cx="75" cy="53" rx="11" ry="12" fill={dark} />}
      {has('eyepatches') && (
        <g fill={dark}>
          <ellipse cx="45" cy="54" rx="11" ry="12" />
          <ellipse cx="75" cy="54" rx="11" ry="12" />
        </g>
      )}
      {has('spots') && (
        <g fill={spot ?? dark}>
          {SPOTS.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      )}
      {has('blaze') && <path d="M55 27 Q60 25 65 27 L64 52 Q60 56 56 52 Z" fill={muzzle} />}
      {has('brows') && (
        <g fill={muzzle}>
          <circle cx="46" cy="46" r="4.5" />
          <circle cx="74" cy="46" r="4.5" />
        </g>
      )}
      {has('wrinkles') && (
        <g fill="none" stroke={dark} strokeWidth="2.2" strokeLinecap="round" opacity="0.6">
          <path d="M46 37 q14 -6 28 0" />
          <path d="M48 43 q12 -5 24 0" />
          <path d="M38 74 q-2 6 2 12" />
          <path d="M82 74 q2 6 -2 12" />
        </g>
      )}

      <ellipse cx="60" cy="80" rx="20" ry="15" fill={muzzle} />
      {has('beard') && <path d="M42 84 Q60 108 78 84 Q60 92 42 84 Z" fill={dark} />}

      {[47, 73].map((cx) => (
        <g key={cx}>
          {eyeRing && <circle cx={cx} cy="56" r="6.6" fill="#ffffff" opacity="0.9" />}
          {eyes ? (
            <>
              <circle cx={cx} cy="56" r="5" fill={eyes} />
              <circle cx={cx} cy="56" r="2.4" fill="#141414" />
            </>
          ) : (
            <circle cx={cx} cy="56" r="5" fill="#2b1d14" />
          )}
          <circle cx={cx + 1.6} cy="54.3" r="1.6" fill="#ffffff" />
        </g>
      ))}

      <path d="M55 85 Q60 97 65 85 Z" fill={tongue} />
      <ellipse cx="60" cy="73" rx="7" ry="5" fill={nose} />
      <ellipse cx="58" cy="71.4" rx="2.4" ry="1.3" fill="#ffffff" opacity="0.45" />
      <path
        d="M60 78 V82 M51 82 Q55.5 87 60 82 Q64.5 87 69 82"
        fill="none"
        stroke="#2b1d14"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {has('curls') && (
        <g fill={coat} stroke={cord ?? dark} strokeWidth="2">
          {CURLS.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.6" />
          ))}
        </g>
      )}
      {has('cords') && (
        <g fill="none" stroke={cord ?? dark} strokeWidth="4.6" strokeLinecap="round">
          {CORDS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      )}
    </svg>
  )
}
