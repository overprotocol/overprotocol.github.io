---
title: Validator Cycle
description: Understand the lifecycle of a validator in OverProtocol, including activation, participation, exit, and withdrawal stages.
lang: en
---

Validators in OverProtocol progress through a well-defined lifecycle, ensuring the network operates securely and efficiently. Each stage of the cycle plays a critical role in maintaining network stability, accountability, and scalability.

---

## Stages of the Validator Cycle

### 1. Pending Activation

- **Description**: Validators who have submitted their activation request and staked the required amount of OVER enter the pending state.
- **Key Details**:
  - Validators wait for the next activation epoch to join the active set.
  - No duties or penalties are applied during this stage.
- **Purpose**: Ensures orderly onboarding of new validators.

---

### 2. Active

- **Description**: Once activated, validators begin participating in the network by performing duties such as attestation and block proposals.
- **Key Details**:
  - Validators are rewarded based on their performance in attestation and block validation.
  - Penalties, such as inactivity penalties or slashing, apply for failing to meet responsibilities or for malicious actions.
- **Purpose**: Maintains network security and liveness.

---

### 3. Exiting

- **Description**: Validators who request to exit or are forced to exit due to penalties enter the exiting state.
- **Key Details**:
  - Validators continue their duties until the exit becomes effective in the next epoch.
  - Penalties still apply during this period, encouraging responsible behavior until the end.
  - The [**Bailout**](./rewards-and-penalties#bailout) mechanism protects validators with excessive penalties by expediting their exit.
- **Purpose**: Provides a controlled and accountable transition out of the active set.

---

### 4. Exited

- **Description**: Once the exit is finalized, validators leave the active set and can no longer participate in network operations.
- **Key Details**:
  - Exited validators retain their stake but are no longer subject to penalties or rewards.
  - They must wait for the withdrawal epoch to reclaim their remaining funds.
- **Purpose**: Marks the validator as inactive while preserving their remaining assets.

---

### 5. Withdrawable

- **Description**: Validators in the exited state become withdrawable once the withdrawal epoch is reached.
- **Key Details**:
  - The staked funds (minus any penalties) are available for withdrawal.
  - Validators no longer have any ties or responsibilities to the network.
- **Purpose**: Completes the validator’s lifecycle by returning their remaining stake.

---

### 6. Slashed

- **Description**: Validators who commit severe misbehavior, such as double-signing or submitting conflicting attestations, are slashed and removed from the active set.
- **Key Details**:
  - A **10% immediate reduction** in staked funds is applied.
  - Slashed validators are automatically exited and must wait to withdraw their remaining stake after the long withdrawal epoch(= 8192 epochs).
  - This state is permanent, and slashed validators cannot rejoin the network.
- **Purpose**: Protects the network from malicious actors by enforcing severe penalties.

---

## Validator State Transitions

| **State**            | **Next State**       | **Condition for Transition**                                            |
|-----------------------|----------------------|--------------------------------------------------------------------------|
| **Pending Activation**| Active              | Validator is included in the next activation epoch.                      |
| **Active**            | Exiting             | Validator requests exit or is forced to exit due to penalties.           |
| **Exiting**           | Exited              | Exit becomes effective in the next epoch.                                |
| **Exited**            | Withdrawable        | Withdrawal epoch is reached.                                             |
| **Withdrawable**      | N/A                 | Validator withdraws remaining funds.                                     |
| **Active/Exiting**    | Slashed             | Validator engages in severe misbehavior (e.g., double-signing).          |
