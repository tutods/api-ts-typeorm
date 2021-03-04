import { JoiError } from '@shared/errors/JoiError';
import { NextFunction, Request, Response } from 'express';

const joiErrorHandler = (
	error: JoiError | Error,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (error instanceof JoiError) {
		return response.status(error.code).json({
			status: error.code,
			errors: error.errors
		});
	}

	next();
};

export { joiErrorHandler };
