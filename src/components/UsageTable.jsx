import { CITY } from '../data/location.js'

// A használat szabályai táblázatban; ami tilos vagy kötelező, piros
const GROUPS = [
  {
    title: 'Mire használható?',
    rows: [
      { label: 'Kutyával való játékra', status: 'Megengedett', tone: 'ok' },
      { label: 'Bármilyen más célra', status: 'Nem használható', tone: 'red' },
      { label: 'Dohányzás, e-cigaretta, hevített dohánytermék és más, dohányzást imitáló termék', status: 'Szigorúan tilos', tone: 'red' },
    ],
  },
  {
    title: 'Milyen szabályok érvényesek?',
    rows: [
      { label: 'A kutyafuttató házirendje', link: { to: '/hazirend', text: 'Házirend' }, status: 'Kötelező', tone: 'red' },
      {
        label: 'A mindenkori törökbálinti együttélési szabályok',
        link: { href: CITY.regulationsUrl, text: 'A város rendeletei' },
        status: 'Kötelező',
        tone: 'red',
      },
    ],
  },
]

export default function UsageTable() {
  return (
    <div className="usage">
      <table className="usage-table">
        <caption className="sr-only">A kutyafuttató használati szabályai</caption>
        <colgroup>
          <col />
          <col className="usage-table__status-col" />
        </colgroup>
        {GROUPS.map((group) => (
          <tbody key={group.title}>
            <tr className="usage-table__group">
              <th colSpan={2} scope="colgroup">
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className={row.tone === 'red' ? 'is-red' : undefined}>
                <th scope="row">
                  {row.label}
                  {row.link &&
                    (row.link.to ? (
                      <a className="usage-table__note" href={row.link.to}>
                        {row.link.text}
                      </a>
                    ) : (
                      <a className="usage-table__note" href={row.link.href} target="_blank" rel="noopener">
                        {row.link.text}
                      </a>
                    ))}
                </th>
                <td>
                  <span className={`status status--${row.tone}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  )
}
