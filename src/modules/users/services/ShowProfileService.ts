import { IUserShow } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	userId: string;
}

class ShowProfileService extends BaseUserService {
	public async execute({ userId }: IRequest): Promise<IUserShow> {
		const user = await this.repository.findById(userId);

		if (!user) {
			throw new AppError('User not found!', 404);
		}

		return {
			code: 200,
			user
		};
	}
}

export { ShowProfileService };
