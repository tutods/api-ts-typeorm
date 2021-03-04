import { serverEnv } from '@config/environment';
import { errorHandler } from '@shared/middlewares/ErrorHandler';
import '@shared/typeorm';
import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { apiRoutes } from 'src/routes';

const { port } = serverEnv;

const app = express();

app.use(cors())
	.use(express.json())
	.use('/api', apiRoutes)
	.use(errorHandler)
	.use(errors())
	.listen(port, () => {
		console.log(`🔼 Server running on port ${port}`);
	});
