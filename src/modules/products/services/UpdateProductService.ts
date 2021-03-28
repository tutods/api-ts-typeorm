import { IProductChanged } from '@interfaces/IProduct';
import { AppError } from '@shared/errors/AppError';
import { BaseProductService } from './BaseProductService';

interface IRequest {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

class UpdateProductService extends BaseProductService {
	public async execute({
		id,
		name,
		price,
		quantity
	}: IRequest): Promise<IProductChanged> {
		const product = await this.repository.findOne(id);

		if (!product) {
			throw new AppError('Product not found!', 404);
		}

		const productExists = await this.repository.findByName(name);

		if (productExists) {
			throw new AppError(`Product with name ${name} already exists!`);
		}

		// Invalidate products in Redis
		this.redisCache.invalidate('PRODUCT_LIST');

		product.name = name;
		product.price = price;
		product.quantity = quantity;

		await this.repository.save(product);

		return {
			message: 'Product update with success!',
			code: 200,
			product
		};
	}
}

export { UpdateProductService };
