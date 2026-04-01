'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    title: 'Green sticker certification',
    body: 'Inspection, PGDB fee payment, processing and warrant card printing — handled end to end.',
  },
  {
    title: 'Gas certification & testing',
    body: 'Full gas cert, testing and lodgement to the Worksafe High Risk Database.',
  },
  {
    title: 'Simple end-to-end process',
    body: 'One point of contact, clear communication and a smooth process from start to finish.',
  },
]

const checklist = [
  'Self-containment inspections',
  'PGDB fee payment and processing',
  'Warrant card printing',
  'Gas certification and testing',
  'Worksafe High Risk Database lodgement',
]

function TickIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ep-caravan__tick">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export default function EpCaravan() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const el = sectionRef.current
      if (!el) return

      gsap.fromTo(
        el.querySelectorAll('.ep-caravan__animate'),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }
    initGSAP().catch(() => {})
  }, [])

  return (
    <section className="ep-caravan" id="caravan" ref={sectionRef}>
      {/* Blueprint grid background */}
      <div className="ep-caravan__bg" aria-hidden="true" />

      <div className="container">
        <div className="ep-caravan__layout">
          <div className="ep-caravan__content">
            <p className="ep-eyebrow ep-caravan__animate">Registered Self Containment Authority</p>
            <h2 className="ep-section-heading ep-caravan__animate">
              Caravan &amp; Motorhome<br />Certification
            </h2>
            <p className="ep-caravan__body ep-caravan__animate">
              We are a registered Self Containment Authority, meaning we can issue the official green sticker certification for caravans and motorhomes. Whether you need a new certification or a renewal, we handle every step including PGDB fee payment, warrant card printing, gas certification and Worksafe lodgement.
            </p>

            <ul className="ep-caravan__features" role="list">
              {features.map((f) => (
                <li key={f.title} className="ep-caravan__feature ep-caravan__animate">
                  <div className="ep-caravan__feature-icon">
                    <TickIcon />
                  </div>
                  <div>
                    <h3 className="ep-caravan__feature-title">{f.title}</h3>
                    <p className="ep-caravan__feature-body">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="/caravan" className="ep-btn ep-btn--primary ep-caravan__animate">
              Book an Inspection
            </a>
          </div>

          <div className="ep-caravan__card ep-caravan__animate">
            <h3 className="ep-caravan__card-title">What&apos;s included</h3>
            <ul className="ep-caravan__checklist" role="list">
              {checklist.map((item) => (
                <li key={item} className="ep-caravan__checklist-item">
                  <TickIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="ep-caravan__card-note">
              One point of contact from inspection to certification.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
