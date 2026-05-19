/**
 * Education hub topics, placeholders describe assets Terri may still provide.
 * Topics may optionally set heroImageSrc / heroImageAlt, heroImageFit ('cover' | 'contain'), heroAspect ('portrait' | 'wide' | 'landscape'), heroVideoSrc / heroVideoAlt, logoImageSrc / logoImageAlt, logoAspect, logoTheme, or brands[] (dual-brand sidebar: name, hero, logo per brand).
 * Gallery items may be placeholder label strings or { src, alt } objects; optional type: 'video' for .mov/.mp4 assets.
 */
export const learnCategories = [
  {
    id: 'treatments',
    title: 'Treatments & Technology',
    description: 'Microneedling, peels, lasers, facials, and targeted removals.',
  },
  {
    id: 'injectables',
    title: 'Injectables & Neurotoxins',
    description: 'PRFM, hair restoration, fillers, and peptide-powered neuromodulators offered in studio.',
  },
  {
    id: 'skincare',
    title: 'Professional Skincare Brands',
    description: 'Medical-grade lines we trust, retail, and build protocols around.',
  },
  {
    id: 'plan',
    title: 'Plan Your Care',
    description: 'Consultations, memberships, and wellness add-ons.',
  },
]

export const learnTopics = [
  {
    slug: 'skinpen-microneedling',
    categoryId: 'treatments',
    title: 'SkinPen Microneedling',
    metaDescription:
      'Learn about SkinPen Microneedling at The Skincare Studio in Stratford, CT. Connecticut SkinPen ambassador practice for collagen induction and skin renewal.',
    eyebrow: 'Collagen induction therapy',
    intro: [
      'Microneedling uses ultra-fine, medical-grade needles to create controlled micro-channels in the skin. Your body responds with a wound-healing cascade that supports collagen and elastin, improved texture, and a fresher-looking surface over a series of visits.',
      'SkinPen is an FDA-cleared microneedling device trusted in medical aesthetics for predictable depth and safety when operated by trained providers.',
      'The Skincare Studio is proud that Terri Miller serves as one of two official SkinPen ambassadors for the State of Connecticut, a reflection of advanced technique and commitment to regenerative skin treatments.',
    ],
    highlights: [
      'Supports fine lines, acne scars, enlarged pores, and overall tone and texture',
      'Often paired with clinical-grade topicals or PRP depending on your plan',
      'Treatment Series spaced weeks apart with downtime tailored to depth',
    ],
    sections: [
      {
        title: 'What To Expect',
        paragraphs: [
          'After cleansing and numbing when appropriate, the device glides across the treatment area with sterile, single-use needle cartridges. You may feel light vibration or sandpaper-like sensation. Mild redness or tightness afterward is common and typically fades within a few days.',
        ],
      },
      {
        title: 'Good Candidates',
        paragraphs: [
          'Many skin types can benefit; contraindications such as active infection, certain medications, or pregnancy are reviewed at consultation. We customize needle depth and pass pattern to your goals and recovery preferences.',
        ],
      },
    ],
    placeholders: {
      hero: 'SkinPen device and treatment room photography',
      gallery: [
        {
          src: '/learn-skinpen-hero-treatment.png',
          alt: 'Microneedling with SkinPen on the forehead; clinician in blue gloves with patient wearing protective eye shields at The Skincare Studio',
        },
        {
          src: '/learn-skinpen-gallery-before-after.png',
          alt: 'Before and after SkinPen microneedling on the abdomen showing improvement in stretch marks and surgical scar appearance',
        },
        {
          src: '/learn-skinpen-gallery-newbeauty-award.png',
          alt: 'SkinPen Precision Elite device in its box with the NewBeauty 2026 Beauty Award Winner badge for Best Microneedling Treatment for Acne Scars',
        },
      ],
    },
    heroVideoSrc: '/learn-skinpen-gallery-treatment.mov',
    heroVideoAlt: 'Microneedling with SkinPen at The Skincare Studio',
  },
  {
    slug: 'vi-peel-vi-body',
    categoryId: 'treatments',
    title: 'VI Peel & VI Body',
    metaDescription:
      'VI Peel and VI Body chemical peels at The Skincare Studio, Stratford CT. Medium-depth peels for face and body pigmentation, texture, and clarity.',
    eyebrow: 'Chemical resurfacing',
    intro: [
      'VI Peel is a medium-depth chemical peel system designed to lift pigment, refine pores, soften fine lines, and improve acne-prone or sun-damaged skin. Formulations vary (Original, Advanced, Purify, Precision Plus, and peptide-boosted options) so your provider can match peel strength to your skin type and downtime tolerance.',
      'VI Body extends the same philosophy to larger areas (chest, back, arms, or legs) where breakouts, rough texture, or uneven tone bother you.',
    ],
    highlights: [
      'Peeling typically unfolds over several days; aftercare kit supports safe shedding',
      'Options for pigment, acne, aging, and resilient skin',
      'May be combined with compatible boosters per provider judgment',
    ],
    sections: [
      {
        title: 'Planning Your Peel',
        paragraphs: [
          'We review medications, recent procedures, melasma history, and your social calendar before scheduling. Some clients prefer Thursday peels to manage visible flaking over the weekend.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-vi-peel-purify.png',
    heroImageAlt:
      'VI Peel Purify with Precision + Peptides before and after three treatments for active acne, scarring, and texture',
    logoImageSrc: '/learn-vi-peel-logo.png',
    logoImageAlt: 'VI Peel by Vitality Institute logo, Vitality Institute for Confident Skin',
  },
  {
    slug: 'lutronic-clarity-ii-laser',
    categoryId: 'treatments',
    title: 'Lutronic Clarity II Laser',
    metaDescription:
      'Clarity II laser hair removal, laser toning, and vein treatments at The Skincare Studio in Stratford, Connecticut.',
    eyebrow: 'Multi-application platform',
    intro: [
      'Our Lutronic Clarity II platform combines dual wavelengths suited for hair reduction and pigment-aware treatments across a wide range of skin types, always with parameters chosen by licensed laser providers after full consultation.',
      'Applications include laser hair removal for stubborn or large areas, laser toning for dullness and uneven complexion, and treatment of spider veins and selected superficial vascular concerns.',
    ],
    highlights: [
      'Hair cycles mean a series of sessions for best reduction',
      'Toning visits may brighten with minimal downtime depending on settings',
      'Vein treatments target discrete vessels; outcomes vary by size and depth',
    ],
    sections: [
      {
        title: 'Safety First',
        paragraphs: [
          'Sun avoidance, honest medication review, and pre/post instructions protect your barrier and pigment. We decline treatment when tanning or photosensitizing drugs make laser unsafe.',
        ],
      },
    ],
    placeholders: {
      gallery: [
        {
          type: 'video',
          src: '/learn-lutronic-clarity-gallery.mov',
          alt: 'Laser treatment at The Skincare Studio with Lutronic Clarity II',
        },
        {
          src: '/learn-lutronic-laser-before.png',
          alt: 'Before laser hair removal on the underarm, dense hair on dark skin before Lutronic Clarity II treatment',
        },
        {
          src: '/learn-lutronic-laser-after.png',
          alt: 'After laser hair removal on the underarm, reduced hair growth and smoother skin following Lutronic Clarity II',
        },
      ],
    },
    heroImageSrc: '/learn-lutronic-clarity-treatment.png',
    heroImageAlt:
      'Laser hair removal with Lutronic Clarity II on the underarm at The Skincare Studio; patient wears protective eyewear',
    logoImageSrc: '/learn-lutronic-clarity-logo.png',
    logoImageAlt: 'Lutronic Clarity II logo with Intelligent Tracking, laser platform branding',
    logoAspect: 'wide',
  },
  {
    slug: 'genius-rf-microneedling',
    categoryId: 'treatments',
    title: 'Lutronic Genius Radiofrequency Microneedling',
    metaDescription:
      'Lutronic Genius Radiofrequency Microneedling for skin tightening and texture at The Skincare Studio Medical Spa, Stratford CT.',
    eyebrow: 'Radiofrequency + microneedles',
    intro: [
      'Genius delivers RF energy through insulated microneedles to heat deeper dermis while sparing much of the surface. The goal is collagen remodeling, firmer feel, refined texture, and scar improvement over a curated series.',
      'Compared with traditional microneedling alone, RF adds a thermal tightening dimension, ideal for jawline definition concerns, acne scarring, or crepey areas when you are medically cleared.',
    ],
    highlights: [
      'Numbed treatment with warmth sensation during RF pulses',
      'Social downtime commonly mild swelling or redness for days',
      'Series spaced weeks apart for cumulative remodeling',
    ],
    sections: [
      {
        title: 'Consultation Essentials',
        paragraphs: [
          'Implants, pacemakers, pregnancy, and active skin infection change candidacy. We map depth and energy to your Fitzpatrick type and sensitivity.',
        ],
      },
    ],
    placeholders: {},
    logoImageSrc: '/learn-lutronic-genius-logo.png',
    logoImageAlt: 'Lutronic Genius radiofrequency microneedling logo',
    logoAspect: 'banner',
    logoTheme: 'dark',
  },
  {
    slug: 'skin-tags-dpn-removal',
    categoryId: 'treatments',
    title: 'Milia Extraction, Skin Tag & DPN Removal',
    metaDescription:
      'Milia extraction, skin tag removal, and dermatosis papulosa nigra (DPN) treatment at The Skincare Studio Medical Spa in Stratford, CT.',
    eyebrow: 'Lesion-focused visits',
    intro: [
      'Milia are small, firm white bumps that form when keratin becomes trapped beneath the skin, often around the eyes or cheeks. Skin tags (acrochordons) and dermatosis papulosa nigra (DPN) are other common benign growths. While harmless, they can catch on jewelry, bother you cosmetically, or multiply along friction zones.',
      'After confirming lesions are benign-appearing and appropriate for in-office care, providers select the right technique for each concern: careful milia extraction, and minimally invasive removal for skin tags and DPN, often with topical anesthesia when indicated.',
    ],
    highlights: [
      'Milia extraction for smooth, clearer skin around delicate areas',
      'Medical assessment distinguishes benign lesions from those needing biopsy',
      'Small wounds heal over days to weeks with wound-care guidance',
      'Sun protection afterward lowers discoloration risk',
    ],
    sections: [
      {
        title: 'Why Professional Removal Matters',
        paragraphs: [
          'DIY snipping or picking risks bleeding, scarring, and infection. We document lesion borders, obtain consent, and discuss realistic outcomes, especially for deeper skin tones where pigment shifts are possible.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-milia-skin-tag-dpn-hero.png',
    heroImageAlt:
      'Close-up of milia near the inner corner of the eye, indicated for professional extraction at The Skincare Studio',
  },
  {
    slug: 'hydrafacial',
    categoryId: 'treatments',
    title: 'Hydrafacial',
    metaDescription:
      'Hydrafacial Signature, Deluxe, Platinum, and For Him treatments at The Skincare Studio Medical Spa, Stratford CT.',
    eyebrow: 'Hydradermabrasion',
    intro: [
      'Hydrafacial merges cleanse, glycolic/salicytic exfoliation, painless extraction via vortex suction, and infusion of hydrating, peptide-rich serums in one fluid appointment, little to no downtime and instant glow.',
      'Levels escalate from Signature (core steps) to Deluxe (boosters + LED) to Platinum (lymphatic options where offered). “For Him” tailors oils and messaging without sacrificing clinical thoroughness.',
    ],
    highlights: [
      'Great maintenance between peels or lasers',
      'Custom booster add-ons target pigment, congestion, or redness',
      'Finish with medical-grade SPF from our retail shelves',
    ],
    sections: [
      {
        title: 'Who Loves Hydrafacial?',
        paragraphs: [
          'Bridal parties, teens easing into clinical skincare, and frequent flyers needing hydration resets all gravitate here. If you have shellfish allergy or active rash, tell us, some solutions contain botanical derivatives.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-hydrafacial-treatment.png',
    heroImageAlt:
      'Hydrafacial treatment at The Skincare Studio; client on the treatment bed with headband and eye covering during a facial',
    logoImageSrc: '/learn-hydrafacial-logo.png',
    logoImageAlt: 'Hydrafacial logo',
    logoAspect: 'wide',
    logoTheme: 'dark',
  },
  {
    slug: 'glo2facial',
    categoryId: 'treatments',
    title: 'GLO2Facial',
    metaDescription:
      'GLO2Facial Signature and Deluxe oxygenating facials at The Skincare Studio in Stratford, Connecticut.',
    eyebrow: 'Oxfoliation™ technology',
    intro: [
      'GLO2Facial (formerly Geneo) combines exfoliation, oxygenation via Bohr effect bubbles, ultrasound infusion, and sometimes lymphatic massage, depending on the tier, to brighten dull skin without harsh downtime.',
      'Think event-ready polish when you want more than a classic facial but less peeling than a VI Peel.',
    ],
    highlights: [
      'Multiple capsule scents address dryness, acne, or pigment balance',
      'Ultrasound drives serum penetration gently',
      'Pairs well with maintenance toxins or filler appointments spaced appropriately',
    ],
    sections: [
      {
        title: 'Aftercare',
        paragraphs: [
          'Avoid makeup until pores cool down same day, hydrate aggressively, and skip aggressive exfoliants for several days. Your provider sends reminders tailored to capsule ingredients.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-glo2facial-treatment.png',
    heroImageAlt:
      'GLO2Facial oxygenating treatment at The Skincare Studio; client with foam on the face during an in-studio facial',
    logoImageSrc: '/learn-glo2facial-logo.png',
    logoImageAlt: 'GLO2Facial logo',
    logoAspect: 'square',
  },
  {
    slug: 'skincare-studio-facial',
    categoryId: 'treatments',
    title: 'Skincare Studio Facial',
    metaDescription:
      'Signature Skincare Studio Facial combining relaxation with clinical skincare at our Stratford, CT medical spa.',
    eyebrow: 'House facial ritual',
    intro: [
      'Our namesake facial blends relaxation massage with customized cleanse, enzyme or mild exfoliation, extractions if desired, targeted masks, and finishing antioxidants, all curated from the medical-grade lines carried on-site.',
      'It is the ideal entry service when you are new to the studio or between advanced treatments.',
    ],
    highlights: [
      'Estheticians tailor steps to sensitivity, rosacea, acne, or dryness',
      'LED add-ons available when booked',
      'Receive a mini home-care roadmap without pressure sales',
    ],
    sections: [
      {
        title: 'Frequency',
        paragraphs: [
          'Monthly facials maintain clarity; quarterly visits still beat department-store samples when paired with SPF discipline.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-skincare-studio-facial-treatment.png',
    heroImageAlt:
      'Before and after Skincare Studio Facial showing hydrated, glowing skin during an in-studio treatment',
  },
  {
    slug: 'rha-fillers',
    categoryId: 'injectables',
    title: 'RHA Fillers',
    metaDescription:
      'RHA resilient hyaluronic acid fillers for dynamic expression at The Skincare Studio Medical Spa, Stratford CT.',
    eyebrow: 'Designed for movement',
    intro: [
      'RHA (Resilient Hyaluronic Acid) fillers integrate Revance’s advanced crosslinking to bend gracefully with facial animation (smiling, talking, and laughing) without stiffness.',
      'They suit lipstick lines, nasolabial folds, and off-label refinements where your injector prioritizes tissue integration.',
    ],
    highlights: [
      'Hyaluronic acid reversible with hyaluronidase if needed',
      'Cannula techniques minimize bruising in eligible cases',
      'Plan filler appointments away from major dental work',
    ],
    sections: [
      {
        title: 'Consultation Mapping',
        paragraphs: [
          'Digital photography and facial balancing principles guide volume restoration versus chase trends. We carry complementary filler families so texture and longevity match each zone.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-rha-fillers-product.png',
    heroImageAlt: 'Teoxane RHA 3 Mepi resilient hyaluronic acid filler box and syringe',
    logoImageSrc: '/learn-rha-fillers-logo.png',
    logoImageAlt: 'RHA Collection logo',
    logoAspect: 'lockup',
  },
  {
    slug: 'versa-fillers',
    categoryId: 'injectables',
    title: 'Revanesse Versa Fillers',
    metaDescription:
      'Revanesse Versa Fillers, hyaluronic acid for lips and facial balancing at The Skincare Studio in Stratford, CT.',
    eyebrow: 'Balanced HA gel',
    intro: [
      'Versa from Revanesse offers spherical HA particles aimed at smooth integration and predictable swelling profiles, popular for lips, oral commissures, and midface blending.',
      'Your injector selects Versa, Versa Lips™, or sister products inside the portfolio depending on tissue thickness desired.',
    ],
    highlights: [
      'Built-in lidocaine option improves comfort',
      'Precise micro-droplet layers reduce duck-lips stigma',
      'Discuss supplements that thin blood ahead of appointment',
    ],
    sections: [
      {
        title: 'After Filler Etiquette',
        paragraphs: [
          'Avoid strenuous workouts, saunas, and excessive alcohol for 24–48 hours. Sleep elevated night one and skip straw suction if lips were treated.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-revanesse-versa-product.png',
    heroImageAlt: 'Revanesse Versa and Versa Lips filler packaging on a black background',
    logoImageSrc: '/learn-revanesse-versa-logo.png',
    logoImageAlt: 'Revanesse Versa logo',
    logoAspect: 'revanesse',
  },
  {
    slug: 'letybo-daxxify-neurotoxin',
    categoryId: 'injectables',
    title: 'Letybo & Daxxify',
    metaDescription:
      'Letybo and Daxxify neurotoxin treatments at The Skincare Studio Medical Spa, Stratford, Connecticut.',
    eyebrow: 'Peptide-powered neuromodulators',
    intro: [
      'Neurotoxins soften dynamic wrinkles by calming muscle contraction where artistry preserves expression. Our menu highlights Letybo alongside Daxxify®, the peptide-powered formulation noted for extended duration in many FDA trials.',
      'Both integrate into forehead lines, glabellar “11s,” crow’s feet, bunny lines, lip flip requests, and microtox protocols when medically appropriate.',
    ],
    highlights: [
      'Dosage tailored to brow position, lid heaviness risk, and metabolism',
      'Onset window varies; follow-up photos fine-tune outcomes',
      'Rewards programs may apply, ask front desk',
    ],
    sections: [
      {
        title: 'Why Alternatives To Legacy Toxins Matter',
        paragraphs: [
          'Immunity or plateau issues with older brands sometimes respond to switching molecules. Transparent pricing per unit keeps budgeting predictable.',
        ],
      },
    ],
    placeholders: {},
    brands: [
      {
        name: 'Letybo',
        heroImageSrc: '/learn-letybo-product.png',
        heroImageAlt: 'Letybo letibotulinumtoxinA vials for injection',
        logoImageSrc: '/learn-letybo-logo.png',
        logoImageAlt: 'Letybo logo',
        logoAspect: 'wide',
      },
      {
        name: 'Daxxify',
        heroImageSrc: '/learn-daxxify-product.png',
        heroImageAlt: 'Daxxify daxibotulinumtoxinA-lanm vial and packaging',
        logoImageSrc: '/learn-daxxify-logo.png',
        logoImageAlt: 'Daxxify logo',
        logoAspect: 'wide',
        logoTheme: 'dark',
      },
    ],
  },
  {
    slug: 'obagi-dermal-fillers',
    categoryId: 'injectables',
    title: 'Obagi Dermal Fillers',
    metaDescription:
      'Obagi-branded hyaluronic filler portfolio discussion at The Skincare Studio, consult for availability and pairing with Obagi skincare.',
    eyebrow: 'Injectable partnership',
    intro: [
      'Obagi’s reputation for pigment and aging science extends into curated filler offerings where stocked. Pairing topical Obagi protocols with HA volumization can stabilize melanocyte behavior while restoring structure.',
      'Exact SKUs rotate; consultation confirms current inventory and rebate promotions.',
    ],
    highlights: [
      'Holistic brand synergy for melasma-prone patients cleared for fillers',
      'Cannula or needle approaches matched to anatomy',
      'Documentation photography tracks symmetry gains',
    ],
    sections: [
      {
        title: 'Candidacy Screening',
        paragraphs: [
          'Autoimmune flares, pregnancy, or unrealistic symmetry demands redirect care. We educate on bruising timelines before weddings.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-obagi-fillers-product.png',
    heroImageAlt: 'Obagi Medical SAYPHA filler syringes on a tray with product packaging',
    logoImageSrc: '/learn-obagi-fillers-logo.png',
    logoImageAlt: 'Obagi Medical logo',
    logoAspect: 'square',
  },
  {
    slug: 'prfm-regenerative-treatments',
    categoryId: 'injectables',
    title: 'PRFM & Regenerative Treatments',
    metaDescription:
      'PRFM platelet-rich fibrin matrix and regenerative skin treatments at The Skincare Studio Medical Spa in Stratford, CT. Under-eye rejuvenation and full-face collagen renewal.',
    eyebrow: 'Your own growth factors',
    intro: [
      'Platelet-rich fibrin matrix (PRFM) uses a small sample of your blood to concentrate platelets and growth factors, then reintroduces them where skin needs renewal. The fibrin matrix releases signals gradually, supporting collagen remodeling, improved texture, and a more rested appearance over the following weeks.',
      'Unlike instant volume from hyaluronic acid filler alone, PRFM is regenerative: results build as tissue responds. It is especially popular for under-eye hollowing, dark circles, and fine crepiness, and can be planned for broader facial rejuvenation when a larger treatment area is appropriate.',
      'The Skincare Studio also offers PRP-enhanced microneedling and RF microneedling for patients who want regenerative boost paired with collagen induction. Your provider will recommend the pathway that matches your anatomy, downtime tolerance, and goals.',
    ],
    highlights: [
      'PRFM Small Area (about 75 min) focused on under-eyes and periorbital concerns',
      'PRFM Large Area (about 90 min) for fuller-face regenerative rejuvenation',
      'Often combined with facial balancing or filler only when structure and regenerative goals align',
      'Medical screening, photography, and aftercare instructions provided at every visit',
    ],
    sections: [
      {
        title: 'What To Expect',
        paragraphs: [
          'After consent and numbing when appropriate, blood is drawn and processed in-office to prepare your PRFM. The product is placed with precise technique in the treatment zones discussed at consultation. Mild swelling, bruising, or tenderness is common and usually peaks in the first few days, then softens as healing progresses.',
          'Many patients notice gradual improvement over several weeks; full collagen remodeling can continue for months. We schedule follow-up photography to track symmetry and discuss whether a series or maintenance visit makes sense.',
        ],
      },
      {
        title: 'PRFM vs PRP vs Filler',
        paragraphs: [
          'PRP (platelet-rich plasma) is the liquid fraction of your blood rich in platelets; PRFM adds a fibrin scaffold that can slow release of growth factors. Fillers restore volume immediately with hyaluronic acid. PRFM is not a substitute for filler when significant volume loss needs structural support, but it can beautifully complement a conservative filler plan or stand alone when texture and quality are the priority.',
        ],
      },
      {
        title: 'Aftercare Essentials',
        paragraphs: [
          'Expect swelling and bruising, use cold compresses as directed, and choose Tylenol over NSAIDs unless your clinician advises otherwise. Avoid strenuous exercise, alcohol, smoking, and sun exposure in the windows we provide. Detailed PRFM aftercare lives on our Aftercare page; we review it in person before you leave.',
        ],
      },
    ],
    placeholders: {
      gallery: [
        {
          src: '/learn-prfm-gallery-blood-draw.png',
          alt: 'Blood draw for PRFM processing at The Skincare Studio',
        },
        {
          type: 'video',
          src: '/learn-prfm-gallery-treatment.mov',
          alt: 'PRFM treatment at The Skincare Studio',
        },
        {
          src: '/services-ba-prfm-undereye.png',
          alt: 'Before and after PRFM under-eye treatment showing a smoother, more rested under-eye area',
        },
      ],
    },
    heroImageSrc: '/learn-prfm-treatment.png',
    heroImageAlt:
      'Clinician performing PRFM injection with magnifying loupes while the patient rests comfortably at The Skincare Studio',
    logoImageSrc: '/learn-selphyl-logo.png',
    logoImageAlt: 'Selphyl PRFM system logo',
    logoAspect: 'wide',
  },
  {
    slug: 'hair-restoration',
    categoryId: 'injectables',
    title: 'Hair Restoration',
    metaDescription:
      'Hair restoration consultation and PRP hair treatments at The Skincare Studio Medical Spa in Stratford, CT. Personalized plans for thinning hair and scalp health.',
    eyebrow: 'Scalp and follicle support',
    intro: [
      'Hair thinning can stem from genetics, hormones, stress, styling damage, or postpartum shifts. A thoughtful plan starts with history, scalp exam, and realistic conversation about what regenerative therapies can improve versus what may need dermatology or medical workup.',
      'We begin with a dedicated Hair Restoration Consultation so your provider can assess pattern loss, review medications and supplements, and outline options such as PRP (platelet-rich plasma) scalp treatments, supportive home care, and complementary services like HydraFacial Keravive when scalp health is part of the goal.',
      'Results are gradual: hair growth cycles mean patience and consistency matter more than a single visit. We document baselines and adjust interval spacing based on how your scalp responds.',
    ],
    highlights: [
      'Hair Restoration Consultation (30 min) for assessment and a written plan',
      'PRP Hair Restoration uses your own platelets to support follicle signaling',
      'Series-based scheduling typical; exact count personalized after consult',
      'Keravive scalp treatments available when hydration and buildup are concerns',
    ],
    sections: [
      {
        title: 'Who Benefits',
        paragraphs: [
          'Early to moderate thinning, widening part lines, and reduced density after stress or postpartum changes are common reasons patients explore PRP. Active scalp infection, certain blood disorders, pregnancy, and unrealistic density expectations are reviewed candidly. We may recommend labs or dermatology referral when pattern or symptoms warrant.',
        ],
      },
      {
        title: 'The PRP Process',
        paragraphs: [
          'A small blood draw is processed to concentrate platelets, then the scalp receives targeted injections in the zones mapped at consultation. Numbing and comfort strategies are discussed beforehand. Mild soreness or pinpoint redness afterward usually resolves within a few days.',
        ],
      },
      {
        title: 'Timeline and Maintenance',
        paragraphs: [
          'Because hair follicles cycle slowly, visible changes often take several months. Maintenance intervals vary by age, genetics, and home routine adherence. Nutritional basics, gentle styling, and prescribed topicals (when appropriate) support in-office work between visits.',
        ],
      },
    ],
    placeholders: {
      gallery: [
        {
          src: '/learn-hair-restoration-syringes.png',
          alt: 'PRP syringes prepared for hair restoration treatment at The Skincare Studio',
        },
        {
          src: '/learn-hair-restoration-before-after.png',
          alt: 'Before and after hair restoration showing improved density on the scalp',
        },
      ],
    },
    heroImageSrc: '/learn-hair-restoration-treatment.png',
    heroImageAlt:
      'Scalp PRP injection during hair restoration treatment at The Skincare Studio',
    logoImageSrc: '/learn-selphyl-logo.png',
    logoImageAlt: 'Selphyl PRP system logo',
    logoAspect: 'wide',
  },
  {
    slug: 'consultations',
    categoryId: 'plan',
    title: 'Consultations',
    metaDescription:
      'Virtual and in-studio consultations at The Skincare Studio Medical Spa in Stratford, CT, laser, filler, toxin, body, and cosmetic visits.',
    eyebrow: 'Start with a plan',
    intro: [
      'Whether you tap “Book Online” for a Virtual Consultation, Laser Consultation, Neurotoxin Cosmetic Consult, Lip Filler Consult, Body Consult, Hair Restoration consult, or simply an In-Studio Facial Consultation, every pathway gathers history, goals, contraindications, and photography consent.',
      'Office visits include tactile assessment, ideal for scar texture, laxity grades, or vein mapping, while virtual touchpoints suit travelers comparing budgets before committing.',
    ],
    highlights: [
      'Deposit policies communicated upfront where applicable',
      'Treatment timelines coordinated around events',
      'Medical director oversight for complex cases',
    ],
    sections: [
      {
        title: 'What To Bring',
        paragraphs: [
          'Photos of yourself younger, list of supplements, prior filler brands/dates, and openness about budget tiers help us prioritize.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-consultations-lab-coat.png',
    heroImageAlt:
      'The Skincare Studio embroidered on a white lab coat at the Stratford medical spa',
    heroImageFit: 'contain',
    heroAspect: 'portrait',
  },
  {
    slug: 'memberships',
    categoryId: 'plan',
    title: 'Memberships',
    metaDescription:
      'Membership and loyalty options at The Skincare Studio Medical Spa, Stratford, Connecticut. Ask about current tiers.',
    eyebrow: 'Consistent care, predictable budgeting',
    intro: [
      'Membership structures reward clients who commit to recurring tox, facials, or laser packages, often bundling discounts, birthday perks, or VIP scheduling windows.',
      'Exact tiers evolve seasonally; front desk emails updated PDFs after consultation.',
    ],
    highlights: [
      'Auto-pay simplifies quarterly toxin upkeep',
      'Roll unused perks when policy allows',
      'Pause clauses for maternity or medical leave where offered',
    ],
    sections: [
      {
        title: 'Why Enroll',
        paragraphs: [
          'Spreading clinical investments monthly prevents binge-and-purge cycles that stall collagen programs.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-memberships-studio-sign.png',
    heroImageAlt:
      'The Skincare Studio sign with logo and Your Skin Deserves Better tagline at the Stratford studio',
    heroImageFit: 'contain',
    heroAspect: 'wide',
  },
  {
    slug: 'nad-plus',
    categoryId: 'plan',
    title: 'NAD+',
    metaDescription:
      'NAD+ wellness information at The Skincare Studio Medical Spa, Stratford, CT. Consult for protocols and availability.',
    eyebrow: 'Cellular energy cofactor',
    intro: [
      'Nicotinamide adenine dinucleotide (NAD+) powers mitochondrial reactions influencing energy, DNA repair signaling, and inflammation balance. Clinical wellness circles explore IV or subcutaneous protocols for fatigue, brain fog, or recovery, and aesthetic patients occasionally stack NAD visits apart from laser days.',
      'Medical screening (blood pressure, medication interactions, pregnancy status) precedes any service we host.',
    ],
    highlights: [
      'Sessions monitored by licensed personnel',
      'Hydration and snack guidance minimizes nausea',
      'Not a substitute for sleep or nutrition fundamentals',
    ],
    sections: [
      {
        title: 'Transparent Expectations',
        paragraphs: [
          'Research is evolving; we avoid miracle claims. Discuss infusion duration and realistic symptom relief timelines individually.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-nad-plus-product.png',
    heroImageAlt:
      'Obagi Nu-Gen serum, NAD+ injection vial, and syringe at The Skincare Studio',
    heroImageFit: 'contain',
    heroAspect: 'portrait',
    logoImageSrc: '/learn-nad-plus-logo.png',
    logoImageAlt: 'Obagi Medical logo',
    logoAspect: 'square',
  },
  {
    slug: 'pca-skin',
    categoryId: 'skincare',
    title: 'PCA Skin',
    metaDescription:
      'PCA Skin retail and professional treatments at The Skincare Studio. Terri Miller on the PCA Skin national aesthetics panel since 2025.',
    eyebrow: 'Professional formulations',
    intro: [
      'PCA Skin merges corrective peels with daily home programs rooted in melanin-inclusive education. The Skincare Studio retails hero SKUs, cleansers, pigment regulators, retinol ladders, and broad-spectrum SPF, to stretch in-office results.',
      'Owner Terri Miller was invited onto PCA Skin’s National Esthetics Panel starting in 2025, contributing technique insight nationwide while bringing newest protocols back to Fairfield County.',
    ],
    highlights: [
      'Peel-compatible home regimens minimize complications',
      'Humidity-aware layering tips for Connecticut seasons',
      'Tinted SPF options streamline makeup routines',
    ],
    sections: [
      {
        title: 'Why PCA Aligns With Our Philosophy',
        paragraphs: [
          'Measured peeling plus barrier support mirrors our “luxury plus clinical” mantra, never stripping skin for shock factor.',
        ],
      },
    ],
    placeholders: {
      gallery: [
        {
          src: '/learn-pca-skin-peel-pads.png',
          alt: 'PCA Skin Triple Exfoliation Peel Pads display at The Skincare Studio',
        },
        {
          src: '/learn-pca-skin-gold-partner.png',
          alt: 'PCA Skin Gold Partner 2023 award for The Skincare Studio',
        },
      ],
    },
    heroImageSrc: '/learn-pca-skin-awards.png',
    heroImageAlt:
      'PCA Skin ProRewards Silver certification, National Esthetics Panel recognition, and partner awards at The Skincare Studio',
    heroImageFit: 'contain',
    heroAspect: 'wide',
    logoImageSrc: '/learn-pca-skin-logo.png',
    logoImageAlt: 'PCA skin logo',
    logoAspect: 'wide',
  },
  {
    slug: 'pca-chemical-peels',
    categoryId: 'skincare',
    title: 'PCA Chemical Peels',
    metaDescription:
      'PCA Skin professional chemical peels at The Skincare Studio Medical Spa in Stratford, CT.',
    eyebrow: 'Progressive resurfacing',
    intro: [
      'Beyond VI Peel, PCA offers progressive blends, often layering lactic, TCA derivatives, retinoid boosters, and calming botanicals, for customizable flake intensity.',
      'Ideal when you want pigment lift with clinician-adjustable downtime versus one-size kits.',
    ],
    highlights: [
      'Patch testing or preconditioning for sensitive skin',
      'Body peels extend to back or shoulders',
      'Post-peel pigment control stacks with HQ-free alternatives when needed',
    ],
    sections: [
      {
        title: 'Maintenance Rhythm',
        paragraphs: [
          'Series of lighter peels sometimes outperform single aggressive peels for melasma stability.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-pca-peels-product.png',
    heroImageAlt: 'PCA Skin professional chemical peel bottles including Sensi Peel, PCA Peel, and Ultra Peel',
    heroImageFit: 'contain',
    heroAspect: 'wide',
    logoImageSrc: '/learn-pca-peels-logo.png',
    logoImageAlt: 'PCA skin logo',
    logoAspect: 'wide',
  },
  {
    slug: 'elta-md-skincare',
    categoryId: 'skincare',
    title: 'EltaMD',
    metaDescription:
      'EltaMD sunscreens and skincare at The Skincare Studio Medical Spa, Stratford, Connecticut.',
    eyebrow: 'Derm-trusted SPF',
    intro: [
      'EltaMD’s zinc-based facial sunscreens remain a gold standard for post-procedure protection, sheer finishes appease deeper skin tones without chalk cast.',
      'We stock UV Clear, UV Elements, tinted hybrids, and selected barrier creams for laser aftercare.',
    ],
    highlights: [
      'Reapply education paired with powder SPF hacks',
      'Non-comedogenic options for acne protocols',
      'Revenue supports clinic sampling so you try before full size',
    ],
    sections: [
      {
        title: 'Why SPF Is Non-Negotiable',
        paragraphs: [
          'Every peel, laser, or retinoid acceleration raises photosensitivity. Daily SPF preserves investment better than any single injectable.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-eltamd-sunscreen-display.png',
    heroImageAlt:
      'EltaMD UV Daily and UV Daily Hydration+ sunscreen display at The Skincare Studio',
    heroImageFit: 'contain',
    heroAspect: 'wide',
    logoImageSrc: '/learn-eltamd-logo.png',
    logoImageAlt: 'EltaMD Skincare logo',
    logoAspect: 'square',
  },
  {
    slug: 'obagi-skincare',
    categoryId: 'skincare',
    title: 'Obagi Skincare',
    metaDescription:
      'Obagi Medical skincare systems at The Skincare Studio in Stratford, CT, Nu-Derm®, Clear Fx®, and more.',
    eyebrow: 'Prescription-strength pathways',
    intro: [
      'Obagi protocols remain legendary for melanin-rich skin tackling uneven tone when monitored diligently. FX over-the-counter lines broaden access while Rx Nu-Derm tackles stubborn photodamage under supervision.',
      'We choreograph hydroquinone holidays, tretinoin pacing, and moisturizer sandwiching to reduce irritation.',
    ],
    highlights: [
      'Seasonal adjustments for Connecticut dryness',
      'Photographic timeline each follow-up',
      'Pairs cautiously with lasers, spacing matters',
    ],
    sections: [
      {
        title: 'Commitment Level',
        paragraphs: [
          'Obagi isn’t casual skincare; expect nightly discipline for 12–24 weeks before judging pigment turnover.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-obagi-nu-derm-products.png',
    heroImageAlt:
      'Obagi Medical Nu-Derm Gentle Gel Cleanser retail packaging on the shelf at The Skincare Studio',
    heroImageFit: 'contain',
    heroAspect: 'wide',
    logoImageSrc: '/learn-obagi-skincare-logo.png',
    logoImageAlt: 'Obagi Medical logo',
    logoAspect: 'square',
  },
  {
    slug: 'epicutis-skincare',
    categoryId: 'skincare',
    title: 'Epicutis',
    metaDescription:
      'Epicutis luxury lipid-rich skincare at The Skincare Studio Medical Spa, Stratford, CT.',
    eyebrow: 'Barrier-first biomechanics',
    intro: [
      'Epicutis emphasizes minimalist ingredient lists, lipid ratios mimicking healthy stratum corneum, and holistic anti-inflammatory positioning, perfect stack after RF microneedling or when rosacea flares.',
      'Oil cleansers and serum concentrates feel spa-indulgent yet surgeon-endorsed.',
    ],
    highlights: [
      'Fragrance-conscious clientele gravitate here',
      'Hyaluronic acid hybrids without stickiness',
      'Male-identifying patients appreciate matte finishes',
    ],
    sections: [
      {
        title: 'Usage Tip',
        paragraphs: [
          'Pat tonique onto damp skin, seal with lipid concentrate within 60 seconds to transepidermal water loss lock.',
        ],
      },
    ],
    placeholders: {},
    heroImageSrc: '/learn-epicutis-products.png',
    heroImageAlt:
      'Epicutis Lipid Shield sunscreen, Lipid Serum, and Hyvia Crème products at The Skincare Studio',
    heroImageFit: 'contain',
    heroAspect: 'portrait',
    logoImageSrc: '/learn-epicutis-logo.png',
    logoImageAlt: 'Epicutis logo',
    logoAspect: 'wide',
  },
]

export function getLearnTopicBySlug(slug) {
  return learnTopics.find((t) => t.slug === slug)
}

export function getLearnTopicsByCategory(categoryId) {
  return learnTopics.filter((t) => t.categoryId === categoryId)
}
