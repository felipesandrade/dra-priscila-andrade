import * as express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: import.meta.env.VITE_GOOGLE_MAPS_REVIEWS_URL,
    changeOrigin: true,
  }),
);