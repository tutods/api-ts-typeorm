import { AppError } from '@shared/errors/AppError';
import { UserShow } from '@shared/types/User';
import { BaseUserService } from './BaseUserService';

type Request = {
	id: string;
};

class ShowUserService extends BaseUserService {
	public async execute({ id }: Request): Promise<UserShow> {
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
