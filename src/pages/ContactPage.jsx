import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { bookingUrl, contactDetails, openingHours, serviceAreas } from '../data'

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

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "The Skincare Studio Medical Spa",
    "telephone": "203-377-0166",
    "email": "info@theskincarestudioct.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3586 Main Street",
      "addressLocality": "Stratford",
      "addressRegion": "CT",
      "postalCode": "06614"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday"], "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "17:00" }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Visit, Call or Book | The Skincare Studio Stratford, CT</title>
        <meta name="description" content="Contact The Skincare Studio in Paradise Green, Stratford. Visit 3586 Main Street, call 203-377-0166, or book online. Hours, directions &amp; contact form. Serving Fairfield County." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/contact" />
        <meta property="og:title" content="Contact | The Skincare Studio Medical Spa - Stratford, CT" />
        <meta property="og:description" content="Visit us at 3586 Main Street, Paradise Green. Call 203-377-0166 or book online. Serving Fairfield County." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/contact" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 text-center lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-3 font-serif text-4xl font-normal leading-tight tracking-tight text-accentNavy md:text-5xl">
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
                <h2 className="font-serif text-2xl font-normal tracking-tight text-accentNavy">The Skincare Studio Medical Spa</h2>
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
                <h3 className="font-serif text-xl font-normal tracking-tight text-accentNavy">Send a Message</h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium tracking-wide text-slate-700">Name</label>
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
                    <label htmlFor="email" className="block text-sm font-medium tracking-wide text-slate-700">Email</label>
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
                    <label htmlFor="phone" className="block text-sm font-medium tracking-wide text-slate-700">Phone (Optional)</label>
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
                    <label htmlFor="message" className="block text-sm font-medium tracking-wide text-slate-700">Message</label>
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

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="The Skincare Studio location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0!2d-73.1318!3d41.1845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3586+Main+Street%2C+Stratford%2C+CT!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
