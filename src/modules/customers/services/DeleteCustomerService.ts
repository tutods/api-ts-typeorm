import { AppError } from '@shared/errors/AppError';
import { CustomerChanged } from '@shared/types/Customer';
import { BaseCustomerService } from './BaseCustomerService';

type Request = {
	customerId: string;
};

class DeleteCustomerService extends BaseCustomerService {
	public async execute({ customerId }: Request): Promise<CustomerChanged> {
		const customer = await this.repository.findById(customerId);

		if (!customer) {
			throw new AppError('Customer not found!', 404);
		}

		await this.repository.remove(customer);

		return {
			code: 200,
			message: 'Customer deleted with success!',
			customer
		};
	}
}
export { DeleteCustomerService };
