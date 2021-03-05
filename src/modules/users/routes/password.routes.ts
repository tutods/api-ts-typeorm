import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { PasswordController } from '../controllers/PasswordController';
import {
	forgotPasswordBody,
	resetPasswordBody,
	resetPasswordParams
} from '../validations/PasswordSchema';

const controller = new PasswordController();
const passwordRoutes = Router();

passwordRoutes
	.post(
		'/forgot-password',
		joiBodyValidation(forgotPasswordBody),
		controller.forgot
	)
	.post(
		'/reset-password/:token',
		joiParamsValidation(resetPasswordParams),
		joiBodyValidation(resetPasswordBody),
		controller.reset
	);

export { passwordRoutes };
