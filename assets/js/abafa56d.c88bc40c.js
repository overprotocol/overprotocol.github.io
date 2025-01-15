"use strict";(self.webpackChunkover_docs=self.webpackChunkover_docs||[]).push([[558],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||n;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(7462),o=(a(7294),a(3905));const n={title:"OverProtocol Validator FAQs",description:"Frequently asked questions about operating full nodes and validators of OverProtocol.",lang:"en"},l=void 0,i={unversionedId:"operators/faqs",id:"operators/faqs",title:"OverProtocol Validator FAQs",description:"Frequently asked questions about operating full nodes and validators of OverProtocol.",source:"@site/docs/operators/faqs.md",sourceDirName:"operators",slug:"/operators/faqs",permalink:"/operators/faqs",draft:!1,editUrl:"https://github.com/overprotocol/overprotocol.github.io/edit/develop/docs/operators/faqs.md",tags:[],version:"current",frontMatter:{title:"OverProtocol Validator FAQs",description:"Frequently asked questions about operating full nodes and validators of OverProtocol.",lang:"en"},sidebar:"operatorsSidebar",previous:{title:"Secure gRPC connections",permalink:"/operators/advanced-guides/secure-grpc-connections"}},s={},d=[{value:"Welcome to the OverProtocol Validator FAQ! \ud83d\ude4c",id:"welcome-to-the-overprotocol-validator-faq-",level:3},{value:"1. What is the Role of a Validator?",id:"1-what-is-the-role-of-a-validator",level:3},{value:"2. How Do I Become a Validator?",id:"2-how-do-i-become-a-validator",level:3},{value:"3. How Are Rewards Earned?",id:"3-how-are-rewards-earned",level:3},{value:"4. What Hardware Do I Need for a Node?",id:"4-what-hardware-do-i-need-for-a-node",level:3},{value:"5. Does My Internet Connection Matter?",id:"5-does-my-internet-connection-matter",level:3},{value:"6. How Do I Monitor My Node?",id:"6-how-do-i-monitor-my-node",level:3},{value:"8. What Are Validator States?",id:"8-what-are-validator-states",level:3},{value:"9. Why is My Validator Inactive?",id:"9-why-is-my-validator-inactive",level:3},{value:"10. What Happens If My Node Goes Offline?",id:"10-what-happens-if-my-node-goes-offline",level:3},{value:"11. Can I Operate Validators on Multiple Devices?",id:"11-can-i-operate-validators-on-multiple-devices",level:3},{value:"12. Can I Add More OVER After Staking?",id:"12-can-i-add-more-over-after-staking",level:3},{value:"13. When Can I Withdraw My Rewards?",id:"13-when-can-i-withdraw-my-rewards",level:3},{value:"14. Can I Partially Withdraw Staked OVER?",id:"14-can-i-partially-withdraw-staked-over",level:3},{value:"15. How Do I Stop Validating and Withdraw My OVER?",id:"15-how-do-i-stop-validating-and-withdraw-my-over",level:3},{value:"Initiating a Voluntary Exit (Manually)",id:"initiating-a-voluntary-exit-manually",level:4},{value:"16. What Should I Know About Withdrawals?",id:"16-what-should-i-know-about-withdrawals",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"welcome-to-the-overprotocol-validator-faq-"},"Welcome to the OverProtocol Validator FAQ! \ud83d\ude4c"),(0,o.kt)("p",null,"Welcome! This FAQ is your go-to resource for understanding the ins and outs of operating validators on OverProtocol. Whether you\u2019re just getting started or managing multiple validators, we\u2019re here to guide you through every step with clarity and confidence."),(0,o.kt)("p",null,"Validators are critical to OverProtocol\u2019s security and decentralization, and we appreciate your dedication to the network. Let\u2019s dive into your most pressing questions!"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"1-what-is-the-role-of-a-validator"},"1. What is the Role of a Validator?"),(0,o.kt)("p",null,"Validators are the backbone of OverProtocol. Here\u2019s what they do:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validate Blocks"),": Ensure that new blocks and transactions meet the network\u2019s consensus rules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Propose Blocks"),": Occasionally create new blocks, playing a crucial role in the Proof of Stake (PoS) mechanism."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Earn Rewards"),": Gain rewards for honest participation, proportional to your stake.")),(0,o.kt)("h3",{id:"2-how-do-i-become-a-validator"},"2. How Do I Become a Validator?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stake a minimum of 256 OVER to register a validator."),(0,o.kt)("li",{parentName:"ul"},"Use the Staking menu in OverScape or manually register your validator keys."),(0,o.kt)("li",{parentName:"ul"},"Keep your validator online to participate in the consensus process and earn rewards.")),(0,o.kt)("p",null,"Refer to our ",(0,o.kt)("a",{parentName:"p",href:"./operate-validators"},"Validator Setup Guide")," for detailed instructions."),(0,o.kt)("h3",{id:"3-how-are-rewards-earned"},"3. How Are Rewards Earned?"),(0,o.kt)("p",null,"Rewards are earned for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Block Validation: Validating transactions and adding them to the blockchain."),(0,o.kt)("li",{parentName:"ul"},"Proposing Blocks: Proposing valid blocks as part of the consensus mechanism.")),(0,o.kt)("p",null,"Reward Frequency: Every 6 minutes (1 epoch). Rewards are sent automatically to the withdrawal address."),(0,o.kt)("h3",{id:"4-what-hardware-do-i-need-for-a-node"},"4. What Hardware Do I Need for a Node?"),(0,o.kt)("p",null,"Minimum Requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU: Dual-core processor."),(0,o.kt)("li",{parentName:"ul"},"Memory: 8GB RAM."),(0,o.kt)("li",{parentName:"ul"},"Storage: 50GB SSD.")),(0,o.kt)("p",null,"Recommended for Optimal Performance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-core or higher."),(0,o.kt)("li",{parentName:"ul"},"Memory: 16GB RAM or more."),(0,o.kt)("li",{parentName:"ul"},"Storage: 128GB SSD or more.")),(0,o.kt)("h3",{id:"5-does-my-internet-connection-matter"},"5. Does My Internet Connection Matter?"),(0,o.kt)("p",null,"Yes! A stable and reliable connection is crucial."),(0,o.kt)("p",null,"Minimum Speed: 8 Mbps download.\nRecommended Speed: 25 Mbps or higher for validators or high-load nodes."),(0,o.kt)("h3",{id:"6-how-do-i-monitor-my-node"},"6. How Do I Monitor My Node?"),(0,o.kt)("p",null,"Use OverScape to monitor your node\u2019s performance or access Chronos metrics directly via command-line tools. Keep an eye on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node synchronization status."),(0,o.kt)("li",{parentName:"ul"},"Peer connections."),(0,o.kt)("li",{parentName:"ul"},"Resource usage (CPU, memory, storage).")),(0,o.kt)("h3",{id:"8-what-are-validator-states"},"8. What Are Validator States?"),(0,o.kt)("p",null,"Validators in OverProtocol have the following states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pending: Waiting for activation after staking."),(0,o.kt)("li",{parentName:"ul"},"Active: Participating in consensus and earning rewards."),(0,o.kt)("li",{parentName:"ul"},"Exited: No longer participating."),(0,o.kt)("li",{parentName:"ul"},"Slashed: Penalized for misbehavior and removed from the network.")),(0,o.kt)("h3",{id:"9-why-is-my-validator-inactive"},"9. Why is My Validator Inactive?"),(0,o.kt)("p",null,"Inactive validators may result from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network Downtime: Ensure your node is online and synced."),(0,o.kt)("li",{parentName:"ul"},"Software Issues: Confirm you\u2019re using the latest version of OverScape or validator clients.")),(0,o.kt)("p",null,"If you have any troubles, ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/overprotocol"},"join a community channel")," and feel free to ask some helps!"),(0,o.kt)("h3",{id:"10-what-happens-if-my-node-goes-offline"},"10. What Happens If My Node Goes Offline?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validators will stop earning rewards during downtime."),(0,o.kt)("li",{parentName:"ul"},"Prolonged inactivity may lead to penalties and eventually force the validator to exit the network."),(0,o.kt)("li",{parentName:"ul"},"Use OverScape or monitoring tools to receive alerts and address issues promptly.")),(0,o.kt)("h3",{id:"11-can-i-operate-validators-on-multiple-devices"},"11. Can I Operate Validators on Multiple Devices?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DON'T DO THAT.")),(0,o.kt)("p",null,"Running the same validator on multiple devices can lead to slashing penalties. If you need to move a validator to a new device:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backup your recovery phrase."),(0,o.kt)("li",{parentName:"ul"},"Stop the validator on the old device."),(0,o.kt)("li",{parentName:"ul"},"Wait at least more thant 13 minutes before starting it on the new device.")),(0,o.kt)("h3",{id:"12-can-i-add-more-over-after-staking"},"12. Can I Add More OVER After Staking?"),(0,o.kt)("p",null,"Yes, you can add more OVER to an active validator."),(0,o.kt)("p",null,"Additional deposits must be a minimum of 32 OVER."),(0,o.kt)("h3",{id:"13-when-can-i-withdraw-my-rewards"},"13. When Can I Withdraw My Rewards?"),(0,o.kt)("p",null,"Validator rewards are processed automatically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accumulated rewards are sent to the withdrawal address every 1\u20135 days."),(0,o.kt)("li",{parentName:"ul"},"No manual claims are necessary.")),(0,o.kt)("h3",{id:"14-can-i-partially-withdraw-staked-over"},"14. Can I Partially Withdraw Staked OVER?"),(0,o.kt)("p",null,"Currently, validators must withdraw their full staked amount when stopping activity."),(0,o.kt)("p",null,"Partial withdrawals are not yet supported but will be available in a future update."),(0,o.kt)("h3",{id:"15-how-do-i-stop-validating-and-withdraw-my-over"},"15. How Do I Stop Validating and Withdraw My OVER?"),(0,o.kt)("h4",{id:"initiating-a-voluntary-exit-manually"},"Initiating a Voluntary Exit (Manually)"),(0,o.kt)("p",null,'For users who decide to cease staking and wish to withdraw their entire balance, a "voluntary exit" process must be initiated. This involves signing and broadcasting a voluntary exit message using your validator keys. The process is facilitated by your validator client and must be submitted to your beacon node. Importantly, this action does not require any gas fees, as it is a part of the consensus layer\'s functionality. You will have to rely on the following-like command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ prysmctl validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000>\n")),(0,o.kt)("p",null,"Alternatively, you can use Bazel to initiate a voluntary exit from the source as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ bazel run //cmd/prysmctl -- validator exit --wallet-dir=<path/to/your/wallet/directory> --beacon-rpc-provider=<127.0.0.1:4000> \n")),(0,o.kt)("h3",{id:"16-what-should-i-know-about-withdrawals"},"16. What Should I Know About Withdrawals?"),(0,o.kt)("p",null,"Withdrawals are only possible under the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"256 Epoch Rule: Validators can only request withdrawals after 256 epochs (~24 hours) of activation."),(0,o.kt)("li",{parentName:"ul"},"Full Withdrawals Only: Partial withdrawals are not yet supported.")))}p.isMDXComponent=!0}}]);