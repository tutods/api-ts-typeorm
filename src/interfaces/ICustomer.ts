interface ICustomer {
	id?: string;
	name: string;
	email: string;
	created_at?: Date;
	updated_at?: Date;
}

interface ICustomerChanged {
	message: string;
	code: number;
	customer: ICustomer;
}

interface ICustomerList {
	count: number;
	code: number;
	customers: ICustomer[];
}

interface ICustomerShow {
	code: number;
	customer: ICustomer;
}

interface ICustomerPaginated {
	code?: number;
	from: number;
	to: number;
	per_page: number;
	total: number;
	current_page: number;
	prev_page?: number | null | undefined;
	next_page?: number | null | undefined;
	data: ICustomer[];
}

export {
	ICustomer,
	ICustomerChanged,
	ICustomerList,
	ICustomerShow,
	ICustomerPaginated
};
