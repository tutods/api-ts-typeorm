import { serverEnv } from '@config/environment';
import { errorHandler } from '@shared/middlewares/ErrorHandler';
import '@shared/typeorm';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { routes } from './routes';

const { port } = serverEnv;

const app = express();

app.use(cors())
	.use(express.json())
	.use('/api', routes)
	.use(errorHandler)
	.listen(port, () => {
		console.log(`Server running on port ${port} 😎`);
	});
