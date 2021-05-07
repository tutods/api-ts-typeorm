import { AppError } from '@shared/errors/AppError';
import { CustomerChangedType } from '@shared/types/Customer';
import { BaseCustomerService } from './BaseCustomerService';

type Request = {
	name: string;
	email: string;
};

class CreateCustomerService extends BaseCustomerService {
	public async execute({
		name,
		email
	}: Request): Promise<CustomerChangedType> {
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
