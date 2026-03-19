import { useState } from 'react'
import { googleMapsUrl } from '../data'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="bg-gradient-to-br from-accentNavy via-accentNavy/98 to-accentNavy py-16">
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
              Stay in the Glow
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-slate-200">
              Join our list for exclusive offers, skincare tips, and first access to new treatments.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="min-w-0 flex-1 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-slate-300 focus:border-accentGreen focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-accentGreen px-6 py-3 text-sm font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:bg-accentGreen/90"
              >
                Subscribe
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-3 text-sm leading-relaxed text-accentGreen">Thanks! You're on the list.</p>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <iframe
              title="The Skincare Studio location"
              src="https://www.google.com/maps?q=The+Skincare+Studio+Medical+Spa+3586+Main+Street+Stratford+CT+06614&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 px-5 py-3 transition-colors hover:bg-white/15"
            >
              <p className="text-sm font-semibold text-white">3586 Main Street, Stratford, CT</p>
              <p className="text-xs text-slate-300">Paradise Green · Fairfield County · View on Google →</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
