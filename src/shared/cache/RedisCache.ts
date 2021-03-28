import { cacheConfig } from '@config/cache';
import Redis, { KeyType, Redis as RedisClient } from 'ioredis';

class RedisCache {
	private client: RedisClient;
	private connected = false;

	constructor() {
		if (!this.connected) {
			this.client = new Redis(cacheConfig.config.redis);
			this.connected = true;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export default new RedisCache();
