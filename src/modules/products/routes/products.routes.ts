import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const controller = new ProductController();
const productRoutes = Router();

productRoutes
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
				name: Joi.string().required().messages({
					'string.base': `The field name needs to bee a valid string!`,
					'string.empty': `Name field cannot be empty!`,
					'any.required': `Name is required. Please fill with product name!`
				}),
				price: Joi.number().precision(2).required().messages({
					'number.base': `The field price needs to be a valid number!`,
					'number.precision': `Price needs contains 2 decimal cases.`,
					'any.required': `Price is required. Please fill with product price!`
				}),
				quantity: Joi.number().required().messages({
					'number.base': `The field quantity needs to be a valid number`,
					'any.required': `Quantity is required. Please fill with product quantity!`
				})
			}
		}),
		controller.create
	)
	.put(
		'/:id',
		celebrate({
			[Segments.PARAMS]: {
				id: Joi.string().uuid().required().messages({
					'string.base': `The field name needs to bee a valid string!`,
					'string.empty': `Name field cannot be empty!`
				})
			},
			[Segments.BODY]: {
				name: Joi.string(),
				price: Joi.number().precision(2).messages({
					'number.base': `The field price needs to be a valid number!`,
					'number.precision': `Price needs contains 2 decimal cases.`
				}),
				quantity: Joi.number().messages({
					'number.base': `The field quantity needs to be a valid number`
				})
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

export { productRoutes };
