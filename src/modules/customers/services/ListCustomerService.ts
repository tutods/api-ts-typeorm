import { ICustomerPaginated } from '@interfaces/ICustomer';
import { BaseCustomerService } from './BaseCustomerService';

class ListCustomerService extends BaseCustomerService {
	public async execute(): Promise<ICustomerPaginated> {
		const customers = await this.repository.createQueryBuilder().paginate();

		return {
			code: 200,
			...customers
		};
	}
}

export { ListCustomerService };
