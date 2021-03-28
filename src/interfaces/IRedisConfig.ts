import { RedisOptions } from 'ioredis';

interface IRedisConfig {
	config: {
		redis: RedisOptions;
	};
	driver: string;
}

export { IRedisConfig };
