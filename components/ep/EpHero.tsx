'use client'

import { useEffect, useRef } from 'react'
import { useEpIntro } from './EpIntroContext'
import { usePathname } from 'next/navigation'

export default function EpHero() {
  const { done } = useEpIntro()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const contentRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    const shouldAnimate = !isHome || done

    if (!shouldAnimate) return

    const content = contentRef.current
    if (!content) return

    hasAnimated.current = true

    const elements = content.querySelectorAll<HTMLElement>('.ep-hero__animate')
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`
      el.classList.add('ep-hero__animate--in')
    })
  }, [done, isHome])

  useEffect(() => {
    // GSAP pipe schematic animation
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const paths = document.querySelectorAll<SVGPathElement>('.ep-pipe-path')
      paths.forEach((path) => {
        const length = path.getTotalLength ? path.getTotalLength() : 800
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          delay: 0.3,
          ease: 'power2.inOut',
        })
      })
    }
    initGSAP().catch(() => {})
  }, [])

  return (
    <section className="ep-hero">
      {/* Background schematic SVG */}
      <div className="ep-hero__bg-svg" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          {/* Horizontal main runs */}
          <path className="ep-pipe-path" d="M -20 200 L 400 200" />
          <path className="ep-pipe-path" d="M 500 200 L 900 200" />
          <path className="ep-pipe-path" d="M 1000 200 L 1460 200" />

          {/* Vertical drops */}
          <path className="ep-pipe-path" d="M 400 200 L 400 500" />
          <path className="ep-pipe-path" d="M 900 200 L 900 400" />
          <path className="ep-pipe-path" d="M 1000 200 L 1000 350" />
          <path className="ep-pipe-path" d="M 200 200 L 200 350" />

          {/* Lower horizontal run */}
          <path className="ep-pipe-path" d="M 200 350 L 700 350" />
          <path className="ep-pipe-path" d="M 900 400 L 1200 400" />
          <path className="ep-pipe-path" d="M 1000 350 L 1460 350" />

          {/* Mid connections */}
          <path className="ep-pipe-path" d="M 400 500 L 750 500" />
          <path className="ep-pipe-path" d="M 700 350 L 700 500" />
          <path className="ep-pipe-path" d="M 550 500 L 550 650" />
          <path className="ep-pipe-path" d="M 550 650 L 1000 650" />
          <path className="ep-pipe-path" d="M 1200 400 L 1200 650" />
          <path className="ep-pipe-path" d="M 1000 650 L 1200 650" />

          {/* Upper right detail */}
          <path className="ep-pipe-path" d="M 1150 200 L 1150 100 L 1300 100" />
          <path className="ep-pipe-path" d="M 300 200 L 300 80 L 600 80" />

          {/* Elbow joints */}
          <circle cx="400" cy="200" r="4" className="ep-pipe-joint" />
          <circle cx="200" cy="200" r="4" className="ep-pipe-joint" />
          <circle cx="900" cy="200" r="4" className="ep-pipe-joint" />
          <circle cx="1000" cy="200" r="4" className="ep-pipe-joint" />
          <circle cx="200" cy="350" r="4" className="ep-pipe-joint" />
          <circle cx="700" cy="350" r="4" className="ep-pipe-joint" />
          <circle cx="700" cy="500" r="4" className="ep-pipe-joint" />
          <circle cx="550" cy="500" r="4" className="ep-pipe-joint" />
          <circle cx="550" cy="650" r="4" className="ep-pipe-joint" />
          <circle cx="1200" cy="400" r="4" className="ep-pipe-joint" />
          <circle cx="1200" cy="650" r="4" className="ep-pipe-joint" />
          <circle cx="1150" cy="200" r="4" className="ep-pipe-joint" />
          <circle cx="1150" cy="100" r="4" className="ep-pipe-joint" />
          <circle cx="300" cy="200" r="4" className="ep-pipe-joint" />
          <circle cx="300" cy="80" r="4" className="ep-pipe-joint" />
          <circle cx="1000" cy="350" r="4" className="ep-pipe-joint" />
          <circle cx="900" cy="400" r="4" className="ep-pipe-joint" />
          <circle cx="1000" cy="650" r="4" className="ep-pipe-joint" />

          {/* Tee junction marks */}
          <line x1="495" y1="190" x2="505" y2="210" className="ep-pipe-tee" />
          <line x1="995" y1="190" x2="1005" y2="210" className="ep-pipe-tee" />
          <line x1="540" y1="490" x2="560" y2="510" className="ep-pipe-tee" />
        </svg>
      </div>

      {/* Gradient overlay for readability */}
      <div className="ep-hero__gradient" aria-hidden="true" />

      {/* Foreground content */}
      <div className="ep-hero__content container" ref={contentRef}>
        <div className="ep-hero__left">
          <p className="ep-hero__eyebrow ep-hero__animate">
            PALMERSTON NORTH &middot; PLUMBING &amp; GAS
          </p>
          <h1 className="ep-hero__heading ep-hero__animate">
            Done right,<br />
            every time.
          </h1>
          <p className="ep-hero__sub ep-hero__animate">
            Essential Plumbing + Gas Services delivers quality workmanship, clear communication and reliable results across Palmerston North and surrounding areas.
          </p>
          <div className="ep-hero__ctas ep-hero__animate">
            <a href="tel:0273870987" className="ep-btn ep-btn--primary">
              Call 027 387 0987
            </a>
            <a href="/contact" className="ep-btn ep-btn--ghost">
              Get a Quote
            </a>
          </div>
          <div className="ep-hero__badges ep-hero__animate">
            <span className="ep-hero__badge">
              <span className="ep-hero__badge-dot" aria-hidden="true" />
              Licensed &amp; Insured
            </span>
            <span className="ep-hero__badge">
              <span className="ep-hero__badge-dot" aria-hidden="true" />
              Local Palmerston North
            </span>
            <span className="ep-hero__badge">
              <span className="ep-hero__badge-dot" aria-hidden="true" />
              Residential &amp; Renovation
            </span>
          </div>
        </div>

        {/* Floating availability card */}
        <div className="ep-hero__card ep-hero__animate">
          <div className="ep-hero__card-header">
            <span className="ep-hero__card-indicator" aria-label="Available" />
            <span className="ep-hero__card-status">Available for bookings</span>
          </div>
          <ul className="ep-hero__card-services" role="list">
            <li>General Plumbing</li>
            <li>Gas Fitting</li>
            <li>Bathroom Renovations</li>
            <li>Hot Water Systems</li>
            <li>Leak Repairs</li>
            <li>Caravan Certification</li>
          </ul>
          <a href="/contact" className="ep-hero__card-cta">
            Request a quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
