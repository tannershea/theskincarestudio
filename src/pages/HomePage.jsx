import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  bookingUrl,
  contactDetails,
  googleMapsUrl,
  openingHours,
  recognitions,
  localBusinessSchema,
} from '../data'
import { Testimonials } from '../components/Testimonials'
import { Newsletter } from '../components/Newsletter'
import { BeforeAfter } from '../components/BeforeAfter'
import { ScrollReveal } from '../components/ScrollReveal'
import { CountUp } from '../components/CountUp'
import { ZoomableImage } from '../components/learn/ZoomableImage'

const heroImages = [
  '/hero-studio-wall-branding.png',
  '/hero-studio-waiting-area.png',
  '/studio-elta-display.png',
  '/studio-reception-2.png',
  '/studio-injection.png',
]

const treatmentCategories = [
  {
    title: 'Injectables',
    href: '/services#cosmetic-injectables',
    image: '/studio-injection.png',
    alt: 'Injectable treatment at The Skincare Studio in Stratford',
  },
  {
    title: 'Skin Treatments',
    href: '/services#facials',
    image: '/learn-skincare-studio-facial-treatment.png',
    alt: 'Facial and skin treatment at The Skincare Studio',
  },
  {
    title: 'Laser Treatments',
    href: '/services#laser-treatments',
    image: '/learn-lutronic-clarity-treatment.png',
    alt: 'Laser treatment at The Skincare Studio',
  },
  {
    title: 'Consultations',
    href: '/services#consultations',
    image: '/learn-consultations-lab-coat.png',
    alt: 'Consultation at The Skincare Studio in Stratford',
  },
]

const whyChooseUs = [
  'Experienced medical professionals',
  'Personalized care for every skin type',
  'Natural-looking, balanced results',
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
        <meta property="og:image" content="https://www.theskincarestudioct.com/hero-studio-wall-branding.png" />
        <meta property="og:image:alt" content="The Skincare Studio wall logo with tagline &quot;Your Skin Deserves Better&quot; inside the Stratford studio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Skincare Studio | Medical Spa in Stratford, Connecticut" />
        <meta name="twitter:description" content="Personalized aesthetic care in a calm, elevated setting." />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      <section className="relative overflow-hidden bg-white">
        <HeroBackgroundCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-luxury text-white/80">
              Paradise Green · Stratford, CT
            </p>
            <h1 className="mt-3 text-balance font-serif text-[1.55rem] leading-[1.2] tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Natural, personalized aesthetic treatments for every skin type.
            </h1>
            <p className="mx-auto mt-3 max-w-lg px-1 text-[14px] leading-[1.55] text-white/85 sm:mt-5 sm:text-[16px] sm:leading-[1.7]">
              Expert injectables, laser treatments, and advanced skincare in Stratford, Connecticut.
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accentGreen px-8 py-3.5 text-[16px] font-semibold tracking-wide text-accentNavy shadow-lg transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90 sm:px-10 sm:py-4 sm:text-[17px]"
              >
                Book an Appointment
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-cream py-9 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Treatments</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:text-3xl">
                Find the right care for your skin.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
            {treatmentCategories.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 80} className="min-w-0">
                <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm sm:rounded-2xl">
                  <img src={item.image} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <h3 className="font-serif text-[15px] font-semibold tracking-tight text-accentNavy sm:text-lg">
                      {item.title}
                    </h3>
                    <Link
                      to={item.href}
                      className="mt-2 inline-flex items-center text-[13px] font-semibold text-accentNavy hover:text-accentBlue sm:text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      <section className="bg-white py-9 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Why choose us</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:text-3xl">
                Calm, expert care that still feels personal.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-5">
            {whyChooseUs.map((reason, i) => (
              <ScrollReveal key={reason} direction="up" delay={i * 80}>
                <div className="h-full rounded-xl border border-slate-100 bg-cream/70 px-4 py-4 sm:rounded-2xl sm:px-5 sm:py-6">
                  <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-accentGreen/40 text-accentNavy">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="font-serif text-[16px] font-semibold leading-snug text-accentNavy sm:text-lg">
                    {reason}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-cream py-9 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Reviews &amp; credentials</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:text-3xl">
                Trusted expertise, proven results.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] text-accentNavy sm:mt-8 sm:gap-x-10 sm:text-[15px]">
            <div className="flex items-center gap-1.5">
              <span className="text-accentGreen">★</span>
              <CountUp value="4.9" className="font-bold" duration={2000} />
              <span className="text-slate-500">rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CountUp value="10K+" className="font-bold" duration={2000} />
              <span className="text-slate-500">treatments</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CountUp value="15+" className="font-bold" duration={2000} />
              <span className="text-slate-500">years</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4">
            {recognitions.map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-white p-3.5 sm:p-4">
                <svg className="mb-2 h-5 w-5 text-accentGreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[13px] leading-[1.5] text-accentNavy sm:text-[14px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="about" className="bg-white py-9 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-luxury text-slate-500">About the studio</p>
                <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:text-3xl">
                  Science, artistry, and care in one place.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.65] text-slate-600">
                  Founded by Terri Miller, The Skincare Studio offers medical-grade aesthetic care for every skin type in Paradise Green, Stratford. Natural results, never overdone.
                </p>
                <Link
                  to="/about"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-accentNavy hover:text-accentBlue"
                >
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="overflow-hidden rounded-xl shadow-sm sm:rounded-2xl">
                <ZoomableImage
                  src="/home-about-studio-reception.png"
                  alt="Reception at The Skincare Studio in Stratford"
                  className="aspect-[4/3] w-full object-cover object-[center_top]"
                  wrapperClassName="block w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-cream py-9 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Visit us</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-accentNavy sm:text-3xl">
                Conveniently located in Stratford.
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 text-[15px] leading-[1.6] text-slate-600">
                  <p>
                    {contactDetails.addressLine1}<br />
                    {contactDetails.addressLine2}
                  </p>
                  <p>{contactDetails.location}</p>
                  <a href={`tel:${contactDetails.phone}`} className="inline-block font-semibold text-accentNavy hover:text-accentBlue">
                    {contactDetails.phone}
                  </a>
                </div>
                <div className="space-y-2 text-[15px] leading-[1.6] text-slate-600">
                  {openingHours.map((item) => (
                    <p key={item.days}>
                      <span className="font-medium text-accentNavy">{item.days}:</span> {item.hours}
                    </p>
                  ))}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm font-semibold text-accentNavy hover:text-accentBlue"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
          <h2 className="font-serif text-2xl tracking-tight text-accentNavy sm:text-3xl md:text-4xl">
            Ready to book?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-[1.65] text-slate-600">
            Schedule a consultation or treatment online. We’ll help you choose the right plan for your skin.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accentGreen px-8 py-3.5 text-[16px] font-semibold tracking-wide text-accentNavy shadow-md transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90 sm:px-10 sm:py-4 sm:text-[17px]"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
