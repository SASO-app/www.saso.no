// Passordgate for /samarbeid. Krever miljøvariabelen PITCH_PASSWORD i Netlify
// (Site configuration -> Environment variables). Uten den satt slippes alle gjennom,
// slik at build/deploy aldri feiler eller låser noen ute ved en feil.
const COOKIE_NAME = 'saso_pitch_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 dager

export default async (request, context) => {
  const password = Netlify.env.get('PITCH_PASSWORD')
  if (!password) return context.next()

  const expected = await sha256(password)
  const url = new URL(request.url)

  if (request.method === 'POST') {
    const form = await request.formData()
    const attempt = (form.get('password') || '').toString()
    const valid = attempt.length > 0 && (await sha256(attempt)) === expected

    if (valid) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: url.pathname,
          'Set-Cookie': `${COOKIE_NAME}=${expected}; Path=/samarbeid; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
        },
      })
    }

    return new Response(renderLoginPage({ error: true }), {
      status: 401,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    })
  }

  const cookie = getCookie(request.headers.get('cookie'), COOKIE_NAME)
  if (cookie === expected) return context.next()

  return new Response(renderLoginPage({ error: false }), {
    status: 401,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}

export const config = { path: ['/samarbeid', '/samarbeid/'] }

async function sha256(value) {
  const data = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function getCookie(header, name) {
  if (!header) return null
  const match = header
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`))
  return match ? match.slice(name.length + 1) : null
}

function renderLoginPage({ error }) {
  return `<!doctype html>
<html lang="no">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex, nofollow" />
<title>SASO Eiendom — Samarbeid</title>
<style>
  :root { color-scheme: light; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #faf8f3;
    color: #1a1815;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  main {
    width: 100%;
    max-width: 360px;
    padding: 2.5rem 2rem;
  }
  .logo {
    font-weight: 700;
    letter-spacing: -0.02em;
    font-size: 1.5rem;
    margin: 0 0 0.25rem;
  }
  .tag {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #7a7568;
    margin: 0 0 2rem;
  }
  h1 { font-size: 1.15rem; font-weight: 500; margin: 0 0 1.5rem; }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    border: 1px solid #e3ddce;
    border-radius: 4px;
    background: #fff;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  button {
    width: 100%;
    padding: 0.85rem 1rem;
    border: none;
    border-radius: 999px;
    background: #1a1815;
    color: #faf8f3;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }
  button:hover { background: #8b6440; }
  .error { color: #b3261e; font-size: 0.85rem; margin: -0.5rem 0 1rem; }
</style>
</head>
<body>
<main>
  <p class="logo">SASO</p>
  <p class="tag">Eiendom</p>
  <h1>Denne siden er passordbeskyttet.</h1>
  <form method="POST">
    ${error ? '<p class="error">Feil passord. Prøv igjen.</p>' : ''}
    <input type="password" name="password" placeholder="Passord" autofocus required />
    <button type="submit">Fortsett</button>
  </form>
</main>
</body>
</html>`
}
