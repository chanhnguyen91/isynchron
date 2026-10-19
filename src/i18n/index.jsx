import { createContext, useContext } from 'react';

import { en } from './en.js';
import { vi } from './vi.js';

// Each language is its own static page — / (English, default) and /vi/ — so both can be
// shared, indexed and opened without JavaScript deciding anything. index.html and
// vi/index.html set <html lang>, which picks the dictionary at startup.
export const languages = [
  { code: 'en', short: 'EN', name: 'English', path: '', dictionary: en },
  { code: 'vi', short: 'VI', name: 'Tiếng Việt', path: 'vi/', dictionary: vi },
];

export function languageFromDocument() {
  const lang = document.documentElement.lang;
  return languages.find((item) => item.code === lang) ?? languages[0];
}

/** URL of a language's page, keeping the visitor on the same section. */
export function hrefFor(language, sectionId) {
  return `${import.meta.env.BASE_URL}${language.path}${sectionId ? `#${sectionId}` : ''}`;
}

const LanguageContext = createContext(languages[0]);

export function LanguageProvider({ language, children }) {
  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** The current language's dictionary. */
export function useT() {
  return useContext(LanguageContext).dictionary;
}
