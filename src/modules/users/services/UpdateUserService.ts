import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	id: string;
	name: string;
	email: string;
	password: string;
}

class UpdateUserService extends BaseUserService {
	public async execute({
		id,
		name,
		email,
		password
	}: IRequest): Promise<IUserChanged> {
		const user = await this.repository.findById(id);

		if (!user) {
			throw new AppError('User not found', 404);
		}

		user.name = name;
		user.email = email;
		user.password = password;

		try {
			await this.repository.save(user);
		} catch (err) {
			throw new AppError(err.message, 400);
		}

		return {
			message: 'User updated with success!',
			code: 201,
			user
		};
	}
}

export { UpdateUserService };
