import { useLang } from '../../lib/LangContext'
import { copy } from '../../data/samarbeid'

export default function Collaboration() {
  const { lang } = useLang()
  const t = copy[lang].collaboration

  return (
    <section className="bg-ink-950 py-24 text-bone-50 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-400 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">{t.title}</h2>
        <p className="mt-6 max-w-xl text-lg text-bone-50/75">{t.sub}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.formats.map((format) => (
            <span
              key={format}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-bone-50/90"
            >
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
