import { useState, useMemo, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import { teamMembers, serviceGroups, contactDetails, getBookingTotals, getProductTotals, popularServiceNames, popularProductNames } from '../data'
import { products } from './ProductsPage'
import { PolicyModal } from '../components/PolicyModal'

const STEPS = ['Team', 'Date & Time', 'Services', 'Products', 'Details']

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
]

function getDaysInMonth(year, month) {
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  const days = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  for (let d = 1; d <= last.getDate(); d++) {
    const date = new Date(year, month, d)
    const isPast = date < today
    const isSunday = date.getDay() === 0
    days.push({ date, day: d, isPast, isSunday, available: !isPast && !isSunday })
  }
  return days
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function BookingPage() {
  const today = useMemo(() => new Date(), [])
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [teamMember, setTeamMember] = useState('any')
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [serviceSearch, setServiceSearch] = useState('')
  const [productSearch, setProductSearch] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [policyOpen, setPolicyOpen] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [showMoreDetails, setShowMoreDetails] = useState(false)
  const [expandedService, setExpandedService] = useState(null)
  const [expandedProduct, setExpandedProduct] = useState(null)
  const [stickyVisible, setStickyVisible] = useState(false)
  const formTopRef = useRef(null)
  const fileInputRef = useRef(null)

  const completedSteps = [
    !!teamMember,
    !!(selectedDate && selectedTime),
    selectedServices.length > 0,
    true,
    true,
  ]
  const currentStep = completedSteps.findIndex((d) => !d)
  const progressStep = currentStep === -1 ? STEPS.length : currentStep

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const serviceName = searchParams.get('service')
    if (!serviceName) return
    const decoded = decodeURIComponent(serviceName)
    const service = serviceGroups.flatMap((g) => g.services).find((s) => s.name === decoded)
    if (service) {
      setSelectedServices((prev) =>
        prev.some((s) => s.name === service.name) ? prev : [...prev, service]
      )
    }
    const next = new URLSearchParams(searchParams)
    next.delete('service')
    setSearchParams(next, { replace: true })
  }, [searchParams, setSearchParams])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setStickyVisible(!e.isIntersecting),
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    )
    const el = formTopRef.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])

  const days = useMemo(() => getDaysInMonth(year, month), [year, month])
  const firstDayOfMonth = new Date(year, month, 1).getDay()

  const filteredServiceGroups = useMemo(() => {
    const q = serviceSearch.trim().toLowerCase()
    if (!q) return serviceGroups.filter((g) => g.services.length > 0)
    return serviceGroups
      .map((g) => ({
        ...g,
        services: g.services.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            g.title.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.services.length > 0)
  }, [serviceSearch])

  const filteredProducts = useMemo(() => {
    const q = productSearch.trim().toLowerCase()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q))
    )
  }, [productSearch])

  const toggleService = (svc) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.name === svc.name) ? prev.filter((s) => s.name !== svc.name) : [...prev, svc]
    )
  }

  const toggleProduct = (p) => {
    setSelectedProducts((prev) =>
      prev.some((x) => x.name === p.name) ? prev.filter((x) => x.name !== p.name) : [...prev, p]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    setUploadedFiles((prev) => [...prev, ...files].slice(0, 5))
  }

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const totals = useMemo(() => getBookingTotals(selectedServices), [selectedServices])
  const productTotal = useMemo(() => getProductTotals(selectedProducts), [selectedProducts])

  return (
    <>
      <Helmet>
        <title>Book an Appointment | The Skincare Studio Medical Spa | Stratford, CT</title>
        <meta name="description" content="Book your appointment at The Skincare Studio. Select your preferred date, time, team member, services, and reserve products for your visit." />
        <meta name="keywords" content="book appointment Stratford CT, medical spa booking, Botox appointment, facial booking Paradise Green, skincare appointment" />
        <link rel="canonical" href="https://www.theskincarestudioct.com/book" />
        <meta property="og:title" content="Book an Appointment | The Skincare Studio | Stratford, CT" />
        <meta property="og:description" content="Reserve your preferred date and time in under 2 minutes. Botox, fillers, facials & more. We'll confirm within 24 hours." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/book" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.theskincarestudioct.com/studio-lounge.png" />
        <meta property="og:image:alt" content="Book your appointment at The Skincare Studio Medical Spa in Stratford, CT" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "The Skincare Studio Medical Spa",
          "url": "https://www.theskincarestudioct.com",
          "telephone": "203-377-0166",
          "address": { "@type": "PostalAddress", "streetAddress": "3586 Main Street", "addressLocality": "Stratford", "addressRegion": "CT", "postalCode": "06614" },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday"], "opens": "09:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "17:00" }
          ],
          "priceRange": "$$"
        })}</script>
      </Helmet>

      <section className="bg-cream py-9 md:py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-4xl md:text-5xl">
            Book Your Appointment
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-[1.65] text-slate-600 sm:mt-4 sm:leading-[1.7]">
            Reserve your preferred date and time in under 2 minutes. We'll confirm within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-5 w-5 text-accentGreen" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              224+ Google Reviews
            </span>
            <span className="text-slate-300">·</span>
            <span>BSN & RN licensed professionals</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/services" className="font-semibold text-accentBlue transition-transform hover:scale-105 hover:underline">View all services</Link>
            <span className="text-slate-300">·</span>
            <Link to="/contact" className="font-semibold text-accentBlue transition-transform hover:scale-105 hover:underline">Contact us</Link>
          </div>
        </div>
      </section>

      {submitted ? (
        <section className="border-t border-warmStone/50 bg-white py-10 md:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-8 lg:px-12">
            <div className="rounded-2xl border border-accentGreen/30 bg-softGreen/30 p-6 sm:p-10">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Thank you!</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                Your booking request has been received. Our team will contact you shortly at the number or email you provide to confirm your appointment.
              </p>
              <p className="mt-6 text-sm text-slate-500">
                Questions? Call us at <a href={`tel:${contactDetails.phone}`} className="font-semibold text-accentBlue hover:underline">{contactDetails.phone}</a>
              </p>
            </div>
          </div>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="relative border-t border-warmStone/50 bg-white py-9 md:py-12 lg:py-16">
          <div ref={formTopRef} className="h-1" aria-hidden="true" />
          {/* Progress bar */}
          <div className="sticky top-0 z-10 -mx-4 border-b border-slate-100 bg-white/95 px-4 py-2.5 backdrop-blur-sm sm:-mx-8 sm:px-8 sm:py-3 lg:-mx-12 lg:px-12">
            <div className="relative mx-auto flex max-w-4xl items-center">
              {/* Connecting line behind circles */}
              <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`h-0.5 flex-1 ${i < progressStep ? 'bg-accentGreen' : 'bg-slate-100'}`} />
                ))}
              </div>
              {/* Circles on top */}
              <div className="relative flex w-full justify-between">
                {STEPS.map((step, i) => (
                  <div key={step} className="flex justify-center">
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs leading-none transition-all duration-300 ${
                        i < progressStep ? 'bg-accentGreen text-white' : i === progressStep ? 'bg-accentBlue text-white ring-2 ring-accentBlue/30' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {i < progressStep ? '✓' : i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-slate-500">{progressStep < STEPS.length ? STEPS[progressStep] : 'Ready to book'}</p>
          </div>

          {/* Sticky summary sidebar */}
          {stickyVisible && (selectedDate || selectedServices.length > 0 || selectedProducts.length > 0) && (
            <div className="hidden sm:block fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-auto sm:left-4 sm:bottom-4 sm:right-auto sm:max-w-xs sm:rounded-2xl sm:border">
              <p className="text-xs font-semibold text-accentNavy">Your booking</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {selectedDate && <li>📅 {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}{selectedTime && ` ${selectedTime}`}</li>}
                {selectedServices.length > 0 && (
                  <li>
                    <span className="font-medium text-slate-700">✨ Services</span>
                    <ul className="mt-1 ml-2 space-y-0.5 text-xs">
                      {selectedServices.map((s) => (
                        <li key={s.name} className="flex justify-between gap-2">
                          <span className="truncate">{s.name}</span>
                          <span className="shrink-0 text-accentNavy">{s.price}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {selectedProducts.length > 0 && (
                  <li>
                    <span className="font-medium text-slate-700">🛍️ Products</span>
                    <ul className="mt-1 ml-2 space-y-0.5 text-xs">
                      {selectedProducts.map((p) => (
                        <li key={p.name} className="flex justify-between gap-2">
                          <span className="truncate">{p.name}</span>
                          <span className="shrink-0 text-accentNavy">{p.price}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
              <div className="mt-2 space-y-0.5 text-sm">
                {totals.total > 0 && <p className="font-semibold text-accentNavy">Services total: ${totals.total.toFixed(2)}</p>}
                {productTotal > 0 && <p className="font-semibold text-accentNavy">Products total: ${productTotal.toFixed(2)}</p>}
                {totals.total > 0 && productTotal > 0 && (
                  <p className="pt-1 font-bold text-accentNavy">Combined total: ${(totals.total + productTotal).toFixed(2)}</p>
                )}
              </div>
            </div>
          )}

          <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-8 sm:pt-8 lg:px-12">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Team Member */}
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Select Team Member</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {teamMembers.map((tm) => (
                    <label
                      key={tm.id}
                      className={`flex cursor-pointer items-center rounded-xl border px-4 py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-within:ring-2 focus-within:ring-accentBlue/50 focus-within:ring-offset-2 ${
                        teamMember === tm.id
                          ? 'border-accentBlue bg-accentBlue/5 shadow-sm'
                          : 'border-slate-200 hover:border-accentBlue/50 hover:shadow-sm'
                      }`}
                    >
                      <input
                        type="radio"
                        name="teamMember"
                        value={tm.id}
                        checked={teamMember === tm.id}
                        onChange={() => setTeamMember(tm.id)}
                        className="sr-only"
                      />
                      <span className="text-[15px] text-accentNavy">{tm.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Select Date</h2>
                <p className="mt-1 text-sm text-slate-500">Weekend slots fill fast — book ahead for best availability</p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (month === 0) {
                        setMonth(11)
                        setYear((y) => y - 1)
                      } else {
                        setMonth((m) => m - 1)
                      }
                    }}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-accentNavy"
                    aria-label="Previous month"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <p className="font-serif text-lg text-accentNavy">{MONTHS[month]} {year}</p>
                  <button
                    type="button"
                    onClick={() => {
                      if (month === 11) {
                        setMonth(0)
                        setYear((y) => y + 1)
                      } else {
                        setMonth((m) => m + 1)
                      }
                    }}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-accentNavy"
                    aria-label="Next month"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1">
                  {WEEKDAYS.map((d) => (
                    <div key={d} className="py-2 text-center text-xs font-semibold text-slate-500">{d}</div>
                  ))}
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {days.map(({ date, day, available }) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => available && setSelectedDate(date)}
                      disabled={!available}
                      className={`rounded-lg py-2.5 text-sm transition-all duration-200 ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? 'bg-accentNavy text-white shadow-md scale-105'
                          : available
                            ? 'text-accentNavy hover:bg-accentBlue/10 hover:scale-105'
                            : 'cursor-not-allowed text-slate-300'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Select Time</h2>
                  <p className="mt-1 text-sm text-slate-500">Available times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                  <p className="mt-1 text-sm text-slate-500">{contactDetails.addressLine1}, Stratford, CT 06614</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
className={`rounded-xl border px-4 py-2.5 text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue/50 focus-visible:ring-offset-2 ${
                        selectedTime === time
                            ? 'border-accentBlue bg-accentBlue/10 text-accentNavy shadow-sm'
                            : 'border-slate-200 text-slate-600 hover:border-accentBlue/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add Service */}
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Add Service</h2>
                <p className="mt-1 text-sm text-slate-500">Select one or more services — 224+ clients love our treatments</p>
                <div className="mt-4">
                  <input
                    type="search"
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    placeholder="Search services..."
                    className="mb-3 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[15px] outline-none focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20"
                    aria-label="Search services"
                  />
                  <div className="max-h-[28rem] overflow-y-auto rounded-xl border border-slate-200 p-4">
                    <div className="space-y-2">
                      {filteredServiceGroups.length === 0 ? (
                        <p className="py-4 text-center text-sm text-slate-500">No services match your search.</p>
                      ) : (
                      filteredServiceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-luxury text-accentBlue">{group.title}</p>
                        <div className="space-y-2">
                          {group.services.map((svc) => {
                            const isSelected = selectedServices.some((s) => s.name === svc.name)
                            const isPopular = popularServiceNames.includes(svc.name)
                            const isExpanded = expandedService === svc.name
                            return (
                              <div
                                key={svc.name}
                                role="button"
                                tabIndex={0}
                                onClick={() => toggleService(svc)}
                                onKeyDown={(e) => e.key === 'Enter' && toggleService(svc)}
                                className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue/50 focus-visible:ring-offset-2 ${
                                  isSelected ? 'border-accentBlue bg-accentBlue/5 shadow-sm' : 'border-slate-100 hover:border-accentBlue/50'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                                      isSelected ? 'border-accentBlue bg-accentBlue text-white' : 'border-slate-300'
                                    }`}
                                  >
                                    {isSelected && <svg className="block h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <p className="font-medium text-accentNavy">{svc.name}</p>
                                      {isPopular && (
                                        <span className="rounded-full bg-accentGreen/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accentNavy">
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <div className="mt-1 flex flex-wrap items-center gap-2">
                                      <p className="text-sm text-slate-500">{svc.duration}</p>
                                      <span className="font-semibold text-accentNavy">{svc.price}</span>
                                    </div>
                                    {svc.desc && (
                                      <>
                                        <button
                                          type="button"
                                          onClick={(e) => { e.stopPropagation(); setExpandedService(isExpanded ? null : svc.name) }}
                                          className="mt-2 text-[13px] text-accentBlue hover:underline"
                                        >
                                          {isExpanded ? 'Hide details' : 'See benefits'}
                                        </button>
                                        {isExpanded && (
                                          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{svc.desc}</p>
                                        )}
                                      </>
                                    )}
                                  </div>
                                  <div
                                    className={`shrink-0 rounded-lg px-3 py-1.5 text-sm transition-all ${
                                      isSelected ? 'bg-accentNavy text-white' : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {isSelected ? 'Added' : 'Add'}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reserve Product */}
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Reserve Products</h2>
                <p className="mt-1 text-sm text-slate-500">Reserve products to purchase at your appointment — pick up in-store, no shipping</p>
                <div className="mt-4">
                  <input
                    type="search"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search products..."
                    className="mb-3 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[15px] outline-none focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20"
                    aria-label="Search products"
                  />
                  <div className="max-h-[28rem] overflow-y-auto rounded-xl border border-slate-200 p-4">
                    <div className="space-y-2">
                      {filteredProducts.length === 0 ? (
                        <p className="py-4 text-center text-sm text-slate-500">No products match your search.</p>
                      ) : (
                      filteredProducts.map((p) => {
                        const isSelected = selectedProducts.some((x) => x.name === p.name)
                        const isPopular = popularProductNames.includes(p.name)
                        const isExpanded = expandedProduct === p.name
                        return (
                          <div
                            key={p.name}
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleProduct(p)}
                            onKeyDown={(e) => e.key === 'Enter' && toggleProduct(p)}
                            className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue/50 focus-visible:ring-offset-2 ${
                              isSelected ? 'border-accentBlue bg-accentBlue/5 shadow-sm' : 'border-slate-100 hover:border-accentBlue/50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                                  isSelected ? 'border-accentBlue bg-accentBlue text-white' : 'border-slate-300'
                                }`}
                              >
                                {isSelected && <svg className="block h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="font-medium text-accentNavy">{p.name}</p>
                                  {isPopular && (
                                    <span className="rounded-full bg-accentGreen/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accentNavy">
                                      Best seller
                                    </span>
                                  )}
                                </div>
                                <div className="mt-1 flex flex-wrap items-center gap-2">
                                  <p className="text-sm text-slate-500">{p.brand}</p>
                                  <span className="font-semibold text-accentNavy">{p.price}</span>
                                </div>
                                {p.desc && (
                                  <>
                                    <button
                                      type="button"
                                      onClick={(e) => { e.stopPropagation(); setExpandedProduct(isExpanded ? null : p.name) }}
                                      className="mt-2 text-[13px] text-accentBlue hover:underline"
                                    >
                                      {isExpanded ? 'Hide details' : 'See benefits'}
                                    </button>
                                    {isExpanded && (
                                      <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{p.desc}</p>
                                    )}
                                  </>
                                    )}
                                  </div>
                                  <div
                                    className={`shrink-0 rounded-lg px-3 py-1.5 text-sm transition-all ${
                                      isSelected ? 'bg-accentNavy text-white' : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {isSelected ? 'Reserved' : 'Reserve'}
                                  </div>
                                </div>
                          </div>
                        )
                      })
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Pre-Assessment Photos</h2>
                <p className="mt-1 text-sm text-slate-500">Send a pic — so we can start our assessment</p>
                <div className="mt-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="sr-only"
                    id="booking-photo-upload"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 rounded-lg bg-accentNavy px-5 py-3 text-sm text-white transition hover:bg-accentNavy/90"
                  >
                    <span className="text-lg">+</span>
                    Upload File
                  </button>
                  {uploadedFiles.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {uploadedFiles.map((file, i) => (
                        <li key={i} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
                          <span className="truncate">{file.name}</span>
                          <button type="button" onClick={() => removeFile(i)} className="ml-2 text-slate-400 hover:text-red-600" aria-label="Remove file">
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-slate-200 bg-cream/50 p-6">
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Your Information</h2>
                <p className="mt-1 text-sm text-slate-500">We'll call or email within 24 hours to confirm — no charge until you arrive</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="booking-name" className="block text-sm text-slate-700">Name</label>
                    <input id="booking-name" type="text" required className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-all focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm text-slate-700">Phone</label>
                    <input id="booking-phone" type="tel" required className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-all focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20" placeholder="(203) 555-0123" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="booking-email" className="block text-sm text-slate-700">Email</label>
                    <input id="booking-email" type="email" required className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-all focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="booking-notes" className="block text-sm text-slate-700">Notes (optional)</label>
                    <textarea id="booking-notes" rows={3} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-all focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20" placeholder="Any special requests or questions..." />
                  </div>
                </div>
              </div>

              {/* Booking Details & Payment */}
              {(selectedDate || selectedTime || selectedServices.length > 0 || selectedProducts.length > 0) && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">Booking Details</h2>
                  <div className="mt-4 space-y-2">
                    {selectedServices.length > 0 && (
                      <p className="text-[15px] text-slate-700">{selectedServices.map((s) => s.name).join(', ')}</p>
                    )}
                    {selectedDate && (
                      <p className="text-[15px] text-slate-700">
                        {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        {selectedTime && ` at ${selectedTime}`}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowMoreDetails(!showMoreDetails)}
                      className="inline-flex items-center gap-1 text-sm text-accentBlue hover:underline"
                    >
                      More details
                      <svg className={`h-4 w-4 transition ${showMoreDetails ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {showMoreDetails && (
                      <div className="rounded-lg border border-slate-100 bg-cream/50 p-4 text-sm text-slate-600">
                        {selectedServices.length > 0 && (
                          <div className="mb-3">
                            <p className="mb-2 text-slate-700">Services</p>
                            <ul className="space-y-1">
                              {selectedServices.map((s) => (
                                <li key={s.name} className="flex justify-between gap-4">
                                  <span>{s.name}</span>
                                  <span className="font-semibold text-accentNavy">{s.price}</span>
                                </li>
                              ))}
                            </ul>
                            {totals.total > 0 && <p className="mt-2 font-semibold text-accentNavy">Services total: ${totals.total.toFixed(2)}</p>}
                          </div>
                        )}
                        {selectedProducts.length > 0 && (
                          <div className="mb-3">
                            <p className="mb-2 text-slate-700">Reserved products</p>
                            <ul className="space-y-1">
                              {selectedProducts.map((p) => (
                                <li key={p.name} className="flex justify-between gap-4">
                                  <span>{p.name}</span>
                                  <span className="font-semibold text-accentNavy">{p.price}</span>
                                </li>
                              ))}
                            </ul>
                            {productTotal > 0 && <p className="mt-2 font-semibold text-accentNavy">Products total: ${productTotal.toFixed(2)}</p>}
                          </div>
                        )}
                        <p>Team member: {teamMembers.find((t) => t.id === teamMember)?.name}</p>
                      </div>
                    )}
                  </div>

                  {((selectedServices.length > 0 && totals.subtotal > 0) || (selectedProducts.length > 0 && productTotal > 0)) && (
                    <>
                      <hr className="my-5 border-slate-200" />
                      <h3 className="font-medium text-accentNavy">Payment Details</h3>
                      <div className="mt-3 space-y-1 text-[15px] text-slate-600">
                        {selectedServices.length > 0 && totals.subtotal > 0 && (
                          <>
                            <div className="flex justify-between">
                              <span>Services subtotal</span>
                              <span>${totals.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Tax</span>
                              <span>${totals.tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-accentNavy">
                              <span>Services total</span>
                              <span>${totals.total.toFixed(2)}</span>
                            </div>
                            {totals.total > 50 && (
                              <div className="mt-2 flex flex-wrap gap-4 text-sm">
                                <span>Pay Now (Deposit): $50</span>
                                <span>Pay Later: ${totals.payLater.toFixed(2)}</span>
                              </div>
                            )}
                          </>
                        )}
                        {selectedProducts.length > 0 && productTotal > 0 && (
                          <div className={`flex justify-between font-semibold text-accentNavy ${selectedServices.length > 0 ? 'mt-2' : ''}`}>
                            <span>Products total</span>
                            <span>${productTotal.toFixed(2)}</span>
                          </div>
                        )}
                        {totals.total > 0 && productTotal > 0 && (
                          <div className="flex justify-between border-t border-slate-200 pt-3 font-bold text-accentNavy">
                            <span>Combined total</span>
                            <span>${(totals.total + productTotal).toFixed(2)}</span>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <hr className="my-5 border-slate-200" />
                  <p className="text-sm text-slate-600">
                    By completing your booking, you agree to receive related phone notifications.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPolicyOpen(true)}
                    className="mt-2 text-sm text-accentBlue hover:underline"
                  >
                    View Policy
                  </button>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="w-full rounded-full bg-accentNavy py-4 text-[15px] font-semibold tracking-wide text-white shadow-lg transition hover:scale-[1.02] hover:bg-accentNavy/90 hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 sm:w-auto sm:px-14"
                >
                  Request Appointment
                </button>
                <p className="text-center text-xs text-slate-500 sm:text-left">
                  Questions? Call <a href={`tel:${contactDetails.phone}`} className="font-medium text-accentBlue hover:underline">{contactDetails.phone}</a> — we're happy to help.
                </p>
              </div>

              <PolicyModal isOpen={policyOpen} onClose={() => setPolicyOpen(false)} />
            </div>
          </div>
        </form>
      )}
    </>
  )
}
