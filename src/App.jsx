import { MotionConfig } from 'framer-motion';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Products from './components/Products.jsx';
import Vision from './components/Vision.jsx';

// AIDA: Hero (Attention) → Philosophy + Vision (Interest) → Products (Desire) → Footer (Action).
export default function App() {
  return (
    // "user" turns every Framer Motion animation into an instant change for visitors who
    // asked their OS for reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Bỏ qua, tới nội dung chính
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
