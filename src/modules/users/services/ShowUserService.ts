import { IUserShow } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	id: string;
}

class ShowUserService extends BaseUserService {
	public async execute({ id }: IRequest): Promise<IUserShow> {
		const user = await this.repository.findById(id);

		if (!user) {
			throw new AppError('User not found', 404);
		}

		return {
			code: 200,
			user
		};
	}
}

export { ShowUserService };
