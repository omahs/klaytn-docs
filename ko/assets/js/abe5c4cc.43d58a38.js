"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[3555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),k=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=k(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=k(n),s=r,m=d["".concat(u,".").concat(s)]||d[s]||c[s]||a;return n?l.createElement(m,i(i({ref:t},p),{},{components:n})):l.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var k=2;k<a;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>k});var l=n(7462),r=(n(7294),n(3905));const a={},i="\ud1a0\ud070 \uc774\ucf54\ub178\ubbf8",o={unversionedId:"klaytn-overview/klaytn-design/token-economy",id:"klaytn-overview/klaytn-design/token-economy",title:"\ud1a0\ud070 \uc774\ucf54\ub178\ubbf8",description:"\uac1c\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/klaytn-overview/klaytn-design/token-economy.md",sourceDirName:"klaytn-overview/klaytn-design",slug:"/klaytn-overview/klaytn-design/token-economy",permalink:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/token-economy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud655\uc7a5\uc131 \uc194\ub8e8\uc158",permalink:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/scaling-solutions"},next:{title:"\ud074\ub808\uc774\ud2bc 2.0",permalink:"/klaytn-docs/ko/docs/klaytn-2.0/"}},u={},k=[{value:'\uac1c\uc694 <a id="overview"></a>',id:"\uac1c\uc694-",level:2},{value:'\ud380\ub529 \uad6c\uc870(Funding Structure)<a id="funding-structure"></a>',id:"\ud380\ub529-\uad6c\uc870funding-structure",level:2},{value:'\ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \ubcf4\uc0c1 <a id="klaytn-governance-council-reward"></a>',id:"\ud074\ub808\uc774\ud2bc-\uac70\ubc84\ub10c\uc2a4-\uce74\uc6b4\uc2ac-\ubcf4\uc0c1-",level:2},{value:'\ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \ubcf4\uc0c1 \uba54\ucee4\ub2c8\uc998 <a id="klaytn-governance-council-reward-mechanism"></a>',id:"\ud074\ub808\uc774\ud2bc-\uac70\ubc84\ub10c\uc2a4-\uce74\uc6b4\uc2ac-\ubcf4\uc0c1-\uba54\ucee4\ub2c8\uc998-",level:3},{value:'\uc798\ubabb\ub41c \ud589\ub3d9\uc744 \ud558\ub294 \uce74\uc6b4\uc2ac \uba64\ubc84\uc5d0 \ub300\ud55c \ucc98\ubc8c <a id="penalty-for-misbehaving-council-members"></a>',id:"\uc798\ubabb\ub41c-\ud589\ub3d9\uc744-\ud558\ub294-\uce74\uc6b4\uc2ac-\uba64\ubc84\uc5d0-\ub300\ud55c-\ucc98\ubc8c-",level:3},{value:'\ud074\ub808\uc774\ud2bc \uc131\uc7a5 \ud380\ub4dc<a id="klaytn-growth-fund"></a>',id:"\ud074\ub808\uc774\ud2bc-\uc131\uc7a5-\ud380\ub4dc",level:2},{value:"\ubc30\uacbd",id:"\ubc30\uacbd",level:3},{value:"\uae30\ubcf8 \uac1c\ub150",id:"\uae30\ubcf8-\uac1c\ub150",level:3},{value:'\ud074\ub808\uc774\ud2bc \uac1c\uc120 \uc900\ube44\uae08 (Klaytn Improvement Reserve)<a id="klaytn-improvement-reserve"></a>',id:"\ud074\ub808\uc774\ud2bc-\uac1c\uc120-\uc900\ube44\uae08-klaytn-improvement-reserve",level:2}],p={toc:k};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ud1a0\ud070-\uc774\ucf54\ub178\ubbf8"},"\ud1a0\ud070 \uc774\ucf54\ub178\ubbf8"),(0,r.kt)("h2",{id:"\uac1c\uc694-"},"\uac1c\uc694 ",(0,r.kt)("a",{id:"overview"})),(0,r.kt)("p",null,"\ud074\ub808\uc774\ud2bc\uc758 \ud1a0\ud070 \uc774\ucf54\ub178\ubbf8\ub294 \ud50c\ub7ab\ud3fc\uc758 \uc0dd\ud0dc\uacc4 \uc6b4\uc601, \uc131\uc7a5 \uacc4\ud68d, \uc804\ub7b5\uc801 \ud22c\uc790\ub97c \uc9c0\uc18d\uac00\ub2a5\ud558\uac8c \uc9c0\uc6d0\ud558\uae30 \uc704\ud55c \uad6c\uc870\ub97c \uac16\ucd94\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \uacf5\uac1c \ube14\ub85d\uccb4\uc778 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc758 \ud1a0\ud070 \uc774\ucf54\ub178\ubbf8\ub294 \ub124\ud2b8\uc6cc\ud06c \uc720\uc9c0\ub77c\ub294 \uae30\uc220\uc801 \uce21\uba74\uc5d0\ub9cc \ucd08\uc810\uc744 \ub9de\ucd94\uba74\uc11c \ub178\ub4dc \uc6b4\uc601\uc790(\ucc44\uad74\uc790 \ub610\ub294 \ube14\ub85d \uc0dd\uc0b0\uc790)\uc5d0\uac8c\ub9cc \uc720\uc778\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub294 \ub124\ud2b8\uc6cc\ud06c\uc758 \ud655\uc7a5\uc5d0 \uae30\uc5ec\ud558\uac70\ub098 \uc7a5\uae30 \uc131\uc7a5\uc5d0 \ud22c\uc790\ud558\ub294 \ub2e4\ub978 \ucc38\uc5ec\uc790\ub4e4\uc5d0\uac8c \uc720\uc778\uc744 \uc81c\uacf5\ud558\ub294 \uc911\uc694\uc131\uc744 \uac04\uacfc\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud074\ub808\uc774\ud2bc\uc758 \ud1a0\ud070 \uc774\ucf54\ub178\ubbf8\ub294 \ud3ed\ub112\uc740 \uc601\uc5ed\uc758 \ucc38\uc5ec\uc790\ub4e4\uc758 \ub354 \ub2e4\uc591\ud55c \ud615\ud0dc\ub85c \uae30\uc5ec\ud558\uace0 \uc774\uc5d0 \ub300\ud574 \ubcf4\uc0c1\uc744 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \ube14\ub85d\uccb4\uc778 \ub178\ub4dc \uc6b4\uc601 \uc678\uc5d0\ub3c4 \uc678\uc5d0\ub3c4 \ubbf8\ub798 \uc131\uc7a5 \uacc4\ud68d\uc774\ub098 \uc804\ub7b5\uc801\uc73c\ub85c \uae30\ud68d\ub41c \ud22c\uc790 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uc9c0\uc18d\uc801\uc73c\ub85c \uc7ac\uc6d0\uc744 \uacf5\uae09\ud560 \uc218 \uc788\ub294 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ud380\ub529-\uad6c\uc870funding-structure"},"\ud380\ub529 \uad6c\uc870(Funding Structure)",(0,r.kt)("a",{id:"funding-structure"})),(0,r.kt)("p",null,"\ud074\ub808\uc774\ud2bc\uc758 \ud380\ub529 \uad6c\uc870\ub294 \ud074\ub808\uc774\ud2bc \ub124\ud2b8\uc6cc\ud06c\uc758 \ube14\ub85d \uc0dd\uc131\uacfc \ud568\uaed8 \uc9c0\uc18d\uc801\uc73c\ub85c \uc6b4\uc601\ub429\ub2c8\ub2e4. \ubaa8\ub4e0 \uc2e0\uaddc \ube14\ub85d\uc5d0\uc11c \ubc1c\ud589\ub41c KLAY, \uadf8\ub9ac\uace0 \ube14\ub85d","(",'\ucd1d\uce6d "\ube14\ub85d \ubcf4\uc0c1" ',")","\uc5d0 \uc0ac\uc6a9\ub41c \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc\uc758 \ud569\uacc4\ub294 \uc0ac\uc804 \uacb0\uc815\ub41c \ube44\uc728\uc5d0 \ub530\ub77c \ub2e4\uc74c \uc138 \uac1c\uc758 \uacc4\uc815\uc5d0 \uc9d1\uacc4 \ubc0f \ubc30\ud3ec\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Klaytn Governance Council Reward: 50%"),(0,r.kt)("li",{parentName:"ul"},"Klaytn Growth Fund ","(","KGF",")",": 40%"),(0,r.kt)("li",{parentName:"ul"},"Klaytn Improvement Reserve ","(","KIR",")",": 10%")),(0,r.kt)("p",null,"6.4 KLAY will be minted for every new block. This implies that approximately 200 million KLAY will be minted annually, which is equivalent to 2% annual inflation against the 10 billion KLAY issued at genesis ","(","the annual inflation rate is subject to change through the Klaytn Governance Process",")",". \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc\ub294 OPcode\ub2f9 \ubd80\uacfc\ub418\uba70, \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc \ud45c\uc5d0 \ub530\ub77c \ucc45\uc815\ub429\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc \ud45c\uc5d0 \ub300\ud574\uc11c \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,r.kt)("a",{parentName:"p",href:"transaction-fees/transaction-fees.md"},"\ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,r.kt)("h2",{id:"\ud074\ub808\uc774\ud2bc-\uac70\ubc84\ub10c\uc2a4-\uce74\uc6b4\uc2ac-\ubcf4\uc0c1-"},"\ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \ubcf4\uc0c1 ",(0,r.kt)("a",{id:"klaytn-governance-council-reward"})),(0,r.kt)("p",null,"\ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac\uc740 \ucf54\uc5b4 \uc140 \uc6b4\uc601\uc790","(","CCOs",")","\ub4e4\uc758 \uc9d1\ub2e8\uc785\ub2c8\ub2e4. \uce74\uc6b4\uc2ac \uad6c\uc131\uc6d0\uc740 \ucf54\uc5b4 \uc140 ","(","CCs",")","\uc744 \uc720\uc9c0\ud574\uc57c \ud560 \ucc45\uc784\uc774 \uc788\uc73c\uba70, \uc774 \uce74\uc6b4\uc2ac\uc740 \ud074\ub808\uc774\ud2bc \uc0dd\ud0dc\uacc4\uc5d0\uc11c \uae30\ubcf8 \uc778\ud504\ub77c \uc81c\uacf5\uc744 \ub2f4\ub2f9\ud558\ub294 \ud544\uc218 \uae30\uad00\uc774\ub429\ub2c8\ub2e4. \uce74\uc6b4\uc2ac \uba64\ubc84\uac00 \ub418\ub824\uba74 \ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \uc790\uaca9 \uac80\ud1a0\ub97c \ubc1b\uc544\uc57c\ud558\uba70, 5\ubc31\ub9cc KLAY\ub77c\ub294 \ucd5c\uc18c \uc2a4\ud14c\uc774\ud0b9 \uc870\uac74\uc744 \ucda9\uc871\ud574\uc57c \ud569\ub2c8\ub2e4. Klaytn \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \ubcf4\uc0c1\uc740 \uce74\uc6b4\uc2ac \uba64\ubc84\ub4e4\uc774 Klaytn \uc0dd\ud0dc\uacc4\uc758 \uc548\uc815\uc801\uc778 \uae30\ubc18\uc774 \ub420 \uc218 \uc788\ub3c4\ub85d \uc720\uc778\uc744 \uc81c\uacf5\ud558\ub294 \uad6c\uc870\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud074\ub808\uc774\ud2bc-\uac70\ubc84\ub10c\uc2a4-\uce74\uc6b4\uc2ac-\ubcf4\uc0c1-\uba54\ucee4\ub2c8\uc998-"},"\ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \ubcf4\uc0c1 \uba54\ucee4\ub2c8\uc998 ",(0,r.kt)("a",{id:"klaytn-governance-council-reward-mechanism"})),(0,r.kt)("p",null,"\ubaa8\ub4e0 \ube14\ub85d\ub9c8\ub2e4 \ubb34\uc791\uc704\ub85c \uc120\uc815\ub41c \uce74\uc6b4\uc2ac \uba64\ubc84\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc704\uc6d0\ud68c\uac00 \uad6c\uc131\ub429\ub2c8\ub2e4. \uac01 \uc704\uc6d0\ud68c\ub294 \ud55c \uba64\ubc84\uac00 \uc81c\uc548\uc790(Proposer) \uc5ed\ud560\uc744 \ud560\ub2f9\ubc1b\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ubaa8\ub4e0 \uc704\uc6d0\ud68c \uc704\uc6d0\uc740 \uac80\uc99d\uc790(Validator)\uc758 \uc5ed\ud560\uc744 \ub9e1\uc2b5\ub2c8\ub2e4. \ube14\ub85d\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5b4 \ud074\ub808\uc774\ud2bc \ube14\ub85d\uccb4\uc778\uc5d0 \ucd94\uac00\ub418\uba74, \ud574\ub2f9 \ube14\ub85d\uc758 \uc81c\uc548\uc790\uc5d0\uac8c\ub294 \ube14\ub85d \ubcf4\uc0c1\uc758 100%\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4. \uce74\uc6b4\uc2ac \uba64\ubc84\uac00 \uc81c\uc548\uc790\ub85c \uc120\uc815\ub420 \ud655\ub960\uc740 \ud68c\uc6d0\uc774 \uc2a4\ud14c\uc774\ud06c\ud55c KLAY\uc758 \uc591\uc5d0 \ube44\ub840\ud569\ub2c8\ub2e4. \uc989, \ub354 \ub9ce\uc740 KLAY\ub97c \uc2a4\ud14c\uc774\ud06c \ud560\uc218\ub85d \uba64\ubc84\uac00 \uc81c\uc548\uc790\ub85c \uc120\uc815\ub418\uc5b4 \ube14\ub85d\ubcf4\uc0c1\uc744 \ubc1b\uc744 \uac00\ub2a5\uc131\uc774 \ucee4\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc694\uad6c\uc0ac\ud56d\uc778 \ucd5c\uc18c 500\ub9cc KLAY \uc2a4\ud14c\uc774\ud0b9\uc774 \ucda9\uc871\ub418\ub294 \ud55c \ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \uba64\ubc84\ub294 \uc790\uc2e0\uc758 KLAY\ub97c \uc790\uc720\ub86d\uac8c \uc2a4\ud14c\uc774\ud06c\ud558\uac70\ub098 \uc5b8\uc2a4\ud14c\uc774\ud06c(unstake) \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud14c\uc774\ud0b9 \uc815\ubcf4\ub294 86,400\ube14\ub85d\ub9c8\ub2e4 \uc5c5\ub370\uc774\ud2b8\ub418\uba70, \uc0c8\ub85c \uc2a4\ud14c\uc774\ud06c \ub41c KLAY\ub294 \uc2a4\ud14c\uc774\ud0b9\uc774 \uc644\ub8cc\ub41c \ud6c4 \ub450 \ubc88\uc758 \uc5c5\ub370\uc774\ud2b8 \uc8fc\uae30 \uc774\ud6c4\uc5d0 \ud6a8\ub825\uc774 \uc0dd\uae41\ub2c8\ub2e4. \uc2a4\ud14c\uc774\ud06c \ub41c KLAY\ub97c \uc778\ucd9c\ud558\ub294 \uc77c\uc740 \uc545\uc758\uc801\uc778 \uba64\ubc84\uac00 \uc989\uc2dc \ube60\uc838\ub098\uac00\uc9c0 \ubabb\ud558\ub3c4\ub85d \uc77c\uc8fc\uc77c \uc815\ub3c4 \uc9c0\uc5f0\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub9ce\uc774 \ud22c\uc790\ud55c \uc18c\uaddc\ubaa8 \uadf8\ub8f9\uc758 \uce74\uc6b4\uc2ac \uba64\ubc84\ub4e4\uc774 \ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac \ubcf4\uc0c1\uc744 \ub3c5\uc810\ud558\ub294 \uac83\uc744 \ub9c9\uae30 \uc704\ud574 \uc9c0\ub2c8 \uacc4\uc218(Gini coefficient)\uac00 \uc774\uc6a9\ub418\uc5b4 \uc2a4\ud14c\uc774\ud06c \ub41c Klay\uc758 \uc720\ud6a8 \uc218\ub7c9\uc744 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc801\uc6a9 \uacf5\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. G\uac00 \uac70\ubc84\ub10c\uc2a4 \uce74\uc6b4\uc2ac\uc758 KLAY \uc2a4\ud14c\uc774\ud0b9 \ubc30\ubd84\uc758 \uc9c0\ub2c8 \uacc4\uc218\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\uc870\uc815\ub41c \uc2a4\ud14c\uc774\ud0b9 \uc591(Adjusted staking amount) = ","(","\uce74\uc6b4\uc2ac \uba64\ubc84\uc758 \uc2a4\ud14c\uc774\ud0b9 \uc591",")","^","(","1/1+G",")"))),(0,r.kt)("h3",{id:"\uc798\ubabb\ub41c-\ud589\ub3d9\uc744-\ud558\ub294-\uce74\uc6b4\uc2ac-\uba64\ubc84\uc5d0-\ub300\ud55c-\ucc98\ubc8c-"},"\uc798\ubabb\ub41c \ud589\ub3d9\uc744 \ud558\ub294 \uce74\uc6b4\uc2ac \uba64\ubc84\uc5d0 \ub300\ud55c \ucc98\ubc8c ",(0,r.kt)("a",{id:"penalty-for-misbehaving-council-members"})),(0,r.kt)("p",null,"\uce74\uc6b4\uc2ac \uba64\ubc84\ub294 \uc544\ub798\uc640 \uac19\uc740 \uc798\ubabb\ub41c \ud589\ub3d9\uc744 \ud558\uba74 \ucc98\ubc8c\uc758 \ub300\uc0c1\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc55e\uc73c\ub85c \ud074\ub808\uc774\ud2bc \uac70\ubc84\ub10c\uc2a4 \ud504\ub85c\uc138\uc2a4\ub97c \ud1b5\ud574 \ub354 \ub9ce\uc740 \ud398\ub110\ud2f0 \uaddc\uce59\uc774 \uc218\ub9bd\ub418\uace0 \uc218\uc815\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"Safety Failure\ub97c \uc77c\uc73c\ud0a4\ub294 \uacbd\uc6b0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc81c\uc548\uc790\ub85c \uc120\ud0dd\ub41c \uce74\uc6b4\uc2ac \uba64\ubc84\ub294 \uac19\uc740 \ub192\uc774\uc5d0 \ub450 \uac1c \uc774\uc0c1\uc758 \ube14\ub85d\uc744 \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc81c\uc548\uc790\ub85c \uc120\uc815\ub41c \uce74\uc6b4\uc2ac \uba64\ubc84\ub294 \uc758\ub3c4\uc801\uc73c\ub85c \ud2b9\uc815 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc81c\uc678\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"Liveness Failure\ub97c \uc77c\uc73c\ud0a4\ub294 \uacbd\uc6b0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc81c\uc548\uc790\ub85c \uc120\ud0dd\ub41c \uce74\uc6b4\uc2ac \uba64\ubc84\ub294 \uc720\ud6a8\ud55c \ube14\ub85d\uc744 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uac80\uc99d\uc790\ub85c \uc120\uc815\ub41c \uce74\uc6b4\uc2ac \uba64\ubc84\ub294 \uc81c\uc548\uc790\uac00 \uc81c\uc548\ud55c \ube14\ub85d\uc744 \uac80\uc99d\ud574\uc57c\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\ud074\ub808\uc774\ud2bc-\uc131\uc7a5-\ud380\ub4dc"},"\ud074\ub808\uc774\ud2bc \uc131\uc7a5 \ud380\ub4dc",(0,r.kt)("a",{id:"klaytn-growth-fund"})),(0,r.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,r.kt)("p",null,"\ud074\ub808\uc774\ud2bc\uc758 \ud1a0\ud070 \uc774\ucf54\ub178\ubbf8\ub294 \ud074\ub808\uc774\ud2bc\uc758 \uacbd\uc81c\uc801 \uc8fc\uccb4\ub4e4\uc758 \ud65c\ub3d9\uc73c\ub85c \uc6b4\uc601\ub418\uba70 \ubc1c\uc804\ud569\ub2c8\ub2e4. \uc774\ucf54\ub178\ubbf8\uc758 \uc131\uc7a5\uc744 \ud1b5\ud574 \ud50c\ub7ab\ud3fc\uc758 \uc548\uc815\uc131\uacfc \uc218\uba85\uc774 \uac1c\uc120\ub420 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud074\ub808\uc774\ud2bc\uc740 \ud074\ub808\uc774\ud2bc\uc758 \uacbd\uc81c \uc131\uc7a5\uc744 \uc720\uc9c0\ud558\uace0 \uac15\ud654\ud558\uae30 \uc704\ud574 \uacbd\uc81c\uc801 \uc8fc\uccb4\uc758 \ud65c\ub3d9\uc744 \uc7a5\ub824\ud558\ub294 \uc778\uc13c\ud2f0\ube0c \uc2dc\uc2a4\ud15c\uc744 \uac16\ucd94\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uae30\ubcf8-\uac1c\ub150"},"\uae30\ubcf8 \uac1c\ub150"),(0,r.kt)("p",null,"\ud074\ub808\uc774\ud2bc \uc131\uc7a5 \ud380\ub4dc (KGF)\ub294 \ud074\ub808\uc774\ud2bc \uacbd\uc81c\uc5d0 \uae30\uc5ec\ud558\ub294 \ub2e4\uc591\ud55c \uc870\uc9c1 \ubc0f \uac1c\uc778\ub4e4\uc5d0\uac8c \ubcf4\uc870\uae08\uc744 \uc81c\uacf5\ud558\uace0 \ud22c\uc790\ud568\uc73c\ub85c\uc368 \ud074\ub808\uc774\ud2bc \uacbd\uc81c\ub97c \ubc1c\uc804\uc2dc\ud0a4\uace0\uc790 \ud569\ub2c8\ub2e4. \ud074\ub808\uc774\ud2bc\uc758 \uae30\uc220\uc740 \ucd5c\uc18c\ud55c\uc758 \ube44\uc6a9\uc73c\ub85c \uc27d\uace0 \uc138\uacc4\uc801\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5, \uc804\uc1a1, \uad50\ud658\ud560 \uc218 \uc788\ub294 \ub9c9\ub300\ud55c \uae30\ud68c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uac1c\ubc29\ub41c \ub124\ud2b8\uc6cc\ud06c\uc774\uae30 \ub54c\ubb38\uc5d0 \ub204\uad6c\ub4e0 \ud5c8\ub77d\uc5c6\uc774 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778\uc774 \ub354 \ub110\ub9ac \uc774\uc6a9\ub418\uc9c0 \ubabb\ud558\ub294 \uac83\uc740 \uc544\uc9c1 \ucd08\uae30 \ub2e8\uacc4\uc5d0 \uc788\uc73c\uba70, \ub300\ubd80\ubd84\uc758 \uac00\uce58\uc640 \ub370\uc774\ud130\ub294 \ubc95\ub960 \uacc4\uc57d, \ub85c\uceec \uc800\uc7a5\uc18c \ub4f1 \uc804\ud1b5\uc801 \ubc29\uc2dd\uc73c\ub85c \uad00\ub9ac\ub418\uace0 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c KGF\uac00 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0\uc790 \ud569\ub2c8\ub2e4. KGF\ub294 \uc628\uccb4\uc778\uc5d0 \uae30\uc5ec\ub97c \uc99d\uba85\ud558\ub294 \uc8fc\uccb4\ub4e4\uc744 \ubcf4\uc0c1\ud558\uac70\ub098 \ucd08\uae30 \ub2e8\uacc4 dApp\uc5d0 \ud22c\uc790\ub97c \ud558\ub294 \uc99d \ub2e4\uc591\ud55c \uc0b0\uc5c5\uc5d0\uc11c \ud074\ub808\uc774\ud2bc\uc774 \ub3c4\uc785\ub418\ub294 \uac83\uc744 \uc7a5\ub824\ud558\uae30 \uc704\ud55c \ud504\ub85c\uadf8\ub7a8\uc744 \uc9c0\uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4. \ud2b9\uc815 \ube44\uc728\uc758 \ube14\ub85d \ubcf4\uc0c1(",(0,r.kt)("a",{parentName:"p",href:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/token-economy#funding-structure"},"Funding Structure"),"\ub97c \ucc38\uace0\ud558\uc138\uc694)\uc744 \ud1b5\ud574\uc11c \uc9c0\uc18d\uc801\uc73c\ub85c \uc9c0\uc6d0\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ud074\ub808\uc774\ud2bc-\uac1c\uc120-\uc900\ube44\uae08-klaytn-improvement-reserve"},"\ud074\ub808\uc774\ud2bc \uac1c\uc120 \uc900\ube44\uae08 (Klaytn Improvement Reserve)",(0,r.kt)("a",{id:"klaytn-improvement-reserve"})),(0,r.kt)("p",null,"\uae30\uc220\uc740 \uc9c0\uc18d\ud574\uc11c \ud5a5\uc0c1\ub418\uace0 \uc0ac\uc6a9\uc790\uc758 \uc694\uad6c\ub294 \uc2dc\uac04\uc774 \uc9c0\ub098\uba74\uc11c \ubcc0\ud654\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \uc6b0\ub9ac \ud50c\ub7ab\ud3fc\uc740 \ubc1c\uc0dd\ud558\ub294 \ubaa8\ub4e0 \uc0c1\ud669\uc5d0 \uc2e0\uc18d\ud558\uac8c \ub300\ucc98\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc744 \uac16\ucd94\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubcc0\ud654\uc5d0 \ub300\uc751\ud558\uae30 \uc704\ud574\uc11c \uc11c\ube44\uc2a4\ubfd0 \uc544\ub2c8\ub77c \ud074\ub808\uc774\ud2bc\uc758 \uc0dd\ud0dc\uacc4\ub97c \uc720\uc9c0\ud558\uae30 \uc704\ud574 \ub2e4\uc591\ud55c \ud65c\ub3d9\uc5d0 \ub178\ub825\uc744 \ub4e4\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub354 \ub098\uc740 \uae30\uc220\uc744 \uc704\ud55c \uc5f0\uad6c \uac1c\ubc1c \ub610\ub294 \uc0dd\ud0dc\uacc4\uc758 \uc804\ubc18\uc801\uc778 \uc131\uc7a5\uc5d0 \uae30\uc5ec\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uac00 \uc774\ub7ec\ud55c \ud65c\ub3d9\uc758 \uc77c\ubd80\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud65c\ub3d9\uc740 \ud074\ub808\uc774\ud2bc\uc758 \uc9c0\uc18d\uc801\uc778 \ubc1c\uc804\uc744 \uc704\ud574 \ud544\uc218\uc801\uc785\ub2c8\ub2e4. Klaytn Improvement Reserve (KIR) will be deployed for activities that improve the Klaytn ecosystem such as:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\uce74\ud14c\uace0\ub9ac"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\ub0b4\uc6a9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\uac1c\ubc1c")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"IDE & \ud3b8\uc9d1\uae30"),(0,r.kt)("li",null,"\uc624\ub77c\ud074"),(0,r.kt)("li",null,"\ucee8\ud2b8\ub799\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\uc778\ud504\ub77c")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\ub85c\uceec \ud14c\uc2a4\ud2b8\ub137"),(0,r.kt)("li",null,"\ud0c8\uc911\uc559\ud654 \ud30c\uc77c \uc2dc\uc2a4\ud15c"),(0,r.kt)("li",null,"\ub2e4\uc911 VM")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\ud14c\uc2a4\ud2b8, \ub514\ubc84\uadf8, \ubc30\ud3ec")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\ud14c\uc2a4\ud2b8 \ubc0f \ubc30\ud3ec\ub97c \uc704\ud55c \ud234 "),(0,r.kt)("li",null,"\ubcf4\uc548\xb7\uac10\uc0ac \ud234")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\ubaa8\ub2c8\ud130\ub9c1 & \uc560\ub110\ub9ac\ud2f1\uc2a4")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\ubaa8\ub2c8\ud130\ub9c1"),(0,r.kt)("li",null,"\uc560\ub110\ub9ac\ud2f1\uc2a4")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\uad50\uc721 & \ud65c\ub3d9")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\ubb38\uc11c"),(0,r.kt)("li",null,"\uad50\uc721 \uc790\ub8cc"),(0,r.kt)("li",null,"\ucee4\ubba4\ub2c8\ud2f0 \uad6c\ucd95"),(0,r.kt)("li",null,"\uc624\ud508 \uc18c\uc2a4 \ud65c\ub3d9 (\ubc84\uadf8 \ubc14\uc6b4\ud2f0 \ub4f1)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"\uc5f0\uad6c")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\ubcf4\uc548, \ud655\uc7a5\uc131, \uc554\ud638\ud559 \ub4f1")))))),(0,r.kt)("p",null,"\ud074\ub808\uc774\ud2bc \uc0dd\ud0dc\uacc4 \ub0b4 \ubaa8\ub450\uac00 KIR \uc81c\uc548\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. KIR \uc9c0\ucd9c \uc81c\uc548\uc740 KIR \uc2ec\uc0ac \uc808\ucc28\uc5d0 \ub530\ub77c \ucc98\ub9ac\ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/klaytn-docs/ko/docs/klaytn-overview/klaytn-design/governance#klaytn-improvement-reserve-review-process"},"\ud074\ub808\uc774\ud2bc \uac1c\uc120 \uc900\ube44\uae08 \uac70\ubc84\ub10c\uc2a4 \ud504\ub85c\uc138\uc2a4"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694. \uc9c0\ucd9c \uc81c\uc548\uc11c\uac00 \ud1b5\uacfc\ub418\uba74 \ud504\ub85c\uc81d\ud2b8\uc758 \uc9c4\ud589 \uc218\uc900\uc5d0 \ub530\ub77c KLAY\ub294 \ubbf8\ub9ac \uacb0\uc815\ub41c \ucd1d\uc561 \uc548\uc5d0\uc11c \uc8fc\uae30\uc801\uc73c\ub85c \ubc30\ud3ec\ub429\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc138\uc2a4\ub294 \ud504\ub85c\uc81d\ud2b8 \uaddc\ubaa8\uc5d0 \ub530\ub77c \ubcc0\uacbd\ub420 \uc218 \uc788\uc9c0\ub9cc \ub9e4\ub2ec \ucc98\ub9ac\ub420 \uc608\uc815\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"For more information, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://kir.klaytn.foundation/"},"Klaytn Improvement Reserve Forum"),"."))}d.isMDXComponent=!0}}]);