import { IOrder } from './IOrder';
import { IProduct } from './IProduct';

interface IOrderProduct {
	readonly id?: string;
	price: number;
	quantity: number;
	order_id: string;
	order?: IOrder;
	product_id: string;
	product?: IProduct;
	created_at?: Date;
	updated_at?: Date;
}

export { IOrderProduct };
