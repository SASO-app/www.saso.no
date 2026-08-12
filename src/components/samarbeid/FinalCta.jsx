import { useLang } from '../../lib/LangContext'
import { copy, contact } from '../../data/samarbeid'

export default function FinalCta() {
  const { lang } = useLang()
  const t = copy[lang].finalCta

  return (
    <section id="samarbeid-kontakt" className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-medium text-ink-950 sm:text-5xl">{t.title}</h2>
        <p className="mt-6 text-lg text-ink-700">{t.sub}</p>

        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent('Samarbeid med SASO')}`}
          className="mt-10 inline-block rounded-full bg-ink-950 px-8 py-4 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600"
        >
          {t.cta}
        </a>

        <dl className="mt-14 flex flex-col items-center gap-3 text-ink-700 sm:flex-row sm:justify-center sm:gap-10">
          <div>
            <dt className="text-sm text-ink-500">{t.emailLabel}</dt>
            <dd>
              <a href={`mailto:${contact.email}`} className="hover:text-oak-600">
                {contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-500">{t.phoneLabel}</dt>
            <dd>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-oak-600">
                {contact.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-500">{t.baseLabel}</dt>
            <dd>Norge</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
