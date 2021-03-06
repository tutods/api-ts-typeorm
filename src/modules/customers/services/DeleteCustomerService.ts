import { ICustomerChanged } from '@interfaces/ICustomer';
import { AppError } from '@shared/errors/AppError';
import { BaseCustomerService } from './BaseCustomerService';

interface IRequest {
	customerId: string;
}

class DeleteCustomerService extends BaseCustomerService {
	public async execute({ customerId }: IRequest): Promise<ICustomerChanged> {
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
