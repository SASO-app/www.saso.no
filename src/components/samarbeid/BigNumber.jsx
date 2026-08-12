import { useLang, formatNumber } from '../../lib/LangContext'
import { copy, metrics } from '../../data/samarbeid'

function Stat({ value, label }) {
  return (
    <div className="border-t border-white/15 pt-5">
      <p className="text-2xl font-medium text-bone-50 sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-bone-50/60">{label}</p>
    </div>
  )
}

export default function BigNumber() {
  const { lang } = useLang()
  const t = copy[lang].bigNumber
  const ig = metrics.instagram
  const fb = metrics.facebook

  return (
    <section id="samarbeid-tall" className="bg-ink-950 py-24 text-bone-50 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-400 uppercase">
          {t.eyebrow}
        </p>

        <p className="mt-8 font-serif text-6xl leading-none font-medium sm:text-8xl">
          {metrics.cross[lang]}
        </p>
        <p className="mt-3 text-xl text-bone-50/80 sm:text-2xl">{t.headline}</p>
        <p className="mt-6 max-w-2xl text-bone-50/60">{t.note}</p>

        <div className="mt-16">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-oak-400 uppercase">
            {t.instagramLabel}
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Stat value={ig.views[lang]} label={t.statViews} />
            <Stat value={ig.reach[lang]} label={t.statReach} />
            <Stat value={`${formatNumber(ig.interactions, lang)}+`} label={t.statInteractions} />
            <Stat value={formatNumber(ig.follows, lang)} label={t.statFollows} />
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-oak-400 uppercase">
            {t.facebookLabel}
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Stat value={fb.views[lang]} label={t.statViews} />
            <Stat value={fb.reach[lang]} label={t.statReach} />
            <Stat value={formatNumber(fb.posts, lang)} label={t.statPosts} />
          </div>
        </div>
      </div>
    </section>
  )
}
