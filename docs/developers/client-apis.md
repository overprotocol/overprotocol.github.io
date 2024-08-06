---
title: Client APIs
description: A list of client APIs that developers can utilize to interact with OverProtocol.
lang: en
---

To facilitate interactions with the OverProtocol network, such as reading blockchain data or sending transactions to alter states, software applications must connect to an OverProtocol node. This connection is governed by OverProtocol's execution client, which adheres to the [JSON-RPC specification](https://www.jsonrpc.org/specification). This standardization ensures a uniform set of methods that applications can depend on, no matter which specific node they are linked to.

For developers looking to interact with OverProtocol more intuitively, there are several JavaScript-based libraries available, such as ethers.js and web3.js. These libraries provide convenient wrappers around the JSON-RPC API, simplifying the coding process and enhancing the development experience.

## JSON-RPC Methods

### The default block parameter {#default-block}

The following options are possible for the defaultBlock parameter:

- HEX `String` - an integer block number
- `String` "earliest" for the earliest/genesis block
- `String` "latest" - for the latest mined block
- `String` "safe" - for the latest safe head block
- `String` "finalized" - for the latest finalized block
- `String` "pending" - for the pending state/transactions

### net_version

Returns the current network id.

**Parameters**

None

**Returns**

`String` - The current network id.

- `27882`: Creeper testnet

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'
// Result
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "27882"
}
```

### net_listening {#net_listening}

Returns `true` if client is actively listening for network connections.

**Parameters**

None

**Returns**

`Boolean` - `true` when listening, otherwise `false`.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":68}'
// Result
{
    "jsonrpc": "2.0",
    "id": 68,
    "result": true
}
```

### net_peerCount {#net_peercount}

Returns number of peers currently connected to the client.

**Parameters**

None

**Returns**

`QUANTITY` - integer of the number of connected peers.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}'
// Result
{
    "jsonrpc": "2.0",
    "id": 69,
    "result": "0x2" // 2
}
```

### eth_syncing {#eth_syncing}

Returns an object with data about the sync status or `false`.

**Parameters**

None

**Returns**

The precise return data varies between client implementations. All clients return `False` when the node is not syncing, and all clients return the following fields.

`Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:

- `startingBlock`: `QUANTITY` - The block at which the import started (will only be reset, after the sync reached his head)
- `currentBlock`: `QUANTITY` - The current block, same as eth_blockNumber
- `highestBlock`: `QUANTITY` - The estimated highest block
- `syncedAccounts`: Number of accounts downloaded
- `syncedAccountBytes`: Number of account trie bytes persisted to disk
- `syncedBytecodes`: Number of bytecodes downloaded
- `syncedBytecodeBytes`: Number of bytecode bytes downloaded
- `syncedStorage`: Number of storage slots downloaded
- `syncedStorageBytes`: Number of storage trie bytes persisted to disk
- `estimatedStateProgress` : EstimatedStateProgress represents the estimated percentage (0 to 100) of overall progress in downloading state.
- `healedTrienodes` : Number of state trie nodes downloaded
- `healedTrienodeBytes` : Number of state trie bytes persisted to disk
- `healedBytecodes` : Number of bytecodes downloaded
- `healedBytecodeBytes` : Number of bytecodes persisted to disk
- `healingTrienodes` : Number of state trie nodes pending
- `healingBytecode` : Number of bytecodes pending
- `syncMode` : Sync mode: full, snap, light
- `committed` : Check if pivot sync is done

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":70}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": {
    "currentBlock": "0x3cf522",
    "estimatedStateProgress": "0x28", // 28 %
    "healedBytecodeBytes": "0x0",
    "healedBytecodes": "0x0",
    "healedTrienodesBytes": "0x0",
    "healedTrienodes": "0x0",
    "healingBytecode": "0x0",
    "healingTrienodes": "0x0",
    "highestBlock": "0x3e0e41",
    "startingBlock": "0x3cbed5",
    "syncedAccountBytes": "0x0",
    "syncedAccounts": "0x0",
    "syncedBytecodeBytes": "0x0",
    "syncedBytecodes": "0x0",
    "syncedStorage": "0x0",
    "syncedStorageBytes": "0x0",
    "syncMode": "snap",
    "committed": false,
  }
}
// Or when not syncing
{
    "jsonrpc": "2.0",
    "id": 70,
    "result": false
}
```

### eth_coinbase {#eth_coinbase}

Returns the client coinbase address.

**Parameters**

None

**Returns**

`DATA`, 20 bytes - the current coinbase address.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":71}'
// Result
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x407d73d8a49eeb85d32cf465507dd71d507100c1"
}
// Or if not specified
{
    "jsonrpc": "2.0",
    "id": 71,
    "error": {
        "code": -32000,
        "message": "etherbase must be explicitly specified"
    }
}
```

### eth_chainId {#eth_chainId}

Returns the chain ID used for signing replay-protected transactions.

**Parameters**

None

**Returns**

`chainId`, hexadecimal value as a string representing the integer of the current chain id.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":72}'
// Result
{
    "jsonrpc": "2.0",
    "id": 72,
    "result": "0x6cea" // 27882
}
```

### eth_gasPrice {#eth_gasprice}

Returns an estimate of the current price per gas in wei.

**Parameters**

None

**Returns**

`QUANTITY` - integer of the current gas price in wei.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'
// Result
{
    "jsonrpc": "2.0",
    "id": 73,
    "result": "0xc"
}
```

### eth_accounts {#eth_accounts}

Returns a list of addresses owned by client.

**Parameters**

None

**Returns**

`Array of DATA`, 20 Bytes - addresses owned by the client.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":74}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]
}
```

### eth_blockNumber {#eth_blocknumber}

Returns the number of most recent block.

**Parameters**

None

**Returns**

`QUANTITY` - integer of the current block number the client is on.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":75}'
// Result
{
  "id":83,
  "jsonrpc": "2.0",
  "result": "0x64ffe" // 413694
}
```

### eth_getBalance {#eth_getbalance}

Returns the balance of the account of given address.

**Parameters**

1. `DATA`, 20 Bytes - address to check for balance.
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"`, `"pending"`, `"safe"`, or `"finalized"`, see the [default block parameter](/developers/client-apis#default-block)

```js
params: ["0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a", "latest"]
```

**Returns**

`QUANTITY` - integer of the current balance in wei.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a", "latest"],"id":1}'
// Result
{
    "jsonrpc": "2.0",
    "id": 76,
    "result": "0x6c6b9232f2a3471abb" // 1999999673886992439995
}
```

### eth_getStorageAt {#eth_getstorageat}

Returns the value from a storage position at a given address.

**Parameters**

1. `DATA`, 20 Bytes - address of the storage.
2. `QUANTITY` - integer of the position in the storage.
3. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"`, `"pending"`, `"safe"`, `"finalized"`, see the [default block parameter](/developers/client-apis#default-block)

**Returns**

`DATA` - the value at this storage position.

**Example**
Calculating the correct position depends on the storage to retrieve. Consider the following contract deployed at `0x188D0F1F755F2c8000E0BAA09C790561395bB9ac` by address `0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a`.

```solidity
contract Storage {
    uint pos0;
    mapping(address => uint) pos1;
    
    constructor() {
        pos0 = 1234;
        pos1[msg.sender] = 5678;
    }
}
```

Retrieving the value of pos0 is straight forward:

```js
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x188D0F1F755F2c8000E0BAA09C790561395bB9ac", "0x0", "latest"], "id": 1}' RPC_URL

{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x00000000000000000000000000000000000000000000000000000000000004d2"
}
```

Retrieving an element of the map is harder. The position of an element in the map is calculated with:

```js
keccak(LeftPad32(key, 0), LeftPad32(map position, 0))
```

This means to retrieve the storage on pos1["0x079e40b71d9dffe9fd69706f148bf85fae824e6a"] we need to calculate the position with:

```js
keccak(
  decodeHex(
    "000000000000000000000000079e40b71d9dffe9fd69706f148bf85fae824e6a" +
      "0000000000000000000000000000000000000000000000000000000000000001"
  )
)
// Result
0x366df77f0d9029e0c6a3371f56645381ca62eaf0e3b77dee1fd3a443c51a4823
```

Now to fetch the storage:

```js
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x188D0F1F755F2c8000E0BAA09C790561395bB9ac", "0x366df77f0d9029e0c6a3371f56645381ca62eaf0e3b77dee1fd3a443c51a4823", "latest"], "id": 1}' RPC_URL

{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x000000000000000000000000000000000000000000000000000000000000162e"
}
```

### eth_getTransactionCount {#eth_gettransactioncount}

Returns the `epochCoverage` and `nonce` of an address.

**Note**: In OverProtocol, the return value for `eth_getTransactionCount` includes a modification specific to how nonce values are managed. The returned 32-byte value is split where the first 16 bytes represent the `epochCoverage`, and the remaining 16 bytes contain the `nonce` value. This method's naming may be somewhat confusing as it not only conveys transaction counts but also encapsulates additional state information crucial for distinguishing between different states of an account over time in the context of OverProtocol's unique account lifecycle management.

**Parameters**

1. `DATA`, 20 Bytes - address.
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"`, `"pending"`, `"safe"` or `"finalized"`, see the [default block parameter](/developers/client-apis#default-block)

```js
params: [
  "0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a",
  "latest", // state at the latest block
]
```

**Returns**

`QUANTITY` - integer of the the `epochCoverage` and `nonce` of this address.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a","latest"],"id":1}'
// Result
{
    "jsonrpc": "2.0",
    "id": 79,
    "result": "0x200000003" // epochCoverage = 2, nonce = 3
}
```

### eth_getBlockTransactionCountByHash {#eth_getblocktransactioncountbyhash}

Returns the number of transactions in a block from a block matching the given block hash.

**Parameters**

1. `DATA`, 32 Bytes - hash of a block

```js
params: ["0x2387952a4f58511c24775308318eb5e7bd8c5af9991fdbbe195bc4f8c478d41f"]
```

**Returns**

`QUANTITY` - integer of the number of transactions in this block.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params":["0x2387952a4f58511c24775308318eb5e7bd8c5af9991fdbbe195bc4f8c478d41f"],"id":1}'
// Result
{
    "jsonrpc": "2.0",
    "id": 80,
    "result": "0x14f" // 335
}
```

### eth_getBlockTransactionCountByNumber {#eth_getblocktransactioncountbynumber}

Returns the number of transactions in a block matching the given block number.

**Parameters**

1. `QUANTITY|TAG` - integer of a block number, or the string `"earliest"`, `"latest"`, `"pending"`, `"safe"` or `"finalized"`, as in the [default block parameter](/developers/client-apis#default-block).

```js
params: [
  "0x666B6", // 419510
]
```

**Returns**

`QUANTITY` - integer of the number of transactions in this block.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params":["0x666B6"],"id":1}'
// Result
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x14f" // 335
}
```

### eth_getCode {#eth_getcode}

Returns code at a given address.

**Parameters**

1. `DATA`, 20 Bytes - address
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"`, `"pending"`, `"safe"` or `"finalized"`, see the [default block parameter](/developers/client-apis#default-block)

```js
params: [
  "0x188D0F1F755F2c8000E0BAA09C790561395bB9ac",
  "latest",
]
```

**Returns**

`DATA` - the code from the given address.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCode","params":["0x188D0F1F755F2c8000E0BAA09C790561395bB9ac", "latest"],"id":1}'
// Result
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x6080604052600080fdfea26469706673582212202b77e0d93b4a9d85e614d1ddaabcbd15151ac7bf58077ca3abe52416a83b654e64736f6c63430008190033"
}
```

### eth_sign {#eth_sign}

The sign method calculates an Ethereum specific signature with: `sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`.

By adding a prefix to the message makes the calculated signature recognizable as an Ethereum specific signature. This prevents misuse where a malicious dapp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

Note: the address to sign with must be unlocked.

**Parameters**

1. `DATA`, 20 Bytes - address
2. `DATA`, N Bytes - message to sign

**Returns**

`DATA`: Signature

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sign","params":["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],"id":1}'
// Result
{
  "jsonrpc": "2.0",
  "id":1,
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

### eth_signTransaction {#eth_signtransaction}

Signs a transaction that can be submitted to the network at a later time using with [eth_sendRawTransaction](#eth_sendrawtransaction).

**Parameters**

1. `Object` - The transaction object

- `type`: `QUANTITY` - integer of the transaction type, 0x0 for legacy transactions, 0x1 for access list types, 0x2 for dynamic fees.
- `from`: `DATA`, 20 Bytes - The address the transaction is sent from.
- `to`: `DATA`, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.
- `gas`: `QUANTITY` - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.
- `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas, in Wei.
- `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction, in Wei.
- `data`: `DATA` - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.
- `nonce`: `QUANTITY` - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

**Returns**

`DATA`, The RLP-encoded transaction object signed by the specified account.

**Example**

```js
// Request
curl -X POST --data '{"id": 1,"jsonrpc": "2.0","method": "eth_signTransaction","params": [{"data":"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675","from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155","gas": "0x76c0","gasPrice": "0x9184e72a000","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","value": "0x9184e72a"}]}'
// Result
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

### eth_sendTransaction {#eth_sendtransaction}

Creates new message call transaction or a contract creation, if the data field contains code, and signs it using the account specified in `from`.

**Parameters**

1. `Object` - The transaction object

- `from`: `DATA`, 20 Bytes - The address the transaction is sent from.
- `to`: `DATA`, 20 Bytes - (optional when creating new contract) The address the transaction is directed to.
- `gas`: `QUANTITY` - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.
- `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas.
- `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction.
- `input`: `DATA` - The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.
- `nonce`: `QUANTITY` - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.

```js
params: [
  {
    from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    gas: "0x76c0", // 30400
    gasPrice: "0x9184e72a000", // 10000000000000
    value: "0x9184e72a", // 2441406250
    input:
      "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
  },
]
```

**Returns**

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

Use [eth_getTransactionReceipt](#eth_gettransactionreceipt) to get the contract address, after the transaction was mined, when you created a contract.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see above}],"id":1}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

### eth_sendRawTransaction {#eth_sendrawtransaction}

Creates new message call transaction or a contract creation for signed transactions.

**Parameters**

1. `DATA`, The signed transaction data.

```js
params: [
  "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
]
```

**Returns**

`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.

Use [eth_getTransactionReceipt](#eth_gettransactionreceipt) to get the contract address, after the transaction was mined, when you created a contract.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[{see above}],"id":1}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

### eth_call {#eth_call}

Executes a new message call immediately without creating a transaction on the block chain. Often used for executing read-only smart contract functions, for example the `balanceOf` for an ERC-20 contract.

**Parameters**

1. `Object` - The transaction call object

- `from`: `DATA`, 20 Bytes - (optional) The address the transaction is sent from.
- `to`: `DATA`, 20 Bytes - The address the transaction is directed to.
- `gas`: `QUANTITY` - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.
- `gasPrice`: `QUANTITY` - (optional) Integer of the gasPrice used for each paid gas
- `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction
- `input`: `DATA` - (optional) Hash of the method signature and encoded parameters. For details see [Contract ABI in the Solidity documentation](https://docs.soliditylang.org/en/latest/abi-spec.html).

2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"`, `"pending"`, `"safe"` or `"finalized"`, see the [default block parameter](#default-block)

**Returns**

`DATA` - the return value of executed contract.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{see above}],"id":1}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x"
}
```

### eth_estimateGas {#eth_estimategas}

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.

**Parameters**

See [eth_call](#eth_call) parameters, except that all properties are optional. If no gas limit is specified geth uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

**Returns**

`QUANTITY` - the amount of gas used.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{see above}],"id":1}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x5208" // 21000
}
```

### eth_getBlockByHash {#eth_getblockbyhash}

Returns information about a block by hash.

**Parameters**

1. `DATA`, 32 Bytes - Hash of a block.
2. `Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

```js
params: [
  "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
  false,
]
```

**Returns**

`Object` - A block object, or `null` when no block was found:

- `number`: `QUANTITY` - the block number. `null` when its pending block.
- `hash`: `DATA`, 32 Bytes - hash of the block. `null` when its pending block.
- `parentHash`: `DATA`, 32 Bytes - hash of the parent block.
- `nonce`: `DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending block.
- `sha3Uncles`: `DATA`, 32 Bytes - SHA3 of the uncles data in the block.
- `logsBloom`: `DATA`, 256 Bytes - the bloom filter for the logs of the block. `null` when its pending block.
- `transactionsRoot`: `DATA`, 32 Bytes - the root of the transaction trie of the block.
- `stateRoot`: `DATA`, 32 Bytes - the root of the final state trie of the block.
- `receiptsRoot`: `DATA`, 32 Bytes - the root of the receipts trie of the block.
- `miner`: `DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
- `difficulty`: `QUANTITY` - integer of the difficulty for this block.
- `totalDifficulty`: `QUANTITY` - integer of the total difficulty of the chain until this block.
- `extraData`: `DATA` - the "extra data" field of this block.
- `size`: `QUANTITY` - integer the size of this block in bytes.
- `gasLimit`: `QUANTITY` - the maximum gas allowed in this block.
- `gasUsed`: `QUANTITY` - the total used gas by all transactions in this block.
- `timestamp`: `QUANTITY` - the unix timestamp for when the block was collated.
- `transactions`: `Array` - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
- `uncles`: `Array` - Array of uncle hashes.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae", false],"id":1}'
// Result
{
{
"jsonrpc": "2.0",
"id": 1,
"result": {
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
    "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
    "nonce": "0x689056015818adbe",
    "number": "0x1b4",
    "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x220",
    "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [
    ],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": [
    ]
}
}
```

### eth_getBlockByNumber {#eth_getblockbynumber}

Returns information about a block by block number.

**Parameters**

1. `QUANTITY|TAG` - integer of a block number, or the string `"earliest"`, `"latest"`, `"pending"`, `"safe"` or `"finalized"`, as in the [default block parameter](#default-block).
2. `Boolean` - If `true` it returns the full transaction objects, if `false` only the hashes of the transactions.

```js
params: [
  "0x1b4", // 436
  true,
]
```

**Returns**
See [eth_getBlockByHash](#eth_getblockbyhash)

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1b4", true],"id":1}'
```

Result see [eth_getBlockByHash](#eth_getblockbyhash)

### eth_getTransactionByHash {#eth_gettransactionbyhash}

Returns the information about a transaction requested by transaction hash.

**Parameters**

1. `DATA`, 32 Bytes - hash of a transaction

```js
params: ["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"]
```

**Returns**

`Object` - A transaction object, or `null` when no transaction was found:

- `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. `null` when its pending.
- `blockNumber`: `QUANTITY` - block number where this transaction was in. `null` when its pending.
- `from`: `DATA`, 20 Bytes - address of the sender.
- `gas`: `QUANTITY` - gas provided by the sender.
- `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
- `hash`: `DATA`, 32 Bytes - hash of the transaction.
- `input`: `DATA` - the data send along with the transaction.
- `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
- `to`: `DATA`, 20 Bytes - address of the receiver. `null` when its a contract creation transaction.
- `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block. `null` when its pending.
- `value`: `QUANTITY` - value transferred in Wei.
- `v`: `QUANTITY` - ECDSA recovery id
- `r`: `QUANTITY` - ECDSA signature r
- `s`: `QUANTITY` - ECDSA signature s

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"],"id":1}'
// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x1d59ff54b1eb26b013ce3cb5fc9dab3705b415a67127a003c3e61eb445bb8df2",
    "blockNumber":"0x5daf3b", // 6139707
    "from":"0xa7d9ddbe1f17865597fbd27ec712455208b6b76d",
    "gas":"0xc350", // 50000
    "gasPrice":"0x4a817c800", // 20000000000
    "hash":"0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b",
    "input":"0x68656c6c6f21",
    "nonce":"0x15", // 21
    "to":"0xf02c1c8e6114b1dbe8937a39260b5b0a374432bb",
    "transactionIndex":"0x41", // 65
    "value":"0xf3dbb76162000", // 4290000000000000
    "v":"0x25", // 37
    "r":"0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
    "s":"0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
  }
}
```

### eth_getTransactionByBlockHashAndIndex {#eth_gettransactionbyblockhashandindex}

Returns information about a transaction by block hash and transaction index position.

**Parameters**

1. `DATA`, 32 Bytes - hash of a block.
2. `QUANTITY` - integer of the transaction index position.

```js
params: [
  "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
  "0x0", // 0
]
```

**Returns**
See [eth_getTransactionByHash](#eth_gettransactionbyhash)

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'
```

Result see [eth_getTransactionByHash](#eth_gettransactionbyhash)

### eth_getTransactionByBlockNumberAndIndex {#eth_gettransactionbyblocknumberandindex}

Returns information about a transaction by block number and transaction index position.

**Parameters**

1. `QUANTITY|TAG` - a block number, or the string `"earliest"`, `"latest"`, `"pending"`, `"safe"` or `"finalized"`, as in the [default block parameter](#default-block).
2. `QUANTITY` - the transaction index position.

```js
params: [
  "0x9c47cf", // 10241999
  "0x24", // 36
]
```

**Returns**
See [eth_getTransactionByHash](#eth_gettransactionbyhash)

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params":["0x9c47cf", "0x24"],"id":1}'
```

Result see [eth_getTransactionByHash](#eth_gettransactionbyhash)

### eth_getTransactionReceipt {#eth_gettransactionreceipt}

Returns the receipt of a transaction by transaction hash.

**Note** That the receipt is not available for pending transactions.

**Parameters**

1. `DATA`, 32 Bytes - hash of a transaction

```js
params: ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"]
```

**Returns**
`Object` - A transaction receipt object, or `null` when no receipt was found:

- `transactionHash `: `DATA`, 32 Bytes - hash of the transaction.
- `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block.
- `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in.
- `blockNumber`: `QUANTITY` - block number where this transaction was in.
- `from`: `DATA`, 20 Bytes - address of the sender.
- `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation transaction.
- `cumulativeGasUsed` : `QUANTITY ` - The total amount of gas used when this transaction was executed in the block.
- `effectiveGasPrice` : `QUANTITY` - The sum of the base fee and tip paid per unit of gas.
- `gasUsed `: `QUANTITY ` - The amount of gas used by this specific transaction alone.
- `contractAddress `: `DATA`, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise `null`.
- `logs`: `Array` - Array of log objects, which this transaction generated.
- `logsBloom`: `DATA`, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.
- `type`: `QUANTITY` - integer of the transaction type, `0x0` for legacy transactions, `0x1` for access list types, `0x2` for dynamic fees.

It also returns _either_ :

- `root` : `DATA` 32 bytes of post-transaction stateroot (pre Byzantium)
- `status`: `QUANTITY` either `1` (success) or `0` (failure)

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],"id":1}'
// Result
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash":
      "0xa957d47df264a31badc3ae823e10ac1d444b098d9b73d204c40426e57f47e8c3",
    "blockNumber": "0xeff35f",
    "contractAddress": null, // string of the address if it was created
    "cumulativeGasUsed": "0xa12515",
    "effectiveGasPrice": "0x5a9c688d4",
    "from": "0x6221a9c005f6e47eb398fd867784cacfdcfff4e7",
    "gasUsed": "0xb4c8",
    "logs": [{
      // logs as returned by getFilterLogs, etc.
    }],
    "logsBloom": "0x00...0", // 256 byte bloom filter
    "status": "0x1",
    "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "transactionHash":
      "0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5",
    "transactionIndex": "0x66",
    "type": "0x2"
  }
}
```

### eth_newFilter {#eth_newfilter}

Creates a filter object, based on filter options, to notify when the state changes (logs).
To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).

**A note on specifying topic filters:**
Topics are order-dependent. A transaction with a log with topics [A, B] will be matched by the following topic filters:

- `[]` "anything"
- `[A]` "A in first position (and anything after)"
- `[null, B]` "anything in first position AND B in second position (and anything after)"
- `[A, B]` "A in first position AND B in second position (and anything after)"
- `[[A, B], [A, B]]` "(A OR B) in first position AND (A OR B) in second position (and anything after)"
- **Parameters**

1. `Object` - The filter options:

- `fromBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block, `"safe"` for the latest safe block, `"finalized"` for the latest finalized block, or `"pending"`, `"earliest"` for not yet mined transactions.
- `toBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block, `"safe"` for the latest safe block, `"finalized"` for the latest finalized block, or `"pending"`, `"earliest"` for not yet mined transactions.
- `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
- `topics`: `Array of DATA`, - (optional) Array of 32 Bytes `DATA` topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.

```js
params: [
  {
    fromBlock: "0x1",
    toBlock: "0x2",
    address: "0x8888f1f195afa192cfee860698584c030f4c9db1",
    topics: [
      "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
      null,
      [
        "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
        "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc",
      ],
    ],
  },
]
```

**Returns**
`QUANTITY` - A filter id.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newFilter","params":[{"topics":["0x12341234"]}],"id":73}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

### eth_newBlockFilter {#eth_newblockfilter}

Creates a filter in the node, to notify when a new block arrives.
To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).

**Parameters**
None

**Returns**
`QUANTITY` - A filter id.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":73}'
// Result
{
  "id":1,
  "jsonrpc":  "2.0",
  "result": "0x1" // 1
}
```

### eth_newPendingTransactionFilter {#eth_newpendingtransactionfilter}

Creates a filter in the node, to notify when new pending transactions arrive.
To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).

**Parameters**
None

**Returns**
`QUANTITY` - A filter id.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","params":[],"id":73}'
// Result
{
  "id":1,
  "jsonrpc":  "2.0",
  "result": "0x1" // 1
}
```

### eth_uninstallFilter {#eth_uninstallfilter}

Uninstalls a filter with given id. Should always be called when watch is no longer needed.
Additionally Filters timeout when they aren't requested with [eth_getFilterChanges](#eth_getfilterchanges) for a period of time.

**Parameters**

1. `QUANTITY` - The filter id.

```js
params: [
  "0xb", // 11
]
```

**Returns**
`Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_uninstallFilter","params":["0xb"],"id":73}'
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": true
}
```

### eth_getFilterChanges {#eth_getfilterchanges}

Polling method for a filter, which returns an array of logs which occurred since last poll.

**Parameters**

1. `QUANTITY` - the filter id.

```js
params: [
  "0x16", // 22
]
```

**Returns**
`Array` - Array of log objects, or an empty array if nothing has changed since last poll.

- For filters created with `eth_newBlockFilter` the return are block hashes (`DATA`, 32 Bytes), e.g. `["0x3454645634534..."]`.
- For filters created with `eth_newPendingTransactionFilter ` the return are transaction hashes (`DATA`, 32 Bytes), e.g. `["0x6345343454645..."]`.
- For filters created with `eth_newFilter` logs are objects with following params:
  - `removed`: `TAG` - `true` when the log was removed, due to a chain reorganization. `false` if its a valid log.
  - `logIndex`: `QUANTITY` - integer of the log index position in the block. `null` when its pending log.
  - `transactionIndex`: `QUANTITY` - integer of the transactions index position log was created from. `null` when its pending log.
  - `transactionHash`: `DATA`, 32 Bytes - hash of the transactions this log was created from. `null` when its pending log.
  - `blockHash`: `DATA`, 32 Bytes - hash of the block where this log was in. `null` when its pending. `null` when its pending log.
  - `blockNumber`: `QUANTITY` - the block number where this log was in. `null` when its pending. `null` when its pending log.
  - `address`: `DATA`, 20 Bytes - address from which this log originated.
  - `data`: `DATA` - contains zero or more 32 Bytes non-indexed arguments of the log.
  - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments. (In _solidity_: The first topic is the _hash_ of the signature of the event (e.g. `Deposit(address,bytes32,uint256)`), except you declared the event with the `anonymous` specifier.)
- **Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x16"],"id":73}'
// Result
{
  "id":1,
  "jsonrpc":"2.0",
  "result": [{
    "logIndex": "0x1", // 1
    "blockNumber":"0x1b4", // 436
    "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "transactionHash":  "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcf",
    "transactionIndex": "0x0", // 0
    "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "data":"0x0000000000000000000000000000000000000000000000000000000000000000",
    "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"]
    },{
      ...
    }]
}
```

### eth_getFilterLogs {#eth_getfilterlogs}

Returns an array of all logs matching filter with given id.

**Parameters**

1. `QUANTITY` - The filter id.

```js
params: [
  "0x16", // 22
]
```

**Returns**
See [eth_getFilterChanges](#eth_getfilterchanges)

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x16"],"id":74}'
```

Result see [eth_getFilterChanges](#eth_getfilterchanges)

### eth_getLogs {#eth_getlogs}

Returns an array of all logs matching a given filter object.

**Parameters**

1. `Object` - The filter options:

- `fromBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block, `"safe"` for the latest safe block, `"finalized"` for the latest finalized block, or `"pending"`, `"earliest"` for not yet mined transactions.
- `toBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or `"latest"` for the last mined block, `"safe"` for the latest safe block, `"finalized"` for the latest finalized block, or `"pending"`, `"earliest"` for not yet mined transactions.
- `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
- `topics`: `Array of DATA`, - (optional) Array of 32 Bytes `DATA` topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.
- `blockhash`: `DATA`, 32 Bytes - (optional, **future**) With the addition of EIP-234, `blockHash` will be a new filter option which restricts the logs returned to the single block with the 32-byte hash `blockHash`. Using `blockHash` is equivalent to `fromBlock` = `toBlock` = the block number with hash `blockHash`. If `blockHash` is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed.

```js
params: [
  {
    topics: [
      "0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b",
    ],
  },
]
```

**Returns**
See [eth_getFilterChanges](#eth_getfilterchanges)

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}'
```

Result see [eth_getFilterChanges](#eth_getfilterchanges)

### ethanos_getRestorationProof {#ethanos_getRestorationProof}

Returns the restoration proof for the account of given address.

**Parameters**

1. `DATA`, 20 Bytes - address to get the restoration proof for.
2. `QUANTITY`, integer - target sweep epoch to restore the account from.

```js
params: ["0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a", "0"]
```

**Returns**

`Object` - RestorationProofResult

- `proof`: `DATA` - the proof for the restoration of the account.
- `EpochCoverage`: `QUANTITY`, integer - the epoch coverage of the account after restoration.
- `RestoredBalance`: `QUANTITY`, integer - the restored balance of the account after restoration.

**Example**

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"ethanos_getBalance","params":["0x079E40B71d9DffE9Fd69706F148bf85fAE824E6a", "0"],"id":1}'
// Result
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "proof": "0xf91e44f90abfb90214f90211a0921b457ca5cab880d444494ab9a4d08abb1bb2996d2c5cd4e99788ce0e1e4eaba04d9d9d931d26fdb11365c3835a11bf2333919d684d2e10a4fb43e82ae7894975a03382f8bef7fd6d6c60220de06c0781c6c8c935195f530c68156941da58a3cc23a0d8ddf7800e7112f6aa7a1515a4749599fc2c4a204f2907bff696fb6d1becf4b3a046f57ae90e21076160e21426857feb46eb07feba57a432abdcce23b9f642f37aa0c33aa01a97487feb99b025e11fa1b3673ff05c42335b5036108ea413b1928c88a0248bf159ee60a7e00dd92758540b0c6e830c7ad615708fda6e6a61f892962db4a0d1303290568ee40afd4369af636946fa273747fbda5ee8fdfe0d8ce04b7dd3cca010cf90ed5f27824a00b26ca3ef4f7e77f5a2548a5eaefa0393ad6ddd9b322ed2a021412560b8c640300b4dc0be19639cf6c8667cd93971debf12492b29bb4cdf5aa0aa4db5b60220d6d9a22480ba27833ffd46a6fd4f85e6ed3d36ac1df900a90ceaa05ad9c6384078e77e3550115cfc6b71dbada27d1c6f1fe9d2ee99e0cf7142b546a08b469e837f63b47f70945077a2af4df142115427121592841dff8f990ba56298a0ea3788edd098f081cd4834e98fe3380a53a360b44a2095a6128a81c35104dde2a05582358db49fa21a739711283a514ca3ceb298ec5290e401a31c369258efb379a0de7b75a9afd2cc594bf612a938e252f52dade9fb2daed2ea96eb2d52c662b51880b90214f90211a0264dd745ce4864e9adf03f296cb29caf0276dc743b69294185226b81263a5e80a0399c13b65957c8f197582602312bf69d03f48b5bf160a8b082080d45c25efddca07694be583f9817cdbb7f137e1e5c7e1f6c79ec4b31797ac5ed7c27c8e880fa5ea065ed634cd94c91e05e16083da8c8bcca369cb1c0121e766fe473033b03a9b0dea0817e7cab8f04ea4ee085e121f6ea737b99967a2edf2107d3f7fdcbe8edd96e6da0110680eebb8af2a93f703f738f5a1a86e432016f5adefe4812a4f28c6bab0c49a0677f33471cdadf74abaa045ad2fa4a1fca4c245af738669ab830501fec563717a0fad5f230f6a0067c5cee4c22e34736f7cf5d92bd7106fff954bfa5139b916baaa052bdcbb603a300da7f86028b523bc27731b695f0b131ceed1f8135e458ffe175a07d82a78e01083e1a2536a37237ca353d575117b03319b70c7cfee8186c698770a04ba8de15982b4eb60071fbde767929c91d55d779f310452059bfcedd8db521a0a0b6b72a55db7fa17ad0fe48c7ac78cb093f2fe8f44b798ba2c5eba329ee712fe5a0f5de7e491bb7386db7f999f2548ace17b874bf4584f7796f8440df08dd681b0ba08c4fa72225ae7bc1d92c6dbcc7909f0ce352179e7b168d062929e1e8cd98fb47a0e7f3e4fe415f28b2c815769993dabb978f775e05b84bf02658b037e326794dafa0b5ce7ed0b01a92b33428c97e117ca0084fe1000cb1f2fafe0fed7ecf1526dab780b90214f90211a0083f0fe70dc04edb470a3bc79a25672559282e9058bb30423c39c7ff0c17a7bda061c41c924f03a5f36c4d3f7738adad0e5eb25827e91cb97b85f7d23b4619e7aea0cc5aa3da9242559e049e472042ed85ed1d185b36286fb5d992357066b5dab8caa0aebe9970d7554e30afd5658f46d661bd21f8ca865bf3ee586279405c5330d2b4a059d0a6742fc3f07ac78c6ef8fa40855dab5720d6c9017424d913ba259a72423ba0fb5e60d619acfacef80e8c15147d2267131fcf992bb1987cd506f1a5a81fb29aa0c362fa76a44a4a5560a906e063eeffd83c109257dc4447bb5be5a36d6718f434a05213a28d9d6944c377ec4d1a97fd8157eaf006e08d4ea0f33af976d884bb42a9a052f155ef1de15f89382c4b78c67773d35fce402b4c22290ae66ca60cef34ad90a01a39f508d455cfa89ef759c142c411782b3c440179a3131c838c78cbee2bfdd7a043ccbcac50c750c2fd5d126ea836a63d385192437dc9f4403b4ef49ab17b0c10a0f5ef7fac890c5a7d54368c2e12b84df261ac3ca662932d89f2ad2f3d7d4cec1da061bd793ee1af0b57cd4b967fee461a92d4f24ff28f44ce639145fc67a5fc3399a06205d72392bae0f8d42866a5bbbcda5f376a7d21a37ef68bea9e585f46242b9ca029ae9b6983ec4a9e512b4bc4d459d2f48e2125bfb12f52cc2ad706cdca503aeda0ffbc4c5431ec5101a76b8e0468e9f12ba12aa8dcf8c432b0d607fdf2593805c680b90214f90211a075f1b5a673a0c8db8e5d6f57f6655f829d97d247e0395c0ea07a53dc0f645075a0a2d1b5adc5a15eb4dc82ee9a12939211a41abd4887742bb306b84dac28799f71a05f19d6deb9bf9b412aa0e887050131f707647d5dc463f03933eb22283137e4a5a07a04d897c1363ef3233c967c801abaa4e5b794586e3f87e88357ef65afbad88aa09ac622df4309d5aa1cd072a717acd476920fab0dd5b2d2d4e1d8a4aec3070377a0c185f5fdd6f381573ec7ac2bf0b6418fc4d7d413cff3b92fe100d01521891bdda0de97b0a33079a86823819d4e3c30cd7355e4d6ff7043f5d77884ec8558b8486aa05187a9e0ab9daba24a737f5c755d6a90d47e4c4d7928f4309f393bac07ff0f58a08e6f2bf12ebfa31462530ba379e02aea153d5fbfa2207f3e4d62a24c0c069918a06095f062eb41655615a303f3b2fb7e5d88a28515a2035ba456060262c21bf9bca0536fb8b927fc177477f781d0a104e00b29b065119bec236f7e5b3a5835709488a008d9f754555653780bdb189347c8f8ef504cbaaec8b2063b01041ab57257aecea024d5b643068e59bd77111f668a8b007bdae9b3cd82b61d1d3222959b10a344b8a0f177eac983fbe6889af354156f104f0bc8d32825a88a79d7fe18ac775f2536e5a0a733ac91849d8e1878ad2ed4211fa8ecf09499f78f035c0f1072b5b08cec6a78a034d52cbbe43a12c1d05a323982dcab99d821c3db54b0585c3d95a5507b959b2d80b90174f90171a002c3647e70a6520db9f6e4b7dce398c5f23c2b15698af6a98d60eebb020b941ba0322c43d7c0549f984d220467410ce6bdae787c9e3d5586598763038d9b90fee580a0dbe65d579423ef51795e7cf6313f1f49410e8f06e974e99f2d6c8763d683b322a08f9d971196d6db50d983733639bfd89a9358f1a89e7983683ea9a5b027944d7280a0fe33b3e0c73d66612717e3332d2e940be5cd04dedee93f915025aab197705a1b80a01e29f89fcd0a43ae9dc812f7242eb0d826f4508bf34e9b7d3a2fe8adbf90a3e5a0e4831c719a24651724b9fae42e01becb7193cf6f04f45ec24656970a8477b903a0039d88926db573c6cc7d7f6208813b883ef7e0d609324932c0ee62c4bfa36752a0745929db8b604b4fc23c1366283ef97e838294a2741163f1c60110593558f16180a01a142fcb7ef2c7048c1b935a4cd1bec522a2b7c9e6edcb40b14f3de3e4211efba0f11a17bc72bee8d21e617b7783debdff0957971d447ba5cb52e1ce4c3746fc468080b853f851808080808080808080a0abfcc7ebdc4123f5c17ffc2ddaaf8be3bc468ace346a38c4939a7edc9b883ac3808080a0a98734c98e7f915c19999354eb77df2265a76a01642a3fda7d45394789533898808080b895f8939e20c42abc6213ad44d3edec739492e93ab562033bb31355692e15cf9ff668b872f8700302896c6b9232f2a337c232a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47080f90973b90214f90211a07fb1b83e7b8b8bec9fd3ca2da7617d541293d1e53adb6b44ada80721509ca48fa0550a0cc3c8217986b5ebb8e0dbbc5d21613d49d211194264e56fc5b4f6c46087a0237c96447efedcc7a74ef2121d5e8a5bee94c641d97d314c85b9651a9bd46cfca0fe8ef2dcb93449fa6bbe8cbaf17b71030cd33d0e5dfb4d6e029a32dc2d7cefd6a0b47b31620ebd3a40fd552c53ebe2f88a77af710e86e2ed55351be02fe76874e0a0493db6b587605c2c5aa653d3180f464c8362d77d4b81d2b6e83a1867af9652f4a0959e64c078244199fa7d065a4381f0d9542ba5626d29952e6efb9c048772c6cfa03e8d03360e417f15d36be6286b198e9a189862b1a31a3763062f7f91b6a651b5a047f76d7b23a7b9e2f8978d9c07cc8ffde2d70eef291248dd4bb197585598eb9da09e88b12b1bdf9d6f721347c974f77c43182abc0573e654ab7b5936913375d980a0110fa3d6b558cb814983abe43c51bb93f08bf6b6d1fa6dd0e61889e03f2eeddda09810c48acbd2f7d6d59e823db3e5b507c475012628e612193ffe9987df943639a0d73e4cea2ac3d76ca756dca3b42dbfc0dcc1d67e4fad5b2f2a34393e47b0c15ba09f632659712154b46c95e0e75ccd4d6ca38007de3cea4aaf419cf8661f9b2663a074a04b9ca0cf729a56de0b68f000188f14501e5cb85bb9817d137d106a0545bfa0de2dcf51b3085cdcfc64897382e86eb47fc3a0bb334940fc92a07249e7d3f65880b90214f90211a0d3e699d84e1834a645191428d20f5e2d9b78e32a58c63327de331d26071dd0c5a07bc2822fcc419eeffb7dbe1c249f56ac8f32b83555b0371d8304a7edca8b7bc0a0106256c4c675ece2db65ad4dcc6625b13f2fa7ea34b909d234fbea6a500e1823a0238d685336619defeb66a360130f58ec4b29f9256d64742ce80af83ec91038a4a0d02b1c1e5df4a456f25768b0e6ff2f2971f0424efc652bdf87fb8ba5a22114f0a0beff76afbbb4032ed1807a5bb6f4b751302141f794488c216d79245ea5eed226a0d6b21fc0ea1eb137ab441db0d23186966dbeb57b9c78b0ec322d7d32969699a7a07232d4dda4c8ca59bf23f2a85de201bcf603dbf0f6cffe93028f1748aed111b8a05f8ec9ed56c3bacaa9b4a3c0fe9ff3e5893f41ba6dd78f7a4382635cdbba1f6aa031c97354b7c0e346155391751c5dccb71651543f0668e358468a2516a1e98334a037e451cdd7e7f8cfd062617aaf1456e4bde1b30fd1a763dfc5bd8e986a26cb2ea0665df408c794c48803ba84016fc1ef1824676a5e487952b56a164349d35b91eda06883a5063f47baedc620b2e597b7abd18b15bce7533dbbf473927d3182f779aea0c3d838e10d11e573ee7ca1a8b63e1cd63fc96b0b74b6897b057db529cb493e43a039066f40108a8a0da1ffde37db84818963c873738895d1ad5979b0889ba701ffa0abc78c031d284af5969456f7b66cc02d63fc84efc8133613448cb6f2162e985c80b90214f90211a0d00241a4573e07fea4a11122bddf7a7ee51a5592b7d4a84d49a80cb070b5ff4ea05c09f256c08de361305bd8ff8d9c0e5dc14ac3ab008cd737cc0c9c6c8526713fa02b6af3f2c477d4485748d58507341902d7bbf4b8e5d4eb5b777c15e3e097024fa0526de12787c59d85a598167975a1fe2310d38a40fa64519e17b0fa6cabef1d6aa02de6bdc027c47ff997596254c055f145e5545da05715facbf922fdf089aacf21a0474f9a79b26191164aeb61818d6b26129c422cbf056470d2891e096f870941f3a0cdfaa55ab4ee4727a355b543fa6b80dd56f65d51534ba487749ce3eb1d7ab45fa0a32b981517e195a4fb2afa46f88214422e0f552015bbd384610ad1c0b95229bca00b83f631058ea4c62dd2ae0b0cee41c674ebf4fbd78569390e4dc4ee86637f53a014f482563599b0fe450e290d6f59fde34e5ebac7538103f36870e0e348a9ea42a06d3ab512b91e0236a93e33416f29b5f8b34d3bed871c14de72a70c320db25907a01a4fd439ad7f29ff8bfcd5a799433f04014bd8c6e755979154ca766feee09f2fa00f71c2211c956f0508188f05ef6fc2d3ae80beaa4bdba71a97af7f0c7190f248a07bc61ea97819cdf3eb31bb8cc91099e14aa1634c9cd44e278fed897b924535baa07ff117f435cda85c4cea1b6d0e13185b9625203c6e4a14d186ff6a21bd2ef83aa00b3d1799f9c20053bc8171e084eaa210ae7d342d1a47407229fd17fcda6d294080b90214f90211a0f13038844b268dd796713bdd96d16a650dc1e1ea2a6602104063ebce3a2b517aa0d916798f1feb23dd9f4dc2e92d3e82857b2c8eb378be7461f86fbdfe9587c32da0d4b735d75342a6d1ebccad8386267c814d2793fb58dbaa335930d13b6e7557a3a005679df09478173338e360c8f4e04a7bee38558c1aa92fabde6b273d3d27d7c4a0473667e6ac695ca2c9a71c9578fcdd83012fece43b9ea3ef8b3fc0c3fb8c911ba0ba4ce95cff8419c73f9b6030107fba1d5862a54179df38b10b7461a7f4c67ddba01c7e1c3671c2e9f5f46688a430316b7bbbb1e406445dce96e57c99a717ecf5dca0da5a407f585a1777d1ef482a5b8f293c4ae4d3623ef932e4de61b2f95861b28ba0997d13ff0edf7c2dfeec67e564165ca2c3bdc8d89c2401d532bb4108327c9dfba0324fdabe08dade8a4e2a5fa6a32e4f9f3a50d54591d8e03daa89324672f229d1a06d21df4b34016c7fc5b9b1adba12026a75414dfc667966b63e6543716bd5f96aa0031cbf9182752a856efa22061d63963525b4beb51f6dce4b0fb00ca08e4a3870a0596fd393a9aed9cd8846d665da03117ad5480e162742592aebed13cb6319b353a08e820592d79e6db527c5aac497a95da8c0161117604cdb5b1395332381b15f83a07769421858f5ff961606bfad0f5f5939377459092e0edec0f21b638069e70497a0d3346e376cf2f60823f3980acf3cda2eec76528c4ec7621e9bba6f7e209b670980b90114f90111a02f5944a42ed00bfb5ec4f0721c01e105c5205ce104395f30f85cc459b98ffc6b8080a019fe52ead719dabe7dd9c8dacf890059462016b846644b3f06e2d27bc4f99c22a04a7d1d0c3e5da11099f1a0f8ebeaa63b2ff80948387eb094dc27459efa7dd49680a02ce146b479cce800c1f61c15f667ea13860e23b5ea353ffd85c87d45ebd42a0080a027e98fe5af32f2acbbfeca38f5cee85565ac93d47153711a045b578b77c0faf5a07bd2c015d4f9a6262294cfb848198336851138a5255ec2bc3e090feea31a8f70a050fa7053fe07fc899e6eb004d54771b7b3fa71728819e13f993ae78395cdd8a9808080a0d694b288fbd13e675441821c10b1ddd7e712898df651a1340fa6dce08d29a6fe8080f90a09b90214f90211a0baa19ee5aa6419135dfc76b7d490e21ecbe6ba25a8db18095dfa279696949504a02eae7620d2e66c7a2ff0b59fe86124b4806bcfe0a74436dd2a03b04597f6f3a0a0309723fe79d6271f36743214ade12f343e552a77a3a4f1f08f80781ccf123236a0fa3d159a293aa045c1ac83db674298d0d6521c7e4bc56338de476b1d58d67bf4a0921b171f11457f96fd573e3916b63c9f5c11533db94668ce4dc3b92dc8578c69a03758b74a752274848d258060504fe8d48217a552dd5eb6850f0cdac1235bfd1ca06a1562a38b7d75b059e743442879da6f1cb184bdf7fb74b0c53c36ee7bf8124da0c384216d0760695dc438737dcf55f255ae38fa877a8b3448ffb5564c849d3edfa0e186aa0155465b29deb3dde90aaad2c6c941e26c6ab4d6e86d72f0d342e06c8da0a0d44915e1c36393df792eb7bfb5cd5510600d25e84b451eecc80ec2360b26cba02aa36ce5e855306ebb68fcab801290aa57580fcc2dff5909e8a7b84a223bd04ca0d063728265f95e1e321e739b1ebd8489c8f70cd7eb7dc4ba9defeda1caa7fb79a08108add5235add4656192dde1d73a65a6088a976ed584694eef8814f1dd23076a0c4864b5c04d86dca23a8d1c72461279d62ce262a3d50a0a2c207b723033393b6a0f045efad099a17d520aa13427d5e2cc8f91d230feccadc691d0675b1d5725912a00a809ae625958d1e9e8db4e5e3f819787e766f544ec43a2153dcc5d4fb2997c880b90214f90211a00edefe549ac781aa27af62797d1e6358feec2e3c95c66094fb61d362ed1e341ea0bb959eb3d3da46788d3ab30de4ae9d1437cebee2c548a69938c6610e4fc95979a01394ebb5191df304ff4bfa153c93f0f4839925e7e4dc5c437ab5b6164e24dd12a0cedcca5793d33bb9010a66a91ae063ede14b7b047f662e4e3c6d3a5924dff388a0c70b036294fae16219e27edc7fa98774c5103c6d3591aaac3da90dfe711a3c84a05811ea8da4786ceedcbad0a71f040068bdafdd8999552c0e91e57a7d35e53a83a0f83885b2a884b7f27957e712b779be3f4a5203503cd17794592069a4eaaaf7dca05e643afb568c4549d1657046da736c02aac868e772a1f15d402baa3ddfba6f2fa0133e012b421928cfeabe93386f3e62c48f88899ea0de8a890adc2716e485a942a0205d1f3b2d4239ba56ccb316201b8dc8e6d6643f66356fb9413e80e241811220a01cd1fa77858b948dff2bd31db645a934924dcfeb802cffdef8540d2512ab0663a0d792dbb3071ab745dabca5aeac43f14afbbb103d86056e8b1bab3cfe7db53e51a03e7279336428356b590982907c528d56506b29495a73f2e4939fa4b3843c37cfa0faff06c86f5878925a0c4d4dcd21d02bcdea6a9bde0e24367c8c212cf208c7e0a0cb544e9a5663d03dc83cde8802a20c78a844604db0909b9ea5acfe7964ff9868a03bbf20ecf3b5e7e7d79275554875a2aaa9b8a1d3f1ae36da4bc93f32eaa785b480b90214f90211a075517f3bb1e00ad3a541dd7e83e2ca45335a36efc983d9d48071708e3069a398a03f4b30696a3bbf1d54a6b694841c4986bcbddc98f532e567fb562e285ec83e9ca01b8474bc0cfec95493aed67722b58d550fe7b0601664211b1339068ea64ebabda02e451e9985f5b34e6814c707ad3cbb8bc36d5a765f5c28f15a0342ba94814cb4a0841bc867b83d5937fbee39117ccf2717a64dc2f93759fb3695a018ff5ba8c241a052a7f801a82a32325e3affaffd818aec14159cdef9ff071e410c963f5e134d63a036497963684413dbae7530d91d6d2c608269c759ad78bd35f9cb05159bed7c8da05c42c617a2e6c43d0d4612fb4ca773371575a6749bdf55e3c570af114e17cfe8a05a8c3fbd24a70c60f7cb859719765f5a9e357bd84a4a2ee8e79b0b8596f225a3a07029c0ffd0653ba73cc21e1e93934f399a036a385966242e4716fdc14703f9dca0a9765bbeaccf4d3942bccdb731a6a4035158af890ee6f9da3e963858b33ead4ca0789f979209f6a8aad56b6adfbb519e4b109b8ba374f1a8156600c986cbc2a65ca0f8f8a7f80ae92524d46789d7cbf74892ea08a02c95187e4985b6877f931af476a0c0091f1b5d2d90f8550f066122abe1c7daf43e71cb1908381e717cd059b30effa0b1f8ccbddc27fde6d7aeb52c4521e6dd4cb0ebc130a065a5ea104d7acadccabaa018577fbb14829b3600b4e1c6ac0342002f409853760b18ee475dff24b0f3378080b90214f90211a0082970dbd3403cac201569b5204325ebc54514713decaaeb949d527070daf288a03396fd760cb59bd3826cd034c524f1455b7839b279e6c273a4daa66a2557ab13a0f216e44d523ecb31b70591152f209582b8b6ad760c5a3b7bf8a47d12ddaffb18a0744e5df975cccaeadfabffb7308f4c74b18a51a099cda08461c60d437aa79b79a0e3d1a5662fcc8816dc29a1ddbea0cc9ea798d9d988b6c8cd097d352b3ed16bd2a06a9cc70ab74801ebca1179282453c337f1d75728680714f32347c2a40fc85136a04481f1040c8d42e713085033bef49239813f5c54d4157368e08cba1dc411aaa8a0170823968ede745d9aea05169b9ecb9d77a6a66b40e6492961659bf868cc2189a08f908efdce0d4dc7af1bfc2a2bb2d24f48a409f0c52a36e7dd30b9613f2d8e4aa032138b76c6a7a52e53e20814f7ed388e13775fb3dab416f38b8e410876123857a0b772ae92d5d32854321fae7298febc2f469eaae18a57ac2297af07122027a715a0c3aa96fc6e76aba2139f2f06e2a897de30b41cc4d879717f527e5ddcdf3fbf00a02ad7bd6766f5a399d715e217578e6bc554a5f3e7321c57b799d8e3e41a20b045a0b76b93e0f0262bf2a361820036ff8480d3102604564622381333e0d15a79f2aaa0355fc08ac7ef89b09d00d651fdb452a86f524446e86568bac76484c19e78e6d9a0ffd559bdc905d34b75a619dabbcfeb85d6c931889014579f8d53514c368b7f8280b90114f9011180a0dd9927fad6cc976552dae5a4eb518db22a72c9753821974de342e1de7392ad43a0e85282b3464ef58425eeaf2f8a05bd9c4a102fecf31165fcea5cb85d14db5e86a0ea801f83c4f74619be72556acd921b63a4c59cc27922230ba4d5c7afbd4c830aa0a949cb1c0843ba0f20a11f572f09db2515be2af943cd9cccedb58080cbaaa532a02901d8ecff78bda787e668f0aee43da8bec183715a70bd7739f4b1135d743614a061f637f883b052bf02a52bcd996f164099b53f0fc73087c0684488d61438ea488080a013acdafb98619be1ad6d76f147e53a2f1b7095ead65cf07a5369a33b8d11f2e480808080a001e86426356515f5f3ad6bc2a2e7872ea843377ec41045a1a84eb61b8451a28c8080b894f8929e3d608554927fb5e5820e31339681312cca6a1d288435095aa9d78da49a67b871f86f80808802c68af0bb140000a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47080",
        "epochCoverage": "0x0",
        "restoredBalance": "0x6c6b9232f2a337c232"
    }
}
```


## Usage Example {#usage-example}

### Deploying a contract using JSON_RPC {#deploying-contract}

This section includes a demonstration of how to deploy a contract using only the RPC interface. There are alternative routes to deploying contracts where this complexity is abstracted away—for example, using libraries built on top of the RPC interface such as [web3.js](https://web3js.readthedocs.io/) and [web3.py](https://github.com/ethereum/web3.py). These abstractions are generally easier to understand and less error-prone, but it is still helpful to understand what is happening under the hood.

```javascript
contract Multiply7 {
    event Print(uint);
    function multiply(uint input) returns (uint) {
        Print(input * 7);
        return input * 7;
    }
}
```

The first thing to do is make sure the HTTP RPC interface is enabled. This means we supply Geth with the `--http` flag on startup. In this example we use the Geth node on a private development chain. Using this approach we don't need ether on the real network.

```bash
geth --http --dev console 2>>geth.log
```

This will start the HTTP RPC interface on `http://RPC_URL`.

We can verify that the interface is running by retrieving the Coinbase address and balance using [curl](https://curl.se). Please note that data in these examples will differ on your local node. If you want to try these commands, replace the request params in the second curl request with the result returned from the first.

```bash
curl --data '{"jsonrpc":"2.0","method":"eth_coinbase", "id":1}' -H "Content-Type: application/json" RPC_URL
{"id":1,"jsonrpc":"2.0","result":["0x9b1d35635cc34752ca54713bb99d38614f63c955"]}

curl --data '{"jsonrpc":"2.0","method":"eth_getBalance", "params": ["0x9b1d35635cc34752ca54713bb99d38614f63c955", "latest"], "id":2}' -H "Content-Type: application/json" RPC_URL
{"id":2,"jsonrpc":"2.0","result":"0x1639e49bba16280000"}
```

Because numbers are hex encoded, the balance is returned in wei as a hex string. If we want to have the balance in ether as a number we can use web3 from the Geth console.

```javascript
web3.fromWei("0x1639e49bba16280000", "ether")
// "410"
```

Now that there is some ether on our private development chain, we can deploy the contract. The first step is to compile the Multiply7 contract to byte code that can be sent to the EVM. To install solc, the Solidity compiler, follow the [Solidity documentation](https://docs.soliditylang.org/en/latest/installing-solidity.html). (You might want to use an older `solc` release to match [the version of compiler used for our example](https://github.com/ethereum/solidity/releases/tag/v0.4.20).)

The next step is to compile the Multiply7 contract to byte code that can be send to the EVM.

```bash
echo 'pragma solidity ^0.4.16; contract Multiply7 { event Print(uint); function multiply(uint input) public returns (uint) { Print(input * 7); return input * 7; } }' | solc --bin

======= <stdin>:Multiply7 =======
Binary:
6060604052341561000f57600080fd5b60eb8061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c6888fa1146044575b600080fd5b3415604e57600080fd5b606260048080359060200190919050506078565b6040518082815260200191505060405180910390f35b60007f24abdb5865df5079dcc5ac590ff6f01d5c16edbc5fab4e195d9febd1114503da600783026040518082815260200191505060405180910390a16007820290509190505600a165627a7a7230582040383f19d9f65246752244189b02f56e8d0980ed44e7a56c0b200458caad20bb0029
```

Now that we have the compiled code we need to determine how much gas it costs to deploy it. The RPC interface has an `eth_estimateGas` method that will give us an estimate.

```bash
curl --data '{"jsonrpc":"2.0","method": "eth_estimateGas", "params": [{"from": "0x9b1d35635cc34752ca54713bb99d38614f63c955", "data": "0x6060604052341561000f57600080fd5b60eb8061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c6888fa1146044575b600080fd5b3415604e57600080fd5b606260048080359060200190919050506078565b6040518082815260200191505060405180910390f35b60007f24abdb5865df5079dcc5ac590ff6f01d5c16edbc5fab4e195d9febd1114503da600783026040518082815260200191505060405180910390a16007820290509190505600a165627a7a7230582040383f19d9f65246752244189b02f56e8d0980ed44e7a56c0b200458caad20bb0029"}], "id": 5}' -H "Content-Type: application/json" RPC_URL
{"jsonrpc":"2.0","id":5,"result":"0x1c31e"}
```

And finally deploy the contract.

```bash
curl --data '{"jsonrpc":"2.0","method": "eth_sendTransaction", "params": [{"from": "0x9b1d35635cc34752ca54713bb99d38614f63c955", "gas": "0x1c31e", "data": "0x6060604052341561000f57600080fd5b60eb8061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c6888fa1146044575b600080fd5b3415604e57600080fd5b606260048080359060200190919050506078565b6040518082815260200191505060405180910390f35b60007f24abdb5865df5079dcc5ac590ff6f01d5c16edbc5fab4e195d9febd1114503da600783026040518082815260200191505060405180910390a16007820290509190505600a165627a7a7230582040383f19d9f65246752244189b02f56e8d0980ed44e7a56c0b200458caad20bb0029"}], "id": 6}' -H "Content-Type: application/json" RPC_URL
{"id":6,"jsonrpc":"2.0","result":"0xe1f3095770633ab2b18081658bad475439f6a08c902d0915903bafff06e6febf"}
```

The transaction is accepted by the node and a transaction hash is returned. This hash can be used to track the transaction. The next step is to determine the address where our contract is deployed. Each executed transaction will create a receipt. This receipt contains various information about the transaction such as in which block the transaction was included and how much gas was used by the EVM. If a transaction
creates a contract it will also contain the contract address. We can retrieve the receipt with the `eth_getTransactionReceipt` RPC method.

```bash
curl --data '{"jsonrpc":"2.0","method": "eth_getTransactionReceipt", "params": ["0xe1f3095770633ab2b18081658bad475439f6a08c902d0915903bafff06e6febf"], "id": 7}' -H "Content-Type: application/json" RPC_URL
{"jsonrpc":"2.0","id":7,"result":{"blockHash":"0x77b1a4f6872b9066312de3744f60020cbd8102af68b1f6512a05b7619d527a4f","blockNumber":"0x1","contractAddress":"0x4d03d617d700cf81935d7f797f4e2ae719648262","cumulativeGasUsed":"0x1c31e","from":"0x9b1d35635cc34752ca54713bb99d38614f63c955","gasUsed":"0x1c31e","logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":"0x1","to":null,"transactionHash":"0xe1f3095770633ab2b18081658bad475439f6a08c902d0915903bafff06e6febf","transactionIndex":"0x0"}}
```

Our contract was created on `0x4d03d617d700cf81935d7f797f4e2ae719648262`. A null result instead of a receipt means the transaction has
not been included in a block yet. Wait for a moment and check if your miner is running and retry it.

#### Interacting with smart contracts {#interacting-with-smart-contract}

In this example we will be sending a transaction using `eth_sendTransaction` to the `multiply` method of the contract.

`eth_sendTransaction` requires several arguments, specifically `from`, `to` and `data`. `From` is the public address of our account, and `to` is the contract address. The `data` argument contains a payload that defines which method must be called and with which arguments. This is where the [ABI (application binary interface)](https://docs.soliditylang.org/en/latest/abi-spec.html) comes into play. The ABI is a JSON file that defines how to define and encode data for the EVM.

The bytes of the payload defines which method in the contract is called. This is the first 4 bytes from the Keccak hash over the function name and its argument types, hex encoded. The multiply function accepts an uint which is an alias for uint256. This leaves us with:

```javascript
web3.sha3("multiply(uint256)").substring(0, 10)
// "0xc6888fa1"
```

The next step is to encode the arguments. There is only one uint256, say, the value 6. The ABI has a section which specifies how to encode uint256 types.

`int<M>: enc(X)` is the big-endian two’s complement encoding of X, padded on the higher-order (left) side with 0xff for negative X and with zero > bytes for positive X such that the length is a multiple of 32 bytes.

This encodes to `0000000000000000000000000000000000000000000000000000000000000006`.

Combining the function selector and the encoded argument our data will be `0xc6888fa10000000000000000000000000000000000000000000000000000000000000006`.

This can now be sent to the node:

```bash
curl --data '{"jsonrpc":"2.0","method": "eth_sendTransaction", "params": [{"from": "0xeb85a5557e5bdc18ee1934a89d8bb402398ee26a", "to": "0x6ff93b4b46b41c0c3c9baee01c255d3b4675963d", "data": "0xc6888fa10000000000000000000000000000000000000000000000000000000000000006"}], "id": 8}' -H "Content-Type: application/json" RPC_URL
{"id":8,"jsonrpc":"2.0","result":"0x759cf065cbc22e9d779748dc53763854e5376eea07409e590c990eafc0869d74"}
```

Since a transaction was sent, a transaction hash was returned. Retrieving the receipt gives:

```javascript
{
   blockHash: "0xbf0a347307b8c63dd8c1d3d7cbdc0b463e6e7c9bf0a35be40393588242f01d55",
   blockNumber: 268,
   contractAddress: null,
   cumulativeGasUsed: 22631,
   gasUsed: 22631,
   logs: [{
      address: "0x6ff93b4b46b41c0c3c9baee01c255d3b4675963d",
      blockHash: "0xbf0a347307b8c63dd8c1d3d7cbdc0b463e6e7c9bf0a35be40393588242f01d55",
      blockNumber: 268,
      data: "0x000000000000000000000000000000000000000000000000000000000000002a",
      logIndex: 0,
      topics: ["0x24abdb5865df5079dcc5ac590ff6f01d5c16edbc5fab4e195d9febd1114503da"],
      transactionHash: "0x759cf065cbc22e9d779748dc53763854e5376eea07409e590c990eafc0869d74",
      transactionIndex: 0
  }],
  transactionHash: "0x759cf065cbc22e9d779748dc53763854e5376eea07409e590c990eafc0869d74",
  transactionIndex: 0
}
```

The receipt contains a log. This log was generated by the EVM on transaction execution and included in the receipt. The `multiply` function shows that the `Print` event was raised with the input times 7. Since the argument for the `Print` event was a uint256 we can decode it according to the ABI rules which will leave us with the expected decimal 42. Apart from the data it is worth noting that topics can be used to determine which event created the log:

```javascript
web3.sha3("Print(uint256)")
// "24abdb5865df5079dcc5ac590ff6f01d5c16edbc5fab4e195d9febd1114503da"
```

This was just a brief introduction into some of the most common tasks, demonstrating direct usage of the JSON-RPC.
