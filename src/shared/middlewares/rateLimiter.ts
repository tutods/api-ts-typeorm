import { redisEnv } from '@config/environment';
import { loggingWarn } from '@utils/logging';
import { NextFunction, Request, Response } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import redis from 'redis';

// Redis Client with ENV data
const redisClient = redis.createClient({
	host: redisEnv.host,
	port: redisEnv.port,
	password: redisEnv.password || undefined
});

// 5 requests per 1 second to same ip
const limiter = new RateLimiterRedis({
	storeClient: redisClient,
	keyPrefix: 'ratelimit',
	points: 5, // 5 requests
	duration: 1, // per 1 second
	blockDuration: 30 // block for 30 seconds
});

const rateLimiter = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		await limiter.consume(req.ip);
		next();
	} catch (err) {
		loggingWarn(`Too many requests from: ${req.ip}`);

		res.status(429).json({
			code: 429,
			message: 'Too many requests! Try again after 30 seconds.'
		});
	}
};

export { rateLimiter };
