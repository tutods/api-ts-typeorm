import { OrderType } from './Order';
import { ProductType } from './Product';

type OrderProductType = {
	readonly id?: string;
	price: number;
	quantity: number;
	order_id: string;
	order?: OrderType;
	product_id: string;
	product?: ProductType;
	created_at?: Date;
	updated_at?: Date;
};

export { OrderProductType };
