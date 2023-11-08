# Elasticache clustermode compatible test

Test to see if [ElastiCache clustermode compatible]() (CMC) works with both types of connections with [node-redis v4]().
This is a basic test to see if the connections work.
Make sure you have a elasticache redis cluster that is in CMC mode.
When you run start it will connect and try to retrieve a key using both `createClient` and `createCluster` constructor.

You can use `primary endpoint` or `configuration endpoint` once you are in CMC and retrieved your config URL.

```
cp .env.example .env
npm i
npm run start
```
