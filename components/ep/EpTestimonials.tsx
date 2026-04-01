'use client'

import { useEffect, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'Really tidy work and communicated well throughout. Turned up when they said they would and left everything clean.',
    author: 'Mark H.',
    location: 'Palmerston North',
  },
  {
    id: 2,
    quote: 'Got our hot water sorted same week. Professional, friendly and the price was fair. Wouldn\'t hesitate to use again.',
    author: 'Jess & Tom W.',
    location: 'Palmerston North',
  },
  {
    id: 3,
    quote: 'Sorted the caravan certification for us without any hassle. Handled everything — we just showed up and it was done.',
    author: 'Craig S.',
    location: 'Feilding',
  },
]

export default function EpTestimonials() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const cards = gridRef.current?.querySelectorAll<HTMLElement>('.ep-testimonial')
      if (!cards) return

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })
    }
    initGSAP().catch(() => {})
  }, [])

  return (
    <section className="ep-testimonials">
      <div className="container">
        <header className="ep-section-header">
          <p className="ep-eyebrow">What Clients Say</p>
          <h2 className="ep-section-heading">Reviews</h2>
        </header>
        <div className="ep-testimonials__grid" ref={gridRef}>
          {testimonials.map((t) => (
            <article key={t.id} className="ep-testimonial">
              <div className="ep-testimonial__quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="ep-testimonial__text">{t.quote}</blockquote>
              <footer className="ep-testimonial__footer">
                <span className="ep-testimonial__author">{t.author}</span>
                <span className="ep-testimonial__location">{t.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
