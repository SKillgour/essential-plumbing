export default function EpCTA() {
  return (
    <section className="ep-cta">
      {/* Subtle pipe schematic background */}
      <div className="ep-cta__bg" aria-hidden="true">
        <svg
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          <path stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.08" d="M -20 80 L 300 80 L 300 150 L 700 150 L 700 80 L 1100 80 L 1100 150 L 1460 150" />
          <path stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.08" d="M 200 80 L 200 30 L 500 30" />
          <path stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.08" d="M 900 150 L 900 220 L 1200 220" />
          <circle cx="300" cy="80" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="300" cy="150" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="700" cy="150" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="700" cy="80" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="1100" cy="80" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="1100" cy="150" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="200" cy="80" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
          <circle cx="900" cy="150" r="3" fill="var(--color-accent)" fillOpacity="0.12" />
        </svg>
      </div>

      <div className="container ep-cta__inner">
        <h2 className="ep-cta__heading">Need a plumber you can trust?</h2>
        <p className="ep-cta__sub">Call now or request a quote. We get back to you quickly.</p>
        <div className="ep-cta__actions">
          <a href="tel:0273870987" className="ep-btn ep-btn--primary ep-btn--lg">
            Call 027 387 0987
          </a>
          <a href="/contact" className="ep-btn ep-btn--ghost ep-btn--lg">
            Send a Message
          </a>
        </div>
      </div>
    </section>
  )
}
