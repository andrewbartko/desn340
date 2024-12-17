import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or the plugin for your framework

export default defineConfig({
  base: '/designfinal/', // <-- Use your repo name here
  plugins: [react()]
})