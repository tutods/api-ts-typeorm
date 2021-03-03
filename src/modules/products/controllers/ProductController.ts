import { Request, Response } from 'express';
import { BaseProductController } from './BaseProductController';

class ProductController extends BaseProductController {
	public async index(req: Request, res: Response): Promise<Response> {
		const result = await this.listProducts.execute();

		return res.status(result.code).json(result);
	}

	public async show(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		const result = await this.showProduct.execute({ id });

		return res.status(result.code).json(result);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const { name, price, quantity } = req.body;

		const result = await this.createProduct.execute({
			name,
			price,
			quantity
		});

		return res.status(result.code).json(result);
	}

	public async update(req: Request, res: Response): Promise<Response> {
		const { name, price, quantity } = req.body;
		const { id } = req.params;

		const result = await this.updateProduct.execute({
			id,
			name,
			price,
			quantity
		});

		return res.status(result.code).json(result);
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;

		const result = await this.deleteProduct.execute({
			id
		});

		return res.status(result.code).json(result);
	}
}

export { ProductController };
