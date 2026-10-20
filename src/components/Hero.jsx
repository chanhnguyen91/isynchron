import { motion, useScroll, useTransform } from 'framer-motion';
import { Fragment, useRef } from 'react';

import { products } from '../data/products.js';
import { useT } from '../i18n/index.jsx';
import { ArrowDown, ArrowRight } from './icons.jsx';
import ParticleField from './ParticleField.jsx';
import ProductLogo from './ProductLogo.jsx';

const ease = [0.22, 1, 0.36, 1];

// Each gradient word shows its own slice of one long gradient, so the colour runs
// blue → purple → green across the phrase instead of restarting on every word.
function gradientSlice(glowWords, word) {
  const index = glowWords.indexOf(word);
  return {
    backgroundSize: `${glowWords.length * 100}% 100%`,
    backgroundPosition: `${(index / Math.max(glowWords.length - 1, 1)) * 100}% 0`,
  };
}

export default function Hero() {
  const t = useT();
  // Split into words so they can rise in one after another; `glow` words carry the brand
  // gradient and `breakBefore` starts the second line on wide screens.
  const { headline } = t.hero;
  const glowWords = headline.filter((word) => word.glow);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 pb-24"
    >
      {/* Backdrop: network canvas, colour washes, grid, and a fade into the next section. */}
      <div className="absolute inset-0 -z-10">
        <ParticleField className="opacity-80" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(61_123_255/0.28),transparent)] blur-2xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_255/0.22),transparent)] blur-2xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(42_245_152/0.14),transparent)] blur-2xl" />
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 sm:text-sm"
        >
          <span className="size-1.5 animate-pulse-soft rounded-full bg-neon" aria-hidden="true" />
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="mt-7 text-[2.6rem] leading-[1.12] font-bold tracking-[-0.035em] text-balance text-white sm:text-6xl lg:text-7xl lg:leading-[1.08]">
          {headline.map((word, index) => (
            <Fragment key={`${word.text}-${index}`}>
              {word.breakBefore && <br className="hidden lg:block" />}
              <motion.span
                className={`inline-block pb-[0.06em] ${word.glow ? 'text-gradient' : ''}`}
                style={word.glow ? gradientSlice(glowWords, word) : undefined}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease, delay: 0.25 + index * 0.06 }}
              >
                {word.text}
              </motion.span>{' '}
            </Fragment>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.05 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.2 }}
          className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a
            href="#products"
            className="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-base font-semibold text-black shadow-[0_0_40px_-8px_rgb(42_245_152/0.7)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#7FB2FF] via-[#C3A6FF] to-neon" />
            <span className="relative">{t.hero.primary}</span>
            <ArrowRight className="relative size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#vision"
            className="glass inline-flex min-h-12 items-center justify-center rounded-full px-7 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            {t.hero.secondary}
          </a>
        </motion.div>

        {/* The two apps, with their real icons, as the first proof of what the studio makes. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.45 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-[11px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
            {t.hero.building}
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <li key={product.id}>
                <a
                  href={`#${product.id}`}
                  className="glass group inline-flex items-center gap-3 rounded-2xl py-2 pr-4 pl-2 transition-colors hover:bg-white/10"
                >
                  <ProductLogo id={product.id} className="size-9" />
                  <span className="text-left leading-tight">
                    <span className="block text-sm font-semibold text-white">{product.name}</span>
                    <span className="block text-xs text-zinc-400">
                      {t.products.items[product.id].status}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.a
        href="#philosophy"
        aria-label={t.hero.scrollLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300 sm:flex"
      >
        <span className="text-[11px] tracking-[0.25em] uppercase">{t.hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
