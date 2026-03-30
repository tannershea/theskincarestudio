import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Testimonials } from '../components/Testimonials'
import { Newsletter } from '../components/Newsletter'
import {
  bookingUrl,
  contactDetails,
  recognitions,
  serviceAreas,
  featuredCategories,
  popularServices,
  reasons,
  localBusinessSchema,
} from '../data'
import { TrustBadges } from '../components/TrustBadges'
import { FAQ } from '../components/FAQ'
import { TikTokFeed } from '../components/TikTokFeed'
import { BeforeAfter } from '../components/BeforeAfter'
import { ScrollReveal } from '../components/ScrollReveal'
import { CountUp } from '../components/CountUp'

const heroImages = [
  '/studio-team.png',
  '/studio-elta-display.png',
  '/studio-reception-2.png',
  '/studio-injection.png',
]

function HeroBackgroundCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {heroImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
}

export function HomePage() {
  const schemaOrg = localBusinessSchema

  return (
    <>
      <Helmet>
        <title>The Skincare Studio | Medical Spa in Stratford, Connecticut</title>
        <meta name="description" content="Book Botox, fillers, facials &amp; laser treatments in Stratford, CT. The Skincare Studio offers personalized aesthetic care in Paradise Green. Same-day booking available." />
        <meta name="keywords" content="medical spa Stratford CT, Botox Stratford, facial Stratford, laser treatment Fairfield County, skincare Connecticut" />
        <link rel="canonical" href="https://www.theskincarestudioct.com/" />
        <meta property="og:title" content="The Skincare Studio | Medical Spa in Stratford, Connecticut" />
        <meta property="og:description" content="Personalized aesthetic care in a calm, elevated setting. Medical-grade facials and treatments in Paradise Green." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theskincarestudioct.com/" />
        <meta property="og:image" content="https://www.theskincarestudioct.com/studio-lounge.png" />
        <meta property="og:image:alt" content="Welcoming lounge at The Skincare Studio Medical Spa in Stratford, CT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Skincare Studio | Medical Spa in Stratford, Connecticut" />
        <meta name="twitter:description" content="Personalized aesthetic care in a calm, elevated setting." />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <HeroBackgroundCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-8 md:pb-20 md:pt-20 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accentGreen" />
              <span className="text-xs font-semibold uppercase tracking-luxury text-white">Now booking in Stratford, CT</span>
            </div>

            <h1 className="mt-4 font-serif text-[1.75rem] leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Confidence starts with your skin.
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.65] text-white/80 sm:mt-5 sm:text-[16px] sm:leading-[1.7]">
              Medical-grade treatments personalized to you — from neurotoxin and fillers to laser facials and regenerative skincare. Natural results, never overdone.
            </p>

            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <a
                href={bookingUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Book a consultation
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10 hover:scale-105"
              >
                Browse treatments
                <span className="text-white/60">→</span>
              </Link>
            </div>

            <div className="mx-auto mt-8 inline-flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-[14px] text-white/60 shadow-sm backdrop-blur-sm sm:mt-12 sm:gap-3 sm:px-8 sm:py-4 sm:text-[15px] md:flex-row md:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-lg text-accentGreen">★</span>
                <CountUp value="4.9" className="text-lg font-bold text-white" duration={2000} />
                <span>rating</span>
              </div>
              <span className="hidden h-5 w-px bg-white/30 sm:block" />
              <div className="flex items-center gap-2">
                <CountUp value="10K+" className="text-lg font-bold text-white" duration={2000} />
                <span>treatments</span>
              </div>
              <span className="hidden h-5 w-px bg-white/30 sm:block" />
              <div className="flex items-center gap-2">
                <CountUp value="15+" className="text-lg font-bold text-white" duration={2000} />
                <span>years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions - Warm cream + subtle blue accents */}
      <section className="border-t border-warmStone/50 bg-cream py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {recognitions.map((item, i) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-100 bg-white p-3.5 sm:rounded-2xl sm:p-5"
                >
                  <svg className="mb-2 h-5 w-5 text-accentGreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[15px] leading-[1.6] text-accentNavy">{item}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Reference layout: text left, image right, two boxes below */}
      <section id="about" className="bg-gradient-to-b from-white to-cream/50 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-12">
            <ScrollReveal direction="left" delay={0}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-slate-500">About the studio</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Where science, artistry, and individualized care come together.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-slate-600 sm:mt-6 sm:leading-[1.7]">
                Founded by Terri Miller, The Skincare Studio Medical Spa was created from a passion for transformative skincare and a commitment to helping every client feel confident in their own skin.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                With years of experience in dermatology and a deep understanding of the unique needs of diverse skin types and tones, the studio was designed as a welcoming destination for clients seeking expert guidance, modern treatment options, and beautifully natural outcomes.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                We believe aesthetic care should feel both elevated and approachable, combining medical expertise with genuine attention, comfort, and trust.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
            <div className="overflow-hidden rounded-xl shadow-[0_4px_24px_-4px_rgba(22,50,80,0.08)] sm:rounded-2xl">
              <img
                src="/studio-lounge.png"
                alt="Welcoming lounge and reception area at The Skincare Studio Medical Spa in Paradise Green, Stratford CT"
                className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
                loading="lazy"
              />
            </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={50}>
          <div className="mt-6 grid items-stretch gap-4 sm:mt-10 md:grid-cols-2 md:gap-6 lg:mt-12">
            <ScrollReveal direction="left" delay={0} className="flex">
            <div className="flex-1 rounded-xl bg-accentNavy p-5 text-white shadow-sm sm:rounded-2xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Why clients choose us</p>
              <ul className="mt-4 space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-2 text-[15px] leading-[1.6]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accentGreen" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100} className="flex">
            <div className="flex-1 rounded-xl border border-warmStone bg-cream/80 p-5 shadow-sm sm:rounded-2xl sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Serving Fairfield County</p>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                Conveniently located in Paradise Green in Stratford, we welcome clients from {serviceAreas.join(", ")} and surrounding communities seeking trusted neurotoxin, filler, laser, peel, and regenerative treatments.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                With flexible scheduling, same-day availability, and a warm, professional environment, every visit is designed to feel seamless and centered around your comfort and goals.
              </p>
            </div>
            </ScrollReveal>
          </div>
          </ScrollReveal>
          </div>
      </section>

      {/* Popular services - Mixed card colors */}
      <section className="border-t border-warmStone/50 bg-cream py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="left" delay={0}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Popular services</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Advanced treatments tailored to your skin and aesthetic goals.
              </h2>
            </div>
            <Link to="/services" className="inline-block text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left">
              View all services →
            </Link>
          </div>
          </ScrollReveal>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:mt-12 lg:grid-cols-4">
            {popularServices.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 100}>
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-accentGreen/40 sm:rounded-2xl sm:p-6">
                <h3 className="font-serif text-[15px] font-semibold leading-snug tracking-tight text-accentNavy sm:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-slate-600 sm:mt-2 sm:text-[15px] sm:leading-[1.6]">{item.description}</p>
                <a
                  href={bookingUrl}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline hover:scale-105 origin-left sm:mt-4 sm:text-sm"
                >
                  Book now <span aria-hidden>→</span>
                </a>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment philosophy - Bento-style with varied layout */}
      <section className="bg-blueGray/30 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.6fr_1fr] lg:items-center lg:gap-12">
            <ScrollReveal direction="left" delay={0}>
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl shadow-sm sm:rounded-2xl">
                <img
                  src="/studio-botox-display.png"
                  alt="Professional injectables and medical-grade skincare at The Skincare Studio in Stratford CT"
                  className="aspect-[4/3] w-full object-cover sm:aspect-[3/4]"
                  loading="lazy"
                />
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Treatment philosophy</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Personalized plans. Professional products. Results that feel like you.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-slate-600 sm:mt-6 sm:leading-[1.7]">
                Every recommendation begins with careful listening and an individualized plan. Whether you are exploring injectables for the first time, addressing acne or hyperpigmentation, or maintaining healthy, radiant skin, our team takes a thoughtful approach grounded in education and long-term skin health.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                We also offer medical-grade skincare products and expert guidance to help clients build effective at-home routines that complement in-office treatments and support lasting results.
              </p>
            </div>
            </ScrollReveal>
          </div>
          <div className="mt-6 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:items-stretch lg:mt-12">
            {[
              { ...featuredCategories[0], bg: "bg-white" },
              { ...featuredCategories[1], bg: "bg-white" },
              { ...featuredCategories[2], bg: "bg-white" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 100} className="h-full w-[min(88vw,20rem)] shrink-0 snap-start sm:w-auto sm:min-w-0">
              <div className={`h-full rounded-xl border border-slate-100 ${item.bg} p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:p-6`}>
                <h3 className="font-serif text-[15px] font-semibold leading-snug tracking-tight text-accentNavy sm:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-slate-600 sm:mt-2 sm:text-[15px] sm:leading-[1.6]">{item.description}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfter />

      {/* Aftercare Instructions */}
      <section className="border-t border-warmStone/50 bg-white py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up" delay={0}>
            <div className="rounded-xl border border-accentBlue/20 bg-softBlue/50 p-5 sm:rounded-2xl sm:p-8 md:p-10">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">After your treatment</p>
                  <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight text-accentNavy sm:text-2xl md:text-3xl">
                    Aftercare Instructions
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-slate-600">
                    Follow our step-by-step guides for VI Peel, Microneedling, Chemical Peel, Facial Balancing, PRFM, Neurotoxin, and Filler to support healing and get the best results.
                  </p>
                </div>
                <Link
                  to="/aftercare"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accentNavy px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  View Aftercare Guide
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TikTok Feed */}
      <TikTokFeed />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ - Addresses objections, good for SEO */}
      <FAQ />

      {/* Booking CTA - Blue-gray tint */}
      <section className="border-t border-blueGray/50 bg-blueGray/20 py-10 md:py-16 lg:py-20">
        <ScrollReveal direction="zoom" delay={0}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8 lg:px-12">
          <h2 className="font-serif text-2xl tracking-tight text-accentNavy sm:text-3xl md:text-4xl">
            A simple path to expert care.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-slate-600 sm:mt-6 sm:text-[16px] sm:leading-[1.7]">
            Browse treatments, review pricing, and schedule directly through our online booking page. If you are unsure where to begin, start with a consultation and our team will guide you toward the most appropriate treatment plan.
          </p>
          <p className="mt-3 text-[15px] leading-[1.65] text-slate-600 sm:mt-4 sm:text-[16px] sm:leading-[1.7]">
            New and returning clients can book online for consultations, injectables, facials, corrective treatments, and more.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:gap-4 sm:flex-row">
            <a
              href={bookingUrl}
              className="inline-flex justify-center rounded-full bg-accentGreen px-6 py-3 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90 hover:shadow-lg"
            >
              Book Your Appointment
            </a>
            <Link
              to="/services"
              className="shrink-0 inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:border-accentBlue hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
