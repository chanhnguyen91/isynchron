import { useT } from '../i18n/index.jsx';
import { RevealGroup, RevealItem } from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { Loop, Sparkles, Target } from './icons.jsx';

// Look of each value card, in the same order as `philosophy.values` in the dictionaries.
const styles = [
  { icon: Sparkles, tint: 'from-electric/25', iconTone: 'text-[#8FB4FF]' },
  { icon: Target, tint: 'from-cyber/25', iconTone: 'text-[#B9A0FF]' },
  { icon: Loop, tint: 'from-neon/20', iconTone: 'text-[#6CF5B8]' },
];

/** Sets the spotlight position from the pointer, relative to the card. */
function trackPointer(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`);
}

export default function Philosophy() {
  const t = useT();
  const values = t.philosophy.values.map((value, i) => ({
    ...value,
    ...styles[i],
    index: String(i + 1).padStart(2, '0'),
  }));
  return (
    <section id="philosophy" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.philosophy.eyebrow}
          title={t.philosophy.title}
          intro={t.philosophy.intro}
        />

        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, ...value }) => (
            <RevealItem
              key={value.index}
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
