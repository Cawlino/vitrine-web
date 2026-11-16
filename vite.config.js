import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'render-page-before-transition',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          // Vite generates new entry script tags when it bundles the HTML.
          return html.replace(
            /<script type="module" crossorigin src="\/assets\/([^"]+)">/g,
            '<script type="module" crossorigin blocking="render" src="/assets/$1">',
          );
        },
      },
    },
  ],
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
