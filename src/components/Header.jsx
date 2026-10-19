import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { nav } from '../data/site.js';
import { useT } from '../i18n/index.jsx';
import { Close, Menu } from './icons.jsx';
import LanguageSwitch from './LanguageSwitch.jsx';
import Logo from './Logo.jsx';

/** Which nav section is currently in the middle band of the viewport. */
function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

// The hero is watched too, so scrolling back to the top clears the highlight.
const ids = ['top', ...nav];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();
  const observed = useActiveSection(ids);
  const active = observed === 'top' ? null : observed;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <motion.nav
        aria-label={t.header.navLabel}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 transition-[background-color,border-color,box-shadow] duration-500 sm:px-5 ${
          scrolled || open
            ? 'border border-white/10 bg-ink/70 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#top" aria-label={t.header.home} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className="relative rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white aria-[current]:text-white"
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch sectionId={active} />
          <a
            href="#products"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 lg:inline-flex"
          >
            {t.header.cta}
          </a>
          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-xl text-zinc-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Close className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-ink/90 p-2 backdrop-blur-xl md:hidden"
          >
            <ul>
              {nav.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-xl px-4 text-base text-zinc-200 hover:bg-white/5"
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-white text-base font-semibold text-black"
            >
              {t.header.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
