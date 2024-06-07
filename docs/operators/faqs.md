---
title: FAQs
description: Frequently asked questions about operating full nodes and validators of OverProtocol.
lang: en
---

### 1. What does a validator do?

OverProtocol utilizes Proof of Stake (PoS) to reach consensus on the blockchain. In this system, randomly selected validators propose, prove, and guarantee the validity of blocks.

Validators of OverProtocol contribute to the blockchain by participating in block validation, block creation, and synchronization proof, and receive rewards accordingly.

### 2. What is block attestation, block proposal, and sync-committee?

Block attestation, block proposal, and sync committee are roles that validators in OverProtocol must perform. All validators participate in block attestation, and a randomly selected group of validators participates in block proposal and sync-committee. Validators who participate in block proposal and sync-committee can get more rewards if they perform their roles well.

### 3. How can i run a validator?

If your are a OverNode user, you can start the validator application in the Validator menu. Follow the instructions on the screen to register as a validator. If you are choosing to run the client software yourself, refer to [Operate Validators](./operate-validators) page.

You must stake 256 OVER(for testing) per validator, and you can apply for more validators depending on the OVER you have.

If you have completed the validator application through staking, it may take some time for the applied validator to be activated. The waiting time becomes longer as the number of validator applications from users increases.

Before validator activation, no separate rewards or penalties apply to validator operation. However, after the validator is activated, you must always keep the node running to receive rewards.

### 4. Validator activation takes a long time.

When staking for validator operation, a waiting time is required until the staking transaction is processed and validator registration is completed. Validator activation waiting time can be divided into two stages: primary and secondary.

- Primary waiting: It is used to calculate the **time it takes for the validator to be activated** for about the first 2 hours. It is estimated to take about 2 hours, but the exact waiting time cannot be determined.

- Secondary waiting: The exact waiting time until validator activation can be known and confirmed in the Validator menu. Once the validator is activated, you can participate in the network immediately.

In OBT #2, after successfully sending the staking transaction, depending on the network status and the number of validator operation applications, a waiting time of at least 2 hours to up to 3 days may occur.

If multiple users apply for validator operation, the secondary waiting time may increase significantly. Therefore, during this time, it is recommended to leave OverNode running in the background and keep the computer on.

If the node was turned off due to the waiting time, please make sure to turn on the node and complete synchronization to the completion state before the validator activation time. If the node is still off at the time of validator activation, you will immediately receive penalties.

### 5. I forgot the validator recovery phrase.

OverProtocol doesn't store any of user's passwords. If you forgot the validator Recovery phrase, you can't recover your access towards the active validator.
