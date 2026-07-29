import { STEPS, BENEFITS, VENUES, PARTNER_POINTS, TESTIMONIALS } from '../data/content'
import { Reveal, SectionHead, Eyebrow, Btn } from './ui'
import { Icons } from './Icons'

export function HowSteps() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="The process"
            title="Four steps. Zero friction."
            subtitle="CHILLSIP sits on your table for the whole night — open it the moment you step away, and check it the moment you’re back."
          />
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} className="step-card" delay={i * 80}>
              <div className="seal-badge">
                <span>{s.n}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Benefits() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Key benefits"
            title="Small seal. Serious peace of mind."
            subtitle="Built to disappear into your night out — until the moment it matters."
          />
        </Reveal>
        <div className="why-grid">
          {BENEFITS.map((b, i) => {
            const Icon = Icons[b.icon]
            return (
              <Reveal key={b.title} className="feature-card" delay={i * 70}>
                <div className="feature-icon">{Icon && <Icon />}</div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Venues() {
  return (
    <section className="perfect" id="perfect">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Where it belongs"
            title="Perfect for wherever hospitality happens."
            subtitle="Anywhere a drink is served in an open container, CHILLSIP fits right in."
          />
        </Reveal>
        <div className="venue-grid">
          {VENUES.map((v, i) => {
            const Icon = Icons[v.icon]
            return (
              <Reveal key={v.label} className="venue-card" delay={i * 50}>
                {Icon && <Icon />}
                <span>{v.label}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Partner() {
  return (
    <section className="partner" id="partner">
      <div className="wrap">
        <Reveal className="partner-panel">
          <div className="partner-copy">
            <Eyebrow>For businesses</Eyebrow>
            <h2>Designed For Modern Hospitality.</h2>
            <p>
              CHILLSIP by Sorso Sicuro partners with hospitality businesses by supplying premium
              beverage protection products while also offering custom branded covers, promotional
              campaigns, sponsor branding and tailored hospitality solutions.
            </p>
            <ul className="partner-list">
              {PARTNER_POINTS.map((p) => (
                <li key={p}>
                  <Icons.check />
                  {p}
                </li>
              ))}
            </ul>
            <Btn href="#contact" variant="dark">
              Partner With Us
            </Btn>
          </div>
          <div className="partner-visual" aria-hidden="true">
            <div className="stack">
              <div className="disc" />
              <div className="disc" />
              <div className="disc">
                <div className="disc-mark">
                  <img src="/logo-disc.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-mark">
          <img src="/logo-about.png" alt="CHILLSIP by Sorso Sicuro logo mark" />
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          <Eyebrow>About Sorso Sicuro</Eyebrow>
          <h2>Hospitality innovation, made in Kenya.</h2>
          <p>
            Sorso Sicuro is a Kenyan hospitality innovation company developing practical beverage
            protection solutions that enhance customer safety, hygiene and overall drinking
            experiences.
          </p>
          <p>
            Its vision is to make beverage protection a standard feature of modern hospitality by
            combining safety, sustainability and customer experience into innovative beverage
            service solutions.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="What people are saying"
            title="Trusted by people who go out — and businesses that host them."
          />
        </Reveal>
        <div className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} className="test-card" delay={i * 90}>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Icons.star key={n} />
                ))}
              </div>
              <p className="test-quote">“{t.quote}”</p>
              <div className="test-author">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
