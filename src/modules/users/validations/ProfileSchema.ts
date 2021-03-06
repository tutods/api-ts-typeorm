import Joi from 'joi';
import { EValidationMessages } from 'src/enums/EValidationMessages';

const profileUpdateBody = Joi.object({
	name: Joi.string().messages({
		'string.base': `Name ${EValidationMessages.STRING}`
	}),
	email: Joi.string()
		.email()
		.messages({
			'string.base': `Email ${EValidationMessages.STRING}`,
			'string.email': EValidationMessages.EMAIL
		}),
	oldPassword: Joi.string()
		.min(3)
		.messages({
			'string.base': `Old Password ${EValidationMessages.STRING}`,
			'string.min': `Old Password need at last {#limit} characters`
		}),
	password: Joi.string()
		.optional()
		.min(3)
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'string.min': `Password need at last {#limit} characters`
		}),
	confirmPassword: Joi.any()
		.valid(Joi.ref('password'))
		.when('password', {
			is: Joi.exist(),
			then: Joi.required()
		})
		.options({
			messages: {
				'any.only': 'Confirm Password does not match with Password',
				'any.required': `Confirm Password ${EValidationMessages.REQUIRED}`
			}
		})
});

export { profileUpdateBody };
