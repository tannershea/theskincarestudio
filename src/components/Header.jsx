import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  logoSrc,
  bookingUrl,
  contactDetails,
  giftCardsPath,
  giftCardsLabel,
  resultsResourcesPath,
  resultsResourcesLabel,
  cherryFinancingUrl,
  careCreditUrl,
} from '../data'

const navLinkClass = ({ isActive }) =>
  `relative inline-block shrink-0 whitespace-nowrap tracking-tight transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:rounded-full after:bg-accentBlue after:transition-[width] after:duration-300 after:ease-out hover:after:w-full hover:text-accentNavy origin-left ${isActive ? 'text-accentNavy font-semibold after:w-full' : 'text-slate-500 after:w-0'}`

const resultsResourcesNavClass = ({ isActive }) =>
  `${navLinkClass({ isActive })} leading-[1.15]`

function ResultsResourcesNavLabel() {
  return (
    <span className="inline-block text-center leading-[1.15] xl:text-left">
      <span className="block whitespace-nowrap">Results &</span>
      <span className="block whitespace-nowrap">Resources</span>
    </span>
  )
}

function GiftCardsNavLabel() {
  return (
    <span className="inline-block text-center leading-[1.15] xl:text-left">
      <span className="block whitespace-nowrap">Gift Cards &</span>
      <span className="block whitespace-nowrap">Payment Options</span>
    </span>
  )
}

function CherryLogo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-1 text-slate-900">
      <svg
        viewBox="0 0 32 32"
        className={compact ? 'h-6 w-6' : 'h-7 w-7'}
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="14.25" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="11.7" cy="11.5" r="2.55" fill="currentColor" />
        <circle cx="20.3" cy="20.5" r="2.55" fill="currentColor" />
        <path d="M13.3 13.1l5.4 5.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className={`font-bold tracking-tight ${compact ? 'text-[12px]' : 'text-[13px] xl:text-[14px]'}`}>
        Cherry
      </span>
    </span>
  )
}

function CareCreditLogo({ compact = false }) {
  return (
    <span className={`font-bold tracking-tight text-[#00857C] ${compact ? 'text-[12px]' : 'text-[13px] xl:text-[14px]'}`}>
      CareCredit
    </span>
  )
}

function FinancingLogos({ compact = false, onNavigate }) {
  const linkClass =
    'inline-flex items-center rounded-md border border-slate-200 bg-white px-1.5 py-1 shadow-sm transition-all hover:border-slate-300 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue'

  return (
    <div className={`flex items-center ${compact ? 'gap-1.5' : 'gap-2 xl:gap-2.5'}`}>
      <a
        href={cherryFinancingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apply for Cherry financing"
        title="Apply for Cherry financing"
        onClick={onNavigate}
        className={linkClass}
      >
        <CherryLogo compact={compact} />
      </a>
      <a
        href={careCreditUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apply with CareCredit"
        title="Apply with CareCredit"
        onClick={onNavigate}
        className={linkClass}
      >
        <CareCreditLogo compact={compact} />
      </a>
    </div>
  )
}

function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const wellnessSpecialsUrl =
    'https://booking.podium.com/019c8c61-886d-7520-b631-d3871ad7f936/019c8c61-898c-7767-a370-8c2b5f030753/category/04f1205a-4b89-46e5-a0a8-603f09d34bca'

  if (dismissed) return null

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-accentNavy via-accentNavy/95 to-accentNavy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.06),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center sm:gap-4 sm:px-8 lg:px-10">
        <p className="text-[13px] font-medium leading-snug tracking-wide sm:text-sm">
          <span className="mr-1.5 inline-flex shrink-0 items-center rounded bg-accentGreen/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accentGreen sm:text-[11px]">
            August only
          </span>
          <span className="mr-1 inline-block text-base leading-none" aria-hidden>🌻</span>
          <span className="font-extrabold text-accentGreen">Celebrate National Wellness Month</span>
          <span className="text-white/95"> with limited-time Wellness Specials</span>
          <span className="mx-1.5 text-white/35" aria-hidden>|</span>
          <span className="text-white/65">Appointments Aug 1–31</span>
          <a
            href={wellnessSpecialsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex shrink-0 items-center gap-1 rounded-full bg-accentGreen px-3 py-1 text-[12px] font-bold tracking-wide text-accentNavy shadow-sm transition-all hover:bg-accentGreen/90 hover:shadow-md sm:text-[13px]"
          >
            Book Now <span aria-hidden>→</span>
          </a>
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
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:gap-4 lg:px-8 lg:py-3.5 xl:gap-6 xl:px-10">
        <Link to="/" className="shrink-0 transition-transform duration-200 hover:scale-[1.02]">
          <img
            src={logoSrc}
            alt="The Skincare Studio logo - Your Skin Deserves Better"
            className="h-[4.25rem] w-auto object-contain sm:h-[4.75rem] lg:h-20 xl:h-[5.25rem]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3.5 text-[14px] font-medium lg:flex xl:gap-6 xl:text-[15px]">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to={resultsResourcesPath} className={resultsResourcesNavClass}>
            <span className="hidden whitespace-nowrap xl:inline">{resultsResourcesLabel}</span>
            <span className="xl:hidden">
              <ResultsResourcesNavLabel />
            </span>
          </NavLink>
          <NavLink to="/aftercare" className={navLinkClass}>Aftercare</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to={giftCardsPath} className={resultsResourcesNavClass}>
            <GiftCardsNavLabel />
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex xl:gap-3.5">
          <FinancingLogos />
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-accentNavy px-4 py-2.5 text-[14px] font-semibold tracking-tight text-white transition-all duration-200 hover:bg-accentNavy/90 hover:shadow-md xl:px-5 xl:text-[15px]"
          >
            Book Online
          </a>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
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

      <div className="flex items-center justify-center border-t border-slate-100 px-4 py-1.5 lg:hidden">
        <FinancingLogos compact />
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            <NavLink to="/" end onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Services
            </NavLink>
            <NavLink to={resultsResourcesPath} onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              {resultsResourcesLabel}
            </NavLink>
            <NavLink to="/aftercare" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Aftercare
            </NavLink>
            <NavLink to="/products" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Products
            </NavLink>
            <NavLink to={giftCardsPath} onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              {giftCardsLabel}
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="inline-block py-2.5 text-[15px] font-medium tracking-tight text-accentNavy transition-all duration-200 hover:underline hover:scale-105 origin-left">
              Contact
            </NavLink>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
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
