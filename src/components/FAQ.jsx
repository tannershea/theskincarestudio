import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { faqs } from '../data'
import { ScrollReveal } from './ScrollReveal'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  }

  return (
    <section className="bg-white py-20" aria-labelledby="faq-heading">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="mx-auto max-w-3xl px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-luxury text-accentBlue">
            FAQ
          </p>
          <h2 id="faq-heading" className="mt-3 font-serif text-3xl font-normal tracking-tight text-accentNavy md:text-4xl">
            Common Questions
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 80}>
            <div
              className="overflow-hidden rounded-2xl border border-slate-200 bg-cream/50 transition-all duration-300 ease-out hover:border-accentBlue/40 hover:bg-white hover:shadow-lg hover:-translate-y-1.5 hover:z-10"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:text-accentBlue"
              >
                <span className="font-serif text-lg font-medium tracking-tight text-accentNavy md:text-xl">{faq.q}</span>
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
                <div className="border-t border-slate-100 px-6 pb-5 pt-0">
                  <p className="text-base leading-[1.7] text-slate-600 md:text-lg">{faq.a}</p>
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
