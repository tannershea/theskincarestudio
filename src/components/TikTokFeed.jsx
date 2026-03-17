import { useEffect, useRef } from 'react'
import { ScrollReveal } from './ScrollReveal'

const tiktokVideos = [
  { src: '/videos/tiktok-1.mp4', alt: 'Skincare treatment at The Skincare Studio' },
  { src: '/videos/tiktok-4.mp4', alt: 'Real results from The Skincare Studio' },
  { src: '/videos/tiktok-3.mov', alt: 'Skincare tips from The Skincare Studio' },
  { src: '/videos/tiktok-5.mov', alt: 'Behind the scenes at The Skincare Studio' },
]

function AutoPlayVideo({ src, alt }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      className="h-full w-full object-cover"
    />
  )
}

export function TikTokFeed() {
  return (
    <section className="border-t border-warmStone/50 bg-white py-20">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">
              Follow along
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-accentNavy md:text-4xl">
              See us in action
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.7] text-slate-500">
              Behind-the-scenes treatments, skincare tips, and real results from our studio.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiktokVideos.map((video, i) => (
            <ScrollReveal key={video.src} direction="up" delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[9/16]">
                  <AutoPlayVideo src={video.src} alt={video.alt} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.tiktok.com/@skincarestudiomed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:border-accentBlue hover:bg-slate-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.89a8.28 8.28 0 004.76 1.5V6.94a4.85 4.85 0 01-1-.25z"/></svg>
            Follow @skincarestudiomed
          </a>
        </div>
      </div>
    </section>
  )
}
