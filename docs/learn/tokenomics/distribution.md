---
title: Token Distribution
description: Learn about the allocation and initial supply dynamics of OVER tokens in OverProtocol, designed to ensure a stable and sustainable network.
lang: en
---

OverProtocol has a supply schedule that releases 1 billion OVER over 10 years. Upon entering the 11th year, no additional tokens will be issued.

---

## Token Allocation

### 1. Staking Rewards

Staking rewards are structured to ensure the network’s stability and security. These rewards include a minimum guaranteed allocation of 200M OVER and an adjustable allocation of 100M OVER. Each year, 20M OVER is distributed as a fixed reward to participants. In addition, the network dynamically adjusts extra rewards through a feedback mechanism. Further details are described [below](#staking-rewards).

### 2. DAO Treasury{#treasury}

The DAO Treasury serves as a funding resource for ecosystem development, distributed linearly over the first 10 years. The community decides how to allocate these funds through voting, and directing resources to initiatives such as new dApp development, network improvements, and user education campaigns. Additionally, transaction fees and other network-generated revenue are continuously added to the DAO Treasury, providing a steady stream of resources to support ongoing ecosystem growth.

### 3. Over Community Access Program(OCAP)

Designed to boost engagement and adoption, this program supports activities like liquidity provision and airdrops. It encourages network participation from small-scale contributors and new users, helping to establish a strong initial user base for OverProtocol.

### 4. Development and Strategic Investments

Development and strategic investments are allocated to ensure the stable establishment and sustainable growth of the network during its early stages. These funds are distributed to the development team and early investors through a 2-year schedule, which includes a 6-month cliff and 18 months of linear vesting.

<img src="/img/alloc_chart.png" style={{width: 500}} alt="alloc_chart" />

---

## Initial Supply

At the genesis of OverProtocol, **190 million OVER tokens** (19% of the total supply) will be circulating to support the network's stability and early operation.

### Circulating Supply at Genesis

1. **OCAP**  
    - A total of **150 million OVER** from OCAP is circulating at genesis.  
    - These tokens are allocated for airdrops, liquidity provision, and user engagement to drive initial adoption and ecosystem participation.

2. **Over Foundation(OF) and Over Technologies(OT)**  
    - Both categories are subject to a 2-year vesting schedule with a 6-month cliff.  
    - However, **20% of their allocation** (20 million OVER each) is unlocked at genesis.  
    - These unlocked tokens are deployed as **validator staking resources**, ensuring network security and stability in the early phases.

### Purpose of Initial Circulating Supply

- **Validator Staking**: Tokens from OF and OT are used to stabilize the blockchain by operating validators during the early phase.
- **Ecosystem Growth**: OCAP provides resources for airdrops, liquidity incentives, and user rewards to encourage network adoption.
- **Controlled Inflation**: The careful management of initial supply prevents excessive inflation while maintaining security and decentralization.

### Initial Supply Summary

| **Category**                  | **Initial Circulating Supply (OVER)** | **Purpose**                      |
|-------------------------------|---------------------------------------|----------------------------------|
| **OCAP**  | 150M                                  | Airdrops, liquidity, and user incentives. |
| **OF**            | 20M                                   | Validator staking.              |
| **OT**| 20M                                   | Validator staking.              |
| **Total**                     | 190M                                  |  |

---

## Staking Rewards

### Minimum Guaranteed Rewards

OverProtocol's token issuance plan allocates 200 million OVER as the minimum guaranteed reward, distributed in equal annual amounts to stakers. These rewards are proportionally distributed to validators based on their staking balance and required participation rate every epoch.

### Adjustable Rewards

The actual release of staking rewards is adjusted by the protocol's predefined feedback mechanism. This mechanism acts as a reserve system to modulate the issuance levels: it reduces actual issuance when staking rewards are sufficient and increases issuance when additional rewards are needed. These adjustments are made based on the current staking rate, ranging between a minimum guaranteed reward of 20 million OVER per year to a maximum of 30 million OVER per year. Importantly, this reserve system is not managed by external entities but is governed by an internal feedback mechanism within the protocol. Refer to [this page](feedback.md) for a comprehensive overview of the feedback mechanism.

After the 10-year issuance period is over, any remaining reserve for the adjustable rewards will continue to be distributed to stakers.

| Year        | Minimum Issuance | Maximum Issuance |
| ----------- | ---------------- | ---------------- |
| Year 1 ~ 10 | 20M OVER         | 30M OVER         |
| Year 11 ~   | 0 OVER           | 10M OVER         |
