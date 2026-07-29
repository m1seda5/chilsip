import { useInView } from '../hooks/useInView'

export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      {children}
      <span className="eyebrow-scan" aria-hidden="true" />
    </div>
  )
}

export function SectionHead({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const { ref, inView } = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export function Btn({ href, children, variant = 'primary', type, onClick, className = '' }) {
  const cls = `btn btn-${variant} ${className}`.trim()
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type || 'button'} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}

export function Logo({ size = 32, withText = true }) {
  return (
    <a href="#top" className="logo" aria-label="CHILLSIP by Sorso Sicuro home">
      <img src="/logo-nav.png" alt="" width={size} height={size} className="logo-mark" />
      {withText && (
        <span className="logo-text">
          <span className="l1">CHILLSIP</span>
          <span className="l2">By Sorso Sicuro</span>
        </span>
      )}
    </a>
  )
}
