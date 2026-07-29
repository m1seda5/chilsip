import { useCallback, useEffect, useRef, useState } from 'react'
import { DEMO_STEPS } from '../data/content'
import { Reveal, SectionHead } from './ui'
import { Icons } from './Icons'
import { useInView } from '../hooks/useInView'

const STEP_MS = 1700

export function HowVideo() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const stepStart = useRef(0)
  const raf = useRef(null)
  const { ref: sectionRef, inView } = useInView({ threshold: 0.4, once: true })
  const started = useRef(false)

  const step = DEMO_STEPS[index]

  const tick = useCallback(
    (ts) => {
      if (!stepStart.current) stepStart.current = ts
      const elapsed = ts - stepStart.current
      const pct = Math.min(1, elapsed / STEP_MS)
      setProgress(((index + pct) / DEMO_STEPS.length) * 100)
      if (pct >= 1) {
        setIndex((i) => (i + 1) % DEMO_STEPS.length)
        stepStart.current = ts
      }
      raf.current = requestAnimationFrame(tick)
    },
    [index],
  )

  useEffect(() => {
    if (!playing) {
      if (raf.current) cancelAnimationFrame(raf.current)
      return
    }
    stepStart.current = 0
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [playing, tick])

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      setPlaying(true)
    }
  }, [inView])

  const sealStyle =
    step.seal === 'peel'
      ? { opacity: 1, transform: 'translate(0,74px) rotate(0deg) scaleX(1) scaleY(1)' }
      : step.seal === 'on'
        ? { opacity: 1, transform: 'translate(0,0) rotate(0deg) scaleX(1) scaleY(0.38)' }
        : { opacity: 0, transform: 'translate(0,-70px) rotate(0deg) scaleX(1) scaleY(1)' }

  return (
    <section className="howvideo" id="howvideo" ref={sectionRef}>
      <div className="wrap">
        <Reveal>
          <SectionHead
            eyebrow="Watch it in action"
            title="How To Use CHILLSIP."
            subtitle="A quick walkthrough of the full sequence, from the box on your table to checking your drink is still safe."
          />
        </Reveal>

        <Reveal className="video-shell" delay={100}>
          <div className="video-frame">
            <div className="video-scene">
              <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="vGlassBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFF8E6" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                  <linearGradient id="vLiquid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFD24D" />
                    <stop offset="100%" stopColor="#D4A017" />
                  </linearGradient>
                </defs>

                <g
                  style={{
                    opacity: step.box === 'on' ? 1 : 0,
                    transform: step.box === 'on' ? 'translate(0,0)' : 'translate(0,-18px)',
                    transition: 'opacity .55s ease, transform .55s ease',
                  }}
                >
                  <ellipse cx="140" cy="252" rx="70" ry="12" fill="#1A1A1A" opacity="0.06" />
                  <rect x="88" y="96" width="104" height="46" rx="14" fill="#FFFDF7" stroke="#ECECEC" strokeWidth="2" />
                  <circle cx="140" cy="119" r="15" fill="#FFC400" opacity="0.9" />
                  <text x="140" y="123" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="12" fill="#1A1A1A">
                    C
                  </text>
                  <rect x="88" y="138" width="104" height="78" rx="16" fill="#FFFFFF" stroke="#ECECEC" strokeWidth="2" />
                  <rect x="107" y="154" width="66" height="46" rx="11" fill="#FFF8E4" stroke="#D4A017" strokeWidth="1.6" strokeDasharray="3 4" />
                  <path d="M140 190v-22M131 178l9-10 9 10" fill="none" stroke="#D4A017" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="140" y="245" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="12.5" letterSpacing="1.5" fill="#1A1A1A">
                    OPEN HERE
                  </text>
                </g>

                <g
                  style={{
                    opacity: step.glass === 'on' ? 1 : 0,
                    transform: step.glass === 'on' ? 'translate(0,0)' : 'translate(0,18px)',
                    transition: 'opacity .55s ease, transform .55s ease',
                  }}
                >
                  <ellipse cx="140" cy="322" rx="78" ry="14" fill="#1A1A1A" opacity="0.07" />
                  <path d="M78 96 L92 296 Q140 314 188 296 L202 96 Z" fill="url(#vGlassBody)" stroke="#ECECEC" strokeWidth="2" />
                  <path
                    d="M86 170 L96 288 Q140 304 184 288 L194 170 Q140 184 86 170 Z"
                    fill="url(#vLiquid)"
                    style={{
                      opacity: step.glass === 'on' ? 0.92 : 0,
                      transformOrigin: '140px 300px',
                      transform: step.glass === 'on' ? 'scaleY(1)' : 'scaleY(0)',
                      transition: 'opacity .55s ease, transform .55s ease',
                    }}
                  />
                  <ellipse cx="140" cy="96" rx="62" ry="15" fill="#FFFDF7" stroke="#ECECEC" strokeWidth="2" />
                </g>

                <g style={{ ...sealStyle, transition: 'opacity .55s ease, transform .55s ease' }}>
                  <image
                    href={step.seal === 'on' ? '/seal-flat.png' : '/seal-tab.png'}
                    x="75"
                    y="28"
                    width="130"
                    height="136"
                    opacity="0.98"
                  />
                </g>

                <g
                  style={{
                    opacity: step.leak === 'on' ? 1 : 0,
                    transform: step.leak === 'on' ? 'translate(0,0) scale(1)' : 'translate(0,-6px) scale(0.4)',
                    transformOrigin: '103px 112px',
                    transition: 'opacity .45s ease, transform .45s ease',
                  }}
                >
                  <circle cx="103" cy="112" r="20" fill="none" stroke="#C0392B" strokeWidth="2" strokeDasharray="3 4" opacity="0.55" />
                  <path d="M103 100c5 7 8 12 8 17a8 8 0 0 1-16 0c0-5 3-10 8-17Z" fill="#C0392B" />
                </g>
              </svg>
            </div>

            <div className="video-caption">{step.label}</div>

            <div className="video-controls">
              <button
                className="video-play"
                aria-label={playing ? 'Pause demo' : 'Play demo'}
                onClick={() => setPlaying((p) => !p)}
              >
                {playing ? <Icons.pause /> : <Icons.play />}
              </button>
              <div className="video-progress">
                <span style={{ width: `${progress}%` }} />
              </div>
              <span className="video-steplabel">
                Step {index + 1} / {DEMO_STEPS.length}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
