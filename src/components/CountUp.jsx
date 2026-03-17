import { useState, useEffect, useRef } from 'react'

/**
 * Parses stat values like "15+", "10K+", "4.9", "98%" into { number, suffix }
 */
function parseStatValue(value) {
  const str = String(value).trim()
  const match = str.match(/^([\d.]+)(.*)$/)
  if (!match) return { number: 0, suffix: str }
  const number = parseFloat(match[1])
  let suffix = match[2] || ''
  if (str.includes('K') || str.includes('k')) suffix = 'K' + suffix.replace(/[Kk]/g, '')
  return { number, suffix }
}

export function CountUp({ value, duration = 1500, label, className = '' }) {
  const { number: target, suffix } = parseStatValue(value)
  const [display, setDisplay] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true)
      },
      { threshold: 0.2, rootMargin: '50px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    const startTime = performance.now()
    const start = 0

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 2)
      const current = start + (target - start) * eased
      setDisplay(target >= 10 && suffix.includes('K') ? Math.round(current) : current)

      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [hasAnimated, target, duration, suffix])

  const formatted = suffix.includes('K')
    ? `${Math.round(display)}${suffix}`
    : suffix
      ? Math.round(display) + suffix
      : target % 1 !== 0
        ? display.toFixed(1)
        : Math.round(display)

  if (!label) {
    return <span ref={ref} className={className}>{formatted}</span>
  }

  return (
    <div ref={ref} className={className}>
      <p className="font-serif text-3xl tracking-tight text-accentNavy md:text-4xl">
        {formatted}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">{label}</p>
    </div>
  )
}
