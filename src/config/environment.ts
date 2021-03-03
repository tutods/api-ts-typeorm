import { IServerEnv } from '@interfaces/IEnvironment';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

export const serverEnv: IServerEnv = {
	port: Number(PORT) || 3333
};
