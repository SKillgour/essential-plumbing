import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/caravan', label: 'Caravan Cert' },
  { href: '/#gallery', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function EpFooter() {
  return (
    <footer className="ep-footer">
      <div className="container ep-footer__inner">
        <div className="ep-footer__brand">
          <Link href="/" aria-label="Essential Plumbing home">
            <Image
              src="/ep-logo.png"
              alt="Essential Plumbing + Gas Services"
              width={140}
              height={38}
              className="ep-footer__logo"
            />
          </Link>
          <p className="ep-footer__tagline">
            Quality plumbing and gas services in Palmerston North.
          </p>
        </div>

        <nav className="ep-footer__nav" aria-label="Footer navigation">
          <ul role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="ep-footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ep-footer__contact">
          <a href="tel:0273870987" className="ep-footer__phone">027 387 0987</a>
          <a href="mailto:hello@essentialplumbing.co.nz" className="ep-footer__email">
            hello@essentialplumbing.co.nz
          </a>
          <p className="ep-footer__location">Palmerston North, NZ</p>
        </div>
      </div>

      <div className="ep-footer__bottom">
        <div className="container ep-footer__bottom-inner">
          <p className="ep-footer__copy">
            &copy; {new Date().getFullYear()} Essential Plumbing + Gas Services
          </p>
          <p className="ep-footer__credit">
            Website by{' '}
            <a
              href="https://insightly.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="ep-footer__credit-link"
            >
              Insightly
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
