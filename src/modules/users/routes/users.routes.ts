import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const controller = new UserController();
const userRoutes = Router();

userRoutes
	.get('/', controller.index)
	.get(
		'/:id',
		celebrate({
			[Segments.PARAMS]: {
				id: Joi.string().uuid().required().messages({
					'string.guid': 'The id of product is not a valid id!'
				})
			}
		}),
		controller.show
	)
	.post(
		'/',
		celebrate({
			[Segments.BODY]: {
				name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string().required()
			}
		}),
		controller.create
	)
	.put(
		'/:id',
		celebrate({
			[Segments.PARAMS]: {
				id: Joi.string().uuid().required()
			},
			[Segments.BODY]: {
				name: Joi.string(),
				email: Joi.string().email(),
				password: Joi.string()
			}
		}),
		controller.update
	)
	.delete(
		'/:id',
		celebrate({
			[Segments.PARAMS]: {
				id: Joi.string().uuid().required()
			}
		}),
		controller.delete
	);

export { userRoutes };
