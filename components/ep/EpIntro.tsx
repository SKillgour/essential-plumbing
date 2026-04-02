'use client'

import { useEffect, useRef, useState } from 'react'
import { useEpIntro } from './EpIntroContext'

export default function EpIntro() {
  const { setDone } = useEpIntro()
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGone(true)
      setDone()
      return
    }

    // Paths draw 0-1.2s, fill floods 1.2-1.8s, name rises 1.6s
    // Hold until 2.8s, fade 0.6s, done 3.4s
    const fadeTimer = setTimeout(() => setFading(true), 2800)
    const doneTimer = setTimeout(() => {
      setGone(true)
      setDone()
    }, 3400)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [setDone])

  if (gone) return null

  return (
    <div className={`ep-intro${fading ? ' ep-intro--fading' : ''}`} aria-hidden="true">

      {/* Logo draw animation — two droplets traced by stroke-dasharray */}
      <div className="ep-intro__logo-draw">
        <svg
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ep-intro__svg"
        >
          {/* Left droplet outline — drawn first */}
          <path
            className="ep-intro__path ep-intro__path--drop1"
            d="M 30 62 C 14 62 6 50 6 40 C 6 28 18 14 30 4 C 42 14 54 28 54 40 C 54 50 46 62 30 62 Z"
          />
          {/* Left droplet fill flood — appears after stroke draws */}
          <path
            className="ep-intro__fill ep-intro__fill--drop1"
            d="M 30 62 C 14 62 6 50 6 40 C 6 28 18 14 30 4 C 42 14 54 28 54 40 C 54 50 46 62 30 62 Z"
          />

          {/* Right droplet outline — drawn second, slightly offset and smaller */}
          <path
            className="ep-intro__path ep-intro__path--drop2"
            d="M 78 70 C 65 70 56 59 56 50 C 56 40 66 28 78 18 C 90 28 100 40 100 50 C 100 59 91 70 78 70 Z"
          />
          {/* Right droplet fill */}
          <path
            className="ep-intro__fill ep-intro__fill--drop2"
            d="M 78 70 C 65 70 56 59 56 50 C 56 40 66 28 78 18 C 90 28 100 40 100 50 C 100 59 91 70 78 70 Z"
          />

          {/* Highlight dots — pop in after fills */}
          <circle cx="24" cy="34" r="3.5" className="ep-intro__dot ep-intro__dot--1" />
          <circle cx="70" cy="40" r="3" className="ep-intro__dot ep-intro__dot--2" />
        </svg>
      </div>

      {/* Business name */}
      <div className="ep-intro__name-wrap">
        <p className="ep-intro__business">ESSENTIAL PLUMBING</p>
        <p className="ep-intro__service">+ GAS SERVICES</p>
      </div>

    </div>
  )
}
