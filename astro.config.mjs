import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://augustusnas.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});