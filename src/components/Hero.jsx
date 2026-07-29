import ImageBlock from './ImageBlock'

export default function Hero() {
  return (
    <section id="hjem" className="bg-bone-50 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          Sander &amp; Marita, med barna
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-medium text-ink-950 sm:text-5xl lg:text-6xl">
          Vi pusser ikke bare opp hus. Vi bygger noe som skal vare i generasjoner.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink-700">
          SASO Eiendom er et familieprosjekt – ikke et tradisjonelt
          eiendomsselskap. Vi finner boliger med potensial, gjør dem om til
          hjem vi selv ville bodd i, og deler hele reisen åpent underveis.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#folg-oss"
            className="rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600"
          >
            Følg reisen
          </a>
          <a
            href="#historien"
            className="rounded-full border border-ink-950/20 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-bone-100"
          >
            Les historien vår
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <ImageBlock
          variant="warm"
          className="aspect-[16/9] w-full rounded-sm text-oak-600 sm:aspect-[21/9]"
        />
      </div>
    </section>
  )
}
