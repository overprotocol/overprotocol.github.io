---
title: Run a Node
description: A description for how to run a node.
lang: en
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you've set up your hardware in either a local or cloud environment, the next step is to download and run the node client software, enabling you to join the blockchain network.

## Setting up a Node

There are various methods to set up a node in the OverProtocol network, ranging from [user-friendly approaches](#start-with-overnode) for beginners to more [advanced, manual configurations](#build-from-source) for experienced users seeking customized setups. You can checkout network configurations for mainnet and testnets [here](#network-configurations).

### Start with OverNode

[OverNode](https://over.network/overnode) offers a streamlined, user-friendly way to set up your node with minimal technical hassle. This method is ideal for those who prefer a straightforward approach or are new to running nodes. Here’s how to get started:

1. **Download OverNode**: Visit the official OverNode website or trusted source to download the OverNode installation package.
2. **Install the Software**: Follow the on-screen instructions to install the software on your machine. This will involve agreeing to the terms, selecting an installation directory, and configuring your firewall to allow the application to communicate on the network.
3. **Launch and Sync**: Once installed, launch the application. It will automatically begin syncing with the OverProtocol blockchain, downloading the necessary blockchain data.
4. **Node Configuration**: Through OverNode’s interface, you can easily configure basic settings. Advanced settings can also be accessed for more tailored operations.

### Build from Source

For advanced users who prefer a hands-on, customized approach, building your node from source allows for maximum customization and optimization. Here’s how you can build from source:

1. **Clone Client Repository**:
   You first have to clone the the execution client, and the consensus client software of OverProtocol.
   Access the [official OverProtocol GitHub repository](https://github.com/overprotocol) and clone it to your local machine.

   **_OverProtocol Execution Client [[Kairos](https://github.com/overprotocol/kairos)]_**: The execution layer client handles the processing of transactions and the maintenance of the blockchain state. It must be fully synchronized with the OverProtocol network.

   **_OverProtocol Consensus Client [[Chronos](https://github.com/overprotocol/chronos)]_**: This consensus client works in tandem with the execution layer to achieve network consensus on the current state of the blockchain. Synchronizing this client is crucial for participating in network validation.

2. **Prerequisites**: Make sure all required dependencies and development tools are installed on your machine. These are usually listed in the repository's README.

3. **Compile the Source Code**: Navigate to the cloned directory in your command line tool and run the build commands specified in the build documentation.

4. **Configure Your Node**: After building, configure your node’s settings, including network options and security measures. This may involve editing configuration files manually.

5. **Run the Node**: Execute the node software. You might need to use command line options to start it with specific parameters tailored to your needs.

### Run with Binary

For users who want a balance between ease of setup and control, running a node with pre-compiled binaries is an excellent option. This method allows you to quickly set up a node without the need for compilation while still providing flexibility for configuration. Here's how you can run a node using binaries:

1. **Review Prerequisites and Best Practices**

   | Type                      | Benefits                                                                                                                                          | Recommended Requirements                                                                                                                                                                                                                                                                                                                                   |
   | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | **Execution + Consensus** | - Contributes to the security of Over ecosystem.<br /> - Lets you access the Over network directly without having to trust a third party service. | - **Software:** Execution node client, consensus node client (instructions for clients below)<br />  - **OS:** 64-bit Linux, Mac OS X 10.14+, Windows 10+ 64-bit<br />  - **CPU:** Fast CPU with 4 or more cores<br />  - **Memory:** 16GB RAM or more<br />  - **Storage:** SSD with at least 128GB free space<br />  - **Network:** 25+ MBit/s bandwidth |
   | **Validator**             | - Lets you stake OVER, propose + validate blocks, earn staking rewards + transaction fee tips.                                                    | - Everything above, plus...<br />  - **Software:** Validator client<br />  - **Hardware:** (Recommended) A new machine that has never been connected to the internet that you can use to securely generate your mnemonic phrase and keypair<br />  - **256 OVER** (Mainnet)<br />  - **256 testnet OVER** (Testnets)                                       |

   **Best practices**
   - **If you're staking OVER as a validator, try this guide on a testnet first, _then_ mainnet.**
   - **Keep things simple.** This guidance assumes all client software will run on a single machine.
   - **Join the community** - join our [OverProtocol Discord server](https://discord.com/invite/overprotocol) for updates and support.

2. **Prepare Binary**
  
  Create a folder called `overprotocol` on your SSD, and then two subfolders within it: `consensus` and `execution`:

   ```plaintext
    overprotocol
    ├── consensus
    └── execution
   ```

    - **Download Client Binaries**:

      Select the execution client and the consensus client binary zip files for your operating system from the links below and download it to your local machine and extract it to corresponding directory above.

      | Operating System | OverProtocol Execution Client [Kairos]                                                                       | OverProtocol Consensus Client [Chronos]                                                                       |
      | ---------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
      | Linux x64        | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_linux.zip)        | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_linux_amd64.zip) |
      | MacOS X (Apple)  | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_darwin.zip)       | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_osx_arm64.zip)   |
      | MacOS X (Intel)  | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_darwin_amd64.zip) | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_osx_amd64.zip)   |
      | Windows          | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/kairos/kairos_windows.zip)      | [Download](https://over-protocol-dist.s3.ap-northeast-2.amazonaws.com/latest/chronos/chronos_windows.zip)     |

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

    And let's try to run a fullnode for dolphin testnet for example.

3. **Run an Execution Client**

  Navigate to your execution directory and run the following command to start your execution node

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

  The execution layer client cannot sync without an attached beacon node. We'll see how to setup a beacon node in the next step.

4. **Run a Consensus Client**

  In this step, you'll run a consensus node(chronos).

  There is two main ways to sync a consensus node: from genesis, and from a checkpoint. It is safer and a considerably faster to sync from a checkpoint. When syncing from a checkpoint, the simplest is to connect to a checkpoint sync endpoint. In the following examples, we'll use the checkpoint sync endpoint provided by Over Foundation.
  Navigate to your execution directory and run the following command to start your consensus node

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

  If you are planning to run a validator, it is strongly advised to use the `--suggested-fee-recipient=<WALLET ADDRESS>` option. When your validator proposes a block, it will allow you to earn block priority fees, also sometimes called "tips".

  **Congratulations!** you’re now running a full OverProtocol node.

1. **Run a validator client**
   You can follow the [Setting up Validators](./operate-validators) to run a validator client.

## Network Configurations

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Dolphin', value: 'dolphin'},
  ]}
>
  <TabItem value="mainnet">

| Key                | Value                                |
| ------------------ | ------------------------------------ |
| Network            | OverProtocol Mainnet                 |
| RPC URL            | https://rpc.public.overprotocol.com/ |
| Chain ID           | 54176                                |
| Currency symbol    | OVER                                 |
| Block Explorer URL | https://mainnet.view.over.network/   |

  </TabItem>

  <TabItem value="dolphin">

:::tip
When working with OverProtocol, especially in a testnet environment, it's important to note that testnet configurations and details may change at any time. This variability is typical of test environments, which are often updated or reset to test new features and improvements in the blockchain protocol.
:::

The Dolphin testnet operates with the goal of providing an environment identical to that of the mainnet. Additionally, this testnet serves the role of applying and testing updates before they are implemented on the mainnet.

| Key                | Value                                |
| ------------------ | ------------------------------------ |
| Network            | OverProtocol Dolphin                 |
| RPC URL            | https://wallet-dolphin.over.network/ |
| Chain ID           | 541764                               |
| Currency symbol    | OVER                                 |
| Block Explorer URL | https://dolphin.view.over.network/   |

  </TabItem>
</Tabs>


## Port and Firewall Configurations

If you followed the default setup instructions without customizing the port configurations, your node will use the following network settings. It's crucial to configure your firewall as shown below for smooth node operation. Please note that connection issues with peers often arise due to incorrect firewall settings, so pay close attention to these configurations:



| Port/protocol   | Firewall rule                       | Reason/caveats                                                                                                                                                                                                                                                                                               |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `8545/TCP`      | Block all traffic.                  | This is the JSON-RPC port for your execution node's Query API. You (and apps) can use this port to check execution node status, query execution-layer chain data, and even submit transactions. This port generally shouldn't be exposed to the outside world.                                               |
| `3500/TCP`      | Block all traffic.                  | This is the JSON-RPC port for your beacon node's Query API. You (and apps) can use this port to check beacon node status and query consensus-layer chain data. This port generally shouldn't be exposed to the outside world.                                                                                |
| `8551/TCP`      | Block all traffic.                  | Your beacon node connects to your execution node's [Engine API](https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md) using this port. Inbound and outbound traffic should be allowed through this port only if your local beacon node is connecting to a remote execution node. |
| `4000/TCP`      | Block all traffic.                  | Your validator uses this port to connect to your beacon node via [gRPC](https://grpc.io/). Inbound and outbound traffic should be allowed through this port only if your local validator is connecting to a remote beacon node.                                                                              |
| `*/UDP+TCP`     | Allow outbound traffic.             | To [discover](https://github.com/ethereum/devp2p/wiki/Discovery-Overview) peers, Chronos' beacon node dials out through random ports. Allowing outbound TCP/UDP traffic from any port will help Chronos find peers.                                                                                          |
| `13000/TCP`     | Allow inbound and outbound traffic. | After we discover peers, we dial them through this port to establish an ongoing connection for [libp2p](https://libp2p.io/) and through which all gossip/p2p request and responses will flow.                                                                                                                |
| `12000/UDP`     | Allow inbound and outbound traffic. | Your beacon node exposes this UDP port so that other Over nodes can discover your node, request chain data, and provide chain data.                                                                                                                                                                          |
| `30303/TCP+UDP` | Allow inbound and outbound traffic. | `30303/TCP` is your execution node's listener port, while `30303/UDP` is its discovery port. This rule lets your execution node connect to other peers.                                                                                                                                                      |

<br />

Ensuring these firewall settings are correctly configured will help prevent common connectivity issues and ensure your node can effectively participate in the network.

## Node Types

OverProtocol supports several types of nodes, each serving distinct functions within the network:

- **Full Nodes**: Primarily used for querying data and interacting with the blockchain, full nodes maintain only [the Over Layer](../learn/key-features/layered-architecture/overview) of the blockchain. Setting up a node with default configurations will typically result in a full node.
- **Archive Nodes**: These nodes store the complete state of the blockchain from its genesis. Due to the extensive historical data they retain, archive nodes generally require significant disk space.
- **Validator Nodes**: Essential for the security and integrity of the blockchain, validator nodes participate in proposing and voting on blocks. They play a critical role in maintaining the blockchain's consensus mechanism.

Each node type is integral to the network’s functionality, offering different capabilities and requiring varying levels of resource commitment. Depending on your participation goals and available resources, you can choose the node type that best fits your needs in supporting and engaging with the OverProtocol ecosystem.

## Synchronization Modes

Synchronization process is critical for ensuring that a node in the OverProtocol network is up-to-date with the latest blockchain state. This process involve downloading data from peers, verifying its integrity, and building a local blockchain database. Given the separation of data into the execution layer and the consensus layer in OverProtocol, each layer employs distinct synchronization strategies to manage data effectively.

These synchronization modes provide different trade-offs between speed, disk usage, network bandwidth, and security. Choosing the right sync mode for a node depends on the node operator’s specific requirements, including their security preferences, hardware capabilities, and how quickly they need their node to be fully operational.

### Execution Layer Sync Modes

In the execution layer, there are two primary synchronization modes to **become a full node: Full Sync and Snap Sync**. OverNode users can easily select the execution sync modes, upon blockchain data download.

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

There is an option to become an archive node. Currently, there is no option for OverNode users to become an archive node. Client software runners could become an archive node by running the execution client with the following tag:

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

There are two ways to sync the consensus layer: initial sync, and checkpoint sync. OverNodes users can only choose to sync consensus layer through checkpoint sync as it is set by default. The chronos client software runners can choose between the two sync modes.

**Initial sync**:

- This sync mode downloads the beacon chain data, if it has lower head information than its peers.
- When bootstrapping a node, it has no beacon chain data, so it downloads all the beacon chain data starting from the genesis.

**Checkpoint sync (Initial sync from checkpoint)**:

- This mode enhances the user experience by allowing consensus layer to sync from a recent weak subjectivity checkpoint instead of from the genesis block.
- This approach drastically reduces the initial sync time.
- The source of the checkpoint data is crucial and should be chosen with care, as the node will inherently trust the third party providing the data.
- Append the following tags to enable the checkpoint sync

```sh
$ beacon-chain --checkpoint-sync-url value
```

## What's Next

Once your node is up, running and synced, the next step is to
register and operate validators. This involves configuring your node to participate in the consensus process, enhancing the network's security and stability.

For OverNode users this step is pretty much straight-forward. After the node is synced, jump in to the Staking tab to register as a validator.

For advanced users running the client software from scratch follow
[register and operate validators](./operate-validators) section.
