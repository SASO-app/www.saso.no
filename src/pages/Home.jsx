import { useEffect } from 'react'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import OurStory from '../components/OurStory'
import Philosophy from '../components/Philosophy'
import Portfolio from '../components/Portfolio'
import Presse from '../components/Presse'
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
      <TrustedBrands />
      <OurStory />
      <Philosophy />
      <Portfolio />
      <Presse />
      {/* Investorer midlertidig skjult — se src/components/Investors.jsx */}
      <Tenants />
      <Partners />
      <Social />
      <Contact />
    </main>
  )
}
