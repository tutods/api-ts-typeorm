import { cacheConfig } from '@config/cache';
import Redis, { KeyType, Redis as RedisClient } from 'ioredis';

class RedisCache {
	private client: RedisClient;

	constructor() {
		this.client = new Redis(cacheConfig.config.redis);
	}

	public async save(key: KeyType, value: any): Promise<void> {
		await this.client.set(key, JSON.stringify(value));
	}

	public async recover<T>(key: KeyType): Promise<T | null> {
		const data = await this.client.get(key);

		if (!data) {
			return null;
		}

		return JSON.parse(data) as T;
	}

	public async invalidate(key: KeyType): Promise<void> {
		await this.client.del(key);
	}
}

export { RedisCache };
