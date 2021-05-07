import { Customer } from '@modules/customers/typeorm/entities/Customer';
import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';

type Product = {
	product_id: string;
	quantity: number;
	price: number;
};

type CreateRequest = {
	customer: Customer;
	products: Product[];
};

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
	}: CreateRequest): Promise<Order> {
		const order = this.create({ customer, order_products: products });

		await this.save(order);

		return order;
	}
}

export { OrderRepository };
