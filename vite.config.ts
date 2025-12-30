import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    sitemap({
      hostname: 'https://mael-bertocchi.fr',
      changefreq: {
        '/': 'monthly',
        '/legal': 'yearly'
      },
      priority: {
        '/': 1.0,
        '/legal': 0.5
      }
    })
  ],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@locales': '/src/locales',
      '@logic': '/src/logic',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        legal: 'legal.html'
      }
    }
  }
});
