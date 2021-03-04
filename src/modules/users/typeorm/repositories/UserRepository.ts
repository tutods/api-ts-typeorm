import { AppError } from '@shared/errors/AppError';
import * as bcryptjs from 'bcryptjs';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
	public async findByName(name: string): Promise<User | undefined> {
		const user = await this.findOne({ name });

		return user;
	}

	public async findById(id: string): Promise<User | undefined> {
		const user = await this.findOne(id);
		return user;
	}

	public async findByEmail(email: string): Promise<User | undefined> {
		const user = await this.findOne({ email });
		return user;
	}

	public async comparePasswords(
		password: string,
		email: string
	): Promise<boolean | undefined> {
		const user = await this.findOne({ email });

		if (!user) {
			throw new AppError('User not found', 404);
		}

		return bcryptjs.compare(password, user.password);
	}
}

export { UserRepository };
