import { useState } from 'react'
import ImageBlock from '../ImageBlock'
import { vaskGalleri } from '../../data/vasker'

const GALLERI_VARIANTS = ['warm', 'soft', 'deep', 'soft', 'warm', 'deep']

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = { navn: '', epost: '', telefon: '', mal: '', melding: '' }

export default function SpesialbyggetVask() {
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
        body: encode({ 'form-name': 'vask-foresporsel', ...form }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="spesialbygget" className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
              På bestilling
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
              Spesialbygget vask på mål
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Har badet et spesielt mål, en skjev vegg eller en idé som ikke
              finnes i standardserien? Vi murer og flislegger vasken på
              stedet, tilpasset akkurat ditt rom.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {vaskGalleri.length > 0
                ? vaskGalleri.map((bilde, i) => (
                    <img
                      key={bilde.image}
                      src={bilde.image}
                      alt={bilde.tittel}
                      className="aspect-square w-full rounded-sm object-cover"
                    />
                  ))
                : GALLERI_VARIANTS.map((variant, i) => (
                    <ImageBlock
                      key={i}
                      variant={variant}
                      className="aspect-square w-full rounded-sm text-oak-500"
                    />
                  ))}
            </div>
          </div>

          <div className="rounded-sm bg-bone-50 p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <h3 className="text-xl font-medium text-ink-950">Takk for henvendelsen!</h3>
                <p className="mt-3 text-ink-700">
                  Vi tar kontakt for å avtale befaring eller mer informasjon om målene.
                </p>
              </div>
            ) : (
              <form
                name="vask-foresporsel"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="vask-foresporsel" />
                <p className="hidden">
                  <label>
                    Ikke fyll ut dette feltet: <input name="bot-field" />
                  </label>
                </p>

                <h3 className="text-lg font-medium text-ink-950">Be om pris</h3>

                <div>
                  <label htmlFor="sv-navn" className="block text-sm font-medium text-ink-900">
                    Navn
                  </label>
                  <input
                    id="sv-navn"
                    name="navn"
                    type="text"
                    required
                    value={form.navn}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-100 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="sv-epost" className="block text-sm font-medium text-ink-900">
                      E-post
                    </label>
                    <input
                      id="sv-epost"
                      name="epost"
                      type="email"
                      required
                      value={form.epost}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-100 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="sv-telefon" className="block text-sm font-medium text-ink-900">
                      Telefon
                    </label>
                    <input
                      id="sv-telefon"
                      name="telefon"
                      type="tel"
                      value={form.telefon}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-100 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sv-mal" className="block text-sm font-medium text-ink-900">
                    Ønsket mål / plass til vasken
                  </label>
                  <input
                    id="sv-mal"
                    name="mal"
                    type="text"
                    placeholder='f.eks. "bredde ca. 140 cm"'
                    value={form.mal}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-100 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="sv-melding" className="block text-sm font-medium text-ink-900">
                    Fortell litt om prosjektet
                  </label>
                  <textarea
                    id="sv-melding"
                    name="melding"
                    rows={4}
                    required
                    value={form.melding}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-100 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sender...' : 'Send forespørsel'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-600">Noe gikk galt. Prøv igjen, eller ta kontakt på e-post.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
