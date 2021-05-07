import { AppError } from '@shared/errors/AppError';
import { CustomerShow } from '@shared/types/Customer';
import { BaseCustomerService } from './BaseCustomerService';

type Request = {
	id: string;
};

class ShowCustomerService extends BaseCustomerService {
	public async execute({ id }: Request): Promise<CustomerShow> {
		const customer = await this.repository.findById(id);

		if (!customer) {
			throw new AppError('Customer not found', 404);
		}

		return {
			code: 200,
			customer
		};
	}
}

export { ShowCustomerService };
