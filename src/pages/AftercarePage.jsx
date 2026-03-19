import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { bookingUrl, aftercareTreatments } from '../data'
import { ScrollReveal } from '../components/ScrollReveal'

function AftercareCard({ treatment, index }) {
  const [imgError, setImgError] = useState(false)
  const [splitErrors, setSplitErrors] = useState([false, false])
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

  const imageArea = images?.length === 2 ? (
    <div className="grid aspect-[4/3] grid-cols-2 gap-0 overflow-hidden rounded-xl">
      {images.map((src, i) => (
        <div key={i} className="relative overflow-hidden bg-warmStone/40">
          {!splitErrors[i] ? (
            <img
              src={src}
              alt={`${treatment.title} aftercare ${i === 0 ? '— before/result' : '— care'}`}
              className="h-full w-full object-cover object-bottom"
              onError={() => setSplitErrors((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })}
            />
          ) : (
            placeholder
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-warmStone/40">
      {!imgError && imageSrc ? (
        <img
          src={imageSrc}
          alt={`${treatment.title} aftercare`}
          className="h-full w-full object-cover object-bottom"
          onError={() => setImgError(true)}
        />
      ) : (
        placeholder
      )}
    </div>
  )

  return (
    <ScrollReveal direction="up" delay={index * 50}>
      <article
        id={treatment.id}
        className="scroll-mt-24 rounded-2xl border border-warmStone/50 bg-white p-6 shadow-soft transition-all duration-200 hover:shadow-soft-lg md:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="shrink-0 lg:w-[320px] xl:w-[380px]">
            {imageArea}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-accentNavy">{treatment.title}</h2>
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
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

export function AftercarePage() {
  return (
    <>
      <Helmet>
        <title>Aftercare Instructions | The Skincare Studio Medical Spa | Stratford, CT</title>
        <meta name="description" content="Aftercare instructions for VI Peel, Microneedling, Chemical Peel, Facial Balancing, Botox, and Filler treatments at The Skincare Studio in Stratford, CT." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/aftercare" />
      </Helmet>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 text-center lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-accentNavy md:text-5xl">
            Aftercare Instructions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-slate-600">
            Follow these guidelines to support healing and results after your treatment. Questions? Contact us anytime.
          </p>
          <p className="mt-6 font-serif text-2xl font-semibold tracking-tight text-accentNavy">
            Thank You for Choosing Us
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accentNavy px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Your Appointment
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-accentBlue/40 bg-accentBlue/5 px-6 py-3 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-white py-16">
        <div className="mx-auto max-w-5xl px-8 lg:px-12">
          <nav className="mb-12 flex flex-wrap justify-center gap-2">
            {aftercareTreatments.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(t.id)?.scrollIntoView({ block: 'center', behavior: 'smooth' })
                }}
                className="rounded-full border border-accentBlue/30 bg-accentBlue/5 px-4 py-2 text-sm font-medium text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white"
              >
                {t.title}
              </a>
            ))}
          </nav>

          <div className="space-y-12">
            {aftercareTreatments.map((treatment, index) => (
              <AftercareCard key={treatment.id} treatment={treatment} index={index} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border-2 border-accentBlue/20 bg-accentBlue/5 p-8 text-center">
            <p className="text-lg font-semibold text-accentNavy">Questions about your aftercare?</p>
            <p className="mt-2 text-[15px] text-slate-600">
              We're here to help. Reach out or book a follow-up if needed.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:203-377-0166"
                className="inline-flex items-center gap-2 rounded-full bg-accentNavy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                (203) 377-0166
              </a>
              <a
                href="mailto:info@theskincarestudioct.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accentBlue/40 bg-white px-5 py-2.5 text-sm font-semibold text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
              >
                Email Us
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accentBlue/40 bg-white px-5 py-2.5 text-sm font-semibold text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
