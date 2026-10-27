import { useEffect } from 'react'
import VaskerHero from '../components/vasker/VaskerHero'
import StandardVasker from '../components/vasker/StandardVasker'
import SpesialbyggetVask from '../components/vasker/SpesialbyggetVask'
import VaskerFAQ from '../components/vasker/VaskerFAQ'

export default function Vasker() {
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.querySelector(window.location.hash)
    target?.scrollIntoView()
  }, [])

  return (
    <main>
      <VaskerHero />
      <StandardVasker />
      <SpesialbyggetVask />
      <VaskerFAQ />
    </main>
  )
}
