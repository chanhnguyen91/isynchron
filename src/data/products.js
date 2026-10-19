// Language-neutral facts about each product (platforms, icons, colours). The words (tagline,
// features, status…) live in src/i18n/en.js and vi.js under `products.items[id]`, taken from
// what the two apps actually do today (tip-vision docs/PLAN.md, clan-ms
// docs/PROJECT_HANDBOOK.md and their mobile apps). Keep both true: if a feature is removed
// from an app, remove it in both languages.

export const products = [
  {
    id: 'tipvision',
    name: 'TipVision',
    platforms: ['iOS', 'Android'],
    icons: ['scan', 'wallet', 'hand'],
    accent: {
      from: '#00D06C',
      to: '#2563EB',
      glow: 'rgba(0, 208, 108, 0.28)',
      text: '#5CF2A5',
    },
  },
  {
    id: 'clan-ms',
    name: 'Clan-MS',
    platforms: ['iOS', 'Android', 'Web'],
    icons: ['tree', 'chat', 'moon'],
    accent: {
      from: '#C0392B',
      to: '#C59B27',
      glow: 'rgba(197, 155, 39, 0.24)',
      text: '#E3C25C',
    },
  },
];
