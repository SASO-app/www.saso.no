import { Link } from 'react-router-dom'
import ImageBlock from './ImageBlock'

export default function VaskerTeaser() {
  return (
    <section className="bg-ink-950 py-24 text-bone-50 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-400 uppercase">
            Våre egne produkter
          </p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
            Vi bygger også spesialvasker
          </h2>
          <p className="mt-6 max-w-md text-lg text-bone-100/80">
            Flislagte, hånd-murte vasker med avrundede kanter – som ferdige
            standardmodeller tilpasset IKEA sitt baderomsmøbel, eller
            skreddersydd på mål.
          </p>
          <Link
            to="/vasker"
            className="mt-8 inline-block rounded-full bg-bone-50 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-oak-400"
          >
            Se vaskene våre
          </Link>
        </div>

        <ImageBlock variant="deep" className="aspect-[4/3] w-full rounded-sm text-oak-400 lg:aspect-[16/11]" />
      </div>
    </section>
  )
}
