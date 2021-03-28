import { IProduct, IProductList } from '@interfaces/IProduct';
import { BaseProductService } from './BaseProductService';

class ListProductService extends BaseProductService {
	public async execute(): Promise<IProductList> {
		// Get products from Redis (if exists)
		let products = await this.redisCache.recover<IProduct[]>(
			'PRODUCT_LIST'
		);

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
