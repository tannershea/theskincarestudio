import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logoSrc, bookingUrl, contactDetails } from '../data'

const navLinkClass = ({ isActive }) =>
  `relative inline-block tracking-tight transition-all duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:rounded-full after:bg-accentBlue after:transition-[width] after:duration-300 after:ease-out hover:after:w-full hover:scale-105 origin-left ${isActive ? 'text-accentNavy font-semibold after:w-full' : 'text-slate-500 hover:text-accentNavy after:w-0'}`

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
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
            target="_blank"
            rel="noopener noreferrer"
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
