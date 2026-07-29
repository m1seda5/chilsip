import { useInView, useCountUp } from '../hooks/useInView'
import { Btn, Eyebrow, Reveal } from './ui'
import { Icons } from './Icons'

function ProofItem({ count, suffix, label, fallback, enabled }) {
  const value = useCountUp(count ?? fallback, {
    suffix: suffix || '',
    enabled: enabled && typeof count === 'number',
  })
  return (
    <div className="proof-item">
      <span className="proof-num">{typeof count === 'number' ? value : fallback}</span>
      <span className="proof-label">{label}</span>
    </div>
  )
}

export function Hero() {
  const { ref, inView } = useInView({ threshold: 0.35 })

  return (
    <header className="hero" id="hero">
      <div id="top" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Eyebrow>Premium beverage protection</Eyebrow>
          <h1>
            Protect <span className="accent">Every Sip.</span>
          </h1>
          <p className="hero-sub">
            Premium beverage protection designed to help reduce opportunities for drink
            tampering, improve hygiene, and give customers greater confidence wherever they
            enjoy their drinks.
          </p>
          <div className="hero-ctas">
            <Btn href="#contact" variant="primary">
              Order Now
            </Btn>
            <Btn href="#partner" variant="ghost">
              Become a Partner
              <Icons.arrow />
            </Btn>
          </div>
          <div className="hero-proof" ref={ref}>
            <ProofItem count={1} suffix=" sec" label="To apply" enabled={inView} />
            <ProofItem count={100} suffix="%" label="Visible if disturbed" enabled={inView} />
            <ProofItem fallback="Any" label="Standard glass or cup" enabled={inView} />
          </div>
        </div>

        <Reveal className="hero-visual" delay={120}>
          <div className="hero-product">
            <div className="hero-glow" aria-hidden="true" />
            <img src="/logo-hero.png" alt="CHILLSIP seal" className="hero-seal" />
            <div className="hero-float-card">
              <span className="dot" />
              Tamper-evident in one press
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
