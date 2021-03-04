import { Router } from 'express';
import { SessionController } from '../controllers/SessionController';

const controller = new SessionController();
const sessionRoutes = Router();

sessionRoutes.post('/login', controller.create);

export { sessionRoutes };
