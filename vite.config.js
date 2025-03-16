import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base:'/projectMovie/',
  build: {
    outDir: 'build'  // Build çıktıları "build" klasörüne konulacak
  }
});