import express from 'express';
import cors from 'cors';
const app = express();
const API_URL = 'https://adorable-banoffee-62308c.netlify.app';
const API_LOCAL = 'http://localhost:3000';
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'POST',
  origin: "*",
  preflightContinue: false,
};

app.use(cors(options))
export default app;