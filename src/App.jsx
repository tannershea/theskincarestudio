import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ContactFab } from './components/ContactFab'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { TermsPage } from './pages/TermsPage'
import { ProductsPage } from './pages/ProductsPage'
import { BookingPage } from './pages/BookingPage'
import { AftercarePage } from './pages/AftercarePage'
import { LearnHubPage } from './pages/LearnHubPage'
import { LearnTopicPage } from './pages/LearnTopicPage'
import { GiftCardsPage } from './pages/GiftCardsPage'
import { LandingPage } from './pages/LandingPage'
import { resultsResourcesPath, landingPath } from './data'

function LearnLegacyRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `${resultsResourcesPath}/${slug}` : resultsResourcesPath} replace />
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-800">
      <ScrollToTop />
      <Header />
      <ContactFab />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={landingPath} element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gifts" element={<GiftCardsPage />} />
          <Route path={resultsResourcesPath} element={<LearnHubPage />} />
          <Route path={`${resultsResourcesPath}/:slug`} element={<LearnTopicPage />} />
          <Route path="/learn" element={<Navigate to={resultsResourcesPath} replace />} />
          <Route path="/learn/:slug" element={<LearnLegacyRedirect />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/aftercare" element={<AftercarePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
