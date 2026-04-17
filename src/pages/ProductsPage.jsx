import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { ScrollReveal } from '../components/ScrollReveal'
import { bookingUrl } from '../data'

const productsHeroImages = [
  '/studio-display-table.png',
  '/studio-elta-display.png',
  '/studio-reception-customer.png',
]

function ProductsHeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % productsHeroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {productsHeroImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
}

const brands = ['All', 'PCA Skin', 'Elta MD', 'Obagi', 'iS Clinical', 'SkinCeuticals', 'Hydrinity', 'Other']

// Product images from theskincarestudioct.com/shop (Wix CDN)
const productImages = {
  'Epicutis Post Procedure Kit': '/products/epicutis-post-procedure-kit.png',
  'Skinscript Glycolic and Retinol Pads': '/products/skinscript-glycolic-and-retinol-pads.png',
  'Biojuve Hero Kit': '/products/biojuve-hero-kit.png',
  'Hydrateluxe': '/products/obagi-hydrateluxe.png',
  'Nu-Cil BioStim Scalp Serum': '/products/obagi-nu-cil-biostim-scalp-serum.png',
  'Elastiderm Firming Eye Cream': '/products/obagi-elastiderm-firming-eye-cream.png',
  'Laser Balm': 'https://static.wixstatic.com/media/75d8af_2ad6b549fad34dfea6d240e09a7eb9fc~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_85/75d8af_2ad6b549fad34dfea6d240e09a7eb9fc~mv2.jpeg',
  'Daily Dynamic Hydrator': '/products/is-clinical-daily-dynamic-hydrator.png',
  'MGF Age Renewal Cream': '/products/mgf-age-renewal-cream.png',
  'Clear Skin Daily Duo': 'https://static.wixstatic.com/media/7ad3b7_3942a8d494df4c789fc84ff439c49e1d~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_85/7ad3b7_3942a8d494df4c789fc84ff439c49e1d~mv2.jpeg',
  'A.G.E. Interrupter Ultra Serum': '/products/skinceuticals-age-interrupter-ultra-serum.png',
  'Winter Skin Essential Set': '/products/skinceuticals-winter-skin-essential-set.png',
  'RebalanceSkin Barrier Recovery Cream': '/products/obagi-rebalanceskin-barrier-recovery-cream.png',
  'Extra Strength Pads': '/products/is-clinical-extra-strength-pads.png',
  'Neckperfect Complex': '/products/is-clinical-neckperfect-complex.png',
  'Eye Renew Complex': '/products/hydrinity-eye-renew-complex.png',
  'Prelude Facial Treatment Cleanser': '/products/hydrinity-prelude-facial-treatment-cleanser.png',
  'Elastiderm Lift Up & Sculpt Moisturizer': '/products/obagi-elastiderm-lift-up-sculpt-moisturizer.png',
  'Restorative Post Procedure Kit': 'https://static.wixstatic.com/media/dc2300_9571cb07a81d486b8bff8083e6e67c10~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_85/dc2300_9571cb07a81d486b8bff8083e6e67c10~mv2.jpeg',
  'Daily Hydro-Drops Eye Gel Cream': '/products/obagi-daily-hydro-drops-eye-gel-cream.png',
  'UV Skin Recovery SPF 50': 'https://static.wixstatic.com/media/dc2300_01237d0aeb0c4b03a23352b097e5fb94~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_85/dc2300_01237d0aeb0c4b03a23352b097e5fb94~mv2.jpeg',
  'UV Skin Recovery Red Correcting Green Tint SPF 50': '/products/elta-md-uv-skin-recovery-red-correcting-green-tint-spf50.png',
  'Gentle Cleanser Cream': '/products/skinceuticals-gentle-cleanser-cream.png',
  'LHA Toner': '/products/skinceuticals-lha-toner.png',
  'Clear Daily Soothing UV Defense SPF 50': 'https://static.wixstatic.com/media/dc2300_46f461e709a543d697ae848e9ac7b0b1~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_85/dc2300_46f461e709a543d697ae848e9ac7b0b1~mv2.jpeg',
  'Hyacin Active Purifying Mist': '/products/hydrinity-hyacin-active-purifying-mist.png',
  'Pro-Heal Serum Advanced 15ML': 'https://static.wixstatic.com/media/dc2300_c04c48ff0e194f94b9fa5feb8ca464b2~mv2.jpeg/v1/fill/w_256,h_256,al_c,q_85/dc2300_c04c48ff0e194f94b9fa5feb8ca464b2~mv2.jpeg',
  'Vitamin B3 Brightening Serum': '/products/pca-vitamin-b3-brightening-serum.png',
  'Vitamin B3 Eye Brightening Cream': '/products/pca-vitamin-b3-eye-brightening-cream.png',
  'Daily Exfoliant': '/products/pca-daily-exfoliant.png',
  'Facial Wash Oily/Problem': '/products/pca-facial-wash-oily-problem.png',
  'Smoothing Toner': '/products/pca-smoothing-toner.png',
  'Pro-Max Age Renewal': '/products/pca-pro-max-age-renewal.png',
  'Hyaluronic Acid Overnight Mask': '/products/pca-hyaluronic-acid-overnight-mask.png',
  'HydraBright': '/products/pca-hydrabright.png',
  'Hyaluronic Acid Microneedle Eye Patches': '/products/pca-hyaluronic-acid-microneedle-eye-patches.png',
  'Hydrating Serum': '/products/pca-hydrating-serum.png',
  'Rejuvenating Serum': '/products/pca-rejuvenating-serum.png',
  'UV Daily Deep Tinted Face Sunscreen': '/products/elta-md-uv-daily-deep-tinted-face-sunscreen.png',
  'UV Clear Deep Tinted': '/products/elta-md-uv-clear-deep-tinted.png',
  'Skin Recovery Amino Acid Foaming Cleanser': '/products/elta-md-skin-recovery-amino-acid-foaming-cleanser.png',
  'Toner': '/products/obagi-toner.png',
  'Hydrate Facial Moisturizer': '/products/obagi-hydrate-facial-moisturizer.png',
  'Nu-Derm Foaming Gel': '/products/obagi-nu-derm-foaming-gel.png',
}

function getProductImage(product) {
  return productImages[product.name] ?? null
}

export const products = [
  // PCA Skin
  { name: 'Vitamin B3 Brightening Serum', brand: 'PCA Skin', price: '$128', desc: 'Brightening serum that targets discoloration and uneven skin tone for a radiant, luminous complexion.' },
  { name: 'Vitamin B3 Eye Brightening Cream', brand: 'PCA Skin', price: '$88', desc: 'Nourishing eye cream that reduces dark circles and puffiness while brightening the delicate eye area.' },
  { name: 'Daily Exfoliant', brand: 'PCA Skin', price: '$48', desc: 'Gentle daily exfoliator that promotes cell turnover for smoother, clearer skin without irritation.' },
  { name: 'Facial Wash Oily/Problem', brand: 'PCA Skin', price: '$40', desc: 'Lactic acid-based cleanser formulated for oily and breakout-prone skin to clarify without stripping.' },
  { name: 'Smoothing Toner', brand: 'PCA Skin', price: '$48', desc: 'Exfoliating toner with lactic and citric acids to refine pores, smooth texture, and prep skin.' },
  { name: 'Pro-Max Age Renewal', brand: 'PCA Skin', price: '$221', desc: 'Advanced anti-aging treatment with maximum-strength retinoid for dramatic wrinkle and firmness improvement.' },
  { name: 'Hyaluronic Acid Overnight Mask', brand: 'PCA Skin', price: '$84', desc: 'Hydrating overnight mask that delivers deep moisture while you sleep for plump, dewy morning skin.' },
  { name: 'HydraBright', brand: 'PCA Skin', price: '$100', desc: 'Intensive brightening treatment that hydrates and illuminates for a healthy, lit-from-within glow.' },
  { name: 'Hyaluronic Acid Microneedle Eye Patches', brand: 'PCA Skin', price: '$100', desc: 'Dissolving microneedle patches that deliver hyaluronic acid deep into the under-eye area for plumping.' },
  { name: 'Hydrating Serum', brand: 'PCA Skin', price: '$105', desc: 'Lightweight serum with hyaluronic acid and niacinamide for all-day hydration and barrier support.' },
  { name: 'Rejuvenating Serum', brand: 'PCA Skin', price: '$108', desc: 'Antioxidant-rich serum that firms, smooths, and revitalizes aging or environmentally stressed skin.' },

  // Elta MD
  { name: 'UV Daily Deep Tinted Face Sunscreen', brand: 'Elta MD', price: '$42', desc: 'Sheer tinted broad-spectrum sunscreen with hyaluronic acid for daily moisture and sun protection.' },
  { name: 'UV Skin Recovery SPF 50', brand: 'Elta MD', price: '$50', desc: 'Fragrance-free mineral sunscreen ideal for post-procedure and sensitive skin with zinc oxide protection.' },
  { name: 'UV Skin Recovery Red Correcting Green Tint SPF 50', brand: 'Elta MD', price: '$52', desc: 'Color-correcting tinted sunscreen that neutralizes redness while providing broad-spectrum SPF 50.' },
  { name: 'UV Clear Deep Tinted', brand: 'Elta MD', price: '$46', desc: 'Oil-free tinted sunscreen with niacinamide — perfect for acne-prone and hyperpigmentation-prone skin.' },
  { name: 'Clear Skin Daily Duo', brand: 'Elta MD', price: '$82', desc: 'Cleanser and sunscreen duo for clear, protected skin — ideal for oily and breakout-prone types.' },
  { name: 'Laser Balm', brand: 'Elta MD', price: '$41', desc: 'Soothing post-procedure balm that protects and hydrates healing skin after laser treatments.' },
  { name: 'Skin Recovery Amino Acid Foaming Cleanser', brand: 'Elta MD', price: '$36', desc: 'Gentle amino acid cleanser that removes impurities without disrupting the skin barrier.' },

  // Obagi
  { name: 'Toner', brand: 'Obagi', price: '$55', desc: 'Witch hazel-based toner that minimizes pores and prepares skin for optimal product absorption.' },
  { name: 'Hydrate Facial Moisturizer', brand: 'Obagi', price: '$70', desc: 'Rich moisturizer with biomimetic peptides that locks in hydration for up to 8 hours.' },
  { name: 'Hydrateluxe', brand: 'Obagi', price: '$85', desc: 'Luxurious moisturizer with hydromanil technology for intense, long-lasting hydration and comfort.' },
  { name: 'Nu-Derm Foaming Gel', brand: 'Obagi', price: '$55', desc: 'Deep-cleansing foaming gel for normal to oily skin that removes excess oil and impurities.' },
  { name: 'Nu-Cil BioStim Scalp Serum', brand: 'Obagi', price: '$125', desc: 'Scalp serum with biotin and peptides to support healthier, thicker-looking hair growth.' },
  { name: 'Elastiderm Firming Eye Cream', brand: 'Obagi', price: '$130', desc: 'Eye cream with bi-mineral complex that firms, lifts, and reduces the appearance of fine lines.' },
  { name: 'Elastiderm Lift Up & Sculpt Moisturizer', brand: 'Obagi', price: '$140', desc: 'Facial moisturizer that lifts, sculpts, and firms with peptides and elasticity-boosting ingredients.' },
  { name: 'RebalanceSkin Barrier Recovery Cream', brand: 'Obagi', price: '$125', desc: 'Barrier-repair cream that restores and strengthens the skin\'s natural protective layer.' },
  { name: 'Daily Hydro-Drops Eye Gel Cream', brand: 'Obagi', price: '$80', desc: 'Cooling eye gel cream that provides lightweight hydration and reduces puffiness around the eyes.' },

  // iS Clinical
  { name: 'Pro-Heal Serum Advanced 15ML', brand: 'iS Clinical', price: '$104', desc: 'Powerful antioxidant serum with vitamin C, E, and olive leaf extract for healing and protection.' },
  { name: 'Daily Dynamic Hydrator', brand: 'iS Clinical', price: '$135', desc: 'Oil-free hydrator with hyaluronic acid and mushroom extract for balanced, dewy moisture all day.' },
  { name: 'Extra Strength Pads', brand: 'iS Clinical', price: '$125', desc: 'Pre-soaked treatment pads with glycolic and salicylic acids for deep exfoliation and pore control.' },
  { name: 'Neckperfect Complex', brand: 'iS Clinical', price: '$145', desc: 'Targeted treatment for the neck and décolleté to firm, smooth, and reduce visible aging signs.' },

  // SkinCeuticals
  { name: 'Gentle Cleanser Cream', brand: 'SkinCeuticals', price: '$39', desc: 'Mild, creamy cleanser with orange and emollient oils for a soothing, non-stripping cleanse.' },
  { name: 'LHA Toner', brand: 'SkinCeuticals', price: '$44', desc: 'Exfoliating toner with LHA, glycolic, and salicylic acids to decongest pores and refine texture.' },
  { name: 'A.G.E. Interrupter Ultra Serum', brand: 'SkinCeuticals', price: '$185', desc: 'Advanced anti-aging serum targeting glycation to improve firmness, wrinkles, and skin density.' },
  { name: 'Winter Skin Essential Set', brand: 'SkinCeuticals', price: '$210', desc: 'Curated skincare set with essential products for maintaining hydrated, protected skin through winter.' },

  // Hydrinity
  { name: 'Hyacin Active Purifying Mist', brand: 'Hydrinity', price: '$60', desc: 'Purifying facial mist with HASF technology to soothe, hydrate, and protect skin on the go.' },
  { name: 'Eye Renew Complex', brand: 'Hydrinity', price: '$120', desc: 'Restorative eye treatment that targets fine lines, puffiness, and dark circles with peptides.' },
  { name: 'Prelude Facial Treatment Cleanser', brand: 'Hydrinity', price: '$58', desc: 'Gentle facial cleanser that preps and purifies skin without stripping natural moisture.' },
  { name: 'Restorative Post Procedure Kit', brand: 'Hydrinity', price: '$160', desc: 'Complete post-procedure recovery kit to soothe, protect, and accelerate skin healing.' },

  // Other
  { name: 'MGF Age Renewal Cream', brand: 'Other', price: '$161', desc: 'Growth factor-enriched cream that promotes cell renewal and visibly reduces signs of aging.' },
  { name: 'Epicutis Post Procedure Kit', brand: 'Other', price: '$50', desc: 'Post-treatment essentials to calm, protect, and support skin recovery after professional procedures.' },
  { name: 'Skinscript Glycolic and Retinol Pads', brand: 'Other', price: '$26', desc: 'Dual-action exfoliating pads with glycolic acid and retinol for smoother, brighter skin.' },
  { name: 'Clear Daily Soothing UV Defense SPF 50', brand: 'Other', price: '$54', desc: 'Lightweight daily sunscreen that soothes sensitive skin while providing powerful UV protection.' },
  { name: 'Biojuve Hero Kit', brand: 'Other', price: '$420', desc: 'Revolutionary living skincare system that restores your skin\'s microbiome for long-term health.' },
]

export function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [zoomedImage, setZoomedImage] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setZoomedImage(null)
    }
    if (zoomedImage) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [zoomedImage])

  const filtered = activeFilter === 'All'
    ? products
    : products.filter((p) => p.brand === activeFilter)

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "The Skincare Studio Medical Spa — Skincare Products",
    "description": "Clinical-grade skincare products available in-store at The Skincare Studio in Stratford, CT. Carrying PCA Skin, Elta MD, Obagi, iS Clinical, SkinCeuticals, and more.",
    "url": "https://www.theskincarestudioct.com/products",
  }

  return (
    <>
      {/* Image zoom lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomedImage(null)}
          role="button"
          tabIndex={0}
          aria-label="Close zoomed image"
        >
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}

      <Helmet>
        <title>Skincare Products | PCA Skin, Elta MD, Obagi, iS Clinical | The Skincare Studio</title>
        <meta name="description" content="Shop clinical-grade skincare products at The Skincare Studio in Stratford, CT. We carry PCA Skin, Elta MD, Obagi, iS Clinical, SkinCeuticals, and more." />
        <link rel="canonical" href="https://www.theskincarestudioct.com/products" />
        <meta property="og:title" content="Skincare Products | PCA Skin, Elta MD, Obagi | The Skincare Studio" />
        <meta property="og:description" content="Shop clinical-grade skincare products in Stratford, CT. PCA Skin, Elta MD, Obagi, iS Clinical, SkinCeuticals &amp; more. In-store only." />
        <meta property="og:url" content="https://www.theskincarestudioct.com/products" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.theskincarestudioct.com/studio-elta-display.png" />
        <meta property="og:image:alt" content="Medical-grade skincare products at The Skincare Studio in Stratford, CT" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <ProductsHeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-8 md:py-20 lg:px-12 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accentGreen" />
            <span className="text-xs font-semibold uppercase tracking-luxury text-white">Clinical-Grade Skincare · All Products In-Store Only</span>
          </div>
          <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl">
            Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-white/80 sm:mt-6 sm:text-[16px] sm:leading-[1.75]">
            We carry only the highest quality medical-grade skincare products — available exclusively in-store. Our team can help you build a personalized routine tailored to your skin.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Brand Filter — sticky only on lg+ so it doesn’t pin under the header on mobile */}
      <section className="border-y border-warmStone/50 bg-white/95 py-4 backdrop-blur-sm lg:sticky lg:top-[72px] lg:z-30">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => setActiveFilter(brand)}
                className={`rounded-full px-5 py-2 text-sm tracking-wide transition-all duration-200 hover:scale-105 ${
                  activeFilter === brand
                    ? 'bg-accentNavy text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-accentBlue hover:text-accentBlue'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-cream/20 py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12">
          <p className="mb-5 text-sm text-slate-400 sm:mb-8">
            Showing <span className="font-semibold text-accentNavy">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' && <> in <span className="font-semibold text-accentNavy">{activeFilter}</span></>}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {filtered.map((product, i) => (
              <ScrollReveal key={`${product.brand}-${product.name}`} direction="up" delay={Math.min(i % 6, 5) * 60}>
                <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-accentBlue/20 sm:rounded-2xl sm:p-6">
                  <div
                    className={`flex h-28 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cream to-softBlue/30 sm:h-40 sm:rounded-xl ${getProductImage(product) ? 'cursor-zoom-in' : ''}`}
                    onClick={() => getProductImage(product) && setZoomedImage({ src: getProductImage(product), alt: product.name })}
                    onKeyDown={(e) => getProductImage(product) && (e.key === 'Enter' || e.key === ' ') && setZoomedImage({ src: getProductImage(product), alt: product.name })}
                    role={getProductImage(product) ? 'button' : undefined}
                    tabIndex={getProductImage(product) ? 0 : undefined}
                    aria-label={getProductImage(product) ? `View larger image of ${product.name}` : undefined}
                  >
                    {getProductImage(product) ? (
                      <img
                        src={getProductImage(product)}
                        alt={product.name}
                        className="h-full w-full object-contain p-2"
                        draggable={false}
                      />
                    ) : (
                      <div className="text-center">
                        <p className="text-[11px] font-semibold uppercase tracking-luxury text-accentBlue/60">{product.brand}</p>
                        <svg className="mx-auto mt-2 h-10 w-10 text-accentBlue/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 flex flex-1 flex-col sm:mt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-luxury text-accentBlue sm:text-[11px]">{product.brand}</p>
                    <h3 className="mt-0.5 font-serif text-sm font-semibold leading-snug tracking-tight text-accentNavy sm:mt-1 sm:text-lg">{product.name}</h3>
                    <p className="mt-1.5 flex-1 text-[11px] leading-[1.45] text-slate-500 sm:mt-2 sm:text-[13px] sm:leading-[1.5]">{product.desc}</p>
                    <div className="mt-3 flex flex-col gap-1 border-t border-slate-100 pt-3 sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pt-4">
                      <span className="text-base font-bold text-accentNavy sm:text-lg">{product.price}</span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 sm:text-[11px]">In-store only</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-warmStone/50 bg-white py-9 md:py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-8 lg:px-12">
          <ScrollReveal direction="up" delay={0}>
            <p className="text-xs font-semibold uppercase tracking-luxury text-accentBlue">Personalized Recommendations</p>
            <h2 className="mt-2 font-serif text-xl tracking-tight text-accentNavy sm:mt-3 sm:text-2xl md:text-3xl">
              Not sure which products are right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-slate-600">
              Book a consultation and our team will create a custom skincare routine based on your skin type, concerns, and goals.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://www.theskincarestudioct.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accentNavy px-7 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Shop Online
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
              </a>
              <a
                href="tel:203-377-0166"
                className="inline-flex items-center gap-1.5 rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-wide text-accentNavy transition-all duration-200 hover:bg-slate-50 hover:scale-105"
              >
                Call (203) 377-0166
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
