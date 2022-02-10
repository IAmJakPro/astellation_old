import 'reflect-metadata';
import express from 'express';
import MongoDbConnect from './config/connectDb';
import * as container from './utils/container';

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const mongo = new MongoDbConnect();

mongo
  .connect()
  .then(() => {
    console.log('MongoDB connection successfull! 🔥');
  })
  .catch((err) => {
    console.log(`Error found! Error: ${err}`);
  });

const app = express();

// start the server
app.listen(PORT, () => {
  console.log(`Application running on Express.js on port ${PORT}! 👍`);
});

exports = module.exports = app;
