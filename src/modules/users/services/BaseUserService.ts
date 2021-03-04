import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/UserRepository';

class BaseUserService {
	protected repository = getCustomRepository(UserRepository);
}

export { BaseUserService };
