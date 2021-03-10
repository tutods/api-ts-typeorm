import { ICustomer } from './ICustomer';
import { IOrderProduct } from './IOrderProduct';

interface IOrder {
	id?: string;
	customer_id: string;
	customer: ICustomer;
	order_products: IOrderProduct[];
	created_at?: Date;
	updated_at?: Date;
}

interface IOrderChanged {
	message: string;
	code: number;
	order: IOrder;
}

interface IOrderList {
	count: number;
	code: number;
	orders: IOrder[];
}

interface IOrderShow {
	code: number;
	order: IOrder;
}

export { IOrder, IOrderChanged, IOrderList, IOrderShow };
