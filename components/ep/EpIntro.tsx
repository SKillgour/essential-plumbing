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

    // Logo in at 0.3s, name in at 1.0s, hold until 2.4s, fade 0.6s, done 3.0s
    const fadeTimer = setTimeout(() => setFading(true), 2400)
    const doneTimer = setTimeout(() => {
      setGone(true)
      setDone()
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [setDone])

  if (gone) return null

  return (
    <div className={`ep-intro${fading ? ' ep-intro--fading' : ''}`} aria-hidden="true">
      <div className="ep-intro__logo-wrap">
        <Image
          src="/ep-logo.png"
          alt="Essential Plumbing and Gas"
          width={180}
          height={90}
          className="ep-intro__logo"
          priority
        />
      </div>
      <div className="ep-intro__name-wrap">
        <p className="ep-intro__business">ESSENTIAL PLUMBING</p>
        <p className="ep-intro__service">+ GAS SERVICES</p>
      </div>
    </div>
  )
}
