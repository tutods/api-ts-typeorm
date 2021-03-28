import { cacheConfig } from '@config/cache';
import Redis, { KeyType, Redis as RedisClient, ValueType } from 'ioredis';

class RedisCache {
	private client: RedisClient;

	constructor() {
		this.client = new Redis(cacheConfig.config.redis);
	}

	public async save(key: KeyType, value: ValueType): Promise<void> {
		await this.client.set(key, JSON.stringify(value));
	}

	public async recover<T>(key: string): Promise<T | null> {
		const result = await this.client.get(key);

		return result;
	}

	// public async invalidate(key: string): Promise<void> {}
}

export { RedisCache };
