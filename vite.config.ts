import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  root: resolve(__dirname),
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [vue()],
});
