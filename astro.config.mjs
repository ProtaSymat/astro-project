import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    react()
  ],

  output: 'static', // ou 'hybrid' selon vos besoins

  build: {
    assets: 'assets'
  },

  content: {
    collections: {
      blog: {
        type: 'content',
        schema: {
          title: 'string',
          description: 'string',
          author: 'string',
          date: 'date',
          image: 'string',
          tags: 'array',
          featured: 'boolean',
          slug: 'string'
        }
      }
    }
  },
  
  // Configuration Markdown
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  image: {
    domains: ["images.unsplash.com", "via.placeholder.com"]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});