import { POSTER_PDFS } from '../data/rules.js'

function DownloadIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v11m0 0-4-4m4 4 4-4" />
      <path d="M5 19h14" />
    </svg>
  )
}

// A kifüggeszthető házirend letöltése A4-es és A3-as PDF-ben
export default function PosterDownloads() {
  return (
    <div className="downloads">
      {POSTER_PDFS.map((pdf) => (
        <a key={pdf.size} className="button" href={pdf.href} download>
          <DownloadIcon />
          Házirend PDF ({pdf.size})
        </a>
      ))}
    </div>
  )
}
