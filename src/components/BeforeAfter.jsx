import { useState, useRef } from 'react'
import { ScrollReveal } from './ScrollReveal'

const comparisons = [
  {
    before: '/before-after/before-1.jpg',
    after: '/before-after/after-1.jpg',
    label: 'Hair Regeneration',
  },
  {
    before: '/before-after/before-2.png',
    after: '/before-after/after-2.png',
    label: 'Skin Rejuvenation',
  },
]

function Slider({ before, after, label }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  function updatePosition(clientX) {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  function handlePointerDown(e) {
    dragging.current = true
    containerRef.current.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  function handlePointerMove(e) {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  function handlePointerUp() {
    dragging.current = false
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full cursor-col-resize select-none overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* After (full background) */}
        <img
          src={after}
          alt={`${label} — after`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={`${label} — before`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: `${containerRef.current?.offsetWidth || 1000}px`, maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-accentNavy text-white shadow-lg">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          After
        </span>
      </div>

      <p className="text-sm font-semibold tracking-wide text-accentNavy">{label}</p>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section className="border-t border-warmStone/50 bg-cream/40 py-20">
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">
              Real results
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-accentNavy md:text-4xl">
              Before &amp; after
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-slate-500">
              Drag the slider to see real transformations from our clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {comparisons.map((item, i) => (
            <ScrollReveal key={item.label} direction="up" delay={i * 120}>
              <Slider {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
