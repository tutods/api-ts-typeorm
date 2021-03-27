import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { OrderController } from '../controllers/OrderController';
import { orderGenericBody, orderIdParam } from '../validations/OrderSchema';

const controller = new OrderController();
const orderRoutes = Router();

orderRoutes
	.use(isAuthenticated)
	.get('/:id', joiParamsValidation(orderIdParam), controller.show)
	.post('/', joiBodyValidation(orderGenericBody), controller.create);

export { orderRoutes };
