import { ICustomer } from './ICustomer';
import { OrderProduct } from './OrderProduct';

type Order = {
	readonly id?: string;
	customer_id: string;
	customer: ICustomer;
	order_products: OrderProduct[];
	created_at?: Date;
	updated_at?: Date;
};

type OrderChanged = {
	message: string;
	code: number;
	order: Order;
};

type OrderList = {
	count: number;
	code: number;
	orders: Order[];
};

type OrderShow = {
	code: number;
	order: Order;
};

export { Order, OrderChanged, OrderList, OrderShow };
