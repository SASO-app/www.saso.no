import PitchMedia from './PitchMedia'
import { useLang, formatNumber } from '../../lib/LangContext'
import { copy, gerflorCase, duriDecoCase } from '../../data/samarbeid'

export default function SelectedCollaborations() {
  const { lang } = useLang()
  const t = copy[lang].selected

  return (
    <section className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">{t.title}</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div>
            <PitchMedia
              variant="soft"
              label={`${copy[lang].placeholder}: Gerflor-innhold`}
              className="aspect-[4/5] w-full rounded-sm text-oak-500"
            />
            <h3 className="mt-5 text-lg font-medium text-ink-950">{t.gerflorTitle}</h3>
            <p className="mt-2 text-ink-700">{t.gerflorDesc}</p>
            <p className="mt-4 text-sm font-semibold text-oak-600">
              {formatNumber(gerflorCase.views, lang)} {t.statViews} ·{' '}
              {formatNumber(gerflorCase.interactions, lang)} {t.statInteractions} ·{' '}
              {formatNumber(gerflorCase.saves, lang)} {t.statSaves} ·{' '}
              {formatNumber(gerflorCase.shares, lang)} {t.statShares} ·{' '}
              {formatNumber(gerflorCase.follows, lang)} {t.statFollows}
            </p>
            <p className="mt-2 text-sm text-ink-500 italic">{t.gerflorNote}</p>
          </div>

          <div>
            <PitchMedia
              variant="warm"
              label={`${copy[lang].placeholder}: Duri / Deco Systems-innhold`}
              className="aspect-[4/5] w-full rounded-sm text-oak-500"
            />
            <h3 className="mt-5 text-lg font-medium text-ink-950">{t.duriTitle}</h3>
            <p className="mt-2 text-ink-700">{t.duriDesc}</p>
            <p className="mt-4 text-sm font-semibold text-oak-600">
              {formatNumber(duriDecoCase.views, lang)} {t.statViews} ·{' '}
              {formatNumber(duriDecoCase.interactions, lang)} {t.statInteractions} ·{' '}
              {formatNumber(duriDecoCase.saves, lang)} {t.statSaves} ·{' '}
              {formatNumber(duriDecoCase.shares, lang)} {t.statShares} ·{' '}
              {formatNumber(duriDecoCase.follows, lang)} {t.statFollows}
            </p>
            <p className="mt-2 text-sm text-ink-500 italic">{t.duriNote}</p>
          </div>

          <div>
            <PitchMedia
              variant="deep"
              tone="light"
              label={`${copy[lang].placeholder}: Snickers Workwear / Solid Gear i bruk`}
              className="aspect-[4/5] w-full rounded-sm text-oak-500"
            />
            <h3 className="mt-5 text-lg font-medium text-ink-950">{t.snickersTitle}</h3>
            <p className="mt-2 text-ink-700">{t.snickersDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
