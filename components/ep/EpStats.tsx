const stats = [
  'Palmerston North Based',
  'Licensed & Insured',
  'Residential & Renovation',
  'Caravan Certification',
]

export default function EpStats() {
  return (
    <section className="ep-stats" aria-label="Quick facts">
      <div className="container">
        <ul className="ep-stats__list" role="list">
          {stats.map((stat, i) => (
            <li key={stat} className="ep-stats__item">
              {i > 0 && <span className="ep-stats__sep" aria-hidden="true" />}
              <span className="ep-stats__label">{stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
