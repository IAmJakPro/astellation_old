import { inject, injectable } from 'inversify';
import express, { Express } from 'express';
import MongoDbConnect from './db';
import TYPES from '../constants/types';
import morgan from 'morgan';
import helmet from 'helmet';

@injectable()
export default class App {
  private readonly _app: Express;
  private readonly _mongoDbConnect: MongoDbConnect;
  private static readonly NODE_ENV: string =
    process.env.NODE_ENV || 'development';

  constructor(@inject(TYPES.MongoDbConnect) mongoDbConnect: MongoDbConnect) {
    this._app = express();
    this._mongoDbConnect = mongoDbConnect;
  }

  start(): Express {
    /// You can add any other configs here...
    if (App.NODE_ENV === 'development') this._app.use(morgan('dev'));

    this._app.use(helmet());

    return this._app;
  }

  async connectDB(): Promise<void> {
    await this._mongoDbConnect
      .connect()
      .then(() => {
        console.log('MongoDB connection successfull! 🔥');
      })
      .catch((err) => {
        console.log(`Error found! Error: ${err}`);
      });
  }
}
