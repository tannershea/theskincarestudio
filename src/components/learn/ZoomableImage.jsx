import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'

const MIN_SCALE = 1
const MAX_SCALE = 3
const SCALE_STEP = 0.25

const LIGHTBOX_CHROME_STYLE = {
  '--zoom-chrome-top': 'max(0.5rem, env(safe-area-inset-top, 0px))',
  '--zoom-chrome-bottom': 'max(0.5rem, env(safe-area-inset-bottom, 0px))',
  '--zoom-chrome-x': 'max(0.5rem, env(safe-area-inset-left, 0px))',
  '--zoom-max-h':
    'calc(100dvh - 7.25rem - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))',
  '--zoom-max-w':
    'calc(100vw - 1rem - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px))',
}

export function ZoomableImage({ src, alt, className, wrapperClassName = '', showZoomHint = true }) {
  const [open, setOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const titleId = useId()

  const close = useCallback(() => {
    setOpen(false)
    setScale(1)
  }, [])

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(MAX_SCALE, +(s + SCALE_STEP).toFixed(2)))
  }, [])

  const zoomOut = useCallback(() => {
    setScale((s) => Math.max(MIN_SCALE, +(s - SCALE_STEP).toFixed(2)))
  }, [])

  const openLightbox = useCallback(() => {
    setScale(1)
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        zoomIn()
      }
      if (e.key === '-') {
        e.preventDefault()
        zoomOut()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close, zoomIn, zoomOut])

  const onWheel = (e) => {
    e.preventDefault()
    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className={`group relative block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue/50 focus-visible:ring-offset-2 ${wrapperClassName}`}
        aria-label={alt ? `View larger: ${alt}` : 'View larger image'}
      >
        <img src={src} alt={alt} className={className} loading="lazy" />
        {showZoomHint ? (
          <span
            className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-accentNavy/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden
          >
            Zoom
          </span>
        ) : null}
      </button>

      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
              style={{
                ...LIGHTBOX_CHROME_STYLE,
                height: '100dvh',
                maxHeight: '100dvh',
                paddingTop: 'var(--zoom-chrome-top)',
                paddingBottom: 'var(--zoom-chrome-bottom)',
                paddingLeft: 'var(--zoom-chrome-x)',
                paddingRight: 'var(--zoom-chrome-x)',
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <button
                type="button"
                className="absolute inset-0 bg-accentNavy/90 backdrop-blur-sm"
                onClick={close}
                aria-label="Close image viewer"
              />

              <div className="relative z-10 flex shrink-0 items-center justify-end gap-1.5 px-1 py-2 sm:gap-2 sm:px-2">
                <p id={titleId} className="sr-only">
                  {alt || 'Expanded image'}
                </p>
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={scale <= MIN_SCALE}
                  className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11"
                  aria-label="Zoom out"
                >
                  −
                </button>
                <span
                  className="min-w-[2.75rem] text-center text-xs font-medium tabular-nums text-white sm:min-w-[3.5rem] sm:text-sm"
                  aria-live="polite"
                >
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={scale >= MAX_SCALE}
                  className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 text-sm font-semibold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="ml-0.5 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/25 sm:px-4 sm:text-sm"
                >
                  Close
                </button>
              </div>

              <div
                className="relative z-10 min-h-0 flex-1 touch-pan-x touch-pan-y overflow-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
                onWheel={onWheel}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="flex min-h-full min-w-full items-center justify-center p-1 sm:p-2"
                  style={{
                    width: scale > 1 ? `${scale * 100}%` : '100%',
                    minHeight: scale > 1 ? `${scale * 100}%` : '100%',
                  }}
                >
                  <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    className="h-auto w-auto max-h-[var(--zoom-max-h)] max-w-[var(--zoom-max-w)] select-none object-contain transition-transform duration-150 ease-out"
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: 'center center',
                    }}
                  />
                </div>
              </div>

              <p className="relative z-10 shrink-0 px-2 py-2 text-center text-[10px] leading-snug text-white/70 sm:text-xs">
                <span className="hidden sm:inline">Scroll or use + / − to zoom · drag to pan when zoomed · Esc to close</span>
                <span className="sm:hidden">Pinch or use + / − · swipe to pan · tap Close</span>
              </p>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
