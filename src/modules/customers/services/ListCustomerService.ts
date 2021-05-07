import { CustomerListType } from '@shared/types/Customer';
import { BaseCustomerService } from './BaseCustomerService';

class ListCustomerService extends BaseCustomerService {
	public async execute(): Promise<CustomerListType> {
		const customers = await this.repository.find();

		return {
			code: 200,
			count: customers.length,
			customers
		};
	}
}

export { ListCustomerService };
