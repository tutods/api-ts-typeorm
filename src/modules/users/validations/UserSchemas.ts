import { EValidationMessages } from '@enums/EValidationMessages';
import Joi from 'joi';

const userGenericBody = Joi.object({
	name: Joi.string()
		.required()
		.messages({
			'string.base': `Name ${EValidationMessages.STRING}`,
			'any.required': `Name ${EValidationMessages.REQUIRED}`
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
});

const userUpdateBody = Joi.object({
	name: Joi.string()
		.optional()
		.messages({
			'string.base': `Name ${EValidationMessages.STRING}`
		}),
	email: Joi.string()
		.email()
		.optional()
		.messages({
			'string.base': `Email ${EValidationMessages.STRING}`,
			'string.email': EValidationMessages.EMAIL
		}),
	password: Joi.string()
		.optional()
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`
		})
});

const userIdParam = Joi.object({
	id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		})
});

export { userGenericBody, userUpdateBody, userIdParam };
