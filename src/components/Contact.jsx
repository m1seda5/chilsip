import { useState } from 'react'
import { FAQS } from '../data/content'
import { Reveal, SectionHead, Eyebrow, Btn, Logo } from './ui'
import { Icons } from './Icons'

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <Reveal>
          <SectionHead eyebrow="Questions" title="Everything you’re wondering." center />
        </Reveal>
        <Reveal className="faq-list" delay={80}>
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  className="faq-summary"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">
                    <Icons.plus />
                  </span>
                </button>
                <div className="faq-answer" hidden={!isOpen}>
                  {item.a}
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-panel">
          <div className="contact-info">
            <Eyebrow>Get in touch</Eyebrow>
            <h2>Order, partner, or just ask us anything.</h2>
            <p>
              Whether you want a pack for your next night out or you’re a venue looking to stock
              CHILLSIP for your guests, we’d love to hear from you.
            </p>
            <div className="contact-detail">
              <Icons.mail />
              <div>
                <strong>Email</strong>
                <a href="mailto:sorsosicuro@gmail.com">sorsosicuro@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail">
              <Icons.phone />
              <div>
                <strong>Phone</strong>
                <a href="tel:0110857613">0110857613</a>
              </div>
            </div>
            <div className="contact-detail">
              <Icons.map />
              <div>
                <strong>Based in</strong>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fname">First name</label>
                <input id="fname" name="fname" placeholder="Jordan" required />
              </div>
              <div className="field">
                <label htmlFor="lname">Last name</label>
                <input id="lname" name="lname" placeholder="Lee" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="reason">I’m reaching out about</label>
              <select id="reason" name="reason" defaultValue="order">
                <option value="order">Ordering CHILLSIP for personal use</option>
                <option value="biz">Business partnership / bulk order</option>
                <option value="press">Press or media</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us a bit about what you need..."
                required
              />
            </div>
            <Btn type="submit" variant="primary">
              Send Message
            </Btn>
            {sent && (
              <div className="form-success show">
                <Icons.check />
                Thanks — we’ll get back to you shortly.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo size={28} />
            <p className="footer-tag">
              A premium beverage protection seal, giving you visible peace of mind wherever the
              night takes you.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#how">How It Works</a>
                </li>
                <li>
                  <a href="#why">Benefits</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Business</h4>
              <ul>
                <li>
                  <a href="#partner">Partnerships</a>
                </li>
                <li>
                  <a href="#perfect">Applications</a>
                </li>
                <li>
                  <a href="#contact">Bulk Orders</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© {year} CHILLSIP by Sorso Sicuro. All rights reserved.</div>
          <div className="socials">
            <a href="#" className="social-btn" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
              <Icons.instagram />
            </a>
            <a href="#" className="social-btn" aria-label="TikTok" onClick={(e) => e.preventDefault()}>
              <Icons.tiktok />
            </a>
            <a href="#" className="social-btn" aria-label="X" onClick={(e) => e.preventDefault()}>
              <Icons.x />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
