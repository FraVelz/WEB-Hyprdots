import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fravelz.github.io',
  base: '/WEB-Hyprdots/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
