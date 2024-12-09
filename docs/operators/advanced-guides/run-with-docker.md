---
title: Run with Docker
description: Installation guide using Docker
lang: en
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

1. **Make sure Docker is available**

```bash
docker -v
```

2. **Pull images**
   
```bash
docker pull overfoundation/kairos:latest
docker pull overfoundation/chronos-beacon-chain:latest
docker pull overfoundation/chronos-validator:latest # if you want to run a validator node.
```

3. **Create directories and Initialize**

```bash
mkdir overprotocol
cd overprotocol
curl -sSL https://raw.githubusercontent.com/overprotocol/docker-scripts/refs/heads/main/subscripts/initialize.sh | bash
```

The `initialize.sh` script will create a directory for the blockchain data and a JWT token for communication between Kairos and Chronos.

The directory structure will look like this:
```plaintext
.
├── datadir
│   ├── consensus
│   └── execution
└── jwttoken
    └── jwt.hex
```

4. **Run the Execution Client**

In the current directory, run `docker run` command. You can refer to the port configuration in [here](/operators/run-a-node#port-and-firewall-configurations-).

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Dolphin', value: 'dolphin'},
  ]}
>
  <TabItem value="mainnet">

```plaintext
docker run -d \
  --name kairos \
  --restart unless-stopped \
  -p 8545:8545 \
  -p 8551:8551 \ 
  -p 30303:30303 \
  -v $(pwd)/datadir/execution:/root/.over \
  -v $(pwd)/jwttoken:/root/jwt:ro \
  overfoundation/kairos:latest \
  --datadir /root/.over \
  --authrpc.addr 0.0.0.0 --authrpc.port 8551 \
  --authrpc.jwtsecret /root/jwt/jwt.hex \
  --authrpc.vhosts "*"
```

  </TabItem>
  <TabItem value="dolphin">

```plaintext
docker run -d \
  --name kairos \
  --restart unless-stopped \
  -p 8545:8545 \
  -p 8551:8551 \ 
  -p 30303:30303 \
  -v $(pwd)/datadir/execution:/root/.over \
  -v $(pwd)/jwttoken:/root/jwt:ro \
  overfoundation/kairos:latest \
  --dolphin
  --datadir /root/.over \
  --authrpc.addr 0.0.0.0 --authrpc.port 8551 \
  --authrpc.jwtsecret /root/jwt/jwt.hex \
  --authrpc.vhosts "*"
```
  
  </TabItem>
</Tabs>


5. **Run the Consensus Client**

You can also refer to the port configuration in [here](/operators/run-a-node#port-and-firewall-configurations-).
   
<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Dolphin', value: 'dolphin'},
  ]}
>
  <TabItem value="mainnet">

```plaintext
docker run -d \
  --name chronos \
  --restart unless-stopped \
  -p 3500:3500 \
  -p 4000:4000 \
  -p 13000:13000/tcp \
  -p 12000:12000/udp \
  -v $(pwd)/datadir/consensus:/data \
  -v $(pwd)/jwttoken:/jwt:ro \
  overfoundation/chronos-beacon-chain:latest \
  --datadir=/data \
  --execution-endpoint=http://localhost:8551 \
  --jwt-secret=/jwt/jwt.hex \
  --accept-terms-of-use \
  --p2p-host-ip=<YOUR_PUBLIC_IP>
```

  </TabItem>
  <TabItem value="dolphin">

```plaintext
docker run -d \
  --name chronos \
  --restart unless-stopped \
  -p 3500:3500 \
  -p 4000:4000 \
  -p 13000:13000/tcp \
  -p 12000:12000/udp \
  -v $(pwd)/datadir/consensus:/data \
  -v $(pwd)/jwttoken:/jwt:ro \
  overfoundation/chronos-beacon-chain:latest \
  --dolphin
  --datadir=/data \
  --execution-endpoint=http://localhost:8551 \
  --jwt-secret=/jwt/jwt.hex \
  --accept-terms-of-use \
  --p2p-host-ip=<YOUR_PUBLIC_IP> \ 
  --genesis-state=./genesis.ssz
```

Download the [Dolphin `genesis.ssz` from Over Foundation](https://storage.googleapis.com/overprotocol-configs/dolphin/genesis.ssz) into your directory.

  
  </TabItem>
</Tabs>

You must replace `<YOUR_PUBLIC_IP>` with your public IP address. If you don't know your public IP address, you can find it using this command:

```sh
curl -s ifconfig.me
```

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Dolphin', value: 'dolphin'},
  ]}
>
  <TabItem value="mainnet">

  To enable checkpoint sync, add the following flag:

  ```sh
  --checkpoint-sync-url=https://mainnet-checkpoint.over.network/
  ```

  </TabItem>
  <TabItem value="dolphin">

  To enable checkpoint sync, remove `--genesis-state` flag and add the following flag:

  ```sh
  --checkpoint-sync-url=https://dolphin-checkpoint.over.network/
  ```
  
  </TabItem>
</Tabs>

:::info
If you are planning to run a validator, **it is strongly advised to use the `--suggested-fee-recipient=<WALLET ADDRESS>` option.** When your validator proposes a block, it will allow you to earn block priority fees, also sometimes called "tips".
:::


---

**Congratulations!** You’re now running an OverProtocol node.
