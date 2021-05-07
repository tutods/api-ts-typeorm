import { CacheConfigType } from '@shared/types/CacheConfig';
import { redisEnv } from './environment';

export const cacheConfig: CacheConfigType = {
	config: {
		redis: {
			host: redisEnv.host,
			port: redisEnv.port,
			password: redisEnv.password || undefined
		}
	},
	driver: 'redis'
};
