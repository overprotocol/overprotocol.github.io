---
title: Differences from Ethereum
description: A list of differences from Ethereum that can significantly impact how applications are built and function on this platform.
lang: en
---

OverProtocol is an independent Layer 1 protocol that inherits the Ethereum Virtual Machine (EVM), ensuring compatibility with Ethereum's established ecosystem. This compatibility enables developers familiar with Ethereum to transition smoothly and leverage their existing skills. However, there are key distinctions between OverProtocol and Ethereum that developers must understand, as these differences can significantly impact how applications are built and function on this platform. Here are the crucial aspects to consider and the actions to take:

## Your Accounts Can Be Expired

In OverProtocol, inactive accounts are subject to expiration. [This mechanism](/learn/key-features/layered-architecture/ethanos) optimizes network efficiency and scalability by reducing the overhead of maintaining dormant accounts. Account restoration involves [a new transaction type](/learn/key-features/layered-architecture/ethanos#restoration-transaction) and additional EVM functionalities rather than opcode-level implementation.

On the mainnet, the Ethanos cycle lasts approximately 3 months, meaning that it takes 3 to 6 months for an inactive account to expire. The assessment of activity is based on the Ethanos cycle, so if you were active near the end of a cycle, your account could remain active for one more cycle. Conversely, if you were active at the beginning, your account could last for two cycles.

### Actions to Take

**If Your Account is Expired**:

- Do not worry; it can be restored without any penalties. [How?](/developers/how-can-i-restore-my-account)
- To restore your accounts, you can request to [restoration client](/operators/operate-restoration-client) for the restoration.
- Currently, you need to operate your own restoration client, but future services will provide more convenient restoration options.

**If Your Account is Not Expired**:

- Ensure that accounts, especially contract accounts, are periodically used to prevent expiration. Usage is defined as any transaction that queries the contract account's state or calls its functions, including view functions.
- Regularly monitor account activity to avoid unintentional expiration and ensure continuity of service. A monitoring tool will be available soon.
- Especially for contract accounts with significant storage, prevent expiration as restoring storage can be costly. Future advancements will improve storage management efficiency, but for now, some monitoring and inconvenience are necessary.

:::info
For contract accounts, especially those with extensive storage, expiration can be costly to restore. While we are developing more efficient storage management techniques, please bear with the current monitoring requirements to prevent expiration.
:::

## You Can't Use the Same Contract Address in Ethereum

:::tip
While the same Externally Owned Account (EOA) address can be used across various EVM-compatible chains with the same private key, this does not apply to contract addresses.
:::

Due to the state expiry feature in OverProtocol, all accounts, including contract accounts, could eventually expire. To mitigate the risk of an expired contract address being reused by a newly created contract, the contract creation operation always incorporates the caller account's `restoredEpoch` value. This inclusion alters the outcome of the `CREATE` operation, making the resulting addresses differ from those on other EVM chains.

As a result, even though the `CREATE2` operation allows for deterministic address prediction and usage, it is not possible to reuse the same address across different chains as you would with EOA addresses.

### Actions to Take

- Be aware that contract addresses on OverProtocol will differ from those on Ethereum and other EVM-compatible chains due to the inclusion of the `restoredEpoch` value.
- When deploying contracts, account for the different address derivation method and plan your deployment strategy accordingly.

```go
// Create creates a new contract using code as deployment code.
func (evm *EVM) Create(caller ContractRef, code []byte, gas uint64, value *big.Int) (ret []byte, contractAddr common.Address, leftOverGas uint64, err error) {
  contractAddr = crypto.CreateAddress(caller.Address(), evm.StateDB.GetRestoredEpoch(caller.Address()), evm.StateDB.GetNonce(caller.Address()))
  return evm.create(caller, &codeAndHash{code: code}, gas, value, contractAddr, CREATE)
}

// Create2 creates a new contract using code as deployment code.
//
// The different between Create2 with Create is Create2 uses keccak256(0xff ++ msg.sender ++ salt ++ keccak256(init_code))[12:]
// instead of the usual sender-and-nonce-hash as the address where the contract is initialized at.
func (evm *EVM) Create2(caller ContractRef, code []byte, gas uint64, endowment *big.Int, salt *uint256.Int) (ret []byte, contractAddr common.Address, leftOverGas uint64, err error) {
  codeAndHash := &codeAndHash{code: code}
  contractAddr = crypto.CreateAddress2(caller.Address(), salt.Bytes32(), codeAndHash.Hash().Bytes())
  return evm.create(caller, codeAndHash, gas, endowment, contractAddr, CREATE2)
}
```

## Transaction has a `restoredEpoch` Field

In traditional blockchain architectures, the `nonce` primarily tracks the number of transactions sent from a given account, ensuring transaction order and preventing double-spending. However, due to the expiration feature in OverProtocol, distinguishing explicitly between expired accounts and newly created accounts becomes challenging, raising the possibility of `nonce` overlap. To address this issue, OverProtocol introduces the `restoredEpoch` as a crucial component.

### RestoredEpoch

The combination of the `nonce` and the `restoredEpoch` value ensures uniqueness for each account. This system allows OverProtocol to maintain the integrity and distinction of account states over time, even through periods of account inactivity and expiration.

For a more detailed explanation, please refer to the [documentation](/learn/key-features/layered-architecture/ethanos#dealing-with-crumb-accounts-restored-epoch).

#### `nonce` Field in Transaction

The existing `nonce` field is split into a 64-bit field, with the first 32 bits representing the `restoredEpoch` and the remaining 32 bits functioning as the traditional `nonce`. This adaptation allows developers to leverage existing Ethereum development environments while accommodating the unique features of OverProtocol.

### Actions to Take

- Learn how `restoredEpoch` functions and its interaction with the nonce to ensure each account's uniqueness.
- Use RPC requests like `eth_getTransactionCount` when making transactions. The response will include the correct `nonce` value, considering both `nonce` and `restoredEpoch`.

## Misc

### `SELFDESTRUCT` Operation

The `SELFDESTRUCT` opcode, updated in accordance with [`EIP-6780`](https://eips.ethereum.org/EIPS/eip-6780), is implemented in such a way that while it does not actually destroy the contract account, it does process refunds. Contracts that are not used will naturally expire over time as the Ethanos epoch progresses.

The rationale behind incorporating EIP-6780 into OverProtocol differs significantly from its application in Ethereum. OverProtocol's implementation is specifically designed to avoid scenarios where a self-destructed contract account becomes indistinguishable from an Externally Owned Account (EOA). This distinction is crucial for maintaining clarity and integrity in the network's account management, ensuring that the lifecycle of contract accounts is handled in a better way.

## Future Changes

As OverProtocol progresses towards the Ethanos endgame, significant changes are planned, particularly regarding how storage is managed within accounts. These adjustments will be designed to ensure that backward compatibility is maximally preserved and that a seamless migration can occur. This means that current dApp developers should not be overly concerned about the impending changes.

### Storage Layout Change

Upcoming updates to OverProtocol will include a comprehensive overhaul of the storage layout within accounts. This change aims to enhance the efficiency and scalability of data management on the blockchain. Details on the new storage system will be provided as development progresses, ensuring developers have ample time to adapt their applications. This transition is intended to be smooth, with support structures in place to assist developers in migrating existing applications without disruption.
