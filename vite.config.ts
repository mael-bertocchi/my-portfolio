import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://mael-bertocchi.fr',
      changefreq: {
        '/': 'monthly',
        '/legal': 'yearly',
      },
      priority: {
        '/': 1.0,
        '/legal': 0.5,
      },
    }),
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@locales': '/src/locales',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@': '/src',
    },
  },
});
