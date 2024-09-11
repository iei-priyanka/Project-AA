import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify your port here
    open: true, // This will open the browser when the server starts
  },
  build: {
    outDir: 'dist', // Customize the output directory
  },
  resolve: {
    alias: {
      '@': '/src', // Use alias to simplify imports
    },
  },
});
