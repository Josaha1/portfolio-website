import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensure this matches your deployment URL if nested, otherwise use '/'
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
