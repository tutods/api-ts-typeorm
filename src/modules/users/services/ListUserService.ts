import { IUserList } from '@interfaces/IUser';
import { BaseUserService } from './BaseUserService';

class ListUserService extends BaseUserService {
	public async execute(): Promise<IUserList> {
		const users = await this.repository.find();

		return {
			code: 200,
			count: users.length,
			users
		};
	}
}

export { ListUserService };
