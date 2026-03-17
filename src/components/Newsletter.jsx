import { useState } from 'react'

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
            <h2 className="font-serif text-2xl font-normal tracking-tight text-white md:text-3xl">
              Stay in the Glow
            </h2>
            <p className="mt-3 text-base leading-[1.6] text-slate-200 md:text-lg">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0!2d-73.1318!3d41.1845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3586+Main+Street%2C+Stratford%2C+CT!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="bg-white/10 px-5 py-3">
              <p className="text-sm font-semibold text-white">3586 Main Street, Stratford, CT</p>
              <p className="text-sm text-slate-300">Paradise Green · Fairfield County</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
