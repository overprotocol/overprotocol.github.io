---
title: Over PoS Overview
description: Over adopts Ethereum's Gasper PoS algorithm for further decentralization.
lang: en
---

## Consensus is important

In the world of blockchain, consensus algorithms are like the referees of a match, ensuring everyone's playing by the same rules. They keep every ledger in the network in sync, validating transactions, and maintaining a decentralized, tamper-proof system that instills trust among participants. There are various kinds of these algorithms, such as **Proof-of-Work (PoW)** which tasks miners with solving complicated math puzzles, and **Proof-of-Stake (PoS)** which selects validators based on their token holdings.

For OverProtocol, PoS sits at the heart of our operations. Participants prepare a substantial amount of OVER tokens from the market and put them up as collateral to create and validate blocks. If they perform their role successfully, they are rewarded with OVER. However, any malicious activity can lead to penalties - anything from suspension to a complete loss of staked OVER tokens. So, playing fair is not just encouraged, it's mandatory.

## Why PoS

While there's a broad array of PoS algorithms available, we chose to align with Ethereum's [Gasper](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/gasper/) for OverProtocol. Our mission is to build a blockchain that doesn't disproportionately favor a select few, and we wanted our choice of consensus algorithm to reflect that.

Many new blockchains are leaning towards a Delegated Proof of Stake (DPoS) format, where a small group of validators are seleceted (such as Cosmos BFT and Aptos etc). But this can cause performance issues if these validators don't meet high standards. They are expected to manage a robust node operation environment to ensure the speed and performance of the blockchain consensus, making it a tall order for the average person due to the need for advanced infrastructure and significant capital.

Contrastingly, Ethereum's Gasper allows for a larger pool of validators and is more accommodating to those with less sophisticated node operation environments. Aligned with Over's philosophy and vision for blockchain, we've adopted a slightly tweaked version of Gasper. This move ensures a more inclusive consensus process, making participation in the blockchain more accessible to everyone, regardless of their resources.

In reality, Ethereum's staking has shown a trend towards centralization, with close to 56\% of the staked amount held by the [top four validators](https://blog.obol.tech/ethereum-staking-ecosystem-leading-to-the-shanghai-upgrade/). This concentration goes against the core goal of decentralization, posing a significant roadblock. We believe the root cause lies in the high hardware requirements. Although the consensus protocol theoretically supports millions of validators, the practical requirements for running a node continue to be a formidable barrier.

OverProtocol aims to tackle this issue head-on by harnessing the power of lightweight client techniques. These techniques significantly trim down the resource requirements, making it possible for anyone with a basic PC to run a node and step into the role of a validator. By integrating these techniques with Gasper, Over brings the concept of home staking to life. Consequently, anyone can now contribute to the network's security and stability, regardless of their resources.
