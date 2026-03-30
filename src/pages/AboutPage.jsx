import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { bookingUrl } from '../data'
import { ScrollReveal } from '../components/ScrollReveal'
import { CountUp } from '../components/CountUp'

const aboutHeroImages = [
  '/about-storefront.png',
  '/about-brbc-award.png',
  '/about-botox-display.png',
]

function AboutHeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutHeroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {aboutHeroImages.map((src, i) => (
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

const teamMembers = [
  {
    name: 'Morine Cebert',
    role: 'Medical Director',
    credentials: 'PhD, FNP-C, RN, GYN',
    bio: 'Dr. Cebert brings extensive clinical expertise and oversight, ensuring the highest standards of patient safety across all procedures.',
    image: '/team-morine.png',
  },
  {
    name: 'Terri Miller',
    role: 'CEO & Founder',
    credentials: 'BSN, RN, Licensed Esthetician',
    bio: 'With over 15 years of experience in dermatology and plastic surgery, Terri founded The Skincare Studio to bring medical-grade aesthetic care to Fairfield County.',
    image: '/team-terri.png',
  },
  {
    name: 'Jessica Louisseize',
    role: 'Registered Nurse',
    credentials: 'BSN, RN',
    bio: 'Jessica brings nursing expertise and meticulous attention to detail as a trusted member of our injectable and treatment team.',
    image: '/team-jessica.png',
  },
  {
    name: 'Britney St. Pierre',
    role: 'Nurse Injector',
    credentials: '',
    bio: 'Britney brings precision and artistry to every injectable treatment with a keen eye for natural facial balance.',
    image: '/team-britney.png',
  },
  {
    name: 'Alix Agathos',
    role: 'Medical Assistant',
    credentials: '',
    bio: 'Alixandria supports our clinical team with hands-on assistance, ensuring every visit runs smoothly and comfortably.',
    image: '/team-alixandria.png',
  },
  {
    name: 'Iyanna Brookins',
    role: 'Medical Esthetician',
    credentials: '',
    bio: 'Iyanna specializes in advanced facial treatments and skincare protocols with a passion for results-driven care.',
    image: '/team-iyanna.png',
  },
  {
    name: 'Semhar Samuels',
    role: 'Practice Manager',
    credentials: '',
    bio: 'Semhar keeps The Skincare Studio running smoothly, delivering the elevated professional experience our clients expect.',
    image: '/team-semhar.png',
  },
  {
    name: 'Jenny Depina',
    role: 'Patient Coordinator',
    credentials: '',
    bio: 'Jenny ensures every client\'s experience — from scheduling to follow-up — is seamless, comfortable, and personalized.',
    image: '/team-jenny.png',
  },
]

const TEAM_GROUP_SIZE = 4
const teamGroups = (() => {
  const groups = []
  for (let i = 0; i < teamMembers.length; i += TEAM_GROUP_SIZE) {
    groups.push(teamMembers.slice(i, i + TEAM_GROUP_SIZE))
  }
  return groups
})()

const values = [
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
    title: 'Natural Results',
    desc: 'We enhance — never overdo. Every treatment aims for results that look like the best version of you.',
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
    title: 'Personalized Care',
    desc: 'No two clients are the same. We create custom treatment plans based on your skin, goals, and lifestyle.',
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
    title: 'Medical Expertise',
    desc: '15+ years of dermatology and plastic surgery experience behind every consultation and procedure.',
  },
  {
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
    title: 'Inclusive Beauty',
    desc: 'We celebrate and treat all skin types and tones with the respect and expertise they deserve.',
  },
]

const expertise = [
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    title: 'Laser Treatments',
    desc: 'Resurfacing, rejuvenation, and pigmentation correction with Lutronic Clarity II technology.',
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
    title: 'Facial Balancing',
    desc: 'PRFM and dermal fillers for natural, harmonious results tailored to your unique facial structure.',
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
    title: 'Neurotoxins',
    desc: 'Letybo and Daxxify to smooth wrinkles and enhance your natural features.',
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
    title: 'Skin Correction',
    desc: 'Chemical peels, microneedling, and advanced treatments for acne, hyperpigmentation, and texture.',
  },
]

export function AboutPage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "The Skincare Studio Medical Spa",
    "description": "Award-winning medical spa in Stratford, CT founded by Terri Miller. Specializing in Botox, fillers, laser treatments, and advanced skincare for all skin types.",
    "url": "https://www.theskincarestudioct.com/about",
    "founder": { "@type": "Person", "name": "Terri Miller" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3586 Main Street",
      "addressLocality": "Stratford",
      "addressRegion": "CT",
      "postalCode": "06614",
    },
    "telephone": "203-377-0166",
    "email": "info@theskincarestudioct.com",
    "award": [
      "PCA Skin USA National Esthetics Panel Recognition",
      "SkinPen Ambassador for Connecticut",
      "Bridgeport Regional Business Council Leadership Award",
    ],
  }

  return (
    <>
      <Helmet>
        <title>About Us | Award-Winning Medical Spa in Stratford, CT | The Skincare Studio</title>
        <meta name="description" content="The Skincare Studio Medical Spa in Stratford, CT — founded by Terri Miller, RN, with 15+ years in dermatology. Award-winning care for all skin types. PCA Skin USA recognized. SkinPen Ambassador for CT." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/about" />
        <meta property="og:title" content="About Us | Award-Winning Medical Spa | The Skincare Studio" />
        <meta property="og:description" content="Stratford's premier medical spa. 15+ years of dermatology expertise, personalized care for all skin types, and natural-looking results. Recognized by PCA Skin USA and BRBC." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/about" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <AboutHeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-8 md:py-20 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accentGreen" />
                <span className="text-xs font-semibold uppercase tracking-luxury text-white">Award-Winning Medical Spa &middot; Stratford, CT</span>
              </div>
              <h1 className="mt-4 font-serif text-[1.75rem] leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Where science, artistry, and care come together.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.65] text-white/80 sm:mt-6 sm:text-[16px] sm:leading-[1.75]">
                The Skincare Studio Medical Spa combines advanced technology, expert medical care, and a personalized approach to help every client achieve radiant, healthy skin.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={bookingUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Book a consultation
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10 hover:scale-105"
                >
                  Explore treatments <span className="text-white/60">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* At a glance: stats + our story (one scroll block) */}
      <section className="border-t border-warmStone/50 bg-white py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-8 md:space-y-12 lg:px-12 lg:space-y-14">
          <div className="rounded-2xl border border-warmStone/60 bg-cream/40 px-4 py-6 sm:px-6 sm:py-8">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-luxury text-accentBlue">At a glance</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
              {[
                { value: '15+', label: 'Years of Experience' },
                { value: '10K+', label: 'Treatments Performed' },
                { value: '4.9', label: 'Google Rating' },
                { value: '8', label: 'Expert Team Members' },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} direction="up" delay={i * 80}>
                  <div className="text-center">
                    <CountUp value={stat.value} className="text-3xl font-bold text-accentNavy md:text-4xl" duration={2000} />
                    <p className="mt-1 text-xs font-semibold uppercase tracking-luxury text-accentBlue">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <ScrollReveal direction="left" delay={0}>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm h-full">
                <img
                  src="/studio-display-table.png"
                  alt="The Skincare Studio product display with brochures and skincare information in Stratford, CT"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              <ScrollReveal direction="right" delay={100}>
                <div className="rounded-xl border border-slate-100 bg-cream/50 p-5 sm:rounded-2xl sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Our Story</p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-accentNavy md:text-3xl">
                    Built on passion, driven by results.
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                    Founded by Terri Miller — a registered nurse and licensed esthetician with years of experience in dermatology and aesthetics — The Skincare Studio was created as a sanctuary where science, artistry, and personalized care come together. Located in the heart of Paradise Green in Stratford, Connecticut, our award-winning medical spa serves clients from across Fairfield County.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accentBlue/30 hover:shadow-lg">
                    <p className="font-serif text-lg font-semibold text-accentNavy">All Skin Types</p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-slate-600">Expert care for diverse skin types and tones — understanding unique needs is at the core of what we do.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accentBlue/30 hover:shadow-lg">
                    <p className="font-serif text-lg font-semibold text-accentNavy">Luxury + Clinical</p>
                    <p className="mt-2 text-[13px] leading-[1.5] text-slate-600">We blend medical precision with a calm, luxury spa experience — so you feel confident and cared for.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* People & expertise (one scroll block) */}
      <section className="border-t border-warmStone/50 bg-cream/40 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-8 md:space-y-16 lg:px-12">
          <div>
          <ScrollReveal direction="up" delay={0}>
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Experienced Nurses & Estheticians</p>
                <h2 className="mt-3 font-serif text-3xl tracking-tight text-accentNavy md:text-4xl">
                  Meet the team.
                </h2>
              </div>
              <a
                href={bookingUrl}
                className="shrink-0 rounded-full border border-accentNavy px-6 py-2.5 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:bg-accentNavy hover:text-white"
              >
                Book with our team
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-8 space-y-8 sm:mt-10">
            {teamGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
              >
                {group.map((member, i) => (
                  <ScrollReveal key={member.name} direction="up" delay={(groupIndex * TEAM_GROUP_SIZE + i) * 60}>
                    <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-accentBlue/20">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm transition-all duration-300 group-hover:border-accentBlue/30 group-hover:shadow-md">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-softBlue text-xl font-semibold text-accentBlue">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-accentNavy">{member.name}</h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">{member.role}</p>
                      {member.credentials && (
                        <p className="mt-1 text-[11px] text-slate-400">{member.credentials}</p>
                      )}
                      <p className="mt-3 flex-1 text-[13px] leading-[1.5] text-slate-500">{member.bio}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ))}
          </div>
          </div>

          <div className="border-t border-warmStone/40 pt-10 md:pt-14">
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12">
            <ScrollReveal direction="left" delay={0}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Our Expertise</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-accentNavy md:text-4xl">
                  Medical-grade treatments that deliver real, lasting results.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                  We specialize in advanced skincare and aesthetic treatments — every treatment plan is customized to your individual goals, skin type, and lifestyle. Our team of experienced nurses and estheticians uses only the highest quality products and state-of-the-art equipment.
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accentNavy transition-all duration-200 hover:gap-2.5"
                >
                  View all treatments <span>→</span>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {expertise.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-softBlue text-accentBlue">
                      {item.icon}
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-semibold tracking-tight text-accentNavy">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-[1.5] text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          </div>
        </div>
      </section>

      {/* Recognition + values (one scroll block) */}
      <section className="border-t border-warmStone/50 bg-white py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-8 md:space-y-14 lg:px-12">
          <div>
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Recognized Excellence</p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-accentNavy md:text-3xl">
                Awards & industry recognition
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {[
              {
                title: 'PCA Skin USA',
                subtitle: 'National Esthetics Panel',
                desc: 'Recognized for excellence and innovation in professional skincare and advanced peel protocols.',
              },
              {
                title: 'SkinPen Ambassador',
                subtitle: 'State of Connecticut',
                desc: 'Designated as the official SkinPen microneedling ambassador, reflecting mastery in regenerative skin treatments.',
              },
              {
                title: 'BRBC Leadership',
                subtitle: 'Community Impact Award',
                desc: 'Acknowledged by the Bridgeport Regional Business Council for outstanding leadership and community contribution.',
              },
            ].map((award, i) => (
              <ScrollReveal key={award.title} direction="up" delay={i * 100}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-warmStone/30 bg-cream/30 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accentNavy/5">
                    <svg className="h-6 w-6 text-accentNavy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.392V2.721" /></svg>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-accentNavy">{award.title}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">{award.subtitle}</p>
                  <p className="mt-3 flex-1 text-[13px] leading-[1.5] text-slate-500">{award.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          </div>

          <div className="border-t border-warmStone/40 pt-10 md:pt-12">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">What We Stand For</p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-accentNavy sm:text-3xl md:text-4xl">
                Our values guide every treatment.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 100}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-softBlue text-accentBlue">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-accentNavy sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accentNavy via-accentNavy/98 to-accentNavy py-12 md:py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accentBlue/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8 lg:px-12">
          <ScrollReveal direction="up" delay={0}>
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Our Mission</p>
            <h2 className="mt-6 font-serif text-3xl leading-snug tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              "To empower every client with personalized, evidence-based skincare that reveals true confidence from within."
            </h2>
            <div className="mx-auto mt-10 h-px w-16 bg-accentGreen/50" />
            <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.75] text-slate-300">
              Beautiful skin isn't about chasing trends — it's about understanding your unique needs and delivering results that look natural, feel authentic, and last. We blend medical precision with a luxury spa experience, creating a sanctuary where you can feel comfortable, confident, and cared for from the moment you walk in.
            </p>
            <a
              href={bookingUrl}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accentGreen px-7 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Start your journey
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Location + next step (one scroll block) */}
      <section className="border-t border-warmStone/50 bg-gradient-to-b from-cream/30 via-cream/20 to-blueGray/25 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-8 md:space-y-14 lg:px-12">
          <ScrollReveal direction="up" delay={0}>
            <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Serving Fairfield County</p>
                <h2 className="mt-3 font-serif text-2xl tracking-tight text-accentNavy md:text-3xl">
                  Welcoming clients from across the region.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">
                  Located at 3586 Main Street in Paradise Green, Stratford, we welcome clients from Norwalk, Stamford, Bridgeport, Trumbull, Shelton, Fairfield, Milford, and surrounding towns throughout Fairfield County.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:203-377-0166"
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-accentBlue/30 bg-accentBlue/5 px-5 py-2.5 text-[15px] font-semibold text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    (203) 377-0166
                  </a>
                  <a
                    href="mailto:info@theskincarestudioct.com"
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-accentBlue/30 bg-accentBlue/5 px-5 py-2.5 text-[15px] font-semibold text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
                  >
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    info@theskincarestudioct.com
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {['Stratford', 'Norwalk', 'Stamford', 'Bridgeport', 'Trumbull', 'Shelton', 'Fairfield', 'Milford'].map((town) => (
                  <div
                    key={town}
                    className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-[13px] font-medium text-slate-600 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-accentBlue hover:bg-accentBlue/5 hover:text-accentNavy hover:shadow-md active:scale-[0.98]"
                  >
                    {town}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-center shadow-soft sm:p-8 md:p-10">
            <ScrollReveal direction="zoom" delay={0}>
              <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Your Next Step</p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight text-accentNavy sm:text-3xl md:text-4xl">
                Ready to experience the difference?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-slate-600">
                Whether you're new to aesthetic treatments or looking for a new home for your skincare, we'd love to welcome you. Beautiful, balanced results — with medical expertise you can trust.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
                <a
                  href={bookingUrl}
                  className="group inline-flex items-center gap-2 rounded-full bg-accentNavy px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Book Your Appointment
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <Link
                  to="/services"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:bg-cream/80 hover:scale-105"
                >
                  View Services <span className="text-slate-400">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
