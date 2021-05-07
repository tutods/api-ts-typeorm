type JoiErrorsType = {
	message: string;
	type: string;
	context: {
		label: string;
		key: string;
	};
};

type JoiResultErrorsType = {
	field: string;
	message: string;
};

export { JoiErrorsType, JoiResultErrorsType };
