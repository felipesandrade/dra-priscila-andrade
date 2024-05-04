import * as express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware';
import { env } from 'process';

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: env.VITE_GOOGLE_MAPS_REVIEWS_URL,
    changeOrigin: true,
  }),
);