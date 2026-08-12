import Logo from '../Logo'
import { useLang } from '../../lib/LangContext'
import { copy, contact } from '../../data/samarbeid'

export default function PitchTopBar() {
  const { lang, setLang } = useLang()
  const t = copy[lang].topbar

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full border border-line p-0.5 text-xs font-semibold">
            {['no', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  lang === code ? 'bg-ink-950 text-bone-50' : 'text-ink-500 hover:text-ink-950'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent('Samarbeid med SASO')}`}
            className="hidden rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600 sm:inline-block"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
