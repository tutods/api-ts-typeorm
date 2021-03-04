import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const controller = new ProductController();
const productRoutes = Router();

productRoutes
	.get('/', controller.index)
	.get('/:id', controller.show)
	.post('/', controller.create)
	.put('/:id', controller.update)
	.delete('/:id', controller.delete);

export { productRoutes };
