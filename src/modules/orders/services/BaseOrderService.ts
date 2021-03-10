import { getCustomRepository } from 'typeorm';
import { OrderRepository } from '../typeorm/repositories/OrderRepository';

class BaseOrderService {
	protected repository = getCustomRepository(OrderRepository);
}

export { BaseOrderService };
