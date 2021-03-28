import { IAuthEnv, IRedisEnv, IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
import { getTime, getTypeOfTime } from 'src/functions/timeFunctions';
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
	REDIS_PASS
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
