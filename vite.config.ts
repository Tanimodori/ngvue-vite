import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  root: resolve(__dirname),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    cssTarget: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    /**
     * Minify need to be turned off for AngularJS
     * see https://esbuild.github.io/api/#minify-considerations
     */
    minify: false,
  },
  plugins: [vue()],
});
