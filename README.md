# Elasticache clustermode compatible test

Test to see if [ElastiCache clustermode compatible](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.Redis-RedisCluster.html) (CMC) works with both types of connections with [node-redis v4](https://github.com/redis/node-redis).
This is a basic test to see if the connections work.
Make sure you have a elasticache redis cluster that is in CMC mode.
When you run start it will connect and try to retrieve a key using both `createClient` and `createCluster` constructor.

```
cp .env.example .env
npm i
npm run start
```

## Results

Both `createClient` and `createCluster` are able to connect and retrieve data. You can use `primary endpoint` or `configuration endpoint` once you are in CMC and retrieved your config URL.
