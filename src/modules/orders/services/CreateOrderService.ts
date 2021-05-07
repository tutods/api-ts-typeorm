import { CustomerRepository } from '@modules/customers/typeorm/repositories/CustomerRepository';
import { ProductRepository } from '@modules/products/typeorm/repositories/ProductRepository';
import { AppError } from '@shared/errors/AppError';
import { OrderChangedType } from '@shared/types/Order';
import { getCustomRepository } from 'typeorm';
import { BaseOrderService } from './BaseOrderService';

type Request = {
	customerId: string;
	products: [
		{
			id: string;
			quantity: number;
		}
	];
};

class CreateOrderService extends BaseOrderService {
	protected customerRepository = getCustomRepository(CustomerRepository);
	protected productRepository = getCustomRepository(ProductRepository);

	public async execute({
		customerId,
		products
	}: Request): Promise<OrderChangedType> {
		const customer = await this.customerRepository.findById(customerId);

		if (!customer) {
			throw new AppError('Customer not found!', 404);
		}

		const productsExists = await this.productRepository.findAllByIds(
			products
		);

		if (!productsExists.length) {
			throw new AppError('Product(s) not found!', 404);
		}

		const existsProductsIds = productsExists.map((product) => product.id);
		const invalidProducts = products.filter(
			(product) => !existsProductsIds.includes(product.id)
		);

		if (invalidProducts.length) {
			throw new AppError(
				`Product with id ${invalidProducts[0].id} not found!`,
				404
			);
		}

		const quantityAvailable = products.filter(
			(product) =>
				productsExists.filter(
					(existProduct) => existProduct.id === product.id
				)[0].quantity < product.quantity
		);

		if (quantityAvailable.length) {
			throw new AppError(
				`The quantity ${quantityAvailable[0].quantity} is not available for ${quantityAvailable[0].id}`
			);
		}

		const serializedProducts = products.map((product) => ({
			product_id: product.id,
			quantity: product.quantity,
			price: productsExists.filter((p) => p.id === product.id)[0].price
		}));

		const order = await this.repository.createOrder({
			customer,
			products: serializedProducts
		});

		const { order_products } = order;

		const updatedProductQuantity = order_products.map((product) => ({
			id: product.product_id,
			quantity:
				productsExists.filter((p) => p.id === product.product_id)[0]
					.quantity - product.quantity
		}));

		await this.productRepository.save(updatedProductQuantity);

		return {
			message: 'Order registered with success!',
			code: 201,
			order
		};
	}
}

export { CreateOrderService };
