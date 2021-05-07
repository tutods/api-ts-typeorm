import { authEnv } from '@config/environment';
import { AppError } from '@shared/errors/AppError';
import { UserChangedType } from '@shared/types/User';
import { hash } from 'bcryptjs';
import { BaseUserService } from './BaseUserService';

type Request = {
	name: string;
	email: string;
	password: string;
};

class CreateUserService extends BaseUserService {
	public async execute({
		name,
		email,
		password
	}: Request): Promise<UserChangedType> {
		const userExists = await this.repository.findByEmail(email);

		if (userExists) {
			throw new AppError(`User already exists!`);
		}

		const hashedPassword = await hash(password, authEnv.salt);

		const user = this.repository.create({
			name,
			email,
			password: hashedPassword
		});

		try {
			await this.repository.save(user);
		} catch (err) {
			throw new AppError(err.message, 400);
		}

		return {
			message: 'User created with success!',
			code: 201,
			user
		};
	}
}

export { CreateUserService };
