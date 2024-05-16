"use strict";(self.webpackChunkover_docs=self.webpackChunkover_docs||[]).push([[652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Differences from Ethereum",description:"A list of differences from Ethereum that can significantly impact how applications are built and function on this platform.",lang:"en"},o=void 0,s={unversionedId:"developers/differences-from-ethereum",id:"developers/differences-from-ethereum",title:"Differences from Ethereum",description:"A list of differences from Ethereum that can significantly impact how applications are built and function on this platform.",source:"@site/docs/developers/differences-from-ethereum.md",sourceDirName:"developers",slug:"/developers/differences-from-ethereum",permalink:"/developers/differences-from-ethereum",draft:!1,editUrl:"https://github.com/overprotocol/overprotocol.github.io/edit/develop/docs/developers/differences-from-ethereum.md",tags:[],version:"current",frontMatter:{title:"Differences from Ethereum",description:"A list of differences from Ethereum that can significantly impact how applications are built and function on this platform.",lang:"en"},sidebar:"developersSidebar",previous:{title:"Getting Started",permalink:"/developers/"},next:{title:"Build Your Contract",permalink:"/developers/build-your-contract/"}},c={},l=[{value:"Account Expiration",id:"account-expiration",level:2},{value:"Differences in Contract Address Derivation",id:"differences-in-contract-address-derivation",level:2},{value:"Address Derivation",id:"address-derivation",level:3},{value:"Differences in Account Structure",id:"differences-in-account-structure",level:2},{value:"Account Nonce",id:"account-nonce",level:3},{value:"RestoredEpoch",id:"restoredepoch",level:3},{value:"<code>nonce</code> Field in Transaction",id:"nonce-field-in-transaction",level:4},{value:"Storage Count",id:"storage-count",level:3},{value:"UI Hash",id:"ui-hash",level:3},{value:"Misc",id:"misc",level:2},{value:"<code>SELFDESTRUCT</code> Operation",id:"selfdestruct-operation",level:3},{value:"Future Changes",id:"future-changes",level:2},{value:"Storage Layout Change",id:"storage-layout-change",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While OverProtocol is an independent Layer 1 protocol, it inherits the Ethereum Virtual Machine (EVM), making it compatible with Ethereum's established ecosystem. This compatibility allows developers familiar with Ethereum's development environment to transition smoothly and leverage their existing skills. Below, we outline the key aspects of OverProtocol that differentiate it from Ethereum, highlighting why understanding these distinctions is crucial for developers, as these differences can significantly impact how applications are built and function on this platform."),(0,a.kt)("h2",{id:"account-expiration"},"Account Expiration"),(0,a.kt)("p",null,"In OverProtocol, accounts that remain inactive for an extended period are subject to expiration. ",(0,a.kt)("a",{parentName:"p",href:"/learn/key-features/layered-architecture/ethanos"},"This mechanism")," is designed to optimize the network's efficiency and scalability by reducing the overhead of maintaining dormant accounts."),(0,a.kt)("p",null,"Account restoration in OverProtocol is not implemented at the opcode level but rather as a combination of a new transaction type and additional EVM functionalities."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Currently, contract accounts have restoration disabled to prevent their expiration. To keep a contract active and prevent it from expiring, it must be periodically used."),(0,a.kt)("p",{parentName:"admonition"},"Usage is defined as any transaction querying the contract account's state or calling its functions, including view functions. This ensures that contracts remain active and functional within the network ecosystem, adhering to the protocol's operational requirements.")),(0,a.kt)("h2",{id:"differences-in-contract-address-derivation"},"Differences in Contract Address Derivation"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"While the same Externally Owned Account (EOA) address can be used across various EVM-compatible chains with the same private key, this does not apply to contract addresses.")),(0,a.kt)("h3",{id:"address-derivation"},"Address Derivation"),(0,a.kt)("p",null,"Due to the state expiry feature in OverProtocol, all accounts, including contract accounts, could eventually expire. To mitigate the risk of an expired contract address being reused by a newly created contract, the contract creation operation always incorporates the caller account's ",(0,a.kt)("inlineCode",{parentName:"p"},"restoredEpoch")," value. This inclusion alters the outcome of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," operation, making the resulting addresses differ from those on other EVM chains."),(0,a.kt)("p",null,"As a result, even though the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE2")," operation allows for deterministic address prediction and usage, it is not possible to reuse the same address across different chains as you would with EOA addresses."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE2")," for contract deployment, the address must be restored back to Epoch 0.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Create creates a new contract using code as deployment code.\nfunc (evm *EVM) Create(caller ContractRef, code []byte, gas uint64, value *big.Int) (ret []byte, contractAddr common.Address, leftOverGas uint64, err error) {\n  contractAddr = crypto.CreateAddress(caller.Address(), evm.StateDB.GetRestoredEpoch(caller.Address()), evm.StateDB.GetNonce(caller.Address()))\n  return evm.create(caller, &codeAndHash{code: code}, gas, value, contractAddr, CREATE)\n}\n\n// Create2 creates a new contract using code as deployment code.\n//\n// The different between Create2 with Create is Create2 uses keccak256(0xff ++ msg.sender ++ salt ++ keccak256(init_code))[12:]\n// instead of the usual sender-and-nonce-hash as the address where the contract is initialized at.\nfunc (evm *EVM) Create2(caller ContractRef, code []byte, gas uint64, endowment *big.Int, salt *uint256.Int) (ret []byte, contractAddr common.Address, leftOverGas uint64, err error) {\n  codeAndHash := &codeAndHash{code: code}\n  contractAddr = crypto.CreateAddress2(caller.Address(), salt.Bytes32(), codeAndHash.Hash().Bytes())\n  return evm.create(caller, codeAndHash, gas, endowment, contractAddr, CREATE2)\n}\n")),(0,a.kt)("h2",{id:"differences-in-account-structure"},"Differences in Account Structure"),(0,a.kt)("h3",{id:"account-nonce"},"Account Nonce"),(0,a.kt)("p",null,"In traditional blockchain architectures, the ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce")," primarily tracks the number of transactions sent from a given account, ensuring transaction order and preventing double-spending. However, due to the expiration feature in OverProtocol, distinguishing explicitly between expired accounts and newly created accounts becomes challenging, raising the possibility of ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce")," overlap. To address this issue, OverProtocol introduces the ",(0,a.kt)("inlineCode",{parentName:"p"},"restoredEpoch")," as a crucial component."),(0,a.kt)("h3",{id:"restoredepoch"},"RestoredEpoch"),(0,a.kt)("p",null,"The combination of the ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"restoredEpoch")," value ensures uniqueness for each account. This system allows OverProtocol to maintain the integrity and distinction of account states over time, even through periods of account inactivity and expiration."),(0,a.kt)("p",null,"For a more detailed explanation, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/learn/key-features/layered-architecture/ethanos#dealing-with-crumb-accounts-restored-epoch"},"documentation"),"."),(0,a.kt)("h4",{id:"nonce-field-in-transaction"},(0,a.kt)("inlineCode",{parentName:"h4"},"nonce")," Field in Transaction"),(0,a.kt)("p",null,"In RPC requests, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_getTransactionCount"),", the response reflects this unique combination. The ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce")," is split into a 64-bit field, with the first 32 bits representing the ",(0,a.kt)("inlineCode",{parentName:"p"},"restoredEpoch")," and the remaining 32 bits functioning as the traditional ",(0,a.kt)("inlineCode",{parentName:"p"},"nonce"),". This adaptation allows developers to leverage existing Ethereum development environments while accommodating the unique features of OverProtocol."),(0,a.kt)("h3",{id:"storage-count"},"Storage Count"),(0,a.kt)("p",null,"This feature prepares for future functionalities where the cost associated with an account's storage usage might be billed. Each new storage slot created by an ",(0,a.kt)("inlineCode",{parentName:"p"},"SSTORE")," operation increases the count, while emptying a slot decreases it."),(0,a.kt)("h3",{id:"ui-hash"},"UI Hash"),(0,a.kt)("p",null,"Reserved space for future proof related to an account's interaction with external layers. Currently, this feature is not utilized but is planned for future enhancements to enhance cross-layer interactions and verifications."),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("h3",{id:"selfdestruct-operation"},(0,a.kt)("inlineCode",{parentName:"h3"},"SELFDESTRUCT")," Operation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SELFDESTRUCT")," opcode, updated in accordance with ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6780"},(0,a.kt)("inlineCode",{parentName:"a"},"EIP-6780")),", is implemented in such a way that while it does not actually destroy the contract account, it does process refunds. Contracts that are not used will naturally expire over time as the Ethanos epoch progresses."),(0,a.kt)("p",null,"The rationale behind incorporating EIP-6780 into OverProtocol differs significantly from its application in Ethereum. OverProtocol's implementation is specifically designed to avoid scenarios where a self-destructed contract account becomes indistinguishable from an Externally Owned Account (EOA). This distinction is crucial for maintaining clarity and integrity in the network's account management, ensuring that the lifecycle of contract accounts is handled in a better way."),(0,a.kt)("h2",{id:"future-changes"},"Future Changes"),(0,a.kt)("p",null,"As OverProtocol progresses towards the Ethanos endgame, significant changes are planned, particularly regarding how storage is managed within accounts. These adjustments will be designed to ensure that backward compatibility is maximally preserved and that a seamless migration can occur. This means that current dApp developers should not be overly concerned about the impending changes."),(0,a.kt)("h3",{id:"storage-layout-change"},"Storage Layout Change"),(0,a.kt)("p",null,"Upcoming updates to OverProtocol will include a comprehensive overhaul of the storage layout within accounts. This change aims to enhance the efficiency and scalability of data management on the blockchain. Details on the new storage system will be provided as development progresses, ensuring developers have ample time to adapt their applications. This transition is intended to be smooth, with support structures in place to assist developers in migrating existing applications without disruption."))}p.isMDXComponent=!0}}]);