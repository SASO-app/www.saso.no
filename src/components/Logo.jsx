export default function Logo({ className = '', tone = 'dark' }) {
  const color = tone === 'light' ? 'text-bone-50' : 'text-ink-950'

  return (
    <div className={`flex flex-col ${color} ${className}`}>
      <span className="font-logo text-2xl leading-none font-bold tracking-tight">
        SASO
      </span>
      <span className="mt-1.5 flex items-center gap-3">
        <span className="h-px w-8 bg-current opacity-60" />
        <span className="font-sans text-[0.6rem] font-semibold tracking-[0.35em]">
          EIENDOM
        </span>
      </span>
    </div>
  )
}
