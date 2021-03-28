import fs from 'fs';
import path from 'path';

class DiskStorageProvider {
	private destinationPath = path.resolve(
		__dirname,
		'..',
		'..',
		'..',
		'uploads'
	);

	private tmpFolder = path.resolve(__dirname, '..', '..', '..', 'temp');

	public async saveFile(file: string): Promise<string> {
		await fs.promises.rename(
			path.resolve(this.tmpFolder, file),
			path.resolve(this.destinationPath, file)
		);

		return file;
	}

	public async deleteFile(file: string): Promise<void> {
		const filePath = path.resolve(this.destinationPath, file);

		try {
			// Validate if file exists
			await fs.promises.stat(filePath);
		} catch (err) {
			return;
		}

		// Delete file
		await fs.promises.unlink(filePath);
	}
}

export { DiskStorageProvider };
