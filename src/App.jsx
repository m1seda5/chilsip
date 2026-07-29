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

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />
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
