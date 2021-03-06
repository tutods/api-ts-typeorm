import { ICustomerList } from '@interfaces/ICustomter';
import { BaseCustomerService } from './BaseCustomerService';

class ListCustomerService extends BaseCustomerService {
	public async execute(): Promise<ICustomerList> {
		const customers = await this.repository.find();

		return {
			code: 200,
			count: customers.length,
			customers
		};
	}
}

export { ListCustomerService };
