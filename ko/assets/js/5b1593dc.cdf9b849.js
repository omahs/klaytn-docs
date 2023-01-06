"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[3548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||k[d]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="\ud569\uc758 \uba54\ucee4\ub2c8\uc998",l={unversionedId:"klaytn-overview/klaytn-design/consensus-mechanism",id:"klaytn-overview/klaytn-design/consensus-mechanism",title:"\ud569\uc758 \uba54\ucee4\ub2c8\uc998",description:"\ud569\uc758 \uba54\ucee4\ub2c8\uc998(\uc54c\uace0\ub9ac\uc998)\uc740 \uc2e0\ub8b0\uac00 \uc5c6\ub294 \uc8fc\uccb4\ub4e4 \uac04 \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778 \uae30\uc220\uc5d0\uc11c\ub294 \ube14\ub85d\uc774 \uc720\ud6a8\ud55c\uc9c0 \uc544\ub2cc\uc9c0\uc5d0 \ub300\ud55c \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc758 \uc131\ub2a5\uc740 \uc120\ud0dd\ub41c \ud569\uc758 \uba54\ucee4\ub2c8\uc998\uc758 \uc131\ub2a5\uc5d0 \uc758\uc874\ud558\uba70, \ube14\ub85d\uccb4\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0ac\uc6a9\uc131\uc5d0 \uc0c1\ub2f9\ud55c \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/klaytn-overview/klaytn-design/consensus-mechanism.md",sourceDirName:"klaytn-overview/klaytn-design",slug:"/klaytn-overview/klaytn-design/consensus-mechanism",permalink:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/consensus-mechanism",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uacc4\uc815",permalink:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/accounts"},next:{title:"\uac70\ubc84\ub10c\uc2a4",permalink:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/governance"}},s={},c=[{value:'\ubc30\uacbd <a id="background"></a>',id:"\ubc30\uacbd-",level:2},{value:'PBFT (Practical Byzantine Fault Tolerance)  <a id="pbft-practical-byzantine-fault-tolerance"></a>',id:"pbft-practical-byzantine-fault-tolerance--",level:3},{value:'Klaytn\uc758 \ud569\uc758 \uba54\ucee4\ub2c8\uc998 <a id="consensus-mechanism-in-klaytn"></a>',id:"klaytn\uc758-\ud569\uc758-\uba54\ucee4\ub2c8\uc998-",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ud569\uc758-\uba54\ucee4\ub2c8\uc998"},"\ud569\uc758 \uba54\ucee4\ub2c8\uc998"),(0,r.kt)("p",null,"\ud569\uc758 \uba54\ucee4\ub2c8\uc998(\uc54c\uace0\ub9ac\uc998)\uc740 \uc2e0\ub8b0\uac00 \uc5c6\ub294 \uc8fc\uccb4\ub4e4 \uac04 \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778 \uae30\uc220\uc5d0\uc11c\ub294 \ube14\ub85d\uc774 \uc720\ud6a8\ud55c\uc9c0 \uc544\ub2cc\uc9c0\uc5d0 \ub300\ud55c \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc758 \uc131\ub2a5\uc740 \uc120\ud0dd\ub41c \ud569\uc758 \uba54\ucee4\ub2c8\uc998\uc758 \uc131\ub2a5\uc5d0 \uc758\uc874\ud558\uba70, \ube14\ub85d\uccb4\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0ac\uc6a9\uc131\uc5d0 \uc0c1\ub2f9\ud55c \uc601\ud5a5\uc744 \ubbf8\uce69\ub2c8\ub2e4."),(0,r.kt)("p",null,"Klaytn \uba54\uc778\ub137 Cypress\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd08\ub2f9 4,000 \uac74\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc989\uac01\uc801\uc778 \ud2b8\ub79c\uc7ad\uc158 \uc644\uacb0\uc131(finality)"),(0,r.kt)("li",{parentName:"ul"},"1\ucd08\uc758 \ube14\ub85d \uc0dd\uc131 \uc2dc\uac04"),(0,r.kt)("li",{parentName:"ul"},"50\uac1c\uac00 \ub118\ub294 \ucee8\uc13c\uc11c\uc2a4 \ub178\ub4dc\uac00 \ud569\uc758 \ud504\ub85c\uc138\uc2a4\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774 \ubb38\uc11c\uc5d0\uc11c \uc6b0\ub9ac\ub294 Klaytn\uc774 \uc5b4\ub5bb\uac8c \uace0\uc131\ub2a5 \ud569\uc758 \ud504\ub85c\uc138\uc2a4\ub97c \uad6c\ud604\ud588\ub294\uc9c0 \uc0b4\ud3b4\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubc30\uacbd-"},"\ubc30\uacbd ",(0,r.kt)("a",{id:"background"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bitcoin"},"Bitcoin")," is using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_work"},"PoW")," (Proof-of-Work), whereas Ethereum has recently shifted to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_stake"},"PoS")," (Proof-of-Stake), which decides on the block generating nodes by the stake of the node. Usually, these algorithms involve no communication between nodes in determining the validities of blocks."),(0,r.kt)("p",null,'\ub530\ub77c\uc11c \uc774\ub7ec\ud55c \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 \ud3ec\ud06c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uac19\uc740 \ub192\uc774\uc5d0\uc11c \ub458 \uc774\uc0c1\uc758 \uc11c\ub85c \ub2e4\ub978 \ube14\ub85d\uc774 \ub9cc\ub4e4\uc5b4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Usually, the "Longest chain wins" rule is applied to solve the fork condition. \ud3ec\ud06c\uac00 \uc77c\uc5b4\ub09c \uccb4\uc778\uc774 \uacb0\uad6d \ud558\ub098\uc758 \uccb4\uc778\uc73c\ub85c \ubcd1\ud569\ub418\uc9c0\ub9cc, \ud2b9\uc815 \uae30\uac04 \ub3d9\uc548\uc5d0 \uc9e7\uc740 \uccb4\uc778\uc5d0 \uc18d\ud55c \ube14\ub85d\ub4e4\uc740 \ub418\ub3cc\ub824\uc9c8 \uc218 \uc788\ub2e4\ub294 \uc758\ubbf8\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \uc774\ub7ec\ud55c \uc54c\uace0\ub9ac\uc998\uc5d0\uc11c\ub294 \ube14\ub85d \ubc0f \ud2b8\ub79c\uc7ad\uc158\uc758 \uc644\uacb0\uc131\uc744 \uc989\uc2dc \ubcf4\uc7a5 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. The finality can only be achieved probabilistically after a period of time, which is still can\'t be 100% guaranteed.'),(0,r.kt)("p",null,"This lack of finality is a very difficult issue in customer-facing services that use blockchain platforms. \ud3ec\ud06c\uac00 \ud574\uacb0\ub418\uace0, \ube14\ub85d\uc774 \ucda9\ubd84\ud788 \uc313\uc5ec\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uac8c \ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub824\uc57c \ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. This has a negative effect both on users and service providers."),(0,r.kt)("p",null,"A simple example of this issue can be demonstrated in financial services. Say a user transferred money to someone, and the service can't verify that the transfer is valid until 30 to 60 minutes have passed. Because it has to wait until the forks have been merged into a single chain and several blocks are stacked after the transfer to be sure that the transaction is not reversible."),(0,r.kt)("h3",{id:"pbft-practical-byzantine-fault-tolerance--"},"PBFT (Practical Byzantine Fault Tolerance)  ",(0,r.kt)("a",{id:"pbft-practical-byzantine-fault-tolerance"})),(0,r.kt)("p",null,'\uc704\uc758 \ubb38\uc81c\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc644\uacb0\uc131\uc744 \ubcf4\uc7a5\ud558\ub294 \ub2e4\ub978 \uc54c\uace0\ub9ac\uc998\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. BFT \uc54c\uace0\ub9ac\uc998\uc740 Lamport, Shostak, Pease\uc5d0 \uc758\ud574 1982\ub144\uc5d0 \ucc98\uc74c \ubc1c\ud45c\ub41c \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. 1999\ub144, Miguel Castro\uc640 Barbara Liskov\ub294 high-performance state machine replication\uc744 \uc81c\uacf5\ud558\ub294 "Practical Byzantine Fault Tolerance"(PBFT)\ub97c \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c PoW \uc54c\uace0\ub9ac\uc998\uc5d0\uc11c\ub294 \uac01 \ub178\ub4dc\uac00 \ube14\ub85d\uc744 \uc804\uc1a1\ubc1b\uace0 \uac80\uc99d\ud558\uc9c0\ub9cc, \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\uae30 \uc704\ud574 \ub178\ub4dc \uac04 \uba54\uc2dc\uc9c0\ub97c \uad50\ud658\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 PBFT\uc5d0\uc11c\ub294 \uac01 \ub178\ub4dc\uac00 \ub2e4\ub978 \ucc38\uc5ec \ub178\ub4dc\uc640 \ud1b5\uc2e0\ud558\uc5ec \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\uace0 \ub178\ub4dc\uac00 \ud569\uc758\uc5d0 \ub3c4\ub2ec\ud558\ub294 \uc989\uc2dc \ube14\ub85d\uc758 \uc644\uacb0\uc131\ub97c \ubcf4\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub178\ub4dc \uac04\uc758 \ud1b5\uc2e0\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc774 \uc9c4\ud589\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \uac01 \uc2dc\uc2a4\ud15c\uc5d0 \ub530\ub77c \ud2b9\uc131\uc744 \ubc18\uc601\ud558\ub294 \uba87 \uac00\uc9c0 \uc608\uc678\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PBFT message flow",src:n(7198).Z,width:"539",height:"233"})),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc774 PBFT\uc5d0 \ucc38\uc5ec\ud558\ub294 \ub178\ub4dc\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ub178\ub4dc\uc640 \uc5ec\ub7ec \ub2e8\uacc4\uc5d0\uc11c \ud1b5\uc2e0\ud569\ub2c8\ub2e4. \uc774 \ud2b9\uc131\uc740 \ub178\ub4dc \uc218\uac00 \uc99d\uac00\ud560\uc218\ub85d \ud1b5\uc2e0\ub7c9\uc774 \uae30\ud558\uae09\uc218\uc801\uc73c\ub85c \uc99d\uac00\ud558\ubbc0\ub85c \ub178\ub4dc \uc218\ub97c \uc81c\ud55c\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"klaytn\uc758-\ud569\uc758-\uba54\ucee4\ub2c8\uc998-"},"Klaytn\uc758 \ud569\uc758 \uba54\ucee4\ub2c8\uc998 ",(0,r.kt)("a",{id:"consensus-mechanism-in-klaytn"})),(0,r.kt)("p",null,"Klaytn\uc740 \uc5d4\ud130\ud504\ub77c\uc774\uc988\uae09 \uc11c\ube44\uc2a4 \uc911\uc2ec \ud50c\ub7ab\ud3fc\uc774 \ub418\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc704\uc5d0\uc11c \uc124\uba85\ud55c \uc644\uacb0\uc131 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc57c \ud558\uba70 \ub9ce\uc740 \ub178\ub4dc\uac00 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 Klaytn\uc740 \ucd5c\uc801\ud654\ub41c \ubc84\uc804\uc758 Istanbul BFT\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc758 \ud2b9\uc131\uc744 \ubc18\uc601\ud558\uc5ec \ubcc0\ud615\ub41c \ubc84\uc804\uc758 PBFT\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"Klaytn\uc5d0\ub294 \ucee8\uc13c\uc11c\uc2a4 \ub178\ub4dc(CN), \ud504\ub85d\uc2dc \ub178\ub4dc(PN) \ubc0f \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ub178\ub4dc(EN)\ub77c\ub294 \uc138 \uac00\uc9c0 \uc720\ud615\uc758 \ub178\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4. CN\uc740 CCO(Core Cell Operators)\uc5d0 \uc758\ud574 \uad00\ub9ac\ub418\uba70 \ube14\ub85d \uc0dd\uc131\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4. \uc774 \ube14\ub85d\uc740 \ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ub178\ub4dc\uc5d0\uc11c \uac80\uc99d\ub429\ub2c8\ub2e4. \uc774 \ub124\ud2b8\uc6cc\ud06c \ud1a0\ud3f4\ub85c\uc9c0\ub97c \ub354 \uc54c\uace0 \uc2f6\uc73c\uc2dc\uba74, ",(0,r.kt)("a",{parentName:"p",href:"/klaytn-docs/ko/docs/klaytn-overview/#klaytn-network-topology"},"\uc5ec\uae30"),"\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Network topology",src:n(4187).Z,width:"1500",height:"1100"})),(0,r.kt)("p",null,"Klaytn\uc740 Istanbul BFT\ub97c \ucc44\ud0dd\ud558\uace0, \uac1c\uc120\ud568\uc73c\ub85c\uc368 \ube60\ub978 \uc644\uacb0\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4. \uac01 \ube14\ub85d\uc5d0 \ub300\ud574 \uac80\uc99d \ubc0f \ud569\uc758\uac00 \uc218\ud589\ub418\ubbc0\ub85c \ud3ec\ud06c\uac00 \uc5c6\uace0, \ud569\uc758\uac00 \uc774\ub8e8\uc5b4\uc9c0\uba74 \ube14\ub85d\uc758 \uc644\uacb0\uc131\uc774 \uc989\uc2dc \ubcf4\uc7a5\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c, BFT \uc54c\uace0\ub9ac\uc998\uc758 \ud1b5\uc2e0\ub7c9 \uc99d\uac00 \ubb38\uc81c\ub294 \uc784\uc758\ub85c \uc120\ud0dd\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc704\uc6d0\ud68c(Committee)"),"\ub97c \ud65c\uc6a9\ud558\uc5ec \ud574\uacb0\ub429\ub2c8\ub2e4. CN\uc740 \ud568\uaed8 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uce74\uc6b4\uc2ac"),"\uc744 \uad6c\uc131\ud558\uace0, \uac01 \ube14\ub85d \uc0dd\uc131\uc2dc VRF(Verifiable Random Function)\uc744 \uc774\uc6a9\ud558\uc5ec \uc704\uc6d0\ud68c\uc758 \uba64\ubc84\ub85c \uc120\ud0dd\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Concept of council and committee",src:n(4774).Z,width:"1086",height:"1030"})),(0,r.kt)("p",null,"\ud569\uc758 \uba54\uc138\uc9c0\ub294 \uc624\uc9c1 \uc704\uc6d0\ud68c \uba64\ubc84\ub4e4 \uc0ac\uc774\uc5d0 \uad50\ud658\uc774 \uc774\ub8e8\uc5b4\uc9c0\ubbc0\ub85c \ucd1d CN\uc758 \uc22b\uc790\uac00 \ub298\ub354\ub77c\ub3c4 \ud1b5\uc2e0\ub7c9\uc740 \uc81c\ud55c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud604\uc7ac Klaytn Mainnet Cypress\ub294 1\ucd08\uc758 \ube14\ub85d \uc0dd\uc131 \uac04\uaca9\uc744 \uac00\uc9c0\uba70 \ucd08\ub2f9 4,000\uac1c\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac 50\uac1c \uc774\uc0c1\uc758 \ucee8\uc13c\uc11c\uc2a4 \ub178\ub4dc\uac00 CNN(Consensus Node Network)\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc73c\uba70, Klaytn\uc774 \uacc4\uc18d\ud574\uc11c \uc54c\uace0\ub9ac\uc998\uc744 \uc801\uadf9\uc801\uc73c\ub85c \ucd5c\uc801\ud654\ud568\uc5d0 \ub530\ub77c \uadf8 \uc218\ub294 \uc9c0\uc18d\ud574\uc11c \uc99d\uac00\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."))}u.isMDXComponent=!0},4774:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/council-committee-c8632c7d5e543438264d2a2199b01d4e.png"},4187:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/klaytn_network_node-a1c56e9912c6e742778e91d3487f4906.png"},7198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pbft-c23fd6098d8eced1e0046c5ee641619e.png"}}]);