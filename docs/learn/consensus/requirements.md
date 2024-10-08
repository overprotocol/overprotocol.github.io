---
title: Requirements
description: Requirements for OverProtocol's consensus participation
lang: en
---

The requirements for becoming and maintaining the status of a validator within the OverProtocol are set to balance the need for active participation and accessibility. These requirements ensure a stable and robust network while keeping participation as accessible as possible. By aligning the interests of validators with the network's stability and offering a carefully calibrated set of rules, OverProtocol aims to foster a thriving ecosystem where validators play an essential role.
Below is an explanation of the primary requirements:

## Stake Minimum Amount of OVER to be a validator

The minimum stake requirement of OVER ensures that validators have something significant at risk, motivating them to actively participate in the consensus. This helps stabilize the value of the coin and aids swift consensus. However, OverProtocol recognizes the need for accessibility and wants to avoid creating unnecessary barriers. For now, **256 OVER** is selected as a staking requirement, considering the need to include as many participants as possible without compromising the system's integrity.

## Maintain at Least 70% Uptime

Every validator must maintain an **uptime of at least 70%**. This criterion is crucial for the system's stability, as the consensus process depends on both the number of validators and each one's average uptime. Importantly, our mathematical modeling is conducted under the assumption that the system is operated solely by ordinary individuals, not a select few with specialized operational expertise (e.g., blockchain infrastructure providers). The calculations demonstrate that a 70% uptime from an ordinary validator guarantees system safety, assuming that more than 16,384 validators are involved (Ethereum's original design aimed to attract over 16,384 validators to ensure a smooth transition to the Proof-of-Stake (PoS) system).

In our system, we have instituted an evaluation scheme termed **risk score** to assess each validator's uptime. If a validator does not meet the uptime benchmark, its risk score escalates. Once the score exceeds a specific threshold, indicating a significant risk of that validator's participation in consensus, the validator is removed from the validation network. This strategy guarantees that validators remain dedicated to preserving their online presence, thereby positively influencing the network's reliability. For a comprehensive understanding, consult the [Rewards and Penalties](rewards-and-penalties.md/#rescuing-offline-validators).
