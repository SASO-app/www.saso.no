import { useEffect } from 'react'
import { LangProvider, useLang } from '../lib/LangContext'
import { copy } from '../data/samarbeid'
import PitchTopBar from '../components/samarbeid/PitchTopBar'
import PitchHero from '../components/samarbeid/PitchHero'
import MeetSaso from '../components/samarbeid/MeetSaso'
import BigNumber from '../components/samarbeid/BigNumber'
import OrganicEngine from '../components/samarbeid/OrganicEngine'
import PartnerBrands from '../components/samarbeid/PartnerBrands'
import GorillaCase from '../components/samarbeid/GorillaCase'
import SelectedCollaborations from '../components/samarbeid/SelectedCollaborations'
import Audience from '../components/samarbeid/Audience'
import MediaPackage from '../components/samarbeid/MediaPackage'
import Collaboration from '../components/samarbeid/Collaboration'
import PressMentions from '../components/samarbeid/PressMentions'
import FinalCta from '../components/samarbeid/FinalCta'
import Footer from '../components/Footer'

function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])
}

function SamarbeidContent() {
  const { lang } = useLang()
  useNoIndex()

  return (
    <>
      <PitchTopBar />
      <main>
        <PitchHero />
        <MeetSaso />
        <BigNumber />
        <OrganicEngine />
        <PartnerBrands />
        <GorillaCase />
        <SelectedCollaborations />
        <Audience />
        <MediaPackage />
        <Collaboration />
        <PressMentions />
        <FinalCta />
      </main>
      <Footer />
      <p className="bg-bone-50 pb-10 text-center text-xs text-ink-500">
        {copy[lang].footer.dataNote}
      </p>
    </>
  )
}

export default function Samarbeid() {
  return (
    <LangProvider>
      <SamarbeidContent />
    </LangProvider>
  )
}
