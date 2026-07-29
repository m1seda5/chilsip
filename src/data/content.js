export const NAV_LINKS = [
  { href: '#howvideo', label: 'Watch Demo' },
  { href: '#why', label: 'Benefits' },
  { href: '#perfect', label: 'Applications' },
  { href: '#partner', label: 'Partnerships' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export const STEPS = [
  {
    n: 1,
    title: 'Find the box',
    body: 'CHILLSIP sits in the middle of your table, ready whenever you need it.',
  },
  {
    n: 2,
    title: 'Open here',
    body: 'Heading to the washroom or the bar? Lift the flap marked “Open Here.”',
  },
  {
    n: 3,
    title: 'Take a seal',
    body: 'Peel one out and press it over the rim of your glass — it bonds in about a second.',
  },
  {
    n: 4,
    title: 'Return with confidence',
    body: 'An intact seal means an undisturbed drink, the whole night through.',
  },
]

export const BENEFITS = [
  {
    title: 'Helps reduce opportunities for drink tampering',
    body: 'A visibly disturbed seal makes any tampering attempt obvious at a glance.',
    icon: 'shield',
  },
  {
    title: 'Helps minimize accidental spills',
    body: 'A secure cover keeps your drink where it belongs, even in a crowded room.',
    icon: 'spill',
  },
  {
    title: 'Improves beverage hygiene',
    body: 'Single-use by design — every seal is fresh, sealed, and used once.',
    icon: 'hygiene',
  },
  {
    title: 'Increases customer confidence',
    body: 'Visible, tamper-evident protection guests notice and remember.',
    icon: 'check',
  },
  {
    title: 'Eco-conscious solution',
    body: 'Lightweight materials designed with a lower environmental footprint in mind.',
    icon: 'eco',
  },
  {
    title: 'Branding & sponsorship opportunities',
    body: 'Custom-branded covers turn every drink into a visible touchpoint.',
    icon: 'brand',
  },
]

export const VENUES = [
  { label: 'Nightclubs', icon: 'music' },
  { label: 'Bars & Lounges', icon: 'glass' },
  { label: 'Hotels', icon: 'hotel' },
  { label: 'Restaurants', icon: 'utensils' },
  { label: 'Cafés', icon: 'pin' },
  { label: 'Festivals', icon: 'flag' },
  { label: 'Corporate Events', icon: 'calendar' },
  { label: 'Entertainment Venues', icon: 'stage' },
  { label: 'Stadiums', icon: 'stadium' },
  { label: 'Takeaway Drinks', icon: 'bag' },
]

export const PARTNER_POINTS = [
  "Strengthen your venue's safety reputation",
  'Bulk pricing for bars, clubs, and hotels',
  'Custom branding and sponsor campaigns available',
  'Simple restocking for high-volume venues',
]

export const TESTIMONIALS = [
  {
    quote:
      'I put it on before I head to the dance floor and stop thinking about my drink for the rest of the night. It’s one less thing to worry about.',
    name: 'Jess H.',
    role: 'Nairobi, Kenya',
    initials: 'JH',
  },
  {
    quote:
      'We started keeping CHILLSIP at the bar top. Guests notice it, and it’s become part of how we talk about safety at our venue.',
    name: 'Marco D.',
    role: 'Bar Manager, The Alley Room',
    initials: 'MD',
  },
  {
    quote:
      'My roommate showed me these before a festival. Now they live in my bag right next to my ID.',
    name: 'Priya R.',
    role: 'College Senior',
    initials: 'PR',
  },
]

export const FAQS = [
  {
    q: 'How does CHILLSIP work?',
    a: 'Peel the seal and press it over the rim of your glass or cup. It bonds directly to the glass, and drinking happens through a designated straw zone — so any attempt to lift it, slide it aside, or drop something through leaves a visible mark you can spot right away.',
  },
  {
    q: 'Will it fit different glasses?',
    a: 'Yes. CHILLSIP is flexible and sized to stretch comfortably over most standard glasses, cups, cans, and bottle openings you’ll find at bars, restaurants, cafés, and events.',
  },
  {
    q: 'Is it eco-conscious?',
    a: 'The seal itself is designed for single use to guarantee a fresh, hygienic barrier every time. Our packaging uses recyclable materials today, and we’re actively developing a fully recyclable seal as part of our eco-conscious approach.',
  },
  {
    q: 'Can businesses order in bulk?',
    a: 'Yes. We offer wholesale packs for bars, clubs, hotels, universities, and event organizers, with custom branding, sponsor campaigns, and tailored hospitality solutions available on request. Reach out through the contact form below to get started.',
  },
  {
    q: 'Is it waterproof?',
    a: 'Yes. CHILLSIP is built to hold up through condensation, ice, and the occasional spill for the full duration of a night out.',
  },
]

export const DEMO_STEPS = [
  { label: 'Find the box', box: 'on', glass: 'off', seal: 'off', leak: 'off' },
  { label: 'Open here', box: 'on', glass: 'off', seal: 'off', leak: 'off' },
  { label: 'Peel a seal off', box: 'off', glass: 'off', seal: 'peel', leak: 'off' },
  { label: 'Press it onto your glass', box: 'off', glass: 'on', seal: 'on', leak: 'off' },
  { label: 'Check it when you return', box: 'off', glass: 'on', seal: 'on', leak: 'off' },
  {
    label: 'A leak means it has been tampered with',
    box: 'off',
    glass: 'on',
    seal: 'on',
    leak: 'on',
  },
]
