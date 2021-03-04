import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { authEnv } from './../../../config/environment';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

class CreateUserService extends BaseUserService {
	public async execute({
		name,
		email,
		password
	}: IRequest): Promise<IUserChanged> {
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
