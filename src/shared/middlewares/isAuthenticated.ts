import { authEnv } from '@config/environment';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export const isAuthenticated = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AppError('Cannot find any token in your headers', 401);
	}

	const [, token] = authHeader.split(' '); // get only token (ex.: Bearer <token>)

	try {
		const decodeToken = verify(token, authEnv.secret);

		return next();
	} catch (error) {
		throw new AppError('You token is not valid.', 401);
	}
};
