import { useState } from 'react'
import { testimonials } from '../data'
import { ScrollReveal } from './ScrollReveal'

function StarRating({ size = 'text-base' }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-accentGreen ${size}`}>★</span>
      ))}
    </div>
  )
}

function GoogleIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export function Testimonials() {
  const [center, setCenter] = useState(0)
  const total = testimonials.length

  const prev = () => setCenter((c) => (c - 1 + total) % total)
  const next = () => setCenter((c) => (c + 1) % total)

  const getOffset = (i) => {
    let diff = i - center
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="overflow-hidden bg-gradient-to-br from-accentNavy via-accentNavy/95 to-accentNavy py-20">
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-luxury text-accentGreen">
              What Our Clients Say
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal text-white md:text-4xl">
              Trusted by Fairfield County
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute -left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-accentNavy/90 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/20 lg:-left-14"
            aria-label="Previous review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel track */}
          <div className="relative flex h-[340px] items-center justify-center">
            {testimonials.map((t, i) => {
              const offset = getOffset(i)
              const isCenter = offset === 0
              const isVisible = Math.abs(offset) <= 2

              if (!isVisible) return null

              const translateX = offset * 340
              const scale = isCenter ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7
              const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.2
              const zIndex = isCenter ? 10 : Math.abs(offset) === 1 ? 5 : 1

              return (
                <div
                  key={i}
                  className="absolute w-[320px] transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                >
                  <div
                    className={`rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 ${
                      isCenter
                        ? 'border-accentGreen/40 bg-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.3)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <StarRating />
                      <GoogleIcon className="h-5 w-5 text-white/60" />
                    </div>
                    <blockquote className="mt-4 line-clamp-5 text-base leading-[1.75] text-slate-100 md:text-lg">
                      "{t.quote}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-serif text-base font-medium tracking-tight text-white md:text-lg">{t.author}</p>
                      <p className="text-sm text-accentGreen">Verified Google Review</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute -right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-accentNavy/90 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white/20 lg:-right-14"
            aria-label="Next review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenter(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === center ? 'w-6 bg-accentGreen' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Overall rating - links to Google reviews */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 sm:flex-row sm:justify-center sm:gap-6">
          <GoogleIcon className="h-8 w-8 text-white/70" />
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">4.9</span>
            <div>
              <StarRating size="text-lg" />
              <p className="text-sm text-slate-300">Based on 224+ Google Reviews</p>
            </div>
          </div>
          <a
            href="https://www.google.com/search?q=The+Skincare+Studio+Medspa+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white/10"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
