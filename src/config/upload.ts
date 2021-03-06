import multer from 'multer';
import path from 'path';
import { generateMd5 } from './../functions/generateMd5';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export const uploadConfig = {
	directory: uploadFolder,
	storage: multer.diskStorage({
		destination: uploadFolder,
		filename(request, file, callback) {
			const extension = path.extname(file.originalname);
			const fileName = generateMd5(`${file.filename}`);

			callback(null, `${fileName}${extension}`);
		}
	})
};
