import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class BaseProductRepository {
	protected repository = getCustomRepository(ProductRepository);
}

export { BaseProductRepository };
