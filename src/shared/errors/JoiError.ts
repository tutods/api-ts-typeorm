import { IJoiErrors } from '@interfaces/IJoi';

interface IJoiResultErrors {
	field: string;
	message: string;
}

class JoiError {
	public errors: IJoiResultErrors[];
	public readonly code: number;

	constructor(errors: IJoiErrors[], code = 400) {
		this.errors = this.format(errors);

		this.code = code;
	}

	private format(errors: IJoiErrors[]): IJoiResultErrors[] {
		const formatErrors: IJoiResultErrors[] = errors.map((error) => {
			const { message, context } = error;

			const field =
				context.label.charAt(0).toUpperCase() +
					context.label.slice(1).toLowerCase() || '';

			return {
				field: field,
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
