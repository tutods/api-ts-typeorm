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

		// get user info, removing the id and password
		const { id: userId, password: userPwd, ...userData } = user;

		return {
			code: 200,
			message: 'User removed with success!',
			user: userData
		};
	}
}

export { DeleteUserService };
