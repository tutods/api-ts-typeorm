import { CustomerType } from './Customer';
import { OrderProductType } from './OrderProduct';

type OrderType = {
	readonly id?: string;
	customer_id: string;
	customer: CustomerType;
	order_products: OrderProductType[];
	created_at?: Date;
	updated_at?: Date;
};

type OrderChangedType = {
	message: string;
	code: number;
	order: OrderType;
};

type OrderListType = {
	count: number;
	code: number;
	orders: OrderType[];
};

type OrderShowType = {
	code: number;
	order: OrderType;
};

export { OrderType, OrderChangedType, OrderListType, OrderShowType };
