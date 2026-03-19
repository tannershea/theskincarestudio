import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { bookingUrl, contactDetails, openingHours, serviceAreas, localBusinessSchema, googleMapsUrl } from '../data'

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
        <meta property="og:image" content="https://www.theskincarestudioct.com/studio-lounge.png" />
        <meta property="og:image:alt" content="The Skincare Studio Medical Spa in Paradise Green, Stratford, CT" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 text-center lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-accentNavy md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg leading-[1.75] text-slate-600">
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

      <section className="border-t border-warmStone/50 bg-white py-16">
        <div className="mx-auto max-w-5xl px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img
                  src="/studio-lounge.png"
                  alt="Welcoming reception and lounge area at The Skincare Studio in Paradise Green"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-10 ">
                <h2 className="font-serif text-2xl tracking-tight text-accentNavy">The Skincare Studio Medical Spa</h2>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Visit Us</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-slate-600">{contactDetails.addressLine1}</p>
                    <p className="text-[15px] leading-[1.6] text-slate-600">{contactDetails.addressLine2}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Call Us</p>
                    <a href={`tel:${contactDetails.phone}`} className="mt-2 inline-block font-semibold text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">
                      {contactDetails.phone}
                    </a>
                    <p className="text-sm leading-relaxed text-slate-500">Available during business hours</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Email</p>
                    <a href={`mailto:${contactDetails.email}`} className="mt-2 inline-block font-semibold text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-softGreen/30 p-8 ">
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Hours</p>
                <div className="mt-4 space-y-3 text-[15px] leading-[1.6] text-slate-600">
                  {openingHours.map((item) => (
                    <div key={item.days} className="flex justify-between gap-4">
                      <p className="font-semibold text-accentNavy">{item.days}</p>
                      <p>{item.hours}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-accentNavy px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-accentNavy/90"
                >
                  Go to Booking
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-accentNavy p-10 text-white -lg">
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Studio note</p>
                <p className="mt-4 text-[15px] leading-[1.75] text-slate-100">
                  Whether you are new to aesthetic treatments or maintaining results you love, our team is committed to creating a comfortable, elevated experience with personalized care for every client.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-10 ">
                <h3 className="font-serif text-xl tracking-tight text-accentNavy">Send a Message</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
                    className="rounded-full bg-accentNavy px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-accentNavy/90 sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
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
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-accentNavy transition-all duration-200 hover:scale-[1.02] hover:border-accentBlue hover:shadow-md"
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
