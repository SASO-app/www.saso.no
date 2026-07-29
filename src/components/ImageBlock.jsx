export default function ImageBlock({ className = '', variant = 'warm' }) {
  const variants = {
    warm: 'from-oak-400/50 via-bone-200 to-oak-500/30',
    deep: 'from-ink-950 via-ink-700 to-oak-600/60',
    soft: 'from-bone-200 via-bone-100 to-oak-400/25',
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${variants[variant]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 4px)',
        }}
      />
    </div>
  )
}
