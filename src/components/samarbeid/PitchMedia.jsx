const VARIANTS = {
  warm: 'from-oak-400/50 via-bone-200 to-oak-500/30',
  deep: 'from-ink-950 via-ink-700 to-oak-600/60',
  soft: 'from-bone-200 via-bone-100 to-oak-400/25',
}

// Merket plassholder for ekte foto/video. Erstatt `label` med faktisk asset før lansering.
export default function PitchMedia({ className = '', variant = 'warm', label, tone = 'dark' }) {
  const textTone = tone === 'light' ? 'text-bone-50/70' : 'text-ink-950/50'

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${VARIANTS[variant]} ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 4px)',
        }}
      />
      {label && (
        <span
          className={`absolute inset-x-3 bottom-3 line-clamp-2 text-[0.65rem] font-semibold tracking-[0.1em] uppercase ${textTone}`}
        >
          {label}
        </span>
      )}
    </div>
  )
}
