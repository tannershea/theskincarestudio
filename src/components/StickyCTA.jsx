import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { bookingUrl, contactDetails } from '../data'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transform border-t border-slate-200 bg-white/95 px-6 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-transform duration-300 ${isHomePage ? '' : 'hidden'} ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <a
          href={`tel:${contactDetails.phone}`}
          className="flex items-center gap-2 rounded-full border-2 border-accentGreen bg-softGreen px-4 py-2.5 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105"
        >
          <span className="text-accentBlue">📞</span> Call
        </a>
        <a
          href={bookingUrl}
          className="flex-1 rounded-full bg-accentNavy py-3 text-center text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105"
        >
          Book Online
        </a>
        <Link
          to="/contact"
          className="flex items-center gap-2 rounded-full border-2 border-accentGreen bg-softGreen px-4 py-2.5 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
