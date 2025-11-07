import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@logic': '/src/logic',
      '@styles': '/src/styles',
      '@assets': '/src/assets'
    }
  }
});
