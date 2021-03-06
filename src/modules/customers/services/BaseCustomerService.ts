import { getCustomRepository } from 'typeorm';
import { CustomerRepository } from '../typeorm/repositories/CustomerRepository';

class BaseCustomerService {
	protected repository = getCustomRepository(CustomerRepository);
}

export { BaseCustomerService };
