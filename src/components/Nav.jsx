import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'
import { Logo } from './ui'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <div
        className={`nav-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <Logo />
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={close}>
                Order Now
              </a>
            </li>
          </ul>
          <button
            className={`nav-toggle${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  )
}
