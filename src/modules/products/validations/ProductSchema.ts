import Joi from 'joi';
import { EValidationMessages } from 'src/enums/EValidationMessages';

const productGenericBody = Joi.object({
	name: Joi.string()
		.required()
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'any.required': `Password ${EValidationMessages.REQUIRED}`
		}),

	price: Joi.number()
		.precision(2)
		.required()
		.messages({
			'number.base': `Price ${EValidationMessages.NUMBER}`,
			'number.precision': `Price ${EValidationMessages.PRECISION}`,
			'any.required': `Price ${EValidationMessages.REQUIRED}`
		}),
	quantity: Joi.number()
		.required()
		.messages({
			'number.base': `Quantity ${EValidationMessages.NUMBER}`,
			'any.required': `Quantity ${EValidationMessages.REQUIRED}`
		})
});

const productUpdateBody = Joi.object({
	name: Joi.string()
		.optional()
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'any.required': `Password ${EValidationMessages.REQUIRED}`
		}),

	price: Joi.number()
		.precision(2)
		.optional()
		.messages({
			'number.base': `Price ${EValidationMessages.NUMBER}`,
			'number.precision': `Price ${EValidationMessages.PRECISION}`,
			'any.required': `Price ${EValidationMessages.REQUIRED}`
		}),
	quantity: Joi.number()
		.optional()
		.messages({
			'number.base': `Quantity ${EValidationMessages.NUMBER}`,
			'any.required': `Quantity ${EValidationMessages.REQUIRED}`
		})
});

const productIdParam = Joi.object({
	id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		})
});

export { productGenericBody, productIdParam, productUpdateBody };
