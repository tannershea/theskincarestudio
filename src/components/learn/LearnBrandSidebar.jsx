import { LearnBrandCard } from './LearnBrandCard'
import { learnEyebrow } from './learnUi'

export function LearnBrandSidebar({ brands }) {
  if (!brands?.length) return null

  return (
    <div className="space-y-4">
      <p className={learnEyebrow}>In this guide</p>
      <div className="space-y-5">
        {brands.map((brand) => (
          <LearnBrandCard key={brand.name} brand={brand} />
        ))}
      </div>
    </div>
  )
}
