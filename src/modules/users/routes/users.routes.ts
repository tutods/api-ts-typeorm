import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { genericUserBody, userIdParams } from '../validations/UserSchemas';

const controller = new UserController();
const userRoutes = Router();

userRoutes
	.get('/', isAuthenticated, controller.index)
	.get('/:id', joiParamsValidation(userIdParams), controller.show)
	.post('/', joiBodyValidation(genericUserBody), controller.create)
	.put(
		'/:id',
		[joiParamsValidation(userIdParams), joiBodyValidation(genericUserBody)],
		controller.update
	)
	.delete('/:id', controller.delete);

export { userRoutes };
