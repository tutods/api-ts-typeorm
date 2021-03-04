import { productRoutes } from '@modules/products/routes/products.routes';
import { sessionRoutes } from '@modules/users/routes/session.routes';
import { userRoutes } from '@modules/users/routes/users.routes';
import { Request, Response, Router } from 'express';

const apiRoutes = Router();

apiRoutes
	.get('/', (req: Request, res: Response) => {
		res.status(200).json({ status: 'API is running!' });
	})
	.use('/products', productRoutes)
	.use('/users', userRoutes)
	.use('', sessionRoutes);

export { apiRoutes };
