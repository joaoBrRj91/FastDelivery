import Router from 'express';
import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';


const routes = new Router();

routes.post('/v1/session',SessionController.store);

routes.use(authMiddleware);

routes.get('/v1/recipients',RecipientController.all);
routes.post('/v1/recipients',RecipientController.store);
routes.put('/v1/recipients/:id',RecipientController.update);


export default routes;