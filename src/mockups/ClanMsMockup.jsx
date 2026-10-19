import { motion } from 'framer-motion';

import { Float, Phone, ShadowFilter, T } from './parts.jsx';

// Redrawn from clan-ms apps/mobile: the "Gia Tộc Kỷ Niệm" palette (src/theme/tokens.ts) —
// crimson for the one primary action and ceremonial details, gold for honorifics, navy for
// links — the five icon-only tabs, the death-anniversary card, the pedigree with its
// Trưởng nam / Thứ nam labels and gold birth-order badges, the kinship answer with its
// "why", and an official notice on scroll paper. Names are samples, not a real family.
const C = {
  crimson: '#9E1B1B',
  crimsonDeep: '#7F1515',
  crimsonTint: '#FFF5F5',
  gold: '#C59B27',
  goldText: '#8A6B13',
  goldTint: '#FEF6E0',
  navy: '#1D3B64',
  navyTint: '#E1E9F4',
  navyBorder: '#BACFE8',
  text: '#1C1E21',
  muted: '#65676B',
  border: '#E4E6EB',
  paper: '#FDFBF3',
  success: '#31A24C',
};

const ease = [0.22, 1, 0.36, 1];

/** The Vietnamese key-fret border (hồi văn) used under the banner. */
function KeyFret({ y, width }) {
  const unit = 12;
  let d = '';
  for (let x = 0; x < width; x += unit) {
    d += `M${x} ${y + 6}V${y}H${x + 9}V${y + 6}H${x + 4}V${y + 3}`;
  }
  return <path d={d} fill="none" stroke={C.gold} strokeWidth="0.9" opacity="0.45" />;
}

function Seal({ cx, cy, r }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={C.crimsonDeep} stroke={C.gold} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r - 4} fill="none" stroke={C.gold} strokeWidth="0.6" opacity="0.6" />
      <path
        d={`M${cx} ${cy + 12}V${cy - 1}M${cx} ${cy + 3}l-6-6M${cx} ${cy + 1}l6-6.5M${cx} ${cy - 1}l-3-7`}
        stroke={C.gold}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {[
        [-7, -4],
        [7, -6],
        [0, -10],
        [-4, -9],
        [4, -10],
        [-9, -9],
        [9, -11],
      ].map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r="2.8" fill={C.gold} />
      ))}
      <path d={`M${cx - 8} ${cy + 12}h16`} stroke={C.gold} strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
}

/** One person on the pedigree. `you` marks the viewer; `badge` is the birth-order number. */
function Node({ x, y, w = 56, role, name, initial, tone, badge, you, delay }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {you && (
        <motion.rect
          x={x - 3}
          y={y - 3}
          width={w + 6}
          height="34"
          rx="10"
          fill="none"
          stroke={C.crimson}
          strokeWidth="1.2"
          animate={{ opacity: [0.7, 0.1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <rect
        x={x}
        y={y}
        width={w}
        height="28"
        rx="8"
        fill={you ? C.crimsonTint : C.paper}
        stroke={you ? C.crimson : C.gold}
        strokeWidth={you ? 1.3 : 0.8}
      />
      <circle cx={x + 11} cy={y + 14} r="7" fill={tone} />
      <T x={x + 11} y={y + 16.5} size={7} weight={700} fill="#fff" anchor="middle">
        {initial}
      </T>
      <T x={x + 21} y={y + 11.5} size={5.3} weight={700} fill={you ? C.crimson : C.goldText}>
        {role}
      </T>
      <T x={x + 21} y={y + 21} size={6.6} weight={700} fill={C.text}>
        {name}
      </T>
      {badge && (
        <g>
          <circle cx={x + w - 3} cy={y + 1} r="5" fill={C.gold} />
          <T x={x + w - 3} y={y + 3.2} size={6} weight={800} fill="#fff" anchor="middle">
            {badge}
          </T>
        </g>
      )}
    </motion.g>
  );
}

function Link({ d, delay = 0, color = '#CED0D4' }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease, delay }}
    />
  );
}

function GenerationTag({ y, label }) {
  return (
    <g>
      <rect x="18" y={y - 7} width="26" height="13" rx="6.5" fill={C.goldTint} />
      <T x={31} y={y + 2.2} size={5.8} weight={700} fill={C.goldText} anchor="middle">
        {label}
      </T>
    </g>
  );
}

function Home() {
  return (
    <g>
      {/* Banner */}
      <rect width="256" height="118" fill="url(#cm-banner)" />
      <KeyFret y={104} width={256} />
      <rect y="118" width="256" height="2" fill={C.gold} />
      <Seal cx={40} cy={70} r={22} />
      <T x={72} y={67} size={15} weight={700} fill="#fff" ls={-0.2}>
        Họ Nguyễn
      </T>
      <T x={72} y={81} size={8} weight={500} fill="#E3C25C" italic>
        Uống nước nhớ nguồn
      </T>
      <T x={72} y={94} size={6.8} weight={500} fill="rgba(255,255,255,0.75)">
        12 Phái · Gia phả số
      </T>
      <circle cx="228" cy="48" r="11" fill="rgba(255,255,255,0.14)" />
      <circle cx="227" cy="47" r="4" fill="none" stroke="#fff" strokeWidth="1.4" />
      <path d="M230 50l3 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />

      {/* Death anniversary card */}
      <rect x="12" y="132" width="232" height="76" rx="14" fill="#fff" stroke={C.border} />
      <rect x="22" y="142" width="46" height="56" rx="10" fill={C.crimsonTint} stroke="#F3D4D4" />
      <T x={45} y={170} size={20} weight={700} fill={C.crimson} anchor="middle">
        10
      </T>
      <T x={45} y={182} size={5.8} weight={700} fill={C.crimson} anchor="middle" ls={0.4}>
        THÁNG 3
      </T>
      <T x={45} y={191} size={5.4} weight={600} fill={C.goldText} anchor="middle">
        ÂM LỊCH
      </T>
      <T x={78} y={152} size={6.3} weight={800} fill={C.goldText} ls={0.8}>
        NGÀY GIỖ SẮP TỚI
      </T>
      <T x={78} y={166} size={9.4} weight={700} fill={C.text}>
        Giỗ Thủy tổ Nguyễn Văn Phúc
      </T>
      <T x={78} y={178} size={7} weight={500} fill={C.muted}>
        Đời 1 · Tại nhà thờ họ
      </T>
      <rect x="78" y="185" width="44" height="14" rx="7" fill={C.goldTint} />
      <T x={100} y={194.6} size={6.6} weight={700} fill={C.goldText} anchor="middle">
        Còn 7 ngày
      </T>
      <path
        d="M129.5 194.5v-3a3.2 3.2 0 0 1 6.4 0v3l.8 1.2h-8z"
        fill="none"
        stroke={C.muted}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <T x={140} y={194.6} size={6.2} weight={500} fill={C.muted}>
        Nhắc trước 7 &amp; 1 ngày
      </T>

      {/* Pedigree */}
      <T x={14} y={228} size={11} weight={700} fill={C.text}>
        Phả đồ
      </T>
      <T x={242} y={228} size={7.2} weight={600} fill={C.crimson} anchor="end">
        Xem cây đầy đủ ›
      </T>
      <rect x="12" y="236" width="232" height="176" rx="14" fill="#fff" stroke={C.border} />
      <GenerationTag y={264} label="Đời 1" />
      <GenerationTag y={320} label="Đời 2" />
      <GenerationTag y={380} label="Đời 3" />

      <Link d="M138 264h12" color={C.gold} delay={0.3} />
      <circle cx="144" cy="264" r="2.2" fill={C.gold} />
      <Link d="M144 266v26M80 292h128M80 292v14M144 292v14M208 292v14" delay={0.5} />
      <Link d="M80 334v32" delay={0.9} />
      <Link d="M144 334v32" delay={0.9} />

      <Node x={74} y={250} w={64} role="Thủy tổ khảo" name="Văn Phúc" initial="P" tone={C.navy} delay={0.1} />
      <Node x={150} y={250} w={64} role="Thủy tổ tỷ" name="Thị Hiền" initial="H" tone={C.crimson} delay={0.2} />
      <Node x={52} y={306} role="Trưởng nam" name="Văn An" initial="A" tone={C.navy} badge="1" delay={0.6} />
      <Node x={116} y={306} role="Thứ nam" name="Văn Bình" initial="B" tone={C.navy} badge="2" delay={0.7} />
      <Node x={180} y={306} role="Trưởng nữ" name="Thị Cúc" initial="C" tone={C.crimson} badge="3" delay={0.8} />
      <Node x={52} y={366} role="Bạn" name="Văn Đức" initial="Đ" tone={C.crimson} you delay={1.0} />
      <Node x={116} y={366} role="Trưởng nam" name="Văn Khang" initial="K" tone={C.navy} badge="1" delay={1.1} />

      {/* Kinship shortcut */}
      <rect x="12" y="422" width="232" height="34" rx="12" fill={C.navyTint} stroke={C.navyBorder} />
      <path d="M26 433h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-3 2.5V443h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" fill="none" stroke={C.navy} strokeWidth="1.2" strokeLinejoin="round" />
      <T x={46} y={442} size={8} weight={600} fill={C.navy}>
        Tra xưng hô với người trong họ
      </T>
      <T x={232} y={442.5} size={10} weight={600} fill={C.navy} anchor="end">
        ›
      </T>

      {/* Five icon-only tabs; the tree is selected. */}
      <rect y="466" width="256" height="62" fill="#fff" />
      <line x1="0" y1="466.5" x2="256" y2="466.5" stroke={C.border} />
      <g fill="none" stroke={C.muted} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="478" width="16" height="13" rx="2.5" />
        <path d="M21.5 482h9M21.5 485h9M21.5 488h5" />
        <rect x="119.5" y="478" width="17" height="14" rx="2.5" />
        <path d="M119.5 482.5h17M123.5 476v3.5M132.5 476v3.5" />
        <path d="M173 489v-5a6 6 0 0 1 12 0v5l1.4 2h-14.8z" />
        <path d="M177 494a2 2 0 0 0 4 0" />
        <circle cx="230" cy="484.5" r="8" />
        <circle cx="230" cy="482" r="2.6" />
        <path d="M225 490.5c1.2-2 3-3 5-3s3.8 1 5 3" />
      </g>
      <circle cx="186" cy="478" r="3" fill={C.crimson} stroke="#fff" strokeWidth="1" />
      <rect x="64" y="467" width="26" height="3" rx="1.5" fill={C.crimson} />
      <g fill="none" stroke={C.crimson} strokeWidth="1.5" strokeLinejoin="round">
        <rect x="73.5" y="476" width="7" height="5" rx="1.2" />
        <rect x="67" y="488" width="7" height="5" rx="1.2" />
        <rect x="80" y="488" width="7" height="5" rx="1.2" />
        <path d="M77 481v3.5M70.5 488v-3.5h13v3.5" />
      </g>
    </g>
  );
}

export default function ClanMsMockup({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 580"
      role="img"
      aria-labelledby="cm-title"
      className={className}
      style={{ fontFamily: "'Inter Variable', Inter, sans-serif" }}
    >
      <title id="cm-title">
        Minh họa Clan-MS: trang chủ dòng họ với thẻ ngày giỗ âm lịch, phả đồ ba đời, thẻ tra xưng
        hô trả lời “Chú” kèm lý do, và một thông báo chính thức của dòng họ.
      </title>
      <defs>
        <radialGradient id="cm-banner" cx="0.3" cy="0.4" r="0.9">
          <stop offset="0" stopColor="#B42323" />
          <stop offset="1" stopColor="#8A1717" />
        </radialGradient>
        <ShadowFilter id="cm-shadow" />
      </defs>

      <Float duration={7} distance={5}>
        <Phone id="cm" background="#F0F2F5" statusDark={false}>
          <Home />
        </Phone>
        {/* Ties the kinship card to the uncle on the pedigree; moves with the phone. */}
        <motion.path
          d="M396 178C400 300 380 318 304 330"
          fill="none"
          stroke="#E5766F"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 1.3 }}
        />
        <circle cx="304" cy="330" r="2.6" fill="#E5766F" />
      </Float>

      {/* Approval toast */}
      <g transform="translate(18 96)">
        <Float delay={0.4} duration={6}>
          <g filter="url(#cm-shadow)">
            <rect width="122" height="30" rx="15" fill="#fff" />
            <circle cx="16" cy="15" r="7" fill={C.success} />
            <path d="M12.8 15.2l2.2 2.2 4-4.4" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <T x={29} y={18} size={7.2} weight={600} fill={C.text}>
              Đơn gia nhập đã duyệt
            </T>
          </g>
        </Float>
      </g>

      {/* Kinship answer card. */}
      <g transform="translate(368 70)">
        <Float delay={1.1} duration={6.5}>
          <g filter="url(#cm-shadow)">
            <rect width="140" height="106" rx="16" fill="#fff" />
            <T x={14} y={22} size={6.6} weight={800} fill={C.crimson} ls={0.8}>
              TRA XƯNG HÔ
            </T>
            <T x={14} y={38} size={7.4} weight={500} fill={C.muted}>
              Văn Đức gọi Văn Bình là
            </T>
            <T x={14} y={67} size={24} weight={700} fill={C.crimson} ls={-0.5}>
              Chú
            </T>
            <line x1="14" y1="78" x2="126" y2="78" stroke={C.border} />
            <T x={14} y={93} size={7} weight={700} fill={C.text}>
              Vì sao?{' '}
              <tspan fontWeight={500} fill={C.muted}>
                Em trai của bố
              </tspan>
            </T>
          </g>
        </Float>
      </g>

      {/* Official notice on scroll paper. */}
      <g transform="translate(12 398) rotate(-4)">
        <Float delay={0.8} duration={6}>
          <g filter="url(#cm-shadow)">
            <rect width="158" height="128" rx="10" fill={C.paper} stroke={C.crimson} strokeWidth="1.2" />
            <rect x="5" y="5" width="148" height="118" rx="7" fill="none" stroke={C.gold} strokeWidth="0.6" />
            {[
              [5, 5],
              [153, 5],
              [5, 123],
              [153, 123],
            ].map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x - 2.5} y={y - 2.5} width="5" height="5" transform={`rotate(45 ${x} ${y})`} fill={C.gold} />
            ))}
            <T x={79} y={25} size={6} weight={800} fill={C.goldText} anchor="middle" ls={0.8}>
              THÔNG BÁO · CHO TOÀN HỌ
            </T>
            <T x={79} y={45} size={11} weight={700} fill={C.crimson} anchor="middle">
              Lễ tế Tổ mùa Xuân
            </T>
            <T x={79} y={59} size={6.8} weight={500} fill={C.muted} anchor="middle">
              Rằm tháng Giêng · Nhà thờ họ
            </T>
            <path d="M44 69h70" stroke={C.gold} strokeWidth="0.8" />
            <rect x="19" y="79" width="120" height="22" rx="11" fill={C.crimson} />
            <T x={79} y={92.8} size={7.4} weight={700} fill="#fff" anchor="middle">
              Tôi sẽ tham dự
            </T>
            <T x={79} y={115} size={6.2} weight={500} fill={C.muted} anchor="middle">
              128 người đã điểm danh
            </T>
          </g>
        </Float>
      </g>
    </svg>
  );
}
