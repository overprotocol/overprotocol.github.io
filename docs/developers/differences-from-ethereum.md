---
title: Differences from Ethereum
description: A list of differences from Ethereum that can significantly impact how applications are built and function on this platform.
lang: en
---

While OverProtocol is an independent Layer 1 protocol, it inherits the Ethereum Virtual Machine (EVM), making it compatible with Ethereum's established ecosystem. This compatibility allows developers familiar with Ethereum's development environment to transition smoothly and leverage their existing skills. Below, we outline the key aspects of OverProtocol that differentiate it from Ethereum, highlighting why understanding these distinctions is crucial for developers, as these differences can significantly impact how applications are built and function on this platform.

## Account Expiration

In OverProtocol, accounts that remain inactive for an extended period are subject to expiration. [This mechanism](/learn/key-features/layered-architecture/ethanos) is designed to optimize the network's efficiency and scalability by reducing the overhead of maintaining dormant accounts.

Account restoration in OverProtocol is not implemented at the opcode level but rather as a combination of a new transaction type and additional EVM functionalities.

:::warning
Currently, contract accounts have restoration disabled to prevent their expiration. To keep a contract active and prevent it from expiring, it must be periodically used.

Usage is defined as any transaction querying the contract account's state or calling its functions, including view functions. This ensures that contracts remain active and functional within the network ecosystem, adhering to the protocol's operational requirements.
:::

## Differences in Contract Address Derivation

:::caution
While the same Externally Owned Account (EOA) address can be used across various EVM-compatible chains with the same private key, this does not apply to contract addresses.
:::

### Address Derivation

Due to the state expiry feature in OverProtocol, all accounts, including contract accounts, could eventually expire. To mitigate the risk of an expired contract address being reused by a newly created contract, the contract creation operation always incorporates the caller account's `restoredEpoch` value. This inclusion alters the outcome of the `CREATE` operation, making the resulting addresses differ from those on other EVM chains.

As a result, even though the `CREATE2` operation allows for deterministic address prediction and usage, it is not possible to reuse the same address across different chains as you would with EOA addresses.

:::caution
To use `CREATE2` for contract deployment, the address must be restored back to Epoch 0.
:::

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

## Differences in Account Structure

### Account Nonce

In traditional blockchain architectures, the `nonce` primarily tracks the number of transactions sent from a given account, ensuring transaction order and preventing double-spending. However, due to the expiration feature in OverProtocol, distinguishing explicitly between expired accounts and newly created accounts becomes challenging, raising the possibility of `nonce` overlap. To address this issue, OverProtocol introduces the `restoredEpoch` as a crucial component.

### RestoredEpoch

The combination of the `nonce` and the `restoredEpoch` value ensures uniqueness for each account. This system allows OverProtocol to maintain the integrity and distinction of account states over time, even through periods of account inactivity and expiration.

For a more detailed explanation, please refer to the [documentation](/learn/key-features/layered-architecture/ethanos#dealing-with-crumb-accounts-restored-epoch).

#### `nonce` Field in Transaction

In RPC requests, such as `eth_getTransactionCount`, the response reflects this unique combination. The `nonce` is split into a 64-bit field, with the first 32 bits representing the `restoredEpoch` and the remaining 32 bits functioning as the traditional `nonce`. This adaptation allows developers to leverage existing Ethereum development environments while accommodating the unique features of OverProtocol.

### Storage Count

This feature prepares for future functionalities where the cost associated with an account's storage usage might be billed. Each new storage slot created by an `SSTORE` operation increases the count, while emptying a slot decreases it.

### UI Hash

Reserved space for future proof related to an account's interaction with external layers. Currently, this feature is not utilized but is planned for future enhancements to enhance cross-layer interactions and verifications.

## Misc

### `SELFDESTRUCT` Operation

The `SELFDESTRUCT` opcode, updated in accordance with [`EIP-6780`](https://eips.ethereum.org/EIPS/eip-6780), is implemented in such a way that while it does not actually destroy the contract account, it does process refunds. Contracts that are not used will naturally expire over time as the Ethanos epoch progresses.

The rationale behind incorporating EIP-6780 into OverProtocol differs significantly from its application in Ethereum. OverProtocol's implementation is specifically designed to avoid scenarios where a self-destructed contract account becomes indistinguishable from an Externally Owned Account (EOA). This distinction is crucial for maintaining clarity and integrity in the network's account management, ensuring that the lifecycle of contract accounts is handled in a better way.

## Future Changes

As OverProtocol progresses towards the Ethanos endgame, significant changes are planned, particularly regarding how storage is managed within accounts. These adjustments will be designed to ensure that backward compatibility is maximally preserved and that a seamless migration can occur. This means that current dApp developers should not be overly concerned about the impending changes.

### Storage Layout Change

Upcoming updates to OverProtocol will include a comprehensive overhaul of the storage layout within accounts. This change aims to enhance the efficiency and scalability of data management on the blockchain. Details on the new storage system will be provided as development progresses, ensuring developers have ample time to adapt their applications. This transition is intended to be smooth, with support structures in place to assist developers in migrating existing applications without disruption.
