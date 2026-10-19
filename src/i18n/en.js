// English is the default language (served at /). vi.js must have exactly the same keys.

export const en = {
  skip: 'Skip to main content',
  header: {
    navLabel: 'Main navigation',
    home: 'iSynchron, back to top',
    cta: 'Explore the Apps',
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
    eyebrow: 'A creative workspace · Ideas × Internet × AI',
    headline: [
      { text: 'Synchronizing' },
      { text: 'AI', glow: true },
      { text: '&', breakBefore: true },
      { text: 'Human', glow: true },
      { text: 'Potential.', glow: true },
    ],
    sub: 'Where breakthrough ideas meet the power of the internet and artificial intelligence to create real value, every day.',
    primary: 'Explore the Apps',
    secondary: 'Read Our Vision',
    building: 'Now building:',
    scroll: 'Scroll',
    scrollLabel: 'Scroll down to Philosophy',
  },
  philosophy: {
    eyebrow: 'Philosophy',
    title: 'Technology only matters when it touches an ordinary day.',
    intro:
      'Three principles shape everything we build, from the first line of code to the last button.',
    values: [
      {
        title: 'AI for Everyone',
        lead: 'Demystifying and democratizing technology.',
        body: "AI shouldn't be reserved for engineers. We hide the complexity behind a single tap: snap a receipt, and the machine takes care of the rest.",
        example: 'TipVision reads POS receipts for you',
      },
      {
        title: 'Real Value',
        lead: 'Solving practical, everyday problems.',
        body: "Tallying tips after a shift, remembering a grandparent's memorial day, knowing what to call a distant relative. Small things everyone runs into, that no one has made truly simple.",
        example: 'Clan-MS reminds the family a week ahead',
      },
      {
        title: 'Constant Evolution',
        lead: 'Always in sync with the future.',
        body: "Ship small, listen, improve every week. When a better AI model arrives, the product moves with it, and people don't have to change their habits.",
        example: 'Switching AI models takes one line of config',
      },
    ],
  },
  vision: {
    eyebrow: 'Vision',
    quote: {
      before: "The future of AI isn't in a lab. It's in ",
      glow: 'the pocket of a nail tech at the end of a shift',
      after: ", in every family's book of ancestors, in your ordinary day.",
    },
    missionLabel: 'Mission',
    mission:
      "iSynchron is a creative workspace dedicated to synchronizing ideas, the digital internet revolution and artificial intelligence, to bring genuine, tangible value to people's everyday lives.",
    stepsTitle: 'How we sync',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Listen to everyday life',
        body: 'Every product starts from a real annoyance: tallying tips after a shift, forgetting a memorial day, not knowing what to call a relative.',
      },
      {
        title: 'Sync AI, keep people in control',
        body: "AI does the heavy lifting; people always have the final say. Wherever there's an AI button, there's a manual one right beside it.",
      },
      {
        title: 'Ship and evolve',
        body: 'Launch small, measure honestly, and improve every week alongside our very first users.',
      },
    ],
    facts: [
      'apps in active development',
      'languages in TipVision',
      'countries in TipVision’s first launch',
      'genealogy levels: Clan → Branch → Sub-branch → Household → Person',
    ],
  },
  products: {
    eyebrow: 'Products',
    titleLead: 'Two apps.',
    titleGlow: 'Perfectly in sync.',
    intro:
      'Each app solves an everyday problem with the internet and AI. The illustrations are redrawn in code from the real interfaces in development.',
    learnMore: 'Learn more',
    emailUs: 'email us',
    dialog: {
      problem: 'The problem',
      features: 'What it does',
      platforms: 'Platforms',
      stack: 'Tech stack',
      close: 'Close',
    },
    items: {
      tipvision: {
        tagline: 'Log every wage, tip and shift in seconds.',
        audience: 'For nail techs, servers, bartenders and gig workers',
        summary:
          'At the end of a shift, snap the POS receipt: AI splits out card tips, cash tips, tip-outs and hours worked. Your real earnings per hour, week and month appear instantly — no notebook, no spreadsheet.',
        status: 'Coming soon',
        highlights: [
          {
            title: 'AI OCR for receipts & rosters',
            body: 'One slip can hold several shifts; one photo of the roster fills in a whole week of work.',
          },
          {
            title: 'Real income tracking',
            body: 'Base pay, card tips and cash tips kept apart. See your effective hourly rate against the last period.',
          },
          {
            title: 'Manual entry, always one tap away',
            body: "Every AI button has a manual one beside it. Fields the AI isn't sure about are highlighted in amber for you to check.",
          },
        ],
        problem:
          'Service workers get paid from many sources: hourly wages, card tips, cash tips, a share for the front desk. By the end of the month, almost no one knows exactly what they earn per hour.',
        features: [
          'Scan POS receipts and shift slips with AI, returned as a list of shifts to pick from',
          "Scan the venue's roster: one photo, many shifts",
          'One-tap clock in and out, hours counted for you — even past midnight',
          'Weekly and monthly reports that call out your best tipping week',
          'Export to PDF and Excel for your accountant or tax return',
          '11 currencies, 7 languages, correct hours across daylight-saving changes',
        ],
        notifySubject: 'Let me know when TipVision launches',
        notifyLabel: 'Notify me at launch',
      },
      'clan-ms': {
        tagline: 'A digital genealogy for Vietnamese families — your roots, in your pocket.',
        audience: 'For Vietnamese clans, their councils, and descendants everywhere',
        summary:
          'Multi-generation family trees, a lunar memorial-day calendar, kinship-term lookup and a private clan news feed in one app. Descendants far from home still know which branch they belong to and what to call every relative.',
        status: 'Internal beta',
        highlights: [
          {
            title: 'Multi-generation pedigree',
            body: 'Clan → Branch → Sub-branch → Household → Member. A birth known only by its year is recorded exactly as the old records say.',
          },
          {
            title: 'Automatic kinship terms',
            body: 'Pick any two relatives and the app tells you whether to say chú, bác or cô — and explains why.',
          },
          {
            title: 'Lunar memorial calendar',
            body: 'Converts between lunar and solar dates and reminds the whole clan 7 days and 1 day ahead.',
          },
        ],
        problem:
          'The paper genealogy sits in the ancestral hall, only a few elders remember the memorial days, and descendants working far away lose track of who is who. With every generation, a piece of the family’s roots is lost.',
        features: [
          'Multi-generation family tree that follows tradition: first and later wives, eldest and younger children',
          'Kinship lookup between any two people, with an explanation',
          'Lunar memorial-day calendar with reminders 7 days and 1 day ahead',
          'Private clan feed: official notices, comments and event RSVPs',
          'Vetted membership; every change to the tree goes through approval and an audit log',
          'AI portrait checks: face detection, sharpness and lighting',
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
    body: 'Have an idea, want early access, or just want to talk about AI and everyday life? Our inbox is always open.',
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
