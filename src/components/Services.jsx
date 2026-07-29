const SERVICES = [
  {
    title: 'Utleie',
    description:
      'Vi finner riktig leietaker for din bolig eller næringslokale, håndterer visninger, kontrakter og innflytting.',
    points: ['Annonsering og visning', 'Kredittsjekk av leietakere', 'Kontrakt og depositum'],
  },
  {
    title: 'Salg',
    description:
      'Fra verdivurdering til overtakelse – vi sørger for en trygg og velorganisert salgsprosess for bolig og næringseiendom.',
    points: ['Verdivurdering', 'Markedsføring og visning', 'Budrunde og kontrakt'],
  },
  {
    title: 'Forvaltning',
    description:
      'Daglig drift, vedlikehold og økonomisk oppfølging av eiendommen din, slik at du kan lene deg tilbake.',
    points: ['Husleieinnkreving', 'Vedlikehold og HMS', 'Regnskap og rapportering'],
  },
]

export default function Services() {
  return (
    <section id="tjenester" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-copper-400 uppercase">
            Tjenester
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Alt du trenger fra én eiendomspartner
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Vi tilbyr tre kjernetjenester som kan bestilles hver for seg eller
            samlet, tilpasset dine behov som eier.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-copper-400/40 hover:bg-white/[0.07]"
            >
              <h3 className="font-serif text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-white/70">{service.description}</p>
              <ul className="mt-6 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
