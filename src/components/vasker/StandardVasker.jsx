import { useState } from 'react'
import ImageBlock from '../ImageBlock'
import { standardVasker } from '../../data/vasker'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const initialForm = {
  navn: '',
  epost: '',
  telefon: '',
  produkt: standardVasker[0]?.navn ?? '',
  melding: '',
}

export default function StandardVasker() {
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
        body: encode({ 'form-name': 'vask-bestilling', ...form }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="standard" className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            Standardserien
          </p>
          <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
            Ferdige vasker tilpasset IKEA sitt baderomsmøbel
          </h2>
          <p className="mt-6 text-lg text-ink-700">
            "Per"-serien er støpt og flislagt på forhånd i faste breddemål,
            klar til å monteres rett på IKEA sitt baderomsmøbel – ingen
            tilpasning nødvendig.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {standardVasker.map((produkt) => (
            <div key={produkt.navn}>
              {produkt.image ? (
                <img
                  src={produkt.image}
                  alt={produkt.navn}
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                />
              ) : (
                <ImageBlock variant="soft" className="aspect-[4/5] w-full rounded-sm text-oak-500" />
              )}
              <h3 className="mt-5 text-xl font-medium text-ink-950">{produkt.navn}</h3>
              <p className="mt-1 text-sm text-ink-500">{produkt.bredde}</p>
              <p className="mt-2 text-ink-700">Passer til: {produkt.passerTil}</p>
              <p className="mt-3 font-medium text-ink-950">{produkt.pris}</p>
              <a
                href="#bestill-vask"
                onClick={() => setForm((prev) => ({ ...prev, produkt: produkt.navn }))}
                className="mt-4 inline-block rounded-full border border-ink-950/20 px-6 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-bone-100"
              >
                Bestill {produkt.navn}
              </a>
            </div>
          ))}
        </div>

        <div id="bestill-vask" className="mt-20 max-w-xl scroll-mt-28 rounded-sm bg-bone-100 p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <h3 className="text-xl font-medium text-ink-950">Takk for bestillingen!</h3>
              <p className="mt-3 text-ink-700">
                Vi tar kontakt for å bekrefte og avtale betaling (faktura eller Vipps).
              </p>
            </div>
          ) : (
            <form
              name="vask-bestilling"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="vask-bestilling" />
              <p className="hidden">
                <label>
                  Ikke fyll ut dette feltet: <input name="bot-field" />
                </label>
              </p>

              <h3 className="text-lg font-medium text-ink-950">Bestill standardvask</h3>

              <div>
                <label htmlFor="vask-produkt" className="block text-sm font-medium text-ink-900">
                  Produkt
                </label>
                <select
                  id="vask-produkt"
                  name="produkt"
                  value={form.produkt}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                >
                  {standardVasker.map((produkt) => (
                    <option key={produkt.navn}>{produkt.navn}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="vask-navn" className="block text-sm font-medium text-ink-900">
                  Navn
                </label>
                <input
                  id="vask-navn"
                  name="navn"
                  type="text"
                  required
                  value={form.navn}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="vask-epost" className="block text-sm font-medium text-ink-900">
                    E-post
                  </label>
                  <input
                    id="vask-epost"
                    name="epost"
                    type="email"
                    required
                    value={form.epost}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="vask-telefon" className="block text-sm font-medium text-ink-900">
                    Telefon
                  </label>
                  <input
                    id="vask-telefon"
                    name="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="vask-melding" className="block text-sm font-medium text-ink-900">
                  Melding (valgfritt)
                </label>
                <textarea
                  id="vask-melding"
                  name="melding"
                  rows={3}
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
                {status === 'sending' ? 'Sender...' : 'Send bestilling'}
              </button>
              <p className="text-xs text-ink-500">
                Dette er ingen betalingsløsning – vi tar kontakt for å bekrefte bestillingen og avtale betaling.
              </p>

              {status === 'error' && (
                <p className="text-sm text-red-600">Noe gikk galt. Prøv igjen, eller ta kontakt på e-post.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
