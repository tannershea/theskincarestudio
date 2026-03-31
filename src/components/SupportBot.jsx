import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  contactDetails,
  openingHours,
  bookingUrl,
  faqs,
  featuredCategories,
  popularServices,
  serviceAreas,
  serviceGroups,
  stats,
  recognitions,
  reasons,
  specialtyTagline,
} from '../data'
import { products } from '../pages/ProductsPage'

// Build knowledge base from website data
const buildKnowledgeBase = () => {
  const entries = []

  // Booking (with link) — must come before FAQs so "book" queries get the link, not the "how far in advance" FAQ
  entries.push({
    keywords: ['book', 'booking', 'appointment', 'schedule', 'reserve', 'online', 'make appointment'],
    answer: "We recommend scheduling your appointment 2–3 weeks in advance for our most popular time slots. New clients can often be accommodated within a week. For the most up-to-date availability, please book online.",
    linkTarget: 'booking',
    linkLabel: 'Book your appointment',
  })

  // FAQs
  faqs.forEach((faq) => {
    const keywords = faq.q.toLowerCase().replace(/[?.,'"]/g, '').split(/\s+/)
    keywords.push(...faq.q.toLowerCase().split(' ').filter((w) => w.length > 3))
    // Exclude "book" from FAQ about advance booking so booking link wins for "book" queries
    const filtered = [...new Set(keywords)].filter((kw) => !['book', 'booking'].includes(kw))
    const isBookingFaq = faq.q.toLowerCase().includes('advance') && faq.q.toLowerCase().includes('book')
    entries.push({
      keywords: filtered.length ? filtered : keywords,
      answer: faq.a,
      ...(isBookingFaq && { linkTarget: 'booking', linkLabel: 'Book your appointment' }),
    })
  })

  // Contact & location
  entries.push({
    keywords: ['address', 'location', 'where', 'find', 'directions', 'paradise green', 'main street', '3586'],
    answer: `We're located at ${contactDetails.addressLine1}, ${contactDetails.addressLine2} (Paradise Green).`,
    linkTarget: 'contact',
    linkLabel: 'Get directions & contact info',
  })
  entries.push({
    keywords: ['phone', 'call', 'number', 'contact', 'reach', '203'],
    answer: `You can reach us at ${contactDetails.phone}. We're happy to answer your questions!`,
  })
  entries.push({
    keywords: ['email', 'e-mail'],
    answer: `You can email us at ${contactDetails.email}.`,
  })
  entries.push({
    keywords: ['hours', 'open', 'when', 'schedule', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    answer: `Our hours: ${openingHours.map((h) => `${h.days} ${h.hours}`).join('; ')}.`,
  })
  entries.push({
    keywords: ['black skin', 'latino', 'african american', 'dark skin', 'melanin', 'skin of color', 'specialize', 'specialty'],
    answer: specialtyTagline,
    linkTarget: 'services',
    linkLabel: 'Explore our services',
  })

  // All services with prices (each service gets its own entry for precise matching)
  serviceGroups.forEach((group) => {
    group.services.forEach((svc) => {
      const nameWords = svc.name.toLowerCase().replace(/[&+]/g, ' ').split(/\s+/).filter((w) => w.length > 2)
      const descWords = svc.desc.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
      const keywords = [...new Set([...nameWords, ...descWords, 'price', 'cost', 'how much', 'treatment', 'service'])]
      entries.push({
        keywords,
        answer: `${svc.name}: ${svc.desc} ${svc.duration}. Price: ${svc.price}.`,
        linkTarget: 'services',
        linkLabel: 'View all services',
      })
    })
  })

  // Featured categories & popular services (broader matches)
  featuredCategories.forEach((cat) => {
    const kw = cat.title.toLowerCase().split(/\s+/)
    kw.push(...cat.description.toLowerCase().split(/\s+/).filter((w) => w.length > 4))
    entries.push({ keywords: [...new Set(kw)], answer: `${cat.title}: ${cat.description}`, linkTarget: 'services', linkLabel: 'View our services' })
  })
  popularServices.forEach((svc) => {
    const kw = svc.title.toLowerCase().split(/\s+/)
    kw.push('botox', 'filler', 'facial', 'peel', 'microneedling', 'laser', 'prfm', 'hydrafacial')
    entries.push({ keywords: [...new Set(kw)], answer: `${svc.title}: ${svc.description}`, linkTarget: 'services', linkLabel: 'View our services' })
  })

  // All products with prices (each product gets its own entry)
  products.forEach((p) => {
    const nameWords = p.name.toLowerCase().replace(/[&.'()]/g, ' ').split(/\s+/).filter((w) => w.length > 2)
    const brandWords = p.brand.toLowerCase().split(/\s+/)
    const descWords = p.desc.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
    const keywords = [...new Set([...nameWords, ...brandWords, ...descWords, 'product', 'price', 'cost', 'how much'])]
    entries.push({
      keywords,
      answer: `${p.name} (${p.brand}): ${p.desc} Price: ${p.price}. All products are in-store only.`,
      linkTarget: 'products',
      linkLabel: 'Browse our products',
    })
  })

  // Toners (specific product category — prioritize when user asks about toners)
  const toners = products.filter((p) => p.name.toLowerCase().includes('toner'))
  if (toners.length > 0) {
    entries.push({
      keywords: ['toner', 'toners', 'what', 'offer', 'have', 'carry'],
      answer: `We carry ${toners.map((t) => `${t.name} by ${t.brand} (${t.price})`).join('; ')}. All products are available in-store.`,
      linkTarget: 'products',
      linkLabel: 'Browse our toners',
    })
  }

  // General product info
  entries.push({
    keywords: ['product', 'shop', 'buy', 'purchase', 'store', 'in-store'],
    answer: 'All our skincare products are available in-store only. We carry PCA Skin, Elta MD, Obagi, iS Clinical, SkinCeuticals, Hydrinity, and more. Visit us for personalized product recommendations.',
    linkTarget: 'products',
    linkLabel: 'Browse our products',
  })

  // Pricing summary (when asking generally about prices)
  entries.push({
    keywords: ['pricing', 'price list', 'costs', 'how much', 'rates'],
    answer: 'We offer transparent pricing on all services. Ask about a specific treatment (e.g., "How much is Hydrafacial?" or "Botox price?") and I can give you the exact price.',
    linkTarget: 'services',
    linkLabel: 'View our full service menu with pricing',
  })

  // General
  entries.push({
    keywords: ['skin', 'types', 'tone'],
    answer: 'Yes! Our team has extensive experience with diverse skin types and tones. We personalize every treatment plan for safe, effective results.',
  })
  entries.push({
    keywords: ['terri', 'founder', 'who', 'team'],
    answer: 'The Skincare Studio was founded by Terri Miller, BSN, RN, Licensed Esthetician, with over 15 years of experience in dermatology and plastic surgery.',
  })
  entries.push({
    keywords: ['rating', 'review', 'stars', 'google'],
    answer: `We have a ${stats.find((s) => s.label === 'Average Rating')?.value || '4.9'} average rating with 224+ Google reviews. Our clients love the personalized care and natural results.`,
  })
  entries.push({
    keywords: ['payment', 'cherry', 'financing', 'pay'],
    answer: 'We offer flexible payment plans through Cherry. Treat now, pay over time — ask us for details!',
  })
  entries.push({
    keywords: ['stratford', 'connecticut', 'fairfield', 'ct', 'area', 'serve'],
    answer: `We're in Stratford, CT (Paradise Green) and serve Fairfield County including ${serviceAreas.slice(0, 5).join(', ')}, and more.`,
  })

  // Recognitions & reasons
  entries.push({
    keywords: ['award', 'recognition', 'recognized', 'ambassador', 'skinpen', 'pca', 'brbc'],
    answer: `Our recognitions: ${recognitions.join('. ')}`,
  })
  entries.push({
    keywords: ['why', 'choose', 'different', 'experience'],
    answer: `Why choose us: ${reasons.join('. ')}`,
  })

  return entries
}

const knowledgeBase = buildKnowledgeBase()

const fallbackMessage = `I'm sorry, I don't have the answer to that question. Please call us at ${contactDetails.phone} and our team will be happy to help you!`

const bookingIntentWords = ['book', 'booking', 'appointment', 'schedule', 'reserve', 'reserving']

const termsIntentWords = ['terms', 'conditions', 'policy', 'policies', 'privacy', 'cancellation', 'payment methods', 'payment method', 'guidelines', 'refund', 'refunds', 'legal', 'disclaimer']

function findAnswer(question) {
  const trimmed = question.trim()
  if (!trimmed) return { answer: fallbackMessage }

  const lower = trimmed.toLowerCase()
  // Strip leading greetings so "Hi Rebecca, what toners..." focuses on the actual question
  const greetingPatterns = ['hi', 'hello', 'hey', 'hi there', 'hello there', 'hey there']
  let content = lower
  for (const g of greetingPatterns) {
    if (content === g || content.startsWith(g + ',') || content.startsWith(g + ' ')) {
      content = content.slice(g.length).replace(/^[,\s]+/, '').replace(/^rebecca[,\s]+/i, '').trim()
      break
    }
  }
  // Only use generic greeting when the message is purely a greeting (no substantive question)
  const isPurelyGreeting = content.length < 5 || /^(rebecca|there|everyone)[!.]?$/i.test(content) || content === ''
  if (isPurelyGreeting && ['hi', 'hello', 'hey', 'help'].some((g) => lower === g || lower.startsWith(g + ' ') || lower.startsWith(g + ','))) {
    return { answer: "Hello! I'm Rebecca, Terri's AI assistant. Ask me about our services, pricing, products, hours, location, or booking!" }
  }
  // Use the content (with greeting stripped) for lookup if we had a greeting + real question
  const toSearch = content.length > 3 ? content : lower

  // Simple "products" or "services" — direct to page (only for general requests, not specific product/service questions)
  const hasSpecificProduct = products.some((p) => {
    const name = p.name.toLowerCase()
    return toSearch.includes(name) || name.split(/\s+/).some((word) => word.length > 3 && toSearch.includes(word))
  })
  const hasSpecificService = serviceGroups.some((g) =>
    g.services.some((s) => {
      const name = s.name.toLowerCase()
      return toSearch.includes(name) || name.split(/\s+/).some((word) => word.length > 3 && toSearch.includes(word))
    })
  )
  const simpleProductsPhrases = ['products', 'product', 'show products', 'view products', 'browse products', 'what products', 'your products']
  const simpleServicesPhrases = ['services', 'service', 'show services', 'view services', 'what services', 'your services']
  if (!hasSpecificProduct && simpleProductsPhrases.some((p) => toSearch === p || toSearch === p + '?' || toSearch.startsWith(p + ' ') || toSearch.endsWith(' ' + p))) {
    return { answer: 'Browse our full skincare collection.', linkTarget: 'products', linkLabel: 'View our products' }
  }
  if (!hasSpecificService && simpleServicesPhrases.some((p) => toSearch === p || toSearch === p + '?' || toSearch.startsWith(p + ' ') || toSearch.endsWith(' ' + p))) {
    return { answer: 'View our full treatment menu with pricing.', linkTarget: 'services', linkLabel: 'View our services' }
  }

  // If the question mentions terms/policy/legal intent, direct to Terms page
  if (termsIntentWords.some((w) => toSearch.includes(w))) {
    return {
      answer: "Our Terms & Conditions page has our privacy policy, cancellation policy, payment methods, and other guidelines.",
      linkTarget: 'terms',
      linkLabel: 'View Terms & Conditions',
    }
  }

  // If the question mentions booking/appointment intent, always return the booking link
  if (bookingIntentWords.some((w) => toSearch.includes(w))) {
    return {
      answer: "We recommend scheduling your appointment 2–3 weeks in advance for our most popular time slots. New clients can often be accommodated within a week. For the most up-to-date availability, please book online.",
      linkTarget: 'booking',
      linkLabel: 'Book your appointment',
    }
  }

  const normalized = toSearch.replace(/[?.,!'"]/g, '')
  const words = normalized.split(/\s+/).filter((w) => w.length > 2)

  let bestMatch = null
  let bestScore = 0

  for (const entry of knowledgeBase) {
    let score = 0
    for (const word of words) {
      if (entry.keywords.some((kw) => kw.includes(word) || word.includes(kw))) {
        score++
      }
    }
    if (score > bestScore && score >= 1) {
      bestScore = score
      bestMatch = entry
    }
  }

  return bestMatch ? { answer: bestMatch.answer, linkTarget: bestMatch.linkTarget, linkLabel: bestMatch.linkLabel } : { answer: fallbackMessage }
}

function AnswerWithLink({ answer, linkTarget, linkLabel }) {
  const linkClass = 'underline font-medium text-accentBlue hover:text-accentBlue/80'
  if (!linkTarget || !linkLabel) return <>{answer}</>
  if (linkTarget === 'booking') {
    return (
      <>
        {answer}{' '}
        <a href={bookingUrl} className={linkClass}>
          {linkLabel} →
        </a>
      </>
    )
  }
  if (linkTarget === 'services') {
    return (
      <>
        {answer}{' '}
        <Link to="/services" className={linkClass}>
          {linkLabel} →
        </Link>
      </>
    )
  }
  if (linkTarget === 'products') {
    return (
      <>
        {answer}{' '}
        <Link to="/products" className={linkClass}>
          {linkLabel} →
        </Link>
      </>
    )
  }
  if (linkTarget === 'contact') {
    return (
      <>
        {answer}{' '}
        <Link to="/contact" className={linkClass}>
          {linkLabel} →
        </Link>
      </>
    )
  }
  if (linkTarget === 'terms') {
    return (
      <>
        {answer}{' '}
        <Link to="/terms" className={linkClass}>
          {linkLabel} →
        </Link>
      </>
    )
  }
  return <>{answer}</>
}

export function SupportBot() {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', answer: "Hi! I'm Rebecca, Terri's AI assistant. Ask me about our services, prices, products, hours, location, booking, or anything else about The Skincare Studio." },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  useEffect(() => { scrollToBottom() }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])

    const result = findAnswer(text)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', ...result }])
    }, 400)
  }

  return (
    <div
      className={`fixed right-6 z-50 flex flex-col items-end gap-3 ${
        isHomePage
          ? 'bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] lg:bottom-6'
          : 'bottom-6'
      }`}
    >
      {isOpen && (
        <div className="flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:w-[380px]">
          <div className="flex items-center justify-between border-b border-slate-100 bg-accentNavy px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Rebecca</p>
                <p className="text-xs text-white/80">Terri's AI Assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-white/80 transition hover:bg-white/20 hover:text-white"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-[1.5] ${
                    msg.role === 'user'
                      ? 'bg-accentNavy text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {msg.role === 'user' ? (
                    msg.text
                  ) : (
                    <AnswerWithLink answer={msg.answer} linkTarget={msg.linkTarget} linkLabel={msg.linkLabel} />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-100 p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Rebecca a question..."
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition focus:border-accentBlue focus:ring-2 focus:ring-accentBlue/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-accentNavy px-4 py-2.5 text-white transition hover:bg-accentNavy/90"
                aria-label="Send"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accentNavy text-white shadow-lg transition-all hover:scale-105 hover:bg-accentNavy/90"
        aria-label={isOpen ? 'Close chat with Rebecca' : 'Chat with Rebecca'}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  )
}
