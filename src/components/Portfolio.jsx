import ImageBlock from './ImageBlock'

const PROJECTS = [
  {
    tag: 'Renovering',
    title: 'Stort rekkehus',
    description:
      'Fra mørk og oppdelt til lys, åpen familiebolig med nytt kjøkken og to bad.',
    variant: 'warm',
    image: '/projects/stort-rekkehus.jpg',
  },
  {
    tag: 'Flip',
    title: 'Leilighet, sentrum',
    description:
      'Kjøpt med uforløst potensial, renovert til høy standard og solgt videre.',
    variant: 'deep',
    image: '/projects/leilighet-sentrum.jpg',
  },
  {
    tag: 'Utleie',
    title: 'Leilighet med utsikt',
    description:
      'Møblert utleiebolig med skandinavisk interiør og smarte løsninger.',
    variant: 'soft',
  },
]

export default function Portfolio() {
  return (
    <section id="prosjekter" className="bg-bone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
              Porteføljen
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
              Noen av prosjektene våre
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              Fra oppussing og flip til utleieboliger vi forvalter selv – hvert
              prosjekt er dokumentert fra start til slutt.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.title}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                />
              ) : (
                <ImageBlock
                  variant={project.variant}
                  className="aspect-[4/5] w-full rounded-sm text-oak-500"
                />
              )}
              <span className="mt-5 inline-block text-xs font-semibold tracking-[0.2em] text-oak-600 uppercase">
                {project.tag}
              </span>
              <h3 className="mt-2 text-xl font-medium text-ink-950">
                {project.title}
              </h3>
              <p className="mt-2 text-ink-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
