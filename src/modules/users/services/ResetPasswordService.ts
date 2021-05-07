import { authEnv } from '@config/environment';
import { AppError } from '@shared/errors/AppError';
import { UserChanged } from '@shared/types/User';
import { hash } from 'bcryptjs';
import { addDays, addHours, addMinutes, isAfter } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import { UserTokenRepository } from '../typeorm/repositories/UserTokenRepository';
import { BaseUserService } from './BaseUserService';

type Request = {
	token: string;
	password: string;
};

class ResetPasswordService extends BaseUserService {
	tokenRepository = getCustomRepository(UserTokenRepository);

	public async execute({ token, password }: Request): Promise<UserChanged> {
		const userToken = await this.tokenRepository.findByToken(token);

		if (!userToken) {
			throw new AppError(
				`Your token already expired! Please make a new forgot password request.`,
				403
			);
		}

		const user = await this.repository.findById(userToken.user_id);

		if (!user) {
			throw new AppError(
				`Your token already expired! Please make a new forgot password request.`,
				403
			);
		}

		// Validate if token have expired
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
				403
			);
		}

		user.password = await hash(password, authEnv.salt);

		await this.repository.save(user);

		return {
			code: 200,
			message: 'User password updated with success!',
			user
		};
	}
}

export { ResetPasswordService };
