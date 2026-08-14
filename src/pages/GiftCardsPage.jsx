import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import {
  bookingUrl,
  giftCardUrl,
  giftCardsLabel,
  cherryFinancingUrl,
  cherryLogoSrc,
  careCreditUrl,
  careCreditLogoSrc,
  localBusinessSchema,
} from '../data'

const BASE = 'https://www.theskincarestudioct.com'

const paymentMethods = [
  { name: 'Cash', detail: 'Pay in studio at checkout.' },
  { name: 'Card', detail: 'Major credit and debit cards accepted.' },
  { name: 'HSA & FSA', detail: 'Use your health savings or flexible spending card for eligible treatments.' },
]

export function GiftCardsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
    return () => window.clearTimeout(timer)
  }, [hash])

  return (
    <>
      <Helmet>
        <title>{`${giftCardsLabel} | The Skincare Studio Medical Spa Stratford, CT`}</title>
        <meta
          name="description"
          content="Purchase digital gift cards and learn about flexible payment options at The Skincare Studio in Stratford, CT — cash, card, HSA/FSA, Cherry, and CareCredit."
        />
        <link rel="canonical" href={`${BASE}/gifts`} />
        <meta property="og:title" content={`${giftCardsLabel} | The Skincare Studio Stratford, CT`} />
        <meta
          property="og:description"
          content="Gift cards for treatments and skincare, plus flexible payment options including HSA/FSA, Cherry, and CareCredit."
        />
        <meta property="og:url" content={`${BASE}/gifts`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <section className="border-b border-warmStone/50 bg-gradient-to-b from-softGreen/30 via-cream/40 to-white py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accentGreen/30 bg-white/80 px-4 py-1.5 shadow-sm">
            <span className="text-base leading-none" aria-hidden>🎁</span>
            <span className="text-xs font-semibold uppercase tracking-luxury text-accentNavy">Instant digital delivery</span>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-luxury text-accentBlue sm:mt-7">
            {giftCardsLabel}
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-accentNavy sm:mt-5 sm:text-4xl md:text-5xl">
            Gift great skin. Pay your way.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.75] text-slate-600 sm:mt-7 sm:text-[16px]">
            Digital gift cards redeem toward facials, Botox, fillers, laser treatments, peels, and medical-grade skincare.
            Choose your amount, send in minutes, and let them pick what feels right.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-slate-600 sm:text-[16px]">
            Or invest in your own results with cash, card, HSA/FSA, Cherry, and CareCredit.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href={giftCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accentGreen px-8 py-3.5 text-[15px] font-bold tracking-wide text-accentNavy shadow-sm transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90 hover:shadow-lg"
            >
              Buy a Gift Card
              <span aria-hidden>→</span>
            </a>
            <a
              href="#payment-options"
              className="inline-flex items-center gap-2 rounded-full border border-accentNavy/20 bg-white px-8 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:border-accentNavy/40 hover:shadow-sm"
            >
              See payment options
            </a>
          </div>
          <p className="mt-4 text-[13px] text-slate-500">
            Instant digital gift cards · Flexible financing available in studio
          </p>
        </div>
      </section>

      <section id="payment-options" className="scroll-mt-24 border-t border-warmStone/50 bg-gradient-to-b from-cream/50 to-white py-10 md:py-14 lg:py-16" aria-labelledby="payment-options-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Flexible ways to pay</p>
            <h2 id="payment-options-heading" className="mt-3 font-serif text-2xl tracking-tight text-accentNavy sm:text-3xl">
              Payment options
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-slate-600 sm:text-[16px]">
              We make it easy to invest in your skin. The Skincare Studio accepts cash, card, HSA and FSA cards, plus
              financing through Cherry and CareCredit.
            </p>
          </div>

          <ul className="mx-auto mt-8 max-w-xl space-y-4 sm:mt-10">
            {paymentMethods.map((method) => (
              <li key={method.name} className="flex gap-3 border-b border-warmStone/40 pb-4 last:border-0 last:pb-0">
                <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
                <div>
                  <p className="font-semibold text-accentNavy">{method.name}</p>
                  <p className="mt-0.5 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">{method.detail}</p>
                </div>
              </li>
            ))}
            <li className="flex gap-3 border-b border-warmStone/40 pb-4">
              <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
              <div>
                <img
                  src={cherryLogoSrc}
                  alt="Cherry"
                  className="h-10 w-auto object-contain object-left sm:h-11"
                />
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                  Apply for flexible monthly payments through Cherry financing.
                </p>
                <a
                  href={cherryFinancingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accentNavy underline decoration-accentGreen/60 underline-offset-2 transition-colors hover:text-accentBlue"
                >
                  Learn about Cherry
                  <span aria-hidden>→</span>
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
              <div>
                <img
                  src={careCreditLogoSrc}
                  alt="CareCredit"
                  className="h-4 w-auto rounded-md object-contain sm:h-5"
                />
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                  Use CareCredit healthcare credit for eligible treatments and packages.
                </p>
                <a
                  href={careCreditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accentNavy underline decoration-accentGreen/60 underline-offset-2 transition-colors hover:text-accentBlue"
                >
                  Learn about CareCredit
                  <span aria-hidden>→</span>
                </a>
              </div>
            </li>
          </ul>

          <p className="mx-auto mt-8 max-w-lg text-center text-[14px] leading-relaxed text-slate-500 sm:mt-10 sm:text-[15px]">
            Questions about financing or what your HSA/FSA covers?{' '}
            <Link to="/contact" className="font-semibold text-accentNavy underline decoration-accentGreen/60 underline-offset-2 hover:text-accentBlue">
              Reach out
            </Link>{' '}
            and we will help you choose the best option.
          </p>
        </div>
      </section>

      <section className="border-t border-warmStone/50 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-12">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="text-center font-serif text-xl tracking-tight text-accentNavy sm:text-2xl">
              Why give a Skincare Studio gift card?
            </h2>
            <ul className="mx-auto mt-5 max-w-xl space-y-3 text-[15px] leading-[1.7] text-slate-600">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
                <span>Works toward facials, injectables, laser treatments, peels, and more.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
                <span>Also applies to medical-grade skincare purchased in studio.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
                <span>Flexible amounts online. A thoughtful gift they will actually use.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accentGreen" aria-hidden>✓</span>
                <span>Delivered digitally. Gift instantly, even from afar.</span>
              </li>
            </ul>
            <div className="mt-8 border-t border-warmStone/50 pt-6 text-center">
              <p className="mx-auto max-w-lg text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
                Not sure which treatment to gift?{' '}
                <Link to="/contact" className="font-semibold text-accentNavy underline decoration-accentGreen/60 underline-offset-2 hover:text-accentBlue">
                  Contact our team
                </Link>{' '}
                or{' '}
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accentNavy underline decoration-accentGreen/60 underline-offset-2 hover:text-accentBlue">
                  book a consultation
                </a>{' '}
                and we will help them find the perfect fit.
              </p>
              <a
                href={giftCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accentNavy px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-accentNavy/90 hover:shadow-lg"
              >
                Purchase a gift card online
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-accentNavy py-12 md:py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentGreen">224+ Google reviews</p>
          <h2 className="mt-3 font-serif text-2xl tracking-tight text-white sm:text-3xl">
            Ready to make someone's day?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
            Send a gift card in just a few clicks. They will thank you every time they look in the mirror.
          </p>
          <a
            href={giftCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accentGreen px-8 py-3.5 text-[15px] font-bold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90 hover:shadow-lg"
          >
            Buy a Gift Card Now
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  )
}
