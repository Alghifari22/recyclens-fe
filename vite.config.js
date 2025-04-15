import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://capstone-be-production-3f8e.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/model': {
        target: 'https://web-production-c8bf2.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/model/, '')
      }
    }
  }
})
