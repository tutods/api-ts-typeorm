import { RedisOptions } from 'ioredis';

type CacheConfigType = {
	config: {
		redis: RedisOptions;
	};
	driver: string;
};

export { CacheConfigType };
