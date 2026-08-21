import { trustedBrands } from '../data/trustedBrands'

export default function TrustedBrands() {
  return (
    <section className="bg-bone-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
          Merkevarer vi samarbeider med
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {trustedBrands.map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-10 w-auto object-contain sm:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
