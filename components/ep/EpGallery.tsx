'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const photos = [
  { src: '/bathroom-1.jpg', alt: 'Bathroom renovation project 1' },
  { src: '/bathroom-2.jpg', alt: 'Bathroom renovation project 2' },
  { src: '/bathroom-3.jpg', alt: 'Bathroom renovation project 3' },
  { src: '/bathroom-4.jpg', alt: 'Bathroom renovation project 4' },
  { src: '/bathroom-5.jpg', alt: 'Bathroom renovation project 5' },
]

export default function EpGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const items = sectionRef.current?.querySelectorAll<HTMLElement>('.ep-gallery__item')
      if (!items) return

      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
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
    <section className="ep-gallery" id="gallery" ref={sectionRef}>
      <div className="container">
        <header className="ep-section-header">
          <p className="ep-eyebrow">Our Work</p>
          <h2 className="ep-section-heading">Recent Projects</h2>
          <p className="ep-section-sub">
            Real bathroom renovations completed by our team across Palmerston North.
          </p>
        </header>
        <div className="ep-gallery__grid">
          {/* Featured large image */}
          <div className="ep-gallery__item ep-gallery__item--featured">
            <div className="ep-gallery__img-wrap">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="ep-gallery__img"
              />
              <div className="ep-gallery__overlay">
                <span className="ep-gallery__view">View</span>
              </div>
            </div>
          </div>
          {/* 2x2 grid of remaining photos */}
          <div className="ep-gallery__side">
            {photos.slice(1).map((photo) => (
              <div key={photo.src} className="ep-gallery__item">
                <div className="ep-gallery__img-wrap">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="ep-gallery__img"
                  />
                  <div className="ep-gallery__overlay">
                    <span className="ep-gallery__view">View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
