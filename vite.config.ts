import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@locales': '/src/locales',
      '@logic': '/src/logic',
      '@styles': '/src/styles',
      '@assets': '/src/assets'
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
