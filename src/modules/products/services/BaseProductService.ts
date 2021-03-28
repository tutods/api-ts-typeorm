import redisCache from '@shared/cache/RedisCache';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class BaseProductService {
	protected repository = getCustomRepository(ProductRepository);
	protected redisCache = redisCache;
}

export { BaseProductService };
