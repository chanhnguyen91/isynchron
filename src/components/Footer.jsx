import { mailto, nav, site } from '../data/site.js';
import { ArrowRight, GitHub, LinkedIn, Mail, XTwitter } from './icons.jsx';
import Logo from './Logo.jsx';
import { Reveal } from './Reveal.jsx';

const socials = [
  { label: 'GitHub', href: site.social.github, icon: GitHub },
  { label: 'LinkedIn', href: site.social.linkedin, icon: LinkedIn },
  { label: 'X (Twitter)', href: site.social.twitter, icon: XTwitter },
  { label: 'Email liên hệ', href: `mailto:${site.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer id="connect" className="relative overflow-hidden px-4 pt-24 pb-10 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[520px] bg-[radial-gradient(60%_80%_at_50%_100%,rgb(61_123_255/0.22),rgb(139_92_255/0.10)_45%,transparent_75%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(42_245_152/0.18),transparent)] blur-2xl" />
          <p className="eyebrow relative">Kết nối</p>
          <h2 className="relative mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
            Tham gia <span className="text-gradient">sự đồng bộ.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Có một ý tưởng, muốn dùng thử sớm, hay chỉ muốn trò chuyện về AI và đời sống? Hộp thư
            của chúng tôi luôn mở.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={mailto('Xin chào iSynchron')}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 font-semibold text-black transition hover:bg-zinc-200"
            >
              Gửi lời chào
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center rounded-full px-5 text-zinc-300 transition hover:text-white"
            >
              {site.email}
            </a>
          </div>
          <ul className="relative mt-10 flex items-center justify-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="hidden text-zinc-600 sm:inline">·</span>
            <span>{site.domain}</span>
          </div>
          <nav aria-label="Chân trang">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-zinc-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p>© 2026 iSynchron Workspace.</p>
        </div>
      </div>
    </footer>
  );
}
