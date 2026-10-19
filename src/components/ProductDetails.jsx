import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { mailto } from '../data/site.js';
import { useT } from '../i18n/index.jsx';
import { Bell, Check, Close } from './icons.jsx';

/** "Learn more" dialog: the problem, every feature, where it runs, and a way to hear more. */
export default function ProductDetails({ product, onClose }) {
  const t = useT();
  const labels = t.products.dialog;
  const closeRef = useRef(null);

  useEffect(() => {
    if (!product) return;
    const previous = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key={product.id}
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${product.id}-dialog-title`}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0F0F12]/95 p-6 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-9"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-40 rounded-t-3xl opacity-60"
              style={{
                background: `radial-gradient(60% 100% at 20% 0%, ${product.accent.glow}, transparent)`,
              }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium" style={{ color: product.accent.text }}>
                  {product.status}
                </p>
                <h3
                  id={`${product.id}-dialog-title`}
                  className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{product.audience}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={labels.close}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <Close className="size-5" />
              </button>
            </div>

            <div className="relative mt-8">
              <h4 className="eyebrow">{labels.problem}</h4>
              <p className="mt-3 leading-relaxed text-zinc-300">{product.problem}</p>
            </div>

            <div className="relative mt-8">
              <h4 className="eyebrow">{labels.features}</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span
                      className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: product.accent.glow, color: product.accent.text }}
                    >
                      <Check className="size-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8">
              <h4 className="eyebrow">{labels.platforms}</h4>
              <p className="mt-3 text-sm text-zinc-300">{product.platforms.join(' · ')}</p>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailto(product.notifySubject)}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-black transition hover:bg-zinc-200"
              >
                <Bell className="size-5" />
                {product.notifyLabel}
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 px-6 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {labels.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
