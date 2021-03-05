import { IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
import { IAuthEnv } from './../interfaces/IEnvironment';
dotenv.config();

const { PORT, SALT, SECRET, EXPIRES } = process.env;

export const serverEnv: IServerEnv = {
	port: Number(PORT) || 3333
};

export const authEnv: IAuthEnv = {
	salt: Number(SALT) || 10,
	secret: SECRET || '',
	expires: EXPIRES || '1h'
};
