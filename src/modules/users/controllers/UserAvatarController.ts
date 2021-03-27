import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { UpdateUserAvatarService } from '../services/UpdateUserAvatarService';

class userAvatarController {
	public async update(req: Request, res: Response): Promise<Response> {
		const updateService = new UpdateUserAvatarService();

		const avatar = req.file.filename;
		const { id } = req.user;

		const result = await updateService.execute({ avatar, id });

		return res.status(result.code).json(classToClass(result));
	}
}

export { userAvatarController };
