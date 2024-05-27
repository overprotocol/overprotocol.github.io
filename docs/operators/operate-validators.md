---
title: Operate Validators
description: Step-by-step guides of how to operate validators.
lang: en
---

To operate validators means to stake OVER and participate in OverProtocol's Consensus mechanism. In order to be an validator, a user must first have its own full node running. Follow [Run a node](./run-a-node) page for more.

## Prerequisites

### Before We Go Further

:::tip
You have the option to install [OverNode](https://over.network/overnode). Just launch it and follow the clear, step-by-step instructions provided within the application. We highly recommend users to participate in OverProtocol through the use of OverNode.

OverNode simplifies the process of setting up and maintaining your node and validators by automating many of the initial configuration and synchronization tasks. With OverNode users could easily register and withdraw from validator status.
:::

### Skills for Operating a Validator

Being a validator on OverProtocol without using OverNode requires specific skills and commitments:

- **Technical Proficiency**: You need operational knowledge on how to set up, run, and maintain both an Ethereum consensus client and an execution client alongside a validator client. This includes understanding the software interactions and network requirements.
- **Commitment**: Operating a validator node requires a long-term commitment. Your node needs to run continuously (24/7/365) to support the network effectively. Interruptions in service can lead to penalties, thus reliability and dedication are key.

Operating a validator node on OverProtocol can be rewarding but demands a high level of dedication and technical expertise to ensure the security and efficacy of the blockchain network.

## Setting up Validators

### 1. Obtain OVER

To participate as a validator, you need 256 OVER tokens or multiples thereof, stored in a single wallet address. This amount is necessary to make the deposit transaction(s) required for validator registration.

### 2. Generate Validator Keys (Mnemonics)

1. **Go to the Deposit-cli Repository**: Go to the OverProtocol [Staking Deposit CLI] repository. This tool is used for creating [EIP-2335](https://eips.ethereum.org/EIPS/eip-2335) format BLS12-381 keystores and a corresponding `deposit_data-XXXXX.json` file.

2. **Run CLI following the repository's `README.md`**: This will complete the process of generating the mnemonic. Ensure that the generated file is kept in a safe place, as this mnemonic will be associated with all future rewards and your withdrawal amount.
    
    You should run the command similar to the following:

    ```shell
    $ ./deposit new-mnemonic --num_validators=1 --mnemonic_language=english --execution_address=<YOUR_WALLET_ADDRESS>
    ```

    Adding `--execution_address=<YOUR_WALLET_ADDRESS>` will generate deposit data with a withdrawal credential, which is required for withdrawal.

### 3. Send Deposit Transactions

You have to manually send transactions to the OverProtocol's deposit contract, in order to register the validator key.
As with other transactions, the transaction is sent from an account in the execution layer.
The execution layer's account needs 256 OVER per validator account it tries to enroll.

Then you should run the following-styled code in your machine to sender deposit transactions the with the validator keys generated in step 2.
The deposit contract's address is set to `0x000000000000000000000000000000000000beef` and the deposit contract ABI is set as the following link: [depositContractABI.json].

```js
const Web3 = require('web3');
const fs = require('fs');
const path = require('path');
const web3 = new Web3('http://127.0.0.1:22000');

const depositContractAddress = '0x000000000000000000000000000000000000beef';
const depositContractABI = require('./depositContractABI.json').abi;

// Replace these with your own values
async function stake(privateKey) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    let accountNonce = await web3.eth.getTransactionCount(account.address);
    const stakingContract = new web3.eth.Contract(depositContractABI, depositContractAddress);
    const amount = web3.utils.toWei('256', 'ether')

    let depositDatas;
    depositDatas = require('./deposit_data.json'); // The validator key you've generated from step 2.

    for (let i = 0; i < depositDatas.length; i++) {
        const encodedABI = stakingContract.methods.deposit(
            '0x' + depositDatas[i].pubkey,
            '0x' + depositDatas[i].withdrawal_credentials, // if it already contains the withdrawal_credentials
            '0x' + depositDatas[i].signature,
            '0x' + depositDatas[i].deposit_data_root
        ).encodeABI();
        const tx = {
            from: account.address,
            to: depositContractAddress,
            value: amount,
            gas: 2000000,
            data: encodedABI,
            nonce: accountNonce + i
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
        web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }
}

```

If you've succeeded in registering your validator to the blockchain, you should now run your validator software.
Follow steps 4 and 5.

### 4. Transfer Validator Keys

Run `validator` client to import the validator keys with the command similar to the following:

```sh
$ validator accounts import --keys-dir=<path/to/your/validator/keys> --mainnet
```

### 5. Run your Validator

Run `validator` client to run the validator on your node like following:

```sh
$ validator --wallet-dir=<path/to/your/wallet/directory> --mainnet --suggested-fee-recipient=<YOUR_WALLET_ADDRESS>
```

`--suggested-fee-recipient` will allow you to earn block priority fees. If no `--suggested-fee-recipient` is set neither on the validator client nor on the beacon node, the corresponding fees will be sent to the burn address, and forever lost.

## More on Validator Activation

### Activation Queue

Once your Execution Layer and Consensus Layer are synchronized and your deposit transaction successfully executed, your validator will enter the activation queue. This is a necessary step before becoming an active validator. Due to network protocols, the activation process can take 24 hours or more, depending on the queue. The system allows for only 900 new validators to join per day to maintain network stability and manage the rate of growth.

### Activated

Upon activation, your validator will begin participating in the creation and validation of blocks. This active involvement in the network functions allows your validator to start earning staking rewards. These rewards are compensation for your contributions to network security and operability, incentivizing ongoing participation and support of the network's integrity.

## Withdrawal Process (Quitting the validator status)

### Initiating a Voluntary Exit

For users who decide to cease staking and wish to withdraw their entire balance, a "voluntary exit" process must be initiated. This involves signing and broadcasting a voluntary exit message using your validator keys. The process is facilitated by your validator client and must be submitted to your beacon node. Importantly, this action does not require any gas fees, as it is a part of the consensus layer's functionality. You will have to rely on the following-like command:

```sh
$ prysmctl validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000>
```

### Exiting Process

The time it takes for a validator to exit from staking can vary significantly depending on the number of other validators undergoing the same process simultaneously. After this period, your validator will no longer be eligible for validator duties, including block creation and voting.

### Post-Exit Status

Once the exit process is complete, the validator's account status changes in several key ways:

- No Longer Active: The account will no longer perform any network duties as a validator.
- Ineligibility for Rewards: It ceases to earn staking rewards.
- Removal of Stake: The staked OVER tokens are no longer considered "at stake."
