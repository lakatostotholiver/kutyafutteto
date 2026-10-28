// Vonalas ikonok a gyumolcsfa.tbesemeny.hu ikonkészletének stílusában (.icon osztály)

function Svg({ children, className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  )
}

export const PinIcon = (p) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
)

export const BuildingIcon = (p) => (
  <Svg {...p}>
    <path d="M4 21V5l8-2v18M12 21V9l8 2v10M2 21h20" />
    <path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
  </Svg>
)

export const LampIcon = (p) => (
  <Svg {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  </Svg>
)

export const PawIcon = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
  </Svg>
)

export const RulesIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
)

export const CheckIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m7.5 12.5 3 3 6-6.5" />
  </Svg>
)

export const CrossIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8.5 8.5 7 7m0-7-7 7" />
  </Svg>
)

export const PrintIcon = (p) => (
  <Svg {...p}>
    <path d="M7 9V3h10v6" />
    <rect x="3" y="9" width="18" height="8" rx="2" />
    <path d="M7 14h10v7H7z" />
  </Svg>
)
