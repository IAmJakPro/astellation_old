import 'reflect-metadata';
import container from './utils/container';
import App from './config/app';
import TYPES from './constants/types';

require('dotenv').config();

const app = container.get<App>(TYPES.App);

const server = app.start();

const PORT = process.env.PORT || 3000;

app.connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Application running on Express.js on port ${PORT}`);
  });
});

exports = module.exports = app;
