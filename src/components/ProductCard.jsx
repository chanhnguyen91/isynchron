import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { mailto } from '../data/site.js';
import ClanMsMockup from '../mockups/ClanMsMockup.jsx';
import TipVisionMockup from '../mockups/TipVisionMockup.jsx';
import { ArrowRight, Bell, Chat, Hand, Moon, Scan, Tree, Wallet } from './icons.jsx';
import { Reveal } from './Reveal.jsx';

const icons = { scan: Scan, wallet: Wallet, hand: Hand, tree: Tree, chat: Chat, moon: Moon };
const mockups = { tipvision: TipVisionMockup, 'clan-ms': ClanMsMockup };

/** Each app's own badge: TipVision's green "paid" tile with the amber bolt, Clan-MS's seal. */
function ProductLogo({ id }) {
  if (id === 'tipvision') {
    return (
      <svg viewBox="0 0 48 48" className="size-12" aria-hidden="true">
        <defs>
          <linearGradient id="logo-tv" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00D06C" />
            <stop offset="1" stopColor="#006D36" />
          </linearGradient>
        </defs>
        <rect x="2" y="4" width="40" height="40" rx="12" fill="url(#logo-tv)" />
        <circle cx="22" cy="24" r="10" fill="#fff" />
        <path
          d="M25 20.2c-.6-.9-1.7-1.4-3-1.4-1.8 0-3 .9-3 2.2 0 3.1 6.3 1.6 6.3 4.9 0 1.4-1.4 2.4-3.3 2.4-1.5 0-2.8-.6-3.4-1.6M22 17v2M22 28.5v2"
          fill="none"
          stroke="#006D36"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="41" cy="7" r="6.5" fill="#EDA82E" />
        <path d="M41.8 3.5l-3 4.2h2.4l-.9 3.3 3-4.2h-2.4z" fill="#614000" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="size-12" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#9E1B1B" stroke="#C59B27" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="17" fill="none" stroke="#C59B27" strokeWidth="0.6" opacity="0.6" />
      <path
        d="M24 35V22M24 26l-6-6M24 24l6-6.5M24 22l-3-7"
        stroke="#C59B27"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {[
        [-7, -5],
        [7, -7],
        [0, -11],
        [-4, -10],
        [4, -11],
        [-9, -10],
        [9, -12],
      ].map(([dx, dy], i) => (
        <circle key={i} cx={24 + dx} cy={24 + dy} r="2.6" fill="#C59B27" />
      ))}
      <path d="M17 35h14" stroke="#C59B27" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** Tilts the mockup a few degrees toward the pointer, springing back on leave. */
function useTilt() {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 120, damping: 18 });
  return {
    style: { rotateX, rotateY, transformPerspective: 1200 },
    onPointerMove(event) {
      if (event.pointerType !== 'mouse') return;
      const rect = event.currentTarget.getBoundingClientRect();
      px.set((event.clientX - rect.left) / rect.width);
      py.set((event.clientY - rect.top) / rect.height);
    },
    onPointerLeave() {
      px.set(0.5);
      py.set(0.5);
    },
  };
}

export default function ProductCard({ product, reverse = false, onLearnMore }) {
  const Mockup = mockups[product.id];
  const tilt = useTilt();
  const { accent } = product;

  return (
    <Reveal
      as="article"
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className="glass relative grid scroll-mt-24 items-center overflow-hidden rounded-[2rem] lg:grid-cols-2"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(50% 60% at ${reverse ? '25%' : '75%'} 50%, ${accent.glow}, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent.from}, ${accent.to}, transparent)` }}
      />

      <div className={`relative order-2 p-7 pt-2 sm:p-10 sm:pt-4 lg:p-14 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={mailto(product.notifySubject)}
            title={`${product.notifyLabel} — gửi email cho chúng tôi`}
            className="group inline-flex min-h-8 items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition-colors hover:bg-white/5"
            style={{ borderColor: `${accent.text}55`, color: accent.text }}
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-60"
                style={{ background: accent.text }}
              />
              <span className="relative size-2 rounded-full" style={{ background: accent.text }} />
            </span>
            {product.status}
            <Bell className="size-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
          </a>
          {product.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
            >
              {platform}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <ProductLogo id={product.id} />
          <div>
            <h3 id={`${product.id}-title`} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {product.name}
            </h3>
            <p className="text-sm text-zinc-500">{product.audience}</p>
          </div>
        </div>

        <p className="mt-6 text-xl leading-snug font-medium text-balance text-zinc-200 sm:text-2xl">
          {product.tagline}
        </p>
        <p className="mt-4 leading-relaxed text-zinc-400">{product.summary}</p>

        <ul className="mt-8 space-y-5">
          {product.highlights.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="flex gap-4">
                <span
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10"
                  style={{ background: `${accent.glow}`, color: accent.text }}
                >
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onLearnMore(product)}
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-black transition hover:bg-zinc-200"
          >
            Tìm hiểu thêm
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href={mailto(product.notifySubject)}
            className="inline-flex min-h-12 items-center rounded-full px-4 text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            {product.notifyLabel}
          </a>
        </div>
      </div>

      <div
        className={`relative order-1 flex items-center justify-center px-2 pt-6 sm:px-8 lg:py-10 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <motion.div style={tilt.style} className="w-full max-w-[540px]">
          <Mockup className="h-auto w-full" />
        </motion.div>
      </div>
    </Reveal>
  );
}
