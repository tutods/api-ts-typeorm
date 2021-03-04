import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
	error: AppError | Error,
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

	return response.status(500).json({
		status: 500,
		message: error.message
	});
};

export { errorHandler };
