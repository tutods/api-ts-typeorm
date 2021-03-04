import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class BaseProductService {
	protected repository = getCustomRepository(ProductRepository);
}

export { BaseProductService };
