import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

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
          target: env.VITE_GOOGLE_REVIEWS_URL,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }, 
      },
    },
    plugins: [react()],
  };
})