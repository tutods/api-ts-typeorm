import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class BaseProductService {
	repository = getCustomRepository(ProductRepository);
}

export { BaseProductService };
