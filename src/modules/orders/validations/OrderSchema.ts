import Joi from 'joi';
import { EValidationMessages } from 'src/enums/EValidationMessages';

const productFields = Joi.object().keys({
	id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		}),
	quantity: Joi.number()
		.min(1)
		.required()
		.messages({
			'number.base': `Quantity ${EValidationMessages.NUMBER}`,
			'number.min': `Minimum quantity is 1`,
			'any.required': `Quantity ${EValidationMessages.REQUIRED}`
		})
});

const orderGenericBody = Joi.object({
	customerId: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		}),
	products: Joi.array()
		.items(productFields)
		.min(1)
		.required()
		.messages({
			'any.required': `Order products ${EValidationMessages.REQUIRED}`,
			'array.min': 'The order needs at least one product.'
		})
});

const orderIdParam = Joi.object({
	id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		})
});

export { orderGenericBody, orderIdParam };
