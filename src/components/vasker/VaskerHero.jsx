export default function VaskerHero() {
  return (
    <section className="bg-bone-50 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
          SASO Vasker
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] font-medium text-ink-950 sm:text-5xl">
          Flislagte spesialvasker, støpt og murt for hånd
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink-700">
          Ingen kjøpevask fra hylla. Vi murer og flislegger vasken sammen med
          resten av badet, med avrundede, sømløse kanter – enten du vil ha en
          ferdig vask tilpasset IKEA sitt baderomsmøbel, eller noe helt
          skreddersydd på mål.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#standard"
            className="rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600"
          >
            Se standardvasker
          </a>
          <a
            href="#spesialbygget"
            className="rounded-full border border-ink-950/20 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-bone-100"
          >
            Spesialbygget på mål
          </a>
        </div>
      </div>
    </section>
  )
}
