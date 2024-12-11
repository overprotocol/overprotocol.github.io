---
title: Differences from Ethereum
description: A list of differences from Ethereum that can significantly impact how applications are built and function on this platform.
lang: en
---

OverProtocol is an independent Layer 1 protocol that inherits the Ethereum Virtual Machine (EVM), ensuring compatibility with Ethereum's established ecosystem. This compatibility enables developers familiar with Ethereum to transition smoothly and leverage their existing skills. However, there are key distinctions between OverProtocol and Ethereum that developers must understand, as these differences can significantly impact how applications are built and function on this platform. Here are the crucial aspects to consider and the actions to take:

## Contracts Getting Swiped
OverProtocol currently doesn’t support restoration of contract accounts. This means that once a contract address becomes inactive, all the OVER the contract was holding is permanently lost, so please take care when deploying and managing contracts.

One important case to note is prefunded contracts going inactive. If a prefunded contract (a contract address that has received OVER before the actual contract is deployed) is not used for more than 2 epochs and goes inactive, it is still restorable while the contract is not deployed since it is technically the same as an EOA. However, it will not be restorable once the contract is deployed, so make sure to restore the address before deploying the contract if there is any chance of it being prefunded. 

## You Can't Use the Same Contract Address in Ethereum

:::tip
While the same Externally Owned Account (EOA) address can be used across various EVM-compatible chains with the same private key, this does not apply to contract addresses.
:::

Due to the state expiry feature in OverProtocol, even if the feature is currently disabled, to mitigate the risk of an expired contract address being reused by a newly created contract, the contract creation operation always incorporates the caller account's `epochCoverage` value. This inclusion alters the outcome of the `CREATE` operation, making the resulting addresses differ from those on other EVM chains.

As a result, even though the `CREATE2` operation allows for deterministic address prediction and usage, it is not possible to reuse the same address across different chains as you would with EOA addresses.

### Actions to Take

- Be aware that contract addresses on OverProtocol will differ from those on Ethereum and other EVM-compatible chains due to the inclusion of the `epochCoverage` value.
- When deploying contracts, account for the different address derivation method and plan your deployment strategy accordingly.

```go
// Create creates a new contract using code as deployment code.
func (evm *EVM) Create(caller ContractRef, code []byte, gas uint64, value *big.Int) (ret []byte, contractAddr common.Address, leftOverGas uint64, err error) {
	contractAddr = crypto.CreateAddress(caller.Address(), evm.StateDB.GetTxNonce(caller.Address())) // GetTxNonce = epochCoverage || Nonce
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

## Transaction has a `epochCoverage` Field

In traditional blockchain architectures, the `nonce` primarily tracks the number of transactions sent from a given account, ensuring transaction order and preventing double-spending. However, due to the expiration feature in OverProtocol, distinguishing explicitly between expired accounts and newly created accounts becomes challenging, raising the possibility of `nonce` overlap. To address this issue, OverProtocol introduces the `epochCoverage` as a crucial component.

### epochCoverage

The combination of the `nonce` and the `epochCoverage` value ensures uniqueness for each account. This system allows OverProtocol to maintain the integrity and distinction of account states over time, even through periods of account inactivity and expiration.

For a more detailed explanation, please refer to the [documentation](#dealing-with-crumb-accounts-restored-epoch).

#### `nonce` Field in Transaction

The existing `nonce` field is split into a 64-bit field, with the first 32 bits representing the `epochCoverage` and the remaining 32 bits functioning as the traditional `nonce`. This adaptation allows developers to leverage existing Ethereum development environments while accommodating the unique features of OverProtocol.

### Actions to Take

- Learn how `epochCoverage` functions and its interaction with the nonce to ensure each account's uniqueness.
- Use RPC requests like `eth_getTransactionCount` when making transactions. The response will include the correct `nonce` value, considering both `nonce` and `epochCoverage`.

## Misc

### `SELFDESTRUCT` Operation

The `SELFDESTRUCT` opcode, updated in accordance with [`EIP-6780`](https://eips.ethereum.org/EIPS/eip-6780), is implemented in such a way that while it does not actually destroy the contract account, it does process refunds. Contracts that are not used will naturally expire over time as the Ethanos epoch progresses.

The rationale behind incorporating EIP-6780 into OverProtocol differs significantly from its application in Ethereum. OverProtocol's implementation is specifically designed to avoid scenarios where a self-destructed contract account becomes indistinguishable from an Externally Owned Account (EOA). This distinction is crucial for maintaining clarity and integrity in the network's account management, ensuring that the lifecycle of contract accounts is handled in a better way.
