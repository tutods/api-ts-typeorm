class AppError extends Error {
	public readonly message: string;
	public readonly code: number;

	constructor(message: string, code = 400) {
		super(message);
		this.message = message;
		this.code = code;

		console.log(message);
	}
}

export { AppError };
