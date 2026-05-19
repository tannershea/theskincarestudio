export const learnEyebrow =
  'text-xs font-semibold uppercase tracking-[0.18em] text-accentBlue md:text-[13px]'

export const learnFocusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue/50 focus-visible:ring-offset-2'

export const learnCardHover =
  'transition-all duration-200 hover:-translate-y-0.5 hover:border-accentBlue/35 hover:shadow-md'

export function learnSectionId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
