import { useState, useEffect } from 'react'

const defaultSlides = [
  { src: '/studio-lounge.png', alt: 'The Skincare Studio waiting area with comfortable seating and elegant decor' },
  { src: '/studio-botox-display.png', alt: 'Professional injectables and Botox Cosmetic display at The Skincare Studio' },
  { src: '/hero-treatment.png', alt: 'Professional skincare treatment at The Skincare Studio' },
]

export function ImageCarousel({ images = defaultSlides, interval = 6000 }) {
  const slides = images?.length ? images : defaultSlides
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [interval, slides.length])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? 'opacity-[0.25] z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.src})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accentNavy' : 'w-2 bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
