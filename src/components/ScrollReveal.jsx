import { useState, useEffect, useRef } from 'react'

const directionMap = {
  left: '-translate-x-16 opacity-80',
  right: 'translate-x-16 opacity-80',
  up: 'translate-y-12 opacity-80',
  zoom: 'scale-75 opacity-0',
}

export function ScrollReveal({ children, direction = 'left', className = '', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            timeoutId = setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '60px 0px 60px 0px',
      }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay])

  const hiddenClass = directionMap[direction] ?? directionMap.left
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div
      ref={ref}
      style={delayStyle}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hiddenClass
      } ${className}`}
    >
      {children}
    </div>
  )
}
