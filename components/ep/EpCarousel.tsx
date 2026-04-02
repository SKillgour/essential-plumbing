'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/bathroom.jpg',  alt: 'Bathroom renovation work' },
  { src: '/bathroom1.jpg', alt: 'Plumbing installation' },
  { src: '/bathroom2.jpg', alt: 'Bathroom fit-out' },
  { src: '/bathroom3.jpg', alt: 'Hot water system' },
  { src: '/bathroom4.jpg', alt: 'Renovation complete' },
]

export default function EpCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function startAuto() {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
  }

  function resetAuto() {
    if (timerRef.current) clearInterval(timerRef.current)
    startAuto()
  }

  useEffect(() => {
    startAuto()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  function prev() {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
    resetAuto()
  }

  function next() {
    setCurrent(prev => (prev + 1) % slides.length)
    resetAuto()
  }

  function goTo(index: number) {
    setCurrent(index)
    resetAuto()
  }

  return (
    <div className="work-carousel reveal">
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <div key={slide.src} className={`carousel-slide${i === current ? ' active' : ''}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="carousel-img"
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous image">
        &#10094;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next image">
        &#10095;
      </button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
