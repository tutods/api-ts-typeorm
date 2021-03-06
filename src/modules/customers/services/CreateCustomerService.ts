import { ICustomerChanged } from '@interfaces/ICustomer';
import { AppError } from '@shared/errors/AppError';
import { BaseCustomerService } from './BaseCustomerService';

interface IRequest {
	name: string;
	email: string;
}

class CreateCustomerService extends BaseCustomerService {
	public async execute({ name, email }: IRequest): Promise<ICustomerChanged> {
		const emailExists = await this.repository.findByEmail(email);

		if (emailExists) {
			throw new AppError('Email already exists!');
		}

		const customer = this.repository.create({
			name,
			email
		});

		await this.repository.save(customer);

		return {
			message: 'Customer created with success',
			code: 201,
			customer
		};
	}
}

export { CreateCustomerService };
