import { serverEnv } from '@config/environment';
import { uploadConfig } from '@config/upload';
import { errorHandler } from '@shared/middlewares/ErrorHandler';
import '@shared/typeorm';
import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { apiRoutes } from './routes';

const { port } = serverEnv;

const app = express();

app.use(cors())
	.use('/uploads', express.static(uploadConfig.directory))
	.use(express.json())
	.use('/api', apiRoutes)
	.use((req: Request, res: Response) => {
		const url = req.url;

		return res.status(404).json({
			code: 404,
			message: `The ${url} not found!`
		});
	})
	.use(errorHandler)
	.listen(port, () => {
		console.log(`🔼 Server running on port ${port}`);
	});
