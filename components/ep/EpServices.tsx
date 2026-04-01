'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    id: 'general',
    title: 'General Plumbing',
    body: 'Repairs, leaks, replacements and everyday plumbing work completed cleanly and professionally.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-service__icon-svg">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: 'gas',
    title: 'Gas Services',
    body: 'Safe and reliable gas fitting for homes, upgrades and new installations. Gas cert board registered.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-service__icon-svg">
        <path d="M12 2c0 0-5 5.5-5 9a5 5 0 0010 0c0-3.5-5-9-5-9zm0 12a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovations',
    body: 'From upgrades to full bathroom plumbing, with a tidy modern finish. See our gallery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-service__icon-svg">
        <path d="M4 12h8m-8 4h8m-4-8v8M20 4l-8 8" />
      </svg>
    ),
  },
  {
    id: 'hotwater',
    title: 'Hot Water Systems',
    body: 'Cylinder replacements, heat pumps and gas infinity units. Hot water sorted fast.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-service__icon-svg">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
      </svg>
    ),
  },
  {
    id: 'leak',
    title: 'Leak Detection & Repair',
    body: 'Fast diagnosis and repair of leaks to prevent damage and ongoing costs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-service__icon-svg">
        <path d="M3 9h4v6H3zM17 9h4v6h-4zM7 12h10M7 9v6M17 9v6" />
      </svg>
    ),
  },
  {
    id: 'caravan',
    title: 'Caravan Certification',
    body: 'Registered Self Containment Authority. Green sticker, gas cert and Worksafe lodgement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-service__icon-svg">
        <rect x="2" y="7" width="16" height="10" rx="1" />
        <circle cx="6" cy="17" r="2" />
        <circle cx="14" cy="17" r="2" />
        <path d="M18 13h4" />
      </svg>
    ),
  },
]

export default function EpServices() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const tiles = gridRef.current?.querySelectorAll<HTMLElement>('.ep-service-tile')
      if (!tiles) return

      tiles.forEach((tile, i) => {
        gsap.fromTo(
          tile,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tile,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    }
    initGSAP().catch(() => {})
  }, [])

  return (
    <section className="ep-services" id="services">
      <div className="container">
        <header className="ep-section-header">
          <p className="ep-eyebrow">What We Do</p>
          <h2 className="ep-section-heading">Services</h2>
          <p className="ep-section-sub">
            From everyday repairs to full bathroom renovations and specialist caravan certification — we handle it all.
          </p>
        </header>
        <div className="ep-services__grid" ref={gridRef}>
          {services.map((service) => (
            <article key={service.id} className="ep-service-tile">
              <div className="ep-service__accent-line" aria-hidden="true" />
              <div className="ep-service__icon">
                {service.icon}
              </div>
              <h3 className="ep-service__title">{service.title}</h3>
              <p className="ep-service__body">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
