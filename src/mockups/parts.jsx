import { motion } from 'framer-motion';

// Shared pieces for the hand-drawn app mockups. All coordinates are SVG user units.

export const PHONE = { x: 150, y: 18, width: 272, height: 544 };
export const SCREEN = { x: 158, y: 26, width: 256, height: 528 };

/** Text with the defaults every mockup label shares. */
export function T({
  x,
  y,
  size = 8,
  weight = 500,
  fill = '#131B2E',
  anchor,
  ls,
  italic,
  children,
  ...rest
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
      letterSpacing={ls}
      fontStyle={italic ? 'italic' : undefined}
      {...rest}
    >
      {children}
    </text>
  );
}

/** Phone body + screen clip; children are drawn in screen coordinates (0..256 × 0..528). */
export function Phone({ id, background, statusDark = true, children }) {
  const ink = statusDark ? '#131B2E' : '#FFFFFF';
  return (
    <g>
      <rect
        x={PHONE.x - 2}
        y={PHONE.y - 2}
        width={PHONE.width + 4}
        height={PHONE.height + 4}
        rx="47"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
      />
      <rect
        x={PHONE.x}
        y={PHONE.y}
        width={PHONE.width}
        height={PHONE.height}
        rx="45"
        fill="#0C0C0F"
      />
      <clipPath id={`${id}-screen`}>
        <rect width={SCREEN.width} height={SCREEN.height} rx="37" />
      </clipPath>
      <g transform={`translate(${SCREEN.x} ${SCREEN.y})`}>
        <g clipPath={`url(#${id}-screen)`}>
          <rect width={SCREEN.width} height={SCREEN.height} fill={background} />
          {children}
          {/* Status bar and Dynamic Island sit on top of whatever the screen draws. */}
          <T x={26} y={23} size={10} weight={700} fill={ink}>
            9:41
          </T>
          <rect x="96" y="10" width="64" height="19" rx="9.5" fill="#000" />
          {[3, 5, 7, 9].map((h, i) => (
            <rect key={h} x={200 + i * 3.4} y={23 - h} width="2.2" height={h} rx="0.6" fill={ink} />
          ))}
          <rect
            x="216"
            y="14.5"
            width="18"
            height="9"
            rx="2.6"
            fill="none"
            stroke={ink}
            strokeWidth="1"
          />
          <rect x="217.8" y="16.3" width="12.5" height="5.4" rx="1.4" fill={ink} />
          <rect x="88" y="517" width="80" height="4" rx="2" fill={ink} opacity="0.85" />
        </g>
      </g>
    </g>
  );
}

/** Gentle vertical bob for floating cards. Wrap a positioned <g>, never put it on one. */
export function Float({ delay = 0, distance = 6, duration = 5, children }) {
  return (
    <motion.g
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.g>
  );
}

/** Soft shadow for cards that float over the dark page. */
export function ShadowFilter({ id }) {
  return (
    <filter id={id} x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.45" />
    </filter>
  );
}
