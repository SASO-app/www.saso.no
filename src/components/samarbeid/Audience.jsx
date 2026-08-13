import { useLang, formatNumber } from '../../lib/LangContext'
import { copy, tiktok } from '../../data/samarbeid'

export default function Audience() {
  const { lang } = useLang()
  const t = copy[lang].audience

  return (
    <section className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">{t.title}</h2>
        <p className="mt-6 max-w-xl text-lg text-ink-700">
          {t.tiktokIntro} {tiktok.handle}
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <div className="border-t border-line pt-5">
            <p className="text-4xl font-medium text-ink-950">{tiktok.norwayPct}%</p>
            <p className="mt-1 text-sm text-ink-500">{t.norwayLabel}</p>
          </div>
          <div className="border-t border-line pt-5">
            <p className="text-4xl font-medium text-ink-950">
              {tiktok.femalePct}% / {tiktok.malePct}%
            </p>
            <p className="mt-1 text-sm text-ink-500">{t.genderLabel}</p>
          </div>
          <div className="border-t border-line pt-5">
            <p className="text-4xl font-medium text-ink-950">
              {formatNumber(tiktok.followers, lang)}
            </p>
            <p className="mt-1 text-sm text-ink-500">{t.followersLabel}</p>
          </div>
        </div>

        <p className="mt-10 max-w-xl text-sm text-ink-500 italic">{t.note}</p>
      </div>
    </section>
  )
}
