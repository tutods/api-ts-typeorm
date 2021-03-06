import crypto from 'crypto';

export const generateMd5 = (toHash: string): string => {
	return crypto.createHash('md5').update(toHash).digest('hex');
};
