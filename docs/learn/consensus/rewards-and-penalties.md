---
title: Rewards and Penalties
description: Understand the rewards and penalties mechanism in OverProtocol's PoS system, designed to incentivize honest participation and ensure network stability.
lang: en
---

OverProtocol’s **Proof of Stake (PoS)** consensus mechanism employs a well-defined system of rewards and penalties to encourage responsible participation and ensure the network remains secure, efficient, and decentralized.

## Rewards: Encouraging Active Participation

Validators in OverProtocol earn rewards for contributing to the network's security and efficiency. Rewards are distributed at the end of each **epoch** based on a predefined weighting system that incentivizes key contributions to the consensus process.

---

### Reward Components and Weights

Rewards are divided into the following components, each with a specific weight that reflects its importance in the consensus process:

1. **Timely Source Weight (18.75%)**
    - Rewards validators for successfully voting to finalize source checkpoints.
    - **Source Voting** ensures that a blockchain state is finalized, making it immutable and secure.
    - This component strengthens the network by locking in key states, reducing the risk of forks.

2. **Timely Target Weight (37.5%)**
    - The largest share of rewards, given for timely and accurate voting to justify target checkpoints.
    - **Target Voting** prepares a checkpoint for finalization in the next round, ensuring consistency and alignment among validators.
    - By prioritizing justified states, the network achieves seamless progression toward finalization.

3. **Timely Head Weight (18.75%)**
    - Rewards validators for identifying and confirming the correct head of the blockchain.
    - This encourages validators to maintain up-to-date and accurate views of the blockchain’s state.
    - Ensures continuous block proposal and validation accuracy.

4. **Proposer Weight (12.5%)**
    - Rewards are allocated to block proposers for generating valid and timely blocks.
    - This recognizes the critical role of proposers in driving transaction throughput and network efficiency.

5. **Light Layer Weight (12.5%)**
    - OverProtocol introduces the concept of a **Light Layer**, a flexible framework that supports innovative participation across the network.
    - The Light Layer allows both validators and non-validators to contribute to the network's growth in diverse ways.
    - Designed to accommodate new roles in the future, the Light Layer ensures scalability and adaptability, encouraging inclusive and innovative participation.

---

### Summary of Reward Weights

| **Component**         | **Weight (%)** | **Purpose**                                         |
|------------------------|----------------|-----------------------------------------------------|
| **Timely Source**      | 18.75             | Finalize checkpoints, locking states as immutable. |
| **Timely Target**      | 37.5             | Justify checkpoints for future finalization.       |
| **Timely Head**        | 18.75             | Confirm the blockchain's correct head state.       |
| **Proposer**           | 12.5              | Generate and propose valid blocks.                 |
| **Light Layer**        | 12.5              | Foster diverse and innovative network participation.|

---

By aligning rewards with these components, OverProtocol ensures validators focus on maintaining network security, consistency, and accessibility. Validators and participants leveraging the Light Layer framework maximize their contributions while fostering an inclusive and adaptable ecosystem.

---

## Penalties: Ensuring Network Integrity

OverProtocol enforces a robust penalty system throughout the **validator lifecycle** to deter malicious or negligent behavior and maintain the network’s security and reliability. Validators are held accountable during their active participation and through the exit process to ensure seamless network operations.

---

### Types of Penalties

1. **Inactivity Penalty**
    - Validators accumulate an **Inactivity Score** if they fail to perform their duties, such as missing votes or attestations.
    - Once the score exceeds a certain threshold, penalties are applied incrementally to the validator's staked funds.
    - **Purpose**: To encourage active participation and ensure consistent network performance.

2. **Slashing**
    - **Immediate 10% stake reduction** occurs in any of the following scenarios:

        1. Making **two differing attestations** for the same target checkpoint.
        2. Submitting an attestation whose **source and target votes surround** those in another attestation from the same validator.
        3. Proposing **more than one distinct block** at the same height or attesting to different head blocks with the same source and target checkpoints.
    - **Purpose**: To punish malicious actions that compromise network security or consensus integrity.

---

### Validator Lifecycle and Penalty Application

A validator in OverProtocol goes through the following stages during its lifecycle. Penalties are applied during specific phases to ensure validators uphold their responsibilities:

1. **Pending Activation**
    - After submitting a request to activate, the validator enters the **pending state**.
    - The validator must wait until the next activation window to begin duties. No penalties apply in this stage.

2. **Active**
    - Once activated, the validator participates in attestation, block proposals, and other duties.
    - **Penalties Applied**:
        - **Inactivity Penalty**: For failing to perform assigned duties (e.g., missing attestations).
        - **Slashing**: For malicious actions, such as double-signing or surrounding votes.

3. **Exiting**
    - Validators that voluntarily request exit or are forced to exit due to penalties enter the **exiting state**.
    - This transition is not immediate; **the validator continues performing duties until the exit becomes effective in the next epoch.**
    - **Penalties Apply**: Validators in the exiting state are still subject to penalties, including Inactivity Penalties and Slashing, if they fail to fulfill their remaining responsibilities during this period.

4. **Exited**
    - Once the exit is finalized, the validator no longer participates in consensus and is free to withdraw their remaining stake.
    - No penalties apply after the validator has fully exited the system.

---

### Special Cases

1. **Bailout**
   - Validators whose penalties exceed **2% of their original stake** are automatically exited from the network.
   - **Purpose**: To quickly remove problematic validators and prevent excessive losses to their stake while maintaining network health.

2. **Inactivity Leak**
   - Triggered when the chain fails to finalize for **4 consecutive epochs**, indicating that more than one-third of the validators are experiencing issues.
   - A **forced recovery protocol** is initiated to restore the liveness of the validator set:
     - Validators with high Inactivity Scores are automatically exited.
     - This mechanism ensures the remaining validators can stabilize the network and resume normal operations.
   - **Purpose**: To address severe liveness issues and protect the network from prolonged downtime.

---

### Why Penalties Matter

OverProtocol’s penalty system ensures:

- **Network Security**: Malicious actions are swiftly penalized, reducing threats to consensus integrity.
- **Validator Accountability**: Validators are incentivized to perform their duties diligently.
- **Stability and Liveness**: Special cases like **Bailout** and **Inactivity Leak** prevent prolonged disruptions, ensuring a robust and reliable network.

---

## Balancing Rewards and Penalties

OverProtocol’s system ensures a balanced approach:

1. **Fair Incentives**: Validators are rewarded generously for honest and consistent behavior.
2. **Proportional Penalties**: Misbehavior is penalized in proportion to its impact on the network.
3. **Transparency**: All rewards and penalties are governed by clear, pre-defined rules to foster trust and predictability.
