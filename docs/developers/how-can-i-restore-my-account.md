---
title: How can I restore my Account?
description: Guide to restoring an expired account
lang: en
---

To restore your account which was swept away to the nether layer, you need to send a restore data to the restoration client. 

### Restore Data

A valid restore data should include the following fields.

- ChainID - To prevent attacks across different networks
- Target - Address of the target account to restore
- SourceEpoch - The current `epochCoverage` of the target account. This field should be set to the default `epochCoverage` which is `current epoch -1` if the account is not currently existent.
- TargetEpoch - Target epoch to restore the account.
- Fee - Fee to pay the fee recipient.
- FeeRecipient - Account the pay the restore fee, typically the owner account of the restoration client

In order to construct your restore data, you should retrieve the proper `Fee` and `FeeRecipient` by sending a http request to the restoration client you will use. Typically the restoration client will provide this through http request named something like `minimumFee` for fee information and `feeRecipient` for fee recipient. Your request will look something like this.
```
curl -X GET "http://hostAddress:hostPort/minimumFee"
curl -X GET "http://hostAddress:hostPort/feeRecipient"
```

Now before sending this restore data, you have to sign it. There are multiple reasons for this procedure, but the most important reason is so the restoration client can’t manipulate the restoration fee. You can sign the restore data by using the `SignRestoreData` function in the [types](https://pkg.go.dev/github.com/ethereum/go-ethereum/core/types) package. Any account including the owner expired account can be used to sign the restore data. Note that the one who signs the restore data, which is the owner of the private key used to signed the restore data, will be the one who pays the restoration fee.

After making a valid restore data and signing it, you can send the restore data through `requestRestoration` http post method. The request should look something like this.

```
curl -H 'Content-Type: application/json' \
-X POST "http://hostAddress:hostPort/requestRestoration" \
--data '{"chainId": "0x84442", 
"target": "0x1923f626bb8dc025849e00f99c25fe2b2f7fb0db", 
"sourceEpoch": "0x10",
"targetEpoch": "0x5",
"fee": "0x100",
"feeRecipient": "0x07a565b7ed7d7a678680a4c162885bedbb695fe0",
"v": "0x26",
"r": "0x223a7c9bcf5531c99be5ea7082183816eb20cfe0bbc322e97cc5c7f71ab8b20e",
"s": "0x2aadee6b34b45bb15bc42d9c09de4a6754e7000908da72d48cc7704971491663"
}'
```
After the restoration client validate the restore data and check if the fee is profitable, it will send the restore create the corresponding restoration proof and send a restoration transaction to restore your account.

We are currently working on a more user friendly interface for signing and sending restore data. Until then, please use the solution above.

