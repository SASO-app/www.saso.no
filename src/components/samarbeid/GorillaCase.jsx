import InstagramEmbed from './InstagramEmbed'
import { useLang, formatNumber } from '../../lib/LangContext'
import { copy, gorillaCase } from '../../data/samarbeid'

function Stat({ value, label }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-xl font-medium text-ink-950 sm:text-2xl">{value}</p>
      <p className="mt-1 text-sm text-ink-500">{label}</p>
    </div>
  )
}

export default function GorillaCase() {
  const { lang } = useLang()
  const t = copy[lang].gorilla

  return (
    <section className="bg-ink-950 py-24 text-bone-50 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-400 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-xl text-bone-50/80">{t.sub}</p>

        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-oak-400">
          {t.steps.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="font-semibold tracking-wide uppercase">{step}</span>
              {i < t.steps.length - 1 && <span className="text-bone-50/30">→</span>}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <InstagramEmbed
            url={gorillaCase.reelUrl}
            fallbackLabel={t.watchOnInstagram}
            className="mx-auto w-full max-w-sm overflow-hidden rounded-sm bg-bone-50"
          />

          <div>
            <p className="max-w-xl text-lg text-bone-50/80">{t.body}</p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 rounded-sm bg-bone-50/5 p-6 sm:grid-cols-3">
              <div className="text-bone-50">
                <Stat value={formatNumber(gorillaCase.views, lang)} label={t.statViews} />
              </div>
              <div className="text-bone-50">
                <Stat value={formatNumber(gorillaCase.reach, lang)} label={t.statReach} />
              </div>
              <div className="text-bone-50">
                <Stat value={formatNumber(gorillaCase.interactions, lang)} label={t.statInteractions} />
              </div>
              <div className="text-bone-50">
                <Stat value={formatNumber(gorillaCase.saves, lang)} label={t.statSaves} />
              </div>
              <div className="text-bone-50">
                <Stat value={formatNumber(gorillaCase.shares, lang)} label={t.statShares} />
              </div>
              <div className="text-bone-50">
                <Stat value={formatNumber(gorillaCase.follows, lang)} label={t.statFollows} />
              </div>
            </div>
            <p className="mt-4 text-sm text-bone-50/50">
              {gorillaCase.watchTime[lang]} {t.watchTimeLabel}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm text-bone-50/70">
              <p>
                <span className="font-semibold text-bone-50">{t.audienceLabel}:</span>{' '}
                {gorillaCase.audience.female}% / {gorillaCase.audience.male}%
              </p>
              <p>
                <span className="font-semibold text-bone-50">{t.ageLabel}:</span>{' '}
                {gorillaCase.ageRange}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
