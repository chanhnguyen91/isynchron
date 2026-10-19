import { motion } from 'framer-motion';

import { Float, Phone, ShadowFilter, T } from './parts.jsx';

// Redrawn from tip-vision: the Home dashboard (docs/design/screens/2-home), the scan review
// with its amber "verify this" field (3-shift-entry-review) and the weekly report.
// Colours are the app's own tokens (apps/mobile/src/theme/tokens.ts).
const C = {
  mint: '#00D06C',
  mintText: '#006D36',
  mintSoft: '#C9F8DD',
  onMint: '#052E16',
  blue: '#2563EB',
  blueText: '#0051D5',
  ink: '#131B2E',
  muted: '#3C4A3E',
  line: '#E5E7EB',
  low: '#F2F3FF',
  navy: '#283044',
  amber: '#CA8A04',
};

const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

function Dashboard() {
  return (
    <g>
      {/* Header */}
      <rect x="14" y="40" width="32" height="32" rx="11" fill={C.mint} />
      <rect x="21" y="50" width="18" height="12" rx="2.5" fill="none" stroke={C.onMint} strokeWidth="1.6" />
      <circle cx="30" cy="56" r="2.6" fill="none" stroke={C.onMint} strokeWidth="1.5" />
      <T x={54} y={55} size={13} weight={800} ls={-0.3}>
        Dashboard
      </T>
      <rect x="127" y="45" width="27" height="13" rx="6.5" fill={C.mintSoft} />
      <T x={140.5} y={54.2} size={6.8} weight={800} fill={C.mintText} anchor="middle">
        LIVE
      </T>
      <circle cx="57" cy="65.5" r="2.4" fill={C.mint} />
      <T x={63} y={68} size={7.4} weight={600} fill={C.muted}>
        Shift Active · Salon #4
      </T>
      <circle cx="228" cy="56" r="14" fill={C.mintText} />
      <circle cx="228" cy="52.5" r="3.6" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M221.5 63c1.2-3 3.7-4.6 6.5-4.6s5.3 1.6 6.5 4.6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />

      {/* Greeting */}
      <T x={14} y={99} size={17} weight={800} ls={-0.5}>
        Hi Linh!
      </T>
      <rect x="86" y="87.5" width="28" height="14" rx="7" fill={C.mint} />
      <T x={100} y={97.2} size={7} weight={800} fill={C.onMint} anchor="middle">
        PRO
      </T>
      <circle cx="228" cy="94" r="12" fill="#EAEDFF" />
      <path d="M223.5 97v-3.5a4.5 4.5 0 0 1 9 0V97l1 1.5h-11l1-1.5z" fill="none" stroke={C.ink} strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="235" cy="87" r="3" fill={C.mint} stroke="#fff" strokeWidth="1.2" />

      {/* Earnings card */}
      <rect x="12" y="110" width="232" height="152" rx="18" fill="url(#tv-card)" stroke={C.line} />
      <circle cx="27" cy="128" r="2.6" fill="#6EE7A8" />
      <T x={34} y={130.5} size={6.6} weight={700} fill={C.muted} ls={0.6}>
        TOTAL EARNINGS (OCTOBER)
      </T>
      <T x={23} y={163} size={27} weight={800} ls={-1} className="tabular-nums">
        $4,850.25
      </T>
      <rect x="168" y="149" width="42" height="16" rx="8" fill={C.mintSoft} />
      <T x={189} y={159.8} size={7.4} weight={800} fill={C.mintText} anchor="middle">
        +18.4%
      </T>
      <T x={24} y={179} size={7} weight={500} fill={C.muted}>
        18 shifts completed · Avg. $269.45/shift
      </T>
      <rect x="24" y="187" width="208" height="5" rx="2.5" fill={C.mint} />
      <rect x="24" y="187" width="112" height="5" rx="2.5" fill={C.blue} />

      <rect x="24" y="200" width="100" height="52" rx="11" fill="#F7F8FF" stroke="#EEF0FA" />
      <circle cx="33" cy="211" r="2.4" fill={C.blue} />
      <T x={39} y={213.5} size={6.8} weight={600} fill={C.muted}>
        Base Wages
      </T>
      <T x={31} y={231} size={12.5} weight={800} ls={-0.3}>
        $2,640.00
      </T>
      <T x={31} y={244} size={6.3} weight={500} fill={C.muted}>
        112.5 logged hrs
      </T>

      <rect x="132" y="200" width="100" height="52" rx="11" fill="#F7F8FF" stroke="#EEF0FA" />
      <circle cx="141" cy="211" r="2.4" fill={C.mint} />
      <T x={147} y={213.5} size={6.8} weight={600} fill={C.muted}>
        Tips
      </T>
      <T x={224} y={213.5} size={6.3} weight={700} fill={C.mintText} anchor="end">
        +18%
      </T>
      <T x={139} y={231} size={12.5} weight={800} fill={C.mintText} ls={-0.3}>
        $2,210.25
      </T>
      <T x={139} y={244} size={6.3} weight={500} fill={C.muted}>
        Card $1.7k · Cash $510
      </T>

      {/* Fast Shift Capture */}
      <T x={14} y={283} size={10} weight={800} ls={-0.2}>
        Fast Shift Capture
      </T>
      <path d="M176 277.5l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z" fill={C.mintText} />
      <T x={242} y={283} size={6.6} weight={700} fill={C.mintText} anchor="end">
        Smart Parser Active
      </T>

      <rect x="12" y="292" width="74" height="66" rx="13" fill={C.mint} />
      <circle cx="49" cy="311" r="10" fill="rgba(5,46,22,0.12)" />
      <rect x="43" y="306.5" width="12" height="9" rx="2" fill="none" stroke={C.onMint} strokeWidth="1.4" />
      <circle cx="49" cy="311" r="2.3" fill="none" stroke={C.onMint} strokeWidth="1.3" />
      <T x={49} y={335} size={9} weight={800} fill={C.onMint} anchor="middle">
        AI Scan
      </T>
      <T x={49} y={346} size={6.3} weight={600} fill="#005227" anchor="middle">
        POS Slip
      </T>

      <rect x="91" y="292" width="74" height="66" rx="13" fill="#fff" stroke={C.line} />
      <circle cx="128" cy="311" r="10" fill="#E6ECFF" />
      <path d="M123 307h8M123 310.5h6M123 314h3.5" stroke={C.blue} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M129 316.5l4.5-4.5 1.5 1.5-4.5 4.5h-1.5z" fill={C.blue} />
      <T x={128} y={335} size={9} weight={800} anchor="middle">
        Type In
      </T>
      <T x={128} y={346} size={6.3} weight={600} fill={C.muted} anchor="middle">
        Manual 30s
      </T>

      <rect x="170" y="292" width="74" height="66" rx="13" fill={C.navy} />
      <circle cx="207" cy="311" r="10" fill="rgba(255,255,255,0.1)" />
      <circle cx="207" cy="312" r="5" fill="none" stroke="#32E27C" strokeWidth="1.4" />
      <path d="M207 309.5v2.7l1.6 1M205.5 305.5h3" stroke="#32E27C" strokeWidth="1.4" strokeLinecap="round" />
      <T x={207} y={335} size={9} weight={800} fill="#fff" anchor="middle">
        Clock-In
      </T>
      <T x={207} y={346} size={6.3} weight={600} fill="#B4C5FF" anchor="middle">
        Quick Punch
      </T>

      {/* Upcoming shift */}
      <rect x="12" y="370" width="232" height="84" rx="16" fill="#fff" stroke={C.line} />
      <circle cx="34" cy="392" r="11" fill="#EAEDFF" />
      <rect x="29" y="388" width="10" height="9" rx="1.8" fill="none" stroke={C.blueText} strokeWidth="1.3" />
      <path d="M29 391h10M31.5 386.5v2.5M36.5 386.5v2.5" stroke={C.blueText} strokeWidth="1.3" strokeLinecap="round" />
      <T x={52} y={389} size={6.6} weight={800} fill={C.blueText} ls={0.6}>
        UPCOMING SHIFT
      </T>
      <T x={52} y={401} size={10} weight={700}>
        Tomorrow · Oct 24
      </T>
      <rect x="181" y="383" width="53" height="15" rx="7.5" fill="#DBE1FF" />
      <T x={207.5} y={393.2} size={6.4} weight={700} fill="#00174B" anchor="middle">
        9h Scheduled
      </T>
      <rect x="22" y="412" width="212" height="32" rx="10" fill={C.low} />
      <circle cx="36" cy="428" r="5" fill="none" stroke={C.muted} strokeWidth="1.2" />
      <path d="M36 425.5v2.7l1.6 1" stroke={C.muted} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <T x={46} y={431} size={8.4} weight={600}>
        09:00 AM – 06:00 PM
      </T>
      <T x={226} y={431} size={7} weight={600} fill={C.muted} anchor="end">
        Station #4
      </T>

      {/* Tab bar */}
      <rect x="0" y="466" width="256" height="62" fill="#fff" />
      <line x1="0" y1="466.5" x2="256" y2="466.5" stroke="#EEF0F5" />
      <g fill={C.mintText}>
        <rect x="23" y="477" width="6" height="7" rx="1.2" />
        <rect x="31" y="477" width="6" height="4.5" rx="1.2" />
        <rect x="23" y="486" width="6" height="4.5" rx="1.2" />
        <rect x="31" y="483.5" width="6" height="7" rx="1.2" />
      </g>
      <T x={30} y={503} size={6.6} weight={700} fill={C.mintText} anchor="middle">
        Home
      </T>
      <rect x="72" y="478" width="13" height="12" rx="2.4" fill="none" stroke={C.muted} strokeWidth="1.3" />
      <path d="M72 482h13M75.5 476.5v3M81.5 476.5v3" stroke={C.muted} strokeWidth="1.3" strokeLinecap="round" />
      <T x={78.5} y={503} size={6.6} weight={600} fill={C.muted} anchor="middle">
        Roster
      </T>
      <circle cx="128" cy="483" r="17" fill={C.mint} filter="url(#tv-glow)" />
      <path
        d="M120.5 479v-2a2 2 0 0 1 2-2h2M131.5 475h2a2 2 0 0 1 2 2v2M135.5 487v2a2 2 0 0 1-2 2h-2M124.5 491h-2a2 2 0 0 1-2-2v-2M120.5 483h15"
        fill="none"
        stroke={C.onMint}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M173 490v-5M178 490v-11M183 490v-8" stroke={C.muted} strokeWidth="2.4" strokeLinecap="round" />
      <T x={178} y={503} size={6.6} weight={600} fill={C.muted} anchor="middle">
        Reports
      </T>
      <circle cx="226" cy="483.5" r="7" fill="none" stroke={C.muted} strokeWidth="1.3" />
      <circle cx="226" cy="481.5" r="2.3" fill="none" stroke={C.muted} strokeWidth="1.2" />
      <path d="M221.8 488.6c1-1.7 2.5-2.6 4.2-2.6s3.2.9 4.2 2.6" fill="none" stroke={C.muted} strokeWidth="1.2" />
      <T x={226} y={503} size={6.6} weight={600} fill={C.muted} anchor="middle">
        Profile
      </T>
    </g>
  );
}

/** Zig-zag bottom edge like a torn thermal slip. */
function receiptPath(width, height, tooth = 7.5) {
  let d = `M0 6Q0 0 6 0H${width - 6}Q${width} 0 ${width} 6V${height}`;
  for (let x = width; x > 0; x -= tooth) {
    d += `L${x - tooth / 2} ${height + 6}L${x - tooth} ${height}`;
  }
  return `${d}Z`;
}

function Receipt() {
  const rows = [
    ['Gel manicure', '45.00'],
    ['Pedicure deluxe', '65.00'],
    ['Nail art x2', '30.00'],
  ];
  return (
    <g fontFamily={MONO}>
      <path d={receiptPath(150, 204)} fill="#FCFCF8" filter="url(#tv-shadow)" />
      <T x={75} y={24} size={8.2} weight={800} fill="#1A1A1A" anchor="middle" ls={0.4} fontFamily={MONO}>
        GLOSS &amp; GLAM STUDIO
      </T>
      <T x={75} y={36} size={5.8} weight={500} fill="#777" anchor="middle" fontFamily={MONO}>
        Station #2 · 10/23 · 19:02
      </T>
      <line x1="12" y1="46" x2="138" y2="46" stroke="#BDBDB6" strokeDasharray="3 2" />
      {rows.map(([label, amount], i) => (
        <g key={label}>
          <T x={12} y={60 + i * 14} size={6.8} weight={500} fill="#333" fontFamily={MONO}>
            {label}
          </T>
          <T x={138} y={60 + i * 14} size={6.8} weight={500} fill="#333" anchor="end" fontFamily={MONO}>
            {amount}
          </T>
        </g>
      ))}
      <line x1="12" y1="98" x2="138" y2="98" stroke="#BDBDB6" strokeDasharray="3 2" />
      <T x={12} y={112} size={6.8} weight={700} fill="#222" fontFamily={MONO}>
        SUBTOTAL
      </T>
      <T x={138} y={112} size={6.8} weight={700} fill="#222" anchor="end" fontFamily={MONO}>
        140.00
      </T>
      {/* Parsed with confidence: green. Unsure (crease over the line): amber, as in the app. */}
      <rect x="7" y="119" width="136" height="13" rx="3" fill="rgba(0,208,108,0.14)" stroke={C.mint} strokeWidth="0.8" />
      <T x={12} y={128.5} size={6.8} weight={700} fill="#14532D" fontFamily={MONO}>
        CARD TIP
      </T>
      <T x={138} y={128.5} size={6.8} weight={700} fill="#14532D" anchor="end" fontFamily={MONO}>
        25.00
      </T>
      <rect x="7" y="135" width="136" height="13" rx="3" fill="rgba(234,179,8,0.16)" stroke={C.amber} strokeWidth="0.8" />
      <T x={12} y={144.5} size={6.8} weight={700} fill="#713F12" fontFamily={MONO}>
        CASH TIP
      </T>
      <T x={138} y={144.5} size={6.8} weight={700} fill="#713F12" anchor="end" fontFamily={MONO}>
        20.00
      </T>
      <line x1="12" y1="156" x2="138" y2="156" stroke="#BDBDB6" strokeDasharray="3 2" />
      <T x={12} y={171} size={8.2} weight={800} fill="#111" fontFamily={MONO}>
        TOTAL
      </T>
      <T x={138} y={171} size={8.2} weight={800} fill="#111" anchor="end" fontFamily={MONO}>
        185.00
      </T>
      <g fill="#2A2A2A">
        {[2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2].map((w, i, all) => {
          const x = 30 + all.slice(0, i).reduce((sum, v) => sum + v + 1.6, 0);
          return <rect key={i} x={x} y="181" width={w} height="14" />;
        })}
      </g>
      {/* Scanner beam sweeping the slip. */}
      <motion.g
        animate={{ y: [0, 176, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="-4" y="0" width="158" height="26" fill="url(#tv-beam)" />
        <rect x="-4" y="25" width="158" height="1.6" rx="0.8" fill={C.mint} filter="url(#tv-glow)" />
      </motion.g>
    </g>
  );
}

function WeekCard() {
  const bars = [18, 26, 14, 30, 40, 34, 22];
  return (
    <g filter="url(#tv-shadow)">
      <rect width="136" height="106" rx="16" fill="#fff" />
      <T x={14} y={22} size={7.2} weight={600} fill={C.muted}>
        This week
      </T>
      <rect x="92" y="13" width="32" height="13" rx="6.5" fill={C.mintSoft} />
      <T x={108} y={22} size={6.4} weight={800} fill={C.mintText} anchor="middle">
        +12%
      </T>
      <T x={14} y={43} size={15} weight={800} ls={-0.5}>
        $1,284.50
      </T>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={16 + i * 16}
          y={88 - h}
          width="10"
          height={h}
          rx="3"
          fill={i === 4 ? C.mint : '#BDF5D6'}
        />
      ))}
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
        <T key={i} x={21 + i * 16} y={98} size={5.8} weight={600} fill="#6C7B6C" anchor="middle">
          {d}
        </T>
      ))}
    </g>
  );
}

export default function TipVisionMockup({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 580"
      role="img"
      aria-labelledby="tv-title"
      className={className}
      style={{ fontFamily: "'Inter Variable', Inter, sans-serif" }}
    >
      <title id="tv-title">
        Minh họa TipVision: bảng thu nhập tháng, nút quét hóa đơn bằng AI và một hóa đơn đang được
        quét, ô tip tiền mặt tô vàng để kiểm tra lại.
      </title>
      <defs>
        <linearGradient id="tv-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EEFFF5" />
        </linearGradient>
        <linearGradient id="tv-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00D06C" stopOpacity="0" />
          <stop offset="1" stopColor="#00D06C" stopOpacity="0.32" />
        </linearGradient>
        <filter id="tv-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <ShadowFilter id="tv-shadow" />
      </defs>

      <Float duration={7} distance={5}>
        <Phone id="tv" background="#FAF8FF">
          <Dashboard />
        </Phone>
      </Float>

      <g transform="translate(14 242) rotate(-7)">
        <Float delay={0.6} duration={6}>
          <Receipt />
        </Float>
      </g>

      <g transform="translate(26 196)">
        <Float delay={0.3} duration={6}>
          <g filter="url(#tv-shadow)">
            <rect width="132" height="26" rx="13" fill={C.mint} />
            <circle cx="14" cy="13" r="6.5" fill={C.onMint} />
            <path d="M11 13.2l2 2 3.8-4" fill="none" stroke={C.mint} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <T x={26} y={16} size={7.8} weight={800} fill={C.onMint}>
              AI Parsed · 3 fields found
            </T>
          </g>
        </Float>
      </g>

      <g transform="translate(372 66)">
        <Float delay={1.1} duration={6.5}>
          <WeekCard />
        </Float>
      </g>

      <g transform="translate(386 430)">
        <Float delay={0.9} duration={5.5}>
          <g filter="url(#tv-shadow)">
            <rect width="122" height="50" rx="15" fill={C.ink} stroke="rgba(255,255,255,0.08)" />
            <T x={14} y={19} size={6.4} weight={700} fill="#B4C5FF" ls={0.6}>
              EFFECTIVE / HR
            </T>
            <T x={14} y={38} size={15} weight={800} fill="#32E27C" ls={-0.4}>
              $43.33/hr
            </T>
          </g>
        </Float>
      </g>
    </svg>
  );
}
