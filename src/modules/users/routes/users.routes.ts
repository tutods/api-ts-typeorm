import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { userGenericBody, userIdParam } from '../validations/UserSchemas';

const controller = new UserController();
const userRoutes = Router();

userRoutes
	.get('/', isAuthenticated, controller.index)
	.get('/:id', joiParamsValidation(userIdParam), controller.show)
	.post('/', joiBodyValidation(userGenericBody), controller.create)
	.put(
		'/:id',
		[joiParamsValidation(userIdParam), joiBodyValidation(userGenericBody)],
		controller.update
	)
	.delete('/:id', joiParamsValidation(userIdParam), controller.delete);

export { userRoutes };
