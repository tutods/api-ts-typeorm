type Customer = {
	readonly id?: string;
	name: string;
	email: string;
	created_at?: Date;
	updated_at?: Date;
};

type CustomerChanged = {
	message: string;
	code: number;
	customer: ICustomer;
};

type CustomerList = {
	count: number;
	code: number;
	customers: ICustomer[];
};

type CustomerShow = {
	code: number;
	customer: ICustomer;
};

type CustomerPaginated = {
	code?: number;
	from: number;
	to: number;
	per_page: number;
	total: number;
	current_page: number;
	prev_page?: number | null | undefined;
	next_page?: number | null | undefined;
	data: ICustomer[];
};

export {
	Customer,
	CustomerChanged,
	CustomerList,
	CustomerShow,
	CustomerPaginated
};
