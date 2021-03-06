import { ICustomerChanged } from '@interfaces/ICustomer';
import { AppError } from '@shared/errors/AppError';
import { BaseCustomerService } from './BaseCustomerService';

interface IRequest {
	id: string;
	name: string;
	email: string;
}

class UpdateCustomerService extends BaseCustomerService {
	public async execute({
		id,
		name,
		email
	}: IRequest): Promise<ICustomerChanged> {
		const customer = await this.repository.findById(id);

		if (!customer) {
			throw new AppError('Customer not found', 404);
		}

		const customerExists = await this.repository.findByEmail(email);

		if (customerExists && email !== customer.email) {
			throw new AppError(
				'There is already one customer with this email.',
				403
			);
		}

		customer.name = name;
		customer.email = email;

		try {
			await this.repository.save(customer);
		} catch (err) {
			throw new AppError(err.message, 400);
		}

		return {
			message: 'Customer updated with success!',
			code: 201,
			customer
		};
	}
}

export { UpdateCustomerService };
