import '@fontsource-variable/inter';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { LanguageProvider, languageFromDocument } from './i18n/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider language={languageFromDocument()}>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
