import { fileURLToPath, URL } from 'node:url'
 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
export default defineConfig({
  base: './',

  plugins: [
    vue(),
  ],
  build:{
    outDir:"dist",
    sourcemap:true,
    emptyOutDir:true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})