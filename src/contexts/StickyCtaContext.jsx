import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const StickyCtaContext = createContext(false)

export function StickyCtaProvider({ children }) {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      setVisible(false)
      return
    }
    const handleScroll = () => setVisible(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <StickyCtaContext.Provider value={{ visible, isHomePage }}>
      {children}
    </StickyCtaContext.Provider>
  )
}

export const useStickyCta = () => useContext(StickyCtaContext)
