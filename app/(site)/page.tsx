import Image from 'next/image'
import EpCarousel from '@/components/ep/EpCarousel'
import EpScrollReveal from '@/components/ep/EpScrollReveal'
import EpMobileNav from '@/components/ep/EpMobileNav'

export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="brand">
            <Image
              src="/ep-logo.png"
              alt="Essential Plumbing + Gas Services"
              width={54}
              height={54}
              className="brand-logo"
            />
          </a>

          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#transformation">Before &amp; After</a>
            <a href="#why-us">Why Us</a>
            <a href="#caravan">Caravan &amp; Motorhome</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="tel:027 387 0987" className="btn btn-nav">Call Now</a>
          <EpMobileNav />
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>

          <div className="pipe-wrap" aria-hidden="true">
            <svg
              className="pipe-svg"
              viewBox="0 0 1600 500"
              preserveAspectRatio="none"
            >
              <path
                className="pipe-path"
                d="M-50 250 C 180 250, 180 120, 390 120 L 860 120 C 1100 120, 1100 360, 1320 360 L 1660 360"
              />
              <circle className="flow-dot" r="8">
                <animateMotion
                  dur="4.2s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path="M-50 250 C 180 250, 180 120, 390 120 L 860 120 C 1100 120, 1100 360, 1320 360 L 1660 360"
                />
              </circle>
            </svg>
          </div>

          <div className="container hero-content">
            <div className="hero-copy reveal">
              <p className="eyebrow">Plumbing + Gas Services</p>
              <h1>
                Professional, reliable plumbing and gas work{' '}
                <span>done properly.</span>
              </h1>
              <p className="hero-text">
                Reliable local plumbing and gas services for maintenance, repairs,
                hot water systems and renovations across Palmerston North
                and surrounding areas.
              </p>

              <div className="hero-actions">
                <a href="tel:027 387 0987" className="btn btn-primary">Call Now</a>
                <a href="#contact" className="btn btn-secondary">Request a Quote</a>
              </div>

              <div className="hero-points">
                <div className="hero-point">Licensed &amp; Insured</div>
                <div className="hero-point">Local Palmerston North Plumber</div>
                <div className="hero-point">Residential &amp; Renovation Work</div>
                <div className="hero-point">Quality workmanship</div>
              </div>
            </div>

            <div className="hero-card reveal delay-1">
              <div className="hero-card-top">
                <div className="status-dot"></div>
                <span>Local service you can trust</span>
              </div>
              <h3>Essential Plumbing + Gas Services</h3>
              <p>
                Clear communication, quality work and a clean modern approach
                to everyday plumbing and gas jobs.
              </p>

              <div className="mini-stats">
                <div className="stat">
                  <strong>Plumbing</strong>
                  <span>Repairs, installs &amp; maintenance</span>
                </div>
                <div className="stat">
                  <strong>Gas</strong>
                  <span>Safe, tidy and professional work</span>
                </div>
                <div className="stat">
                  <strong>Renovations</strong>
                  <span>Bathrooms, upgrades and fit-outs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Services</p>
              <h2>Everything you need from a local plumber</h2>
              <p>
                From quick repairs to full installations, Essential Plumbing + Gas Services delivers reliable workmanship and clear communication on every job.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card reveal">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3>General Plumbing</h3>
                <p>
                  Repairs, leaks, replacements and everyday plumbing work
                  completed cleanly and professionally.
                </p>
              </article>

              <article className="service-card reveal delay-1">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
                    <path d="M12 2c0 0-5 5.5-5 9a5 5 0 0010 0c0-3.5-5-9-5-9zm0 12a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
                <h3>Gas Services</h3>
                <p>
                  Safe and reliable gas fitting work for homes, upgrades
                  and new installations.
                </p>
              </article>

              <article className="service-card reveal delay-2">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
                    <path d="M4 12h8m-8 4h8m-4-8v8M20 4l-8 8" />
                  </svg>
                </div>
                <h3>Bathroom Renovations</h3>
                <p>
                  From upgrades to full bathroom plumbing support, with
                  a tidy and modern finish.
                </p>
              </article>

              <article className="service-card reveal">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
                  </svg>
                </div>
                <h3>Hot Water Systems</h3>
                <p>
                  Installations, replacements and troubleshooting for
                  dependable hot water performance.
                </p>
              </article>

              <article className="service-card reveal delay-1">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
                    <path d="M3 9h4v6H3zM17 9h4v6h-4zM7 12h10M7 9v6M17 9v6" />
                  </svg>
                </div>
                <h3>Leak Repairs</h3>
                <p>
                  Fast identification and repair of leaks to help prevent
                  damage and ongoing issues.
                </p>
              </article>

              <article className="service-card reveal delay-2">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="28" height="28">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Maintenance Work</h3>
                <p>
                  Practical ongoing maintenance to keep plumbing and gas
                  systems running smoothly.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="transformation" className="section transformation">
          <div className="container">
            <div className="section-heading reveal">
              <p className="eyebrow">Our Work</p>
              <h2>See the quality for yourself</h2>
              <p>
                A few examples of recent plumbing, gas and renovation work completed by Essential Plumbing + Gas Services.
              </p>
            </div>

            <EpCarousel />
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="section why-us">
          <div className="container why-grid">
            <div className="why-copy reveal">
              <p className="eyebrow">Why Choose Essential</p>
              <h2>Professional, modern and easy to trust</h2>
              <p>
                Essential Plumbing focuses on quality workmanship, clear communication and reliable service for homeowners across Palmerston North.
              </p>
            </div>

            <div className="why-list">
              <div className="why-item reveal">
                <span className="why-bullet"></span>
                <div>
                  <h3>Clear and professional</h3>
                  <p>No clutter, no guesswork, just a clean service-focused site.</p>
                </div>
              </div>

              <div className="why-item reveal delay-1">
                <span className="why-bullet"></span>
                <div>
                  <h3>Built for trust</h3>
                  <p>Strong branding, clear service lines and practical information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="section cta-band">
          <div className="container cta-inner reveal">
            <div>
              <p className="eyebrow">Need a plumber?</p>
              <h2>Call now or request a quote and we&apos;ll get back to you quickly.</h2>
            </div>
            <div className="cta-actions">
              <a href="tel:027 387 0987" className="btn btn-primary">Call Essential</a>
              <a href="#contact" className="btn btn-secondary">Get a Quote</a>
            </div>
          </div>
        </section>

        {/* CARAVAN CERTIFICATION */}
        <section id="caravan" className="section caravan-cert">
          <div className="container">
            <div className="caravan-layout reveal">
              <div className="caravan-copy">
                <p className="eyebrow">Caravan &amp; Motorhome</p>
                <h2>Caravan and Motorhome Certification</h2>
                <p className="caravan-intro">
                  Essential Plumbing and Gas Services is a registered Self Containment
                  Authority, offering a complete certification service for caravans and
                  motorhomes.
                </p>

                <div className="caravan-points">
                  <div className="caravan-point">
                    <span className="caravan-icon">✓</span>
                    <div>
                      <h3>Green sticker certification</h3>
                      <p>
                        We take care of inspection, PGDB fee payment, processing and
                        warrant card printing.
                      </p>
                    </div>
                  </div>

                  <div className="caravan-point">
                    <span className="caravan-icon">✓</span>
                    <div>
                      <h3>Gas certification &amp; testing</h3>
                      <p>
                        We also provide gas certification, testing and lodgement to the
                        Worksafe High Risk Database.
                      </p>
                    </div>
                  </div>

                  <div className="caravan-point">
                    <span className="caravan-icon">✓</span>
                    <div>
                      <h3>Simple, end-to-end process</h3>
                      <p>
                        One point of contact, clear communication and a smooth process
                        from inspection through to documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="caravan-actions">
                  <a href="#contact" className="btn btn-primary">Book an Inspection</a>
                  <a
                    href="https://www.pgdb.co.nz/self_contained_vehicles/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    Learn About Self Containment
                  </a>
                </div>
              </div>

              <div className="caravan-panel reveal delay-1">
                <div className="caravan-panel-card">
                  <p className="panel-label">What we can help with</p>

                  <ul className="caravan-checklist">
                    <li>Self-containment inspections</li>
                    <li>PGDB fee payment and processing</li>
                    <li>Warrant card printing</li>
                    <li>Gas certification and testing</li>
                    <li>Worksafe High Risk Database lodgement</li>
                  </ul>

                  <div className="caravan-note">
                    Ideal for caravan and motorhome owners wanting a tidy, professional
                    certification process without the hassle.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">Contact</p>
              <h2>Get in touch for a quote</h2>
              <p>
                &ldquo;Top notch. Punctual, easily contactable and great communication.
                The work speaks for itself. Would highly recommend.&rdquo;<br />
                — Steve
              </p>

              <div className="contact-details">
                <a href="tel:027 387 0987">027 387 0987</a>
                <a href="https://www.facebook.com/essentialpgs/" target="_blank" rel="noreferrer">
                  Facebook Page
                </a>
                <span>Palmerston North &amp; surrounding areas</span>
              </div>
            </div>

            <div className="contact-card reveal delay-1">
              <form
                className="demo-form"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input type="hidden" name="access_key" value="087e258d-29fd-4f64-a727-cbef1f8a4653" />
                <input type="hidden" name="subject" value="New Quote Request - Essential Plumbing Website" />
                <input type="hidden" name="from_name" value="Essential Plumbing Website" />
                <input type="hidden" name="redirect" value="https://essentialplumbing.co.nz/thanks.html" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="text" placeholder="Best contact number" required />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Your email address" required />
                </div>

                <div className="field">
                  <label htmlFor="job">What do you need help with?</label>
                  <textarea
                    id="job"
                    name="job"
                    rows={5}
                    placeholder="Leaks, hot water, bathroom renovation, gas work..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>© 2026 Essential Plumbing + Gas Services</div>
          <div>Plumbing • Gas • Renovations • Maintenance</div>
        </div>
        <p className="footer-credit">
          Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer">Insightly</a>
        </p>
      </footer>

      <a href="tel:027 387 0987" className="floating-call">Call Now</a>

      <EpScrollReveal />
    </div>
  )
}
