import { uploadConfig } from '@config/upload';
import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import multer from 'multer';
import { userAvatarController } from '../controllers/UserAvatarController';
import { UserController } from '../controllers/UserController';
import { userGenericBody, userIdParam } from '../validations/UserSchemas';

const controller = new UserController();
const avatarController = new userAvatarController();

const upload = multer(uploadConfig);

const userRoutes = Router();

userRoutes
	.get('/', isAuthenticated, controller.index)
	.get('/:id', joiParamsValidation(userIdParam), controller.show)
	.post('/', joiBodyValidation(userGenericBody), controller.create)
	.put(
		'/:id',
		joiParamsValidation(userIdParam),
		joiBodyValidation(userGenericBody),
		controller.update
	)
	.delete('/:id', joiParamsValidation(userIdParam), controller.delete);

userRoutes.patch(
	'/avatar',
	isAuthenticated,
	upload.single('avatar'),
	avatarController.update
);

export { userRoutes };
