import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import SignatureController from './app/controllers/SignatureController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryAccessController from './app/controllers/DeliveryAccessController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import DeliveryProblemController2 from './app/controllers/DeliveryProblemController2';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.put('/deliveries/:id', DeliveryController.update);

routes.get('/deliveryaccess/:id', DeliveryAccessController.index);
routes.put('/deliveryaccess/:id', DeliveryAccessController.update);

routes.post('/deliveryproblems/:id', DeliveryProblemController.store);
routes.get('/deliveryproblems', DeliveryProblemController.index);
routes.get('/deliveryproblems2', DeliveryProblemController2.index);

routes.get('/notifications/:id', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.get('/deliverymans', DeliverymanController.index);

routes.post(
  '/signatures',
  upload.single('signature'),
  SignatureController.store
);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files/:id', FileController.index);

// ---------------------------------------------------------------------------
routes.use(authMiddleware);
// ---------------------------------------------------------------------------

routes.put('/users', UserController.update);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients', RecipientController.index);
routes.delete('/recipients/:id/cancel', RecipientController.delete);

routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);

routes.delete('/deliverymans/:id/cancel', DeliverymanController.delete);

routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.delete('/deliveries/:id/cancel', DeliveryController.delete);

routes.delete('/deliveryproblems/:id/cancel', DeliveryProblemController.delete);

export default routes;
