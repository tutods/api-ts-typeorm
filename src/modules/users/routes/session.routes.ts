import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { SessionController } from '../controllers/SessionController';

const controller = new SessionController();
const sessionRoutes = Router();

sessionRoutes.post(
	'/login',
	celebrate({
		[Segments.BODY]: {
			email: Joi.string().email().required(),
			password: Joi.string().required()
		}
	}),
	controller.create
);

export { sessionRoutes };
