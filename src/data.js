export const bookingUrl = "/book";

export const bookingPolicy = {
  title: "No-Show, Late, & Payment Policy",
  content: `No-Show, Late, & Payment Policy

At The Skincare Studio, we value your time and ours.

**Card on File Policy:** We require a valid credit card to be kept on file for all booked services. This card will be used to process any fees related to cancellations, no-shows, or late arrivals.

**No-Show Policy:** If you fail to show up for your appointment without prior notice, you will be banned from booking future appointments with us.

**Rescheduling Policy:** We require a minimum of 48 hours' notice for any rescheduling. If you need to reschedule with less than 48 hours' notice, a $100 non-refundable fee will be charged to the card on file.

**Late Arrival Policy:** We allow a 10-minute grace period for late arrivals. If you arrive more than 10 minutes late, you may be charged a late fee and your appointment may need to be rescheduled based on availability.

By booking an appointment, you acknowledge and agree to these terms. Thank you for your understanding and cooperation!`,
}

const CT_TAX_RATE = 0.0635

function parsePrice(priceStr) {
  if (!priceStr || typeof priceStr !== 'string') return 0
  const lower = priceStr.toLowerCase()
  if (lower.includes('inquire') || lower.includes('varies')) return 0
  const match = priceStr.match(/\$[\d,]+/)
  return match ? parseFloat(match[0].replace(/[$,]/g, '')) : 0
}

export function getBookingTotals(services) {
  const subtotal = services.reduce((sum, s) => sum + parsePrice(s.price), 0)
  const tax = subtotal * CT_TAX_RATE
  const total = subtotal + tax
  const deposit = Math.min(50, total)
  const payLater = total - deposit
  return { subtotal, tax, total, deposit, payLater }
}

export function getProductTotals(products) {
  return products.reduce((sum, p) => sum + parsePrice(p.price), 0)
}

export const teamMembers = [
  { id: 'any', name: 'Any team member' },
  { id: 'terri', name: 'Terri Miller — Owner, BSN & RN' },
  { id: 'jessica', name: 'Jessica Louisseize — BSN, RN' },
];
export const logoSrc = "/logo.png";

export const studioImages = {
  carousel: [
    { src: "/studio-lounge.png", alt: "Welcoming lounge area at The Skincare Studio" },
    { src: "/studio-reception-2.png", alt: "Reception desk at The Skincare Studio" },
    { src: "/studio-botox-display.png", alt: "Professional injectables and skincare treatments" },
    { src: "/hero-treatment.png", alt: "Expert skincare treatment at The Skincare Studio" },
  ],
  gallery: [
    { src: "/studio-lounge.png", alt: "Calm, luxurious waiting area" },
    { src: "/studio-reception-2.png", alt: "Welcoming reception at The Skincare Studio" },
    { src: "/studio-reception-3.png", alt: "Our team at the reception desk" },
    { src: "/studio-botox-display.png", alt: "Medical-grade injectables and professional care" },
    { src: "/studio-elta-display.png", alt: "Professional skincare products we carry" },
    { src: "/studio-products.png", alt: "Medical-grade treatment products" },
    { src: "/hero-treatment.png", alt: "Personalized treatment experience" },
  ],
};

export const serviceAreas = [
  "Stratford",
  "Norwalk",
  "Stamford",
  "Bridgeport",
  "Trumbull",
  "Shelton",
  "Fairfield",
  "Milford",
];

export const recognitions = [
  "Honors from PCA Skin USA's National Esthetics Panel",
  "SkinPen® Ambassador for the State of Connecticut",
  "Recognized by the Bridgeport Regional Business Council",
  "Trusted by clients across Fairfield County",
];

export const contactDetails = {
  addressLine1: "3586 Main Street",
  addressLine2: "Stratford, CT 06614",
  location: "Paradise Green",
  phone: "203-377-0166",
  email: "info@theskincarestudioct.com",
};

export const specialtyTagline = "Medical spa that specializes in skin for Black people, Latino people, African Americans, and dark skin.";

export const socialLinks = {
  instagram: "https://www.instagram.com/theskincarestudioct/",
  facebook: "https://www.facebook.com/theskincarestudioct/",
  tiktok: "https://www.tiktok.com/@skincarestudiomed",
};

export const openingHours = [
  { days: "Mon – Sat", hours: "9:00 AM – 5:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

export const featuredCategories = [
  {
    title: "Injectables",
    description:
      "Botox, Letybo, Daxxify, RHA, Juvederm, and facial balancing treatments designed to deliver refined, natural-looking results.",
  },
  {
    title: "Skin Rejuvenation",
    description:
      "Laser facials, microneedling, chemical peels, and corrective treatments that improve tone, texture, clarity, and overall skin confidence.",
  },
  {
    title: "Regenerative Aesthetics",
    description:
      "PRFM and advanced regenerative treatments that support collagen production, skin renewal, and long-term skin health.",
  },
];

export const reasons = [
  "Licensed medical team with dermatology-informed experience",
  "Treatment plans personalized for all skin types and skin tones",
  "A calm, luxury environment grounded in evidence-based care",
  "Results that look refreshed, balanced, and never overdone",
];

export const popularServices = [
  {
    title: "Neuromodulators",
    description: "Botox, Letybo, and Daxxify treatments for smooth, refreshed expression.",
  },
  {
    title: "Dermal Fillers",
    description: "RHA and Juvederm options for subtle enhancement and facial balance.",
  },
  {
    title: "Laser + Corrective Care",
    description: "Laser facials, chemical peels, and targeted treatments for texture and tone.",
  },
  {
    title: "PRFM Treatments",
    description: "Regenerative services that support renewal, collagen, and skin vitality.",
  },
];

export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Treatments Performed" },
  { value: "4.9", label: "Average Rating" },
  { value: "98%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    quote: "I just came back from The Skincare Studio, where I went in to address under-eye bags and dark circles, and I honestly cannot say enough good things about my experience. Terri is absolutely amazing. From the moment I walked in, she and her staff were thoughtful, caring, and incredibly attentive. What stood out the most was that they truly listened to my concerns. We talked through my goals, discussed my options in detail, and I never once felt rushed or pressured. I decided to move forward with PRFM, and the entire process was smooth, professional, and comfortable. The results? I look amazing. I genuinely can't believe I waited this long to do this. Terri is knowledgeable, professional, and clearly passionate about her work. I'm beyond happy with my results and would highly recommend The Skincare Studio to anyone considering under-eye treatments or aesthetic services. Hands down, one of the best experiences I've had!!!!!",
    author: "Meiline Smith",
    rating: 5,
  },
  {
    quote: "Terri is absolutely phenomenal. From the moment I walked into her skincare studio, I felt relaxed and cared for. She explains everything she's doing, offers great skincare advice, and makes you feel completely comfortable. My skin looked and felt incredible after my visit, and the results lasted well beyond the appointment. Terri is truly gifted at what she does!",
    author: "Tia Townsend",
    rating: 5,
  },
  {
    quote: "The staff here were absolutely incredible! So knowledgeable, friendly, and attentive—they really made me feel taken care of. After my visit, I left feeling like a completely new person, with a personalized skincare routine tailored perfectly to my skin's needs. Their expertise and attention to detail made the whole experience feel special and empowering. I can't recommend them enough for anyone looking for professional advice and a truly customized approach to skincare.",
    author: "Derek Lincoln",
    rating: 5,
  },
  {
    quote: "I'm so happy I found Terri. She was incredibly easy to talk to and made me feel completely comfortable. I never felt judged—only genuinely supported and understood. You can tell she truly cares about helping you look and feel like the best version of yourself. I'm really looking forward to starting my treatment. Terri is AWESOME!",
    author: "Sandy Hughes",
    rating: 5,
  },
  {
    quote: "I have been going to Terri for several years for a range of skincare needs, and I cannot say enough good things about her and her team. My skin has never looked better. It is radiant, bright, and healthy, and that is a direct result of the care, consistency, and expertise Terri brings to every appointment. What sets Terri apart is that she does not just treat your skin in the moment. She takes the time to understand your goals and helps you build a realistic, effective skincare routine that actually works long term. The guidance she has given me has completely changed how I care for my skin, and the results speak for themselves. Terri and her team are professional, knowledgeable, and genuinely invested in your results. I always feel cared for, heard, and confident that I am in great hands. If you are looking for someone who truly knows skin and delivers real results, Terri is it.",
    author: "Karleka Norman",
    rating: 5,
  },
  {
    quote: "I'm so pleased with my results! I felt at home! Such an amazing feeling to have while experiencing something so new. Terri is a doll! Gentle & warm. What a beautiful soul! And the staff is super kind/helpful. I will be back!!",
    author: "Earlene Ford",
    rating: 5,
  },
  {
    quote: "Gem of a find in Stratford. Super staff, gorgeous interior and Super clean. Terri and Jessica are superb, caring injectors. 🥰 highly recommend!!!",
    author: "Gigi Marmac",
    rating: 5,
  },
  {
    quote: "Today was my second appointment at The Skincare Studio. My first appointment was for a skin consultation which went great. Terri was super helpful with helping me understand my skin and the breakouts. Today I received a VI peel which went seamlessly. I'm excited to continue my skincare journey with Terri and her team whom were all so kind.",
    author: "Lanette Huddleson",
    rating: 5,
  },
  {
    quote: "I've been coming here monthly for almost a year now and it's the best experience every time. Terri is very knowledgeable and informative, my acne & texture has completely changed since starting treatments. The whole staff are always so sweet & helpful!",
    author: "Kass Centeno",
    rating: 5,
  },
  {
    quote: "Terri took her time discussing my skin challenges and opportunities for improvement! She is kind and thoughtful. I look forward to my continued treatments with her guidance and support! I recommend you schedule a time for a consultation with her! You will not be disappointed!",
    author: "Katerina Vlahos",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Do you offer complimentary consultations?",
    a: "We offer both virtual and in-studio consultations. Our team will help you determine the best treatment plan for your goals. Consultations start at $100 and may be applied toward your first treatment.",
  },
  {
    q: "What injectables do you use?",
    a: "We offer Botox, Letybo, Daxxify, RHA, and Juvederm for neuromodulators and dermal fillers. Every treatment is customized to your facial anatomy and desired outcome.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend scheduling your appointment 2–3 weeks in advance for our most popular time slots. New clients can often be accommodated within a week. For the most up-to-date availability, please book online.",
  },
  {
    q: "Do you treat all skin types?",
    a: "Yes. Our team has extensive experience with diverse skin types and tones. We personalize every treatment plan to ensure safe, effective, and beautiful results for all clients.",
  },
];

export const popularServiceNames = [
  'Soft Volume Lips', 'VI Peel Original', 'Polished Glow Microderm Facial', 'Hydrafacial Deluxe',
  'Neurotoxin', 'Lip Filler', 'SkinPen Microneedling', 'In-Studio Consultation',
]

export const popularProductNames = [
  'Vitamin B3 Brightening Serum', 'UV Daily Deep Tinted Face Sunscreen', 'Hydrateluxe',
  'Hydrating Serum', 'Pro-Max Age Renewal',
]

export const serviceGroups = [
  {
    title: "Client Favorites",
    services: [
      { name: "The Refresh Neurotoxin", duration: "15 min", price: "$25", desc: "A quick neurotoxin touch-up to smooth fine lines and maintain a refreshed, natural look." },
      { name: "Soft Volume Lips", duration: "45 min", price: "$600", desc: "Premium lip filler treatment for soft, natural volume and defined shape using advanced techniques." },
      { name: "VI Peel Original", duration: "35 min", price: "$400", desc: "A medical-grade chemical peel that improves skin tone, texture, and clarity with minimal downtime." },
      { name: "Polished Glow Microderm Facial", duration: "1 hr", price: "$125", desc: "Gentle exfoliation facial that buffs away dead skin cells for an instant, radiant glow." },
      { name: "Skin Tag Removal", duration: "1 hr", price: "From $175", desc: "Safe, precise removal of skin tags with minimal discomfort and fast healing." },
      { name: "Cystic Acne Injection", duration: "15 min", price: "$35", desc: "Targeted cortisone injection to quickly reduce painful, deep cystic acne breakouts." },
      { name: "Acne Clinic", duration: "30 min", price: "$99", desc: "Focused acne treatment session with extractions and corrective care for clearer skin." },
    ],
  },
  {
    title: "Consultations",
    services: [
      { name: "Virtual Consultation", duration: "45 min", price: "$100", desc: "Meet with our team remotely to discuss your skin goals and explore treatment options." },
      { name: "In-Studio Consultation", duration: "1 hr", price: "From $100", desc: "Comprehensive in-person skin assessment with a personalized treatment plan." },
      { name: "Neuromodulator Consultation", duration: "1 hr", price: "$100", desc: "Detailed evaluation to determine the best neurotoxin approach for your aesthetic goals." },
      { name: "Laser Consultation", duration: "15 min", price: "$100", desc: "Skin analysis to determine candidacy and create a custom laser treatment plan." },
      { name: "Hair Restoration Consultation", duration: "1 hr", price: "$150", desc: "In-depth assessment of hair loss concerns with PRP/PRFM treatment recommendations." },
    ],
  },
  {
    title: "Cosmetic Injectables",
    services: [
      { name: "Neurotoxin", duration: "15 min", price: "$14 per unit", desc: "Botox, Letybo, or Daxxify to smooth wrinkles and fine lines for a refreshed appearance." },
      { name: "Lip Filler", duration: "45 min", price: "$550", desc: "Hyaluronic acid filler for subtle lip enhancement, improved symmetry, and natural fullness." },
      { name: "Soft Volume Lips", duration: "45 min", price: "$600", desc: "Premium lip volumizing treatment for soft, pillowy results with expert technique." },
      { name: "Dermal Fillers", duration: "1 hr", price: "Starting at $750", desc: "RHA and Juvederm fillers to restore volume, contour, and smooth deep lines." },
      { name: "Skinvive Skin Booster by Juvederm", duration: "30 min", price: "$300", desc: "Micro-injections of hyaluronic acid to boost skin hydration, smoothness, and glow." },
      { name: "VAMP by Prollenium Skin Booster", duration: "15 min", price: "$175", desc: "PDRN (Salmon DNA) skin booster to rejuvenate and improve skin quality from within." },
      { name: "Facial Balancing", duration: "1 hr 30 min", price: "Inquire within", desc: "Strategic filler placement across multiple areas for harmonious, natural facial proportions." },
    ],
  },
  {
    title: "PRFM + Regenerative Treatments",
    services: [
      { name: "Undereye PRFM", duration: "1 hr 15 min", price: "$850", desc: "Platelet-rich fibrin matrix treatment to reduce dark circles, hollowing, and under-eye aging." },
      { name: "PRFM Full Face", duration: "1 hr 30 min", price: "$1,450", desc: "Full-face regenerative treatment using your own growth factors for collagen renewal and skin rejuvenation." },
      { name: "Undereye Filler + PRFM", duration: "45 min", price: "$850", desc: "Combined filler and PRFM approach for comprehensive under-eye correction and lasting results." },
      { name: "NAD+", duration: "Varies", price: "Inquire", desc: "NAD+ IV therapy for cellular energy, anti-aging support, and overall wellness." },
      { name: "PRP Hair Restoration", duration: "1 hr", price: "Inquire", desc: "Platelet-rich plasma treatment to stimulate hair follicles and support healthier, thicker hair growth." },
    ],
  },
  {
    title: "Microneedling",
    services: [
      { name: "SkinPen Microneedling", duration: "1 hr", price: "$475", desc: "FDA-cleared microneedling to stimulate collagen, reduce scars, and improve skin texture." },
      { name: "SkinPen Microneedling with PRP", duration: "1 hr 30 min", price: "$575", desc: "Microneedling enhanced with platelet-rich plasma for accelerated healing and deeper rejuvenation." },
      { name: "Nano Needling Brightening Facial", duration: "1 hr", price: "$300", desc: "Gentle nano-needling facial that infuses brightening serums for luminous, even-toned skin." },
      { name: "Radiofrequency Microneedling", duration: "1 hr 30 min", price: "$625", desc: "Lutronic Genius RF microneedling for skin tightening, wrinkle reduction, and deep remodeling." },
      { name: "Radiofrequency Microneedling with PRP", duration: "1 hr 30 min", price: "$725", desc: "RF microneedling combined with PRP for maximum collagen stimulation and skin renewal." },
    ],
  },
  {
    title: "Laser Treatments",
    services: [
      { name: "Laser Hair Removal", duration: "15 min", price: "Varies by area", desc: "Lutronic Clarity II laser for safe, effective hair reduction on all skin types and tones." },
      { name: "Spider & Varicose Vein Removal", duration: "1 hr", price: "From $250", desc: "Targeted laser treatment to reduce the appearance of spider veins and small varicose veins." },
      { name: "Laser Toning", duration: "30 min", price: "$350", desc: "Low-energy laser passes to even out skin tone, reduce pigmentation, and improve clarity." },
      { name: "IPL Laser Facial", duration: "30 min", price: "$375", desc: "Intense pulsed light treatment to target sun damage, redness, and uneven pigmentation." },
      { name: "Laser Genesis", duration: "30 min", price: "$350", desc: "Non-invasive laser therapy that promotes collagen growth and reduces fine lines and redness." },
    ],
  },
  {
    title: "VI Peels",
    services: [
      { name: "VI Peel Original", duration: "35 min", price: "$400", desc: "Medium-depth peel for tone, texture, and anti-aging — suitable for all skin types." },
      { name: "VI Peel Advanced", duration: "35 min", price: "$410", desc: "Enhanced formula with boosted anti-aging ingredients for more mature skin concerns." },
      { name: "VI Peel Purify", duration: "35 min", price: "$400", desc: "Specially formulated for acne-prone skin to clear breakouts and prevent future blemishes." },
      { name: "VI Peel Precision Plus", duration: "35 min", price: "$415", desc: "Targeted treatment for stubborn hyperpigmentation, melasma, and sun damage." },
      { name: "VI Peel Purify with Precision Plus", duration: "1 hr", price: "$410", desc: "Dual-action peel combining acne-clearing and pigment-correcting benefits in one treatment." },
    ],
  },
  {
    title: "Chemical Peels + Corrective Treatments",
    services: [
      { name: "The Radiance Peel", duration: "1 hr 15 min", price: "$205", desc: "Brightening chemical peel that reveals smoother, more luminous skin with a healthy glow." },
      { name: "The Clarifying Peel", duration: "1 hr 15 min", price: "$205", desc: "Purifying peel designed to decongest pores, reduce breakouts, and improve skin clarity." },
      { name: "Tox Booster with VI Peel", duration: "1 hr", price: "$400 + $10 per unit", desc: "Combination treatment pairing neurotoxin with a VI Peel for comprehensive rejuvenation." },
      { name: "Milia Extraction", duration: "45 min", price: "From $75", desc: "Professional extraction of small, hard white bumps (milia) for smoother skin." },
      { name: "Cystic Acne Injection", duration: "15 min", price: "$35", desc: "Quick cortisone injection to calm painful, inflamed cystic acne lesions." },
    ],
  },
  {
    title: "Facials",
    services: [
      { name: "Polished Glow Microderm Facial", duration: "1 hr", price: "$125", desc: "Microdermabrasion facial for deep exfoliation, brighter skin, and a polished finish." },
      { name: "Hydrafacial Deluxe", duration: "1 hr 15 min", price: "$275", desc: "Multi-step Hydrafacial with cleansing, extraction, and hydration plus customized boosters." },
      { name: "Hydrafacial Platinum", duration: "1 hr 15 min", price: "$325", desc: "Our most advanced Hydrafacial with LED light therapy and lymphatic drainage for ultimate glow." },
      { name: "GLO2Facial Signature", duration: "1 hr", price: "$225", desc: "Oxygenation facial that exfoliates, infuses nutrients, and gives skin an instant radiant boost." },
      { name: "GLO2Facial Deluxe", duration: "1 hr 30 min", price: "$275", desc: "Extended GLO2Facial with additional treatments for deeper hydration and enhanced results." },
      { name: "iS Clinical Glow On The GO", duration: "30 min", price: "Inquire", desc: "Quick, targeted facial treatment for an instant glow — ideal for busy schedules." },
      { name: "iS Clinical Fire & Ice Facial", duration: "1 hr", price: "Inquire", desc: "Signature treatment combining warming and cooling masks for rejuvenation and radiance." },
    ],
  },
  {
    title: "Teen Treatments",
    services: [{ name: "Teen Acne Facial", duration: "1 hr", price: "$175", desc: "Age-appropriate facial designed for teen skin — gentle extractions, education, and a clear-skin plan." }],
  },
];

export const aftercareTreatments = [
  {
    id: 'botox',
    title: 'Botox',
    image: '/aftercare/botox.jpg',
    instructions: [
      'Do not touch, rub, or massage the treated areas for at least 4–6 hours.',
      'Stay upright for 4 hours after treatment. Avoid lying down flat.',
      'Avoid strenuous exercise, saunas, and hot yoga for 24 hours.',
      'Results typically appear within 3–7 days. Full effect at 2 weeks.',
      'Avoid facials, laser treatments, and chemical peels for 24–48 hours.',
    ],
  },
  {
    id: 'chemical-peel',
    title: 'Chemical Peel',
    image: '/aftercare/chemical-peel.jpg',
    instructions: [
      'Follow the specific instructions provided at your appointment based on peel depth.',
      'Keep skin moisturized. Use gentle cleanser and avoid harsh products or exfoliants.',
      'Peeling may occur. Do not pick or pull at skin. Let it shed naturally.',
      'Apply broad-spectrum SPF 30+ daily. Avoid sun exposure and tanning beds.',
      'Avoid makeup until skin has calmed. No strenuous exercise or swimming until healed.',
    ],
  },
  {
    id: 'facial-balancing',
    title: 'Facial Balancing / PRFM',
    image: '/aftercare/facial-balancing.png',
    instructions: [
      'Avoid touching or massaging the treated areas for at least 6 hours.',
      'Apply ice or cold compresses as needed to reduce swelling. Sleep elevated for 1–2 nights if possible.',
      'Avoid strenuous exercise, alcohol, and blood thinners for 24–48 hours.',
      'Avoid facials, laser treatments, and chemical peels for 2 weeks.',
      'Bruising and swelling are normal and typically resolve within 1–2 weeks.',
    ],
  },
  {
    id: 'filler',
    title: 'Facial Filler / Lip Filler',
    images: ['/aftercare/filler-left.png', '/aftercare/filler-right.png'],
    instructions: [
      'Avoid touching or massaging the treated areas for at least 6 hours unless directed otherwise.',
      'Apply ice or cold compresses to reduce swelling. Sleep elevated for 1–2 nights if possible.',
      'Avoid strenuous exercise, alcohol, and blood thinners for 24–48 hours.',
      'Bruising and swelling are common and typically resolve within 1–2 weeks.',
      'Avoid facials, laser treatments, and chemical peels for 2 weeks.',
    ],
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    image: '/aftercare/laser-hair-removal.png',
    instructions: [
      'Avoid sun exposure and tanning for at least 2 weeks before and after each treatment. Apply broad-spectrum SPF 30+ daily on treated areas.',
      'Do not wax, pluck, or use depilatory creams between sessions. Shaving is allowed.',
      'Keep the treated area clean and moisturized. Use gentle, fragrance-free products for 24–48 hours.',
      'Redness, swelling, and mild sensitivity are normal and typically resolve within a few hours to a few days.',
      'Avoid hot baths, saunas, strenuous exercise, and swimming for 24–48 hours after treatment.',
    ],
  },
  {
    id: 'microneedling-skinpen',
    title: 'Microneedling SkinPen',
    image: '/aftercare/microneedling-skinpen.png',
    instructions: [
      'Keep the treated area clean and moisturized. Use only gentle, non-irritating products for 24–48 hours.',
      'Avoid makeup for at least 24 hours. No retinoids, AHAs, BHAs, or exfoliants for 5–7 days.',
      'Apply broad-spectrum SPF 30+ daily. Avoid direct sun exposure and tanning for 2 weeks.',
      'Do not touch, pick, or scratch the treated area. Redness and mild swelling are normal for 24–72 hours.',
      'Avoid strenuous exercise, saunas, swimming, and excessive sweating for 24–48 hours.',
    ],
  },
  {
    id: 'vi-peel-body',
    title: 'VI Peel Body',
    image: '/aftercare/vi-peel-body.jpg',
    instructions: [
      'Do not wash, touch, or apply anything to the treated area for at least 4–6 hours after the peel.',
      'Peeling typically begins 2–3 days after treatment. Do not pick or pull at peeling skin.',
      'Apply the provided post-peel products as directed. Keep the area moisturized.',
      'Avoid sun exposure and wear protective clothing or SPF on treated areas.',
      'Avoid strenuous exercise, saunas, hot tubs, and swimming until skin has fully healed.',
    ],
  },
  {
    id: 'vi-peel-face',
    title: 'VI Peel Face',
    image: '/aftercare/vi-peel-face.png',
    instructions: [
      'Do not wash, touch, or apply anything to the treated area for at least 4–6 hours after the peel.',
      'Peeling typically begins 2–3 days after treatment and may last 5–7 days. Do not pick or pull at peeling skin.',
      'Apply the provided post-peel towelettes as directed. Use gentle cleanser and moisturizer once peeling begins.',
      'Avoid sun exposure and wear broad-spectrum SPF 30+ daily. No makeup until peeling is complete.',
      'Avoid strenuous exercise, saunas, and swimming until skin has fully healed.',
    ],
  },
];
