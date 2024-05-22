---
title: Token Distribution
description: An introduction for distribution information of OVER
lang: en
---

Over has a supply schedule that releases 1 billion OVER over 10 years. Upon entering the 11th year, no additional tokens will be issued.

## Token Allocation

### 1. Staking Rewards

40% of the total tokens, equating to 400 million OVER, will be distributed over 10 years. The issuance plan allocates 200 million OVER  as the minimum guaranteed reward, distributed in equal annual amounts to stakers. The remaining 200 million OVER will be used as an adjustable reward, modulated in real-time by the system without human intervention, based on the desired staking quantity. Further details are described [below](#staking-rewards).

### 2. Over Community Access Program(OCAP)

Of the total supply, 15% is initially allocated to the OCAP. OCAP facilitates the distribution of OVER in various ways, such as airdrops for early community members and contributors, or through liquidity provision. The goal is to make participation in OverProtocol accessible to those who share our vision.

### 3. Others

The remaining 450 Million OVER is earmarked for distribution to 4 entities (Core Contributors, Investors, Over Technologies, and Over Foundation) over a 4-year schedule. Refer to Table \ref{table:0} for the yearly allocation amounts. Each percentage point indicates the proportion of allocation distribution relative to the total 1 billion OVER.

<img src="/img/alloc_chart.png" style={{width: 500}} alt="alloc_chart" />

## Staking Rewards

### Minimum Guaranteed Rewards

OverProtocol's token issuance plan allocates 200 million OVER as the minimum guaranteed reward, distributed in equal annual amounts to stakers. These rewards are proportionally distributed to validators based on their staking balance and required participation rate every epoch.

### Adjustable Rewards

The actual release of staking rewards is adjusted by the protocol's predefined feedback mechanism. This mechanism acts as a reserve system to modulate the issuance levels: it reduces actual issuance when staking rewards are sufficient and increases issuance when additional rewards are needed. These adjustments are made based on the current staking rate, ranging between a minimum guaranteed reward of 20 million OVER per year to a maximum of 40 million OVER per year. Importantly, this reserve system is not managed by external entities but is governed by an internal feedback mechanism within the protocol. Refer to [this page](feedback.md) for a comprehensive overview of the feedback mechanism.

After the 10-year issuance period is over, any remaining reserve for the adjustable rewards will continue to be distributed to stakers.

| Year        | Minimum Issuance | Maximum Issuance |
| ----------- | ---------------- | ---------------- |
| Year 1 ~ 10 | 20M OVER         | 40M OVER         |
| Year 11 ~   | 0 OVER           | 20M OVER         |
