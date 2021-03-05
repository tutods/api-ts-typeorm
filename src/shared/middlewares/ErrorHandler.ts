import { AppError } from '@shared/errors/AppError';
import { JoiError } from '@shared/errors/JoiError';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
	error: JoiError | AppError | Error,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (error instanceof AppError) {
		return response.status(error.code).json({
			status: error.code,
			message: error.message
		});
	}

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
