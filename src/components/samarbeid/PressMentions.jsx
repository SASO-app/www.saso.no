import { useLang } from '../../lib/LangContext'
import { copy } from '../../data/samarbeid'
import { pressClips, pressLogos } from '../../data/presse'

export default function PressMentions() {
  const { lang } = useLang()
  const t = copy[lang].press

  return (
    <section className="bg-bone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-medium text-ink-950 sm:text-3xl">{t.title}</h2>

        <div className="mt-8 flex flex-col divide-y divide-line border-t border-line">
          {pressClips.map((clip) => (
            <a
              key={clip.url}
              href={clip.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-2 py-4 transition-colors hover:text-oak-600 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="font-medium text-ink-950">{clip.title}</span>
              {pressLogos[clip.publication] ? (
                <img
                  src={pressLogos[clip.publication]}
                  alt={clip.publication}
                  className="h-4 w-auto shrink-0"
                />
              ) : (
                <span className="shrink-0 text-sm text-ink-500">{clip.publication}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
