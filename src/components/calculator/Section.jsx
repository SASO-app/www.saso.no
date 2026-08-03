export function Section({ title, subtitle, icon, children, className = '' }) {
  return (
    <section className={`rounded-sm border border-line bg-bone-100 p-6 ${className}`}>
      <header className="mb-5 flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bone-50 text-oak-600">
            {icon}
          </span>
        ) : null}
        <div>
          <h2 className="text-base font-medium text-ink-950">{title}</h2>
          {subtitle ? <p className="text-xs text-ink-500">{subtitle}</p> : null}
        </div>
      </header>
      {children}
    </section>
  )
}

const BAR_TONES = {
  primary: 'bg-ink-950',
  accent: 'bg-oak-500',
  success: 'bg-green-700',
  destructive: 'bg-red-600',
}

export function Bar({ label, value, max, tone = 'primary', caption }) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="text-ink-500">{label}</span>
        <span className="font-medium tabular-nums text-ink-950">{caption}</span>
      </div>
      <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-bone-200">
        <div
          className={`h-full rounded-full transition-all duration-500 ${BAR_TONES[tone]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

const STAT_TONES = {
  default: 'text-ink-950',
  success: 'text-green-700',
  destructive: 'text-red-600',
  accent: 'text-oak-600',
}

export function Stat({ label, value, sub, tone = 'default' }) {
  return (
    <div className="rounded-sm border border-line bg-bone-100 p-4">
      <p className="text-[11px] tracking-wide text-ink-500 uppercase">{label}</p>
      <p className={`mt-1 font-serif text-2xl font-medium tabular-nums ${STAT_TONES[tone]}`}>
        {value}
      </p>
      {sub ? <p className="mt-1 text-xs text-ink-500">{sub}</p> : null}
    </div>
  )
}
