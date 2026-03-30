import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { faqs } from '../data'
import { ScrollReveal } from './ScrollReveal'

export function FAQ({ items = faqs, sectionTitle = "Common Questions", id = "faq-heading" }) {
  const [openIndex, setOpenIndex] = useState(-1)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  }

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20" aria-labelledby={id}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">
            FAQ
          </p>
          <h2 id={id} className="mt-2 font-serif text-2xl tracking-tight text-accentNavy sm:mt-3 sm:text-3xl md:text-4xl">
            {sectionTitle}
          </h2>
        </div>
        <div className="mt-6 space-y-2 sm:mt-10 sm:space-y-3 md:mt-12">
          {items.map((faq, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 80}>
            <div
              className="overflow-hidden rounded-2xl border border-slate-200 bg-cream/50 transition-all duration-300 ease-out hover:border-accentBlue/40 hover:bg-white hover:shadow-lg hover:-translate-y-1.5 hover:z-10"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors duration-200 hover:text-accentBlue sm:px-6 sm:py-5"
              >
                <span className="font-serif text-base font-semibold tracking-tight text-accentNavy sm:text-xl">{faq.q}</span>
                <svg
                  className={`ml-4 h-5 w-5 shrink-0 text-accentBlue transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-slate-100 px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                  <p className="text-[14px] leading-[1.65] text-slate-600 sm:text-[15px] sm:leading-[1.7]">{faq.a}</p>
                </div>
              )}
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
