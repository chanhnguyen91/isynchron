// English is the default language (served at /). vi.js must have exactly the same keys.
// Voice: warm, specific, modest. Sentence case. Concrete moments over abstract claims.

export const en = {
  skip: 'Skip to main content',
  header: {
    navLabel: 'Main navigation',
    home: 'iSynchron, back to top',
    cta: 'Explore the apps',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  nav: {
    philosophy: 'Philosophy',
    vision: 'Vision',
    products: 'Products',
    connect: 'Connect',
  },
  hero: {
    eyebrow: 'Independent mobile app studio',
    // Each entry rises in on its own and never splits across lines, so keep pairs together.
    headline: [
      { text: 'Less to remember.' },
      { text: 'More time to live.', glow: true, breakBefore: true },
    ],
    sub: 'iSynchron makes small, focused phone apps that remember the details for you — your tips after every shift, your family’s memorial days, who’s who in the family tree.',
    primary: 'Explore the apps',
    secondary: 'Read our vision',
    building: 'In the works',
    scroll: 'Scroll',
    scrollLabel: 'Scroll down to Philosophy',
  },
  philosophy: {
    eyebrow: 'Philosophy',
    title: 'The best technology disappears into your day.',
    intro: 'Three principles behind every app we make.',
    values: [
      {
        title: 'Effortless for everyone',
        lead: 'If it needs a manual, it isn’t finished.',
        body: 'A grandparent and a teenager should both get it on the first try. The clever part — like reading a crumpled receipt — stays out of sight.',
        example: 'Snap a receipt; TipVision does the math',
      },
      {
        title: 'Real problems only',
        lead: 'We start from moments people actually live.',
        body: 'Counting tips at 2 a.m. after a long shift. Trying to recall a grandparent’s memorial day. Not knowing what to call a relative at a family gathering. That’s where every app begins.',
        example: 'Clan-MS reminds the whole family a week ahead',
      },
      {
        title: 'Always improving',
        lead: 'Small releases, steady progress.',
        body: 'We ship often, listen closely and refine week after week — so the app keeps getting better while still feeling familiar in your hand.',
        example: 'TipVision already works in 7 languages and 11 currencies',
      },
    ],
  },
  vision: {
    eyebrow: 'Vision',
    quote: {
      before:
        'We’re not chasing the next big platform. We make small apps that earn a spot on your phone — ',
      glow: 'by quietly making one part of your day easier',
      after: '.',
    },
    missionLabel: 'Mission',
    mission:
      'iSynchron is an independent studio that turns everyday friction into calm, useful phone apps. We use the internet and AI only where they genuinely save you time — and you always stay in control.',
    stepsTitle: 'How we work',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Start from a real moment',
        body: 'Every app begins with a frustration we’ve seen first-hand, not with a feature list.',
      },
      {
        title: 'The app does the chores, you decide',
        body: 'The app scans, sorts and adds up; you review and decide. Every AI button has a manual one right beside it.',
      },
      {
        title: 'Ship small, improve weekly',
        body: 'We put early versions in real hands, listen carefully and refine every week.',
      },
    ],
    audienceTitle: 'Made for',
    audience: [
      'Nail technicians',
      'Servers & bartenders',
      'Gig and shift workers',
      'Families keeping their roots',
      'Clan councils',
      'Descendants far from home',
    ],
  },
  products: {
    eyebrow: 'Products',
    titleLead: 'Two apps.',
    titleGlow: 'Each does one thing well.',
    intro:
      'Focused tools for specific moments — the end of a long shift, the eve of a memorial day.',
    learnMore: 'Learn more',
    emailUs: 'email us',
    dialog: {
      problem: 'The problem',
      features: 'What it does',
      platforms: 'Platforms',
      close: 'Close',
    },
    items: {
      tipvision: {
        tagline: 'Know exactly what every shift earned you.',
        audience: 'For nail techs, servers, bartenders and gig workers',
        summary:
          'Snap your POS receipt at the end of a shift. TipVision separates card tips, cash tips, tip-outs and hours, then shows what you really earn per hour, week and month. No notebook. No spreadsheet.',
        status: 'Coming soon',
        highlights: [
          {
            title: 'AI OCR for receipts & rosters',
            body: 'One slip can hold several shifts. One photo of the roster fills in your whole week.',
          },
          {
            title: 'Your real hourly rate',
            body: 'Base pay, card tips and cash tips kept apart — compared with last period at a glance.',
          },
          {
            title: 'Always your call',
            body: 'Every AI button has a manual twin. Anything the scan isn’t sure about is marked in amber for you to check.',
          },
        ],
        problem:
          'Service workers get paid in pieces: hourly wages, card tips, cash tips, a cut for the front desk. By the end of the month, few know what they actually earn per hour.',
        features: [
          'Scan POS receipts and shift slips, then pick the shifts you want from the results',
          'Scan the venue’s roster: one photo, a whole week of shifts',
          'One-tap clock in and out — hours counted for you, even past midnight',
          'Weekly and monthly reports that point out your best tipping week',
          'Export to PDF or Excel for your accountant or tax return',
          '7 languages, 11 currencies, correct hours when the clocks change',
        ],
        notifySubject: 'Let me know when TipVision launches',
        notifyLabel: 'Notify me at launch',
      },
      'clan-ms': {
        tagline:
          'A digital family register for Vietnamese clans — your roots, always within reach.',
        audience: 'For Vietnamese clans, their councils and descendants everywhere',
        summary:
          'The family tree, memorial-day calendar, kinship lookup and clan news, together in one app. Wherever they live, descendants know their branch, their elders and exactly how to address every relative.',
        status: 'Internal beta',
        highlights: [
          {
            title: 'A living family tree',
            body: 'Clan, branch, household, member — generations deep. A birth known only by its year is kept exactly as the records say.',
          },
          {
            title: 'Never fumble a greeting',
            body: 'Pick two relatives and the app tells you whether it’s chú, bác or cô — and why.',
          },
          {
            title: 'Memorial days, remembered',
            body: 'Lunar dates converted for you; the whole clan is reminded a week and a day before.',
          },
        ],
        problem:
          'The paper genealogy sits in the ancestral hall. Only a few elders remember the memorial days, and descendants working far away lose track of who is who. With every generation, a little more of the family’s story slips away.',
        features: [
          'A family tree that follows tradition: first and later wives, eldest and younger children',
          'Kinship lookup between any two people, with the reason explained',
          'Lunar memorial-day calendar with reminders 7 days and 1 day ahead',
          'A private clan feed: official notices, comments and event RSVPs',
          'Vetted membership — every change to the tree is approved and recorded',
          'AI portrait checks for face, sharpness and lighting',
        ],
        notifySubject: "I'd like to use Clan-MS for my family",
        notifyLabel: 'Request a pilot for your clan',
      },
    },
  },
  footer: {
    eyebrow: 'Connect',
    titleLead: 'Join the',
    titleGlow: 'sync.',
    body: 'Want early access, have an idea for an app, or just want to say hello? Write to us — a real person reads every message.',
    cta: 'Say hello',
    ctaSubject: 'Hello iSynchron',
    navLabel: 'Footer',
    emailLabel: 'Email us',
  },
  mockups: {
    tipvision:
      'TipVision illustration: the monthly earnings dashboard, the AI scan button, and a receipt being scanned, with the cash-tip line highlighted in amber for review.',
    'clan-ms':
      'Clan-MS illustration: a clan home screen with a lunar memorial-day card, a three-generation pedigree, a kinship card answering “Chú” (father’s younger brother) with the reason, and an official clan notice. The app itself is in Vietnamese.',
  },
};

/** @typedef {typeof en} Dictionary */
