import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // This allows using process.env.API_KEY in the client code by replacing it with the string value at build time
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    base: '/',
  }
})