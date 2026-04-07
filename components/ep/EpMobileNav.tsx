'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

const LINK_LABELS = [
  { href: '#services', label: 'Services' },
  { href: '#transformation', label: 'Before & After' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#caravan', label: 'Caravan & Motorhome' },
  { href: '#contact', label: 'Contact' },
]

export default function EpMobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const overlay = (
    <div className={`ep-mobile-menu${open ? ' ep-mobile-menu--open' : ''}`} aria-hidden={!open}>
      <ul className="ep-mobile-menu__links">
        {LINK_LABELS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="ep-mobile-menu__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="tel:0273870987"
            className="ep-mobile-menu__cta"
            onClick={() => setOpen(false)}
          >
            Call 027 387 0987
          </a>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <button
        className="ep-hamburger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        type="button"
        onClick={() => setOpen(v => !v)}
      >
        <span className={`ep-hamburger__bar${open ? ' ep-hamburger__bar--open-1' : ''}`} />
        <span className={`ep-hamburger__bar${open ? ' ep-hamburger__bar--open-2' : ''}`} />
        <span className={`ep-hamburger__bar${open ? ' ep-hamburger__bar--open-3' : ''}`} />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  )
}
