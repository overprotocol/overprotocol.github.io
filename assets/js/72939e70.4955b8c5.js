"use strict";(self.webpackChunkover_docs=self.webpackChunkover_docs||[]).push([[974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>C,contentTitle:()=>T,default:()=>R,frontMatter:()=>x,metadata:()=>I,toc:()=>_});var r=a(7462),o=a(7294),n=a(3905),i=a(6010),s=a(2466),l=a(6550),u=a(1980),d=a(7392),c=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:o}}=e;return{value:t,label:a,attributes:r,default:o}}))}function h(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=h(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[l,u]=v({queryString:a,groupId:r}),[d,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,c.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),y=(()=>{const e=l??d;return m({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),p(e)}),[u,p,n]),tabValues:n}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==n&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:p},s,{className:(0,i.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=y(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},o.createElement(k,(0,r.Z)({},e,t)),o.createElement(b,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(w,(0,r.Z)({key:String(t)},e))}const O={tabItem:"tabItem_Ymn6"};function E(e){let{children:t,hidden:a,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(O.tabItem,r),hidden:a},t)}const x={title:"Operate Validators",description:"Step-by-step guides of how to operate validators.",lang:"en"},T=void 0,I={unversionedId:"operators/operate-validators",id:"operators/operate-validators",title:"Operate Validators",description:"Step-by-step guides of how to operate validators.",source:"@site/docs/operators/operate-validators.md",sourceDirName:"operators",slug:"/operators/operate-validators",permalink:"/operators/operate-validators",draft:!1,editUrl:"https://github.com/overprotocol/overprotocol.github.io/edit/develop/docs/operators/operate-validators.md",tags:[],version:"current",frontMatter:{title:"Operate Validators",description:"Step-by-step guides of how to operate validators.",lang:"en"},sidebar:"operatorsSidebar",previous:{title:"Run a Node",permalink:"/operators/run-a-node"},next:{title:"Command Line Options",permalink:"/operators/CLI-options/kairos"}},C={},_=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Before We Go Further",id:"before-we-go-further",level:3},{value:"Skills for Operating a Validator",id:"skills-for-operating-a-validator",level:3},{value:"Option 1. Setting up Validators From Scratch",id:"option-1-setting-up-validators-from-scratch",level:2},{value:"1. Obtain OVER",id:"1-obtain-over",level:3},{value:"2. Generate Validator Keys (Mnemonics)",id:"2-generate-validator-keys-mnemonics",level:3},{value:"3. Send Deposit Transactions",id:"3-send-deposit-transactions",level:3},{value:"Option 2. Migrating your validators from OverNode",id:"option-2-migrating-your-validators-from-overnode",level:2},{value:"1. Save your validator mnemonic",id:"1-save-your-validator-mnemonic",level:3},{value:"2. Generate keystore files",id:"2-generate-keystore-files",level:3},{value:"3. Check your validators",id:"3-check-your-validators",level:3},{value:"Run your validator",id:"run-your-validator",level:2},{value:"Transfer Validator Keys",id:"transfer-validator-keys",level:3},{value:"Run your Validator",id:"run-your-validator-1",level:3},{value:"More on Validator Activation",id:"more-on-validator-activation",level:2},{value:"Activation Queue",id:"activation-queue",level:3},{value:"Activated",id:"activated",level:3},{value:"Withdrawal Process (Quitting the validator status)",id:"withdrawal-process-quitting-the-validator-status",level:2},{value:"Initiating a Voluntary Exit",id:"initiating-a-voluntary-exit",level:3},{value:"Exiting Process",id:"exiting-process",level:3},{value:"Post-Exit Status",id:"post-exit-status",level:3}],V={toc:_},P="wrapper";function R(e){let{components:t,...o}=e;return(0,n.kt)(P,(0,r.Z)({},V,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To operate validators means to stake OVER and participate in OverProtocol's Consensus mechanism. In order to be an validator, a user must first have its own full node running. Follow ",(0,n.kt)("a",{parentName:"p",href:"./run-a-node"},"Run a node")," page for more."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"before-we-go-further"},"Before We Go Further"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You have the option to install ",(0,n.kt)("a",{parentName:"p",href:"https://over.network/overnode"},"OverNode"),". Just launch it and follow the clear, step-by-step instructions provided within the application. We highly recommend users to participate in OverProtocol through the use of OverNode."),(0,n.kt)("p",{parentName:"admonition"},"OverNode simplifies the process of setting up and maintaining your node and validators by automating many of the initial configuration and synchronization tasks. With OverNode users could easily register and withdraw from validator status.")),(0,n.kt)("h3",{id:"skills-for-operating-a-validator"},"Skills for Operating a Validator"),(0,n.kt)("p",null,"Being a validator on OverProtocol without using OverNode requires specific skills and commitments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Technical Proficiency"),": You need operational knowledge on how to set up, run, and maintain both an Ethereum consensus client and an execution client alongside a validator client. This includes understanding the software interactions and network requirements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Commitment"),": Operating a validator node requires a long-term commitment. Your node needs to run continuously (24/7/365) to support the network effectively. Interruptions in service can lead to penalties, thus reliability and dedication are key.")),(0,n.kt)("p",null,"Operating a validator node on OverProtocol can be rewarding but demands a high level of dedication and technical expertise to ensure the security and efficacy of the blockchain network."),(0,n.kt)(N,{groupId:"set-up-validators",defaultValue:"scratch",values:[{label:"From scratch",value:"scratch"},{label:"Migration from OverNode",value:"migration"}],mdxType:"Tabs"},(0,n.kt)(E,{value:"scratch",mdxType:"TabItem"},(0,n.kt)("h2",{id:"option-1-setting-up-validators-from-scratch"},"Option 1. Setting up Validators From Scratch"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This section is intended for users who wish to set up validator keys using command-line tools. If you already possess mnemonics or keys, please refer to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Migration from OverNode"))," tab for guidance on migrating your setup.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"1-obtain-over"},"1. Obtain OVER"),(0,n.kt)("p",null,"To participate as a validator, you need 256 OVER tokens or multiples thereof, stored in a single wallet address. This amount is necessary to make the deposit transaction(s) required for validator registration."),(0,n.kt)("h3",{id:"2-generate-validator-keys-mnemonics"},"2. Generate Validator Keys (Mnemonics)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Go to the Deposit-cli Repository"),": Go to the OverProtocol ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/overprotocol/staking-deposit-cli"},"staking-deposit-cli")," repository. This tool is used for creating ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2335"},"EIP-2335")," format BLS12-381 keystores and a corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"deposit_data-XXXXX.json")," file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Run CLI following the repository's ",(0,n.kt)("inlineCode",{parentName:"strong"},"README.md")),": This will complete the process of generating the mnemonic. Ensure that the generated file is kept in a safe place, as this mnemonic will be associated with all future rewards and your withdrawal amount."),(0,n.kt)("p",{parentName:"li"},"You should run the command similar to the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./deposit new-mnemonic --num_validators=1 --mnemonic_language=english --execution_address=<YOUR_WALLET_ADDRESS> --chain=over_dolphin\n")),(0,n.kt)("p",{parentName:"li"},"Adding ",(0,n.kt)("inlineCode",{parentName:"p"},"--execution_address=<YOUR_WALLET_ADDRESS>")," will generate deposit data with a withdrawal credential, which is required for withdrawal."))),(0,n.kt)("h3",{id:"3-send-deposit-transactions"},"3. Send Deposit Transactions"),(0,n.kt)("p",null,"You have to manually send transactions to the OverProtocol's deposit contract, in order to register the validator key.\nAs with other transactions, the transaction is sent from an account in the execution layer.\nThe execution layer's account needs 256 OVER per validator account it tries to enroll."),(0,n.kt)("p",null,"Then you should run the following-styled code in your machine to sender deposit transactions the with the validator keys generated in step 2.\nThe deposit contract's address is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"0x000000000000000000000000000000000beac017")," and the deposit contract ABI is set as the following link: ",(0,n.kt)("a",{target:"_blank",href:a(458).Z},"DepositContract.abi.json"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'const { ethers } = require("ethers"); // ethers.js v5\n\nconst provider = new ethers.providers.JsonRpcProvider(\n  "http://127.0.0.1:22000"\n); // RPC port of Kairos\n\nconst depositContractAddress = \'0x000000000000000000000000000000000beac017\';\nconst depositContractABI = require(\'./DepositContract.abi.json\');\n\n// Replace these with your own values\nasync function stake(privateKey) {\n  const wallet = new ethers.Wallet(privateKey, provider);\n\n  const stakingContract = new ethers.Contract(\n    depositContractAddress,\n    depositContractABI,\n    wallet\n  );\n\n  const amount = ethers.utils.parseEther("256");\n\n  let depositDatas;\n  depositDatas = require("./deposit_data.json"); // The validator key you\'ve generated from step 2.\n\n  for (let i = 0; i < depositDatas.length; i++) {\n    const tx = await stakingContract.deposit(\n      "0x" + depositDatas[i].pubkey,\n      "0x" + depositDatas[i].withdrawal_credentials,\n      "0x" + depositDatas[i].signature,\n      "0x" + depositDatas[i].deposit_data_root,\n      {\n        value: amount,\n        gasLimit: 2000000,\n      }\n    );\n\n    try {\n      const receipt = await tx.wait();\n      console.log(`Transaction ${i + 1}:`);\n      console.log(`Transaction Hash: ${receipt.transactionHash}`); // Search by transaction hash at OverView\n    } catch (error) {\n      console.error(`Error in transaction ${i + 1}: ${error.message}`);\n    }\n  }\n}\n\nstake(YOUR_PRIVATE_KEY_WITH_0x_PREFIX)\n')),(0,n.kt)("p",null,"If you've succeeded in registering your validator to the blockchain, you should now run your validator software.\nFollow steps 4 and 5.")),(0,n.kt)(E,{value:"migration",mdxType:"TabItem"},(0,n.kt)("h2",{id:"option-2-migrating-your-validators-from-overnode"},"Option 2. Migrating your validators from OverNode"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This section is designed for users who are looking to migrate their existing validator setup from OverNode. If you are setting up a validator from scratch, please see the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"From scratch"))," tab for detailed instructions.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"1-save-your-validator-mnemonic"},"1. Save your validator mnemonic"),(0,n.kt)("p",null,"If you have previously set up validators through OverNode, you should already have a validator mnemonic (12 words). If you did not back up your mnemonic, OverNode allows you to retrieve it by entering your password."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Go to Settings > Node data"),": Here, you will find the option ",(0,n.kt)("inlineCode",{parentName:"li"},"Reveal validator recovery phrase"),". Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Reveal phrase")," button."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Enter your password, and backup your validator phrase"),": A password is required to encrypt your validator keystore for security.")),(0,n.kt)("h3",{id:"2-generate-keystore-files"},"2. Generate keystore files"),(0,n.kt)("p",null,"The OverProtocol ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/overprotocol/staking-deposit-cli"},"staking-deposit-cli")," supports generating validator keys from an existing mnemonic. Follow the instructions in the repository's ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md")," to run the CLI."),(0,n.kt)("p",null,"Execute the command as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./deposit existing-mnemonic\n")),(0,n.kt)("p",null,"Follow the CLI prompts. Typically, the starting index will be ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),", as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"Please choose your language ['1. \u0627\u0644\u0639\u0631\u0628\u064a\u0629', '2. \u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac', '3. English', '4. Fran\xe7ais', '5. Bahasa melayu', '6. Italiano', '7. \u65e5\u672c\u8a9e', '8. \ud55c\uad6d\uc5b4', '9. Portugu\xeas do Brasil', '10. rom\xe2n', '11. T\xfcrk\xe7e', '12. \u7b80\u4f53\u4e2d\u6587']:  [English]:\nPlease enter your mnemonic separated by spaces (\" \"). Note: you only need to enter the first 4 letters of each word if you'd prefer.: <YOUR_VALIDATOR_MNEMONIC>\nEnter the index (key number) you wish to start generating more keys from. For example, if you've generated 4 keys in the past, you'd enter 4 here. [0]: 0\nPlease repeat the index to confirm: 0\nPlease choose how many new validators you wish to run: 1\nPlease choose the (mainnet or testnet) network/chain name ['mainnet', 'over', 'over_dolphin']:  [over]: over_dolphin\nCreate a password that secures your validator keystore(s). You will need to re-enter this to decrypt them when you setup your Ethereum validators.:\nRepeat your keystore password for confirmation:\nCreating your keys.\nCreating your keystores:      [####################################]  1/1\nVerifying your keystores:     [####################################]  1/1\n\nSuccess!\nYour keys can be found at: <path/to/your/validator/keys>\n")),(0,n.kt)("h3",{id:"3-check-your-validators"},"3. Check your validators"),(0,n.kt)("p",null,"To ensure the correct validator keys are imported, it is highly recommended to verify whether your validators are currently active on OverProtocol. Common issues include entering an incorrect mnemonic, starting index, or selecting a different chain name."),(0,n.kt)("p",null,"Verify your validators by querying Chronos. The ",(0,n.kt)("inlineCode",{parentName:"p"},"deposit_data-*.json")," file contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"pubkey")," field, which serves as a unique identifier for querying your validators."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X 'GET' \\\n  'http://127.0.0.1:3500/eth/v1/beacon/states/head/validators?id=<YOUR_PUBKEY_WITH_0x_PREFIX>' \\\n  -H 'accept: application/json'\n")),(0,n.kt)("p",null,"If your validator is active, the response will include the current state of your validator. If not, it will return an empty list."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "index": "20000",\n      "balance": "253802023102",\n      "status": "active_ongoing",\n      "validator": {\n        "pubkey": "0x8541054c41a9a36a5ae1717e321850f9c662d61b8430b12abda89030daa301d00b925a19363375f05e5b07d43f643717",\n        "withdrawal_credentials": "0x010000000000000000000000533bf49c40cb17a1c4eb479355e1a10942feb13f",\n        "effective_balance": "248000000000",\n        "slashed": false,\n        "activation_eligibility_epoch": "289",\n        "activation_epoch": "295",\n        "exit_epoch": "18446744073709551615",\n        "withdrawable_epoch": "18446744073709551615"\n      }\n    }\n  ],\n  "execution_optimistic": false,\n  "finalized": false\n}\n')))),(0,n.kt)("h2",{id:"run-your-validator"},"Run your validator"),(0,n.kt)("h3",{id:"transfer-validator-keys"},"Transfer Validator Keys"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"validator")," client to import the validator keys with the command similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ validator accounts import --keys-dir=<path/to/your/validator/keys> --dolphin --wallet-dir=<path/to/your/wallet/directory>\n")),(0,n.kt)("p",null,"If you successfully imported validator keys, the result will be:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"Importing accounts, this may take a while...\nImporting accounts... 100% [==========================================================]  [0s:0s]\n[2024-06-04 15:41:33]  INFO local-keymanager: Successfully imported validator key(s) publicKeys=<YOUR_VALIDATOR_PUBKEYS>\n[2024-06-04 15:41:33]  INFO accounts: Imported accounts <YOUR_VALIDATOR_PUBKEYS>, view all of them by running `accounts list`\n")),(0,n.kt)("h3",{id:"run-your-validator-1"},"Run your Validator"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"validator")," client to run the validator on your node like following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"$ validator --wallet-dir=<path/to/your/wallet/directory> --dolphin --suggested-fee-recipient=<YOUR_WALLET_ADDRESS>\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--suggested-fee-recipient")," will allow you to earn block priority fees. If no ",(0,n.kt)("inlineCode",{parentName:"p"},"--suggested-fee-recipient")," is set neither on the validator client nor on the beacon node, the corresponding fees will be sent to the burn address, and forever lost."),(0,n.kt)("h2",{id:"more-on-validator-activation"},"More on Validator Activation"),(0,n.kt)("h3",{id:"activation-queue"},"Activation Queue"),(0,n.kt)("p",null,"Once your Execution Layer and Consensus Layer are synchronized and your deposit transaction successfully executed, your validator will enter the activation queue. This is a necessary step before becoming an active validator. Due to network protocols, the activation process can take 24 hours or more, depending on the queue. The system allows for only 900 new validators to join per day to maintain network stability and manage the rate of growth."),(0,n.kt)("h3",{id:"activated"},"Activated"),(0,n.kt)("p",null,"Upon activation, your validator will begin participating in the creation and validation of blocks. This active involvement in the network functions allows your validator to start earning staking rewards. These rewards are compensation for your contributions to network security and operability, incentivizing ongoing participation and support of the network's integrity."),(0,n.kt)("h2",{id:"withdrawal-process-quitting-the-validator-status"},"Withdrawal Process (Quitting the validator status)"),(0,n.kt)("h3",{id:"initiating-a-voluntary-exit"},"Initiating a Voluntary Exit"),(0,n.kt)("p",null,'For users who decide to cease staking and wish to withdraw their entire balance, a "voluntary exit" process must be initiated. This involves signing and broadcasting a voluntary exit message using your validator keys. The process is facilitated by your validator client and must be submitted to your beacon node. Importantly, this action does not require any gas fees, as it is a part of the consensus layer\'s functionality. You will have to rely on the following-like command:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"$ prysmctl validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000>\n")),(0,n.kt)("p",null,"Alternatively, you can use Bazel to initiate a voluntary exit from the source as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"$ bazel run //cmd/prysmctl -- validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000> \n")),(0,n.kt)("h3",{id:"exiting-process"},"Exiting Process"),(0,n.kt)("p",null,"The time it takes for a validator to exit from staking can vary significantly depending on the number of other validators undergoing the same process simultaneously. After this period, your validator will no longer be eligible for validator duties, including block creation and voting."),(0,n.kt)("h3",{id:"post-exit-status"},"Post-Exit Status"),(0,n.kt)("p",null,"Once the exit process is complete, the validator's account status changes in several key ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No Longer Active"),": The account will no longer perform any network duties as a validator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ineligibility for Rewards"),": The account ceases to earn staking rewards."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Removal of Stake"),': The staked OVER tokens are no longer considered "at stake."'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full Withdrawal"),": After some epochs, the staked OVER tokens will be withdrawn to the address set in the deposit data.")))}R.isMDXComponent=!0},458:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/DepositContract.abi-ab0d449547e0c66627d154559eb6b154.json"}}]);