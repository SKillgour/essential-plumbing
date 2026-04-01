'use client'

import { useEffect, useRef } from 'react'
import { useEpIntro } from './EpIntroContext'

export default function EpIntro() {
  const { setDone } = useEpIntro()
  const overlayRef = useRef<HTMLDivElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const overlay = overlayRef.current
    if (!overlay) return

    // After all CSS animations complete (~2.8s), fade out overlay
    const timer = setTimeout(() => {
      if (overlay) {
        overlay.style.opacity = '0'
        overlay.style.pointerEvents = 'none'
      }
      setTimeout(() => {
        setDone()
      }, 600)
    }, 2800)

    return () => clearTimeout(timer)
  }, [setDone])

  return (
    <div className="ep-intro" ref={overlayRef}>
      <svg
        className="ep-intro__pipe-svg"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main pipe path: horizontal run, curve up, horizontal run, curve down, horizontal run */}
        <path
          className="ep-intro__pipe-path"
          d="M -50 280 L 200 280 Q 260 280 260 220 L 260 180 Q 260 120 320 120 L 880 120 Q 940 120 940 180 L 940 220 Q 940 280 1000 280 L 1250 280"
        />
        {/* Elbow joints */}
        <circle cx="260" cy="280" r="8" className="ep-intro__joint ep-intro__joint--1" />
        <circle cx="260" cy="120" r="8" className="ep-intro__joint ep-intro__joint--2" />
        <circle cx="940" cy="120" r="8" className="ep-intro__joint ep-intro__joint--3" />
        <circle cx="940" cy="280" r="8" className="ep-intro__joint ep-intro__joint--4" />

        {/* Glowing dot travelling along path */}
        <circle r="6" className="ep-intro__dot">
          <animateMotion
            dur="1.6s"
            begin="0s"
            fill="freeze"
            path="M -50 280 L 200 280 Q 260 280 260 220 L 260 180 Q 260 120 320 120 L 880 120 Q 940 120 940 180 L 940 220 Q 940 280 1000 280 L 1250 280"
          />
        </circle>
      </svg>

      <div className="ep-intro__text">
        <div className="ep-intro__text-essential">ESSENTIAL</div>
        <div className="ep-intro__text-sub">PLUMBING + GAS</div>
      </div>
    </div>
  )
}
