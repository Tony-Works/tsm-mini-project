import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200,
    host: true,
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    react(),
    viteTsConfigPaths({
      root: './',
    }),
  ],
});
