import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = {
  navn: '',
  epost: '',
  telefon: '',
  emne: 'Utleie',
  melding: '',
}

export default function Contact() {
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
        body: encode({ 'form-name': 'kontakt', ...form }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="bg-navy-950 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-copper-400 uppercase">
            Kontakt
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            La oss ta en prat om eiendommen din
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Fyll ut skjemaet, så tar vi kontakt innen én virkedag. Du kan også
            ringe eller sende e-post direkte.
          </p>

          <dl className="mt-10 space-y-4 text-white/80">
            <div>
              <dt className="text-sm text-white/50">E-post</dt>
              <dd>
                <a href="mailto:post@saso.no" className="hover:text-copper-400">
                  post@saso.no
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-white/50">Telefon</dt>
              <dd>
                <a href="tel:+4700000000" className="hover:text-copper-400">
                  00 00 00 00
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-white/50">Kontor</dt>
              <dd>Norge</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl">
          {status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <h3 className="font-serif text-2xl font-semibold text-navy-950">
                Takk for din henvendelse!
              </h3>
              <p className="mt-3 text-navy-900/70">
                Vi har mottatt meldingen din og tar kontakt så snart som mulig.
              </p>
            </div>
          ) : (
            <form
              name="kontakt"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="kontakt" />
              <p className="hidden">
                <label>
                  Ikke fyll ut dette feltet: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="navn" className="block text-sm font-medium text-navy-900">
                  Navn
                </label>
                <input
                  id="navn"
                  name="navn"
                  type="text"
                  required
                  value={form.navn}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-navy-950/15 px-4 py-2.5 text-navy-950 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="epost" className="block text-sm font-medium text-navy-900">
                    E-post
                  </label>
                  <input
                    id="epost"
                    name="epost"
                    type="email"
                    required
                    value={form.epost}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-navy-950/15 px-4 py-2.5 text-navy-950 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-navy-900">
                    Telefon
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-navy-950/15 px-4 py-2.5 text-navy-950 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="emne" className="block text-sm font-medium text-navy-900">
                  Hva gjelder henvendelsen?
                </label>
                <select
                  id="emne"
                  name="emne"
                  value={form.emne}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-navy-950/15 bg-white px-4 py-2.5 text-navy-950 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 focus:outline-none"
                >
                  <option>Utleie</option>
                  <option>Salg</option>
                  <option>Forvaltning</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label htmlFor="melding" className="block text-sm font-medium text-navy-900">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={4}
                  required
                  value={form.melding}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-navy-950/15 px-4 py-2.5 text-navy-950 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full bg-copper-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-600 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sender...' : 'Send henvendelse'}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-600">
                  Noe gikk galt. Prøv igjen, eller ta kontakt på e-post.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
