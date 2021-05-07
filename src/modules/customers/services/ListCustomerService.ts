import { CustomerPaginated } from '@shared/types/Customer';
import { BaseCustomerService } from './BaseCustomerService';

class ListCustomerService extends BaseCustomerService {
	public async execute(): Promise<CustomerPaginated> {
		const customers = await this.repository.createQueryBuilder().paginate();

		return {
			code: 200,
			...customers
		};
	}
}

export { ListCustomerService };
