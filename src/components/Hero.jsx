export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(181,114,58,0.25),_transparent_45%),radial-gradient(circle_at_80%_0%,_rgba(44,90,128,0.35),_transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-32 pb-20 md:grid-cols-2 md:items-center md:pt-24">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-copper-400 uppercase">
            Utleie · Salg · Forvaltning
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-white sm:text-5xl">
            Din trygge partner i eiendom
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            SASO Eiendom leier ut, selger og forvalter bolig- og
            næringseiendom med tett oppfølging fra start til slutt. Vi tar
            hånd om eiendommen din som om den var vår egen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-copper-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
            >
              Kom i gang
            </a>
            <a
              href="#tjenester"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Se tjenestene våre
            </a>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="sr-only">Eiendommer forvaltet</dt>
              <dd className="font-serif text-3xl font-semibold text-white">150+</dd>
              <p className="mt-1 text-xs text-white/60">Eiendommer forvaltet</p>
            </div>
            <div>
              <dt className="sr-only">Års erfaring</dt>
              <dd className="font-serif text-3xl font-semibold text-white">15+</dd>
              <p className="mt-1 text-xs text-white/60">Års erfaring</p>
            </div>
            <div>
              <dt className="sr-only">Fornøyde kunder</dt>
              <dd className="font-serif text-3xl font-semibold text-white">98%</dd>
              <p className="mt-1 text-xs text-white/60">Fornøyde kunder</p>
            </div>
          </dl>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 shadow-2xl ring-1 ring-white/10" />
          <div className="absolute -bottom-8 -left-8 w-64 rounded-2xl bg-sand-50 p-6 shadow-xl">
            <p className="font-serif text-2xl font-semibold text-navy-950">
              Full oversikt
            </p>
            <p className="mt-2 text-sm text-navy-800/70">
              Digital rapportering og fast kontaktperson gjennom hele
              kundeforholdet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
