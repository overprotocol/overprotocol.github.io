---
title: Operate Restoration Client
description: Step-by-step guides of how to operate restoration client.
lang: en
---

To restore an expired account, you need to retrieve the proof of historical state. This requires running an execution client that stores historical state data. By operating both the execution client and the restoration client, you can help users restore expired accounts and receive additional rewards.

## How to run a restoration client
Restoration client is controlled using the command line. Here’s how to set it up:

```sh
restoration --help                                                                                                             
```

```sh
Usage of restoration:
  -corsdomain string
        Comma separated list of domains from which to accept cross origin requests (browser enforced) (default "*")
  -ipc string
        The ipc endpoint of a local geth node
  -keystore string
        Directory for the keystore (default = inside the datadir)
  -minimum-reward string
        Minimum reward for sending restoration transaction (default "1000000000000000000")
  -passphrase string
        Passphrase file for unlocking signer account
  -port string
        Server listening port (default ":32311")
  -rpc string
        The rpc endpoint of a local or remote geth node
  -signer string
        Signer address for signing restoration transaction and receiving reward
```

:::caution
The execution client must be synced with full sync mode and store an unlimited number of epochs.
```sh
$ geth --syncmode full --epochLimit 0
```
:::