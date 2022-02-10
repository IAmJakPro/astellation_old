import { Container } from 'inversify';
import TYPES from './../constants/types';
import MongoDbConnect from './../config/db';
import App from '../config/app';

// load everything needed to the Container
let container = new Container();

container.bind<App>(TYPES.App).to(App).inSingletonScope();
container.bind<MongoDbConnect>(TYPES.MongoDbConnect).to(MongoDbConnect).inSingletonScope();

export default container;
