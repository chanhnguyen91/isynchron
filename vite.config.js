import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages: '/' works for a custom domain (public/CNAME). For a project page
// without one (username.github.io/isynchron/) build with VITE_BASE=/isynchron/.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  // One static page per language: / is English (default), /vi/ is Vietnamese.
  build: {
    rollupOptions: {
      input: {
        en: fileURLToPath(new URL('index.html', import.meta.url)),
        vi: fileURLToPath(new URL('vi/index.html', import.meta.url)),
      },
    },
  },
  // 5173 is clan-ms CMS and 5180 is TipVision admin on this machine.
  server: { port: 5190, strictPort: true },
  preview: { port: 5191, strictPort: true },
});
