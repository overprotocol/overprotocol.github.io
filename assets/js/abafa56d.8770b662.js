"use strict";(self.webpackChunkover_docs=self.webpackChunkover_docs||[]).push([[558],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var o=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},d=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},v=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(a),v=r,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||i;return a?o.createElement(f,n(n({ref:e},d),{},{components:a})):o.createElement(f,n({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,n=new Array(i);n[0]=v;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,n[1]=l;for(var c=2;c<i;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}v.displayName="MDXCreateElement"},4106:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const i={title:"FAQs",description:"Frequently asked questions about operating full nodes and validators of OverProtocol.",lang:"en"},n=void 0,l={unversionedId:"operators/faqs",id:"operators/faqs",title:"FAQs",description:"Frequently asked questions about operating full nodes and validators of OverProtocol.",source:"@site/docs/operators/faqs.md",sourceDirName:"operators",slug:"/operators/faqs",permalink:"/operators/faqs",draft:!1,editUrl:"https://github.com/overprotocol/overprotocol.github.io/edit/develop/docs/operators/faqs.md",tags:[],version:"current",frontMatter:{title:"FAQs",description:"Frequently asked questions about operating full nodes and validators of OverProtocol.",lang:"en"},sidebar:"operatorsSidebar",previous:{title:"Command Line Options",permalink:"/operators/CLI-options/chronos"}},s={},c=[{value:"1. What does a validator do?",id:"1-what-does-a-validator-do",level:3},{value:"2. What is block attestation, block proposal?",id:"2-what-is-block-attestation-block-proposal",level:3},{value:"3. How can i run a validator?",id:"3-how-can-i-run-a-validator",level:3},{value:"4. Validator activation takes a long time.",id:"4-validator-activation-takes-a-long-time",level:3},{value:"5. I forgot the validator recovery phrase.",id:"5-i-forgot-the-validator-recovery-phrase",level:3}],d={toc:c},p="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-what-does-a-validator-do"},"1. What does a validator do?"),(0,r.kt)("p",null,"OverProtocol utilizes Proof of Stake (PoS) to reach consensus on the blockchain. In this system, randomly selected validators propose, prove, and guarantee the validity of blocks."),(0,r.kt)("p",null,"Validators of OverProtocol contribute to the blockchain by participating in block validation, block creation, and synchronization proof, and receive rewards accordingly."),(0,r.kt)("h3",{id:"2-what-is-block-attestation-block-proposal"},"2. What is block attestation, block proposal?"),(0,r.kt)("p",null,"Block attestation and block proposal are roles that validators in OverProtocol must perform. All validators participate in block attestation, and a randomly selected group of validators participates in block proposal. Validators who participate in block proposal can get more rewards if they perform their roles well."),(0,r.kt)("h3",{id:"3-how-can-i-run-a-validator"},"3. How can i run a validator?"),(0,r.kt)("p",null,"If your are a OverNode user, you can start the validator application in the Validator menu. Follow the instructions on the screen to register as a validator. If you are choosing to run the client software yourself, refer to ",(0,r.kt)("a",{parentName:"p",href:"./operate-validators"},"Operate Validators")," page."),(0,r.kt)("p",null,"You must stake 256 OVER(for testing) per validator, and you can apply for more validators depending on the OVER you have."),(0,r.kt)("p",null,"If you have completed the validator application through staking, it may take some time for the applied validator to be activated. The waiting time becomes longer as the number of validator applications from users increases."),(0,r.kt)("p",null,"Before validator activation, no separate rewards or penalties apply to validator operation. However, after the validator is activated, you must always keep the node running to receive rewards."),(0,r.kt)("h3",{id:"4-validator-activation-takes-a-long-time"},"4. Validator activation takes a long time."),(0,r.kt)("p",null,"When staking for validator operation, a waiting time is required until the staking transaction is processed and validator registration is completed. Validator activation waiting time can be divided into two stages: primary and secondary."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Primary waiting: It is used to calculate the ",(0,r.kt)("strong",{parentName:"p"},"time it takes for the validator to be activated")," for about the first 2 hours. It is estimated to take about 2 hours, but the exact waiting time cannot be determined.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secondary waiting: The exact waiting time until validator activation can be known and confirmed in the Validator menu. Once the validator is activated, you can participate in the network immediately."))),(0,r.kt)("p",null,"In OBT #2, after successfully sending the staking transaction, depending on the network status and the number of validator operation applications, a waiting time of at least 2 hours to up to 3 days may occur."),(0,r.kt)("p",null,"If multiple users apply for validator operation, the secondary waiting time may increase significantly. Therefore, during this time, it is recommended to leave OverNode running in the background and keep the computer on."),(0,r.kt)("p",null,"If the node was turned off due to the waiting time, please make sure to turn on the node and complete synchronization to the completion state before the validator activation time. If the node is still off at the time of validator activation, you will immediately receive penalties."),(0,r.kt)("h3",{id:"5-i-forgot-the-validator-recovery-phrase"},"5. I forgot the validator recovery phrase."),(0,r.kt)("p",null,"OverProtocol doesn't store any of user's passwords. If you forgot the validator Recovery phrase, you can't recover your access towards the active validator."))}u.isMDXComponent=!0}}]);