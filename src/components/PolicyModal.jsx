import { useEffect } from 'react'
import { bookingPolicy } from '../data'

export function PolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const parts = []
  const blocks = bookingPolicy.content.split(/\n\n+/)
  for (const block of blocks) {
    const trimmed = block.trim()
    if (!trimmed) continue
    const boldMatch = trimmed.match(/^\*\*(.+?):\*\*\s*(.*)/s)
    if (boldMatch) {
      parts.push({ type: 'heading', text: boldMatch[1] })
      if (boldMatch[2].trim()) {
        parts.push({ type: 'para', text: boldMatch[2].trim() })
      }
    } else {
      parts.push({ type: 'para', text: trimmed })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-title"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 id="policy-title" className="font-serif text-xl font-medium text-accentNavy">
            Policy
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-accentNavy"
            aria-label="Close policy"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5">
          <div className="space-y-3 text-[15px] leading-[1.7] text-slate-600">
            {parts.map((item, i) =>
              item.type === 'heading' ? (
                <p key={i} className="mt-4 font-semibold text-slate-800 first:mt-0">
                  {item.text}
                </p>
              ) : (
                <p key={i} className={i === 0 ? 'font-medium text-accentNavy' : ''}>{item.text}</p>
              )
            )}
          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-accentNavy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accentNavy/90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
