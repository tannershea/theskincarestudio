import { stats } from '../data'
import { CountUp } from './CountUp'

export function TrustBadges() {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <CountUp
              key={stat.label}
              value={stat.value}
              label={stat.label}
              className="text-center"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
