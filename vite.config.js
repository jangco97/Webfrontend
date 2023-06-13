import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: '3.34.142.52',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://13.124.204.159:8080',
        changeOrigin: true,
      },
    },
  },
});
