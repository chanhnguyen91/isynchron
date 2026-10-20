import { motion } from 'framer-motion';

import { useT } from '../i18n/index.jsx';
import { Ear, Rocket, Sync } from './icons.jsx';
import { Reveal, RevealGroup, RevealItem } from './Reveal.jsx';
import SectionDivider from './SectionDivider.jsx';

// Same order as `vision.steps` in the dictionaries.
const stepIcons = [Ear, Sync, Rocket];

export default function Vision() {
  const t = useT();
  const { quote } = t.vision;
  return (
    <section id="vision" className="relative px-4 py-24 sm:py-32">
      <SectionDivider />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(139_92_255/0.14),transparent)] blur-2xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">{t.vision.eyebrow}</p>
            <blockquote className="mt-5 text-3xl leading-[1.2] font-semibold tracking-[-0.03em] text-balance text-white sm:text-[2.75rem]">
              {quote.before}
              <span className="text-gradient">{quote.glow}</span>
              {quote.after}
            </blockquote>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col justify-end">
            <div className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-sm font-semibold text-white">{t.vision.missionLabel}</p>
              <p className="mt-3 leading-relaxed text-zinc-400">{t.vision.mission}</p>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <Reveal>
            <h3 className="text-lg font-semibold text-white">{t.vision.stepsTitle}</h3>
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
            {t.vision.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <RevealItem as="li" key={index} className="relative">
                  <div className="flex justify-center md:justify-center">
                    <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-ink-2 text-white shadow-[0_0_24px_-6px_rgb(61_123_255/0.6)]">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className="glass mt-5 rounded-3xl p-6 text-center md:min-h-44">
                    <p className="font-mono text-xs text-zinc-500">
                      {t.vision.stepLabel} {index + 1}
                    </p>
                    <h4 className="mt-2 font-semibold text-white">{step.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        {/* Who the apps are for, in their own words, instead of vanity numbers. */}
        <Reveal className="mt-20 text-center">
          <p className="eyebrow">{t.vision.audienceTitle}</p>
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {t.vision.audience.map((who) => (
              <li
                key={who}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
              >
                {who}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
