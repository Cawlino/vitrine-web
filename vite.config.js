import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        landingPage: resolve(import.meta.dirname, 'criacao-de-landing-page/index.html'),
        sistemasWeb: resolve(import.meta.dirname, 'desenvolvimento-de-sistemas-web/index.html'),
        erp: resolve(import.meta.dirname, 'sistema-erp-sob-medida/index.html'),
      },
    },
  },
})
