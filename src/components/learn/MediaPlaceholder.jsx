const ratioClasses = {
  hero: 'aspect-[21/9] min-h-[160px]',
  wide: 'aspect-[16/9] min-h-[140px]',
  square: 'aspect-square min-h-[120px]',
  logo: 'aspect-square min-h-[8rem]',
  banner: 'aspect-[634/221] min-h-[5rem] w-full',
  lockup: 'aspect-[256/89] min-h-[5rem] w-full',
  revanesse: 'aspect-[512/219] min-h-[5rem] w-full',
  card: 'aspect-[4/3] min-h-[160px]',
}

export function MediaPlaceholder({ label, ratio = 'wide', className = '' }) {
  const rc = ratioClasses[ratio] || ratioClasses.wide
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300/90 bg-gradient-to-br from-white via-slate-50/90 to-cream/70 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ${rc} ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-luxury text-accentBlue">Placeholder</span>
      <p className="max-w-md text-sm leading-snug text-slate-600">{label}</p>
    </div>
  )
}
