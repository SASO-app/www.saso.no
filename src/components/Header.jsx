import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#om-oss', label: 'Om oss' },
  { href: '#tjenester', label: 'Tjenester' },
  { href: '#eiendommer', label: 'Eiendommer' },
  { href: '#hvorfor-oss', label: 'Hvorfor oss' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-sand-50/95 shadow-sm backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hjem"
          className={`font-serif text-xl font-semibold tracking-tight ${
            scrolled ? 'text-navy-950' : 'text-white'
          }`}
        >
          SASO <span className="text-copper-400">Eiendom</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-copper-500 ${
                scrolled ? 'text-navy-800' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-copper-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-600 md:inline-block"
        >
          Ta kontakt
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Åpne meny"
          aria-expanded={open}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled ? 'text-navy-950' : 'text-white'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-sand-50 px-6 pb-6 shadow-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-sand-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-copper-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Ta kontakt
          </a>
        </nav>
      )}
    </header>
  )
}
