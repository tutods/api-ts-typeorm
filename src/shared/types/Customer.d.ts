type CustomerType = {
	readonly id?: string;
	name: string;
	email: string;
	created_at?: Date;
	updated_at?: Date;
};

type CustomerChangedType = {
	message: string;
	code: number;
	customer: CustomerType;
};

type CustomerListType = {
	count: number;
	code: number;
	customers: CustomerType[];
};

type CustomerShowType = {
	code: number;
	customer: CustomerType;
};

type CustomerPaginatedType = {
	code?: number;
	from: number;
	to: number;
	per_page: number;
	total: number;
	current_page: number;
	prev_page?: number | null | undefined;
	next_page?: number | null | undefined;
	data: CustomerType[];
};

export {
	CustomerType,
	CustomerChangedType,
	CustomerListType,
	CustomerShowType,
	CustomerPaginatedType
};
