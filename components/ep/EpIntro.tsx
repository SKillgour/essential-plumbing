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

    // Drop falls 0.1-1.0s, logo 1.3s, name 1.8s
    // Hold until 3.1s, fade 0.65s, done 3.75s
    const fadeTimer = setTimeout(() => setFading(true), 3100)
    const doneTimer = setTimeout(() => {
      setGone(true)
      setDone()
    }, 3750)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [setDone])

  if (gone) return null

  return (
    <div className={`ep-intro${fading ? ' ep-intro--fading' : ''}`} aria-hidden="true">

      <div className="ep-intro__icon">

        {/* Phase 1: Drop falls from above, squishes on impact, ripples expand */}
        <svg
          className="ep-intro__drop-svg"
          viewBox="0 0 100 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ep-intro__drop-fill"
            d="M 50 8 C 50 8 18 45 18 65 C 18 83.4 32.6 98 50 98 C 67.4 98 82 83.4 82 65 C 82 45 50 8 50 8 Z"
          />
          <path
            className="ep-intro__drop-stroke"
            d="M 50 8 C 50 8 18 45 18 65 C 18 83.4 32.6 98 50 98 C 67.4 98 82 83.4 82 65 C 82 45 50 8 50 8 Z"
          />
          <ellipse
            className="ep-intro__drop-shine"
            cx="36" cy="52" rx="7" ry="11"
            transform="rotate(-20 36 52)"
          />
          <ellipse className="ep-intro__ripple ep-intro__ripple--1" cx="50" cy="97" rx="22" ry="5" />
          <ellipse className="ep-intro__ripple ep-intro__ripple--2" cx="50" cy="97" rx="36" ry="8" />
        </svg>

        {/* Phase 2: Real logo crossfades in */}
        <Image
          src="/ep-logo.png"
          alt="Essential Plumbing and Gas"
          width={110}
          height={110}
          className="ep-intro__logo-img"
          priority
        />
      </div>

      <div className="ep-intro__name-wrap">
        <p className="ep-intro__business">Essential Plumbing</p>
        <p className="ep-intro__service">+ Gas Services</p>
      </div>

    </div>
  )
}
