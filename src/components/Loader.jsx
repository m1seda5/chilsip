import { useEffect, useState } from 'react'

export function Loader() {
  const [hide, setHide] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 900)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!hide) return
    const t = setTimeout(() => setGone(true), 600)
    return () => clearTimeout(t)
  }, [hide])

  if (gone) return null

  return (
    <div className={`loader${hide ? ' hide' : ''}`} aria-hidden="true">
      <div className="loader-mark">
        <img src="/logo-mark.png" alt="" />
      </div>
      <div className="loader-word">CHILLSIP</div>
      <div className="loader-bar">
        <span />
      </div>
    </div>
  )
}
