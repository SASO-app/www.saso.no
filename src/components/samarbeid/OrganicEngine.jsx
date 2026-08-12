import PitchMedia from './PitchMedia'
import { useLang, formatNumber } from '../../lib/LangContext'
import { copy, organicCases } from '../../data/samarbeid'

const VARIANTS = ['warm', 'soft', 'deep']

export default function OrganicEngine() {
  const { lang } = useLang()
  const t = copy[lang].organic

  return (
    <section className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">{t.title}</h2>
          <p className="mt-6 text-lg text-ink-700">{t.sub}</p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {organicCases.map((item, i) => (
            <div key={item.id}>
              <PitchMedia
                variant={VARIANTS[i]}
                label={`${copy[lang].placeholder}: video/thumbnail`}
                className="aspect-video w-full rounded-sm text-oak-500"
              />
              <h3 className="mt-4 text-lg font-medium text-ink-950">{item.title[lang]}</h3>
              <p className="mt-2 text-ink-700">{item.desc[lang]}</p>
              {item.views && (
                <p className="mt-3 text-sm font-semibold text-oak-600">
                  {formatNumber(item.views, lang)}{' '}
                  {lang === 'no' ? 'visninger' : 'views'} · {formatNumber(item.interactions, lang)}{' '}
                  {lang === 'no' ? 'interaksjoner' : 'interactions'} ·{' '}
                  {formatNumber(item.follows, lang)} {lang === 'no' ? 'nye følgere' : 'new follows'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
