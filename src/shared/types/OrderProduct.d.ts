import { Order } from './Order';
import { Product } from './Product';

type OrderProduct = {
	readonly id?: string;
	price: number;
	quantity: number;
	order_id: string;
	order?: Order;
	product_id: string;
	product?: Product;
	created_at?: Date;
	updated_at?: Date;
};

export { OrderProduct };
