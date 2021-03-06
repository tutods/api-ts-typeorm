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

export { ICustomer, ICustomerChanged, ICustomerList, ICustomerShow };
