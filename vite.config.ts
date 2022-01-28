import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/huatec-ui/',
  plugins: [vue(),vueJsx()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 8000
  }
})
