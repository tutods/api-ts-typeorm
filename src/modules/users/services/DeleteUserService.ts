import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	id: string;
}

class DeleteUserService extends BaseUserService {
	public async execute({ id }: IRequest): Promise<IUserChanged> {
		const user = await this.repository.findById(id);

		if (!user) {
			throw new AppError('User not found', 404);
		}

		await this.repository.remove(user);

		return {
			code: 200,
			message: 'User removed with success!',
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
				created_at: user.created_at,
				updated_at: user.update_at
			}
		};
	}
}

export { DeleteUserService };
