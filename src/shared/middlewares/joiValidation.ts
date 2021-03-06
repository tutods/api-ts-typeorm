import { joiOptions } from '@config/joi';
import { IJoiErrors } from '@interfaces/IJoi';
import { JoiError } from '@shared/errors/JoiError';
import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export const joiBodyValidation = (schema: Schema) => {
	return (request: Request, response: Response, next: NextFunction): void => {
		const { error } = schema.validate(request.body, joiOptions);

		if (error) {
			throw new JoiError(error.details as IJoiErrors[], 400);
		}

		next();
	};
};

export const joiParamsValidation = (schema: Schema) => {
	return (request: Request, response: Response, next: NextFunction): void => {
		const { error } = schema.validate(request.params, joiOptions);

		if (error) {
			throw new JoiError(error.details as IJoiErrors[], 400);
		}

		next();
	};
};

export const joiQueryValidation = (schema: Schema) => {
	return (request: Request, response: Response, next: NextFunction): void => {
		const { error } = schema.validate(request.query, joiOptions);

		if (error) {
			throw new JoiError(error.details as IJoiErrors[], 400);
		}

		next();
	};
};
