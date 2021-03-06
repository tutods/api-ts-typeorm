import { ICustomerShow } from '@interfaces/ICustomer';
import { AppError } from '@shared/errors/AppError';
import { BaseCustomerService } from './BaseCustomerService';

interface IRequest {
	id: string;
}

class ShowCustomerService extends BaseCustomerService {
	public async execute({ id }: IRequest): Promise<ICustomerShow> {
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
