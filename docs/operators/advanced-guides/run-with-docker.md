---
title: Run with Docker
description: Installation guide using Docker
lang: en
---

As both clients must communicate with each other via the Engine API, we highly recommend running with [Docker Compose](https://docs.docker.com/compose/)
as it eliminates the need to manage container networking manually.

We provide an official repository with useful scripts: [overprotocol/docker-scripts](https://github.com/overprotocol/docker-scripts). 
Here is a brief guide to run a **full Over Protocol node**. For running a validator node, please refer to the repository.

1. **Clone docker-scripts repo**

```bash
git clone https://github.com/overprotocol/docker-scripts.git
mv docker-scripts overprotocol
cd overprotocol
```

2. **Check if Docker is available**

```bash
docker -v
```

3. **Export your public IP for discovery**

```bash
export PUBLIC_IP=$(curl -s ifconfig.me)
echo $PUBLIC_IP
```

4. **Initialize data directory and JWT token**

```bash
make init
```

5. **Run a full node**

```bash
docker compose -f mainnet.yml up -d
```

6. **Health check your node**

```bash
curl 127.0.0.1:3500/eth/v1/node/syncing | jq
```

This will fetch the current status of the consensus client. If `sync_distance` is equal to `0`, this means your node is well synchronized.

```json
{
  "data": {
    "head_slot": "22916",
    "sync_distance": "0",
    "is_syncing": false,
    "is_optimistic": false,
    "el_offline": false
  }
}
```

For debugging purposes, you can check the logs with the following commands:

```bash
docker logs kairos -f  # To inspect the execution client
docker logs chronos -f # To inspect the consensus client
```

---

**Congratulations!** You’re now running an OverProtocol node.
