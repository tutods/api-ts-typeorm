import { AppError } from '@shared/errors/AppError';
import { ProductShowType } from '@shared/types/Product';
import { BaseProductService } from './BaseProductService';

type Request = {
	id: string;
};

class ShowProductService extends BaseProductService {
	public async execute({ id }: Request): Promise<ProductShowType> {
		const product = await this.repository.findOne(id);

		if (!product) {
			throw new AppError('Product not found!', 404);
		}

		return {
			code: 200,
			product
		};
	}
}

export { ShowProductService };
