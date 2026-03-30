import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { bookingUrl } from '../data'
import { ScrollReveal } from '../components/ScrollReveal'

export function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | The Skincare Studio Medical Spa | Stratford, CT</title>
        <meta name="description" content="Terms & Conditions, Privacy Policy, Cancellation Policy, and Payment Methods for The Skincare Studio Medical Spa in Stratford, CT." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/terms" />
        <meta property="og:title" content="Terms &amp; Conditions | The Skincare Studio Medical Spa | Stratford, CT" />
        <meta property="og:description" content="Terms & Conditions, Privacy Policy, Cancellation Policy, and Payment Methods for The Skincare Studio Medical Spa in Stratford, CT." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.theskincarestudioct.com/studio-lounge.png" />
        <meta property="og:image:alt" content="The Skincare Studio Medical Spa in Stratford, CT" />
      </Helmet>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 text-center lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">The Skincare Studio Medical Spa</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-accentNavy md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              className="inline-flex items-center gap-2 rounded-full bg-accentNavy px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Your Appointment
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-accentBlue/40 bg-accentBlue/5 px-6 py-3 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-warmStone/50 bg-white py-16">
        <div className="mx-auto max-w-3xl px-8 lg:px-12">

          <ScrollReveal direction="up" delay={0}>
            <div className="prose-section">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Privacy Policy</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                The Skincare Studio LLC is committed to protecting the privacy of visitors to our website and our clients.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">
                The Skincare Studio LLC will never, under any circumstances, sell, distribute or rent your name, company name, mailing address, postal code, email address or any other personal or business information you provide to us through our website to any third party, except as may be required by law. We will only use the information you share with us for the purposes of delivering medical services to you, informing you about our procedures, or providing you with other information from The Skincare Studio LLC.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">
                We do not automatically gather any personal information from you, such as your name, phone number, email or address. This information is only obtained if you supply it voluntarily, usually through contacting us via email, phone or registering through a form on our site. Any personal information you do provide is protected under the Federal Privacy Act.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">How We Use the Information We Collect</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                We receive and securely store information that you provide to us through our website or other mode (i.e., email or telephone). When you send a question or comment, request information or schedule an appointment with The Skincare Studio LLC, you provide us with certain contact and private, personal information to enable us to understand your needs, provide you with quick service, and contact you to obtain further information or schedule an appointment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">How to Unsubscribe</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                We may periodically send you emails containing information that we think you may find relevant using the email address that you have provided. If you no longer wish to receive periodic emails from us, please follow the opt-out instructions located at the bottom of the email. The Skincare Studio LLC complies fully with the CAN-SPAM Act.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">How to Utilize Our Website</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                The information contained on our website is information to be read for purposes of general interest in the subjects of skincare. Information contained within this site, our blog and periodic emails does not constitute medical advice nor physician representation by The Skincare Studio LLC.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Security</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                Our site employs industry standard security measures designed to protect against loss, misuse or alteration of information you provide to us via our website. The Skincare Studio LLC is not responsible for unauthorized access to information by hackers or others who have obtained such access through illegal means. We use software that receives and records the Internet Protocol (IP) address of the computer that has contacted our website. We make no attempt to link these addresses with the identity of individuals visiting our site. We do not utilize cookies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Linked Sites</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                The Skincare Studio LLC may include links to external sites on our website to provide you with helpful resources. The inclusion of any link does not imply our endorsement of such external website, its products, advice, services or content offered at such site. If you link to a third-party site from our website, any information you encounter on that site is not subject to this privacy statement. Therefore, you should consult privacy policies of each site you visit.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Changes and Questions</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                The Skincare Studio LLC reserves the right to revise this policy at any time by posting a new privacy policy at this location. Please check this page periodically for changes. Your continued use of this website signifies your consent to this privacy policy statement.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Spa Policies &amp; Procedures</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                This facility is dedicated to the service of each individual client. Our goal is to provide you with a relaxing experience where you are able to focus on your skin's health and wellness, as well as your personal self-care. With your understanding of and cooperation with the Spa Policies and Procedures, we will be able to maintain this empowering environment and continue to provide you and every client with exceptional service.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">
                We strive to render excellent care to you and the rest of our clients. Your care and treatment is a priority for us. We also ask that you respect your specialist's time and expertise as well.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Cancellation Policy</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                We request that you give a notice of at least <span className="font-semibold text-accentNavy">48 hours</span> to your scheduled session in the event that you cannot make it. If cancelled within 48 hours of the scheduled time, you will be charged full price of the appointment.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">
                Additionally, if a client misses an appointment or is 10 or more minutes late for an appointment, we reserve the right to charge a fee. This fee consists of the entire cost of the missed appointment. If the appointment was booked online with a deposit, the remaining balance will be charged to the account and an invoice of the remaining balance will be sent via email.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">
                We also do not accept refunds or returns of any kind.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Facility Guidelines</h2>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.75] text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue" />
                  Children are not permitted in the treatment rooms. Any child in the lobby must be supervised by an adult at all times.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue" />
                  No food, beverages, or pets (except registered service animals) are permitted in the spa facility to maintain a sanitary environment.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue" />
                  Guests may not accompany clients in the treatment rooms but are welcome to enjoy the lobby.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue" />
                  No client photography or videography is allowed during treatments, except when approved by the treatment provider.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Aftercare Instructions</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-600">
                After your treatment, follow our step-by-step aftercare guides to support healing and get the best results. We provide detailed instructions for VI Peel (Face & Body), Microneedling SkinPen, Chemical Peel, Facial Balancing, PRFM, Neurotoxin, and Filler.
              </p>
              <Link
                to="/aftercare"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accentNavy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                View Aftercare Instructions
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-12 border-t border-warmStone/50 pt-10">
              <h2 className="font-serif text-2xl tracking-tight text-accentNavy">Payment Methods</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {['Credit / Debit Cards', 'HSA / FSA', 'Afterpay', 'Klarna', 'Cherry', 'Offline Payments'].map((method) => (
                  <div key={method} className="rounded-xl border border-slate-200 bg-cream/40 px-4 py-3 text-center text-[14px] text-slate-600">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={50}>
            <div className="mt-16 rounded-2xl border-2 border-accentBlue/20 bg-accentBlue/5 p-8 text-center">
              <p className="text-lg font-semibold text-accentNavy">Questions about our policies?</p>
              <p className="mt-2 text-[15px] text-slate-600">
                We're here to help. Reach out or book your appointment below.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:203-377-0166"
                  className="inline-flex items-center gap-2 rounded-full bg-accentNavy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  (203) 377-0166
                </a>
                <a
                  href="mailto:info@theskincarestudioct.com"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-accentBlue/40 bg-white px-5 py-2.5 text-sm font-semibold text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
                >
                  Email Us
                </a>
                <a
                  href={bookingUrl}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-accentBlue/40 bg-white px-5 py-2.5 text-sm font-semibold text-accentNavy transition-all duration-200 hover:border-accentBlue hover:bg-accentBlue hover:text-white hover:scale-105"
                >
                  Book Online
                </a>
              </div>
              <p className="mt-4 text-[14px] text-slate-500">3586 Main Street, Stratford, CT 06614</p>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  )
}
