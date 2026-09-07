// Delt Instagram embed.js-laster. Brukes av alle komponenter som spiller av
// ekte Instagram-innhold, slik at scriptet kun lastes én gang per side.
let embedScriptPromise = null

export function loadInstagramEmbedScript() {
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
