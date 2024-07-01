---
title: Getting Started
description: An overview of building smart contracts on OverProtocol.
lang: en
---

Welcome to the OverProtocol developer documentation! This guide is designed to help developers set up and prepare for building applications on OverProtocol. Before diving into coding, there are a few crucial components you need to have in place to ensure a smooth and efficient development process.

## Setting Up a Node with RPC Access

To interact with the OverProtocol network, you'll need access to a node capable of handling Remote Procedure Calls (RPC). This will enable you to query and interact with the network, deploy contracts, and perform transactions programmatically.

**Options for Setting Up a Node**:

- **Running Your Own Node**: Setting up and maintaining your own node gives you full control over network interactions. This can be done by [following the setup instructions](/operators/run-a-node). Running your own node is beneficial for extensive development work that requires high levels of data integrity and privacy.
- **Using Public Nodes**: If you prefer not to manage your own node, you can use publicly available RPC endpoints. These are provided by various services and can be accessed easily, though they might come with limitations on the rate of requests and reduced control over the node configuration.

### OverProtocol Testnet Configuration

:::tip
When working with OverProtocol, especially in a testnet environment, it's important to note that testnet configurations and details may change at any time. This variability is typical of test environments, which are often updated or reset to test new features and improvements in the blockchain protocol.
:::

#### Dolphin Testnet

The Dolphin testnet operates with the goal of providing an environment identical to that of the mainnet. Additionally, this testnet serves the role of applying and testing updates before they are implemented on the mainnet.

| Key                 | Value                                         |
| ------------------- | ----------------------------------------------|
| Network             | OverProtocol Dolphin                          |
| RPC URL             | YOUR_RPC_URL                                  |
| Chain ID            | 541762                                        |
| Currency symbol     | OVER                                          |
| Block Explorer URL  | https://dolphin.view.over.network/            |

## Preparing an Account with OVER Tokens

Developing on OverProtocol typically requires interacting with the network, which can include transaction fees or testing token transactions. Therefore, it's essential to have an account loaded with OVER tokens.

**Setting Up Your Developer Account**:

- **Acquire OVER Tokens**: If you are working on the main network, you'll need to acquire OVER tokens, which can be done through exchanges or from other token holders.
- **Testnet Tokens**: For testing purposes, you can use the OverProtocol testnet, where tokens can often be acquired for free from a faucet that distributes small amounts of tokens for development use. You can receive a certain amount of OVER testnet tokens every day from [OverWallet](https://over.network/overwallet).
- **Secure Your Account**: Ensure that your account is secure, especially if you are working with real tokens. Utilize hardware wallets or secure key management solutions to protect your private keys and account credentials.
