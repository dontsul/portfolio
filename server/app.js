import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import projectsRoute from './routes/Projects.js';
import technologiesRoute from './routes/Technologies.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());

// Router
app.use('/api/projects', projectsRoute);
app.use('/api/technologies', technologiesRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.upceijt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => {
      console.log(`server start on prt ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();