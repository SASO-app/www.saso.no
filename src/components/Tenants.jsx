const FEATURES = [
  'Moderne interiør, ikke minste-standard',
  'Gjennomtenkte, funksjonelle planløsninger',
  'Attraktive beliggenheter',
  'Boliger vi selv ville bodd i',
]

export default function Tenants() {
  return (
    <section id="leietakere" className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
              For leietakere
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
              "Her kunne jeg faktisk tenke meg å bo"
            </h2>
            <p className="mt-6 text-lg text-ink-700">
              Utleieboligene våre skal skille seg ut. Vi tenker på dem som hjem
              vi selv ville flyttet inn i – ikke bare enheter som skal fylles
              raskest mulig.
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 text-ink-700">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-oak-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="mt-8 inline-block rounded-full border border-ink-950/20 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-bone-50"
            >
              Spør om ledige boliger
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/projects/leietaker-kjokken.jpg"
              alt="Kjøkken i en av utleieboligene"
              className="aspect-[3/4] w-full rounded-sm object-cover"
            />
            <img
              src="/projects/leietaker-soverom.jpg"
              alt="Soverom i en av utleieboligene"
              className="mt-8 aspect-[3/4] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
