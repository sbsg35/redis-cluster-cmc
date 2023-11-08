import { createClient, createCluster } from "redis";
require("dotenv").config();

const password = process.env.CACHE_PASSWORD;
// use this when CMD
const host = process.env.CACHE_HOST;
const port = 6379;

const clusterMode = async () => {
  console.log("===CLUSTER-CONNECTION-START====");
  const cluster = createCluster({
    rootNodes: [
      {
        socket: {
          host,
          port,
        },
      },
    ],
    defaults: {
      password,
      socket: {
        tls: true,
        checkServerIdentity: () => undefined,
      },
    },
  });

  await cluster.connect();

  await cluster.setEx("name123", 60, "raj123");
  const res = await cluster.get("name123");
  console.log(res);

  await cluster.quit();
  console.log("===CLUSTER-CONNECTION-END====\n\n");
};

export const clientMode = async () => {
  console.log("===CLIENT-CONNECTION-START====");

  const client = createClient({
    password,
    socket: {
      host,
      port,
      tls: true,
      checkServerIdentity: () => undefined,
    },
  });

  await client.connect();

  const res = await client.get("name123");
  console.log(res);

  await client.quit();
  console.log("===CLIENT-CONNECTION-END====\n\n");
};

const start = async () => {
  await clusterMode();
  await clientMode();
};

start();
