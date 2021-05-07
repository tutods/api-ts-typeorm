import { StorageEngine } from 'multer';

type UploadConfigType = {
	driver: 's3' | 'disk';
	directory: string;
	tmpFolder: string;
	multer: {
		storage: StorageEngine;
	};
	config?: {
		aws?: {
			bucket?: string;
		};
	};
};

export { UploadConfigType };
