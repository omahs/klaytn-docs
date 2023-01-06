"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,k=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="Klaytn Overview",l={unversionedId:"klaytn-overview/README",id:"klaytn-overview/README",title:"Klaytn Overview",description:"Klaytn is a highly optimized, BFT-based public blockchain that aims to meet the enterprise-grade reliability.",source:"@site/docs/klaytn-overview/README.md",sourceDirName:"klaytn-overview",slug:"/klaytn-overview/",permalink:"/klaytn-docs/docs/klaytn-overview/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Klaytn Docs",permalink:"/klaytn-docs/docs/intro"},next:{title:"Why Klaytn",permalink:"/klaytn-docs/docs/klaytn-overview/why-klaytn"}},s={},c=[{value:"Klaytn: The Big Picture",id:"klaytn-the-big-picture",level:2},{value:"Core Cell Network (CCN)",id:"core-cell-network-ccn",level:3},{value:"Endpoint Node Network (ENN)",id:"endpoint-node-network-enn",level:3},{value:"Service Chain Network (SCN)",id:"service-chain-network-scn",level:3},{value:"Klaytn Network Topology",id:"klaytn-network-topology",level:2},{value:"Role-based Node Types",id:"role-based-node-types",level:3},{value:"Core Cell (CC): Consensus Node (CN) + Proxy Node (PN)",id:"core-cell-cc-consensus-node-cn--proxy-node-pn",level:4},{value:"Endpoint Node (EN)",id:"endpoint-node-en",level:4},{value:"Bootnode",id:"bootnode",level:4},{value:"Tiered Networks",id:"tiered-networks",level:3},{value:"Consensus Node Network (CNN)",id:"consensus-node-network-cnn",level:4},{value:"Proxy Node Network (PNN)",id:"proxy-node-network-pnn",level:4},{value:"Endpoint Node Network (ENN)",id:"endpoint-node-network-enn-1",level:4},{value:"Block Generation and Propagation",id:"block-generation-and-propagation",level:2},{value:"Block Generation Cycle",id:"block-generation-cycle",level:3},{value:"Proposer and Committee Selection",id:"proposer-and-committee-selection",level:4},{value:"Block Proposal and Validation",id:"block-proposal-and-validation",level:4},{value:"Block Propagation",id:"block-propagation",level:3},{value:"Public Disclosure and Open Validation",id:"public-disclosure-and-open-validation",level:2},{value:"Separated Propagation Channels for Blocks and Transactions (Multichannel Propagation)",id:"separated-propagation-channels-for-blocks-and-transactions-multichannel-propagation",level:2},{value:"Block Rewards",id:"block-rewards",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"klaytn-overview"},"Klaytn Overview"),(0,a.kt)("p",null,"Klaytn is a highly optimized, BFT-based public blockchain that aims to meet the enterprise-grade reliability.\nKey design goals are;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Immediate finality."),(0,a.kt)("li",{parentName:"ul"},"High TPS that meets real-world use cases."),(0,a.kt)("li",{parentName:"ul"},"Lower the cost of running Blockchain Applications."),(0,a.kt)("li",{parentName:"ul"},"Lower the barriers to entry for end-users."),(0,a.kt)("li",{parentName:"ul"},"Ease the technology adoption process for industry.")),(0,a.kt)("p",null,"Klaytn launched its mainnet, ",(0,a.kt)("a",{parentName:"p",href:"https://scope.klaytn.com/"},"Cypress"),", on Jun/27/2019 with the following specifications."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1-second block generation and confirmation time."),(0,a.kt)("li",{parentName:"ul"},"4,000 transactions per second."),(0,a.kt)("li",{parentName:"ul"},"Low gas price that is almost 1/10 of Ethereum."),(0,a.kt)("li",{parentName:"ul"},"Runs EVM (Ethereum Virtual Machine) and supports the execution of Solidity contracts.  "),(0,a.kt)("li",{parentName:"ul"},"19 reputable corporations worldwide initially formed Klaytn Governance Council to operate consensus nodes. The current number of consensus nodes is shown in the ",(0,a.kt)("a",{parentName:"li",href:"https://scope.klaytn.com/"},"Klaytnscope"),"."),(0,a.kt)("li",{parentName:"ul"},"More than 50 initial service partners have committed to launch Blockchain Applications on Klaytn.")),(0,a.kt)("h2",{id:"klaytn-the-big-picture"},"Klaytn: The Big Picture"),(0,a.kt)("p",null,"Klaytn can be partitioned into three logical subnetworks based on their roles and purposes. The below figure displays the high-level view of the Klaytn ecosystem."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Klaytn Ecosystem and its Logical Subnetworks (CCN, ENN, SCN)",src:n(5196).Z,width:"1500",height:"820"})),(0,a.kt)("h3",{id:"core-cell-network-ccn"},"Core Cell Network (CCN)"),(0,a.kt)("p",null,"CCN consists of Core Cells (CCs) that verify and execute transactions submitted through Endpoint Nodes (ENs).\nCCN is responsible for creating and propagating blocks throughout the network."),(0,a.kt)("h3",{id:"endpoint-node-network-enn"},"Endpoint Node Network (ENN)"),(0,a.kt)("p",null,"ENN consists of Endpoint Nodes (ENs) that mainly create transactions, handle RPC API requests, and process data requests from service chains."),(0,a.kt)("h3",{id:"service-chain-network-scn"},"Service Chain Network (SCN)"),(0,a.kt)("p",null,"SCNs are Klaytn subnetworks composed of auxiliary blockchains independently operated by dApps (Decentralized Applications). Service chains are connected to the main chain via ENs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Core Cell Network")," and ",(0,a.kt)("strong",{parentName:"p"},"Endpoint Node Network")," form a Klaytn main chain or mainnet.\nBlockchain Applications can run on the Klaytn main chain, Cypress, or can operate on their own blockchains called ",(0,a.kt)("strong",{parentName:"p"},"Service Chains"),". If you want to have a dedicated execution environment for your application that guarantees high TPS and configurable network policies, we recommend using Service Chain. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To set up a Service Chain for your application, read the ",(0,a.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/intro"},"TEMP - installation and operation guide of Service Chain"),".")),(0,a.kt)("h2",{id:"klaytn-network-topology"},"Klaytn Network Topology"),(0,a.kt)("p",null,"In this section, we will describe the network topology of Klaytn main chain.\nA tiered network architecture with role-based node types is implemented in Klaytn to optimize the network performance."),(0,a.kt)("h3",{id:"role-based-node-types"},"Role-based Node Types"),(0,a.kt)("p",null,"Before we go over the Klaytn main chain network topology,\nwe need to get familiar with the different types of Klaytn nodes."),(0,a.kt)("h4",{id:"core-cell-cc-consensus-node-cn--proxy-node-pn"},"Core Cell (CC): Consensus Node (CN) + Proxy Node (PN)"),(0,a.kt)("p",null,"A Core Cell (CC) is composed of a single ",(0,a.kt)("strong",{parentName:"p"},"Consensus Node (CN)")," and two ",(0,a.kt)("strong",{parentName:"p"},"Proxy Nodes (PNs)"),".\nConsensus Nodes are participating in the block generation process, while Proxy Nodes provide the interface to the network. PNs transmit the transaction requests to the Consensus Nodes, and propagate the blocks down to the Endpoint Nodes. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you are interested in being a Core Cell Operator, read the ",(0,a.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/intro"},"TEMP - installation and operation guide of Core Cell"),".")),(0,a.kt)("h4",{id:"endpoint-node-en"},"Endpoint Node (EN)"),(0,a.kt)("p",null,"ENs serve as endpoints for Klaytn\nnetwork handling RPC API requests and processing data sent to and from service\nchains. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To set up an Endpoint Node for your application, read the ",(0,a.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/intro"},"TEMP - installation and operation guide of Endpoint Node"),".")),(0,a.kt)("h4",{id:"bootnode"},"Bootnode"),(0,a.kt)("p",null,"Bootnodes are special-type nodes operated by Klaytn to help newly joining nodes\nregister to the network and to discover other nodes to connect with.\nCN bootnodes reside within the CNN and are not exposed to the public, while PN\nand EN bootnodes are publicly visible.  PN bootnodes only allow permitted PNs to\nbe registered, and let eligible PNs connect with ENs.  EN bootnodes provide ENs\nwith information on which PNs to connect to. "),(0,a.kt)("h3",{id:"tiered-networks"},"Tiered Networks"),(0,a.kt)("p",null,"CNs, PNs, and ENs form logical networks, Consensus Node Network (CNN), Proxy Node Network (PNN), and Endpoint Node Network (ENN), respectively."),(0,a.kt)("p",null,"Below figure shows the overall topology of Klaytn mainnet, where Core Cell Network\n(CCN) is further broken down into Consensus Node Network (CNN) and Proxy Node Network (PNN).\nEndpoint Node Network (ENN) is also shown as the surrounding network connected directly to PNN."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Klaytn Main Chain Physical Topology and Tiered Architecture (CNN, PNN, and ENN)",src:n(8965).Z,width:"1500",height:"1100"})),(0,a.kt)("h4",{id:"consensus-node-network-cnn"},"Consensus Node Network (CNN)"),(0,a.kt)("p",null,"CNs form a full-mesh network among themselves called CNN. CNN applies BFT over\na WAN (wide area network) and requires each CN to satisfy ",(0,a.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/intro"},"TEMP - stringent hardware and network resource requirements")," to carry out BFT consensus at a sufficient performance level. "),(0,a.kt)("h4",{id:"proxy-node-network-pnn"},"Proxy Node Network (PNN)"),(0,a.kt)("p",null,"PNN consists of PNs.\nTypically, PNs maintain just one connection with a PN in a neighboring Core Cell.\nThe number of peer connections is subject to change depending on the network configuration."),(0,a.kt)("h4",{id:"endpoint-node-network-enn-1"},"Endpoint Node Network (ENN)"),(0,a.kt)("p",null,"The outermost subnetwork, ENN, is solely composed of ENs connected\nto each other and also to a number of PNs."),(0,a.kt)("h2",{id:"block-generation-and-propagation"},"Block Generation and Propagation"),(0,a.kt)("p",null,"Block generation and propagation design, along with the consensus\nalgorithm used, plays an important role in reducing the latency of a\nblockchain platform."),(0,a.kt)("h3",{id:"block-generation-cycle"},"Block Generation Cycle"),(0,a.kt)("p",null,"A 'round' is a block generation cycle in Klaytn. Each round generates a new\nblock, and is immediately followed by the start of a new round. Klaytn targets\neach round to be approximately one second, although block generation interval\nmay be influenced by network traffic and node operation conditions."),(0,a.kt)("h4",{id:"proposer-and-committee-selection"},"Proposer and Committee Selection"),(0,a.kt)("p",null,"In each round, Klaytn randomly but deterministically selects a Consensus Node\n(CN) as the proposer for the block to be created, and then selects a group of\nCNs as the committee for the given round. Klaytn is not directly involved in\nthe selection of either the proposer or committee; instead, each CN uses a\nrandom number derived from the most recent block header to run a cryptographic\noperation which yields proof that the CN has (or has not) been selected for\nthis round. The committee size should be Byzantine resistant; if the size of\nthe CNN is small, all CNs (except the proposer) are eligible to be selected as\ncommittee members."),(0,a.kt)("h4",{id:"block-proposal-and-validation"},"Block Proposal and Validation"),(0,a.kt)("p",null,"Once selected, the proposer broadcasts its proof of selection for the round\n(i.e., a cryptographic proof verifiable by the public key of the proposer) to\nall CNs. Thereafter, the CNs selected as committee for the given round responds\nto the proposer with their own proofs of selection, notifying the proposer to\nwhom to broadcast the new block to be proposed. The proposer then selects a set\nof transactions from its transaction pool and creates a block by ordering them.\nLastly, the proposer executes consensus with the committee to agree upon and\nfinalize the newly created block. Note that Klaytn plans to continuously\nimprove its consensus algorithm to achieve higher security and efficiency."),(0,a.kt)("h3",{id:"block-propagation"},"Block Propagation"),(0,a.kt)("p",null,"A proposed block must receive signatures from more than two-thirds of the\ncommittee members to be successfully finalized. When the committee reaches\nconsensus, the new block is propagated to all CNs and the consensus round ends.\nOnce the new block is propagated to all CNs, the information of the newly\ncreated block can be made available to all Klaytn network participants by\ndelivering block header and body data to ENN through PNN."),(0,a.kt)("h2",{id:"public-disclosure-and-open-validation"},"Public Disclosure and Open Validation"),(0,a.kt)("p",null,"Service providers and end-users on Klaytn network can freely validate block\ngeneration results and check if the CN committee have generated the block\naccording to proper procedures. Such validation includes checking if the block\nheader contains more than two-thirds of the committee signatures. All CNs must\nsupport open validation and are required to post their public keys (used to\nsign blocks) in a publicly accessible space (e.g., block headers). Open\nvalidation promotes transparency, deter censorship, and prevent malicious\nbehaviors."),(0,a.kt)("h2",{id:"separated-propagation-channels-for-blocks-and-transactions-multichannel-propagation"},"Separated Propagation Channels for Blocks and Transactions (Multichannel Propagation)"),(0,a.kt)("p",null,"A network's latency is heavily affected by its degree of congestion. Assuming\nthe network's throughput remains constant, increased number of transactions\nwill cause the network's latency to be proportionately delayed. Latency delay\nis a critical issue in dApps;\ntypical users of legacy mobile apps or web services will not tolerate response\ntime that takes more than a few seconds, and blockchain services have no reason\nto assume a higher user tolerance."),(0,a.kt)("p",null,"Klaytn adopts a multichannel approach in order to handle network congestion\nissues. By assigning separate propagation channels for transactions and blocks,\nKlaytn network is able to propagate newly created blocks in a timely manner\neven when the network faces heavy congestion with high number of transactions.\nIn this way, Klaytn ensures that dApps on its network can stay responsive to\nend-user requests regardless of intermittent network traffic spikes."),(0,a.kt)("h2",{id:"block-rewards"},"Block Rewards"),(0,a.kt)("p",null,"For each round, block reward (which is the sum of 9.6 newly minted KLAY and\ntransaction fees paid to process the block) will be distributed to\nthe network participants according to preset distribution ratios. The proposer\nof the newly created block will receive 100% of the reward to be awarded to\nCNs, whereas the committee will receive none. Note that the probability of\nbeing selected as the proposer is influenced by the amount of KLAY staked by\nthe CN, implying that a CN with more KLAY invested in the platform will\nprobabilistically receive more rewards. Details of block reward distribution\ncan be found in the ",(0,a.kt)("a",{parentName:"p",href:"/klaytn-docs/docs/intro"},"TEMP - Klaytn Token Economy")," section."))}p.isMDXComponent=!0},8965:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/klaytn_network_node-a1c56e9912c6e742778e91d3487f4906.png"},5196:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/klaytn_network_overview-05b2b79ad336095eed1615e3117a1b6b.png"}}]);