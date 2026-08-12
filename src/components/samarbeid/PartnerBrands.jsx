import { useLang } from '../../lib/LangContext'
import { copy, partnerBrands } from '../../data/samarbeid'

function BrandRow({ names }) {
  return (
    <div className="flex flex-wrap gap-3">
      {names.map((name) => (
        <span
          key={name}
          className="rounded-sm border border-line bg-bone-50 px-5 py-3 font-serif text-base text-ink-950"
        >
          {name}
        </span>
      ))}
    </div>
  )
}

export default function PartnerBrands() {
  const { lang } = useLang()
  const t = copy[lang].brands

  return (
    <section className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">{t.title}</h2>

        <div className="mt-14">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
            {t.longtermTitle}
          </p>
          <p className="mb-5 max-w-xl text-ink-700">{t.longtermSub}</p>
          <BrandRow names={partnerBrands.longterm} />
        </div>

        <div className="mt-12">
          <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
            {t.selectedTitle}
          </p>
          <BrandRow names={partnerBrands.selected} />
        </div>
      </div>
    </section>
  )
}
