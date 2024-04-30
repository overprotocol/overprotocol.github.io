---
title: Run a Node
description: A description for how to run a node.
lang: en
---

Once you've set up your hardware in either a local or cloud environment, the next step is to download and run the node client software, enabling you to join the blockchain network.

## Setting up a Node

There are various methods to set up a node in the OverProtocol network, ranging from [user-friendly approaches](#start-with-overnode) for beginners to more [advanced, manual configurations](#build-from-source) for experienced users seeking customized setups.

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
   Access the official OverProtocol GitHub repository and clone it to your local machine.

   **_OverProtocol Execution Client [Kairos](https://github.com/superblock-dev/kairos2.0)_**: The execution layer client handles the processing of transactions and the maintenance of the blockchain state. It must be fully synchronized with the OverProtocol network.

   **_OverProtocol Consensus Client [Chronos](https://github.com/superblock-dev/chronos)_**: This consensus client works in tandem with the execution layer to achieve network consensus on the current state of the blockchain. Synchronizing this client is crucial for participating in network validation.

2. **Prerequisites**: Make sure all required dependencies and development tools are installed on your machine. These are usually listed in the repository's README.

3. **Compile the Source Code**: Navigate to the cloned directory in your command line tool and run the build commands specified in the build documentation.

4. **Configure Your Node**: After building, configure your node’s settings, including network options and security measures. This may involve editing configuration files manually.

5. **Run the Node**: Execute the node software. You might need to use command line options to start it with specific parameters tailored to your needs.

## Node Types

OverProtocol supports several types of nodes, each serving distinct functions within the network:

- **Full Nodes**: Primarily used for querying data and interacting with the blockchain, full nodes maintain only [the Over Layer](../learn/key-features/layered-architecture/overview) of the blockchain. Setting up a node with default configurations will typically result in a full node.
- **Archive Nodes**: These nodes store the complete state of the blockchain from its genesis. Due to the extensive historical data they retain, archive nodes generally require significant disk space.
- **Validator Nodes**: Essential for the security and integrity of the blockchain, validator nodes participate in proposing and voting on blocks. They play a critical role in maintaining the blockchain's consensus mechanism.

<!-- - **Light Nodes**: Light nodes provide a more resource-efficient option by only downloading block headers rather than entire blocks. This makes them ideal for devices with limited storage and processing capabilities.
- **Bootnodes**: Serving as network entry points, bootnodes assist new nodes in discovering peers, facilitating seamless integration into the network. They are crucial for maintaining the network’s connectivity and expansion. -->

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

<!-- **Becoming a Light Node**:

Lastly this is an option to become a light node. Currently, there is no option for OverNode users to become a light node. Client software runners could become a light node by running the execution client with the following tag:

```
geth --syncmode light
``` -->

### Consensus Layer Sync Modes

There are three ways to sync the consensus layer: initial sync, checkpoint sync. OverNodes users can only choose to sync consensus layer through checkpoint sync as it is set by default. The chronos client software runners can choose between the two sync modes.

**Initial sync**:

- This sync mode downloads the beacon chain data, if it has lower head information than its peers.
- When bootstrapping a node, it has no beacon chain data, so it downloads all the beacon chain data starting from the genesis.

**Checkpoint sync (Initial sync from checkpoint)**:

- This mode enhances the user experience by allowing consensus layer to sync from a recent weak subjectivity checkpoint instead of from the genesis block.
- This approach drastically reduces the initial sync time.
- The source of the checkpoint data is crucial and should be chosen with care, as the node will inherently trust the third party providing the data.
- Append the following tags to enable the checkpoint sync

```sh
$ chronos --checkpoint-sync-url value --genesis-beacon-api-url value
```

## What's Next

Once your node is up, running and synced, the next step is to
register and operate validators.This involves configuring your node to participate in the consensus process, enhancing the network's security and stability.

For OverNode users this step is pretty much straight-forward. After the node is synced, jump in to the Staking tab to register as a validator.

For advanced users running the client software from scratch follow
[register and operate validators](./operate-validators) section.
