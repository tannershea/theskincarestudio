import { Link } from 'react-router-dom'
import { contactDetails, openingHours, bookingUrl, logoSrc, socialLinks } from '../data'

export function Footer() {
  const hoursOrdered = openingHours

  return (
    <footer className="border-t border-warmStone bg-white">
      <div className="mx-auto max-w-6xl px-8 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={logoSrc}
              alt="The Skincare Studio logo"
              className="h-28 w-auto object-contain -ml-3"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-luxury text-accentBlue">Medical Spa</p>
            <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">
              Award-winning medical spa offering expert aesthetic care in a calm, elevated setting. Paradise Green, Stratford.
            </p>
            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-accentNavy transition-all duration-200 hover:scale-110 hover:border-accentBlue"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-accentNavy transition-all duration-200 hover:scale-110 hover:border-accentBlue"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-accentNavy transition-all duration-200 hover:scale-110 hover:border-accentBlue"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-1.99-.43v-4.6h1.99z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-6 lg:gap-8">
            <div className="flex-1 text-center md:text-left">
              <p className="font-serif text-lg font-semibold tracking-tight text-accentNavy">Explore</p>
              <nav className="mt-3 flex flex-col items-center gap-2 text-[15px] leading-[1.6] text-slate-600 md:items-start">
                <Link to="/" className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">Home</Link>
                <Link to="/services" className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">Services</Link>
                <Link to="/aftercare" className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">Aftercare</Link>
                <Link to="/products" className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">Products</Link>
                <Link to="/contact" className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">Contact Us</Link>
                <Link to="/terms" className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">Terms &amp; Conditions</Link>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left"
                >
                  Book Online
                </a>
              </nav>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-serif text-lg font-semibold tracking-tight text-accentNavy">Visit Us</p>
            <div className="mt-3 flex flex-col items-center space-y-2 text-[15px] leading-[1.6] text-slate-600 md:items-start">
              <p className="flex items-center justify-center gap-2 md:justify-start">
                <span className="text-accentBlue">📍</span>
                {contactDetails.addressLine1} {contactDetails.addressLine2}
              </p>
              <a href={`tel:${contactDetails.phone}`} className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left md:justify-start">
                <span className="text-accentBlue">📞</span>
                {contactDetails.phone}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left md:justify-start">
                <span className="text-accentBlue">📧</span>
                {contactDetails.email}
              </a>
            </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold tracking-tight text-accentNavy">Hours</p>
            <div className="mt-3 space-y-2 text-[15px] leading-[1.6] text-slate-600">
              {hoursOrdered.map((item) => (
                <div key={item.days} className="flex justify-between gap-8">
                  <span className="font-medium text-accentNavy">{item.days}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-warmStone pt-8 text-center text-sm leading-relaxed text-slate-500">
          © {new Date().getFullYear()} The Skincare Studio Medical Spa. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
