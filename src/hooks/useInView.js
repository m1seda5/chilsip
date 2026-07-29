import { useEffect, useRef, useState } from 'react'

export function useInView({ threshold = 0.15, once = true, rootMargin = '0px 0px -48px 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once, rootMargin])

  return { ref, inView }
}

export function useCountUp(target, { suffix = '', duration = 900, enabled = false } = {}) {
  const [value, setValue] = useState(`0${suffix}`)

  useEffect(() => {
    if (!enabled || typeof target !== 'number') {
      if (typeof target === 'string') setValue(target)
      return
    }

    const start = performance.now()
    let raf

    const tick = (ts) => {
      const p = Math.min(1, (ts - start) / duration)
      const eased = 1 - (1 - p) ** 3
      setValue(`${Math.round(target * eased)}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, suffix, duration, enabled])

  return value
}
