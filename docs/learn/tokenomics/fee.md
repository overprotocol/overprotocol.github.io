---
title: Fees
description: A description of OverProtocol's fee mechanisms.
lang: en
---

## Currently Effective

### Transaction fee

The **Transaction Fee** is a charge applied to each transaction within the OverProtocol's on-chain activity. This fee serves to reduce the total circulating supply of OVER tokens.

There are two primary objectives that we aim to achieve through the transaction fee design. Firstly, we seek to align user gas usage with an appropriate gas target, ensuring efficient network operation. Secondly, we aim to induce deflationary pressure through the application of **base fees**, thereby promoting a balanced economic environment within the network. For this purpose, we use the commonly known EIP-1559, and adjust its design which we plan to achieve through several future updates.

In the protocol's initial stages, the base fee is collected and directed to the [DAO Treasury](./distribution#treasury), supporting various ecosystem development initiatives. As the protocol matures, the collection strategy evolves: instead of accruing in the treasury, the base fee is directly burned from each transaction. This nuanced approach balances the initial growth needs with a longer-term strategy of reducing token supply, thereby sustaining the protocol’s economic health.

## Future Plans

### Storage Rent Fee

The **Storage rent fee** is a charge on the contract accounts levied every certain period. It charges the use of storing data on the blockchain and reduces the total circulating supply of the OVER tokens.

Storage rent is a proposed economic mechanism designed to address the inefficiency of the 'pay once, use forever' model for state storage. In traditional blockchain models, once a user pays a fee to store data or execute a transaction, the associated data remains on the blockchain indefinitely, leading to an ever-growing state. This growth poses significant scalability and efficiency challenges.

With the storage rent fee, a blockchain storage user would consistenly pay the rent to compensate for the ongoing use of the storage space. This fee incentivizes users to only retain necessary and actively used data, thereby managing the size and efficiency of the blockchain's state. That is, we can expect users to be more judicious about the data they store on the blockchain and to potentially clean up or remove data that is no longer needed.

Such a fee is levied on every Ethanos epoch, and the amount depends on the quantity of data stored with the duration for which it was stored. The storage fee is collected and directed to the [DAO Treasury](/learn/key-features/tokenomics/distribution#treasury), supporting various ecosystem development initiatives.

#### Why it was hard to collect Storage Rent Fees

Implementing a storage rent fee design in conventional blockchain architectures is challenging due to the immense size of the state. For the protocol to levy storage rent, it must navigate through all state accounts to determine the appropriate charges and identify the account holders responsible for these fees. Additionally, the protocol needs to decide on the timing for such traversals. This process, under typical blockchain designs, presents significant complexities and operational inefficiencies, making the implementation of a storage rent fee system difficult. Consequently, in many cases, once a fee is paid for storing new values in the state, the space is occupied indefinitely, bypassing ongoing storage costs.

#### OverProtocol's Approach

Through its innovative Ethanos technique, the OverProtocol effectively manages state size and introduces periodic intervals, streamlining the process of imposing storage rent fees. This approach allows for a straightforward determination of when and which contract accounts should be charged. The whitepaper, [OverProtocol: Towards True Decentralization](https://drive.google.com/file/d/1DNK0FFOVhnVDRnz8h9RJ1NoDUN4W0He8/view), elaborates on Ethanos, but here we present its core principles.

OverProtocol distinguishes between active and inactive accounts by resetting states at regular intervals, leveraging the consistency of activity across these cycles. Active accounts, identified by their continuous operation through cycles, are seamlessly transferred from the finalized state of the previous cycle to the current cycle's state. This transfer occurs at the first transactional interaction in the new cycle.

At this juncture, storage rent is levied on contract accounts, employing the efficiency of the Ethanos technique without necessitating external state traversal. This efficiency is further enhanced by the protocol's managed state size. Additionally, accounts in OverProtocol are equipped with metadata that assesses their storage size, creating a system where larger storage spaces incur higher rent. This design facilitates a fair and usage-based charging model.

The storage rent design is still under development, with the goal of establishing a user-friendly framework that simultaneously fosters a robust storage economy.
