import { serverEnv } from '@config/environment';
import { uploadConfig } from '@config/upload';
import { errorHandler } from '@shared/middlewares/ErrorHandler';
import { rateLimiter } from '@shared/middlewares/rateLimiter';
import '@shared/typeorm';
import { loggingInfo } from '@utils/logging';
import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { pagination } from 'typeorm-pagination';
import { apiRoutes } from './routes';

const { port, host } = serverEnv;

const app = express();

app
	// Cors Middleware
	.use(cors())

	// Middleware to use JSON
	.use(express.json())

	// Middleware to limit number of requests
	.use(rateLimiter)

	// Pagination Middleware
	.use(pagination)

	// Static Files
	.use('/uploads', express.static(uploadConfig.directory))

	// Api Routes
	.use('/api', apiRoutes)

	// 404 Not Found Route
	.use((req: Request, res: Response) => {
		const url = req.url;

		return res.status(404).json({
			code: 404,
			message: `The ${url} not found!`
		});
	})

	// Error Handler Middleware
	.use(errorHandler)

	.listen(port, () => {
		loggingInfo(`⚡️ Server running on port ${port} (${host}:${port})`);
	});
