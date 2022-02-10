import { Container } from 'inversify';
import TYPES from './../constants/types';
import MongoDbConnect from './../config/connectDb';

// load everything needed to the Container
let container = new Container();

container.bind<MongoDbConnect>(TYPES.MongoDbConnect).to(MongoDbConnect);

export default container;
