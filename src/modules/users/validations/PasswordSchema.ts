import { EValidationMessages } from '@enums/EValidationMessages';
import Joi from 'joi';

const resetPasswordBody = Joi.object({
	password: Joi.string()
		.required()
		.min(3)
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'string.min': `Password need at last {#limit} characters`,
			'any.required': `Password ${EValidationMessages.REQUIRED}`
		}),
	confirmPassword: Joi.any()
		.valid(Joi.ref('password'))
		.required()
		.options({
			messages: {
				'any.only': 'Confirm Password does not match with Password'
			}
		})
});

const resetPasswordParams = Joi.object({
	token: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Token ${EValidationMessages.STRING}`,
			'string.guid': `Token is not valid token.`,
			'any.required': `Token ${EValidationMessages.REQUIRED}`
		})
});

const forgotPasswordBody = Joi.object({
	email: Joi.string()
		.email()
		.required()
		.messages({
			'string.base': `Email ${EValidationMessages.STRING}`,
			'string.email': EValidationMessages.EMAIL,
			'any.required': `Email ${EValidationMessages.REQUIRED}`
		})
});

export { resetPasswordBody, resetPasswordParams, forgotPasswordBody };
