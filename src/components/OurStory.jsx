import ImageBlock from './ImageBlock'

export default function OurStory() {
  return (
    <section id="historien" className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <ImageBlock
          variant="soft"
          className="aspect-[4/5] w-full rounded-sm text-oak-500 lg:order-2"
        />

        <div className="lg:order-1">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            Hvem vi er
          </p>
          <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
            Et ekte familieprosjekt, ikke et konsern
          </h2>

          <div className="mt-6 space-y-5 text-lg text-ink-700">
            <p>
              SASO Eiendom er grunnlagt av oss, Sander og Marita. Vi er ikke
              et tradisjonelt eiendomsselskap – vi er et par som genuint
              elsker å forvandle boliger og dokumentere hele reisen. Sammen
              med barna våre bygger vi en virksomhet, og en livsstil, som
              handler om vakre hjem, langsiktig formue og økonomisk frihet.
            </p>
            <p>
              SASO er mer enn et selskap. Det er familiens langsiktige
              prosjekt. Hver oppussing, hver investering og hver beslutning
              er en del av en mye større visjon som vi deler åpent med dere
              som følger oss.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-oak-500 pl-6 font-serif text-xl text-ink-950 italic">
            "Målet har aldri vært å pusse opp billigst mulig. Ambisjonen vår
            er å skape hjem vi selv genuint ønsker å bo i."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
