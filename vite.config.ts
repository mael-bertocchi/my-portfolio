import { defineConfig } from 'vite';

export default defineConfig({
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
