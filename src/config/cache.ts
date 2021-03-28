import { IRedisConfig } from '@interfaces/IRedisConfig';
import { redisEnv } from './environment';

export const redisConfig: IRedisConfig = {
	config: {
		redis: {
			host: redisEnv.host,
			port: redisEnv.port,
			password: redisEnv.password || undefined
		}
	},
	driver: 'redis'
};
