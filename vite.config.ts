import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fix: Cast process to any to avoid "Property 'cwd' does not exist on type 'Process'" error
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    // This allows using process.env.API_KEY in the client code
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env': process.env
    },
    base: '/',
  }
})