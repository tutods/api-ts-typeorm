import { IProductChanged } from '@interfaces/IProduct';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import { BaseProductRepository } from './BaseProductRepository';

interface IRequest {
	id: string;
}

class DeleteProductService extends BaseProductRepository {
	public async execute({ id }: IRequest): Promise<IProductChanged> {
		const product = await this.repository.findOne(id);

		if (!product) {
			throw new AppError(`Product not found!`, 404);
		}

		await this.repository.remove(product);

		return {
			message: 'Product deleted with success!',
			code: 200,
			product
		};
	}
}

export { DeleteProductService };
