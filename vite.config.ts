import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // This allows using process.env.API_KEY in the client code
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    base: '/', // Standard base path for Vercel/Netlify deployments
  }
})