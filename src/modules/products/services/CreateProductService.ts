import { IProductChanged } from '@interfaces/IProduct';
import { AppError } from '@shared/errors/AppError';
import { BaseProductService } from './BaseProductService';

interface IRequest {
	name: string;
	price: number;
	quantity: number;
}

class CreateProductService extends BaseProductService {
	public async execute({
		name,
		price,
		quantity
	}: IRequest): Promise<IProductChanged> {
		const productExists = this.repository.fidByName(name);

		if (productExists) {
			throw new AppError(`Already exists on product with name ${name}!`);
		}

		const product = this.repository.create({
			name,
			price,
			quantity
		});

		await this.repository.save(product);

		return {
			message: 'Product created with success!',
			code: 201,
			product
		};
	}
}

export { CreateProductService };
