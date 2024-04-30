---
title: Deploy Your Contract
description: Step-by-step guides for developers who wants to utilize Foundry, Hardhat or Remix.
lang: en
---

:::caution
While OverProtocol is EVM-compatible, there are important differences that developers should be aware of. Please refer to the [documentation](../differences-from-ethereum) thoroughly before proceeding to ensure you understand these distinctions.
:::

OverProtocol's compatibility with the Ethereum Virtual Machine (EVM) allows you to leverage various Ethereum development environments to build and deploy your smart contracts. This guide outlines how to use popular tools like Foundry, Hardhat and Remix for developing on OverProtocol. Detailed steps and tips will ensure you understand the nuances of deploying effectively in each environment.

- [Build with Foundry](#with-foundry)
- [Build with Hardhat](#with-hardhat)
- [Build with Remix](#with-remix)

## Build With Foundry {#with-foundry}

Foundry is a fast, portable, and modular toolkit for Ethereum application development. For detailed information and further utilization of Foundry, please refer to the [official documentation](https://book.getfoundry.sh/).

### Installation

Install Foundry by following the instructions on [Foundry's GitHub repository](https://github.com/foundry-rs/foundry) and the [installation guide](https://book.getfoundry.sh/getting-started/installation).

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

### Creating a New Project

To start a new project with Foundry, use `forge init`

```sh
$ forge init hello_foundry
```

Let's check out what `forge` generated for us:

```sh
$ cd hello_foundry
$ ls
```

The default template comes with one dependency installed: Forge Standard Library. This is the preferred testing library used for Foundry projects. Additionally, the template also comes with an empty starter contract and a simple test.

We can build the project with `forge build`:

```sh
$ forge build
Compiling 27 files with 0.8.19
Solc 0.8.19 finished in 1.16s
Compiler run successful!
```

And run the tests with `forge test`:

```sh
$ forge test
No files changed, compilation skipped

Ran 2 tests for test/Counter.t.sol:CounterTest
[PASS] testFuzz_SetNumber(uint256) (runs: 256, μ: 30454, ~: 31310)
[PASS] test_Increment() (gas: 31325)
Suite result: ok. 2 passed; 0 failed; 0 skipped; finished in 9.15ms (8.89ms CPU time)

Ran 1 test suite in 13.66ms (9.15ms CPU time): 2 tests passed, 0 failed, 0 skipped (2 total tests)
```

You’ll notice that two new directories have popped up: `out` and `cache`.

The `out` directory contains your contract artifact, such as the ABI, while the `cache` is used by `forge` to only recompile what is necessary.

### Deploying Your Contracts

You can find out the official Foundry's documentation [here](https://book.getfoundry.sh/forge/deploying).

Forge can deploy smart contracts to a given network with the `forge create` command.

To deploy a contract, you must provide a RPC URL (env: `ETH_RPC_URL`) and the private key of the account that will deploy the contract.

To deploy `MyContract` to a network:

```sh
$ forge create --rpc-url <your_rpc_url> --private-key <your_private_key> src/MyContract.sol:MyContract
Compiling...
No files changed, compilation skipped
Deployer: 0x079E40B71d...
Deployed to: 0x92e9a5A338...
Transaction hash: 0x2c13f01a69...
```

Solidity files may contain multiple contracts. `:MyContract` above specifies which contract to deploy from the `src/MyContract.sol` file.

Use the `--constructor-args` flag to pass arguments to the constructor:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC20} from "solmate/tokens/ERC20.sol";

contract MyToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply
    ) ERC20(name, symbol, decimals) {
        _mint(msg.sender, initialSupply);
    }
}
```

## Build With Hardhat {#with-hardhat}

Hardhat is a development environment for Ethereum software. It consists of different components for editing, compiling, debugging and deploying your smart contracts and dApps, all of which work together to create a complete development environment. For detailed information and further utilization of Hardhat, please refer to the [official documentation](https://hardhat.org/docs).

### Installation

Install Hardhat in your project by following the instructions on [Hardhat's Installation Guide](https://hardhat.org/hardhat-runner/docs/getting-started#installation).

### Creating a New Project

To create the sample project, run `npx hardhat init` in your project folder:

```sh
$ npx hardhat init
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.22.3 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create a TypeScript project (with Viem)
  Create an empty hardhat.config.js
  Quit
```

### Compiling Your Contracts

Next, if you take a look in the `contracts/` folder, you'll see `Lock.sol`:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
```

To compile it, simply run:

```sh
npx hardhat compile
```

### Testing Your Contracts

Your project comes with tests that use [Mocha](https://mochajs.org), [Chai](https://www.chaijs.com), [Ethers.js](https://docs.ethers.org/v6/) and [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview).

If you take a look in the `test/` folder, you'll see a test file.

You can run your tests with `npx hardhat test`.

### Deploying Your Contracts

Next, to deploy the contract we will use a Hardhat Ignition module.

Before run the module, we have to update `hardhat.config.js`.

```js
// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    over: {
      url: OVER_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

And run the following command to deploy your contract:

```bash
$ npx hardhat ignition deploy ignition/modules/Lock.js --network over
Deploying [ LockModule ]

Batch #1
  Executing LockModule#Lock...
Batch #1
  Executed LockModule#Lock

[ LockModule ] successfully deployed 🚀

Deployed Addresses

LockModule#Lock - 0x194B734f7f...
```

## Build With Remix {#with-remix}

[Remix IDE](https://remix-project.org/) is an open-source web and desktop application for creating and deploying Smart Contracts. For comprehensive guidance and advanced features of Remix, please refer to the [official documentation](https://remix-ide.readthedocs.io/en/latest/index.html).

### Using Remix with OverProtocol

#### Access

Open Remix IDE in your web browser to begin. You can access it at https://remix.ethereum.org.

#### Connect

- **Configure MetaMask (or its alternatives)**: Ensure MetaMask or a similar compatible browser extension is installed in your browser and configured for the OverProtocol network.
- **Connect to OverProtocol**: In the "Deploy & Run Transactions" plugin within Remix, select "Injected Web3" to connect Remix with the OverProtocol node through MetaMask.

#### Load Contracts

- **Write or Import Contracts**: You can either write new smart contracts directly in the Remix editor or import existing files into the Remix environment.

#### Compile

- **Compile Contracts**: Use Remix's Solidity compiler to compile your contracts. Make sure to select the appropriate compiler version that matches your contract's pragma statement.

#### Deploy

- **Deploy Contracts**: Once compiled, deploy your contracts to OverProtocol by clicking on the "Deploy" button. Ensure that the correct environment (OverProtocol) and account are selected.

By following these steps, you can efficiently develop, test, and deploy smart contracts on OverProtocol, leveraging the powerful features of Remix IDE to enhance your development workflow.
