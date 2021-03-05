import { IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
import { getTime, getTypeOfTime } from 'src/functions/timeFunctions';
import { IAuthEnv } from './../interfaces/IEnvironment';
dotenv.config();

const { PORT, SALT, SECRET, EMAIL_EXPIRES, EXPIRES } = process.env;

export const serverEnv: IServerEnv = {
	port: Number(PORT) || 3333
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
