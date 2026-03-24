import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logoSrc, bookingUrl, contactDetails } from '../data'

const navLinkClass = ({ isActive }) =>
  `relative inline-block tracking-tight transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:rounded-full after:bg-accentBlue after:transition-[width] after:duration-300 after:ease-out hover:after:w-full hover:scale-105 origin-left ${isActive ? 'text-accentNavy font-semibold after:w-full' : 'text-slate-500 hover:text-accentNavy after:w-0'}`

function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-accentNavy via-accentNavy/95 to-accentNavy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.06),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-3 px-10 py-2.5 text-center sm:gap-4">
        <p className="text-[13px] font-medium tracking-wide sm:text-sm">
          <span className="mr-1.5 inline-block animate-pulse text-base" aria-hidden>✨</span>
          <span className="font-bold text-accentGreen">Spring Special Sale</span>
          <span className="mx-1.5 hidden text-white/40 sm:inline" aria-hidden>|</span>
          <span className="hidden sm:inline">April 1 – May 31 time slots only.</span>
          <span className="sm:hidden"> Apr 1 – May 31.</span>
          <Link
            to="/services"
            className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-0.5 text-[12px] font-bold tracking-wide text-white transition-all hover:bg-white/25 sm:text-[13px]"
          >
            Book now <span aria-hidden>→</span>
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white sm:right-4"
          aria-label="Dismiss announcement"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <AnnouncementBar />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-8 py-4 lg:px-12">
        <Link to="/" className="shrink-0 transition-transform duration-200 hover:scale-105">
          <img
            src={logoSrc}
            alt="The Skincare Studio logo - Your Skin Deserves Better"
            className="h-20 w-auto object-contain sm:h-24 lg:h-28"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium tracking-tight md:flex">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/aftercare" className={navLinkClass}>Aftercare</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${contactDetails.phone}`}
            className="relative inline-block text-[15px] font-medium tracking-tight text-slate-600 transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-accentBlue after:transition-[width] after:duration-300 after:ease-out hover:text-accentBlue hover:scale-105 hover:after:w-full origin-left"
          >
            {contactDetails.phone}
          </a>
          <a
            href={bookingUrl}
            className="rounded-lg bg-accentNavy px-5 py-2.5 text-[15px] font-semibold tracking-tight text-white transition-all duration-200 hover:scale-105 hover:bg-accentNavy/90 hover:shadow-md"
          >
            Book Online
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${contactDetails.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-accentBlue transition-all duration-200 hover:scale-110"
            aria-label="Call"
          >
            <span className="text-lg">📞</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition-all duration-200 hover:scale-105"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <NavLink to="/" end onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Services
            </NavLink>
            <NavLink to="/aftercare" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Aftercare
            </NavLink>
            <NavLink to="/products" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Products
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Contact
            </NavLink>
            <a
              href={bookingUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-accentNavy py-3 text-center text-[15px] font-semibold tracking-tight text-white transition-all duration-200 hover:scale-105"
            >
              Book Online
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
