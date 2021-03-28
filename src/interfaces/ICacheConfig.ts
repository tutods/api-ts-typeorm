import { RedisOptions } from 'ioredis';

interface ICacheConfig {
	config: {
		redis: RedisOptions;
	};
	driver: string;
}

export { ICacheConfig };
