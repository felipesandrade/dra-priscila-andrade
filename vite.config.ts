import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig (({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      proxy: {
        "/api": {
          ws: true,
          changeOrigin: true,
          secure: false,
          target: env.VITE_GOOGLE_MAPS_REVIEWS_URL,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }, 
      },
      cors: false,
    },
    plugins: [react(), vercel()],
  };
})