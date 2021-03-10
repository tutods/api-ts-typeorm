import { IOrderShow } from '@interfaces/IOrder';
import { AppError } from '@shared/errors/AppError';
import { BaseOrderService } from './BaseOrderService';

interface IRequest {
	id: string;
}

class ShowOrderService extends BaseOrderService {
	public async execute({ id }: IRequest): Promise<IOrderShow> {
		const order = await this.repository.findById(id);

		if (!order) {
			throw new AppError('Order not found!', 404);
		}

		return {
			code: 200,
			order
		};
	}
}

export { ShowOrderService };
