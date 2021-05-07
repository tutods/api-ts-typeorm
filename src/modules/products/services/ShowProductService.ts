import { AppError } from '@shared/errors/AppError';
import { ProductShow } from '@shared/types/Product';
import { BaseProductService } from './BaseProductService';

type Request = {
	id: string;
};

class ShowProductService extends BaseProductService {
	public async execute({ id }: Request): Promise<ProductShow> {
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
