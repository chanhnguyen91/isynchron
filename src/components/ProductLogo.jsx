import { useId } from 'react';

/** Each app's own badge: TipVision's green "paid" tile with the amber bolt, Clan-MS's seal. */
export default function ProductLogo({ id, className = 'size-12' }) {
  const uid = useId();
  if (id === 'tipvision') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={`${uid}-tv`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00D06C" />
            <stop offset="1" stopColor="#006D36" />
          </linearGradient>
        </defs>
        <rect x="2" y="4" width="40" height="40" rx="12" fill={`url(#${uid}-tv)`} />
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
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
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
