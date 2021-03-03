import { IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
dotenv.config();

export const serverEnv: IServerEnv = {
	port: Number(process.env) || 3333
};
