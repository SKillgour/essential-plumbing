'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEpIntro } from './EpIntroContext'
import { usePathname } from 'next/navigation'

export default function EpNav() {
  const { done } = useEpIntro()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(!isHome)
  const prevDone = useRef(false)

  useEffect(() => {
    if (!isHome) {
      setVisible(true)
      return
    }
    if (done && !prevDone.current) {
      prevDone.current = true
      setVisible(true)
    }
  }, [done, isHome])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = [
    'ep-nav',
    scrolled ? 'ep-nav--scrolled' : '',
    visible ? 'ep-nav--visible' : '',
    menuOpen ? 'ep-nav--open' : '',
  ].filter(Boolean).join(' ')

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/caravan', label: 'Caravan Cert' },
    { href: '/#gallery', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={navClass} aria-label="Main navigation">
      <div className="ep-nav__inner container">
        <Link href="/" className="ep-nav__logo" aria-label="Essential Plumbing home">
          <Image
            src="/ep-logo.png"
            alt="Essential Plumbing + Gas Services"
            width={160}
            height={44}
            priority
            className="ep-nav__logo-img"
          />
        </Link>

        <ul className="ep-nav__links" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="ep-nav__link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="tel:02738709870" className="ep-nav__cta">
              027 387 0987
            </a>
          </li>
        </ul>

        <button
          className="ep-nav__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="ep-nav__hamburger-bar" />
          <span className="ep-nav__hamburger-bar" />
          <span className="ep-nav__hamburger-bar" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="ep-nav__mobile" aria-hidden={!menuOpen}>
        <ul className="ep-nav__mobile-links" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="ep-nav__mobile-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="tel:0273870987" className="ep-nav__mobile-cta" onClick={() => setMenuOpen(false)}>
              Call 027 387 0987
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
