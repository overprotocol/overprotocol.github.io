---
title: Run a Node
description: Setting up an OverProtocol node allows you to directly contribute to the network’s decentralization and security. This guide provides clear steps for users of all experience levels, ensuring that anyone can start running a node with confidence.
lang: en
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Join the Network Revolution 🚀

Running an OverProtocol node isn’t just about contributing to a blockchain—it’s about becoming part of a decentralized movement that’s reshaping the future of technology. Whether you’re a beginner or a seasoned tech enthusiast, this guide will help you set up your node and start making an impact.

---

## Ready, Set, Node! 🖥️

Running an OverProtocol node is your gateway to joining a decentralized, secure, and inclusive blockchain network. Choose the setup method that works best for you, whether you're a beginner looking for simplicity or an expert seeking full control.

### Start with OverScape (Beginner-Friendly 🌟)

OverScape is designed to make node setup as easy as possible—perfect for first-timers or those who prefer a no-fuss experience.

1. **Download OverScape**
  
  Head over to the [OverScape website](https://over.network/overscape) to get the installation package.
2. **Install the Software**
  
  Follow the on-screen instructions to install OverScape. This includes agreeing to terms, selecting an installation directory, and setting up your firewall to allow OverScape to connect to the network.
3. **Launch and Sync**
  
  Open OverScape, and it will automatically start syncing with the OverProtocol blockchain, downloading necessary data.
4. **Configure Your Node**
  
  Adjust basic settings through the intuitive interface. Advanced settings are also available for more customization if needed.

### Build from Source (Advanced 🛠️)

For experienced users, building the node software from source provides maximum flexibility and customization.

1. **Clone the Repositories**

  Access the [official OverProtocol GitHub repository](https://github.com/overprotocol) and clone the following:
    - **[Kairos](https://github.com/overprotocol/kairos)**: Execution client for processing transactions and maintaining the blockchain state.
    - **[Chronos](https://github.com/overprotocol/chronos)**: Consensus client for achieving network consensus.
3. **Compile the Source Code**

  Navigate to the cloned directory in your command line tool and run the build commands specified in the build documentation.
4. **Configure Your Node**
  
  After building, configure your node’s settings, including network options and security measures. This may involve editing configuration files manually.

  :::info
  If you are planning to run a validator, **it is strongly advised to use the `--suggested-fee-recipient=<WALLET ADDRESS>` option.** When your validator proposes a block, it will allow you to earn block priority fees, also sometimes called "tips".
  :::
5. **Run the Node**
  
  Execute the node software. You might need to use command line options to start it with specific parameters tailored to your needs.

### Run with Binaries (Intermediate ⚙️)

Precompiled binaries provide a balance between ease of use and flexibility, allowing you to set up your node quickly without compiling from source.

1. **Prepare Your Environment**

  Create a directory named `overprotocol` with two subfolders: `execution` and `consensus`.

  ```plaintext
  overprotocol
  ├── consensus
  └── execution
  ```
  
2. **Download Binaries**

  Select the execution client and the consensus client binary zip files for your operating system from the links below and download it to your local machine and extract it to corresponding directory above.

  | Operating System | Kairos (Execution Client) | Chronos (Consensus Client) |
  | ---------------- | ------------------------- | -------------------------- |
  | Linux x64        | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_linux_amd64.zip)   | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_linux_amd64.zip) |
  | MacOS X (Apple)  | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_darwin_arm64.zip)  | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_osx_arm64.zip)   |
  | MacOS X (Intel)  | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_darwin_amd64.zip)  | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_osx_amd64.zip)   |
  | Windows          | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_windows_amd64.zip) | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_windows.zip)     |

  Then your binary directory structure should look like this:
  ```plaintext
  overprotocol
  ├── consensus
  │   ├── beacon-chain
  │   ├── enr-calculator
  │   ├── prysmctl
  │   └── validator
  └── execution
      ├── bootnode
      └── geth
    ```

3. **Run the Execution Client**

  Navigate to the execution folder and start the client:

  <Tabs
    groupId="network"
    defaultValue="mainnet"
    values={[
      {label: 'Mainnet', value: 'mainnet'},
      {label: 'Dolphin', value: 'dolphin'},
    ]}
  >
    <TabItem value="mainnet">

    ```sh
    mkdir data
    ./geth --datadir=./data
    ```

    </TabItem>
    <TabItem value="dolphin">

    ```sh
    mkdir data
    ./geth --dolphin --datadir=./data
    ```

    </TabItem>
  </Tabs>

4. **Run the Consensus Client**

  There are two main ways to sync a consensus node: from genesis, and from a checkpoint. It is considerably faster to sync from a checkpoint. In the following examples, we'll use the checkpoint sync endpoint provided by Over Foundation.
  
  In the `consensus` folder, start the client using a checkpoint sync for faster setup:

  <Tabs
    groupId="network"
    defaultValue="mainnet"
    values={[
      {label: 'Mainnet', value: 'mainnet'},
      {label: 'Dolphin', value: 'dolphin'},
    ]}
  >
    <TabItem value="mainnet">

    ```sh
    mkdir data
    ./beacon-chain --datadir=./data --jwt-secret ../execution/data/geth/jwtsecret --checkpoint-sync-url="https://mainnet-checkpoint.over.network"
    ```

    Syncing from a checkpoint usually takes a couple of minutes.

    If you wish to sync from genesis, you need to remove `--checkpoint-sync-url` flag from the previous command. Syncing from genesis usually takes a couple of hours, but it can take longer depending on your network and hardware specs.

    </TabItem>
    <TabItem value="dolphin">

    ```sh
    mkdir data
    ./beacon-chain --dolphin --datadir=./data --jwt-secret ../execution/data/geth/jwtsecret --checkpoint-sync-url="https://dolphin-checkpoint.over.network"
    ```

    Syncing from a checkpoint usually takes a couple of minutes.

    If you wish to sync from genesis, you need to remove `--checkpoint-sync-url` flag from the previous command and add the `--genesis-state=genesis.ssz` flag. Syncing from genesis usually takes a couple of hours, but it can take longer depending on your network and hardware specs. Download the [Dolphin genesis.ssz from Over Foundation](https://storage.googleapis.com/overprotocol-configs/dolphin/genesis.ssz) into your consensus directory.

    </TabItem>
  </Tabs>

  :::info
  If you are planning to run a validator, **it is strongly advised to use the `--suggested-fee-recipient=<WALLET ADDRESS>` option.** When your validator proposes a block, it will allow you to earn block priority fees, also sometimes called "tips".
  :::

  **Congratulations!** you’re now running a full OverProtocol node.

---

### Choose the Right Method for You

- **New to Nodes?** 👉 Start with OverScape for a simple, guided experience.
- **Want Control?** 👉 Use binaries to customize your setup while saving time.
- **Advanced User?** 👉 Build from source to fully optimize and personalize your node.

Once your node is running and synced, check out [how to stake and validate](/operators/operate-validators) to take the next step in securing the OverProtocol network.

---

## Network Configurations 🛜

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Testnet', value: 'testnet'},
  ]}
>
  <TabItem value="mainnet">

| Key                | Value                                |
| ------------------ | ------------------------------------ |
| Network            | OverProtocol Mainnet                 |
| RPC URL            | https://rpc.overprotocol.com/ |
| Chain ID           | 54176                                |
| Currency symbol    | OVER                                 |
| Block Explorer URL | https://scan.over.network/           |

  </TabItem>

  <TabItem value="testnet">

:::tip
When working with OverProtocol, especially in a testnet environment, it's important to note that testnet configurations and details may change at any time. This variability is typical of test environments, which are often updated or reset to test new features and improvements in the blockchain protocol.
:::

The Dolphin testnet operates with the goal of providing an environment identical to that of the mainnet. Additionally, this testnet serves the role of applying and testing updates before they are implemented on the mainnet.

| Key                | Value                                 |
| ------------------ | ------------------------------------- |
| Network            | OverProtocol Dolphin Testnet          |
| RPC URL            | https://rpc.dolphin.overprotocol.com/ |
| Chain ID           | 541764                                |
| Currency symbol    | OVER                                  |
| Block Explorer URL | https://dolphin-scan.over.network/    |

  </TabItem>
</Tabs>

---

## Port and Firewall Configurations 🧱

Proper port and firewall configurations are essential to ensure your OverProtocol node operates smoothly and maintains reliable connections with peers. If you’ve followed the default setup instructions, your node will use the following network settings. Incorrect firewall settings are a common cause of connection issues, so double-check these configurations for optimal performance.


| Port/protocol   | Firewall rule                       | Reason/caveats                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `8545/TCP`      | Block all traffic.                  | This is the JSON-RPC port for your execution node's Query API. You (and apps) can use this port to check execution node status, query execution-layer chain data, and even submit transactions. This port generally shouldn't be exposed to the outside world. |
| `3500/TCP`      | Block all traffic.                  | This is the JSON-RPC port for your beacon node's Query API. You (and apps) can use this port to check beacon node status and query consensus-layer chain data. This port generally shouldn't be exposed to the outside world.                                  |
| `8551/TCP`      | Block all traffic.                  | Your beacon node connects to your execution node's Engine API using this port. Inbound and outbound traffic should be allowed through this port only if your local beacon node is connecting to a remote execution node.                                       |
| `4000/TCP`      | Block all traffic.                  | Your validator uses this port to connect to your beacon node via gRPC. Inbound and outbound traffic should be allowed through this port only if your local validator is connecting to a remote beacon node.                                                    |
| `*/UDP+TCP`     | Allow outbound traffic.             | To discover peers, Chronos' beacon node dials out through random ports. Allowing outbound TCP/UDP traffic from any port will help Chronos find peers.                                                                                                          |
| `13000/TCP`     | Allow inbound and outbound traffic. | After we discover peers, we dial them through this port to establish an ongoing connection for libp2p and through which all gossip/p2p request and responses will flow.                                                                                        |
| `12000/UDP`     | Allow inbound and outbound traffic. | Your beacon node exposes this UDP port so that other Over nodes can discover your node, request chain data, and provide chain data.                                                                                                                            |
| `30303/TCP+UDP` | Allow inbound and outbound traffic. | `30303/TCP` is your execution node's listener port, while `30303/UDP` is its discovery port. This rule lets your execution node connect to other peers.                                                                                                        |

<br />

By following these guidelines, you’ll ensure your OverProtocol node runs securely and efficiently. If you encounter any issues, check the firewall configuration first or reach out to the [OverProtocol community](https://discord.gg/overprotocol) for support.

---

## Node Types in OverProtocol

OverProtocol offers multiple node types, each serving specific roles within the network. Understanding these types will help you decide how to best participate based on your goals and resources.

### 1. Full Nodes
Full nodes are the backbone of the network, used primarily for querying data and interacting with the blockchain. They:

- Maintain essential blockchain data to validate new transactions and blocks.
- Ensure the network remains decentralized and accessible.
- Are the default setup for most users when creating a node.

**Ideal for**:

- Users looking for a straightforward way to support the network.
- Those interested in accessing blockchain data or running decentralized applications (dApps).

### 2. Archive Nodes
Archive nodes store the entire state of the blockchain from its genesis, preserving every transaction and historical state. These nodes:

- Require significant disk space and computational power.
- Are typically used for advanced use cases like deep blockchain analytics and historical data retrieval.

**Ideal for**:

- Developers and researchers needing access to full historical data.
- Enterprises requiring comprehensive blockchain records.

### 3. Validator Nodes
Validator nodes are critical for securing the network and maintaining its integrity. They:

- Propose and vote on blocks as part of OverProtocol’s consensus mechanism.
- Require staking of OVER tokens to participate in validation and earn rewards.
- Play a pivotal role in decentralization and trust within the network.

**Ideal for**:

- Users committed to actively securing the network.
- Those with resources to stake OVER and operate a high-uptime node.

---

### Choosing the Right Node Type
Each node type contributes to OverProtocol in unique ways and comes with different levels of responsibility and resource requirements. Consider:

- **Full Nodes**: For general network participation and dApp interaction.
- **Archive Nodes**: For advanced analytics and historical data needs.
- **Validator Nodes**: For securing the blockchain and earning rewards.

By selecting the node type that aligns with your goals, you’ll play an essential role in supporting and engaging with the OverProtocol ecosystem.

## Synchronization Modes

The synchronization process is crucial for ensuring that your OverProtocol node stays up-to-date with the latest blockchain state. This involves downloading data from peers, verifying its integrity, and building a local blockchain database. Given OverProtocol’s layered architecture, each layer employs distinct strategies to manage data effectively.

These modes offer different trade-offs between speed, disk usage, bandwidth, and security. The choice of sync mode depends on your hardware, network capacity, and operational goals.

---

### Execution Layer Sync Modes

In the execution layer, there are two primary synchronization modes to **become a full node: Full Sync and Snap Sync**. OverScape users can easily select the execution sync modes, upon blockchain data download.

**Full Sync**:

- This mode involves downloading all blocks, including headers, transactions, and receipts, from the genesis block onward.
- It generates the state of the blockchain incrementally by executing every transactions.
- This method minimizes trust as it verifies every transaction independently, providing the highest level of security.
- Due to the comprehensive nature of the data processing involved, this sync can take days, depending on the number of transactions in the blockchain’s history.

```sh
$ geth --syncmode full
```

**Snap Sync**:

- This mode starts from a more recent "trusted" checkpoint rather than the genesis block.
- This mode leverages periodic snapshots of the blockchain state, allowing the node to regenerate necessary state data on demand rather than maintaining a complete historical state database.
- It is the fastest synchronization strategy and is the default setting on networks.
- This mode significantly reduces disk usage and network bandwidth requirements.

```sh
$ geth --syncmode snap
```

**Becoming an Archive Node**:

There is an option to become an archive node. Currently, there is no option for OverScape users to become an archive node. Client software runners could become an archive node by running the execution client with the following tag:

```sh
$ geth --gcmode archive
```

If the combination is `geth --syncmode full --gcmode archive` then all blockchain data from the genesis block is written down in the database. If the combination is `geth --syncmode snap --gcmode archive` the blockchain data from the trusted checkpoint.

<!-- **Choose the Number of Epochs to Store**:

By default the OverProtocol client runs with minimum storage usage. You can change the epochLimit flag to change how many checkpoints to store.

```sh
$ geth --epochLimit X
```
This stores checkpoints states until X epoch to the past (default is set to minimum, which is 2).

```sh
$ geth --epochLimit 0
```
This stores all inactive data in addition to active and staged data.

Normally default setting is enough, but saving previous checkpoints can be usefull when you want to retrieve states from preivous epochs. -->

### Consensus Layer Sync Modes

There are two ways to sync the consensus layer: full sync, and checkpoint sync. OverScape users can only choose to sync consensus layer through checkpoint sync as it is set by default. The chronos client software runners can choose between the two sync modes.

**Full sync**:

- This sync mode downloads the beacon chain data, if it has lower head information than its peers.
- When bootstrapping a node, it has no beacon chain data, so it downloads all the beacon chain data starting from the genesis.

**Checkpoint sync (Full sync from checkpoint)**:

- This mode enhances the user experience by allowing consensus layer to sync from a recent weak subjectivity checkpoint instead of from the genesis block.
- This approach drastically reduces the full sync time.
- The source of the checkpoint data is crucial and should be chosen with care, as the node will inherently trust the third party providing the data.
- Append the following tags to enable the checkpoint sync

```sh
$ beacon-chain --checkpoint-sync-url value
```

---

### Choosing the Right Mode

| Sync Mode | Speed | Disk Usage | Security | Recommended For |
| --------- | ----- | ---------- | -------- | --------------- |
| Full Sync (Execution) | Slow  | High       | Highest  | Security-focused users. |
| Snap Sync (Execution) | Fast  | Moderate   | High     | General users and OverScape. |
| Full Sync (Consensus) | Slow | High     | Highest  | Advanced users with specific needs. |
| Checkpoint Sync (Consensus) | Fast | Low   | Moderate | Default for quick setup. |

---

## What's Next

Once your node is up, running, and synced with the OverProtocol network, the next step is to take an active role in securing the blockchain by [registering and operating validators](./operate-validators). Validators play a critical role in the consensus process, contributing to the network’s security and stability.

Becoming a validator lets you directly contribute to OverProtocol’s decentralization while earning staking rewards. Let’s build the future of blockchain—together! 🌟
