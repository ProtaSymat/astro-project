import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    react()
  ],

  output: 'static',

  // Configuration Markdown
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});