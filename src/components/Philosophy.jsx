const WE_ENJOY = [
  'Finne boliger med uforløst potensial',
  'Designe funksjonelle, moderne hjem',
  'Pusse opp til høy standard',
  'Øke verdien gjennom gjennomtenkte forbedringer',
  'Bygge en portefølje av utleieboliger av høy kvalitet',
  'Skape eksepsjonelle "flip"-prosjekter',
]

const VISION = [
  'Vakre oppussingsprosjekter av høy kvalitet',
  'Moderne utleieboliger med gjennomtenkt funksjonalitet',
  'Ærlig, transparent dokumentasjon av hvert prosjekt',
  'Å inspirere andre til å investere i eiendom',
  'En betydelig eiendomsportefølje',
  'Langsiktige samarbeid med merkevarer vi tror på',
]

const PERSONALITY = [
  'Profesjonelle',
  'Jordnære',
  'Ambisiøse',
  'Pålitelige',
  'Familieorienterte',
  'Transparente',
  'Langsiktige tenkere',
  'Enkle å samarbeide med',
]

export default function Philosophy() {
  return (
    <section className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
              Hvorfor vi startet
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
              Mer kontroll over vår egen fremtid
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Fremfor å jobbe hele livet for å bygge noen andres virksomhet,
              ønsket vi å bygge noe familien vår kan eie i generasjoner. På
              veien oppdaget vi at vi virkelig liker å:
            </p>
            <ul className="mt-8 space-y-3">
              {WE_ENJOY.map((item) => (
                <li key={item} className="flex gap-3 text-ink-700">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-oak-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
              Vår visjon
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
              De neste tiårene
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Over tid ønsker vi at SASO skal bli kjent for:
            </p>
            <ul className="mt-8 space-y-3">
              {VISION.map((item) => (
                <li key={item} className="flex gap-3 text-ink-700">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-oak-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            Hvem dere møter
          </p>
          <div className="flex flex-wrap gap-3">
            {PERSONALITY.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-line bg-bone-50 px-4 py-2 text-sm text-ink-700"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
