import { DiskStorageProvider } from '@config/upload/DiskStorageProvider';
import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import { BaseUserService } from './BaseUserService';
interface IRequest {
	id: string;
	avatar: string;
}

class UpdateUserAvatarService extends BaseUserService {
	public async execute({ avatar, id }: IRequest): Promise<IUserChanged> {
		const storageProvider = new DiskStorageProvider();

		const user = await this.repository.findById(id);

		if (!user) {
			throw new AppError('User not found!', 404);
		}

		if (user.avatar) {
			await storageProvider.deleteFile(user.avatar);
		}

		const fileName = await storageProvider.saveFile(avatar);
		user.avatar = fileName;

		await this.repository.save(user);

		return {
			message: 'User Avatar updated with success!',
			code: 200,
			user: user
		};
	}
}

export { UpdateUserAvatarService };
