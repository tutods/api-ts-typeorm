import { NextFunction, Request, Response } from 'express';
import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { ListProductService } from '../services/ListProductService';
import { ShowProductService } from '../services/ShowProductService';
import { UpdateProductService } from '../services/UpdateProductService';

class ProductController {
	public async index(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | undefined> {
		const listProducts = new ListProductService();

		try {
			const result = await listProducts.execute();

			return res.status(result.code).json(result);
		} catch (err) {
			next({
				code: err.code,
				message: err.message
			});
		}
	}

	public async show(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | undefined> {
		const showProduct = new ShowProductService();
		const { id } = req.params;

		try {
			const result = await showProduct.execute({ id });

			return res.status(result.code).json(result);
		} catch (err) {
			next({
				code: err.code,
				message: err.message
			});
		}
	}

	public async create(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | undefined> {
		const createProduct = new CreateProductService();
		const { name, price, quantity } = req.body;

		try {
			const result = await createProduct.execute({
				name,
				price,
				quantity
			});

			return res.status(result.code).json(result);
		} catch (error) {
			next({
				message: error.message,
				code: error.code
			});
		}
	}

	public async update(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | undefined> {
		const updateProduct = new UpdateProductService();
		const { name, price, quantity } = req.body;
		const { id } = req.params;

		try {
			const result = await updateProduct.execute({
				id,
				name,
				price,
				quantity
			});

			return res.status(result.code).json(result);
		} catch (err) {
			next({
				message: err.message,
				code: err.code
			});
		}
	}

	public async delete(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<Response | undefined> {
		const deleteProduct = new DeleteProductService();
		const { id } = req.params;

		try {
			const result = await deleteProduct.execute({
				id
			});

			return res.status(result.code).json(result);
		} catch (err) {
			next({ message: err.message, code: err.code });
		}
	}
}

export { ProductController };
