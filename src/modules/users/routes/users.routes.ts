import { uploadConfig } from '@config/upload';
import { isAuthenticated } from '@shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from '@shared/middlewares/joiValidation';
import { Router } from 'express';
import multer from 'multer';
import { checkIsImage } from 'src/functions/checkIsImage';
import { userAvatarController } from '../controllers/UserAvatarController';
import { UserController } from '../controllers/UserController';
import {
	userGenericBody,
	userIdParam,
	userUpdateBody
} from '../validations/UserSchemas';

const controller = new UserController();
const avatarController = new userAvatarController();

const upload = multer({
	...uploadConfig,
	limits: {
		fileSize: 2500000
	},
	fileFilter: (_req, file, cb) => {
		checkIsImage(file, cb);
	}
});

const userRoutes = Router();

userRoutes
	.get('/', isAuthenticated, controller.index)
	.get('/:id', joiParamsValidation(userIdParam), controller.show)
	.post('/', joiBodyValidation(userGenericBody), controller.create)
	.put(
		'/:id',
		joiParamsValidation(userIdParam),
		joiBodyValidation(userUpdateBody),
		controller.update
	)
	.delete('/:id', joiParamsValidation(userIdParam), controller.delete)
	.patch(
		'/avatar',
		isAuthenticated,
		upload.single('avatar'),
		avatarController.update
	);

export { userRoutes };
