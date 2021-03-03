import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
	return res.status(200).json({
		status: 'API is running 👌'
	});
});

export { routes };
