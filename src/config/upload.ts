import { generateMd5 } from '@functions/generateMd5';
import multer from 'multer';
import path from 'path';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');
const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export const uploadConfig = {
	directory: uploadFolder,
	tmpFolder,
	storage: multer.diskStorage({
		destination: tmpFolder,
		filename(request, file, callback) {
			const extension = path.extname(file.originalname);
			const fileName = generateMd5(`${file.filename}`);

			callback(null, `${fileName}${extension}`);
		}
	})
};
