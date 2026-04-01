import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Essential Plumbing + Gas Services',
  description: 'Get in touch with Essential Plumbing + Gas Services in Palmerston North. Call 027 387 0987 or send us a message.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="ep-page-hero">
        <div className="container ep-page-hero__inner">
          <p className="ep-eyebrow">Get in Touch</p>
          <h1 className="ep-page-hero__heading">Contact Us</h1>
          <p className="ep-page-hero__sub">
            Call us directly or send a message below. We get back to you quickly.
          </p>
        </div>
      </section>

      <section className="ep-contact">
        <div className="container ep-contact__layout">
          <div className="ep-contact__info">
            <h2 className="ep-contact__info-heading">Get in touch</h2>
            <p className="ep-contact__info-body">
              Based in Palmerston North, we work across the Manawatu region. Give us a call or send a message and we&apos;ll be in touch.
            </p>
            <div className="ep-contact__details">
              <div className="ep-contact__detail">
                <span className="ep-contact__detail-label">Phone</span>
                <a href="tel:0273870987" className="ep-contact__detail-value ep-contact__detail-value--link">
                  027 387 0987
                </a>
              </div>
              <div className="ep-contact__detail">
                <span className="ep-contact__detail-label">Email</span>
                <a href="mailto:hello@essentialplumbing.co.nz" className="ep-contact__detail-value ep-contact__detail-value--link">
                  hello@essentialplumbing.co.nz
                </a>
              </div>
              <div className="ep-contact__detail">
                <span className="ep-contact__detail-label">Location</span>
                <span className="ep-contact__detail-value">Palmerston North, NZ</span>
              </div>
            </div>
          </div>

          <form className="ep-contact__form" action="#" method="POST" aria-label="Contact form">
            <div className="ep-form__row">
              <div className="ep-form__field">
                <label htmlFor="contact-name" className="ep-form__label">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="ep-form__input"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="ep-form__field">
                <label htmlFor="contact-phone" className="ep-form__label">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  className="ep-form__input"
                  placeholder="Your phone number"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div className="ep-form__field">
              <label htmlFor="contact-email" className="ep-form__label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="ep-form__input"
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>
            <div className="ep-form__field">
              <label htmlFor="contact-service" className="ep-form__label">Service needed</label>
              <select id="contact-service" name="service" className="ep-form__input ep-form__select">
                <option value="">Select a service</option>
                <option value="general">General Plumbing</option>
                <option value="gas">Gas Services</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="hotwater">Hot Water System</option>
                <option value="leak">Leak Detection & Repair</option>
                <option value="caravan">Caravan Certification</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="ep-form__field">
              <label htmlFor="contact-message" className="ep-form__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="ep-form__input ep-form__textarea"
                placeholder="Tell us about your project..."
                rows={5}
              />
            </div>
            <button type="submit" className="ep-btn ep-btn--primary ep-btn--full">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
