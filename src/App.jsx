import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Products from './components/Products.jsx';
import Vision from './components/Vision.jsx';
import { useT } from './i18n/index.jsx';

// AIDA: Hero (Attention) → Philosophy + Vision (Interest) → Products (Desire) → Footer (Action).
export default function App() {
  const t = useT();

  // The page is drawn by React after load, so the browser's own jump to #section (from the
  // language switch or a shared link) finds nothing. Do it once the sections exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' }),
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    // "user" turns every Framer Motion animation into an instant change for visitors who
    // asked their OS for reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skip}
      </a>
      <Header />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <Philosophy />
        <Vision />
        <Products />
      </main>
      <Footer />
    </MotionConfig>
  );
}
