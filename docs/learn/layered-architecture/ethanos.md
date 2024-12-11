---
title: Ethanos
description: Explore the Ethanos Algorithm, the core mechanism behind OverProtocol's layered architecture, enabling scalable and sustainable blockchain participation.
lang: en
---

:::info
The Ethanos Algorithm [has been designed and implemented](https://github.com/overprotocol/kairos/tree/ethanos) to optimize blockchain data management, ensuring sustainability and scalability. However, Ethanos introduces additional overhead when the state size is relatively small. To maximize efficiency, Ethanos will remain disabled until the state size within OverProtocol grows to a sufficient level.

In the meantime, the OverProtocol team is diligently working on **further enhancing Ethanos alongside other core mechanisms to lighten the protocol**. These ongoing efforts focus on improving contract storage efficiency and refining the algorithm's performance, ensuring it evolves seamlessly to meet the network's growing demands.
:::

Ethanos is an effective mechanism for managing blockchain's state and history. It periodically resets the state, expiring old data and referencing previous cycles to manage a bounded state size. This approach lowers entry barriers, promotes decentralization, and fosters an inclusive blockchain system.

## What is the Problem?

It is essential to address the ever-increasing data size issue in blockchain systems. The account-based blockchain system, which records the global state of accounts and balances separately from transactions, offers a simpler and more intuitive framework for developing smart contracts. These tiny Turing-complete programs execute specific tasks using account states when triggered by transactions, and their integrity is verified by every node in the blockchain.

Typically, as time progresses, the number of accounts and transactions in any blockchain grows, leading to an infinite increase in state and history data. This growth in data size results in higher memory usage, more disk operations, and significant performance burdens. Consequently, this also creates substantial barriers for new participants attempting to synchronize and engage with the blockchain system.

## How Ethanos Works

### Differentiating States

Ethanos segments the state into three tiers: active, staged, and inactive. Both active and staged states are maintained within the Over Layer, while inactive states are transferred to the Nether Layer.

Ethanos manages its operations through what are called sweep epochs, which are defined time cycles in the system, each composed of several blocks. At the start of each sweep epoch, Ethanos constructs a new empty state trie for the active states. It also references the entire set of the states from the previous epoch's last block, known as the "superblock", now designated as staged states for the current epoch. Both of these states are housed in the Over Layer.

During each transaction within an epoch, the current state trie is updated as follows: If a transaction involves a specific account, the system first checks the current epoch’s state trie. If the account is not found there, it then searches the previous epoch’s state trie. If located, the account details are seamlessly transferred to the current state trie. If the account is absent from both state tries, it indicates that the account has either been inactive in past epochs or is a completely new account. In both scenarios, Ethanos treats these as new accounts.

If an account from the last epoch’s trie is not involved in any transaction during the current epoch, it is then classified as inactive in the subsequent epoch and considered expired. These accounts enter a dormant status and are categorized as dormant accounts within the Nether Layer. However, being expired does not mean the account is permanently lost; a dormant account can be reactivated through restoration from the Nether Layer.

From the account's perspective, each interaction or read operation restores two life points. As each sweep epoch passes, all accounts lose one life point. If an account goes through two consecutive sweep epochs without any life point recovery, it can no longer reside in the Over Layer.

### Distinguishing History

Ethanos employs the weak subjectivity point to purge data corresponding to the block body. This approach is straightforward but requires a mechanism to ensure the availability of the purged history. This aspect is still under research and development, with plans to leverage a light layer to facilitate this process.

### Restoration Process

To restore a dormant account, proof is required of the last epoch in which the account was active. This is crucial to prevent attempts to recover an account to a state before assets were transferred out in subsequent epochs. The trie structure in which the state is stored can efficiently prove whether a specific account was present within a state, as long as there is a valid root value, using a Merkle proof.

Restoration involves providing both an existence proof for the state of the last active epoch's superblock and non-existence proofs for the epochs during which the account was inactive. Combining these proofs allows for the restoration of the account's state to its condition in the current epoch. This process ensures that restoration is both secure and accurate, preventing unauthorized manipulations of account histories.

#### Dealing with Crumb Accounts; Restored Epoch

As mentioned, Ethanos does not differentiate between expired accounts and accounts that never existed. In the current epoch, if an empty account receives funds and its value is initialized, the holder of the account's private key can begin to send transactions and engage in activities using this account. An account that was previously expired but has been reinitialized and put back into use is referred to as a "crumb account." The existence of crumb accounts adds complexity to the restoration process.

While we could have eliminated crumb accounts by requiring restoration to go back to the genesis epoch before activating any account, we chose not to adopt this approach for UX reasons. One significant issue with crumb accounts is that they undermine the purpose of the nonce, which exists to record the number of transactions an account has made, thereby preventing any transaction from being executed multiple times.

If nonces are reset to zero every time an account is initialized in each epoch, it could allow for the reuse of previously utilized nonces in transactions involving crumb accounts. This situation would make the network vulnerable to specific types of replay attacks. To mitigate such risks while maintaining the efficiency of the restoration process and the simplicity of nonce values, we decided to add a field called "restored epoch" to each account.

The "restored epoch" value for an account created in a specific epoch is set to `max(0, current epoch number - 1)`. This signifies that the account did not exist in the state of one epoch prior, relative to the current epoch. The "restored epoch" value remains constant as long as the account remains active. For example, if an account is initialized with a "restored epoch" value of 2 in Epoch 3 and continues to be active until Epoch 9, the "restored epoch" value would still be 2. This constant value helps in tracking the initial restoration point of an account throughout its active period, providing a clear reference for any processes or checks that rely on the historical status of the account.

#### Restoration Process with Restored Epoch

The restoration process unfolds as follows: For the account to be restored, verification starts with a non-existence proof for the state of two epochs prior to the current one and proceeds in sequence until the last active state where an existence proof is available. A key consideration here is that the account being activated could be a crumb account. For such crumb accounts, there is no need to verify beyond the restored epoch value. Instead, proofs should be sequentially submitted up to the restored epoch minus one.

The restoration completes with the **merging** of the results after proofs are verified. For balances, this involves performing a sum operation, and similarly for nonces. The Restored Epoch value is determined by taking the minimum value, which indicates that the account's balance and nonce have been verified up to that particular epoch. For instance, accounts with a restored epoch value of 0 at any point signify that their balance and nonce have been consistently preserved from the genesis to the present.

Restoration can occur in parts. For example, an account that became active in epoch 6 does not necessarily need to be restored back to epoch 0. It can continue to operate with a restored epoch value of 5, thereby simplifying the restoration process and reducing unnecessary computational effort.

## Specification

### Sweep

A configuration known as `SWEEP_EPOCH` has been introduced to determine the frequency at which inactive accounts are expired. `SWEEP_EPOCH` defines the interval for performing sweeps, with sweeps occurring every epoch as designated by this setting.

The state trie captures the activities of each account in every epoch. At each **superblock**, the final block of the epoch, the current state trie is frozen and a new empty state trie is created. This frozen trie is referred to as a **checkpoint trie**.

In the following epochs, whenever an account's state needs updating and the account is not found in the current trie, a process is initiated to retrieve the account information from the previous checkpoint trie and integrate it into the current trie. If the account is already present in the current trie, the update is performed immediately.

### Restored Epoch

When an account expires, its state values are reset to empty.

A `restored_epoch` field is added to each account to record the epoch during which it was last restored. This field is crucial for determining if an account has undergone restoration previously. The initial value for `restored_epoch` is set to `max(0, current epoch number - 1)`.

The `restored_epoch` serves a function similar to that of the nonce during the restoration process by making it possible to selectively determine the point of restoration. This significantly reduces the complexity of verification as it eliminates the need to validate the state starting from the genesis block.

Furthermore, `restored_epoch` plays a vital role in contract creation. It helps ensure the uniqueness of contract addresses by preventing the regeneration of an address that has been previously used. This feature maintains the integrity and uniqueness of contract deployments on the blockchain.

### Restoration Data

The format for restoration data is crucial for facilitating the recovery of accounts. The required data fields for initiating a recovery transaction include:

`[chain_id, expire_epoch, target, target_epoch, fee, fee_recipient, signature_y_parity, signature_r, signature_s]`

- `chain_id`: Identifies the specific blockchain network where the recovery transaction will occur.
- `expire_epoch`: Specifies the epoch limit for which this recovery data is valid.
- `target`: The account address to be recovered.
- `target_epoch`: The earliest epoch from which the account's data needs to be restored.
- `fee`: The fee to be paid for the recovery to `fee_recipient`.
- `fee_recipient`: The address designated to receive the fee for facilitating the recovery.
- `signature_y_parity`, `signature_r`, `signature_s`: Components of the signature that authenticate the recovery request. This signature must be generated by the account responsible for paying the fee.

This data structure incentivizes data providers to provide the necessary historical data for recovery while also allowing an alternative account to cover the recovery fee. This mechanism ensures that recovery transactions are both secure and financially supported.

### Restoration Transaction

For efficient recovery mechanisms within blockchain systems, it is essential to integrate recovery data within transactional frameworks. To facilitate this, we propose a new transaction type under [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) specifically designed for account restoration.

This new type extends the existing structure of [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) transactions by adding a `restore_data` field. The complete field structure is as follows:

`[chain_id, nonce, max_priority_fee_per_gas, max_fee_per_gas, gas_limit, destination, amount, data, access_list, restore_data, signature_y_parity, signature_r, signature_s]`

### Restoration Process(Pseudocode)

Restoration process is done by following steps:

1. Collect the account's state proofs for each required epoch
2. Construct and send a restoration transaction with the collected proofs
3. Upon receiving the restoration transaction:
    - For each proofs of epoch:
        1. Verify the proof
        2. Get the state of the epoch.
        3. Apply the state

```python
def restore_account(account, proofs):
  restored_epoch = account.restored_epoch

  for proof in proofs:
    root_hash = get_last_checkpoint_block_by_epoch(restored_epoch).state_root

    if is_accurate_merkle_proof(root_hash, account, proof): # Proof is non-void proof
        restored_account = extract_account(merkle_proof)
        account.restored_epoch = restored_account.restored_epoch
        account.balance += restored_account.balance
        account.nonce += restored_account.nonce
    elif is_accurate_void_proof(root_hash, account, proof): # Proof is void proof
        restored_epoch -= 1
    else: # Proof is invalid
        raise Exception("Inaccurate proof")
```

### Restoration Cost Breakdown

The recovery process entails several operations such as reading or verifying data and performing decoding tasks. Each task contributes to the total cost, which is determined by the number of epochs involved in the recovery and the amount of data processed.

Here is a breakdown of the costs associated with different operations during the recovery process:

| Operation | Gas |
| --- | --- |
| read epochCoverage | 20 |
| read nonce | 20 |
| read balance | 20 |
| Keccak256 | 100 |
| Ecrecover | 3000 |
| CallValueTransfer | 9000 |
| CallNewAccount | 25000 |
| read header | 800 per epoch |
| RLP decoding | 1 per word |
| verifyProof | 100 per epoch, 2 per word |

#### Cost Per Epoch

For each epoch involved in the recovery process, the incurred costs include a `verifyProof` operation and a `read header` operation, each contributing to an approximate total of 900 gas per epoch. If the proof is for the existence proof, an additional `RLP decoding` operation is also necessary.

Variable costs are determined by the length of the input data, involving one `RLP decoding` and one `verifyProof` operation, both of which scale with the size of the input. These contribute an additional cost of 3 gas per word.

The formula for calculating the total recovery cost is structured as follows:

$$
\text{Total Restoration Cost} = 37000 + 900\times{Epoch} + 3\times{words} + \text{Memory Cost}
$$

Here, 37000 gas covers the initial operations such as account creation and transaction verification, 900 gas for each epoch reflects the fixed costs per epoch, 3 gas per word accounts for variable decoding and proof verification costs, and additional memory costs.
