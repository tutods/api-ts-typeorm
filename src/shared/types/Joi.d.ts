type JoiErrors = {
	message: string;
	type: string;
	context: {
		label: string;
		key: string;
	};
};

type JoiResultErrors = {
	field: string;
	message: string;
};

export { JoiErrors, JoiResultErrors };
