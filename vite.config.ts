import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig (({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      proxy: {
        "/api": {
          ws: true,
          changeOrigin: true,
          secure: false,
          fallback: true,
          target: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${env.VITE_PLACE_ID}&key=${env.VITE_GOOGLE_MAPS_API_KEY}&reviews_sort=newest&fields=reviews`, 
          rewrite: (path) => path.replace(/^\/api/, ""),
        }, 
      },
    },
    plugins: [react()],
  };
})