import PitchMedia from './PitchMedia'
import { useLang } from '../../lib/LangContext'
import { copy } from '../../data/samarbeid'

export default function MeetSaso() {
  const { lang } = useLang()
  const t = copy[lang].meet

  return (
    <section className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <PitchMedia
          variant="soft"
          label={`${copy[lang].placeholder}: foto av Sander &amp; Marita med barna`}
          className="aspect-[4/5] w-full rounded-sm text-oak-500 lg:order-2"
        />

        <div className="lg:order-1">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">{t.title}</h2>

          <div className="mt-6 space-y-5 text-lg text-ink-700">
            {t.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-bone-100 px-4 py-2 text-sm text-ink-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
