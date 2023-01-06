"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[9465],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=i,y=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return t?a.createElement(y,o(o({ref:n},d),{},{components:t})):a.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const r={},o=void 0,s={unversionedId:"klaytn-overview/klaytn-design/scaling-solutions",id:"klaytn-overview/klaytn-design/scaling-solutions",title:"scaling-solutions",description:"Service Chain",source:"@site/docs/klaytn-overview/klaytn-design/scaling-solutions.md",sourceDirName:"klaytn-overview/klaytn-design",slug:"/klaytn-overview/klaytn-design/scaling-solutions",permalink:"/klaytn-docs/docs/klaytn-overview/klaytn-design/scaling-solutions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Klaytn native coin - KLAY",permalink:"/klaytn-docs/docs/klaytn-overview/klaytn-design/klaytn-native-coin-klay"},next:{title:"Token Economy",permalink:"/klaytn-docs/docs/klaytn-overview/klaytn-design/token-economy"}},c={},l=[{value:"Service Chain",id:"service-chain",level:2},{value:'Network <a id="network"></a>',id:"network-",level:2},{value:'Features <a id="features"></a>',id:"features-",level:2},{value:'Data Anchoring <a id="data-anchoring"></a>',id:"data-anchoring-",level:3},{value:'Value Transfer <a id="value-transfer"></a>',id:"value-transfer-",level:3}],d={toc:l};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"service-chain"},"Service Chain"),(0,i.kt)("p",null,"Service chains in Klaytn are auxiliary blockchains independent from the Klaytn main chain,\ntailored for individual dApp requiring special node configurations, customized security levels,\nor exceptionally high throughput that makes deploying the dApp on the main chain inconvenient or economically infeasible."),(0,i.kt)("p",null,"While there are fully-decentralized scaling solutions, due to their difficult interfaces such as challenge or exit and non-immediate finality,\nwe take a different approach in Klaytn\u2019s Service Chain by sacrificing the full decentralization for better usability,\ninstant finality, high performance, and high availability."),(0,i.kt)("p",null,"Klaytn service chains may be used for various service-specific goals,\nand can connect to the main chain for multiple reasons including data anchoring (periodic storing of block hashes\nfrom the service chain onto the main chain to compensate for the decreased security of the service chain due to the smaller number of nodes) or\nvalue transfer (interchain transfer of KLAY, Klaytn\u2019s native unit of value, and the tokens\nissued by dApps)."),(0,i.kt)("h2",{id:"network-"},"Network ",(0,i.kt)("a",{id:"network"})),(0,i.kt)("p",null,"Service chains connected to Klaytn main chain are collectively called Service Chain Network.\nNote that the method of connection between service chains and the main chain may change in Klaytn\u2019s future iterations."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 1. Klaytn Main Chain and Service Chain",src:t(3028).Z,width:"1875",height:"1250"})),(0,i.kt)("p",null,"Figure 1 shows the network topology of service chains being used to meet various business needs, connected\nwith Klaytn main chain to expand the Klaytn network."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 2. Main Chain and Service Chain Connection using Main/Sub-Bridge Model",src:t(9460).Z,width:"1875",height:"825"})),(0,i.kt)("p",null,"Figure 2 shows an example of SCN (Service Chain Consensus Node) connected directly with Klaytn main chain\u2019s EN (Endpoint Node)\nusing a main/sub-bridge model in using the service chain\u2019s features."),(0,i.kt)("h2",{id:"features-"},"Features ",(0,i.kt)("a",{id:"features"})),(0,i.kt)("p",null,"Service Chain expands and augments Klaytn by providing a data integrity mechanism and supporting token transfers between different chains."),(0,i.kt)("h3",{id:"data-anchoring-"},"Data Anchoring ",(0,i.kt)("a",{id:"data-anchoring"})),(0,i.kt)("p",null,"For data integrity, Service Chain can automatically anchor every service chain block hash as a special transaction to the main chain.\nThis data anchoring can ensure to the service users that the data in the service chain cannot be altered once it is created."),(0,i.kt)("h3",{id:"value-transfer-"},"Value Transfer ",(0,i.kt)("a",{id:"value-transfer"})),(0,i.kt)("p",null,"To help the service providers (SPs) to easily migrate service users and values across chains,\ntransferring tokens, such as KLAY (Klaytn's native unit of value) and Klaytn tokens issued by dApps, between different chains can be enabled.\nUsers can easily request to transfer tokens to other chains by sending a transaction to a special contract, called bridge contract."))}u.isMDXComponent=!0},3028:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/mainchain_servicechain-958cc28278286f98a39de8319792818a.png"},9460:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/sc_connection-4cebe2105c040879968b8dfdf8d269ef.png"}}]);