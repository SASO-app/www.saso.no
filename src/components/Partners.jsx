import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = { merkevare: '', kontaktperson: '', epost: '', melding: '' }

const POINTS = [
  'Vi lager autentisk innhold om ekte prosjekter, ikke oppsatte reklamesnutter.',
  'Hvert prosjekt dokumenteres profesjonelt fra start til slutt.',
  'Vi når et engasjert publikum som følger reisen tett.',
  'Vi samarbeider kun med merkevarer vi faktisk bruker og tror på.',
  'Vi foretrekker langsiktige samarbeid fremfor enkeltstående kampanjer.',
]

export default function Partners() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'samarbeid', ...form }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="partnere" className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
              Partnere
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
              Merkevaresamarbeid
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Én av de viktigste grunnene til at vi bygger SASO åpent, er å
              samarbeide med merkevarer vi genuint liker over tid.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-ink-700">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-oak-500" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
                Tidligere samarbeid
              </p>
              <div className="flex flex-wrap gap-3">
                {['Merkevare', 'Merkevare', 'Merkevare', 'Merkevare'].map(
                  (label, i) => (
                    <div
                      key={i}
                      className="flex h-14 w-32 items-center justify-center rounded-sm border border-line bg-bone-100 text-xs tracking-widest text-ink-500 uppercase"
                    >
                      {label}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-3 text-sm text-ink-500 italic">
                Logoer og kundeuttalelser legges til etter hvert som
                samarbeidene offentliggjøres.
              </p>
            </div>
          </div>

          <div className="rounded-sm bg-bone-100 p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <h3 className="text-xl font-medium text-ink-950">
                  Takk for henvendelsen!
                </h3>
                <p className="mt-3 text-ink-700">
                  Vi tar kontakt så snart vi har sett på samarbeidsforslaget.
                </p>
              </div>
            ) : (
              <form
                name="samarbeid"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="samarbeid" />
                <p className="hidden">
                  <label>
                    Ikke fyll ut dette feltet: <input name="bot-field" />
                  </label>
                </p>

                <h3 className="text-lg font-medium text-ink-950">
                  Foreslå et samarbeid
                </h3>

                <div>
                  <label htmlFor="merkevare" className="block text-sm font-medium text-ink-900">
                    Merkevare
                  </label>
                  <input
                    id="merkevare"
                    name="merkevare"
                    type="text"
                    required
                    value={form.merkevare}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="kontaktperson" className="block text-sm font-medium text-ink-900">
                    Kontaktperson
                  </label>
                  <input
                    id="kontaktperson"
                    name="kontaktperson"
                    type="text"
                    required
                    value={form.kontaktperson}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="partner-epost" className="block text-sm font-medium text-ink-900">
                    E-post
                  </label>
                  <input
                    id="partner-epost"
                    name="epost"
                    type="email"
                    required
                    value={form.epost}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="partner-melding" className="block text-sm font-medium text-ink-900">
                    Om samarbeidet
                  </label>
                  <textarea
                    id="partner-melding"
                    name="melding"
                    rows={4}
                    required
                    value={form.melding}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sender...' : 'Send forslag'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    Noe gikk galt. Prøv igjen, eller send oss en e-post
                    direkte.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
