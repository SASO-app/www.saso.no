import PitchMedia from './PitchMedia'
import { useLang } from '../../lib/LangContext'
import { copy } from '../../data/samarbeid'

export default function PitchHero() {
  const { lang } = useLang()
  const t = copy[lang].hero

  return (
    <section className="bg-bone-50 pt-16 pb-16 sm:pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          {t.eyebrow}
        </p>
        <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-ink-500 uppercase">
          {t.kicker}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] font-medium text-ink-950 sm:text-6xl lg:text-7xl">
          {t.headline}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink-700">{t.sub}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#samarbeid-kontakt"
            className="rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600"
          >
            {t.ctaPrimary}
          </a>
          <a
            href="#samarbeid-tall"
            className="rounded-full border border-ink-950/20 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-bone-100"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <PitchMedia
          variant="warm"
          label={`${copy[lang].placeholder}: video/foto — ekte prosjekt i SASO-stil`}
          className="aspect-[16/9] w-full rounded-sm text-oak-600 sm:aspect-[21/9]"
        />
      </div>
    </section>
  )
}
