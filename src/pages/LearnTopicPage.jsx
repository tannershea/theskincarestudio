import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import { bookingUrl } from '../data'
import { getLearnTopicBySlug } from '../data/learnTopics'
import { MediaPlaceholder } from '../components/learn/MediaPlaceholder'
import { LearnBrandSidebar } from '../components/learn/LearnBrandSidebar'
import { ZoomableImage } from '../components/learn/ZoomableImage'
import { learnEyebrow, learnFocusRing, learnSectionId } from '../components/learn/learnUi'

const BASE = 'https://www.theskincarestudioct.com'

const LOGO_ASPECT = {
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
  landscape: 'aspect-[5/2]',
  banner: 'aspect-[634/221]',
  lockup: 'aspect-[256/89]',
  revanesse: 'aspect-[512/219]',
}

const LOGO_FRAME = {
  light: 'border border-warmStone/40 bg-white/95',
  dark: 'border border-warmStone/25 bg-black',
}

const HERO_ASPECT = {
  portrait: 'aspect-[16/10] sm:aspect-[16/11] lg:aspect-[3/4] lg:min-h-[17.5rem]',
  wide: 'aspect-[16/10]',
  landscape: 'aspect-[5/2]',
}

function galleryGridClass(count) {
  if (count <= 1) return 'mt-8 grid gap-6 max-w-md mx-auto'
  if (count === 2) return 'mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto'
  return 'mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7'
}

export function LearnTopicPage() {
  const { slug } = useParams()
  const topic = getLearnTopicBySlug(slug || '')

  if (!topic) {
    return <Navigate to="/learn" replace />
  }

  const canonical = `${BASE}/learn/${topic.slug}`

  const hasBrandSidebar = Boolean(topic.brands?.length)
  const heroShowsFullImage = topic.heroImageFit === 'contain'
  const hasSidebarVisuals = Boolean(
    hasBrandSidebar ||
      topic.heroVideoSrc ||
      topic.heroImageSrc ||
      topic.placeholders?.hero ||
      topic.logoImageSrc ||
      topic.placeholders?.logo,
  )

  const galleryItems = topic.placeholders?.gallery ?? []
  const galleryCount = galleryItems.length

  return (
    <>
      <Helmet>
        <title>{`${topic.title} | Learn | The Skincare Studio Stratford, CT`}</title>
        <meta name="description" content={topic.metaDescription} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <article>
        {/* Title band */}
        <header className="border-b border-warmStone/45 bg-gradient-to-b from-white via-cream/[0.5] to-cream/40">
          <div className="mx-auto max-w-6xl px-4 py-9 text-center sm:px-8 md:py-11 lg:px-12">
            <nav
              className="mx-auto inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-warmStone/40 bg-white/90 px-3 py-1.5 text-[13px] text-slate-500 shadow-sm backdrop-blur-sm"
              aria-label="Breadcrumb"
            >
              <Link to="/" className={`rounded-md px-2 transition-colors hover:text-accentBlue ${learnFocusRing}`}>
                Home
              </Link>
              <span className="text-slate-300" aria-hidden>
                /
              </span>
              <Link to="/learn" className={`rounded-md px-2 transition-colors hover:text-accentBlue ${learnFocusRing}`}>
                Learn
              </Link>
              <span className="text-slate-300" aria-hidden>
                /
              </span>
              <span className="truncate px-2 font-medium text-accentNavy">{topic.title}</span>
            </nav>
            <Link
              to="/learn"
              className={`mx-auto mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-accentBlue ${learnFocusRing}`}
            >
              <span aria-hidden>←</span> All guides
            </Link>
            <p className={`mx-auto mt-6 max-w-2xl ${learnEyebrow}`}>{topic.eyebrow}</p>
            <h1 className="mx-auto mt-2 max-w-3xl font-serif text-[1.875rem] leading-[1.12] tracking-tight text-accentNavy md:text-4xl md:leading-[1.1]">
              {topic.title}
            </h1>
          </div>
        </header>

        {/* Overview + visuals: sidebar figure (no full-width hero) */}
        <section className="relative border-b border-warmStone/40 bg-gradient-to-br from-blueGray/[0.08] via-white to-cream/30 py-10 md:py-14 lg:py-16">
          <div
            className={`mx-auto grid max-w-6xl gap-10 px-4 sm:gap-11 sm:px-8 lg:items-start lg:gap-14 lg:px-12 xl:gap-16 ${hasSidebarVisuals ? 'lg:grid-cols-12' : ''}`}
          >
            {hasSidebarVisuals ? (
            <aside className="order-2 flex flex-col gap-5 lg:sticky lg:top-28 lg:order-1 lg:col-span-4 xl:col-span-4">
              {hasBrandSidebar ? (
                <LearnBrandSidebar brands={topic.brands} />
              ) : null}

              {!hasBrandSidebar && (topic.heroVideoSrc || topic.heroImageSrc || topic.placeholders?.hero) ? (
                <div>
                  <p className={learnEyebrow}>In this guide</p>
                  <figure
                    className={`mt-4 overflow-hidden rounded-2xl border border-warmStone/45 bg-white shadow-[0_16px_48px_-34px_rgba(22,50,80,0.45)] ring-1 ring-black/[0.04] ${heroShowsFullImage ? 'flex items-center justify-center' : ''}`}
                  >
                    {topic.heroVideoSrc ? (
                      <video
                        src={topic.heroVideoSrc}
                        controls
                        playsInline
                        preload="metadata"
                        className="aspect-[16/10] max-h-[min(288px,48vw)] w-full bg-slate-900 object-cover object-center sm:aspect-[16/11] sm:max-h-[min(320px,42vw)] lg:aspect-[3/4] lg:max-h-[min(500px,calc(100vh-10rem))] lg:min-h-[17.5rem]"
                        aria-label={topic.heroVideoAlt || topic.title}
                      >
                        Your browser does not support embedded video.
                      </video>
                    ) : topic.heroImageSrc ? (
                      <ZoomableImage
                        src={topic.heroImageSrc}
                        alt={topic.heroImageAlt || topic.title}
                        wrapperClassName={heroShowsFullImage ? 'flex w-full items-center justify-center' : ''}
                        className={
                          heroShowsFullImage
                            ? topic.heroAspect === 'portrait'
                              ? 'aspect-[3/4] w-full max-h-[min(340px,56vw)] object-contain object-center p-3 sm:max-h-[min(380px,48vw)] sm:p-4 lg:max-h-[min(460px,calc(100vh-12rem))]'
                              : `${HERO_ASPECT[topic.heroAspect] || HERO_ASPECT.wide} w-full max-h-[min(320px,48vw)] object-contain object-center p-2 sm:max-h-[min(360px,42vw)] sm:p-3 lg:max-h-[min(420px,calc(100vh-10rem))]`
                            : `${HERO_ASPECT.portrait} max-h-[min(288px,48vw)] w-full object-cover object-center sm:max-h-[min(320px,42vw)] lg:max-h-[min(500px,calc(100vh-10rem))]`
                        }
                      />
                    ) : (
                      <div className="flex min-h-[12rem] w-full lg:min-h-[22rem]">
                        <MediaPlaceholder
                          label={topic.placeholders.hero}
                          ratio="wide"
                          className="flex min-h-[12rem] w-full rounded-none border-0 shadow-none lg:min-h-[22rem]"
                        />
                      </div>
                    )}
                  </figure>
                </div>
              ) : !hasBrandSidebar && (topic.logoImageSrc || topic.placeholders?.logo) ? (
                <p className={learnEyebrow}>In this guide</p>
              ) : null}

              {!hasBrandSidebar && topic.logoImageSrc ? (
                <figure
                  className={`${LOGO_ASPECT[topic.logoAspect] || LOGO_ASPECT.square} flex w-full items-center justify-center overflow-hidden rounded-xl shadow-sm lg:mx-0 ${LOGO_FRAME[topic.logoTheme] || LOGO_FRAME.light} ${!(topic.heroVideoSrc || topic.heroImageSrc || topic.placeholders?.hero) ? 'mt-4' : ''}`}
                >
                  <ZoomableImage
                    src={topic.logoImageSrc}
                    alt={topic.logoImageAlt || 'Partner logo'}
                    wrapperClassName="flex h-full w-full items-center justify-center"
                    className={`max-h-full w-full object-contain object-center ${
                      topic.logoTheme === 'dark'
                        ? 'px-1.5 py-1 sm:px-2 sm:py-1'
                        : topic.logoAspect === 'square'
                          ? 'p-3 sm:p-4'
                          : topic.logoAspect === 'lockup' || topic.logoAspect === 'revanesse'
                            ? 'px-2 py-1 sm:px-2.5 sm:py-1'
                            : 'px-2 py-1 sm:px-3 sm:py-1.5'
                    }`}
                  />
                </figure>
              ) : !hasBrandSidebar && topic.placeholders.logo ? (
                <MediaPlaceholder
                  label={topic.placeholders.logo}
                  ratio={
                    topic.logoAspect === 'banner' || topic.logoAspect === 'lockup' || topic.logoAspect === 'revanesse'
                      ? topic.logoAspect
                      : 'logo'
                  }
                  className={`w-full rounded-xl border border-dashed border-slate-200/90 ${topic.logoTheme === 'dark' ? 'border-slate-600/90 bg-black text-slate-300' : ''} ${!(topic.heroVideoSrc || topic.heroImageSrc || topic.placeholders?.hero) ? 'mt-4' : ''}`}
                />
              ) : null}
            </aside>
            ) : null}

            <div
              className={`order-1 space-y-9 ${hasSidebarVisuals ? 'lg:order-2 lg:col-span-8 xl:col-span-8' : 'mx-auto max-w-3xl'}`}
            >
              <div>
                <p className={learnEyebrow}>Overview</p>
                <div className="mt-4 space-y-5 text-[15px] leading-[1.76] text-slate-700 md:text-[16px] md:leading-[1.74]">
                  {topic.intro.map((p, i) => (
                    <p key={`intro-${i}`}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className={learnEyebrow}>Quick takeaways</p>
                <ul className="mt-4 rounded-2xl border border-accentGreen/22 bg-gradient-to-br from-softGreen/45 to-white p-6 shadow-[0_8px_32px_-24px_rgba(22,50,80,0.18)] md:p-7">
                  {topic.highlights.map((h) => (
                    <li key={h} className="flex gap-3 border-b border-accentGreen/[0.12] py-4 text-[14px] leading-snug text-accentNavy first:pt-0 last:border-b-0 last:pb-0">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentGreen" aria-hidden />
                      <span className="text-pretty">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {galleryCount > 0 ? (
          <section className="border-b border-warmStone/45 bg-gradient-to-b from-softBlue/[0.06] via-white to-cream/35 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
              <div className="rounded-[1.65rem] border border-warmStone/40 bg-white/95 p-6 shadow-[0_24px_64px_-40px_rgba(22,50,80,0.38)] backdrop-blur-sm md:p-8 lg:p-10">
                <div className="flex flex-col gap-2 border-b border-warmStone/40 pb-6 text-center lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:text-left">
                  <div>
                    <p className={learnEyebrow}>Gallery</p>
                    <p className="mt-2 font-serif text-xl tracking-tight text-accentNavy md:text-2xl">See the experience</p>
                    <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-slate-500 md:text-[15px]">
                      In-studio video, photography, and results we share with patient consent.
                    </p>
                  </div>
                </div>

                <div className={galleryGridClass(galleryCount)}>
                  {galleryItems.map((g, i) => {
                    const isMedia = g && typeof g === 'object' && 'src' in g
                    if (isMedia && g.type === 'video') {
                      return (
                        <figure
                          key={g.src}
                          className="group overflow-hidden rounded-2xl border border-warmStone/35 bg-white shadow-[0_10px_36px_-24px_rgba(22,50,80,0.35)] ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-28px_rgba(22,50,80,0.45)] sm:col-span-1"
                        >
                          <video
                            src={g.src}
                            controls
                            playsInline
                            preload="metadata"
                            className="aspect-[3/4] w-full bg-slate-900 object-cover"
                            aria-label={g.alt || 'Treatment video'}
                          >
                            Your browser does not support embedded video.
                          </video>
                        </figure>
                      )
                    }
                    if (isMedia) {
                      return (
                        <figure
                          key={g.src}
                          className="group overflow-hidden rounded-2xl border border-warmStone/35 bg-white shadow-[0_10px_36px_-24px_rgba(22,50,80,0.35)] ring-1 ring-black/[0.03] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-28px_rgba(22,50,80,0.45)] sm:col-span-1"
                        >
                          <ZoomableImage
                            src={g.src}
                            alt={g.alt || ''}
                            className="aspect-[3/4] w-full object-cover object-center"
                          />
                        </figure>
                      )
                    }
                    return (
                      <div
                        key={`${typeof g === 'string' ? g : 'slot'}-${i}`}
                        className="transition duration-300 hover:-translate-y-0.5"
                      >
                        <MediaPlaceholder label={g} ratio="card" className="h-full min-h-[12.5rem] w-full rounded-2xl border-slate-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:min-h-[14rem]" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Deep sections */}
        <section className="border-b border-warmStone/40 bg-gradient-to-b from-white via-cream/40 to-softBlue/[0.08] py-12 md:py-16 lg:py-[5.25rem]">
          <div className="mx-auto max-w-4xl px-4 sm:px-8 lg:px-12">
            <div className="text-center lg:text-left">
              <p className={learnEyebrow}>Explore further</p>
              <h2 className="mt-2 font-serif text-2xl tracking-tight text-accentNavy md:text-3xl">Details worth knowing</h2>
              <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-600 lg:mx-0 lg:max-w-none">
                Practical notes from how we prepare your skin to how we personalize your plan.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.65rem] border border-warmStone/40 bg-white shadow-[0_20px_56px_-36px_rgba(22,50,80,0.35)] md:mt-12">
              {topic.sections.map((sec, i) => (
                <div
                  key={sec.title}
                  id={`learn-section-${learnSectionId(sec.title)}`}
                  className={`scroll-mt-28 border-l-[3px] border-l-accentBlue/35 px-6 py-7 md:border-l-[4px] md:px-10 md:py-9 ${i > 0 ? 'border-t border-warmStone/38' : ''}`}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                    <span className="shrink-0 font-serif text-3xl tabular-nums leading-none text-accentBlue/30 md:w-14 md:pt-0.5 md:text-4xl" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[1.2rem] leading-snug tracking-tight text-accentNavy md:text-2xl md:leading-snug">{sec.title}</h3>
                      <div className="mt-5 space-y-4 text-left text-[15px] leading-[1.76] text-slate-700 md:text-[16px] md:leading-[1.74]">
                        {sec.paragraphs.map((p, j) => (
                          <p key={`${sec.title}-${j}`}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="border-t border-warmStone/50 bg-gradient-to-br from-accentNavy via-accentNavy to-accentNavy/92 py-14 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-8 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">Next step</p>
            <h2 className="mx-auto mt-4 max-w-xl font-serif text-2xl tracking-tight text-white md:text-3xl lg:text-[2.125rem]">Ready to personalize this for your skin?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300 md:text-[16px]">
              Bring your questions to a consultation. We will align science, budget, and downtime so you never guess alone.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/learn"
                className={`inline-flex rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10 ${learnFocusRing}`}
              >
                All guides
              </Link>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex rounded-full bg-accentGreen px-7 py-3.5 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-[1.03] hover:shadow-lg ${learnFocusRing}`}
              >
                Book online
              </a>
              <Link
                to="/services"
                className={`inline-flex rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10 ${learnFocusRing}`}
              >
                Browse services
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}
