import Joi from 'joi';
import { EValidationMessages } from 'src/enums/EValidationMessages';

const createUserSchema = {
	name: Joi.string()
		.required()
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'any.required': `Password ${EValidationMessages.REQUIRED}`
		}),
	email: Joi.string()
		.email()
		.required()
		.messages({
			'string.base': `Email ${EValidationMessages.STRING}`,
			'string.email': EValidationMessages.EMAIL,
			'any.required': `Email ${EValidationMessages.REQUIRED}`
		}),
	password: Joi.string()
		.required()
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'any.required': `Password ${EValidationMessages.REQUIRED}`
		})
};

export { createUserSchema };
