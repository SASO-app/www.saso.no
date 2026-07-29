const REASONS = [
  {
    title: 'Fast kontaktperson',
    description: 'Du får én dedikert kontaktperson som kjenner eiendommen din og svarer raskt.',
  },
  {
    title: 'Åpenhet i alle ledd',
    description: 'Tydelige avtaler, ryddig økonomi og full innsyn i det som skjer med eiendommen.',
  },
  {
    title: 'Lokal markedskunnskap',
    description: 'Vi kjenner leie- og salgsmarkedet i regionen og prissetter riktig fra start.',
  },
  {
    title: 'Trygg juridisk håndtering',
    description: 'Kontrakter og prosesser følger gjeldende lovverk, slik at du er dekket.',
  },
]

export default function WhyUs() {
  return (
    <section id="hvorfor-oss" className="bg-sand-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-copper-500 uppercase">
            Hvorfor velge oss
          </p>
          <h2 className="text-3xl font-semibold text-navy-950 sm:text-4xl">
            Ro i sjelen, uansett hvor du er
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {REASONS.map((reason, index) => (
            <div key={reason.title} className="flex gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 font-serif text-lg font-semibold text-copper-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-navy-950">{reason.title}</h3>
                <p className="mt-2 text-navy-900/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
