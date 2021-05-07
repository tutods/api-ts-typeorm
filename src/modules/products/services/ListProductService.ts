import { Product, ProductList } from '@shared/types/Product';
import { BaseProductService } from './BaseProductService';

class ListProductService extends BaseProductService {
	public async execute(): Promise<ProductList> {
		// Get products from Redis (if exists)
		let products = await this.redisCache.recover<Product[]>('PRODUCT_LIST');

		if (!products) {
			products = await this.repository.find();

			// Save products into Redis
			await this.redisCache.save('PRODUCT_LIST', products);
		}

		return {
			code: 200,
			count: products.length,
			products
		};
	}
}

export { ListProductService };
