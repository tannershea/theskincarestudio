import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { bookingUrl, contactDetails, openingHours, localBusinessSchema, googleMapsUrl } from '../data'

/** Shared shell so every card reads as part of one system */
const CARD = 'rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8'
const CARD_Navy = 'rounded-2xl border border-white/20 bg-accentNavy p-6 text-white shadow-sm sm:p-8'
const CARD_GREEN = 'rounded-2xl border border-accentGreen/25 bg-softGreen/25 p-6 shadow-sm sm:p-8'
const CARD_MEDIA = 'rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-cream/40 p-4 shadow-sm sm:p-6'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:${contactDetails.email}?subject=Contact from Website&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailto
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const schemaOrg = localBusinessSchema

  return (
    <>
      <Helmet>
        <title>Contact Us | Visit, Call or Book | The Skincare Studio Stratford, CT</title>
        <meta name="description" content="Contact The Skincare Studio in Paradise Green, Stratford. Visit 3586 Main Street, call 203-377-0166, or book online. Hours, directions &amp; contact form. Serving Fairfield County." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/contact" />
        <meta property="og:title" content="Contact | The Skincare Studio Medical Spa - Stratford, CT" />
        <meta property="og:description" content="Visit us at 3586 Main Street, Paradise Green. Call 203-377-0166 or book online. Serving Fairfield County." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.theskincarestudioct.com/contact-studio-sign.png" />
        <meta property="og:image:alt" content="The Skin Care Studio lobby sign with social and website QR codes at the Stratford studio" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      <section className="bg-cream py-10 md:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-slate-600 sm:mt-6 sm:text-body-lg sm:leading-[1.75]">
            Questions? We're here to help you feel confident before you even walk in. Reach out to learn more about treatments or book online when you're ready.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-accentNavy px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-accentNavy/90"
          >
            Book Online
          </a>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-white py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
            <div className="flex flex-col gap-6">
              <div className={`${CARD_MEDIA} overflow-hidden`}>
                <img
                  src="/contact-studio-sign.png"
                  alt="The Skin Care Studio reception sign with QR codes linking to Facebook, Instagram @theskincarestudio.ct, and the studio website"
                  className="mx-auto block w-full max-w-sm object-contain object-center sm:max-w-md"
                />
              </div>
              <div className={CARD}>
                <h2 className="font-serif text-xl tracking-tight text-accentNavy sm:text-2xl">The Skincare Studio Medical Spa</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Visit Us</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">{contactDetails.addressLine1}</p>
                    <p className="text-[15px] leading-[1.6] text-slate-600">{contactDetails.addressLine2}</p>
                  </div>
                  <div className="border-t border-warmStone/40 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Call Us</p>
                    <a href={`tel:${contactDetails.phone}`} className="mt-2 inline-block font-semibold text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">
                      {contactDetails.phone}
                    </a>
                    <p className="text-sm leading-relaxed text-slate-500">Available during business hours</p>
                  </div>
                  <div className="border-t border-warmStone/40 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Email</p>
                    <a href={`mailto:${contactDetails.email}`} className="mt-2 inline-block font-semibold text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left [overflow-wrap:anywhere]">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className={CARD_Navy}>
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Studio note</p>
                <p className="mt-4 text-[15px] leading-[1.75] text-slate-100">
                  Whether you are new to aesthetic treatments or maintaining results you love, our team is committed to creating a comfortable, elevated experience with personalized care for every client.
                </p>
              </div>

              <div className={`${CARD} flex flex-col`}>
                <h3 className="font-serif text-xl tracking-tight text-accentNavy sm:text-2xl">Send a Message</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm tracking-wide text-slate-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 transition-colors focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm tracking-wide text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 transition-colors focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm tracking-wide text-slate-700">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 transition-colors focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm tracking-wide text-slate-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 transition-colors focus:border-accentBlue focus:outline-none focus:ring-2 focus:ring-accentBlue/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-xl bg-accentNavy px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accentNavy/90 sm:mt-0 sm:ml-auto sm:w-auto sm:self-end"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className={`${CARD_GREEN} flex flex-col`}>
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Hours</p>
                <ul className="mt-4 list-none divide-y divide-slate-200/80 border-y border-slate-200/80">
                  {openingHours.map((item) => (
                    <li key={item.days} className="flex justify-between gap-4 py-3.5 text-[15px] leading-[1.6]">
                      <p className="font-semibold text-accentNavy">{item.days}</p>
                      <p className="text-right tabular-nums text-slate-600">{item.hours}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-accentNavy px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accentNavy/90 sm:w-auto"
                >
                  Go to Booking
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 sm:mt-10">
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              <iframe
                title="The Skincare Studio location on Google Maps"
                src="https://www.google.com/maps?q=The+Skincare+Studio+Medical+Spa+3586+Main+Street+Stratford+CT+06614&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white px-5 py-3.5 text-sm font-semibold text-accentNavy shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-accentBlue hover:shadow-md"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              View on Google Maps · See reviews, hours &amp; directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
