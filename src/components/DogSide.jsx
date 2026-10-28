// Oldalnézetes, rajzolt kutya (jobbra néz), saját koordinátákban kb. 190 × 124.
// A helyére egy külső <g transform> teszi; az animációk a belső csoportokon futnak,
// így nem írják felül a pozicionálást.

export default function DogSide({ coat = '#d9a066', dark = '#8a5a3b', light = '#f3dcbc', collar = '#15803d', patch = true, hopClass = '' }) {
  return (
    <g className={`dog ${hopClass}`}>
      <ellipse className="dog__shadow" cx="96" cy="123" rx="58" ry="5" fill="#000" opacity="0.12" />

      <path className="dog__tail" d="M42 66 C 28 60 20 46 24 32" fill="none" stroke={coat} strokeWidth="9" strokeLinecap="round" />

      {/* hátsó lábak (sötétebbek) */}
      <rect x="56" y="82" width="11" height="38" rx="5.5" fill={dark} />
      <rect x="114" y="82" width="11" height="38" rx="5.5" fill={dark} />

      <ellipse cx="90" cy="74" rx="48" ry="25" fill={coat} />
      <ellipse cx="96" cy="86" rx="30" ry="11" fill={light} />
      {patch && <ellipse cx="72" cy="63" rx="15" ry="10" fill={dark} />}

      {/* első lábak */}
      <rect x="68" y="86" width="12" height="36" rx="6" fill={coat} />
      <rect x="124" y="86" width="12" height="36" rx="6" fill={coat} />
      <ellipse cx="75" cy="120" rx="8" ry="4" fill={light} />
      <ellipse cx="131" cy="120" rx="8" ry="4" fill={light} />

      <g className="dog__head">
        <path d="M128 60 Q 140 72 154 68" fill="none" stroke={collar} strokeWidth="6" strokeLinecap="round" />
        <circle cx="141" cy="72" r="3.2" fill="#f2c94c" />
        <circle cx="148" cy="44" r="24" fill={coat} />
        <path d="M134 28 C 119 30 117 55 127 61 C 135 64 139 51 141 39 Z" fill={dark} />
        <ellipse cx="168" cy="55" rx="15" ry="11" fill={light} />
        <path className="dog__tongue" d="M168 62 q3 11 8 0 z" fill="#e8737a" />
        <ellipse cx="181" cy="49" rx="5" ry="4" fill="#2b1d14" />
        <path d="M167 62 q6 4 12 -1" fill="none" stroke="#2b1d14" strokeWidth="2" strokeLinecap="round" />
        <g className="dog__eye">
          <circle cx="155" cy="38" r="3.6" fill="#2b1d14" />
          <circle cx="156.3" cy="36.7" r="1.2" fill="#fff" />
        </g>
      </g>
    </g>
  )
}
