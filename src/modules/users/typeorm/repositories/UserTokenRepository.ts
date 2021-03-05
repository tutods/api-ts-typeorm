import { EntityRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokenRepository extends Repository<UserToken> {
	public async generateToken(userId: string): Promise<UserToken | undefined> {
		const userToken = await this.create({ user_id: userId });

		await this.save(userToken);

		return userToken;
	}

	public async findByToken(token: string): Promise<UserToken | undefined> {
		const result = await this.findOne({ token });

		return result;
	}
}

export { UserTokenRepository };
