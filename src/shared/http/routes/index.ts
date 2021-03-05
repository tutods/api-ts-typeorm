import { productRoutes } from '@modules/products/routes/products.routes';
import { passwordRoutes } from '@modules/users/routes/password.routes';
import { sessionRoutes } from '@modules/users/routes/session.routes';
import { userRoutes } from '@modules/users/routes/users.routes';
import { Request, Response, Router } from 'express';

const apiRoutes = Router();

apiRoutes
	.get('/', (req: Request, res: Response) => {
		return res.status(200).json({
			status: 'API is running 👌'
		});
	})
	.use('/', sessionRoutes)
	.use('/', passwordRoutes)
	.use('/users', userRoutes)
	.use('/products', productRoutes);

export { apiRoutes };
