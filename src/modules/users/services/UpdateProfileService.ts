import { authEnv } from '@config/environment';
import { AppError } from '@shared/errors/AppError';
import { UserChanged } from '@shared/types/User';
import { compare, hash } from 'bcryptjs';
import { BaseUserService } from './BaseUserService';

type Request = {
	userId: string;
	name: string;
	email: string;
	password?: string;
	oldPassword?: string;
};

class UpdateProfileService extends BaseUserService {
	public async execute({
		userId,
		name,
		email,
		password,
		oldPassword
	}: Request): Promise<UserChanged> {
		const user = await this.repository.findById(userId);

		if (!user) {
			throw new AppError('User not foud!', 404);
		}

		const userUpdateEmail = await this.repository.findByEmail(email);

		if (userUpdateEmail && userUpdateEmail.id !== userId) {
			throw new AppError('Already exists one user with this email.', 403);
		}

		if (password && !oldPassword) {
			throw new AppError('Old password is required!', 403);
		}

		if (password && oldPassword) {
			const compareOldPassword = await compare(
				oldPassword,
				user.password
			);

			if (!compareOldPassword) {
				throw new AppError('Old password does not match!', 403);
			}

			user.password = await hash(password, authEnv.salt);
		}

		user.name = name;
		user.email = email;

		await this.repository.save(user);

		return {
			code: 200,
			message: 'Your profile updated with success!',
			user
		};
	}
}

export { UpdateProfileService };
