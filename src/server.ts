import express from 'express';
import cors from 'cors';
const app = express();
const API_URL = 'http://localhost:3000';
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: API_URL,
  preflightContinue: false,
};

app.use(cors(options))
export default app;