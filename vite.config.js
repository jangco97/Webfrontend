import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: '13.124.204.159',
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://13.124.204.159:8080',
        changeOrigin: true,
      },
    },
  },
});
