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

<!--
1. If you run vetted validator software, you likely won’t have to worry about being “slashed”
   No one wants to be slashed, that’s a fact. The protocol includes a mechanism, called slashing, for punishing bad actors who submit malicious data to the network. If you’re running untampered validator software written by one of the Eth2 implementer teams, you likely won’t have to worry. Stock validator software should ensure that a validator never performs a slashable act. The kind of behavior that is slashable requires making modifications to stock software or running multiple validator clients at the same time with the same keys. Never use the same private keys across multiple validator clients. So someone getting slashed would likely know that they’re being “bad”. Requisite warning: you should always read the documentation for any validator software you run.

2. Rewards and penalties are accounted for every epoch (~6 minutes)
   If you’ve participated in Prysmatic Labs’ or any other teams’ testnets, you may have seen a satisfying graph with an upwards trend. 📈🤑 On the protocol level, time is broken up into 6.4 minute increments, called epochs, where duties are algorithmically assigned to every participating validator. At the end of every epoch, participation is scored, and every properly performing validator is given a micro-reward or micro-penalty according to their involvement.

3. You don’t need to be perfect
   While running a validator with high uptime will help maximize profitability, you don’t need to run it from a datacenter or have perfect uptime to earn a profit. The protocol will not “slash” inactive validators, merely subtract any incremental earnings as incremental penalties. This means that as long as your validator is online more than 2/3 of the time, you will still turn a profit. But…

4. In certain circumstances, inactive validators get an additional micro-penalty
   Validators perform the duty of progressing and finalizing the blockchain. If the chain stops being finalized, as in the case where a large fraction of validators go offline simultaneously, the protocol will react in an attempt to remove dead weight and regain finality. After the chain has not been finalized for more than 4 epochs (25.6 min), inactivity penalties will be doled out, and get worse every epoch the longer the chain isn’t finalized. If your validator is still performing its duties during these times, it will not be penalized.

5. You may stop validating once active
   If you decide validating isn’t for you once you start, you have the option to voluntarily exit. This exit procedure tells the protocol to stop giving your validator duties to perform, stopping you from earning any additional rewards or getting any additional penalties. Keep in mind, even if you’ve ‘exited’ from being an active validator, this doesn’t mean your staked ETH is withdrawable.

One subtlety to this exit process is that once a validator goes active, it can’t exit until after at least 256 epochs later. This ensures that every activated validator is assigned some minimal amount of work.

6. You can’t re-join once you exit
   If you’ve performed a voluntary exit, or been slashed, you won’t be able to rejoin. This means if you want to be a validator again, it’ll require an additional 32 ETH deposit and a new validator account.

7. Your staked ETH will not be liquid on the protocol level (yet)
   All funds put into staking will be locked up at the protocol level until at least Phase 1 of the Eth2 rollout. This includes base staking funds and any earned rewards, whether you’ve exited or not. You shouldn’t expect access to your staked funds for several years. Early stakers are in it for the long haul. Of course, once the functionality is eventually rolled out, you’ll be able to withdraw/transact your precious ETH.

https://docs.ethstaker.cc/ethstaker-knowledge-base/help/validator-offline

https://docs.ethstaker.cc/ethstaker-knowledge-base/help/missed-attestations

https://docs.ethstaker.cc/ethstaker-knowledge-base/help/downtime-explained

https://docs.ethstaker.cc/ethstaker-knowledge-base/help/slashing-explained -->
