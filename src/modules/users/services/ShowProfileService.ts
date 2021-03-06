import { IUserShow } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	user_id: string;
}

class ShowProfileService extends BaseUserService {
	public async execute({ user_id }: IRequest): Promise<IUserShow> {
		const user = await this.repository.findById(user_id);

		if (!user) {
			throw new AppError('User not found!', 404);
		}

		const { id, password, ...userData } = user;

		return {
			code: 200,
			user: userData
		};
	}
}

export { ShowProfileService };
