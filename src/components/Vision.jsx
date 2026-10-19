import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { Ear, Rocket, Sync } from './icons.jsx';
import { Reveal, RevealGroup, RevealItem } from './Reveal.jsx';

const steps = [
  {
    icon: Ear,
    title: 'Lắng nghe đời thường',
    body: 'Mỗi sản phẩm bắt đầu từ một phiền toái có thật: đếm tip cuối ca, quên ngày giỗ, không biết gọi người họ hàng là gì.',
  },
  {
    icon: Sync,
    title: 'Đồng bộ AI, giữ quyền cho con người',
    body: 'AI làm phần nặng, con người luôn có quyền sửa. Chỗ nào có nút AI, chỗ đó có nút nhập tay.',
  },
  {
    icon: Rocket,
    title: 'Phát hành và tiến hóa',
    body: 'Ra mắt nhỏ, đo lường thật, cải tiến từng tuần cùng chính những người dùng đầu tiên.',
  },
];

// Every figure is a fact about the two apps today, not a projection.
const facts = [
  { value: 2, label: 'ứng dụng đang được xây dựng' },
  { value: 7, label: 'ngôn ngữ trong TipVision' },
  { value: 17, label: 'quốc gia TipVision hướng tới đầu tiên' },
  { value: 5, label: 'cấp gia phả: Họ → Phái → Chi → Hộ → Người' },
];

function CountUp({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, to]);

  return (
    <span ref={ref} className="text-gradient tabular-nums">
      {value}
    </span>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="relative px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(139_92_255/0.14),transparent)] blur-2xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Tầm nhìn</p>
            <blockquote className="mt-5 text-3xl leading-[1.2] font-semibold tracking-[-0.03em] text-balance text-white sm:text-[2.75rem]">
              Tương lai của AI không nằm trong phòng thí nghiệm. Nó nằm trong{' '}
              <span className="text-gradient">túi áo người thợ nail cuối ca</span>, trong cuốn gia
              phả của mỗi dòng họ, trong một ngày bình thường của bạn.
            </blockquote>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col justify-end">
            <div className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-sm font-semibold text-white">Sứ mệnh</p>
              <p className="mt-3 leading-relaxed text-zinc-400">
                iSynchron là một không gian làm việc sáng tạo dành riêng cho việc đồng bộ hóa các ý
                tưởng, cuộc cách mạng internet kỹ thuật số và Trí tuệ Nhân tạo, nhằm mang lại giá
                trị đích thực, hữu hình cho đời sống thường ngày của mọi người.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <Reveal>
            <h3 className="text-lg font-semibold text-white">Cách chúng tôi đồng bộ</h3>
          </Reveal>
          {/* The line that joins the three steps draws itself across on scroll. */}
          <motion.div
            aria-hidden="true"
            className="absolute top-[4.6rem] right-[16%] left-[16%] hidden h-px origin-left bg-gradient-to-r from-electric via-cyber to-neon md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          <RevealGroup as="ol" className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, ...step }, index) => (
              <RevealItem as="li" key={step.title} className="relative">
                <div className="flex justify-center md:justify-center">
                  <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-ink-2 text-white shadow-[0_0_24px_-6px_rgb(61_123_255/0.6)]">
                    <Icon className="size-5" />
                  </span>
                </div>
                <div className="glass mt-5 rounded-3xl p-6 text-center md:min-h-44">
                  <p className="font-mono text-xs text-zinc-500">Bước {index + 1}</p>
                  <h4 className="mt-2 font-semibold text-white">{step.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup
          as="dl"
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4"
        >
          {facts.map((fact) => (
            <RevealItem key={fact.label} className="flex flex-col gap-2 bg-ink p-6 sm:p-8">
              <dt className="order-2 text-sm leading-snug text-zinc-400">{fact.label}</dt>
              <dd className="order-1 text-4xl font-semibold tracking-tight sm:text-5xl">
                <CountUp to={fact.value} />
              </dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
