import { serverEnv } from '@config/environment';
import { uploadConfig } from '@config/upload';
import { errorHandler } from '@shared/middlewares/errorHandler';
import { rateLimiter } from '@shared/middlewares/rateLimiter';
import '@shared/typeorm';
import { loggingInfo } from '@utils/logging';
import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { apiRoutes } from './routes';

// Server Environment Variables
const { port, host } = serverEnv;

const app = express();

app.use(cors())

	.use(express.json())

	.use(rateLimiter) // ==> Limit requests

	.use('/uploads', express.static(uploadConfig.directory)) // ==> Static Files

	.use('/api', apiRoutes) // ==> Api Routes

	.use((req: Request, res: Response) => {
		const url = req.url;

		return res.status(404).json({
			code: 404,
			message: `The ${url} not found!`
		});
	}) // ==> 404 Not Found Route

	.use(errorHandler) // ==> Error Handler

	.listen(port, () => {
		loggingInfo(`🚀 Server running on port ${port} (${host}:${port})`);
	});
