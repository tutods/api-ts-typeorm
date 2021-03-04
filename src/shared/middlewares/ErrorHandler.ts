/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
	error: AppError,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const { code, message } = error;

	if (!error) {
		next();
	}

	response.status(code || 400).json({
		code,
		message
	});
};

export { errorHandler };
