import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  logoSrc,
  bookingUrl,
  contactDetails,
  giftCardsPath,
  resultsResourcesPath,
} from '../data'

const navLinkClass = ({ isActive }) =>
  `relative inline-block shrink-0 whitespace-nowrap tracking-tight transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:rounded-full after:bg-accentBlue after:transition-[width] after:duration-300 after:ease-out hover:after:w-full hover:text-accentNavy origin-left ${isActive ? 'text-accentNavy font-semibold after:w-full' : 'text-slate-500 after:w-0'}`

const primaryNav = [
  { to: '/services', label: 'Treatments' },
  { to: resultsResourcesPath, label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/services#consultations', label: 'New Clients' },
  { to: '/contact', label: 'Contact' },
]

const resourceLinks = [
  { to: '/aftercare', label: 'Aftercare' },
  { to: '/products', label: 'Products' },
  { to: giftCardsPath, label: 'Gift Cards & Payment' },
]

function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative bg-accentNavy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 pr-10 sm:gap-3 sm:px-8 lg:px-10">
        <p className="min-w-0 truncate text-[12px] font-medium tracking-wide sm:text-[13px]">
          Teachers &amp; students: 10% off this month
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center rounded-full bg-accentGreen px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-accentNavy sm:px-3 sm:text-[12px]"
        >
          Book
        </a>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/50 hover:bg-white/10 hover:text-white sm:right-4"
        aria-label="Dismiss announcement"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const location = useLocation()
  const resourcesRef = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setResourcesOpen(false)
    setMobileResourcesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!resourcesOpen) return

    function handlePointer(event) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setResourcesOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointer)
    return () => document.removeEventListener('mousedown', handlePointer)
  }, [resourcesOpen])

  const resourceActive = resourceLinks.some((item) => location.pathname === item.to)

  return (
    <header className="sticky top-0 z-50 w-full max-w-[100vw] border-b border-slate-200 bg-white">
      <AnnouncementBar />
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-6 lg:gap-4 lg:px-8 lg:py-2.5 xl:px-10">
        <Link to="/" className="min-w-0 overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
          <img
            src={logoSrc}
            alt="The Skincare Studio logo - Your Skin Deserves Better"
            className="h-9 w-32 object-contain object-left sm:h-12 sm:w-40 lg:h-14 lg:w-auto xl:h-[3.75rem]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-[14px] font-medium lg:flex xl:gap-6 xl:text-[15px]">
          {primaryNav.map((item) => (
            <NavLink key={item.label} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <div ref={resourcesRef} className="relative">
            <button
              type="button"
              onClick={() => setResourcesOpen((value) => !value)}
              className={`${navLinkClass({ isActive: resourceActive })} inline-flex items-center gap-1`}
              aria-expanded={resourcesOpen}
            >
              Resources
              <svg className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                {resourceLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setResourcesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-[14px] ${isActive ? 'font-semibold text-accentNavy' : 'text-slate-600 hover:bg-cream hover:text-accentNavy'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-accentNavy px-4 py-2 text-[14px] font-semibold tracking-tight text-white transition-all duration-200 hover:bg-accentNavy/90 hover:shadow-md xl:px-5 xl:text-[15px]"
          >
            Book Now
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accentNavy px-2.5 py-1.5 text-[11px] font-semibold tracking-wide text-white sm:px-3.5 sm:text-[13px]"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 sm:h-9 sm:w-9"
            aria-label="Toggle menu"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
          <a
            href={`tel:${contactDetails.phone}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-accentNavy sm:h-9 sm:w-9"
            aria-label="Call"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-3 lg:hidden">
          <nav className="flex flex-col">
            {primaryNav.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-[15px] font-medium tracking-tight text-accentNavy"
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => setMobileResourcesOpen((value) => !value)}
              className="flex items-center justify-between py-2 text-left text-[15px] font-medium tracking-tight text-accentNavy"
              aria-expanded={mobileResourcesOpen}
            >
              Resources
              <svg className={`h-4 w-4 text-slate-400 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileResourcesOpen && (
              <div className="mb-1 ml-3 flex flex-col border-l border-slate-200 pl-3">
                {resourceLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="py-1.5 text-[14px] font-medium text-slate-600"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-accentNavy py-2.5 text-center text-[15px] font-semibold tracking-tight text-white"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
