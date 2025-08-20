// src/index.ts
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import pingRoutes from './routes/ping';
import rsvpRoutes from './routes/rsvp';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json()); // replaces body-parser for JSON

// Mount routes
app.use('/api', pingRoutes);
app.use('/api', rsvpRoutes);

// Create server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});