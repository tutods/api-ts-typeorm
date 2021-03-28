import { AppError } from '@shared/errors/AppError';
import { JoiError } from '@shared/errors/JoiError';
import { NextFunction, Request, Response } from 'express';
import { MulterError } from 'multer';

const errorHandler = (
	error: JoiError | AppError | Error,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	// Error is instance of App Error
	if (error instanceof AppError) {
		return response.status(error.code).json({
			status: error.code,
			message: error.message
		});
	}

	// Error in Upload files
	if (error instanceof MulterError) {
		return response.status(400).send({
			code: 400,
			type: 'Upload Error',
			message: error.message
		});
	}

	// Error in Joi Validations
	if (error instanceof JoiError) {
		return response.status(error.code).json({
			status: error.code,
			errors: error.errors
		});
	}

	// In last case return internal server error
	return response.status(500).json({
		status: 500,
		message: 'Internal server error'
	});
};

export { errorHandler };
