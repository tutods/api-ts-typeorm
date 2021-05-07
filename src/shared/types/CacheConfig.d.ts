import { RedisOptions } from 'ioredis';

type CacheConfig = {
	config: {
		redis: RedisOptions;
	};
	driver: string;
};

export { CacheConfig };
