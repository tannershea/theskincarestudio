import { useEffect, useState } from 'react'
import { learnFocusRing } from './learnUi'

export function LearnHubBackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-accentNavy shadow-[0_8px_32px_-12px_rgba(22,50,80,0.35)] backdrop-blur-sm transition-all duration-300 md:hidden ${learnFocusRing} ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
