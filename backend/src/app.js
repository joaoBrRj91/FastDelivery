import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routesConfig();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routesConfig() {
    this.server.use(routes);
  }

}


export default new App().server;