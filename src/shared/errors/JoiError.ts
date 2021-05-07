import { JoiErrorsType, JoiResultErrorsType } from '@shared/types/Joi';

class JoiError {
	public errors: JoiResultErrorsType[];
	public readonly code: number;

	constructor(errors: JoiErrorsType[], code = 400) {
		this.errors = this.format(errors);

		this.code = code;
	}

	private format(errors: JoiErrorsType[]): JoiResultErrorsType[] {
		const formatErrors: JoiResultErrorsType[] = errors.map((error) => {
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
