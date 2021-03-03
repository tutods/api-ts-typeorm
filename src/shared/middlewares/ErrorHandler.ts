import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
	error: Error,
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
		message: 'Internal server error'
	});
};

export { errorHandler };
