import { Customer } from '@modules/customers/typeorm/entities/Customer';
import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';

interface IProduct {
	product_id: string;
	quantity: number;
	price: number;
}

interface ICreateRequest {
	customer: Customer;
	products: IProduct[];
}

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {
	public async findById(id: string): Promise<Order | undefined> {
		const order = await this.findOne(id, {
			relations: ['order_products', 'customer']
		});

		return order;
	}

	public async createOrder({
		customer,
		products
	}: ICreateRequest): Promise<Order> {
		const order = this.create({ customer, order_products: products });

		await this.save(order);

		return order;
	}
}

export { OrderRepository };
