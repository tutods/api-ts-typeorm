import { CreateOrderService } from '@modules/orders/services/CreateOrderService';
import { ShowOrderService } from '@modules/orders/services/ShowOrderService';
import { Request, Response } from 'express';

class OrderController {
	public async show(req: Request, res: Response): Promise<Response> {
		const showOrder = new ShowOrderService();
		const { id } = req.params;

		const result = await showOrder.execute({ id });

		return res.status(result.code).json(result);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createOrder = new CreateOrderService();
		const { customerId, products } = req.body;

		const result = await createOrder.execute({
			customerId,
			products
		});

		return res.status(result.code).json(result);
	}
}

export { OrderController };
