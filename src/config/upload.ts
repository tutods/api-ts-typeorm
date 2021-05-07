import { generateMd5 } from '@functions/generateMd5';
import { UploadConfigType } from '@shared/types/UploadConfig';

import multer from 'multer';
import path from 'path';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');
const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export const uploadConfig: UploadConfigType = {
	driver: 'disk',
	directory: uploadFolder,
	tmpFolder,
	multer: {
		storage: multer.diskStorage({
			destination: tmpFolder,
			filename: function (req, file, cb) {
				const extension = path.extname(file.originalname);
				const fileName = generateMd5(`${file.originalname}`);

				cb(null, `${fileName}${extension}`);
			}
		})
	}
};
