import { joiBodyValidation } from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { SessionController } from '../controllers/SessionController';
import { loginBody } from '../validations/SessionSchema';

const controller = new SessionController();
const sessionRoutes = Router();

sessionRoutes.post('/login', joiBodyValidation(loginBody), controller.create);

export { sessionRoutes };
