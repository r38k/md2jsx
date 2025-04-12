import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom', 'debug', 'extend']
  },
  plugins: [
    honox({
      client: { input: ['./app/style.css'] }
    }),
    tailwindcss(),
  ]
})
