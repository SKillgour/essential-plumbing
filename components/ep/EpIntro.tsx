'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
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

    // Pipes draw in 0-1.0s, fitting pops 0.9s, brand rises 1.2s
    // Hold until 2.4s, then fade out over 0.7s
    const fadeTimer = setTimeout(() => setFading(true), 2400)
    const doneTimer = setTimeout(() => {
      setGone(true)
      setDone()
    }, 3100)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [setDone])

  if (gone) return null

  return (
    <div className={`ep-intro${fading ? ' ep-intro--fading' : ''}`} aria-hidden="true">

      {/* Animated pipe assembly */}
      <svg
        className="ep-intro__pipes"
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer glow layer */}
        <path className="ep-intro__pipe-glow ep-intro__pipe-glow--left"  d="M -10 120 L 200 120" />
        <path className="ep-intro__pipe-glow ep-intro__pipe-glow--right" d="M 410 120 L 200 120" />
        <path className="ep-intro__pipe-glow ep-intro__pipe-glow--top"   d="M 200 -10 L 200 120" />

        {/* Main pipe strokes */}
        <path className="ep-intro__pipe ep-intro__pipe--left"  d="M -10 120 L 200 120" />
        <path className="ep-intro__pipe ep-intro__pipe--right" d="M 410 120 L 200 120" />
        <path className="ep-intro__pipe ep-intro__pipe--top"   d="M 200 -10 L 200 120" />

        {/* End caps (flanges) */}
        <circle cx="-10"  cy="120" r="13" className="ep-intro__cap ep-intro__cap--left"  />
        <circle cx="410"  cy="120" r="13" className="ep-intro__cap ep-intro__cap--right" />
        <circle cx="200"  cy="-10" r="13" className="ep-intro__cap ep-intro__cap--top"   />

        {/* Central T-fitting */}
        <circle cx="200" cy="120" r="24" className="ep-intro__fitting"       />
        <circle cx="200" cy="120" r="15" className="ep-intro__fitting-inner" />
        <circle cx="200" cy="120" r="5"  className="ep-intro__fitting-bolt"  />
      </svg>

      {/* Logo + wordmark */}
      <div className="ep-intro__brand">
        <Image
          src="/ep-logo.png"
          alt="Essential Plumbing and Gas"
          width={180}
          height={90}
          className="ep-intro__logo"
          priority
        />
        <p className="ep-intro__tagline">Plumbing + Gas Services</p>
      </div>

    </div>
  )
}
