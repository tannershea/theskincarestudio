import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { bookingUrl, giftCardUrl, giftCardsLabel, localBusinessSchema } from '../data'

const BASE = 'https://www.theskincarestudioct.com'

export function GiftCardsPage() {
  return (
    <>
      <Helmet>
        <title>{`${giftCardsLabel} | The Skincare Studio Medical Spa Stratford, CT`}</title>
        <meta
          name="description"
          content="Give the gift of great skin. Purchase digital gift cards for treatments and medical-grade skincare at The Skincare Studio in Stratford, Connecticut."
        />
        <link rel="canonical" href={`${BASE}/gifts`} />
        <meta property="og:title" content={`${giftCardsLabel} | The Skincare Studio Stratford, CT`} />
        <meta
          property="og:description"
          content="Digital gift cards for facials, injectables, laser treatments, and in-studio skincare at our Stratford medical spa."
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
          <p className="mt-6 text-xs font-semibold uppercase tracking-luxury text-accentBlue sm:mt-7">The Skincare Studio Medical Spa</p>
          <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-accentNavy sm:mt-5 sm:text-4xl md:text-5xl">
            Give the gift of confidence.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.75] text-slate-600 sm:mt-7 sm:text-[16px]">
            Digital gift cards redeem toward facials, Botox, fillers, laser treatments, peels, and medical-grade skincare.
            Choose your amount, send in minutes, and let them pick what feels right.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[14px] font-medium text-accentNavy/80 sm:mt-5 sm:text-[15px]">
            Perfect for birthdays, holidays, Mother's Day, and treating someone special.
          </p>
          <a
            href={giftCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accentGreen px-8 py-3.5 text-[15px] font-bold tracking-wide text-accentNavy shadow-sm transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90 hover:shadow-lg sm:mt-10"
          >
            Buy a Gift Card
            <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-[13px] text-slate-500">Secure checkout · You choose the amount · Redeem in studio</p>
        </div>
      </section>

      <section className="py-10 md:py-14 lg:py-16">
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
