import { CacheConfig } from '@shared/types/CacheConfig';
import { redisEnv } from './environment';

export const cacheConfig: CacheConfig = {
	config: {
		redis: {
			host: redisEnv.host,
			port: redisEnv.port,
			password: redisEnv.password || undefined
		}
	},
	driver: 'redis'
};
