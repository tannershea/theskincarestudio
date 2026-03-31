import { useState, useEffect, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { bookingUrl, aftercareTreatments, contactDetails } from '../data'
import { ScrollReveal } from '../components/ScrollReveal'

function instructionItemToPlainText(item) {
  if (typeof item === 'string') return item
  const sub = item.subItems?.length ? ` ${item.subItems.join(', ')}` : ''
  return `${item.text}${sub}`
}

function AftercareImageLightbox({ open, onClose, src, alt }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open || !src) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged aftercare image"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl font-light text-accentNavy shadow-lg transition hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
        onClick={onClose}
        aria-label="Close enlarged image"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[min(92vh,900px)] max-w-[min(92vw,1200px)] rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  )
}

function AftercareCard({ treatment, index }) {
  const [imgError, setImgError] = useState(false)
  const [splitErrors, setSplitErrors] = useState([false, false])
  const [lightbox, setLightbox] = useState(null)
  const imageSrc = treatment.image
  const images = treatment.images

  const placeholder = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-warmStone/60 text-slate-500">
      <svg className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <span className="text-sm font-medium">Add image</span>
      <span className="text-xs">Place image in public/aftercare/</span>
    </div>
  )

  const objectPositionClass =
    treatment.imagePosition === 'bottom'
      ? 'object-bottom'
      : treatment.imagePosition === 'top'
        ? 'object-top'
        : 'object-center'

  const hasImage = images?.length === 2 || imageSrc
  /* Mobile: aspect box + cover. Desktop (lg): stretch with text column; object-contain + flex centers images that don’t fill the frame. */
  const singleImgClass = `h-full w-full object-cover ${objectPositionClass} lg:h-auto lg:max-h-full lg:w-full lg:object-contain lg:object-center`
  const splitImgClass = `h-full w-full object-cover ${objectPositionClass} lg:h-auto lg:max-h-full lg:max-w-full lg:object-contain lg:object-center`

  const openLightbox = (src, alt) => {
    if (src) setLightbox({ src, alt })
  }
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const imageArea = images?.length === 2 ? (
    <div className="grid aspect-[4/3] w-full max-w-full grid-cols-2 gap-0 overflow-hidden rounded-xl bg-warmStone/40 lg:aspect-auto lg:min-h-[240px] lg:h-full lg:flex-1">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative flex min-h-0 items-center justify-center overflow-hidden bg-warmStone/40"
        >
          {!splitErrors[i] ? (
            <button
              type="button"
              className="group relative flex h-full w-full min-h-0 cursor-zoom-in items-center justify-center border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accentBlue"
              onClick={() =>
                openLightbox(
                  src,
                  `${treatment.title} aftercare ${i === 0 ? '— before/result' : '— care'}`
                )
              }
              aria-label={`View larger: ${treatment.title} aftercare image ${i + 1} of 2`}
            >
              <img
                src={src}
                alt=""
                aria-hidden
                className={`${splitImgClass} pointer-events-none`}
                onError={() => setSplitErrors((prev) => {
                  const next = [...prev]
                  next[i] = true
                  return next
                })}
              />
              <span
                className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/[0.08] group-focus-visible:bg-black/[0.08]"
                aria-hidden
              />
            </button>
          ) : (
            <div className="flex min-h-[120px] w-full items-center justify-center p-4">{placeholder}</div>
          )}
        </div>
      ))}
    </div>
  ) : imageSrc ? (
    <div className="relative flex aspect-[4/3] w-full max-w-full items-center justify-center overflow-hidden rounded-xl bg-warmStone/40 lg:aspect-auto lg:min-h-[240px] lg:h-full lg:flex-1">
      {!imgError ? (
        <button
          type="button"
          className="group relative flex h-full w-full items-center justify-center border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accentBlue"
          onClick={() => openLightbox(imageSrc, `${treatment.title} aftercare`)}
          aria-label={`View larger: ${treatment.title} aftercare image`}
        >
          <img
            src={imageSrc}
            alt=""
            aria-hidden
            className={`${singleImgClass} pointer-events-none`}
            onError={() => setImgError(true)}
          />
          <span
            className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/[0.08] group-focus-visible:bg-black/[0.08]"
            aria-hidden
          />
        </button>
      ) : (
        <div className="flex min-h-[200px] w-full items-center justify-center p-4">{placeholder}</div>
      )}
    </div>
  ) : null

  return (
    <ScrollReveal direction="up" delay={index * 50}>
      <article
        id={treatment.id}
        className="scroll-mt-24 rounded-xl border border-warmStone/50 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accentBlue/20 hover:shadow-soft-lg sm:rounded-2xl sm:p-6 md:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
          {hasImage && (
            <div className="flex w-full shrink-0 flex-col self-stretch lg:min-h-0 lg:w-[320px] xl:w-[380px]">
              {imageArea}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">{treatment.title}</h2>
            {treatment.instructionGroups ? (
              (() => {
                const groups = treatment.instructionGroups
                const isDoDontPair =
                  groups.length === 2 && groups[0].title === 'DO' && groups[1].title === 'DO NOT'
                let running = 0
                return (
                  <div
                    className={
                      isDoDontPair
                        ? 'mt-4 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-1 md:gap-8'
                        : 'mt-4 space-y-8'
                    }
                  >
                    {groups.map((group) => (
                      <div key={group.title} className="min-w-0">
                        <h3 className="font-serif text-base font-bold tracking-tight text-accentNavy underline underline-offset-4 decoration-2 decoration-accentNavy/70 sm:text-lg">
                          {group.title}
                        </h3>
                        <ul className="mt-2 space-y-2 sm:mt-3 sm:space-y-3">
                          {group.items.map((step, i) => {
                            const num = treatment.continuousInstructionNumbering ? ++running : i + 1
                            const isNested =
                              step && typeof step === 'object' && 'text' in step && Array.isArray(step.subItems)
                            return (
                              <li
                                key={i}
                                className={`flex items-start gap-2 text-slate-600 sm:gap-3 ${
                                  isDoDontPair
                                    ? 'text-[12px] leading-[1.55] sm:text-[15px] sm:leading-[1.75]'
                                    : 'text-[15px] leading-[1.75]'
                                }`}
                              >
                                <span
                                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold sm:mt-1.5 sm:h-5 sm:w-5 sm:text-xs ${
                                    group.title === 'DO NOT'
                                      ? 'bg-red-100 text-red-900'
                                      : 'bg-accentBlue/20 text-accentNavy'
                                  }`}
                                >
                                  {num}
                                </span>
                                <div className="min-w-0">
                                  {isNested ? (
                                    <>
                                      <span>{step.text}</span>
                                      <ul
                                        className={`mt-1.5 list-disc space-y-0.5 pl-4 sm:mt-2 sm:space-y-1 sm:pl-5 ${
                                          isDoDontPair
                                            ? 'text-[12px] leading-[1.55] sm:text-[15px] sm:leading-[1.75]'
                                            : 'text-[15px] leading-[1.75]'
                                        }`}
                                      >
                                        {step.subItems.map((sub, j) => (
                                          <li key={j}>{sub}</li>
                                        ))}
                                      </ul>
                                    </>
                                  ) : (
                                    <span>{step}</span>
                                  )}
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              })()
            ) : (
              <ul className="mt-4 space-y-3">
                {treatment.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.75] text-slate-600">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accentBlue/20 text-xs font-semibold text-accentNavy">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
      <AftercareImageLightbox
        open={!!lightbox}
        onClose={closeLightbox}
        src={lightbox?.src}
        alt={lightbox?.alt ?? ''}
      />
    </ScrollReveal>
  )
}

function aftercareInstructionsToPlainText(treatment) {
  if (treatment.instructionGroups) {
    if (treatment.continuousInstructionNumbering) {
      let running = 0
      return treatment.instructionGroups
        .map((g) =>
          `${g.title}: ${g.items.map((item) => `${++running}. ${instructionItemToPlainText(item)}`).join(" ")}`
        )
        .join(" ")
    }
    return treatment.instructionGroups
      .map((g) =>
        `${g.title}: ${g.items.map((item, i) => `${i + 1}. ${instructionItemToPlainText(item)}`).join(" ")}`
      )
      .join(" ")
  }
  return treatment.instructions.map((step, i) => `${i + 1}. ${step}`).join(" ")
}

const viPeelUrgentSymptoms = [
  'Spreading or unusual bruising',
  'Branching discoloration',
  'Severe or worsening pain',
  'Excessive heat in the area',
  'Feeling unwell',
]

function ViPeelFaceUrgentSection() {
  const phoneDigits = contactDetails.phone.replace(/\D/g, '')
  const phoneDisplay =
    phoneDigits.length === 10
      ? `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`
      : contactDetails.phone

  return (
    <section
      className="overflow-hidden rounded-xl bg-gradient-to-br from-accentNavy via-accentNavy/95 to-accentNavy px-4 py-8 text-center shadow-soft-lg sm:rounded-2xl sm:px-6 sm:py-10 md:px-10 md:py-12"
      aria-labelledby="vi-peel-urgent-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Your safety first</p>
      <h2
        id="vi-peel-urgent-heading"
        className="mx-auto mt-3 max-w-3xl font-serif text-2xl font-semibold tracking-tight text-white md:text-3xl"
      >
        Contact your provider immediately if you experience:
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/85">
        Don’t guess—if something feels off, we want to hear from you. Quick questions are normal;{' '}
        <span className="font-semibold text-white">the symptoms below need a same-day check-in.</span>
      </p>
      <ul className="mx-auto mt-6 inline-block space-y-3 text-left text-[15px] leading-[1.75] text-white/95">
        {viPeelUrgentSymptoms.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentGreen" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-xl border border-white/20 bg-white/[0.07] p-6 text-center backdrop-blur-sm md:p-8">
        <p className="mx-auto max-w-2xl font-serif text-lg font-semibold tracking-tight text-white md:text-xl">
          We’ll help you figure out what’s normal—and what isn’t.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-white/80">
          Call or text our Stratford office now. Most concerns are addressed in minutes; when you need to be seen, we’ll get you on the calendar.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href={`tel:${contactDetails.phone}`}
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-accentGreen px-6 py-3.5 text-center text-[15px] font-semibold tracking-wide text-accentNavy shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-accentGreen/90 hover:shadow-xl sm:w-auto sm:min-w-[200px]"
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {phoneDisplay}
          </a>
          <a
            href="sms:2039080673"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3.5 text-center text-[15px] font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:border-white hover:bg-white/15 sm:w-auto sm:min-w-[160px]"
          >
            Text us
          </a>
          <Link
            to="/contact"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-6 py-3.5 text-center text-[15px] font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:border-white hover:bg-white/10 sm:w-auto sm:min-w-[160px]"
          >
            Send a message
          </Link>
          <a
            href={bookingUrl}
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-white/25 bg-white/5 px-6 py-3.5 text-center text-[15px] font-semibold tracking-wide text-white/95 transition-all duration-200 hover:scale-[1.02] hover:border-white/50 hover:bg-white/10 sm:w-auto sm:min-w-[180px]"
          >
            Book follow-up online
          </a>
        </div>
        <p className="mt-5 border-t border-white/15 pt-5 text-center text-xs leading-relaxed text-white/55">
          For peel-related concerns, <span className="text-white/75">The Skincare Studio</span>—same team that treated you.
        </p>
      </div>
    </section>
  )
}

const aftercareFaqSchema = (treatments) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": treatments.map((t) => ({
    "@type": "Question",
    "name": `What are the aftercare instructions for ${t.title}?`,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": aftercareInstructionsToPlainText(t),
    },
  })),
})

function formatPhoneDisplay(phone) {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return phone
}

export function AftercarePage() {
  const phoneDisplay = useMemo(() => formatPhoneDisplay(contactDetails.phone), [])
  const phoneDigits = useMemo(() => contactDetails.phone.replace(/\D/g, ''), [])

  return (
    <>
      <Helmet>
        <title>Aftercare Instructions | The Skincare Studio Medical Spa | Stratford, CT</title>
        <meta name="description" content="Aftercare instructions for VI Peel, Microneedling, Chemical Peel, Facial Balancing, PRFM, Neurotoxin, and Filler treatments at The Skincare Studio in Stratford, CT." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/aftercare" />
        <meta property="og:title" content="Aftercare Instructions | The Skincare Studio Medical Spa | Stratford, CT" />
        <meta property="og:description" content="Aftercare instructions for VI Peel, Microneedling, Chemical Peel, Facial Balancing, PRFM, Neurotoxin, Filler, and Laser Hair Removal at The Skincare Studio in Stratford, CT." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/aftercare" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.theskincarestudioct.com/hero-treatment.png" />
        <meta property="og:image:alt" content="Skincare treatment at The Skincare Studio Medical Spa in Stratford, CT" />
        <script type="application/ld+json">{JSON.stringify(aftercareFaqSchema(aftercareTreatments))}</script>
      </Helmet>

      <section className="relative bg-cream py-10 md:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-4xl md:text-5xl">
            Aftercare Instructions
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed text-slate-600 sm:mt-4 sm:text-[16px]">
            Follow these guidelines for the best healing and results. Same team, same Stratford office—reach out anytime if something doesn’t feel right.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5 font-medium text-accentNavy">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              4.9 avg
            </span>
            <span className="hidden sm:inline text-warmStone/80" aria-hidden>
              ·
            </span>
            <span>224+ Google reviews</span>
            <span className="hidden sm:inline text-warmStone/80" aria-hidden>
              ·
            </span>
            <span>Stratford, CT</span>
          </div>
          <p className="mt-6 font-serif text-2xl font-semibold tracking-tight text-accentNavy">
            Thank You for Choosing Us
          </p>
          <p className="mt-8 text-xs text-slate-500">
            Each treatment has its own section below.
          </p>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-white py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="mb-5 rounded-xl border border-accentBlue/15 bg-gradient-to-br from-accentBlue/[0.06] to-cream/80 p-5 text-center shadow-soft sm:mb-8 sm:rounded-2xl sm:p-6 md:p-8">
            <p className="font-serif text-lg font-semibold text-accentNavy md:text-xl">
              Questions while you heal?
            </p>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Most aftercare concerns are quick to sort out. Call, text, or book a follow-up—we’re here for you.
            </p>
            <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <a
                href="sms:2039080673"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accentNavy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-md sm:min-w-[140px]"
              >
                Text us
              </a>
              <a
                href={`tel:${contactDetails.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accentNavy/30 bg-white px-5 py-2.5 text-sm font-semibold text-accentNavy transition-all hover:border-accentNavy/50 sm:min-w-[160px]"
              >
                Call {phoneDisplay}
              </a>
              <a
                href={bookingUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accentBlue/35 bg-accentBlue/5 px-5 py-2.5 text-sm font-semibold text-accentNavy transition-all hover:border-accentBlue hover:bg-accentBlue hover:text-white sm:min-w-[180px]"
              >
                Book online
              </a>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {aftercareTreatments.map((treatment, index) => (
              <div key={treatment.id} className="space-y-8 sm:space-y-10 md:space-y-12">
                <AftercareCard treatment={treatment} index={index} />
                {treatment.id === 'vi-peel-face' && <ViPeelFaceUrgentSection />}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-warmStone/60 bg-cream/60 p-5 text-center sm:mt-16 sm:rounded-2xl sm:p-8 md:p-10">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">
              Ready for your next visit?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Book your next appointment or ask our team anything—we love helping you feel confident in your skin.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={bookingUrl}
                className="inline-flex items-center gap-2 rounded-full bg-accentNavy px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg"
              >
                Book an appointment
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accentBlue underline-offset-4 transition-colors hover:text-accentNavy hover:underline"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
