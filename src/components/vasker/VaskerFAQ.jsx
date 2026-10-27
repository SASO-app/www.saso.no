const QUESTIONS = [
  {
    sporsmal: 'Hvilke materialer bruker dere?',
    svar: 'Vasken støpes/mures opp og flislegges med samme fliser som resten av badet, slik at den fremstår som en sømløs del av rommet. Fortell oss hvilke fliser dere har eller vil ha, så tilpasser vi løsningen.',
  },
  {
    sporsmal: 'Hvor lang er leveringstiden?',
    svar: 'Varierer med om det er en standardvask eller en spesialbygget løsning – dere får en konkret leveringstid når bestillingen/forespørselen er bekreftet.',
  },
  {
    sporsmal: 'Trenger jeg hjelp med montering?',
    svar: 'Standardvaskene i "Per"-serien er laget for å passe rett på IKEA sitt baderomsmøbel. Spesialbygde vasker mures og flislegges av oss på stedet som en del av prosjektet.',
  },
  {
    sporsmal: 'Hvordan vedlikeholder jeg vasken?',
    svar: 'Som vanlige flislagte flater – unngå slipende rengjøringsmidler og hold fugene tette. Vi gir konkrete anbefalinger ved levering.',
  },
]

export default function VaskerFAQ() {
  return (
    <section className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          Spørsmål og svar
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
          Godt å vite
        </h2>

        <dl className="mt-10 divide-y divide-line border-t border-b border-line">
          {QUESTIONS.map((item) => (
            <div key={item.sporsmal} className="py-6">
              <dt className="text-lg font-medium text-ink-950">{item.sporsmal}</dt>
              <dd className="mt-2 text-ink-700">{item.svar}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
