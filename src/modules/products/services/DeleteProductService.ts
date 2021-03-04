import { IProductChanged } from '@interfaces/IProduct';
import { AppError } from '@shared/errors/AppError';
import { BaseProductService } from './BaseProductService';

interface IRequest {
	id: string;
}

class DeleteProductService extends BaseProductService {
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
