import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{

      '/user':"https://paytm-wallet-w3ys.vercel.app",

    }
  },
  plugins: [react()],
})
