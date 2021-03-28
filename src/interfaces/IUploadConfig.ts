import { StorageEngine } from 'multer';

export interface IUploadConfig {
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
}
