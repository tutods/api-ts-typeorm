import { AppError } from '@shared/errors/AppError';
import { FileFilterCallback } from 'multer';
import path from 'path';

export const checkIsImage = (
	file: Express.Multer.File,
	cb: FileFilterCallback
) => {
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(
		path.extname(file.originalname).toLowerCase()
	);
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		return cb(new AppError('Please choose an image file'));
	}
};
