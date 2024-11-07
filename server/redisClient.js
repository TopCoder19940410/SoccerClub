import redis from 'redis';

const redisClient = redis.createClient();

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

(async () => {
    await redisClient.connect();
    console.log('Connected to Redis');
})();

export default redisClient;
