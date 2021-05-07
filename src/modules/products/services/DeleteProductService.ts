import { AppError } from '@shared/errors/AppError';
import { ProductChangedType } from '@shared/types/Product';
import { BaseProductService } from './BaseProductService';

type Request = {
	id: string;
};

class DeleteProductService extends BaseProductService {
	public async execute({ id }: Request): Promise<ProductChangedType> {
		const product = await this.repository.findOne(id);

		if (!product) {
			throw new AppError(`Product not found!`, 404);
		}

		// Remove old info in Redis
		await this.redisCache.invalidate('PRODUCT_LIST');

		await this.repository.remove(product);

		return {
			message: 'Product deleted with success!',
			code: 200,
			product
		};
	}
}

export { DeleteProductService };
