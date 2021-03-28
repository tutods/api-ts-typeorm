import { authEnv } from '@config/environment';
import { IAuthSession } from '@interfaces/IAuth';
import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { classToClass } from 'class-transformer';
import { sign } from 'jsonwebtoken';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	email: string;
	password: string;
}

class CreateSessionService extends BaseUserService {
	public async execute({ email, password }: IRequest): Promise<IAuthSession> {
		const user = await this.repository.findByEmail(email);

		if (!user) {
			throw new AppError('Email or password incorrect!', 401);
		}

		const confirmed = await compare(password, user.password);

		if (!confirmed) {
			throw new AppError('Email or password incorrect!', 401);
		}

		const token = sign({ user: classToClass(user) }, authEnv.secret, {
			subject: user.id,
			expiresIn: authEnv.expires
		});

		return {
			code: 200,
			message: 'User logged with success!',
			token,
			user
		};
	}
}

export { CreateSessionService };
