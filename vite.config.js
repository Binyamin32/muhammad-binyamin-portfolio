import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/muhammad-binyamin-portfolio/', // ✅ important for GitHub Pages
})
