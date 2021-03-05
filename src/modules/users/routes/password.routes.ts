import { Router } from 'express';
import { PasswordController } from '../controllers/PasswordController';

const controller = new PasswordController();
const passwordRoutes = Router();

passwordRoutes
	.post('/forgot-password', controller.forgot)
	.post('/reset-password/:token', controller.reset);

export { passwordRoutes };
