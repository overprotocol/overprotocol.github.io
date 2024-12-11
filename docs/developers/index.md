---
title: Welcome, Developers! 🚀
description: Get started with OverProtocol development! Learn how to set up nodes, access RPC endpoints, configure the Dolphin Testnet, and prepare your developer account with OVER tokens. Build scalable, decentralized applications with ease on OverProtocol’s developer-friendly ecosystem.
lang: en
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to the OverProtocol developer documentation—a space where innovation meets blockchain. Whether you’re new to blockchain development or an experienced builder, this guide will equip you with everything you need to start creating applications on OverProtocol.

OverProtocol empowers developers with a robust, scalable, and inclusive blockchain ecosystem. From setting up your first node to deploying smart contracts, let’s get you started on your journey to building the decentralized future.

## Setting Up a Node with RPC Access

To interact with the OverProtocol network, you'll need access to a node capable of handling Remote Procedure Calls (RPC). This will enable you to query and interact with the network, deploy contracts, and perform transactions programmatically.

**Options for Setting Up a Node**:

- **Running Your Own Node**: Setting up and maintaining your own node gives you full control over network interactions. This can be done by [following the setup instructions](/operators/run-a-node). Running your own node is beneficial for extensive development work that requires high levels of data integrity and privacy.
- **Using Public Nodes**: If you prefer not to manage your own node, you can use publicly available RPC endpoints. These are provided by various services and can be accessed easily, though they might come with limitations on the rate of requests and reduced control over the node configuration.

---

## Network Configurations

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
| Network            | OverProtocol Dolphin                  |
| RPC URL            | https://rpc.dolphin.overprotocol.com/ |
| Chain ID           | 541764                                |
| Currency symbol    | OVER                                  |
| Block Explorer URL | https://dolphin-scan.over.network/    |

  </TabItem>
</Tabs>

---

## Preparing an Account with OVER Tokens

Developing on OverProtocol requires interacting with the network, which include transaction fees or testing token transactions. Therefore, it's essential to have an account loaded with OVER tokens.

**Setting Up Your Developer Account**:

- **Acquire OVER Tokens**: If you are working on the main network, you'll need to acquire OVER tokens, which can be done through exchanges or from other token holders.
- **Testnet Tokens**: For testing purposes, you can use the OverProtocol testnet, where tokens can often be acquired for free from a faucet that distributes small amounts of tokens for development use. [Join developer community](https://discord.gg/overprotocol) and feel free to ask some tokens!
- **Secure Your Account**: Ensure that your account is secure, especially if you are working with real tokens. Utilize hardware wallets or secure key management solutions to protect your private keys and account credentials.
