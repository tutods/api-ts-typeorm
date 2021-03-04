import { IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
import { IAuthEnv, IDatabaseEnv } from './../interfaces/IEnvironment';
dotenv.config();

const {
	PORT,
	DB_HOST,
	DB_PORT,
	DB_USER,
	DB_USER_PWD,
	DB,
	SALT,
	SECRET
} = process.env;

export const serverEnv: IServerEnv = {
	port: Number(PORT) || 3333
};

export const databaseEnv: IDatabaseEnv = {
	host: DB_HOST || 'localhost',
	port: Number(DB_PORT) || 5432,
	user: {
		username: DB_USER || 'postgres',
		password: DB_USER_PWD || ''
	},
	database: DB || 'api'
};

export const authEnv: IAuthEnv = {
	salt: Number(SALT) || 10,
	secret: SECRET || ''
};
