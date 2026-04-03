'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useEpIntro } from './EpIntroContext'

// Two-drip motif matching the EPG logo — left in deep blue, right in aqua
const LEFT_DRIP  = "M 33 97 C 26 87 22 78 22 70 C 22 61 28 57 33 61 C 38 57 44 61 44 70 C 44 78 40 87 33 97 Z"
const RIGHT_DRIP = "M 67 97 C 74 87 78 78 78 70 C 78 61 72 57 67 61 C 62 57 56 61 56 70 C 56 78 60 87 67 97 Z"

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

    // Drop falls 0.1-1.0s, drips draw 1.3-2.0s, logo 2.15s, name 2.65s
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

        {/* Phase 2: Two drip shapes draw up from impact point */}
        <svg
          className="ep-intro__drip-svg"
          viewBox="0 0 100 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="ep-intro__drip-stroke ep-intro__drip-stroke--left"  d={LEFT_DRIP} />
          <path className="ep-intro__drip-fill  ep-intro__drip-fill--left"     d={LEFT_DRIP} />
          <path className="ep-intro__drip-stroke ep-intro__drip-stroke--right" d={RIGHT_DRIP} />
          <path className="ep-intro__drip-fill  ep-intro__drip-fill--right"    d={RIGHT_DRIP} />
        </svg>

        {/* Phase 3: Real logo crossfades in as drip SVG fades */}
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
