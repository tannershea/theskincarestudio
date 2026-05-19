import { useId } from 'react'
import { learnFocusRing } from './learnUi'

export function LearnHubSearch({ value, onChange, resultCount, hasQuery }) {
  const inputId = useId()

  return (
    <div className="mx-auto mt-8 w-full max-w-xl text-left">
      <label htmlFor={inputId} className="text-sm font-semibold text-accentNavy">
        Search guides
      </label>
      <div className="relative mt-2">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Peels, laser, PRFM, skincare brands…"
          autoComplete="off"
          className={`w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-11 pr-11 text-[15px] text-accentNavy shadow-sm placeholder:text-slate-400 ${learnFocusRing}`}
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-accentNavy ${learnFocusRing}`}
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </div>
      {hasQuery ? (
        <p className="mt-2 text-[13px] text-slate-500" role="status" aria-live="polite">
          {resultCount === 0
            ? 'No guides match your search. Try another keyword.'
            : `${resultCount} guide${resultCount === 1 ? '' : 's'} found`}
        </p>
      ) : null}
    </div>
  )
}
