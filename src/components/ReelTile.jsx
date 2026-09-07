import { useState } from 'react'
import ImageBlock from './ImageBlock'
import { loadInstagramEmbedScript } from '../lib/instagramEmbed'

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-bone-50">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

// Viser et poster-bilde med avspillingsknapp. Først når noen klikker,
// lastes den ekte Instagram-embeden inn — holder rutenettet raskt selv
// med flere ruter på én side.
export default function ReelTile({ reel, variant }) {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true)
    loadInstagramEmbedScript().then((instgrm) => instgrm?.Embeds.process())
  }

  if (active) {
    return (
      <div className="aspect-[9/16] w-full overflow-hidden rounded-sm bg-bone-50">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={reel.url}
          data-instgrm-version="14"
          style={{ margin: 0, width: '100%' }}
        >
          <a href={reel.url} target="_blank" rel="noreferrer">
            Se på Instagram
          </a>
        </blockquote>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Spill av Reel"
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-sm"
    >
      {reel.poster ? (
        <img src={reel.poster} alt="" className="h-full w-full object-cover" />
      ) : (
        <ImageBlock variant={variant} className="h-full w-full text-oak-500" />
      )}
      <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors group-hover:bg-ink-950/20">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/70">
          <PlayIcon />
        </span>
      </span>
    </button>
  )
}
