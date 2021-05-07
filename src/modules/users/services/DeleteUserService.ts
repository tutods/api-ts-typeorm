import { AppError } from '@shared/errors/AppError';
import { UserChanged } from '@shared/types/User';
import { BaseUserService } from './BaseUserService';

type Request = {
	id: string;
};

class DeleteUserService extends BaseUserService {
	public async execute({ id }: Request): Promise<UserChanged> {
		const user = await this.repository.findById(id);

		if (!user) {
			throw new AppError('User not found', 404);
		}

		await this.repository.remove(user);

		return {
			code: 200,
			message: 'User removed with success!',
			user: user
		};
	}
}

export { DeleteUserService };
