import { authEnv } from '@config/environment';
import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { addDays, addHours, addMinutes, isAfter } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import { UserTokenRepository } from '../typeorm/repositories/UserTokenRepository';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	token: string;
	password: string;
}

class ResetPasswordService extends BaseUserService {
	tokenRepository = getCustomRepository(UserTokenRepository);

	public async execute({ token, password }: IRequest): Promise<IUserChanged> {
		const userToken = await this.tokenRepository.findByToken(token);

		if (!userToken) {
			throw new AppError(
				`Your token already expired! Please make a new forgot password request.`,
				400
			);
		}

		const user = await this.repository.findById(userToken.user_id);

		if (!user) {
			throw new AppError(
				`Your token already expired! Please make a new forgot password request.`,
				400
			);
		}

		// Validate if token have more than
		const tokenCreatedAt = userToken.created_at;

		let compareDate: Date;

		const { expires, time } = authEnv.emailToken;

		if (time === 'minutes') {
			compareDate = addMinutes(tokenCreatedAt, expires);
		} else if (authEnv.emailToken.time === 'hours') {
			compareDate = addHours(tokenCreatedAt, expires);
		} else {
			compareDate = addDays(tokenCreatedAt, expires);
		}

		if (isAfter(Date.now(), compareDate)) {
			throw new AppError(
				`Your token already expired! Please make a new forgot password request.`,
				400
			);
		}

		user.password = await hash(password, authEnv.salt);

		await this.repository.save(user);

		const { id, password: userPwd, ...userData } = user;

		return {
			code: 200,
			message: 'User password updated with success!',
			user: userData
		};
	}
}

export { ResetPasswordService };
