import { getCustomRepository } from 'typeorm';
import { OrderProductRepository } from '../typeorm/repositories/OrderProductRepository';

class BaseProductService {
	protected repository = getCustomRepository(OrderProductRepository);
}

export { BaseProductService };
