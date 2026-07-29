import { useEffect, useState } from 'react'
import { Loader } from './components/Loader'
import { CursorGlow } from './components/CursorGlow'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { HowVideo } from './components/HowVideo'
import {
  HowSteps,
  Benefits,
  Venues,
  Partner,
  About,
  Testimonials,
} from './components/Sections'
import { FAQ, Contact, Footer } from './components/Contact'
import './index.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame
    const update = () => {
      frame = requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight
        setProgress(available > 0 ? (window.scrollY / available) * 100 : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <div className="grid-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Story />
        <HowVideo />
        <HowSteps />
        <Benefits />
        <Venues />
        <Partner />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
