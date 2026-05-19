import { ScrollReveal } from './ScrollReveal'
import { ZoomableImage } from './learn/ZoomableImage'
import { TEAM_AVATAR_IMG_CLASS } from '../data/aboutTeam'

export function TeamMemberGrid({ members }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {members.map((member, i) => (
        <ScrollReveal key={member.name} direction="up" delay={i * 60}>
          <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accentBlue/20 hover:shadow-xl">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm transition-all duration-300 group-hover:border-accentBlue/30 group-hover:shadow-md sm:h-32 sm:w-32">
              {member.image ? (
                <ZoomableImage
                  src={member.image}
                  alt={member.name}
                  showZoomHint={false}
                  wrapperClassName="block h-full w-full"
                  className={member.avatarImgClass ?? TEAM_AVATAR_IMG_CLASS}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-softBlue text-xl font-semibold text-accentBlue">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
              )}
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold tracking-tight text-accentNavy">{member.name}</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-luxury text-accentBlue">{member.role}</p>
            {member.credentials && (
              <p className="mt-1 text-[11px] text-slate-400">{member.credentials}</p>
            )}
            <p className="mt-3 flex-1 text-[13px] leading-[1.5] text-slate-500">{member.bio}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
