import { uploadConfig } from '@config/upload';
import { IUserChanged } from '@interfaces/IUser';
import { AppError } from '@shared/errors/AppError';
import fs from 'fs';
import path from 'path';
import { BaseUserService } from './BaseUserService';

interface IRequest {
	id: string;
	avatar: string;
}

class UpdateUserAvatarService extends BaseUserService {
	public async execute({ avatar, id }: IRequest): Promise<IUserChanged> {
		const user = await this.repository.findById(id);

		if (!user) {
			throw new AppError('User not found!', 404);
		}

		if (user.avatar) {
			const filePath = path.join(uploadConfig.directory, user.avatar);
			const fileExists = await fs.promises.stat(filePath);

			if (fileExists) {
				await fs.promises.unlink(filePath);
			}
		}

		user.avatar = avatar;

		await this.repository.save(user);

		const { password, ...otherInfo } = user;

		return {
			message: 'User Avatar updated with success!',
			code: 200,
			user: otherInfo
		};
	}
}

export { UpdateUserAvatarService };
