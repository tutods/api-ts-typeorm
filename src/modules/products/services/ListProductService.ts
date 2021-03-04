import { IProductList } from '@interfaces/IProduct';
import { BaseProductService } from './BaseProductService';

class ListProductService extends BaseProductService {
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
