"use strict";(self.webpackChunkover_docs=self.webpackChunkover_docs||[]).push([[577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Over PoS Overview",description:"Over adopts Ethereum's Gasper PoS algorithm for further decentralization.",lang:"en"},s=void 0,i={unversionedId:"learn/key-features/over-pos/overview",id:"learn/key-features/over-pos/overview",title:"Over PoS Overview",description:"Over adopts Ethereum's Gasper PoS algorithm for further decentralization.",source:"@site/docs/learn/key-features/over-pos/overview.md",sourceDirName:"learn/key-features/over-pos",slug:"/learn/key-features/over-pos/overview",permalink:"/learn/key-features/over-pos/overview",draft:!1,editUrl:"https://github.com/overprotocol/overprotocol.github.io/edit/develop/docs/learn/key-features/over-pos/overview.md",tags:[],version:"current",frontMatter:{title:"Over PoS Overview",description:"Over adopts Ethereum's Gasper PoS algorithm for further decentralization.",lang:"en"},sidebar:"learnSidebar",previous:{title:"Ethanos",permalink:"/learn/key-features/layered-architecture/ethanos"},next:{title:"Requirements",permalink:"/learn/key-features/over-pos/requirements"}},l={},c=[{value:"Consensus is important",id:"consensus-is-important",level:2},{value:"Why PoS",id:"why-pos",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"consensus-is-important"},"Consensus is important"),(0,n.kt)("p",null,"In the world of blockchain, consensus algorithms are like the referees of a match, ensuring everyone's playing by the same rules. They keep every ledger in the network in sync, validating transactions, and maintaining a decentralized, tamper-proof system that instills trust among participants. There are various kinds of these algorithms, such as ",(0,n.kt)("strong",{parentName:"p"},"Proof-of-Work (PoW)")," which tasks miners with solving complicated math puzzles, and ",(0,n.kt)("strong",{parentName:"p"},"Proof-of-Stake (PoS)")," which selects validators based on their token holdings."),(0,n.kt)("p",null,"For OverProtocol, PoS sits at the heart of our operations. Participants prepare a substantial amount of OVER tokens from the market and put them up as collateral to create and validate blocks. If they perform their role successfully, they are rewarded with OVER. However, any malicious activity can lead to penalties - anything from suspension to a complete loss of staked OVER tokens. So, playing fair is not just encouraged, it's mandatory."),(0,n.kt)("h2",{id:"why-pos"},"Why PoS"),(0,n.kt)("p",null,"While there's a broad array of PoS algorithms available, we chose to align with Ethereum's ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/gasper/"},"Gasper")," for OverProtocol. Our mission is to build a blockchain that doesn't disproportionately favor a select few, and we wanted our choice of consensus algorithm to reflect that."),(0,n.kt)("p",null,"Many new blockchains are leaning towards a Delegated Proof of Stake (DPoS) format, where a small group of validators are seleceted (such as Cosmos BFT and Aptos etc). But this can cause performance issues if these validators don't meet high standards. They are expected to manage a robust node operation environment to ensure the speed and performance of the blockchain consensus, making it a tall order for the average person due to the need for advanced infrastructure and significant capital."),(0,n.kt)("p",null,"Contrastingly, Ethereum's Gasper allows for a larger pool of validators and is more accommodating to those with less sophisticated node operation environments. Aligned with Over's philosophy and vision for blockchain, we've adopted a slightly tweaked version of Gasper. This move ensures a more inclusive consensus process, making participation in the blockchain more accessible to everyone, regardless of their resources."),(0,n.kt)("p",null,"In reality, Ethereum's staking has shown a trend towards centralization, with close to 56\\% of the staked amount held by the ",(0,n.kt)("a",{parentName:"p",href:"https://blog.obol.tech/ethereum-staking-ecosystem-leading-to-the-shanghai-upgrade/"},"top four validators"),". This concentration goes against the core goal of decentralization, posing a significant roadblock. We believe the root cause lies in the high hardware requirements. Although the consensus protocol theoretically supports millions of validators, the practical requirements for running a node continue to be a formidable barrier."),(0,n.kt)("p",null,"OverProtocol aims to tackle this issue head-on by harnessing the power of lightweight client techniques. These techniques significantly trim down the resource requirements, making it possible for anyone with a basic PC to run a node and step into the role of a validator. By integrating these techniques with Gasper, Over brings the concept of home staking to life. Consequently, anyone can now contribute to the network's security and stability, regardless of their resources."))}h.isMDXComponent=!0}}]);