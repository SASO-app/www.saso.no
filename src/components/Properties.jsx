const PROPERTIES = [
  {
    tag: 'Til leie',
    title: 'Moderne leilighet, sentrum',
    detail: '2 roms · 58 m² · Innflytting nå',
  },
  {
    tag: 'Til salgs',
    title: 'Enebolig med hage',
    detail: '5 roms · 145 m² · Barnevennlig område',
  },
  {
    tag: 'Forvaltes av oss',
    title: 'Næringsbygg, kontor',
    detail: '12 enheter · Fullt utleid',
  },
]

export default function Properties() {
  return (
    <section id="eiendommer" className="bg-sand-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-copper-500 uppercase">
              Eiendommer
            </p>
            <h2 className="text-3xl font-semibold text-navy-950 sm:text-4xl">
              Et utvalg av våre eiendommer
            </h2>
            <p className="mt-4 text-lg text-navy-900/70">
              Noen eksempler på boliger og næringslokaler vi til enhver tid
              jobber med – ta kontakt for oppdatert oversikt.
            </p>
          </div>
          <a
            href="#kontakt"
            className="rounded-full border border-navy-950/20 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
          >
            Få tilsendt fullstendig liste
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROPERTIES.map((property) => (
            <div
              key={property.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-950/5"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950" />
              <div className="p-6">
                <span className="inline-block rounded-full bg-copper-500/10 px-3 py-1 text-xs font-semibold text-copper-600">
                  {property.tag}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy-950">
                  {property.title}
                </h3>
                <p className="mt-2 text-sm text-navy-900/60">{property.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
