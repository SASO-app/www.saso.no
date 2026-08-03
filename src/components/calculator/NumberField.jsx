export function NumberField({
  label,
  value,
  onChange,
  suffix = 'kr',
  hint,
  step = 1000,
  className = '',
}) {
  const id = label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs font-medium text-ink-500">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          id={id}
          type="number"
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 pr-14 tabular-nums text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
        />
        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-ink-500">
          {suffix}
        </span>
      </div>
      {hint ? <p className="mt-1 text-[11px] text-ink-500">{hint}</p> : null}
    </div>
  )
}
