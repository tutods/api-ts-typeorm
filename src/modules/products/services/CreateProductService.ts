import { AppError } from '@shared/errors/AppError';
import { ProductChangedType } from '@shared/types/Product';
import { BaseProductService } from './BaseProductService';

type Request = {
	name: string;
	price: number;
	quantity: number;
};

class CreateProductService extends BaseProductService {
	public async execute({
		name,
		price,
		quantity
	}: Request): Promise<ProductChangedType> {
		const productExists = await this.repository.findByName(name);

		if (productExists) {
			throw new AppError(`Already exists one product with name ${name}!`);
		}

		const product = this.repository.create({
			name,
			price,
			quantity
		});

		// Remove old info in Redis
		await this.redisCache.invalidate('PRODUCT_LIST');

		try {
			await this.repository.save(product);
		} catch (err) {
			throw new AppError(err.message, 400);
		}

		return {
			message: 'Product created with success!',
			code: 201,
			product
		};
	}
}

export { CreateProductService };
