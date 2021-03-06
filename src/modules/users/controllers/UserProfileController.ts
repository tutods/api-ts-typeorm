import { Request, Response } from 'express';
import { ShowProfileService } from '../services/ShowProfileService';
import { UpdateProfileService } from '../services/UpdateProfileService';

class UserProfileController {
	public async index(req: Request, res: Response): Promise<Response> {
		const service = new ShowProfileService();

		const userId = req.user.id;

		const result = await service.execute({ userId });

		return res.status(result.code).json(result);
	}

	public async update(req: Request, res: Response): Promise<Response> {
		const service = new UpdateProfileService();
		const userId = req.user.id;
		const { name, email, password, oldPassword } = req.body;

		const result = await service.execute({
			userId,
			name,
			email,
			password,
			oldPassword
		});

		return res.status(result.code).json(result);
	}
}

export { UserProfileController };
