import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import {
	productGenericBody,
	productIdParam
} from '../validations/ProductSchema';

const controller = new ProductController();
const productRoutes = Router();

productRoutes
	.get('/', controller.index)
	.get('/:id', joiParamsValidation(productIdParam), controller.show)
	.post('/', joiBodyValidation(productGenericBody), controller.create)
	.put(
		'/:id',
		[
			joiParamsValidation(productIdParam),
			joiBodyValidation(productGenericBody)
		],
		controller.update
	)
	.delete('/:id', joiParamsValidation(productIdParam), controller.delete);

export { productRoutes };
