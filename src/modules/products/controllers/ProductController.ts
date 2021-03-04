import { Request, Response } from 'express';
import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { ListProductService } from '../services/ListProductService';
import { ShowProductService } from '../services/ShowProductService';
import { UpdateProductService } from '../services/UpdateProductService';

class ProductController {
	public async index(req: Request, res: Response): Promise<Response> {
		const listProducts = new ListProductService();

		const result = await listProducts.execute();

		return res.status(result.code).json(result);
	}

	public async show(req: Request, res: Response): Promise<Response> {
		const showProduct = new ShowProductService();
		const { id } = req.params;

		const result = await showProduct.execute({ id });

		return res.status(result.code).json(result);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createProduct = new CreateProductService();
		const { name, price, quantity } = req.body;

		const result = await createProduct.execute({
			name,
			price,
			quantity
		});

		return res.status(result.code).json(result);
	}

	public async update(req: Request, res: Response): Promise<Response> {
		const updateProduct = new UpdateProductService();
		const { name, price, quantity } = req.body;
		const { id } = req.params;

		const result = await updateProduct.execute({
			id,
			name,
			price,
			quantity
		});

		return res.status(result.code).json(result);
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		const deleteProduct = new DeleteProductService();
		const { id } = req.params;

		const result = await deleteProduct.execute({
			id
		});

		return res.status(result.code).json(result);
	}
}

export { ProductController };
