import { IAuthEnv, IRedisEnv, IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
import { getTime, getTypeOfTime } from 'src/functions/timeFunctions';
import { IMailEnv } from './../interfaces/IEnvironment';
dotenv.config();

const {
	HOST,
	PORT,
	SALT,
	SECRET,
	EMAIL_EXPIRES,
	EXPIRES,
	REDIS_HOST,
	REDIS_PORT,
	REDIS_PASS,
	MAIL,
	MAIL_PASS,
	MAIL_PORT,
	MAIL_HOST,
	MAIL_SECURE,
	FROM_EMAIL,
	FROM_NAME,
	MAIL_DRIVER
} = process.env;

export const serverEnv: IServerEnv = {
	host: HOST || 'http://localhost',
	port: Number(PORT) || 3333
};

export const redisEnv: IRedisEnv = {
	host: REDIS_HOST || 'localhost',
	port: Number(REDIS_PORT) || 6379,
	password: REDIS_PASS || ''
};

export const authEnv: IAuthEnv = {
	salt: Number(SALT) || 10,
	secret: SECRET || '',
	expires: EXPIRES || '1h',
	emailToken: {
		expires: getTime(EMAIL_EXPIRES || '30m'),
		time: getTypeOfTime(EMAIL_EXPIRES || '30m')
	}
};

export const mailEnv: IMailEnv = {
	driver: MAIL_DRIVER || 'ethereal',
	mail: MAIL || '',
	password: MAIL_PASS || '',
	smtp: {
		host: MAIL_HOST || 'localhost',
		port: Number(MAIL_PORT) || 25,
		secure: MAIL_SECURE === 'true' || false
	},
	from: {
		email: FROM_EMAIL || '',
		name: FROM_NAME || 'API'
	}
};
