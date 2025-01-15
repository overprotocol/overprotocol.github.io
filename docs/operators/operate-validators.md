---
title: Operate Validators
description: Learn how to register and operate validators in the OverProtocol network. This guide covers setup, staking, and best practices to help you actively contribute to network security, earn rewards, and enhance blockchain decentralization.
lang: en
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Welcome to OverProtocol Validators 🙌

Operating a validator is one of the most important roles in the OverProtocol network, and by choosing this path, you’ve already demonstrated your commitment to decentralization and security. Thank you for stepping up to help power the future of OverProtocol! 🌟

---

## What to Expect as a Validator

### Your Commitment Matters

Becoming a validator isn’t just about running software—it’s about dedicating yourself to the network’s long-term health and stability. Validator nodes are expected to run continuously, 24/7, ensuring that OverProtocol remains resilient and secure.

In the early stages of the network, there may be unique challenges as we refine and optimize the system. By participating now, you’re joining a pioneering group that is laying the foundation for OverProtocol’s success. Your willingness to navigate these early hurdles shows incredible dedication, and **we deeply value your contribution**. 💪

### Don’t Worry About Technical Skills

You don’t need to be a tech wizard to get started as a validator. While technical expertise can be helpful, OverProtocol is designed to make validator participation accessible to everyone:

- **Everyday Devices Work**: With tools like [OverScape](https://over.network/overscape), you can operate a validator on your regular desktop or laptop.
- **Simplified Setup**: OverScape automates the most complex tasks, like node syncing and validator registration, so you can focus on contributing to the network.
- **No Stress**: Whether you’re a blockchain novice or a seasoned pro, OverProtocol offers solutions that fit your experience level.

### Stake OVER to Secure the Network

To participate as a validator, you’ll need to stake OVER tokens. Staking isn’t just a requirement—it’s a way to ensure the network remains safe and secure.

- **Why Staking Matters**: Validators stake OVER as collateral to prove their commitment to the network. This mechanism incentivizes good behavior and penalizes actions that could harm the network.
- **How to Get OVER**: You can acquire OVER through exchanges or other trusted sources.
- **Minimum Requirement**: Make sure you have more than 256 OVER to start staking.

Your stake isn’t just a economical requirement—it’s a tangible contribution to the decentralization and security of OverProtocol.

## Operate Validators Without OverScape

For advanced users or those who prefer manual configurations, OverProtocol provides options to set up and manage validators from scratch or migrate existing setups from OverScape. Follow the detailed instructions below based on your requirements.

---

<Tabs
  groupId="set-up-validators"
  defaultValue="scratch"
  values={[
    {label: 'From Scratch', value: 'scratch'},
    {label: 'Migration from OverScape', value: 'migration'},
  ]}
>
  <TabItem value="scratch">

## Option 1. Setting up Validators From Scratch

:::note

This section is intended for users who wish to set up validator keys using command-line tools. If you already possess mnemonics or keys, please refer to the **`Migration from OverScape`** tab for guidance on migrating your setup.

:::

<br />

### 1. Obtain OVER

To participate as a validator, you need more than 256 OVER tokens, stored in a single wallet address. This amount is necessary to make the deposit transaction(s) required for validator registration.

### 2. Generate Validator Keys (Mnemonics)

1. **Go to the Deposit-cli Repository**: Go to the OverProtocol [staking-deposit-cli](https://github.com/overprotocol/staking-deposit-cli) repository. This tool is used for creating [EIP-2335](https://eips.ethereum.org/EIPS/eip-2335) format BLS12-381 keystores and a corresponding `deposit_data-XXXXX.json` file.

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
The deposit contract's address is set to `0x000000000000000000000000000000000beac017` and the deposit contract ABI is set as the following link: [DepositContract.abi.json](./assets/DepositContract.abi.json).

```js
const { ethers } = require("ethers"); // ethers.js v5

const provider = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:22000"
); // RPC port of Kairos

const depositContractAddress = '0x000000000000000000000000000000000beac017';
const depositContractABI = require('./DepositContract.abi.json');

// Replace these with your own values
async function stake(privateKey) {
  const wallet = new ethers.Wallet(privateKey, provider);

  const stakingContract = new ethers.Contract(
    depositContractAddress,
    depositContractABI,
    wallet
  );

  const amount = ethers.utils.parseEther("256");

  let depositDatas;
  depositDatas = require("./deposit_data.json"); // The deposit data you've generated from step 2.

  for (let i = 0; i < depositDatas.length; i++) {
    const tx = await stakingContract.deposit(
      "0x" + depositDatas[i].pubkey,
      "0x" + depositDatas[i].withdrawal_credentials,
      "0x" + depositDatas[i].signature,
      "0x" + depositDatas[i].deposit_data_root,
      {
        value: amount,
        gasLimit: 2000000,
      }
    );

    try {
      const receipt = await tx.wait();
      console.log(`Transaction ${i + 1}:`);
      console.log(`Transaction Hash: ${receipt.transactionHash}`);
    } catch (error) {
      console.error(`Error in transaction ${i + 1}: ${error.message}`);
    }
  }
}

stake(YOUR_PRIVATE_KEY_WITH_0x_PREFIX)
```

If you've succeeded in registering your validator to the blockchain, you should now run your validator software.
Follow steps 4 and 5.

  </TabItem>
  <TabItem value="migration">

## Option 2. Migrating your validators from OverScape

:::note

This section is designed for users who are looking to migrate their existing validator setup from OverScape. If you are setting up a validator from scratch, please see the **`From Scratch`** tab for detailed instructions.

:::

<br />

### 1. Save your validator mnemonic

If you have previously set up validators through OverScape, you should already have a validator mnemonic (12 words). If you did not back up your mnemonic, OverScape allows you to retrieve it by entering your password.

1. **Go to Settings > Node data**: Here, you will find the option `Reveal validator recovery phrase`. Click the `Reveal phrase` button.
2. **Enter your password, and backup your validator phrase**: A password is required to encrypt your validator keystore for security.

### 2. Generate keystore files

The OverProtocol [staking-deposit-cli](https://github.com/overprotocol/staking-deposit-cli) supports generating validator keys from an existing mnemonic. Follow the instructions in the repository's `README.md` to run the CLI.

Execute the command as follows:

```shell
$ ./deposit existing-mnemonic
```

Follow the CLI prompts. Typically, the starting index will be `0`, as shown below:

```plaintext
Please choose your language ['1. العربية', '2. ελληνικά', '3. English', '4. Français', '5. Bahasa melayu', '6. Italiano', '7. 日本語', '8. 한국어', '9. Português do Brasil', '10. român', '11. Türkçe', '12. 简体中文']:  [English]:
Please enter your mnemonic separated by spaces (" "). Note: you only need to enter the first 4 letters of each word if you'd prefer.: <YOUR_VALIDATOR_MNEMONIC>
Enter the index (key number) you wish to start generating more keys from. For example, if you've generated 4 keys in the past, you'd enter 4 here. [0]: 0
Please repeat the index to confirm: 0
Please choose how many new validators you wish to run: 1
Please choose the (over or testnet) network/chain name ['over', 'over_dolphin']:  [over]: over
Create a password that secures your validator keystore(s). You will need to re-enter this to decrypt them when you setup your Ethereum validators.:
Repeat your keystore password for confirmation:
Creating your keys.
Creating your keystores:	  [####################################]  1/1
Verifying your keystores:	  [####################################]  1/1

Success!
Your keys can be found at: <path/to/your/validator/keys>
```

### 3. Check your validators

To ensure the correct validator keys are imported, it is highly recommended to verify whether your validators are currently active on OverProtocol. Common issues include entering an incorrect mnemonic, starting index, or selecting a different chain name.

Verify your validators by querying Chronos. The `deposit_data-*.json` file contains the `pubkey` field, which serves as a unique identifier for querying your validators.

```shell
curl -X 'GET' \
  'http://127.0.0.1:3500/eth/v1/beacon/states/head/validators?id=<YOUR_PUBKEY_WITH_0x_PREFIX>' \
  -H 'accept: application/json'
```

If your validator is active, the response will include the current state of your validator. If not, it will return an empty list.


```json
{
  "data": [
    {
      "index": "20000",
      "balance": "256000000000",
      "status": "active_ongoing",
      "validator": {
        "pubkey": "0x8541054c41a9a36a5ae1717e321850f9c662d61b8430b12abda89030daa301d00b925a19363375f05e5b07d43f643717",
        "withdrawal_credentials": "0x000000000000000000000000533bf49c40cb17a1c4eb479355e1a10942feb13f",
        "effective_balance": "256000000000",
        "slashed": false,
        "activation_eligibility_epoch": "289",
        "activation_epoch": "295",
        "exit_epoch": "18446744073709551615",
        "principal_balance": "256000000000"
      }
    }
  ],
  "execution_optimistic": false,
  "finalized": false
}
```


  </TabItem>
</Tabs>

## Run Your Validator

### Transfer Validator Keys

Run `validator` client to import the validator keys with the command similar to the following:

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Dolphin', value: 'dolphin'},
  ]}
>

  <TabItem value="mainnet">

  ```console
  $ validator accounts import --keys-dir=<path/to/your/validator/keys> --wallet-dir=<path/to/your/wallet/directory>
  ```

  </TabItem>

  <TabItem value="dolphin">

  ```console
  $ validator accounts import --keys-dir=<path/to/your/validator/keys> --dolphin --wallet-dir=<path/to/your/wallet/directory>
  ```

  </TabItem>  

</Tabs>

If you successfully imported validator keys, the result will be:

```plaintext
Importing accounts, this may take a while...
Importing accounts... 100% [==========================================================]  [0s:0s]
[2024-06-04 15:41:33]  INFO local-keymanager: Successfully imported validator key(s) publicKeys=<YOUR_VALIDATOR_PUBKEYS>
[2024-06-04 15:41:33]  INFO accounts: Imported accounts <YOUR_VALIDATOR_PUBKEYS>, view all of them by running `accounts list`
```

### Run Your Validator Client
:::warning Running a Validator and Beacon Node on a separate machine
When your are running a Validator and a Beacon Node on a separate machine, it is highly recommended to use Secure gRPC connections for security measures. Please refer to this [page](./advanced-guides/secure-grpc-connections) for specified configurations.
:::
<br />
Run `validator` client to run the validator on your node like following:

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Dolphin', value: 'dolphin'},
  ]}
>

  <TabItem value="mainnet">

  ```sh
  $ validator --wallet-dir=<path/to/your/wallet/directory> --suggested-fee-recipient=<YOUR_WALLET_ADDRESS>
  ```

  </TabItem>

  <TabItem value="dolphin">

  ```sh
  $ validator --wallet-dir=<path/to/your/wallet/directory> --dolphin --suggested-fee-recipient=<YOUR_WALLET_ADDRESS>
  ```

  </TabItem>  

</Tabs>

`--suggested-fee-recipient` will allow you to earn block priority fees. If no `--suggested-fee-recipient` is set neither on the validator client nor on the beacon node, the corresponding fees will be sent to the burn address, and forever lost.
<!-- 
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

Alternatively, you can use Bazel to initiate a voluntary exit from the source as follows:

```sh
$ bazel run //cmd/prysmctl -- validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000> 
```

### Exiting Process

The time it takes for a validator to exit from staking can vary significantly depending on the number of other validators undergoing the same process simultaneously. After this period, your validator will no longer be eligible for validator duties, including block creation and voting.

### Post-Exit Status

Once the exit process is complete, the validator's account status changes in several key ways:

- **No Longer Active**: The account will no longer perform any network duties as a validator.
- **Ineligibility for Rewards**: The account ceases to earn staking rewards.
- **Removal of Stake**: The staked OVER tokens are no longer considered "at stake."
- **Full Withdrawal**: After some epochs, the staked OVER tokens will be withdrawn to the address set in the deposit data. -->
