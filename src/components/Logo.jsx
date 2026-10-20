import { useId } from 'react';

/**
 * The brand "i": a stem drawn to the same weight and x-height as Inter SemiBold, so it sits
 * in the word like a normal letter, and a slightly enlarged neon dot as the one accent.
 * Drawn in em units (100 = 1em) on the text baseline; the stem takes the text colour.
 */
export function LogoI({ className = '' }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 22 100"
      aria-hidden="true"
      className={`inline-block h-[1em] w-[0.22em] overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-dot`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5CFFB4" />
          <stop offset="1" stopColor="#18C98A" />
        </linearGradient>
      </defs>
      <circle cx="11" cy="30" r="7.6" fill={`url(#${id}-dot)`} />
      <rect x="5.6" y="45.4" width="10.8" height="54.6" rx="0.8" fill="currentColor" />
    </svg>
  );
}

/** Wordmark: the brand "i" followed by "Synchron". */
export default function Logo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-baseline text-[1.4rem] font-semibold tracking-[-0.035em] text-white ${className}`}
    >
      <LogoI />
      <span>Synchron</span>
    </span>
  );
}
