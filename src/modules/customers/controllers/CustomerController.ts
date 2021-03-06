import { Request, Response } from 'express';
import { CreateCustomerService } from '../services/CreateCustomerService';
import { DeleteCustomerService } from '../services/DeleteCustomerService';
import { ListCustomerService } from '../services/ListCustomerService';
import { ShowCustomerService } from '../services/ShowCustomerService';
import { UpdateCustomerService } from '../services/UpdateCustomerService';

class CustomerController {
	public async index(req: Request, res: Response): Promise<Response> {
		const listCustomers = new ListCustomerService();

		const result = await listCustomers.execute();

		return res.status(result.code).json(result);
	}

	public async show(req: Request, res: Response): Promise<Response> {
		const showCustomer = new ShowCustomerService();
		const { id } = req.params;

		const result = await showCustomer.execute({ id });

		return res.status(result.code).json(result);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createCustomer = new CreateCustomerService();
		const { name, email } = req.body;

		const result = await createCustomer.execute({
			name,
			email
		});

		return res.status(result.code).json(result);
	}

	public async update(req: Request, res: Response): Promise<Response> {
		const updateCustomer = new UpdateCustomerService();
		const { name, email } = req.body;
		const { id } = req.params;

		const result = await updateCustomer.execute({
			id,
			name,
			email
		});

		return res.status(result.code).json(result);
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		const deleteCustomer = new DeleteCustomerService();
		const { id } = req.params;

		const result = await deleteCustomer.execute({
			id
		});

		return res.status(result.code).json(result);
	}
}

export { CustomerController };
