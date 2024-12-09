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
   db                    Defines commands for interacting with the Over Protocol Beacon Node database
   generate-auth-secret  creates a random, 32 byte hex string in a plaintext file to be used for authenticating JSON-RPC requests. If no --output-file flag is defined, the file will be created in the current working directory
   help, h               Shows a list of commands or help for one command
   
cmd OPTIONS:
   --accept-terms-of-use                                Accepts Terms and Conditions (for non-interactive environments). (default: false)
   --api-timeout value                                  Specifies the timeout value for API requests in seconds. (default: 10s)
   --bootstrap-node value [ --bootstrap-node value ]    The address of bootstrap node. Beacon node will connect for peer discovery via DHT.  Multiple nodes can be passed by using the flag multiple times but not comma-separated. You can also pass YAML files containing multiple nodes.
   --chain-config-file value                            Path to a YAML file with chain config values.
   --clear-db                                           Prompt for clearing any previously stored data at the data directory. (default: false)
   --config-file value                                  Filepath to a yaml file with flag values.
   --datadir value                                      Data directory for the databases. (default: "/Users/syjn99/Library/Over")
   --disable-monitoring                                 Disables monitoring service. (default: false)
   --e2e-config                                         Enables the E2E testing config, only for use within end-to-end testing. (default: false)
   --enable-tracing                                     Enables request tracing. (default: false)
   --force-clear-db                                     Clears any previously stored data at the data directory. (default: false)
   --grpc-max-msg-size value                            Integer to define max receive message call size (in bytes).
                                                          If serving a public gRPC server, set this to a more reasonable size to avoid
                                                          resource exhaustion from large messages. 
                                                          Validators with as many as 10000 keys can be run with a max message size of less than 
                                                          50Mb. The default here is set to a very high value for local users. (default: 2147483647)
   --max-goroutines value                               Specifies the upper limit of goroutines running before a status check fails (default: 5000)
   --minimal-config                                     Uses minimal config with parameters as defined in the spec. (default: false)
   --monitor-indices value [ --monitor-indices value ]  List of validator indices to track performance
   --monitoring-host value                              Host used for listening and responding metrics for prometheus. (default: "127.0.0.1")
   --monitoring-port value                              Port used to listening and respond metrics for Prometheus. (default: 8080)
   --no-discovery                                       Enable only local network p2p and do not connect to cloud bootstrap nodes (default: false)
   --p2p-quic-port value                                The QUIC port used by libp2p. (default: 13000)
   --p2p-tcp-port value                                 The TCP port used by libp2p. (default: 13000)
   --p2p-udp-port value                                 The UDP port used by the discovery service discv5. (default: 12000)
   --relay-node value                                   The address of relay node. The beacon node will connect to the relay node and advertise their address via the relay node to other peers
   --restore-source-file value                          Filepath to the backed-up database file which will be used to restore the database
   --restore-target-dir value                           Target directory of the restored database (default: "/Users/syjn99/Library/Over")
   --rpc-max-page-size value                            Max number of items returned per page in RPC responses for paginated endpoints. (default: 0)
   --trace-sample-fraction value                        Indicates what fraction of p2p messages are sampled for tracing. (default: 0.2)
   --tracing-endpoint value                             Tracing endpoint defines where beacon chain traces are exposed to Jaeger. (default: "http://127.0.0.1:14268/api/traces")
   --tracing-process-name process_name                  Name to apply to tracing tag process_name.
   --verbosity value                                    Logging verbosity. (trace, debug, info, warn, error, fatal, panic) (default: "info")
   
debug OPTIONS:
   --blockprofilerate value      Turns on block profiling with the given rate. (default: 0)
   --cpuprofile value            Writes CPU profile to the given file.
   --memprofilerate value        Turns on memory profiling with the given rate. (default: 524288)
   --mutexprofilefraction value  Turns on mutex profiling with the given rate. (default: 0)
   --pprof                       Enables the pprof HTTP server. (default: false)
   --pprofaddr value             pprof HTTP server listening interface. (default: "127.0.0.1")
   --pprofport value             pprof HTTP server listening port. (default: 6060)
   --trace value                 Writes execution trace to the given file.
   
beacon-chain OPTIONS:
   --auth-token-file value                                             Path to auth token file used for OverScape API. Set this flag to enable the close API for OverScape.
   --backfill-batch-size value                                         Number of blocks per backfill batch. A larger number will request more blocks at once from peers, but also consume more system memory to hold batches in memory during processing. This has a multiplicative effect with backfill-worker-count. (default: 32)
   --backfill-oldest-slot value                                        Specifies the oldest slot that backfill should download. If this value is greater than current_slot - MIN_EPOCHS_FOR_BLOCK_REQUESTS, it will be ignored with a warning log. (default: 0)
   --backfill-worker-count value                                       Number of concurrent backfill batch requests. A larger number will better utilize network resources, up to a system-dependent limit, but will also consume more system memory to hold batches in memory during processing. Multiply by backfill-batch-size and average block size (~2MB before deneb) to find the right number for your system. This has a multiplicative effect with backfill-batch-size. (default: 2)
   --blob-batch-limit value                                            The amount of blobs the local peer is bounded to request and respond to in a batch. (default: 64)
   --blob-batch-limit-burst-factor value                               The factor by which blob batch limit may increase on burst. (default: 2)
   --blob-path value                                                   Location for blob storage. Default location will be a 'blobs' directory next to the beacon db.
   --blob-retention-epochs value, --extend-blob-retention-epoch value  Override the default blob retention period (measured in epochs). The node will exit with an error at startup if the value is less than the default of 4096 epochs. (default: 4096)
   --block-batch-limit value                                           The amount of blocks the local peer is bounded to request and respond to in a batch. Maximum 128 (default: 64)
   --block-batch-limit-burst-factor value                              The factor by which block batch limit may increase on burst. (default: 2)
   --chain-id value                                                    Sets the chain id of the beacon chain (default: 0)
   --checkpoint-block value                                            Rather than syncing from genesis, you can start processing from a ssz-serialized BeaconState+Block. This flag allows you to specify a local file containing the checkpoint Block to load.
   --checkpoint-state value                                            Rather than syncing from genesis, you can start processing from a ssz-serialized BeaconState+Block. This flag allows you to specify a local file containing the checkpoint BeaconState to load.
   --checkpoint-sync-url value                                         URL of a synced beacon node to trust in obtaining checkpoint sync data. As an additional safety measure, it is strongly recommended to only use this option in conjunction with --weak-subjectivity-checkpoint flag
   --contract-deployment-block value                                   The eth1 block in which the deposit contract was deployed. (default: 11184524)
   --deposit-contract value                                            Deposit contract address. Beacon chain node will listen logs coming from the deposit contract to determine when validator is eligible to participate. (default: "000000000000000000000000000000000beac017")
   --disable-debug-rpc-endpoints                                       Disables the debug Beacon API namespace. (default: false)
   --enable-experimental-backfill                                      Backfill is still experimental at this time. It will only be enabled if this flag is specified and the node was started using checkpoint sync. (default: false)
   --enable-over-node-rpc-endpoints                                    Enables the OverNode rpc service, containing utility endpoints for OverNode. auth-token-file flag must be set to enable close API. (default: false)
   --engine-endpoint-timeout-seconds value                             Sets the execution engine timeout (seconds) for execution payload semantics (forkchoiceUpdated, newPayload) (default: 0)
   --eth1-header-req-limit value                                       Sets the maximum number of headers that a deposit log query can fetch. (default: 1000)
   --execution-endpoint value                                          An execution client http endpoint. Can contain auth header as well in the format (default: "http://localhost:8551")
   --execution-headers value                                           A comma separated list of key value pairs to pass as HTTP headers for all execution client calls. Example: --execution-headers=key1=value1,key2=value2
   --gc-percent value                                                  The percentage of freshly allocated data to live data on which the gc will be run again. (default: 100)
   --genesis-beacon-api-url value                                      URL of a synced beacon node to trust for obtaining genesis state. As an additional safety measure, it is strongly recommended to only use this option in conjunction with --weak-subjectivity-checkpoint flag
   --genesis-state value                                               Load a genesis state from ssz file. Testnet genesis files can be found in the eth2-clients/eth2-testnets repository on github.
   --historical-slasher-node                                           Enables required flags for serving historical data to a slasher client. Results in additional storage usage (default: false)
   --http-cors-domain value, --grpc-gateway-corsdomain value           Comma separated list of domains from which to accept cross origin requests. (default: "http://localhost:3000, http://0.0.0.0:3000, http://127.0.0.1:3000, http://localhost:4200, http://127.0.0.1:4200, http://0.0.0.0:4200, http://localhost:7500, http://127.0.0.1:7500, http://0.0.0.0:7500")
   --http-host value, --grpc-gateway-host value                        Host on which the HTTP server runs on. (default: "127.0.0.1")
   --http-modules prysm,eth                                            Comma-separated list of API module names. Possible values: prysm,eth. (default: "prysm,eth")
   --http-port value, --grpc-gateway-port value                        Port on which the HTTP server runs on. (default: 3500)
   --interop-eth1data-votes                                            Enable mocking of eth1 data votes for proposers to package into blocks (default: false)
   --jwt-id value                                                      JWT claims id. Could be used to identify the client
   --jwt-secret value                                                  REQUIRED if connecting to an execution node via HTTP. Provides a path to a file containing a hex-encoded string representing a 32 byte secret used for authentication with an execution node via HTTP. If this is not set, all requests to execution nodes via HTTP for consensus-related calls will fail, which will prevent your validators from performing their duties. This is not required if using an IPC connection.
   --local-block-value-boost value                                     A percentage boost for local block construction as a Uint64. This is used to prioritize local block construction over relay/builder block constructionBoost is an additional percentage to multiple local block value. Use builder block if: builder_bid_value * 100 > local_block_value * (local-block-value-boost + 100) (default: 10)
   --max-builder-consecutive-missed-slots value                        Number of consecutive skip slot to fallback from using relay/builder to local execution engine for block construction (default: 3)
   --max-builder-epoch-missed-slots value                              Number of total skip slot to fallback from using relay/builder to local execution engine for block construction in last epoch rolling window. The values are on the basis of the networks and the default value for mainnet is 5. (default: 0)
   --max-concurrent-dials value                                        Sets the maximum number of peers that a node will attempt to dial with from discovery. By default we will dials as many peers as possible. (default: 0)
   --min-builder-bid value                                             An absolute value in Gwei that the builder bid has to have in order for this beacon node to use the builder's block. Anything less than this value and the beacon will revert to local building. (default: 0)
   --min-builder-to-local-difference value                             An absolute value in Gwei that the builder bid has to have in order for this beacon node to use the builder's block. Anything less than this value and the beacon will revert to local building. (default: 0)
   --minimum-peers-per-subnet value                                    Sets the minimum number of peers that a node will attempt to peer with that are subscribed to a subnet. (default: 6)
   --network-id value                                                  Sets the network id of the beacon chain. (default: 0)
   --rpc-host value                                                    Host on which the RPC server should listen (default: "127.0.0.1")
   --rpc-port value                                                    RPC port exposed by a beacon node (default: 4000)
   --slasher-datadir value                                             Directory for the slasher database (default: "/Users/syjn99/Library/Over")
   --slots-per-archive-point value                                     The slot durations of when an archived state gets saved in the beaconDB. (default: 2048)
   --subscribe-all-subnets                                             Subscribe to all possible attestation and sync subnets. (default: false)
   --tls-cert value                                                    Certificate for secure gRPC. Pass this and the tls-key flag in order to use gRPC securely.
   --tls-key value                                                     Key for secure gRPC. Pass this and the tls-cert flag in order to use gRPC securely.
   --weak-subjectivity-checkpoint block_root:epoch_number              Input in block_root:epoch_number format. This guarantees that syncing leads to the given Weak Subjectivity Checkpoint along the canonical chain. If such a sync is not possible, the node will treat it as a critical and irrecoverable failure
   
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
   --pubsub-queue-size value                                              The size of the pubsub validation and outbound queue for the node. (default: 1000)
   
log OPTIONS:
   --log-compress          Compress the log files (default: false)
   --log-file value        Specifies log file name, relative or absolute.
   --log-format value      Specifies log formatting. Supports: text, json, fluentd, journald. (default: "text")
   --log-maxage value      Maximum number of days to retain a log file (default: 30)
   --log-maxbackups value  Maximum number of log files to retain (default: 10)
   --log-maxsize value     Maximum size in MBs of a single log file (default: 100)
   --log-rotate            Enables log file rotation (default: false)
   
features OPTIONS:
   --blob-save-fsync                         Forces new blob files to be fysnc'd before continuing, ensuring durable blob writes. (default: false)
   --dev                                     Enables experimental features still in development. These features may not be stable. (default: false)
   --disable-broadcast-slashings             Disables broadcasting slashings submitted to the beacon node. (default: false)
   --disable-committee-aware-packing         Changes the attestation packing algorithm to one that is not aware of attesting committees. (default: false)
   --disable-experimental-state              Turns off the latest and greatest changes to the beacon state. Disabling this is safe to do after the feature has been enabled. (default: false)
   --disable-grpc-connection-logging         Disables displaying logs for newly connected grpc clients. (default: false)
   --disable-peer-scorer                     (Danger): Disables P2P peer scorer. Do NOT use this in production! (default: false)
   --disable-registration-cache              Temporary flag for disabling the validator registration cache instead of using the DB. Note: registrations do not clear on restart while using the DB. (default: false)
   --disable-resource-manager                Disables running the libp2p resource manager. (default: false)
   --disable-staking-contract-check          Disables checking of staking contract deposits when proposing blocks, useful for devnets. (default: false)
   --disable-verbose-sig-verification        Disables identifying invalid signatures if batch verification fails when processing block. (default: false)
   --dolphin                                 Runs Chronos configured for the Dolphin test network. (default: false)
   --enable-discovery-reboot                 Experimental: Enables the discovery listener to rebooted in the event of connectivity issues. (default: false)
   --enable-full-ssz-data-logging            Enables displaying logs for full ssz data on rejected gossip messages. (default: false)
   --enable-historical-state-representation  Enables the beacon chain to save historical states in a space efficient manner. (Warning): Once enabled, this feature migrates your database in to a new schema and there is no going back. At worst, your entire database might get corrupted. (default: false)
   --enable-quic                             Enables connection using the QUIC protocol for peers which support it. (default: false)
   --interop-write-ssz-state-transitions     Writes SSZ states to disk after attempted state transitio. (default: false)
   --mainnet                                 Runs on Over Protocol main network. This is the default and can be omitted. (default: true)
   --prepare-all-payloads                    Informs the engine to prepare all local payloads. Useful for relayers and builders. (default: false)
   --save-full-execution-payloads            Saves beacon blocks with full execution payloads instead of execution payload headers in the database. (default: false)
   --save-invalid-blob-temp                  Writes invalid blobs to temp directory. (default: false)
   --save-invalid-block-temp                 Writes invalid blocks to temp directory. (default: false)
   --slasher                                 Enables a slasher in the beacon node for detecting slashable offenses. (default: false)
   
interop OPTIONS:
   --genesis-state value           Load a genesis state from ssz file. Testnet genesis files can be found in the eth2-clients/eth2-testnets repository on github.
   --interop-genesis-time value    Specify the genesis time for interop genesis state generation. Must be used with --interop-num-validators (default: 0)
   --interop-num-validators value  Specify number of genesis validators to generate for interop. Must be used with --interop-genesis-time (default: 0)
   
deprecated OPTIONS:
   --db-backup-output-dir value  Output directory for db backups.
```

### Validator

```
validator help
```

```
NAME:
   validator - Launches an Over Protocol validator client that interacts with a beacon chain, starts proposer and attester services, p2p connections, and more.

USAGE:
   validator [options] command [command options] [arguments...]

VERSION:
  Chronos/v1.5.4_juntmp/8434f9a98982c439d39e9ef563e9458681f36198. Built at: 2024-12-07 11:16:40+00:00

global OPTIONS:
   wallet                       Defines commands for interacting with Over Protocol validator wallets.
   accounts                     Defines commands for interacting with Over Protocol validator accounts.
   slashing-protection-history  Defines commands for interacting your validator's slashing protection history.
   db                           Defines commands for interacting with the Chronos validator database.
   help, h                      Shows a list of commands or help for one command
   
cmd OPTIONS:
  --accept-terms-of-use                Accepts Terms and Conditions (for non-interactive environments). (default: false)
  --api-timeout value                  Specifies the timeout value for API requests in seconds. (default: 10s)
  --chain-config-file value            Path to a YAML file with chain config values.
  --clear-db                           Prompt for clearing any previously stored data at the data directory. (default: false)
  --config-file value                  Filepath to a yaml file with flag values.
  --datadir value                      Data directory for the databases. (default: "/Users/syjn99/Library/Over")
  --db-backup-output-dir value         Output directory for db backups.
  --disable-monitoring                 Disables monitoring service. (default: false)
  --e2e-config                         Enables the E2E testing config, only for use within end-to-end testing. (default: false)
  --enable-db-backup-webhook           Serves HTTP handler to initiate database backups.
                                         The handler is served on the monitoring port at path /db/backup. (default: false)
  --enable-tracing                     Enables request tracing. (default: false)
  --force-clear-db                     Clears any previously stored data at the data directory. (default: false)
  --grpc-max-msg-size value            Integer to define max receive message call size (in bytes).
                                         If serving a public gRPC server, set this to a more reasonable size to avoid
                                         resource exhaustion from large messages. 
                                         Validators with as many as 10000 keys can be run with a max message size of less than 
                                         50Mb. The default here is set to a very high value for local users. (default: 2147483647)
  --log-compress                       Compress the log files (default: false)
  --log-file value                     Specifies log file name, relative or absolute.
  --log-format value                   Specifies log formatting. Supports: text, json, fluentd, journald. (default: "text")
  --log-maxage value                   Maximum number of days to retain a log file (default: 30)
  --log-maxbackups value               Maximum number of log files to retain (default: 10)
  --log-maxsize value                  Maximum size in MBs of a single log file (default: 100)
  --log-rotate                         Enables log file rotation (default: false)
  --minimal-config                     Uses minimal config with parameters as defined in the spec. (default: false)
  --monitoring-host value              Host used for listening and responding metrics for prometheus. (default: "127.0.0.1")
  --monitoring-port value              Port used to listening and respond metrics for Prometheus. (default: 8081)
  --trace-sample-fraction value        Indicates what fraction of p2p messages are sampled for tracing. (default: 0.2)
  --tracing-endpoint value             Tracing endpoint defines where beacon chain traces are exposed to Jaeger. (default: "http://127.0.0.1:14268/api/traces")
  --tracing-process-name process_name  Name to apply to tracing tag process_name.
  --verbosity value                    Logging verbosity. (trace, debug, info, warn, error, fatal, panic) (default: "info")
  --wallet-dir value                   Path to a wallet directory on-disk for Chronos validator accounts. (default: "/Users/syjn99/Library/OverValidators/chronos-wallet-v2")
  --wallet-password-file value         Path to a plain-text, .txt file containing your wallet password.
  
debug OPTIONS:
  --blockprofilerate value      Turns on block profiling with the given rate. (default: 0)
  --cpuprofile value            Writes CPU profile to the given file.
  --memprofilerate value        Turns on memory profiling with the given rate. (default: 524288)
  --mutexprofilefraction value  Turns on mutex profiling with the given rate. (default: 0)
  --pprof                       Enables the pprof HTTP server. (default: false)
  --pprofaddr value             pprof HTTP server listening interface. (default: "127.0.0.1")
  --pprofport value             pprof HTTP server listening port. (default: 6060)
  --trace value                 Writes execution trace to the given file.
  
rpc OPTIONS:
  --beacon-rest-api-provider value                           Beacon node REST API provider endpoint. (default: "http://127.0.0.1:3500")
  --beacon-rpc-provider value                                Beacon node RPC provider endpoint. (default: "127.0.0.1:4000")
  --grpc-headers value                                       Comma separated list of key value pairs to pass as gRPC headers for all gRPC calls.
                                                               Example: --grpc-headers=key=value
  --grpc-retries value                                       Number of attempts to retry gRPC requests. (default: 5)
  --grpc-retry-delay value                                   Amount of time between gRPC retry requests. (default: 1s)
  --http-cors-domain value, --grpc-gateway-corsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced). (default: "http://localhost:7500,http://127.0.0.1:7500,http://0.0.0.0:7500,http://localhost:4242,http://127.0.0.1:4242,http://localhost:4200,http://0.0.0.0:4242,http://127.0.0.1:4200,http://0.0.0.0:4200,http://localhost:3000,http://0.0.0.0:3000,http://127.0.0.1:3000")
  --http-host value, --grpc-gateway-host value               Host on which the HTTP server runs on. (default: "127.0.0.1")
  --http-port value, --grpc-gateway-port value               Port on which the HTTP server runs on. (default: 7500)
  --rpc                                                      Enables the RPC server for the validator client (without Web UI). (default: false)
  --rpc-host value                                           Host on which the RPC server should listen. (default: "127.0.0.1")
  --rpc-port value                                           RPC port exposed by a validator client. (default: 7000)
  --tls-cert value                                           Certificate for secure gRPC. Pass this and the tls-key flag in order to use gRPC securely.
  
proposer OPTIONS:
  --enable-builder, --enable-validator-registration  Enables builder validator registration APIs for the validator client to update settings
                                                       such as fee recipient and gas limit. This flag is not required if using proposer
                                                       settings config file. (default: false)
  --graffiti value                                   String to include in proposed blocks.
  --graffiti-file value                              Path to a YAML file with graffiti values.
  --proposer-settings-file value                     Sets path to a YAML or JSON file containing validator settings used when proposing blocks such as
                                                       fee recipient and gas limit. File format found in docs.
  --proposer-settings-url value                      Sets URL to a REST endpoint containing validator settings used when proposing blocks such as
                                                       fee recipient and gas limit. File format found in docs
  --suggested-fee-recipient value                    Sets ALL validators' mapping to a suggested eth address to receive gas fees when proposing a block.
                                                       Note that this is only a suggestion when integrating with a Builder API, which may choose to specify
                                                       a different fee recipient as payment for the blocks it builds.For additional setting overrides use the 
                                                       --proposer-settings-file or --proposer-settings-url flags. (default: "0x0000000000000000000000000000000000000000")
  --suggested-gas-limit value                        Sets gas limit for the builder to use for constructing a payload for all the validators. (default: "30000000")
  --validators-registration-batch-size value         Sets the maximum size for one batch of validator registrations. Use a non-positive value to disable batching. (default: 0)
  
remote signer OPTIONS:
  --validators-external-signer-key-file value, --remote-signer-keys-file value                                                                               A file path used to load remote public validator keys and persist them through restarts.
  --validators-external-signer-public-keys value, --remote-signer-keys value [ --validators-external-signer-public-keys value, --remote-signer-keys value ]  Comma separated list of public keys OR an external url endpoint for the validator to retrieve public keys from for usage with web3signer.
  --validators-external-signer-url value, --remote-signer-url value                                                                                          URL for consensys' web3signer software to use with the Chronos validator client.
  
slasher OPTIONS:
  --slasher-rpc-provider value  Slasher node RPC provider endpoint. (default: "127.0.0.1:4002")
  --slasher-tls-cert value      Certificate for secure slasher gRPC. Pass this and the tls-key flag in order to use gRPC securely.
  
misc OPTIONS:
  --disable-account-metrics                                         Disables prometheus metrics for validator accounts. Operators with high volumes 
                                                                      of validating keys may wish to disable granular prometheus metrics as it increases
                                                                      the data cardinality. (default: false)
  --disable-rewards-penalties-logging                               Disables reward/penalty logging during cluster deployment. (default: false)
  --distributed                                                     To enable the use of Chronos validator client in Distributed Validator Cluster (default: false)
  --keymanager-token-file value, --validator-api-bearer-file value  Path to auth token file used for validator apis. (default: "/Users/syjn99/Library/OverValidators/chronos-wallet-v2/auth-token")
  --over-node                                                       Enables OverNode APIs for the validator client. (default: false)
  
features OPTIONS:
  --attest-timely                               Fixes validator can attest timely after current block processes. See #8185 for more details. (default: false)
  --dolphin                                     Runs Chronos configured for the Dolphin test network. (default: false)
  --dynamic-key-reload-debounce-interval value  (Advanced): Specifies the time duration the validator waits to reload new keys if they have changed on disk.
                                                Can be any type of duration such as 1.5s, 1000ms, 1m. (default: 1s)
  --enable-beacon-rest-api                      (Experimental): Enables of the beacon REST API when querying a beacon node. (default: false)
  --enable-doppelganger                         Enables the validator to perform a doppelganger check. 
                                                  This is not a foolproof method to find duplicate instances in the network. 
                                                  Your validator will still be vulnerable if it is being run in unsafe configurations. (default: false)
  --enable-minimal-slashing-protection          (Experimental): Enables the minimal slashing protection. See EIP-3076 for more details. (default: false)
  --enable-slashing-protection-history-pruning  Enables the pruning of the validator client's slashing protection database. (default: false)
  --mainnet                                     Runs on Over Protocol main network. This is the default and can be omitted. (default: true)
  
interop OPTIONS:
  --interop-num-validators value  Number of validators to deterministically generate.
                                    Example: --interop-start-index=5 --interop-num-validators=3 would generate keys from index 5 to 7. (default: 0)
  --interop-start-index value     Start index to deterministically generate validator keys when used in combination with --interop-num-validators.
                                    Example: --interop-start-index=5 --interop-num-validators=3 would generate keys from index 5 to 7. (default: 0)
  
```