import { JoiErrors, JoiResultErrors } from '@shared/types/Joi';

class JoiError {
	public errors: JoiResultErrors[];
	public readonly code: number;

	constructor(errors: JoiErrors[], code = 400) {
		this.errors = this.format(errors);

		this.code = code;
	}

	private format(errors: JoiErrors[]): JoiResultErrors[] {
		const formatErrors: JoiResultErrors[] = errors.map((error) => {
			const { message, context } = error;

			return {
				field: context.label,
				message: `${
					message.charAt(0).toUpperCase() +
					message.slice(1).toLowerCase()
				}`
			};
		});

		return formatErrors;
	}
}

export { JoiError };
