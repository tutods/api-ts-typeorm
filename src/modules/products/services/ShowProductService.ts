import { IProductShow } from '@interfaces/IProduct';
import { AppError } from '@shared/errors/AppError';
import { BaseProductRepository } from './BaseProductRepository';

interface IRequest {
	id: string;
}

class ShowProductService extends BaseProductRepository {
	public async execute({ id }: IRequest): Promise<IProductShow> {
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
