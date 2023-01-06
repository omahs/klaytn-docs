"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Token Economy",l={unversionedId:"klaytn-overview/klaytn-design/token-economy",id:"klaytn-overview/klaytn-design/token-economy",title:"Token Economy",description:"Overview",source:"@site/docs/klaytn-overview/klaytn-design/token-economy.md",sourceDirName:"klaytn-overview/klaytn-design",slug:"/klaytn-overview/klaytn-design/token-economy",permalink:"/klaytn-docs/docs/klaytn-overview/klaytn-design/token-economy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"scaling-solutions",permalink:"/klaytn-docs/docs/klaytn-overview/klaytn-design/scaling-solutions"},next:{title:"Klaytn 2.0",permalink:"/klaytn-docs/docs/klaytn-2.0/"}},s={},c=[{value:'Overview <a id="overview"></a>',id:"overview-",level:2},{value:'Funding Structure <a id="funding-structure"></a>',id:"funding-structure-",level:2},{value:'Klaytn Governance Council Reward <a id="klaytn-governance-council-reward"></a>',id:"klaytn-governance-council-reward-",level:2},{value:'Klaytn Governance Council Reward Mechanism <a id="klaytn-governance-council-reward-mechanism"></a>',id:"klaytn-governance-council-reward-mechanism-",level:3},{value:'Penalty for Misbehaving Council Members <a id="penalty-for-misbehaving-council-members"></a>',id:"penalty-for-misbehaving-council-members-",level:3},{value:'Klaytn Growth Fund <a id="klaytn-growth-fund"></a>',id:"klaytn-growth-fund-",level:2},{value:"Background",id:"background",level:3},{value:"General Concept",id:"general-concept",level:3},{value:'Klaytn Improvement Reserve <a id="klaytn-improvement-reserve"></a>',id:"klaytn-improvement-reserve-",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-economy"},"Token Economy"),(0,o.kt)("h2",{id:"overview-"},"Overview ",(0,o.kt)("a",{id:"overview"})),(0,o.kt)("p",null,"Klaytn\u2019s token economy is designed to create sustainable funding structures for empowering its ecosystem, growth initiatives, and strategic investments. Many public blockchain projects have monetary systems that solely incentivize their node operators ","(","miners or block producers",")",", focusing only on the technical aspect of network maintenance. However, such designs miss out on the importance of incentivizing other types of participants who contribute to the growth of the network\u2019s token economy or invest in long-term growth prospects. In contrast, Klaytn\u2019s token economy is designed to compensate more diverse forms of contributions from a wider range of participants, and has built-in funding structure to procure sustained resources to fuel future growth initiatives and strategically sourced investment projects in addition to maintaining its blockchain nodes."),(0,o.kt)("h2",{id:"funding-structure-"},"Funding Structure ",(0,o.kt)("a",{id:"funding-structure"})),(0,o.kt)("p",null,"Klaytn\u2019s funding structure runs continuously with Klaytn network\u2019s block generation. With every new block, newly issued KLAY and the sum of transaction fees used in the block ","(","collectively called \u201cblock reward\u201d",")"," are aggregated and distributed to the following three destination accounts in accordance to the predetermined ratio:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Klaytn Governance Council Reward: 34%"),(0,o.kt)("li",{parentName:"ul"},"Klaytn Growth Fund ","(","KGF",")",": 54%"),(0,o.kt)("li",{parentName:"ul"},"Klaytn Improvement Reserve ","(","KIR",")",": 12%")),(0,o.kt)("p",null,"9.6 KLAY will be minted for every new block. This implies that approximately 300 million KLAY will be minted annually, which is equivalent to 3% annual inflation against the 10 billion KLAY issued at genesis ","(","the annual inflation rate is subject to change through the Klaytn Governance Process",")",". Transaction fee is charged per OPCODE and is metered according to the transaction fee table. For detailed information on the transaction fee table, please refer to ",(0,o.kt)("a",{parentName:"p",href:"transaction-fees/transaction-fees.md"},"Transaction Fees"),"."),(0,o.kt)("h2",{id:"klaytn-governance-council-reward-"},"Klaytn Governance Council Reward ",(0,o.kt)("a",{id:"klaytn-governance-council-reward"})),(0,o.kt)("p",null,"Klaytn Governance Council is the collective group of Core Cell Operators ","(","CCOs",")",". Council members are responsible for maintaining Core Cells ","(","CCs",")",", which makes the Council an essential body in the Klaytn ecosystem responsible for providing the underlying infrastructure. To become a Council member, the candidate must undergo a qualification review by the Klaytn Governance Process and must stake at least 5 million KLAY. The Klaytn Governance Council Reward is a structure for incentivizing Council members to continue to provide a stable foundation for the Klaytn ecosystem."),(0,o.kt)("h3",{id:"klaytn-governance-council-reward-mechanism-"},"Klaytn Governance Council Reward Mechanism ",(0,o.kt)("a",{id:"klaytn-governance-council-reward-mechanism"})),(0,o.kt)("p",null,"For every block, a Committee composed of randomly selected Council members is formed. Each Committee has one member assigned the role of Proposer; all other Committee members assume the role of Validators. When a block is successfully created and added to the Klaytn blockchain, the Proposer of the said block is rewarded with 100% of the block reward. The probability of a Council member being selected a Proposer is proportional to the amount of KLAY staked by the member; that is, the more KLAY a member stakes, the more likely that the member will be selected as a Proposer and potentially claim the block reward."),(0,o.kt)("p",null,"As long as the minimum 5 million KLAY staking requirement is met, Klaytn Governance Council members can freely stake or unstake his or her own KLAY. Staking information is updated every 86,400 blocks, and newly staked KLAY comes info effect two update cycles later from when the staking is completed. Withdrawing staked KLAY requires one week of delay to prevent malicious members from immediately exiting."),(0,o.kt)("p",null,"To prevent monopolized claiming of Klaytn Governance Council Reward by small groups of highly invested Council members, Gini coefficient may be used to adjust the effective amount of staked KLAY. The application formula is as follows, where G stands for gini coefficient of Governance Council's KLAY staking distribution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Adjusted staking amount = ","(","Council member's staking amount",")","^","(","1/1+G",")"))),(0,o.kt)("h3",{id:"penalty-for-misbehaving-council-members-"},"Penalty for Misbehaving Council Members ",(0,o.kt)("a",{id:"penalty-for-misbehaving-council-members"})),(0,o.kt)("p",null,"A Council member may be subject to penalties for conducting misbehaviors defined below. In the future, more penalty rules can be established and refined through the Klaytn Governance Process."),(0,o.kt)("p",null,"Causing Safety Failure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Council member selected as Proposer may not create more than one block in the same height"),(0,o.kt)("li",{parentName:"ul"},"A Council member selected as Proposer may not intentionally omit certain transactions")),(0,o.kt)("p",null,"Causing Liveness Failure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Council member selected as Proposer must create a valid block"),(0,o.kt)("li",{parentName:"ul"},"A Council member selected as Validator must validate the block proposed by the Proposer")),(0,o.kt)("h2",{id:"klaytn-growth-fund-"},"Klaytn Growth Fund ",(0,o.kt)("a",{id:"klaytn-growth-fund"})),(0,o.kt)("h3",{id:"background"},"Background"),(0,o.kt)("p",null,"Klaytn's token economy operates and develops through the activities of Klaytn's economic entities. The growth of the economy will help improve the stability of the platform and help the ecosystem last. Therefore, Klaytn has an incentive system that fosters the economic entities' activities in order to help maintain and strengthen the economic growth of Klaytn."),(0,o.kt)("h3",{id:"general-concept"},"General Concept"),(0,o.kt)("p",null,"The Klaytn Growth Fund (KGF) aims to bring Klaytn economy forward by providing grants and investing in various organizations and individuals that contribute to the Klaytn economy. Klaytn's technology provides enormous opportunities for people to store, transfer, and exchange data and value globally with ease and at minimal cost. And since it is an open network, anyone can join to build an application without obtaining any permissions. However, a wider adoption of blockchain has been hindered because the technology is still in its early phase, and most of the values and data are still being managed in traditional ways in the form of legal contracts, local storage, etc. And KGF is intended to solve these problems. KGF will support various programs for promoting the adoption of Klaytn across all industries, such as rewarding those who show proof-of-contribution on-chain and investing in early-stage dApps. It will be constantly financed through a certain percentage of block rewards (refer to ",(0,o.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/klaytn-overview/klaytn-design/token-economy#funding-structure"},"Funding Structure"),"). "),(0,o.kt)("h2",{id:"klaytn-improvement-reserve-"},"Klaytn Improvement Reserve ",(0,o.kt)("a",{id:"klaytn-improvement-reserve"})),(0,o.kt)("p",null,"As technology continues to improve and the needs of users change over time, our platform must have the ability to quickly adapt to any new circumstance that arises. To respond to such changes, we must not only work on services, but also undergo various activities to maintain Klaytn\u2019s ecosystem. For instance, research and development for better technology, or projects that contribute to the overall growth of the ecosystem may be part of these activities. These activities are necessary for Klaytn to progress continuously. Klaytn Improvement Reserve (KIR) will be deployed for activities that improve the Klaytn ecosystem such as:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Category"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Development")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"IDE & Editors"),(0,o.kt)("li",null,"Oracle"),(0,o.kt)("li",null,"Contract Library")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Infrastructure")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Local Testnet"),(0,o.kt)("li",null,"Decentralized File System"),(0,o.kt)("li",null,"Multi-VM")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Test, Debugging, Deployment")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Testing & Deployment Tools"),(0,o.kt)("li",null,"Security & Audit Tools")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Monitoring & Analytics")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Monitoring"),(0,o.kt)("li",null,"Analytics")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Education & Activity")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Documentation"),(0,o.kt)("li",null,"Educational Materials"),(0,o.kt)("li",null,"Community Building"),(0,o.kt)("li",null,"Open Source Activity(Including Bug Bounty)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Research")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Security, Scalability, Cryptography, etc.")))))),(0,o.kt)("p",null,"KIR proposals can be created by any participant in Klaytn\u2019s ecosystem. KIR spending proposals will be processed per KIR Governance Process. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/klaytn-overview/klaytn-design/governance#klaytn-improvement-reserve-review-process"},"Klaytn Improvement Reserve Review Process")," section for more information on the procedure. Once a spending proposal has passed, KLAY will be distributed periodically, from a predetermined total amount, based on the project\u2019s level of progress. This process may change based on the project size but is planned to be processed monthly."),(0,o.kt)("p",null,"For more information, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://kir.klaytn.com/"},"Klaytn Improvement Reserve Forum"),"."))}d.isMDXComponent=!0}}]);