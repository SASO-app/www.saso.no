import ImageBlock from './ImageBlock'

const INSTAGRAM_VARIANTS = ['warm', 'soft', 'deep', 'soft', 'warm', 'deep']

const YOUTUBE_VIDEOS = [
  { title: 'Fra ruin til drømmehjem: hele oppussingen', variant: 'deep' },
  { title: 'Slik regner vi på et flip-prosjekt', variant: 'warm' },
  { title: 'En dag i livet: familie og eiendom', variant: 'soft' },
]

function PlayIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-bone-50"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function Social() {
  return (
    <section id="folg-oss" className="bg-bone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-oak-600 uppercase">
            Følg reisen
          </p>
          <h2 className="mt-4 text-3xl font-medium text-ink-950 sm:text-4xl">
            Sosiale medier er en del av SASO, ikke en ettertanke
          </h2>
          <p className="mt-6 text-lg text-ink-700">
            Vi dokumenterer alt – prosjektoppdateringer, det som skjer bak
            kulissene, og de store investeringsbeslutningene. Bli med videre
            på Instagram og YouTube.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink-950">Instagram</h3>
            <a
              href="https://instagram.com/sasoeiendom"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-oak-600 hover:text-oak-500"
            >
              Følg @sasoeiendom
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {INSTAGRAM_VARIANTS.map((variant, i) => (
              <ImageBlock
                key={i}
                variant={variant}
                className="aspect-square w-full rounded-sm text-oak-500"
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-medium text-ink-950">YouTube</h3>
            <a
              href="https://youtube.com/@sasoeiendom"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-oak-600 hover:text-oak-500"
            >
              Abonner på kanalen
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {YOUTUBE_VIDEOS.map((video) => (
              <div key={video.title}>
                <div className="relative">
                  <ImageBlock
                    variant={video.variant}
                    className="aspect-video w-full rounded-sm text-oak-500"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-950/70">
                      <PlayIcon />
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-ink-950">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
