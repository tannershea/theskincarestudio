import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { learnCategories, learnTopics } from '../data/learnTopics'
import { LearnHubBackToTop } from '../components/learn/LearnHubBackToTop'
import { LearnHubSearch } from '../components/learn/LearnHubSearch'
import { learnCardHover, learnEyebrow, learnFocusRing } from '../components/learn/learnUi'

const BASE = 'https://www.theskincarestudioct.com'

function getTopicSearchText(topic) {
  const brandText =
    topic.brands?.map((b) => [b.name, b.heroImageAlt, b.logoImageAlt].filter(Boolean).join(' ')).join(' ') ?? ''

  return [
    topic.title,
    topic.eyebrow,
    topic.slug.replace(/-/g, ' '),
    topic.metaDescription,
    brandText,
    ...(topic.intro ?? []),
    ...(topic.highlights ?? []),
  ]
    .join(' ')
    .toLowerCase()
}

function topicMatchesQuery(topic, query) {
  if (!query) return true
  return getTopicSearchText(topic).includes(query)
}

export function LearnHubPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const isSearching = normalizedQuery.length > 0

  const filteredCategories = useMemo(
    () =>
      learnCategories
        .map((cat) => ({
          category: cat,
          topics: learnTopics.filter(
            (t) => t.categoryId === cat.id && topicMatchesQuery(t, normalizedQuery),
          ),
        }))
        .filter((group) => group.topics.length > 0),
    [normalizedQuery],
  )

  const resultCount = useMemo(
    () => filteredCategories.reduce((sum, group) => sum + group.topics.length, 0),
    [filteredCategories],
  )

  return (
    <>
      <Helmet>
        <title>Learn | Treatments, Brands & Care Guides | The Skincare Studio Stratford, CT</title>
        <meta
          name="description"
          content="Explore SkinPen Microneedling, VI Peel, lasers, Hydrafacial, PCA Skin, injectables, and more at The Skincare Studio Medical Spa in Stratford, Connecticut."
        />
        <link rel="canonical" href={`${BASE}/learn`} />
      </Helmet>

      <section className="relative overflow-hidden border-b border-warmStone/50 bg-gradient-to-b from-cream/90 via-white to-softBlue/15 pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-x-0 -top-32 h-[22rem] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(66,146,219,0.16),transparent_65%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-8 lg:px-12">
          <p className={learnEyebrow}>Education hub</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-serif text-[1.875rem] leading-[1.12] tracking-tight text-accentNavy md:text-4xl lg:text-[2.625rem]">
            Learn what makes our studio different.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-slate-600 md:text-[16px] md:leading-[1.72]">
            Clear guides on the technologies we use, the medical-grade skincare lines we trust, and how to plan visits
            in Stratford. Search below or jump ahead by category.
          </p>

          <LearnHubSearch
            value={searchQuery}
            onChange={setSearchQuery}
            resultCount={resultCount}
            hasQuery={isSearching}
          />

          {!isSearching ? (
            <nav
              className="mx-auto mt-10 max-w-4xl rounded-2xl border border-warmStone/40 bg-white/95 p-5 shadow-[0_4px_44px_-20px_rgba(22,50,80,0.28)] backdrop-blur-sm sm:p-6 md:p-7"
              aria-label="Browse by topic category"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accentBlue md:text-[15px]">
                Jump to a section
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {learnCategories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#learn-category-${cat.id}`}
                      className={`flex min-h-[3.75rem] items-center justify-center rounded-xl border border-slate-200/90 bg-gradient-to-b from-white to-cream/30 px-3 py-4 text-center text-base shadow-sm md:min-h-[4rem] md:text-[17px] ${learnFocusRing} ${learnCardHover}`}
                    >
                      <span className="font-serif text-[1.05em] font-semibold leading-snug tracking-tight text-accentNavy">
                        {cat.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white via-cream/[0.35] to-white py-12 pb-24 md:py-16 md:pb-16 lg:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:space-y-16 sm:px-8 lg:px-12 lg:space-y-[4.25rem]">
          {filteredCategories.length === 0 && isSearching ? (
            <div className="rounded-3xl border border-warmStone/35 bg-white px-6 py-14 text-center shadow-sm md:px-10 md:py-16">
              <p className="font-serif text-xl text-accentNavy md:text-2xl">No matching guides</p>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
                Try a shorter keyword, such as peel, filler, laser, facial, or a brand name.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className={`mt-6 inline-flex rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-accentNavy shadow-sm ${learnFocusRing} ${learnCardHover}`}
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredCategories.map(({ category: cat, topics }, catIndex) => (
              <div
                key={cat.id}
                id={`learn-category-${cat.id}`}
                className="scroll-mt-28 rounded-3xl border border-warmStone/35 bg-white p-6 shadow-[0_8px_48px_-28px_rgba(22,50,80,0.18)] md:p-8 lg:p-10"
              >
                <div className="flex flex-col gap-4 border-b border-warmStone/45 pb-6 text-center sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pb-7 sm:text-left">
                  <div className="min-w-0">
                    <p className={learnEyebrow}>
                      {String(catIndex + 1).padStart(2, '0')} · Topic group
                    </p>
                    <h2 className="mt-2 font-serif text-2xl tracking-tight text-accentNavy md:text-3xl">{cat.title}</h2>
                  </div>
                  <p className="max-w-xl text-[15px] leading-relaxed text-slate-600 sm:max-w-md sm:text-[16px] sm:leading-relaxed md:max-w-lg">
                    {cat.description}
                  </p>
                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {topics.map((topic) => (
                    <li key={topic.slug} className="flex">
                      <Link
                        to={`/learn/${topic.slug}`}
                        className={`group flex min-h-[13rem] w-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-cream/25 p-6 text-left shadow-sm ring-1 ring-transparent md:min-h-[13.5rem] md:p-7 ${learnFocusRing} hover:-translate-y-1 hover:border-accentBlue/30 hover:to-white hover:shadow-[0_16px_40px_-28px_rgba(45,106,169,0.35)] hover:ring-accentBlue/10`}
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-luxury text-accentBlue md:text-xs">
                          {topic.eyebrow}
                        </p>
                        <p className="mt-2.5 font-serif text-lg font-semibold leading-snug tracking-tight text-accentNavy transition-colors group-hover:text-accentBlue md:text-xl">
                          {topic.title}
                        </p>
                        <p className="mt-2.5 line-clamp-3 flex-1 text-[14px] leading-[1.6] text-slate-600 md:text-[15px] md:leading-[1.55]">
                          {topic.intro[0]}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accentNavy transition-all group-hover:gap-2 group-hover:text-accentBlue">
                          Read guide
                          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>

      <LearnHubBackToTop />
    </>
  )
}
