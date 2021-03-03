import { productRoutes } from '@modules/products/routes/products.routes';
import { Request, Response, Router } from 'express';

const routes = Router();

routes
	.get('/', (req: Request, res: Response) => {
		return res.status(200).json({
			status: 'API is running 👌'
		});
	})
	.use('/products', productRoutes);

export { routes };
