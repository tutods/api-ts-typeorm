import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { isAuthenticated } from './../../../shared/middlewares/isAuthenticated';

const controller = new OrderController();
const orderRoutes = Router();

orderRoutes
	.get('/:id', isAuthenticated, controller.show)
	.post('/', isAuthenticated, controller.create);

export { orderRoutes };
