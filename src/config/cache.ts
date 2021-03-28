import { ICacheConfig } from '@interfaces/ICacheConfig';
import { redisEnv } from './environment';

export const cacheConfig: ICacheConfig = {
	config: {
		redis: {
			host: redisEnv.host,
			port: redisEnv.port,
			password: redisEnv.password || undefined
		}
	},
	driver: 'redis'
};
