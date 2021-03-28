import { IProductList } from '@interfaces/IProduct';
import { RedisCache } from '@shared/cache/RedisCache';
import { BaseProductService } from './BaseProductService';

class ListProductService extends BaseProductService {
	public async execute(): Promise<IProductList> {
		const redisCache = new RedisCache();

		const products = await this.repository.find();

		await redisCache.save('products', products);

		return {
			code: 200,
			count: products.length,
			products
		};
	}
}

export { ListProductService };
