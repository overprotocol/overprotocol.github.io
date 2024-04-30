---
title: Layered Architecture
description: OverProtocol implements a layered approach to managing blockchain data, segmenting it into more manageable and essential components.
lang: en
---

OverProtocol implements a layered approach to managing blockchain data, segmenting it into more manageable and essential components. The system differentiates between active and inactive states. Active states consist of accounts that are either frequently accessed or have been accessed recently. In contrast, inactive states encompass accounts that are less frequently accessed or have not been recently used. History is similarly bifurcated into recent and older segments. Data from newer blocks are classified as recent history, whereas data from all preceding blocks falls into the category of older history.

The essential data that nodes require to process and follow blockchain records includes active states, recent history, and block header information. This subset of data is referred to as the Over Layer. Conversely, the inactive state and older history data are grouped into what is known as the Nether Layer.

[The Ethanos algorithm](./ethanos) within OverProtocol establishes the criteria for distinguishing between the Over Layer and the Nether Layer. It also provides a mechanism for restoring data from the Nether Layer back to the Over Layer. By utilizing Ethanos, OverProtocol enforces its layered architecture, limiting the size of the data in the Over Layer. This restriction ensures a bounded, manageable size for the blockchain system, enabling sustainable and scalable participation.
