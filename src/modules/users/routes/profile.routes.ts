import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import { joiBodyValidation } from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import { UserProfileController } from '../controllers/UserProfileController';
import { profileUpdateBody } from '../validations/ProfileSchema';

const controller = new UserProfileController();
const profileRoutes = Router();

profileRoutes
	.use(isAuthenticated)
	.get('/', controller.index)
	.put('/', joiBodyValidation(profileUpdateBody), controller.update);

export { profileRoutes };
