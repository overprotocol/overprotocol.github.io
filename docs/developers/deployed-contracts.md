---
title: Deployed Contracts
description: A list of contracts officially confirmed by foundation to quickly integrate and interact with established functionalities on the network.
lang: en
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To avoid unnecessary redeployment and to streamline your development process, we highly recommend utilizing our already deployed and verified contracts. This approach not only saves time and resources but also ensures that you are integrating with trusted and stable contract implementations.

Here, you can access comprehensive information for each contract with the explorer link. Using these verified contracts allows you to quickly integrate and interact with established functionalities on the network.

<Tabs
  groupId="network"
  defaultValue="mainnet"
  values={[
    {label: 'Mainnet', value: 'mainnet'},
    {label: 'Testnet', value: 'testnet'},
  ]}
>
  <TabItem value="mainnet">

| name         | address                                    |
|--------------|--------------------------------------------|
| PoS deposit  | [0x000000000000000000000000000000000beac017](https://scan.over.network/address/0x000000000000000000000000000000000beAC017) |
| Wrapped OVER | [0x59c914C8ac6F212bb655737CC80d9Abc79A1e273](https://scan.over.network/address/0x59c914C8ac6F212bb655737CC80d9Abc79A1e273) |
| Multicall3   | [0x03657CDcDA1523C073b5e09c37dd199E6fBD1b99](https://scan.over.network/address/0x03657CDcDA1523C073b5e09c37dd199E6fBD1b99) |

  </TabItem>

  <TabItem value="testnet">

:::tip
When working with OverProtocol, especially in a testnet environment, it's important to note that testnet configurations and details may change at any time. This variability is typical of test environments, which are often updated or reset to test new features and improvements in the blockchain protocol.
:::

The Dolphin testnet operates with the goal of providing an environment identical to that of the mainnet. Additionally, this testnet serves the role of applying and testing updates before they are implemented on the mainnet.

| name         | address                                    |
|--------------|--------------------------------------------|
| PoS deposit  | [0x000000000000000000000000000000000beac017](https://dolphin-scan.over.network/address/0x000000000000000000000000000000000beAC017) |
| Wrapped OVER | [0xd6e9E39c54e2340b498140843E4D7a0a240DE43f](https://dolphin-scan.over.network/token/0xd6e9E39c54e2340b498140843E4D7a0a240DE43f) |
| Multicall3   | [0x03657CDcDA1523C073b5e09c37dd199E6fBD1b99](https://dolphin-scan.over.network/address/0x03657CDcDA1523C073b5e09c37dd199E6fBD1b99) |

  </TabItem>
</Tabs>
