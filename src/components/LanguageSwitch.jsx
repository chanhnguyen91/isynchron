import { hrefFor, languages, useLanguage, useT } from '../i18n/index.jsx';

/**
 * EN | VI segmented switch. Each side is a plain link to that language's page, carrying the
 * section the visitor is reading so they land in the same place.
 */
export default function LanguageSwitch({ sectionId, className = '' }) {
  const current = useLanguage();
  const t = useT();
  return (
    <nav aria-label={t.header.language} className={className}>
      <ul className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5 text-xs font-semibold">
        {languages.map((language) => {
          const active = language.code === current.code;
          return (
            <li key={language.code}>
              <a
                href={hrefFor(language, sectionId)}
                hrefLang={language.code}
                lang={language.code}
                aria-current={active ? 'true' : undefined}
                title={language.name}
                className={`inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2.5 transition-colors ${
                  active ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span aria-hidden="true">{language.short}</span>
                <span className="sr-only">{language.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
