import { UserList } from '@shared/types/User';
import { BaseUserService } from './BaseUserService';

class ListUserService extends BaseUserService {
	public async execute(): Promise<UserList> {
		const users = await this.repository.find();

		return {
			code: 200,
			count: users.length,
			users
		};
	}
}

export { ListUserService };
