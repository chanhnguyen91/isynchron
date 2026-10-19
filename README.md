# iSynchron

Static landing page for [isynchron.com](https://isynchron.com) — React 19, Vite, Tailwind CSS 4
and Framer Motion. No backend: every call to action is a `mailto:` link.

## Run locally

```bash
npm ci
npm run dev        # http://localhost:5190 (English) and /vi/ (Vietnamese)
npm run build      # static files in dist/
npm run preview    # http://localhost:5191, serves dist/ to check the production build
```

Node 22 (Vite 8 needs 20.19+ or 22.12+).

## Languages

English is the default and lives at `/`; Vietnamese lives at `/vi/`. Each is its own static
page (`index.html`, `vi/index.html`) with its own title, description, social image and
`hreflang` links, so both can be shared and indexed. All visible text is in
`src/i18n/en.js` and `src/i18n/vi.js` — the two files must keep the same keys. The EN | VI
switch in the header links to the other page and keeps the section being read.

## Structure

```
src/
├── App.jsx                 page order: Hero → Philosophy → Vision → Products → Footer (AIDA)
├── index.css               Tailwind theme tokens, glass card, gradient text, grid backdrop
├── data/
│   ├── site.js             contact email, social links, section ids — edit before going live
│   └── products.js         TipVision and Clan-MS facts (platforms, icons, colours)
├── i18n/
│   ├── en.js / vi.js       every visible string, English (default) and Vietnamese
│   └── index.jsx           language list, provider, useT()
├── components/
│   ├── Header.jsx          sticky glass header, active-section pill, mobile menu
│   ├── LanguageSwitch.jsx  EN | VI links
│   ├── Hero.jsx            headline, CTAs, scroll parallax
│   ├── ParticleField.jsx   canvas network animation behind the hero
│   ├── Philosophy.jsx      three core values
│   ├── Vision.jsx          mission, three-step process, facts
│   ├── Products.jsx        product section + "Learn more" dialog state
│   ├── ProductCard.jsx     large feature card with tilting mockup
│   ├── ProductDetails.jsx  "Learn more" dialog
│   ├── Footer.jsx          "Join the sync" call to action and links
│   └── Reveal.jsx          scroll-in fade/slide wrappers
└── mockups/
    ├── TipVisionMockup.jsx SVG redrawn from tip-vision's Home, scan review and reports
    ├── ClanMsMockup.jsx    SVG redrawn from clan-ms's home, pedigree, kinship and notices
    └── parts.jsx           phone frame, floating animation, shared SVG helpers
```

## Deploy to GitHub Pages

1. The repository must be **public** (GitHub Pages on a private repository needs a paid plan).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.** The workflow in
   `.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.
3. **Settings → Pages → Custom domain:** `isynchron.com`, then **Enforce HTTPS** once the
   certificate is ready. (A workflow deployment ignores `public/CNAME`; the setting is what
   counts. The file is kept only as a record of the domain.)
4. DNS at Cloudflare (**DNS only**, grey cloud, so GitHub can issue the HTTPS certificate):

   | Type  | Name  | Content                   |
   | ----- | ----- | ------------------------- |
   | A     | `@`   | `185.199.108.153`         |
   | A     | `@`   | `185.199.109.153`         |
   | A     | `@`   | `185.199.110.153`         |
   | A     | `@`   | `185.199.111.153`         |
   | CNAME | `www` | `chanhnguyen91.github.io` |

Without a custom domain (served from `username.github.io/isynchron/`), build with
`VITE_BASE=/isynchron/` (set it as `env` on the build step in the workflow).

## Accessibility and motion

- Visitors with "reduce motion" turned on get no movement: Framer Motion runs in
  `reducedMotion="user"` mode and the hero canvas draws a single still frame.
- The hero canvas pauses when it is off screen or the tab is hidden.
- Skip link, keyboard focus rings, Escape closes the menu and the dialog.
