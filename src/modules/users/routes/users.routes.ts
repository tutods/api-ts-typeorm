import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const controller = new UserController();
const userRoutes = Router();

userRoutes
	.get('/', isAuthenticated, controller.index)
	.get('/:id', controller.show)
	.post('/', controller.create)
	.put('/:id', controller.update)
	.delete('/:id', controller.delete);

export { userRoutes };
