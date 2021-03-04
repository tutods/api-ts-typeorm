interface IErrors {
	message: string;
	type: string;
	context: {
		label: string;
		key: string;
	};
}

interface IJoiErrors {
	field: string;
	message: string;
}

class JoiError {
	public errors: IJoiErrors[];
	public readonly code: number;

	constructor(errors: IErrors[], code = 400) {
		this.errors = this.format(errors);

		this.code = code;
	}

	private format(errors: IErrors[]): IJoiErrors[] {
		return errors.map((err) => {
			const { message, context } = err;

			return {
				field: `${
					context.label.charAt(0).toUpperCase() +
					context.label.slice(1).toLowerCase()
				}`,
				message: `${
					message.charAt(0).toUpperCase() +
					message.slice(1).toLowerCase()
				}`
			};
		});
	}
}

export { JoiError };
