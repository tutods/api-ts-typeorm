import { IProductList } from '@interfaces/IProduct';
import { BaseProductRepository } from './BaseProductRepository';

class ListProductService extends BaseProductRepository {
	public async execute(): Promise<IProductList> {
		const products = await this.repository.find();

		return {
			code: 200,
			count: products.length,
			products
		};
	}
}

export { ListProductService };
