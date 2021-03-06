import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { authEnv } from './../../../config/environment';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	user_id: string;
	name: string;
	email: string;
	password: string;
	oldPassword: string;
}

class UpdateProfileService extends BaseUserService {
	public async execute({
		user_id,
		name,
		email,
		password,
		oldPassword
	}: IRequest): Promise<IUserChanged> {
		const user = await this.repository.findById(user_id);

		if (!user) {
			throw new AppError('User not foud!', 404);
		}

		const userUpdateEmail = await this.repository.findByEmail(email);

		if (userUpdateEmail && userUpdateEmail.id !== user_id) {
			throw new AppError('Already exists one user with this email.', 403);
		}

		if (password && !oldPassword) {
			throw new AppError('Old password is required!', 400);
		} else {
			console.log('ENTROU');
			const compareOldPassword = await compare(password, user.password);

			if (!compareOldPassword) {
				throw new AppError('Old password does not match!', 400);
			}
		}

		user.name = name;
		user.email = email;
		user.password = await hash(password, authEnv.salt);

		await this.repository.save(user);

		const { id, password: userPwd, ...userData } = user;

		return {
			code: 200,
			message: 'Your profile updated with success!',
			user: userData
		};
	}
}

export { UpdateProfileService };
