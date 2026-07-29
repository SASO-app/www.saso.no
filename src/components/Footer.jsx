export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-serif text-lg font-semibold text-white">
          SASO <span className="text-copper-400">Eiendom</span>
        </p>
        <p className="text-sm text-white/50">
          &copy; {year} SASO Eiendom. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  )
}
