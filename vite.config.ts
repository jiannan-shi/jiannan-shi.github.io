import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({


  plugins: [react()],
  base: '/jiannan-shi.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },

  // plugins: [react()],
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
});
