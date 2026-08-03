import { useEffect } from 'react'
import Hero from '../components/Hero'
import OurStory from '../components/OurStory'
import Philosophy from '../components/Philosophy'
import Portfolio from '../components/Portfolio'
import Investors from '../components/Investors'
import Tenants from '../components/Tenants'
import Partners from '../components/Partners'
import Social from '../components/Social'
import Contact from '../components/Contact'

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    target?.scrollIntoView()
  }, [])

  return (
    <main>
      <Hero />
      <OurStory />
      <Philosophy />
      <Portfolio />
      <Investors />
      <Tenants />
      <Partners />
      <Social />
      <Contact />
    </main>
  )
}
