export interface IJoiErrors {
	message: string;
	type: string;
	context: {
		label: string;
		key: string;
	};
}
