import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserTokenRepository } from '../typeorm/repositories/UserTokenRepository';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	email: string;
}

class SendForgotPasswordService extends BaseUserService {
	tokenRepository = getCustomRepository(UserTokenRepository);

	public async execute({ email }: IRequest): Promise<void> {
		const user = await this.repository.findByEmail(email);

		if (!user) {
			throw new AppError(`Email incorrect or not exists!`, 400);
		}

		const userToken = await this.tokenRepository.generateToken(user.id);

		console.log(userToken);
	}
}

export { SendForgotPasswordService };
