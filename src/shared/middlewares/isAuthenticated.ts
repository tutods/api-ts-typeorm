import { authEnv } from '@config/environment';
import { ITokenPlayload } from '@interfaces/ITokenPlayload';
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
		const decodeToken = verify(token, authEnv.secret) as ITokenPlayload;

		const {
			exp,
			sub,
			name,
			email,
			avatar,
			created_at,
			update_at
		} = decodeToken;

		if (Date.now() >= exp * 1000) {
			throw new AppError('Your token already expire!');
		}

		req.user = {
			id: sub,
			name,
			email,
			avatar,
			created_at,
			update_at
		};

		next();
	} catch (error) {
		throw new AppError('Your token is invalid.', 401);
	}
};
