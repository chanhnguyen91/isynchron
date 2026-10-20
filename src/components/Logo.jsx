import { motion } from 'framer-motion';
import { useId } from 'react';

/**
 * The brand "i": a gradient stem with a glowing orb for its dot, circled by a thin orbit and
 * a satellite — two things moving in sync. Drawn in em units (100 = 1em) and seated on the
 * text baseline, so it scales with the font size of whatever wraps it.
 */
export function LogoI({ className = '', animated = true }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 36 100"
      aria-hidden="true"
      className={`inline-block h-[1em] w-[0.36em] overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-stem`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8B5CFF" />
          <stop offset="1" stopColor="#3D7BFF" />
        </linearGradient>
        <radialGradient id={`${id}-orb`} cx="0.35" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#D9FFEE" />
          <stop offset="0.45" stopColor="#2AF598" />
          <stop offset="1" stopColor="#12B87A" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <rect x="11" y="45" width="14" height="55" rx="7" fill={`url(#${id}-stem)`} />
      <circle
        cx="18"
        cy="23"
        r="17"
        fill="none"
        stroke="#2AF598"
        strokeOpacity="0.35"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="18" cy="23" r="12" fill="#2AF598" opacity="0.55" filter={`url(#${id}-glow)`} />
      <circle cx="18" cy="23" r="10.5" fill={`url(#${id}-orb)`} />
      <motion.g
        style={{ transformOrigin: '18px 23px' }}
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="35" cy="23" r="3" fill="#B9A0FF" />
      </motion.g>
    </svg>
  );
}

/** Wordmark: the brand "i" followed by "Synchron" in white. */
export default function Logo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-baseline text-[1.45rem] font-semibold tracking-[-0.035em] text-white ${className}`}
    >
      <LogoI className="-mr-[0.01em]" />
      <span>Synchron</span>
    </span>
  );
}
