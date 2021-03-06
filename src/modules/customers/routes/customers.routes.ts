import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { CustomerController } from '../controllers/CustomerController';
import {
	customerGenericBody,
	customerIdParam,
	customerUpdateBody
} from '../validations/CustomersSchema';
import { isAuthenticated } from './../../../shared/middlewares/isAuthenticated';

const controller = new CustomerController();
const customerRoutes = Router();

customerRoutes
	.use(isAuthenticated)
	.get('/', controller.index)
	.get('/:id', joiParamsValidation(customerIdParam), controller.show)
	.post('/', joiBodyValidation(customerGenericBody), controller.create)
	.put(
		'/:id',
		joiParamsValidation(customerIdParam),
		joiBodyValidation(customerUpdateBody),
		controller.update
	)
	.delete('/:id', joiParamsValidation(customerIdParam), controller.delete);

export { customerRoutes };
