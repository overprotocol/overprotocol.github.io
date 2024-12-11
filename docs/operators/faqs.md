---
title: OverProtocol Validator FAQs
description: Frequently asked questions about operating full nodes and validators of OverProtocol.
lang: en
---

### Welcome to the OverProtocol Validator FAQ! 🙌

Welcome! This FAQ is your go-to resource for understanding the ins and outs of operating validators on OverProtocol. Whether you’re just getting started or managing multiple validators, we’re here to guide you through every step with clarity and confidence.

Validators are critical to OverProtocol’s security and decentralization, and we appreciate your dedication to the network. Let’s dive into your most pressing questions!

---

### 1. What is the Role of a Validator?

Validators are the backbone of OverProtocol. Here’s what they do:

- **Validate Blocks**: Ensure that new blocks and transactions meet the network’s consensus rules.
- **Propose Blocks**: Occasionally create new blocks, playing a crucial role in the Proof of Stake (PoS) mechanism.
- **Earn Rewards**: Gain rewards for honest participation, proportional to your stake.

### 2. How Do I Become a Validator?

- Stake a minimum of 256 OVER to register a validator.
- Use the Staking menu in OverScape or manually register your validator keys.
- Keep your validator online to participate in the consensus process and earn rewards.

Refer to our [Validator Setup Guide](./operate-validators) for detailed instructions.

### 3. How Are Rewards Earned?

Rewards are earned for:

- Block Validation: Validating transactions and adding them to the blockchain.
- Proposing Blocks: Proposing valid blocks as part of the consensus mechanism.

Reward Frequency: Every 6 minutes (1 epoch). Rewards are sent automatically to the withdrawal address.

### 4. What Hardware Do I Need for a Node?

Minimum Requirements:

- CPU: Dual-core processor.
- Memory: 8GB RAM.
- Storage: 50GB SSD.

Recommended for Optimal Performance:

- CPU: Quad-core or higher.
- Memory: 16GB RAM or more.
- Storage: 128GB SSD or more.

### 5. Does My Internet Connection Matter?

Yes! A stable and reliable connection is crucial.

Minimum Speed: 8 Mbps download.
Recommended Speed: 25 Mbps or higher for validators or high-load nodes.

### 6. How Do I Monitor My Node?

Use OverScape to monitor your node’s performance or access Chronos metrics directly via command-line tools. Keep an eye on:

- Node synchronization status.
- Peer connections.
- Resource usage (CPU, memory, storage).

### 8. What Are Validator States?

Validators in OverProtocol have the following states:

- Pending: Waiting for activation after staking.
- Active: Participating in consensus and earning rewards.
- Exited: No longer participating.
- Slashed: Penalized for misbehavior and removed from the network.

### 9. Why is My Validator Inactive?

Inactive validators may result from:

- Network Downtime: Ensure your node is online and synced.
- Software Issues: Confirm you’re using the latest version of OverScape or validator clients.

If you have any troubles, [join a community channel](https://discord.gg/overprotocol) and feel free to ask some helps!

### 10. What Happens If My Node Goes Offline?

- Validators will stop earning rewards during downtime.
- Prolonged inactivity may lead to penalties and eventually force the validator to exit the network.
- Use OverScape or monitoring tools to receive alerts and address issues promptly.

### 11. Can I Operate Validators on Multiple Devices?

**DON'T DO THAT.**

Running the same validator on multiple devices can lead to slashing penalties. If you need to move a validator to a new device:

- Backup your recovery phrase.
- Stop the validator on the old device.
- Wait at least more thant 13 minutes before starting it on the new device.

### 12. Can I Add More OVER After Staking?

Yes, you can add more OVER to an active validator.

Additional deposits must be a minimum of 32 OVER.

### 13. When Can I Withdraw My Rewards?

Validator rewards are processed automatically:

- Accumulated rewards are sent to the withdrawal address every 1–5 days.
- No manual claims are necessary.

### 14. Can I Partially Withdraw Staked OVER?

Currently, validators must withdraw their full staked amount when stopping activity.

Partial withdrawals are not yet supported but will be available in a future update.

### 15. How Do I Stop Validating and Withdraw My OVER?

#### Initiating a Voluntary Exit (Manually)

For users who decide to cease staking and wish to withdraw their entire balance, a "voluntary exit" process must be initiated. This involves signing and broadcasting a voluntary exit message using your validator keys. The process is facilitated by your validator client and must be submitted to your beacon node. Importantly, this action does not require any gas fees, as it is a part of the consensus layer's functionality. You will have to rely on the following-like command:

```sh
$ prysmctl validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000>
```

Alternatively, you can use Bazel to initiate a voluntary exit from the source as follows:

```sh
$ bazel run //cmd/prysmctl -- validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000> 
```

### 16. What Should I Know About Withdrawals?

Withdrawals are only possible under the following conditions:

- 256 Epoch Rule: Validators can only request withdrawals after 256 epochs (~24 hours) of activation.
- Full Withdrawals Only: Partial withdrawals are not yet supported.
