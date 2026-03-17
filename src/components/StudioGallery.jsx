const defaultImages = [
  { src: '/studio-lounge.png', alt: 'Elegant waiting area at The Skincare Studio' },
  { src: '/studio-botox-display.png', alt: 'Professional injectables display at The Skincare Studio' },
  { src: '/hero-treatment.png', alt: 'Skincare treatment in progress at The Skincare Studio' },
]

export function StudioGallery({ images = defaultImages }) {
  const galleryImages = images?.length ? images : defaultImages
  return (
    <section className="border-t border-warmStone/50 bg-cream/50 py-20">
      <div className="mx-auto max-w-5xl px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Our Space</p>
          <h2 className="mt-3 font-serif text-3xl font-normal leading-tight tracking-tight text-accentNavy md:text-4xl">
            A calm, welcoming environment for your care
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
