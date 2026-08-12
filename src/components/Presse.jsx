import { pressClips } from '../data/presse'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Presse() {
  return (
    <section id="presse" className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            I pressen
          </p>
          <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
            Omtalt av mediene
          </h2>
          <p className="mt-6 text-lg text-ink-700">
            Vi blir jevnlig kontaktet av journalister som er nysgjerrige på hvordan vi bygger
            SASO. Her er noe av det som er skrevet om oss.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pressClips.map((clip) => (
            <a
              key={clip.url}
              href={clip.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-sm border border-line bg-bone-50 p-6 transition-colors hover:border-oak-500"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-oak-600 uppercase">
                {clip.publication}
              </p>
              <h3 className="mt-3 font-serif text-xl text-ink-950">{clip.title}</h3>
              <p className="mt-4 text-sm text-ink-500">{formatDate(clip.date)} · Les saken →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
