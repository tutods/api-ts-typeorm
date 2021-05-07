import { AppError } from '@shared/errors/AppError';
import { OrderShowType } from '@shared/types/Order';
import { BaseOrderService } from './BaseOrderService';

type Request = {
	id: string;
};

class ShowOrderService extends BaseOrderService {
	public async execute({ id }: Request): Promise<OrderShowType> {
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
