const PILLARS = [
  {
    title: 'Egen kapital i hvert prosjekt',
    description:
      'Vi investerer alltid av egen lomme først. Vi ber aldri noen om å ta en risiko vi ikke selv tar.',
  },
  {
    title: 'Åpenhet underveis',
    description:
      'Dere følger prosjektene i sanntid – budsjett, fremdrift og beslutninger, ikke bare det ferdige resultatet.',
  },
  {
    title: 'Langsiktig eierskap',
    description:
      'Målet er å bygge en varig portefølje, ikke å jage raske gevinster. Vi tenker i tiår, ikke kvartaler.',
  },
]

export default function Investors() {
  return (
    <section id="investorer" className="bg-ink-950 py-24 text-bone-50 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-400 uppercase">
            For investorer
          </p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
            Invester sammen med folk som selv står i det
          </h2>
          <p className="mt-6 text-lg text-bone-50/75">
            Vi bygger ikke SASO for å selge en drøm – vi bygger det fordi vi
            selv skal bo i, eie og drive dette i mange år fremover. Det
            betyr at interessene våre er de samme som deres: at prosjektet
            faktisk lykkes.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-t border-white/15 pt-6">
              <h3 className="text-lg font-medium text-bone-50">
                {pillar.title}
              </h3>
              <p className="mt-3 text-bone-50/70">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-bone-50 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-oak-400"
          >
            Snakk med oss om å investere
          </a>
        </div>
      </div>
    </section>
  )
}
