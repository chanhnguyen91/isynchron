import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages: '/' works for a custom domain (public/CNAME). For a project page
// without one (username.github.io/isynchron/) build with VITE_BASE=/isynchron/.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
});
