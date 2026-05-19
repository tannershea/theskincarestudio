import { MediaPlaceholder } from './MediaPlaceholder'
import { ZoomableImage } from './ZoomableImage'
import { learnEyebrow } from './learnUi'

const LOGO_ASPECT = {
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
  landscape: 'aspect-[5/2]',
  banner: 'aspect-[634/221]',
  lockup: 'aspect-[256/89]',
  revanesse: 'aspect-[512/219]',
}

const LOGO_FRAME = {
  light: 'border border-warmStone/40 bg-white/95',
  dark: 'border border-warmStone/25 bg-black',
}

export function LearnBrandCard({ brand }) {
  const logoAspect = LOGO_ASPECT[brand.logoAspect] || LOGO_ASPECT.wide
  const logoFrame = LOGO_FRAME[brand.logoTheme] || LOGO_FRAME.light
  const hasPhoto = brand.heroImageSrc || brand.heroPlaceholder
  const hasLogo = brand.logoImageSrc || brand.logoPlaceholder

  if (!hasPhoto && !hasLogo) return null

  return (
    <article className="overflow-hidden rounded-2xl border border-warmStone/40 bg-white shadow-[0_12px_40px_-28px_rgba(22,50,80,0.35)] ring-1 ring-black/[0.04]">
      <p className={`border-b border-warmStone/35 bg-gradient-to-r from-softBlue/[0.14] via-white to-cream/40 px-4 py-2.5 ${learnEyebrow}`}>
        {brand.name}
      </p>

      {hasPhoto ? (
        <figure className="overflow-hidden border-b border-warmStone/25">
          {brand.heroImageSrc ? (
            <ZoomableImage
              src={brand.heroImageSrc}
              alt={brand.heroImageAlt || brand.name}
              className="aspect-[4/3] w-full object-cover object-center"
            />
          ) : (
            <MediaPlaceholder
              label={brand.heroPlaceholder}
              ratio="card"
              className="aspect-[4/3] w-full rounded-none border-0 shadow-none"
            />
          )}
        </figure>
      ) : null}

      {hasLogo ? (
        <figure
          className={`${logoAspect} mx-3 mb-3 ${hasPhoto ? 'mt-3' : 'mt-3'} flex items-center justify-center overflow-hidden rounded-lg shadow-sm ${logoFrame}`}
        >
          {brand.logoImageSrc ? (
            <ZoomableImage
              src={brand.logoImageSrc}
              alt={brand.logoImageAlt || `${brand.name} logo`}
              wrapperClassName="flex h-full w-full items-center justify-center"
              className={`max-h-full w-full object-contain object-center ${
                brand.logoTheme === 'dark' ? 'px-1.5 py-1' : 'px-2 py-1 sm:px-2.5 sm:py-1'
              }`}
            />
          ) : (
            <MediaPlaceholder
              label={brand.logoPlaceholder}
              ratio={brand.logoAspect === 'square' ? 'logo' : 'wide'}
              className="h-full w-full rounded-none border-0 bg-transparent shadow-none"
            />
          )}
        </figure>
      ) : null}
    </article>
  )
}
