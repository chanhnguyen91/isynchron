import { RevealGroup, RevealItem } from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { Loop, Sparkles, Target } from './icons.jsx';

const values = [
  {
    icon: Sparkles,
    index: '01',
    title: 'AI cho Mọi người',
    lead: 'Giải mã và bình dân hóa công nghệ.',
    body: 'AI không chỉ dành cho kỹ sư. Chúng tôi giấu sự phức tạp sau một cú chạm: chụp một tấm hóa đơn là đủ, phần còn lại để máy lo.',
    example: 'TipVision đọc hóa đơn POS thay bạn',
    tint: 'from-electric/25',
    iconTone: 'text-[#8FB4FF]',
  },
  {
    icon: Target,
    index: '02',
    title: 'Giá trị Đích thực',
    lead: 'Giải quyết các vấn đề thực tế, đời thường.',
    body: 'Tiền tip cuối ca, ngày giỗ ông bà, cách xưng hô với họ hàng ở xa. Những việc nhỏ ai cũng gặp, nhưng chưa ai làm cho thật gọn.',
    example: 'Clan-MS nhắc giỗ trước 7 ngày',
    tint: 'from-cyber/25',
    iconTone: 'text-[#B9A0FF]',
  },
  {
    icon: Loop,
    index: '03',
    title: 'Tiến hóa Không ngừng',
    lead: 'Luôn đồng bộ với tương lai.',
    body: 'Phát hành nhỏ, lắng nghe, cải tiến mỗi tuần. Khi một mô hình AI tốt hơn ra đời, sản phẩm đổi theo mà người dùng không phải đổi thói quen.',
    example: 'Đổi mô hình AI chỉ bằng một dòng cấu hình',
    tint: 'from-neon/20',
    iconTone: 'text-[#6CF5B8]',
  },
];

/** Sets the spotlight position from the pointer, relative to the card. */
function trackPointer(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`);
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Triết lý"
          title="Công nghệ chỉ có ý nghĩa khi chạm được vào một ngày bình thường."
          intro="Ba nguyên tắc định hình mọi thứ chúng tôi xây dựng, từ dòng code đầu tiên đến nút bấm cuối cùng."
        />

        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, ...value }) => (
            <RevealItem
              key={value.title}
              as="article"
              onPointerMove={trackPointer}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 sm:p-8"
            >
              <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div
                className={`pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-gradient-to-br ${value.tint} to-transparent blur-2xl`}
              />
              <div className="relative flex items-center justify-between">
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${value.iconTone}`}
                >
                  <Icon className="size-6" />
                </span>
                <span className="font-mono text-sm text-zinc-600">{value.index}</span>
              </div>
              <h3 className="relative mt-8 text-xl font-semibold tracking-tight text-white">
                {value.title}
              </h3>
              <p className="relative mt-1.5 font-medium text-zinc-300">{value.lead}</p>
              <p className="relative mt-4 leading-relaxed text-zinc-400">{value.body}</p>
              <p className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                <span className="size-1.5 rounded-full bg-neon" aria-hidden="true" />
                {value.example}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
