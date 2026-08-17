import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  bookingUrl,
  contactDetails,
  googleMapsUrl,
  openingHours,
  reasons,
  recognitions,
  serviceBookingUrlOverrides,
  socialLinks,
} from '../data'
import { AutoPlayVideo } from '../components/AutoPlayVideo'
import { BeforeAfterSlider } from '../components/BeforeAfter'
import { ScrollReveal } from '../components/ScrollReveal'
import { ZoomableImage } from '../components/learn/ZoomableImage'
import {
  landingBeforeAfter,
  landingBeforeAfterSlotCount,
  landingPhotoSlotCount,
  landingStudioPhotos,
  landingTikTokSlotCount,
  landingTikToks,
} from '../data/landingMedia'

const landingUrl = 'https://www.theskincarestudioct.com/welcome'

const beliefs = [
  {
    title: 'Natural results',
    desc: 'We enhance without overdoing. Every treatment aims for results that look like the best version of you.',
  },
  {
    title: 'Inclusive beauty',
    desc: 'Expert care for all skin types, with treatment plans tailored to your unique needs.',
  },
  {
    title: 'Medical expertise',
    desc: 'A licensed medical team with 15+ years of dermatology-informed experience behind every plan.',
  },
  {
    title: 'Personalized care',
    desc: 'No two clients are the same. We listen first, then build a plan around your skin, goals, and lifestyle.',
  },
]

const popularTreatments = [
  {
    name: 'Neurotoxin',
    tag: 'Most requested',
    desc: 'Letybo and Daxxify to smooth fine lines while keeping your expression naturally you.',
    price: '$14 per unit',
    duration: '15–30 min',
    image: '/studio-injection.png',
    imageAlt: 'Neurotoxin treatment at The Skincare Studio in Stratford, CT',
    bookUrl: serviceBookingUrlOverrides.Neurotoxin,
  },
  {
    name: 'Lip Filler',
    tag: 'Client favorite',
    desc: 'Soft, balanced volume and symmetry with hyaluronic acid filler, never overdone.',
    price: '$600',
    duration: '45 min',
    image: '/learn-revanesse-versa-lips-before-after.png',
    imageAlt: 'Lip filler before and after at The Skincare Studio',
    bookUrl: serviceBookingUrlOverrides['Lip Filler'],
  },
  {
    name: 'VI Peel Original',
    tag: 'Most loved',
    desc: 'A medical-grade peel that improves tone, texture, and clarity with minimal downtime.',
    price: '$400',
    duration: '35 min',
    image: '/learn-vi-peel-purify.png',
    imageAlt: 'VI Peel treatment at The Skincare Studio',
    bookUrl: serviceBookingUrlOverrides['VI Peel Original'],
  },
  {
    name: 'SkinPen Microneedling',
    tag: 'Collagen boost',
    desc: 'FDA-cleared microneedling to refine texture, soften scars, and support healthier skin.',
    price: '$475',
    duration: '1 hr',
    image: '/learn-skinpen-hero-treatment.png',
    imageAlt: 'SkinPen microneedling treatment at The Skincare Studio',
    bookUrl: serviceBookingUrlOverrides['SkinPen Microneedling'],
  },
  {
    name: 'Hydrafacial Deluxe',
    tag: 'Instant glow',
    desc: 'Deep cleanse, extractions, and customized boosters for hydrated, luminous skin.',
    price: '$275',
    duration: '1 hr 15 min',
    image: '/learn-hydrafacial-treatment.png',
    imageAlt: 'Hydrafacial treatment at The Skincare Studio',
    bookUrl: serviceBookingUrlOverrides['Hydrafacial Deluxe'],
  },
  {
    name: 'GLO2Facial Signature',
    tag: 'Radiance',
    desc: 'Oxygenation facial that exfoliates, infuses nutrients, and leaves skin instantly brighter.',
    price: '$225',
    duration: '1 hr',
    image: '/learn-glo2facial-treatment.png',
    imageAlt: 'GLO2Facial treatment at The Skincare Studio',
    bookUrl: serviceBookingUrlOverrides['GLO2Facial Signature'],
  },
]

const socials = [
  {
    name: 'Instagram',
    handle: '@theskincarestudio.ct',
    href: socialLinks.instagram,
    desc: 'Treatments, results, and studio life.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@skincarestudiomed',
    href: socialLinks.tiktok,
    desc: 'Tips, treatments, and real studio energy.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-1.99-.43v-4.6h1.99z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'The Skincare Studio CT',
    href: socialLinks.facebook,
    desc: 'Reviews, updates, and community.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
]

function padSlots(items, minCount) {
  const slots = [...items]
  while (slots.length < minCount) slots.push(null)
  return slots
}

function MediaSlot({ label, className }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4 text-center ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-luxury text-accentBlue">Add media</span>
      <p className="text-[13px] leading-snug text-slate-500">{label}</p>
    </div>
  )
}

export function LandingPage() {
  const consultUrl = serviceBookingUrlOverrides['In-Studio Facial Consultation']

  return (
    <>
      <Helmet>
        <title>Welcome | The Skincare Studio Medical Spa in Stratford, CT</title>
        <meta
          name="description"
          content="Welcome to The Skincare Studio in Paradise Green, Stratford. See what we believe in, our most popular treatments, studio photos and videos, then book online."
        />
        <link rel="canonical" href={landingUrl} />
        <meta property="og:title" content="Welcome to The Skincare Studio | Stratford, CT" />
        <meta
          property="og:description"
          content="Award-winning medical spa care for all skin types. Explore popular treatments, follow us, and book your visit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={landingUrl} />
        <meta property="og:image" content="https://www.theskincarestudioct.com/hero-studio-wall-branding.png" />
        <meta property="og:image:alt" content="The Skincare Studio wall logo with tagline Your Skin Deserves Better" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="border-b border-warmStone/50 bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-7 text-center sm:px-8 sm:py-9 lg:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">
            Paradise Green · Stratford, CT
          </p>
          <h1 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:text-3xl">
            Welcome to The Skincare Studio
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-[14px] leading-[1.6] text-slate-600 sm:text-[15px]">
            Award-winning medical spa care for all skin types. Natural results, never overdone.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accentNavy px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-accentNavy/90"
            >
              Book now
            </a>
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:border-accentBlue"
            >
              Call {contactDetails.phone}
            </a>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-accentNavy transition-all duration-200 hover:scale-110 hover:border-accentBlue"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Most popular</p>
                <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                  The treatments clients book again and again.
                </h2>
              </div>
              <a
                href={consultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:text-accentBlue hover:underline"
              >
                Not sure yet? Book a consultation →
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {popularTreatments.map((item, i) => (
              <ScrollReveal key={item.name} direction="up" delay={i * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="overflow-hidden">
                    <ZoomableImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="aspect-[4/3] w-full object-cover"
                      wrapperClassName="block w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">{item.tag}</p>
                    <h3 className="mt-1.5 font-serif text-xl font-semibold tracking-tight text-accentNavy">{item.name}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-slate-600">{item.desc}</p>
                    <p className="mt-3 text-[13px] font-medium text-slate-500">
                      {item.price} · {item.duration}
                    </p>
                    <a
                      href={item.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-accentNavy px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accentNavy/90"
                    >
                      Book {item.name}
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/40 bg-cream py-8 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {recognitions.map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-white p-3.5 sm:rounded-2xl sm:p-5">
                <svg className="mb-2 h-5 w-5 text-accentGreen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[15px] leading-[1.6] text-accentNavy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The studio</p>
                <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                  Science, artistry, and care in one place.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.7] text-slate-600 sm:mt-5">
                  Founded by Terri Miller, RN, The Skincare Studio Medical Spa was built for clients who want expert aesthetic care that still feels personal. We specialize in all skin types, and we welcome every client seeking natural, lasting results.
                </p>
                <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                  From neurotoxin and fillers to peels, facials, laser, and regenerative treatments, every visit starts with listening, then a plan that fits your skin and your goals.
                </p>
                <ul className="mt-6 space-y-3">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex gap-2.5 text-[15px] leading-[1.6] text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentGreen" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={80}>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-soft">
                <ZoomableImage
                  src="/about-team-full-group.png"
                  alt="The Skincare Studio team in Paradise Green, Stratford"
                  className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4]"
                  wrapperClassName="block w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-cream/40 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Before &amp; after</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Real client results
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-slate-500">
                Drag the slider to compare.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {padSlots(landingBeforeAfter, landingBeforeAfterSlotCount).map((item, i) => (
              <div key={item?.label || `ba-slot-${i}`}>
                {item?.before && item?.after ? (
                  <BeforeAfterSlider {...item} />
                ) : (
                  <MediaSlot label="Before & after slider" className="aspect-[3/4]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-cream/60 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">What we believe</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Beautiful skin should feel like you.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                We do not chase trends. We build confidence with evidence-based care, honest guidance, and results that look refreshed, balanced, and never overdone.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 80}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
                  <p className="font-serif text-lg font-semibold tracking-tight text-accentNavy">{item.title}</p>
                  <p className="mt-2 text-[14px] leading-[1.65] text-slate-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-cream/40 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Inside the studio</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Videos and photos from the studio.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-slate-500">
                A look at treatments on TikTok and our space in Stratford.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 space-y-12 sm:mt-12 md:space-y-16">
            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">TikTok</p>
                  <h3 className="mt-1 font-serif text-xl tracking-tight text-accentNavy sm:text-2xl">See us in action</h3>
                </div>
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accentNavy transition-colors hover:text-accentBlue hover:underline"
                >
                  Follow @skincarestudiomed →
                </a>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {padSlots(landingTikToks, landingTikTokSlotCount).map((video, i) => (
                  <div key={video?.src || `tiktok-slot-${i}`} className="overflow-hidden rounded-2xl">
                    {video?.src ? (
                      <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <AutoPlayVideo src={video.src} alt={video.alt || 'The Skincare Studio on TikTok'} />
                      </div>
                    ) : (
                      <MediaSlot label="TikTok video" className="aspect-[9/16]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-warmStone/50 pt-10 md:pt-12">
              <p className="text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">Studio photos</p>
              <h3 className="mt-1 font-serif text-xl tracking-tight text-accentNavy sm:text-2xl">Our space in Paradise Green</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                {padSlots(landingStudioPhotos, landingPhotoSlotCount).map((photo, i) => (
                  <div key={photo?.src || `photo-slot-${i}`} className="overflow-hidden rounded-2xl">
                    {photo?.src ? (
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <ZoomableImage
                          src={photo.src}
                          alt={photo.alt || 'The Skincare Studio'}
                          className="aspect-[4/5] w-full object-cover"
                          wrapperClassName="block w-full"
                        />
                      </div>
                    ) : (
                      <MediaSlot label="Studio photo" className="aspect-[4/5]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Follow along</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
                Stay connected.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-slate-500">
                See new treatments, results, and studio life on the channels you already use.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
            {socials.map((social, i) => (
              <ScrollReveal key={social.name} direction="up" delay={i * 80}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accentBlue/40 hover:bg-white hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accentNavy text-white">
                    {social.icon}
                  </span>
                  <p className="mt-4 font-serif text-xl font-semibold text-accentNavy">{social.name}</p>
                  <p className="mt-1 text-sm font-medium text-accentBlue">{social.handle}</p>
                  <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">{social.desc}</p>
                  <span className="mt-4 text-sm font-semibold text-accentNavy">Follow →</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-gradient-to-br from-accentNavy via-accentNavy/98 to-accentNavy py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8 lg:px-12">
          <ScrollReveal direction="zoom">
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Your next step</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-white sm:text-4xl">
              Ready when you are.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.75] text-white/75">
              Book a consultation or jump straight into a favorite treatment.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accentGreen px-7 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Book your appointment
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10 hover:scale-105"
              >
                Get directions
              </a>
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              {openingHours[0].days}: {openingHours[0].hours} · {openingHours[1].days}: {openingHours[1].hours}
            </p>
            <p className="mt-2 text-[14px] text-white/60">
              <Link to="/services" className="underline decoration-white/30 underline-offset-2 hover:text-white">
                Browse all treatments
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
