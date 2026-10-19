import { Reveal } from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, intro, align = 'center' }) {
  const centered = align === 'center';
  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-[-0.03em] text-balance text-white sm:text-5xl">
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed text-zinc-400 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
