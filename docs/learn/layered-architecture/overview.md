---
title: Layered Architecture
description: OverProtocol adopts a layered architecture for blockchain data management, balancing efficiency and accessibility.
lang: en
---

OverProtocol introduces an innovative **layered approach** to blockchain data, designed to optimize both accessibility and sustainability. By segmenting data into essential and non-essential components, the system ensures that blockchain participation remains lightweight and scalable.

---

## 🌟 Key Concepts

![data_hierarchy_diagram](/img/ethanos_data_hierarchy.png)

- **Essential States**: Accounts that are frequently accessed or have been recently used.
- **Non-essential States**: Accounts that are rarely or never accessed.
- **Essential History**: Data from newer blocks, crucial for immediate blockchain operations.
- **Non-essential History**: Data from preceding blocks, used less frequently but important for overall network integrity.

---

## ⚙️ Layers of Blockchain Data

### Over Layer

The **Over Layer** contains:

- **Active States**: Vital for ongoing transactions and operations.
- **Recent History**: Recent block data for verification.
- **Block Header Information**: Metadata essential for network synchronization.

### Nether Layer

The **Nether Layer** stores:

- **Inactive States**: Accounts with low activity.
- **Older History**: Archived block data for historical validation.

This separation ensures that only the most essential data is actively maintained, reducing resource demands on participating nodes.

---

## 🚀 How Ethanos Powers the Layers

The [**Ethanos Algorithm**](./ethanos) underpins this layered structure by:

1. Defining clear criteria for categorizing data into Over and Nether Layers.
2. Providing mechanisms to restore inactive or historical data back into the Over Layer when needed.

By enforcing a **bounded Over Layer size**, Ethanos ensures the blockchain remains:

- **Sustainable**: Reducing unnecessary resource consumption.
- **Scalable**: Allowing more participants to join with minimal technical overhead.

---

## Why It Matters

This layered architecture represents a breakthrough in blockchain design. By prioritizing active data while archiving less essential components, OverProtocol achieves:

- **Efficiency**: Lower hardware and storage requirements.
- **Accessibility**: Inclusive participation, even for devices with limited capacity.
- **Scalability**: Sustainable growth as the network expands.

For a deep dive into the **Ethanos Algorithm**, explore the next section: [Ethanos Algorithm →](./ethanos)
