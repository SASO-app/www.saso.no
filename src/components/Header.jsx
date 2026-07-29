import { useEffect, useState } from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '#historien', label: 'Historien' },
  { href: '#prosjekter', label: 'Prosjekter' },
  { href: '#investorer', label: 'Investorer' },
  { href: '#leietakere', label: 'Leietakere' },
  { href: '#partnere', label: 'Partnere' },
  { href: '#folg-oss', label: 'Følg oss' },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-bone-50/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hjem" aria-label="SASO Eiendom, til toppen">
          <Logo />
        </a>

        <nav className="hidden gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-oak-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-bone-50 transition-colors hover:bg-oak-600 lg:inline-block"
        >
          Ta kontakt
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Åpne meny"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink-950 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-bone-50 px-6 pb-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-950 hover:bg-bone-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink-950 px-4 py-3 text-center text-sm font-semibold text-bone-50"
          >
            Ta kontakt
          </a>
        </nav>
      )}
    </header>
  )
}
