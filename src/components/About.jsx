export default function About() {
  return (
    <section id="om-oss" className="bg-sand-50 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-copper-500 uppercase">
            Om oss
          </p>
          <h2 className="text-3xl font-semibold text-navy-950 sm:text-4xl">
            Lokal kunnskap, profesjonell drift
          </h2>
          <p className="mt-6 text-lg text-navy-900/70">
            SASO Eiendom er et eiendomsselskap som hjelper boligeiere,
            utbyggere og næringsdrivende med utleie, salg og forvaltning av
            eiendom. Vi kombinerer god lokalkunnskap med solide rutiner, slik
            at du som eier eller leietaker slipper å bekymre deg for
            detaljene.
          </p>
          <p className="mt-4 text-lg text-navy-900/70">
            Enten du ønsker å leie ut en bolig, selge en eiendom eller
            overlate den daglige forvaltningen til noen andre, står vi klare
            med tett oppfølging og ærlig rådgivning gjennom hele prosessen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
            <p className="font-serif text-3xl font-semibold text-navy-950">15+</p>
            <p className="mt-2 text-sm text-navy-900/60">År med erfaring i eiendomsbransjen</p>
          </div>
          <div className="rounded-2xl bg-navy-950 p-6 shadow-sm">
            <p className="font-serif text-3xl font-semibold text-white">150+</p>
            <p className="mt-2 text-sm text-white/60">Eiendommer under forvaltning</p>
          </div>
          <div className="rounded-2xl bg-navy-950 p-6 shadow-sm">
            <p className="font-serif text-3xl font-semibold text-white">300+</p>
            <p className="mt-2 text-sm text-white/60">Gjennomførte utleie- og salgsavtaler</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
            <p className="font-serif text-3xl font-semibold text-navy-950">98%</p>
            <p className="mt-2 text-sm text-navy-900/60">Kunder som anbefaler oss videre</p>
          </div>
        </div>
      </div>
    </section>
  )
}
