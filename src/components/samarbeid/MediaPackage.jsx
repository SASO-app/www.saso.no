import { useLang } from '../../lib/LangContext'
import { copy, channels, tiktok } from '../../data/samarbeid'

export default function MediaPackage() {
  const { lang } = useLang()
  const t = copy[lang].mediaPackage

  return (
    <section className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          {t.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">{t.title}</h2>
        <p className="mt-6 max-w-xl text-lg text-ink-700">{t.sub}</p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <div className="rounded-sm border border-line bg-bone-100 p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
              {t.sasoLabel}
            </p>
            <ul className="mt-4 space-y-2">
              {channels.saso.map((channel) => (
                <li key={channel} className="font-serif text-xl text-ink-950">
                  {channel}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-line bg-bone-100 p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
              {t.maritaLabel}
            </p>
            <ul className="mt-4 space-y-2">
              {channels.marita.map((channel) => (
                <li key={channel} className="font-serif text-xl text-ink-950">
                  {channel} <span className="text-base text-ink-500">{tiktok.handle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-xl text-sm text-ink-500 italic">{t.note}</p>
      </div>
    </section>
  )
}
