// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ✅ Change this to your GitHub repo name
export default defineConfig({
  base: "/neurogens-frontend/", // <-- Important!
  plugins: [vue()],
})
