---
title: Command Line Options
description: Geth command line options and sub-commands.
lang: en
---

### beacon-chain

The Chronos `beacon-chain` binary is the node client responsible for the consensus layer in the Over Protocol. The `beacon-chain` allows users to modify various settings according to their needs, and a description of these settings can be displayed using the help command as shown below.


```
beacon-chain help
```

```
NAME:
   beacon-chain - this is a beacon chain implementation for Over Protocol
USAGE:
   beacon-chain [options] command [command options] [arguments...]

AUTHOR:


GLOBAL OPTIONS:
   db                    defines commands for interacting with the Over Protocol Beacon Node database
   generate-auth-secret  creates a random, 32 byte hex string in a plaintext file to be used for authenticating JSON-RPC requests. If no --output-file flag is defined, the file will be created in the current working directory
   help, h               Shows a list of commands or help for one command

cmd OPTIONS:
   --accept-terms-of-use                                Accept Terms and Conditions (for non-interactive environments) (default: false)
   --api-timeout value                                  Specifies the timeout value for API requests in seconds (default: 120)
   --bootstrap-node value [ --bootstrap-node value ]    The address of bootstrap node. Beacon node will connect for peer discovery via DHT.  Multiple nodes can be passed by using the flag multiple times but not comma-separated. You can also pass YAML files containing multiple nodes.
   --chain-config-file value                            The path to a YAML file with chain config values
   --clear-db                                           Prompt for clearing any previously stored data at the data directory (default: false)
   --config-file value                                  The filepath to a yaml file with flag values
   --datadir value                                      Data directory for the databases (default: "${HOME}/Eth2")
   --db-backup-output-dir value                         Output directory for db backups
   --disable-monitoring                                 Disable monitoring service. (default: false)
   --e2e-config                                         Use the E2E testing config, only for use within end-to-end testing. (default: false)
   --enable-tracing                                     Enable request tracing. (default: false)
   --force-clear-db                                     Clear any previously stored data at the data directory (default: false)
   --grpc-max-msg-size value                            Integer to define max receive message call size. If serving a public gRPC server, set this to a more reasonable size to avoid resource exhaustion from large messages. Validators with as many as 10000 keys can be run with a max message size of less than 50Mb. The default here is set to a very high value for local users. (default: 2147483647 (2Gi)). (default: 2147483647)
   --max-goroutines value                               Specifies the upper limit of goroutines running before a status check fails (default: 5000)
   --minimal-config                                     Use minimal config with parameters as defined in the spec. (default: false)
   --monitor-indices value [ --monitor-indices value ]  List of validator indices to track performance
   --monitoring-host value                              Host used for listening and responding metrics for prometheus. (default: "127.0.0.1")
   --monitoring-port value                              Port used to listening and respond metrics for prometheus. (default: 8080)
   --no-discovery                                       Enable only local network p2p and do not connect to cloud bootstrap nodes. (default: false)
   --p2p-tcp-port value                                 The port used by libp2p. (default: 13000)
   --p2p-udp-port value                                 The port used by discv5. (default: 12000)
   --relay-node value                                   The address of relay node. The beacon node will connect to the relay node and advertise their address via the relay node to other peers
   --restore-source-file value                          Filepath to the backed-up database file which will be used to restore the database
   --restore-target-dir value                           Target directory of the restored database (default: "${HOME}/Eth2")
   --rpc-max-page-size value                            Max number of items returned per page in RPC responses for paginated endpoints. (default: 0)
   --trace-sample-fraction value                        Indicate what fraction of p2p messages are sampled for tracing. (default: 0.2)
   --tracing-endpoint value                             Tracing endpoint defines where beacon chain traces are exposed to Jaeger. (default: "http://127.0.0.1:14268/api/traces")
   --tracing-process-name value                         The name to apply to tracing tag "process_name"
   --verbosity value                                    Logging verbosity (trace, debug, info=default, warn, error, fatal, panic) (default: "info")

debug OPTIONS:
   --blockprofilerate value      Turn on block profiling with the given rate (default: 0)
   --cpuprofile value            Write CPU profile to the given file
   --memprofilerate value        Turn on memory profiling with the given rate (default: 524288)
   --mutexprofilefraction value  Turn on mutex profiling with the given rate (default: 0)
   --pprof                       Enable the pprof HTTP server (default: false)
   --pprofaddr value             pprof HTTP server listening interface (default: "127.0.0.1")
   --pprofport value             pprof HTTP server listening port (default: 6060)
   --trace value                 Write execution trace to the given file

beacon-chain OPTIONS:
   --block-batch-limit value                               The amount of blocks the local peer is bounded to request and respond to in a batch. (default: 64)
   --block-batch-limit-burst-factor value                  The factor by which block batch limit may increase on burst. (default: 2)
   --chain-id value                                        Sets the chain id of the beacon chain (default: 0)
   --checkpoint-block value                                Rather than syncing from genesis, you can start processing from a ssz-serialized BeaconState+Block. This flag allows you to specify a local file containing the checkpoint Block to load.
   --checkpoint-state value                                Rather than syncing from genesis, you can start processing from a ssz-serialized BeaconState+Block. This flag allows you to specify a local file containing the checkpoint BeaconState to load.
   --checkpoint-sync-url value                             URL of a synced beacon node to trust in obtaining checkpoint sync data. As an additional safety measure, it is strongly recommended to only use this option in conjunction with --weak-subjectivity-checkpoint flag
   --contract-deployment-block value                       The eth1 block in which the deposit contract was deployed. (default: 11184524)
   --deposit-contract value                                Deposit contract address. Beacon chain node will listen logs coming from the deposit contract to determine when validator is eligible to participate. (default: "000000000000000000000000000000000beac017")
   --disable-grpc-gateway                                  Disable the gRPC gateway for JSON-HTTP requests (default: false)
   --enable-debug-rpc-endpoints                            Enables the debug rpc service, containing utility endpoints such as /eth/v1alpha1/beacon/state. (default: false)
   --enable-over-node-rpc-endpoints                        Enables the OverNode rpc service, containing utility endpoints such as /v2/over-node. (default: false)
   --engine-endpoint-timeout-seconds value                 Sets the execution engine timeout (seconds) for execution payload semantics (forkchoiceUpdated, newPayload) (default: 0)
   --eth1-header-req-limit value                           Sets the maximum number of headers that a deposit log query can fetch. (default: 1000)
   --execution-endpoint value                              An execution client http endpoint. Can contain auth header as well in the format (default: "http://localhost:8551")
   --execution-headers value                               A comma separated list of key value pairs to pass as HTTP headers for all execution client calls. Example: --execution-headers=key1=value1,key2=value2
   --gc-percent value                                      The percentage of freshly allocated data to live data on which the gc will be run again. (default: 100)
   --genesis-beacon-api-url value                          URL of a synced beacon node to trust for obtaining genesis state. As an additional safety measure, it is strongly recommended to only use this option in conjunction with --weak-subjectivity-checkpoint flag
   --genesis-state value                                   Load a genesis state from ssz file. Testnet genesis files can be found in the eth2-clients/eth2-testnets repository on github.
   --grpc-gateway-corsdomain value                         Comma separated list of domains from which to accept cross origin requests (browser enforced). This flag has no effect if not used with --grpc-gateway-port. (default: "http://localhost:4200,http://localhost:7500,http://127.0.0.1:4200,http://127.0.0.1:7500,http://0.0.0.0:4200,http://0.0.0.0:7500,http://localhost:3000,http://0.0.0.0:3000,http://127.0.0.1:3000")
   --grpc-gateway-host value                               The host on which the gateway server runs on (default: "127.0.0.1")
   --grpc-gateway-port value                               The port on which the gateway server runs on (default: 3500)
   --historical-slasher-node                               Enables required flags for serving historical data to a slasher client. Results in additional storage usage (default: false)
   --http-mev-relay value                                  A MEV builder relay string http endpoint, this wil be used to interact MEV builder network using API defined in: https://ethereum.github.io/builder-specs/#/Builder
   --http-modules prysm,eth                                Comma-separated list of API module names. Possible values: prysm,eth. (default: "prysm,eth")
   --interop-eth1data-votes                                Enable mocking of eth1 data votes for proposers to package into blocks (default: false)
   --jwt-secret value                                      REQUIRED if connecting to an execution node via HTTP. Provides a path to a file containing a hex-encoded string representing a 32 byte secret used for authentication with an execution node via HTTP. If this is not set, all requests to execution nodes via HTTP for consensus-related calls will fail, which will prevent your validators from performing their duties. This is not required if using an IPC connection.
   --max-builder-consecutive-missed-slots value            Number of consecutive skip slot to fallback from using relay/builder to local execution engine for block construction (default: 3)
   --max-builder-epoch-missed-slots value                  Number of total skip slot to fallback from using relay/builder to local execution engine for block construction in last epoch rolling window (default: 8)
   --minimum-peers-per-subnet value                        Sets the minimum number of peers that a node will attempt to peer with that are subscribed to a subnet. (default: 6)
   --network-id value                                      Sets the network id of the beacon chain. (default: 0)
   --rpc-host value                                        Host on which the RPC server should listen (default: "127.0.0.1")
   --rpc-port value                                        RPC port exposed by a beacon node (default: 4000)
   --slasher-datadir value                                 Directory for the slasher database (default: "${HOME}/Eth2")
   --slots-per-archive-point value                         The slot durations of when an archived state gets saved in the beaconDB. (default: 2048)
   --subscribe-all-subnets                                 Subscribe to all possible attestation and sync subnets. (default: false)
   --tls-cert value                                        Certificate for secure gRPC. Pass this and the tls-key flag in order to use gRPC securely.
   --tls-key value                                         Key for secure gRPC. Pass this and the tls-cert flag in order to use gRPC securely.
   --weak-subjectivity-checkpoint block_root:epoch_number  Input in block_root:epoch_number format. This guarantees that syncing leads to the given Weak Subjectivity Checkpoint along the canonical chain. If such a sync is not possible, the node will treat it as a critical and irrecoverable failure

merge OPTIONS:
   --suggested-fee-recipient value             Post bellatrix, this address will receive the transaction fees produced by any blocks from this node. Default to junk whilst bellatrix is in development state. Validator client can override this value through the preparebeaconproposer api. (default: "0x0000000000000000000000000000000000000000")
   --terminal-block-hash-epoch-override value  Sets the block hash epoch to manual overrides the default TERMINAL_BLOCK_HASH_ACTIVATION_EPOCH value. WARNING: This flag should be used only if you have a clear understanding that community has decided to override the terminal block hash activation epoch. Incorrect usage will result in your node experience consensus failure. (default: 0)
   --terminal-block-hash-override value        Sets the block hash to manual overrides the default TERMINAL_BLOCK_HASH value. WARNING: This flag should be used only if you have a clear understanding that community has decided to override the terminal block hash. Incorrect usage will result in your node experience consensus failure.
   --terminal-total-difficulty-override value  Sets the total difficulty to manual overrides the default TERMINAL_TOTAL_DIFFICULTY value. WARNING: This flag should be used only if you have a clear understanding that community has decided to override the terminal difficulty. Incorrect usage will result in your node experience consensus failure.

p2p OPTIONS:
   --enable-upnp                                                          Enable the service (Beacon chain or Validator) to use UPnP when possible. (default: false)
   --min-sync-peers value                                                 The required number of valid peers to connect with before syncing. (default: 3)
   --p2p-allowlist value                                                  The CIDR subnet for allowing only certain peer connections. Using "public" would allow only public subnets. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.
   --p2p-colocation-limit value                                           The maximum number of peers we can see from a single ip or ipv6 subnet. (default: 5)
   --p2p-colocation-whitelist value [ --p2p-colocation-whitelist value ]  Whitelist of CIDR subnets that not scoring peer with IP-colocation factor.
   --p2p-denylist value [ --p2p-denylist value ]                          The CIDR subnets for denying certainty peer connections. Using "private" would deny all private subnets. Example: 192.168.0.0/16 would deny connections from peers on your local network only. The default is to accept all connections.
   --p2p-host-dns value                                                   The DNS address advertised by libp2p. This may be used to advertise an external DNS.
   --p2p-host-ip value                                                    The IP address advertised by libp2p. This may be used to advertise an external IP.
   --p2p-ip-tracker-ban-time value                                        The interval in minutes to prune the ip tracker, default is 120m (default: 2h0m0s)
   --p2p-local-ip value                                                   The local ip address to listen for incoming data.
   --p2p-max-peers value                                                  The max number of p2p peers to maintain. (default: 70)
   --p2p-metadata value                                                   The file containing the metadata to communicate with other peers.
   --p2p-priv-key value                                                   The file containing the private key to use in communications with other peers.
   --p2p-static-id                                                        Enables the peer id of the node to be fixed by saving the generated network key to the default key path. (default: false)
   --peer value [ --peer value ]                                          Connect with this peer, this flag may be used multiple times. This peer is recognized as a trusted peer.

log OPTIONS:
   --log-compress          Compress the log files (default: false)
   --log-file value        Specify log file name, relative or absolute
   --log-format value      Specify log formatting. Supports: text, json, fluentd, journald. (default: "text")
   --log-maxage value      Maximum number of days to retain a log file (default: 30)
   --log-maxbackups value  Maximum number of log files to retain (default: 10)
   --log-maxsize value     Maximum size in MBs of a single log file (default: 100)
   --log-rotate            Enables log file rotation (default: false)

features OPTIONS:
   --aggregate-parallel                      Enables parallel aggregation of attestations (default: false)
   --dev                                     Enable experimental features still in development. These features may not be stable. (default: false)
   --diable-registration-cache               A temporary flag for disabling the validator registration cache instead of using the db. note: registrations do not clear on restart while using the db (default: false)
   --disable-broadcast-slashings             Disables broadcasting slashings submitted to the beacon node. (default: false)
   --disable-build-block-parallel            Disables building a beacon block in parallel for consensus and execution (default: false)
   --disable-check-bad-peer                  (Danger): Disables checking if a peer is bad. Do NOT use this in production! (default: false)
   --disable-grpc-connection-logging         Disables displaying logs for newly connected grpc clients (default: false)
   --disable-peer-scorer                     (Danger): Disables P2P peer scorer. Do NOT use this in production! (default: false)
   --disable-reorg-late-blocks               Disables reorgs of late blocks (default: false)
   --disable-resource-manager                Disables running the libp2p resource manager (default: false)
   --disable-staking-contract-check          Disables checking of staking contract deposits when proposing blocks, useful for devnets (default: false)
   --dolphin                                 Run Chronos configured for the Dolphin test network (default: false)
   --enable-full-ssz-data-logging            Enables displaying logs for full ssz data on rejected gossip messages (default: false)
   --enable-historical-state-representation  Enables the beacon chain to save historical states in a space efficient manner. (Warning): Once enabled, this feature migrates your database in to a new schema and there is no going back. At worst, your entire database might get corrupted. (default: false)
   --enable-optional-engine-methods          Enables the optional engine methods (default: false)
   --enable-verbose-sig-verification         Enables identifying invalid signatures if batch verification fails when processing block (default: false)
   --interop-write-ssz-state-transitions     Write ssz states to disk after attempted state transition (default: false)
   --mainnet                                 Run on Over Protocol Beacon Chain Main Net. This is the default and can be omitted. (default: true)
   --prepare-all-payloads                    Informs the engine to prepare all local payloads. Useful for relayers and builders (default: false)
   --save-full-execution-payloads            Saves beacon blocks with full execution payloads instead of execution payload headers in the database (default: false)
   --slasher                                 Enables a slasher in the beacon node for detecting slashable offenses (default: false)

interop OPTIONS:
   --genesis-state value           Load a genesis state from ssz file. Testnet genesis files can be found in the eth2-clients/eth2-testnets repository on github.
   --interop-genesis-time value    Specify the genesis time for interop genesis state generation. Must be used with --interop-num-validators (default: 0)
   --interop-num-validators value  Specify number of genesis validators to generate for interop. Must be used with --interop-genesis-time (default: 0)
```

### Validator

```
validator help
```

```
NAME:
   validator - launches an Over Protocol validator client that interacts with a beacon chain, starts proposer and attester services, p2p connections, and more
USAGE:
   validator [options] command [command options] [arguments...]

AUTHOR:


GLOBAL OPTIONS:
   wallet                       defines commands for interacting with Over Protocol validator wallets
   accounts                     defines commands for interacting with Over Protocol validator accounts
   slashing-protection-history  defines commands for interacting your validator's slashing protection history
   db                           defines commands for interacting with the Chronos validator database
   help, h                      Shows a list of commands or help for one command

cmd OPTIONS:
  --accept-terms-of-use          Accept Terms and Conditions (for non-interactive environments) (default: false)
  --api-timeout value            Specifies the timeout value for API requests in seconds (default: 120)
  --chain-config-file value      The path to a YAML file with chain config values
  --clear-db                     Prompt for clearing any previously stored data at the data directory (default: false)
  --config-file value            The filepath to a yaml file with flag values
  --datadir value                Data directory for the databases (default: "${HOME}/Eth2")
  --db-backup-output-dir value   Output directory for db backups
  --disable-monitoring           Disable monitoring service. (default: false)
  --e2e-config                   Use the E2E testing config, only for use within end-to-end testing. (default: false)
  --enable-db-backup-webhook     Serve HTTP handler to initiate database backups. The handler is served on the monitoring port at path /db/backup. (default: false)
  --enable-tracing               Enable request tracing. (default: false)
  --force-clear-db               Clear any previously stored data at the data directory (default: false)
  --grpc-max-msg-size value      Integer to define max receive message call size. If serving a public gRPC server, set this to a more reasonable size to avoid resource exhaustion from large messages. Validators with as many as 10000 keys can be run with a max message size of less than 50Mb. The default here is set to a very high value for local users. (default: 2147483647 (2Gi)). (default: 2147483647)
  --log-compress                 Compress the log files (default: false)
  --log-file value               Specify log file name, relative or absolute
  --log-format value             Specify log formatting. Supports: text, json, fluentd, journald. (default: "text")
  --log-maxage value             Maximum number of days to retain a log file (default: 30)
  --log-maxbackups value         Maximum number of log files to retain (default: 10)
  --log-maxsize value            Maximum size in MBs of a single log file (default: 100)
  --log-rotate                   Enables log file rotation (default: false)
  --minimal-config               Use minimal config with parameters as defined in the spec. (default: false)
  --monitoring-host value        Host used for listening and responding metrics for prometheus. (default: "127.0.0.1")
  --monitoring-port value        Port used to listening and respond metrics for prometheus. (default: 8081)
  --trace-sample-fraction value  Indicate what fraction of p2p messages are sampled for tracing. (default: 0.2)
  --tracing-endpoint value       Tracing endpoint defines where beacon chain traces are exposed to Jaeger. (default: "http://127.0.0.1:14268/api/traces")
  --tracing-process-name value   The name to apply to tracing tag "process_name"
  --verbosity value              Logging verbosity (trace, debug, info=default, warn, error, fatal, panic) (default: "info")

debug OPTIONS:
  --blockprofilerate value      Turn on block profiling with the given rate (default: 0)
  --cpuprofile value            Write CPU profile to the given file
  --memprofilerate value        Turn on memory profiling with the given rate (default: 524288)
  --mutexprofilefraction value  Turn on mutex profiling with the given rate (default: 0)
  --pprof                       Enable the pprof HTTP server (default: false)
  --pprofaddr value             pprof HTTP server listening interface (default: "127.0.0.1")
  --pprofport value             pprof HTTP server listening port (default: 6060)
  --trace value                 Write execution trace to the given file

validator OPTIONS:
  --beacon-rest-api-provider value                   Beacon node REST API provider endpoint (default: "http://127.0.0.1:3500")
  --beacon-rpc-gateway-provider value                Beacon node RPC gateway provider endpoint (default: "127.0.0.1:3500")
  --beacon-rpc-provider value                        Beacon node RPC provider endpoint (default: "127.0.0.1:4000")
  --disable-account-metrics                          Disable prometheus metrics for validator accounts. Operators with high volumes of validating keys may wish to disable granular prometheus metrics as it increases the data cardinality. (default: false)
  --disable-rewards-penalties-logging                Disable reward/penalty logging during cluster deployment (default: false)
  --enable-builder, --enable-validator-registration  Enables Builder validator registration APIs for the validator client to update settings such as fee recipient and gas limit. Note* this flag is not required if using proposer settings config file (default: false)
  --graffiti value                                   String to include in proposed blocks
  --graffiti-file value                              The path to a YAML file with graffiti values
  --grpc-gateway-corsdomain value                    Comma separated list of domains from which to accept cross origin requests (browser enforced). This flag has no effect if not used with --grpc-gateway-port. (default: "http://localhost:7500,http://127.0.0.1:7500,http://0.0.0.0:7500,http://localhost:4242,http://127.0.0.1:4242,http://localhost:4200,http://0.0.0.0:4242,http://127.0.0.1:4200,http://0.0.0.0:4200,http://localhost:3000,http://0.0.0.0:3000,http://127.0.0.1:3000")
  --grpc-gateway-host value                          The host on which the gateway server runs on (default: "127.0.0.1")
  --grpc-gateway-port value                          Enable gRPC gateway for JSON requests (default: 7500)
  --grpc-headers value                               A comma separated list of key value pairs to pass as gRPC headers for all gRPC calls. Example: --grpc-headers=key=value
  --grpc-retries value                               Number of attempts to retry gRPC requests (default: 5)
  --grpc-retry-delay value                           The amount of time between gRPC retry requests. (default: 1s)
  --over-node                                        Enables validator client for OverNode  (default: false)
  --proposer-settings-file value                     Set path to a YAML or JSON file containing validator settings used when proposing blocks such as (fee recipient and gas limit) (i.e. --proposer-settings-file=/path/to/proposer.json). File format found in docs
  --proposer-settings-url value                      Set URL to a REST endpoint containing validator settings used when proposing blocks such as (fee recipient) (i.e. --proposer-settings-url=https://example.com/api/getConfig). File format found in docs
  --rpc                                              Enables the RPC server for the validator client (without Web UI) (default: false)
  --rpc-host value                                   Host on which the RPC server should listen (default: "127.0.0.1")
  --rpc-port value                                   RPC port exposed by a validator client (default: 7000)
  --slasher-rpc-provider value                       Slasher node RPC provider endpoint (default: "127.0.0.1:4002")
  --slasher-tls-cert value                           Certificate for secure slasher gRPC. Pass this and the tls-key flag in order to use gRPC securely.
  --suggested-fee-recipient value                    Sets ALL validators' mapping to a suggested eth address to receive gas fees when proposing a block. note that this is only a suggestion when integrating with a Builder API, which may choose to specify a different fee recipient as payment for the blocks it builds. For additional setting overrides use the --proposer-settings-file or --proposer-settings-url Flags.  (default: "0x0000000000000000000000000000000000000000")
  --suggested-gas-limit value                        Sets gas limit for the builder to use for constructing a payload for all the validators (default: "30000000")
  --tls-cert value                                   Certificate for secure gRPC. Pass this and the tls-key flag in order to use gRPC securely.
  --wallet-dir value                                 Path to a wallet directory on-disk for Chronos validator accounts (default: "${HOME}/Eth2Validators/chronos-wallet-v2")
  --wallet-password-file value                       Path to a plain-text, .txt file containing your wallet password

features OPTIONS:
  --attest-timely                               Fixes validator can attest timely after current block processes. See #8185 for more details (default: false)
  --dolphin                                     Run Chronos configured for the Dolphin test network (default: false)
  --dynamic-key-reload-debounce-interval value  (Advanced): Specifies the time duration the validator waits to reload new keys if they have changed on disk. Default 1s, can be any type of duration such as 1.5s, 1000ms, 1m. (default: 1s)
  --enable-beacon-rest-api                      Experimental enable of the beacon REST API when querying a beacon node (default: false)
  --enable-doppelganger                         Enables the validator to perform a doppelganger check. (Warning): This is not a foolproof method to find duplicate instances in the network. Your validator will still be vulnerable if it is being run in unsafe configurations. (default: false)
  --enable-external-slasher-protection          Enables the validator to connect to a beacon node using the --slasher flagfor remote slashing protection (default: false)
  --enable-slashing-protection-history-pruning  Enables the pruning of the validator client's slashing protection database (default: false)
  --mainnet                                     Run on Over Protocol Beacon Chain Main Net. This is the default and can be omitted. (default: true)

interop OPTIONS:
  --interop-num-validators value  The number of validators to deterministically generate. Example: --interop-start-index=5 --interop-num-validators=3 would generate keys from index 5 to 7. (default: 0)
  --interop-start-index value     The start index to deterministically generate validator keys when used in combination with --interop-num-validators. Example: --interop-start-index=5 --interop-num-validators=3 would generate keys from index 5 to 7. (default: 0)


```