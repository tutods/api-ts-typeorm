import { EValidationMessages } from '@enums/EValidationMessages';
import Joi from 'joi';

const loginBody = Joi.object({
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
});

export { loginBody };
