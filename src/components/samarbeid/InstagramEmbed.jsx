import { useEffect, useRef, useState } from 'react'

let embedScriptPromise = null
function loadInstagramEmbedScript() {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.instgrm) return Promise.resolve(window.instgrm)
  if (embedScriptPromise) return embedScriptPromise

  embedScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => resolve(window.instgrm)
    script.onerror = reject
    document.body.appendChild(script)
  })
  return embedScriptPromise
}

// Laster Instagrams offisielle embed kun når kortet faktisk scrolles inn i visning.
export default function InstagramEmbed({ url, fallbackLabel, className = '' }) {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let cancelled = false
    loadInstagramEmbedScript().then((instgrm) => {
      if (!cancelled) instgrm?.Embeds.process()
    })
    return () => {
      cancelled = true
    }
  }, [visible])

  return (
    <div ref={containerRef} className={className}>
      {visible ? (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ margin: 0, width: '100%' }}
        >
          <a href={url} target="_blank" rel="noreferrer">
            {fallbackLabel}
          </a>
        </blockquote>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex aspect-[9/16] w-full items-center justify-center rounded-sm border border-line bg-bone-100 px-6 text-center text-sm font-medium text-ink-700 hover:bg-bone-200"
        >
          {fallbackLabel}
        </a>
      )}
    </div>
  )
}
