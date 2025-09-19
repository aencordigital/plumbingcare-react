import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; connect-src 'self' https://hvznupnztxjddwazeovl.supabase.co http://localhost:5173 ws://localhost:5173 wss://localhost:5173; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; worker-src 'self' blob:;"
    },
  },
  preview: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; connect-src 'self' https://hvznupnztxjddwazeovl.supabase.co; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; worker-src 'self' blob:;"
    },
  },
});