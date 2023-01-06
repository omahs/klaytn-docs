"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[2425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,m=u["".concat(c,".").concat(y)]||u[y]||s[y]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},l="\uc644\uacb0\uc131\uacfc \uac1c\uc120 \uc0ac\ud56d\ub4e4",o={unversionedId:"klaytn-2.0/finality-and-improvements",id:"klaytn-2.0/finality-and-improvements",title:"\uc644\uacb0\uc131\uacfc \uac1c\uc120 \uc0ac\ud56d\ub4e4",description:"\ube60\ub978 \uc644\uacb0\uc131 \ubc0f \ud3ec\uad04\uc801 \uac1c\uc120 \uc0ac\ud56d\ub4e4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/klaytn-2.0/finality-and-improvements.md",sourceDirName:"klaytn-2.0",slug:"/klaytn-2.0/finality-and-improvements",permalink:"/klaytn-docs/ko/docs/klaytn-2.0/finality-and-improvements",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\uba54\ud0c0\ubc84\uc2a4\ub85c \uac00\ub294 \uac04\ud3b8\ud55c \uad00\ubb38",permalink:"/klaytn-docs/ko/docs/klaytn-2.0/metaverse-package"},next:{title:"\uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131",permalink:"/klaytn-docs/ko/docs/klaytn-2.0/ethereum-compatibility"}},c={},p=[{value:'\ube60\ub978 \uc644\uacb0\uc131 \ubc0f \ud3ec\uad04\uc801 \uac1c\uc120 \uc0ac\ud56d\ub4e4<a id="vast-improvements-with-uncompromised-finality"></a>',id:"\ube60\ub978-\uc644\uacb0\uc131-\ubc0f-\ud3ec\uad04\uc801-\uac1c\uc120-\uc0ac\ud56d\ub4e4",level:2},{value:'1\ucd08 \uc644\uacb0\uc131<a id="finality"></a>',id:"1\ucd08-\uc644\uacb0\uc131",level:3},{value:'\ucc98\ub9ac\ub7c9 (TPS) <a id="throughput"></a>',id:"\ucc98\ub9ac\ub7c9-tps-",level:3},{value:'\ud655\uc7a5\uc131 <a id="scalability"></a>',id:"\ud655\uc7a5\uc131-",level:3},{value:'\uacc4\uce35\ud654\ub41c \ub124\ud2b8\uc6cc\ud06c<a id="tiered-network"></a>',id:"\uacc4\uce35\ud654\ub41c-\ub124\ud2b8\uc6cc\ud06c",level:3},{value:'\uc0c1\ud638\uc6b4\uc6a9\uc131 <a id="interoperability"></a>',id:"\uc0c1\ud638\uc6b4\uc6a9\uc131-",level:3},{value:'\uc0ac\uc6a9\uc790 \uacbd\ud5d8<a id="user-experience"></a>',id:"\uc0ac\uc6a9\uc790-\uacbd\ud5d8",level:3},{value:'\uac1c\ubc1c\uc790 \uacbd\ud5d8<a id="developer-experience"></a>',id:"\uac1c\ubc1c\uc790-\uacbd\ud5d8",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uc644\uacb0\uc131\uacfc-\uac1c\uc120-\uc0ac\ud56d\ub4e4"},"\uc644\uacb0\uc131\uacfc \uac1c\uc120 \uc0ac\ud56d\ub4e4"),(0,i.kt)("h2",{id:"\ube60\ub978-\uc644\uacb0\uc131-\ubc0f-\ud3ec\uad04\uc801-\uac1c\uc120-\uc0ac\ud56d\ub4e4"},"\ube60\ub978 \uc644\uacb0\uc131 \ubc0f \ud3ec\uad04\uc801 \uac1c\uc120 \uc0ac\ud56d\ub4e4",(0,i.kt)("a",{id:"vast-improvements-with-uncompromised-finality"})),(0,i.kt)("h3",{id:"1\ucd08-\uc644\uacb0\uc131"},"1\ucd08 \uc644\uacb0\uc131",(0,i.kt)("a",{id:"finality"})),(0,i.kt)("p",null,"\ucee8\uc13c\uc11c\uc2a4 \ub178\ub4dc \uc218\uc758 \ud655\uc7a5, \uac15\ub825\ud55c \uc131\ub2a5, \uc218 \ub9ce\uc740 \uae30\ub2a5\uc758 \uac1c\uc120\ub4e4\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ud074\ub808\uc774\ud2bc\uc740 \uc808\ub300 \ucde8\uc18c(revert)\ub418\uc9c0 \uc54a\ub294 \uc2e0\uc18d\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc704\ud574 1\ucd08 \ube14\ub85d \uc644\uacb0\uc131\uc744 \uc720\uc9c0\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ucc98\ub9ac\ub7c9-tps-"},"\ucc98\ub9ac\ub7c9 (TPS) ",(0,i.kt)("a",{id:"throughput"})),(0,i.kt)("p",null,"\ud074\ub808\uc774\ud2bc\uc758 \uc131\ub2a5\uc740 \uc77c\ub828\uc758 \ub124\ud2b8\uc6cc\ud06c \uc5c5\uadf8\ub808\uc774\ub4dc, \ub808\uc774\uc5b4 2 \uc194\ub8e8\uc158 \ub4f1\uc744 \ud1b5\ud574 \ubcf4\uac15\ub420 \uac83\uc774\uba70, \ub354 \ub9ce\uc740 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucc98\ub9ac\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ud655\uc7a5\uc131-"},"\ud655\uc7a5\uc131 ",(0,i.kt)("a",{id:"scalability"})),(0,i.kt)("p",null,"Klaytn 2.0\uc740 \uc26c\uc6b4 \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5, \ubc30\ud3ec\ub97c \uac00\ub2a5\ud558\uac8c \ud558\ub294 \uc790\uccb4 L2 \uc194\ub8e8\uc158\uc778 \uc11c\ube44\uc2a4 \uccb4\uc778\uc744 \ud1b5\ud574 \ud655\uc7a5\uc131\uc744 \ubcf4\uc7a5\ud560 \uac83\uc785\ub2c8\ub2e4. \uc0e4\ub529\uc774\ub098 \ub864\uc5c5\uacfc \uac19\uc740 \ub2e4\ub978 \uc194\ub8e8\uc158\ub4e4\ub3c4 \ud5a5\ud6c4 \uacc4\ud68d\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uacc4\uce35\ud654\ub41c-\ub124\ud2b8\uc6cc\ud06c"},"\uacc4\uce35\ud654\ub41c \ub124\ud2b8\uc6cc\ud06c",(0,i.kt)("a",{id:"tiered-network"})),(0,i.kt)("p",null,"\ub354 \ub098\uc740 \uc548\uc815\uc131\uc744 \uc704\ud574 \ud074\ub808\uc774\ud2bc\uc758 \uacc4\uce35\ud654\ub41c \uad6c\uc870\ub294 \ub370\uc774\ud130\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \ubd84\uc0b0\uc2dc\ud0a4\uba74\uc11c \ucee8\uc13c\uc11c\uc2a4 \ub178\ub4dc\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4. \ub178\ub4dc\ub4e4\uc740 \ub9e4\ub044\ub7fd\uac8c \ub3d9\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc18d\uc801\uc73c\ub85c \uac15\ud654\ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc0c1\ud638\uc6b4\uc6a9\uc131-"},"\uc0c1\ud638\uc6b4\uc6a9\uc131 ",(0,i.kt)("a",{id:"interoperability"})),(0,i.kt)("p",null,"(DEX, Bridge, Oracle\uacfc \uac19\uc740) \ub2e4\uc591\ud55c \uc0dd\ud0dc\uacc4\ub4e4\uc774 \ud074\ub808\uc774\ud2bc\uc5d0\uc11c \ubc88\uc131\ud560 \uac83\uc785\ub2c8\ub2e4. \ud074\ub808\uc774\ud2bc\uacfc \uc774\uc885 \ube14\ub85d\uccb4\uc778 \uac04 \uc790\uc0b0 \uc804\uc1a1 \ubc0f \uad50\ud658\uc774 \uc26c\uc6cc\uc9c8 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uacbd\ud5d8"},"\uc0ac\uc6a9\uc790 \uacbd\ud5d8",(0,i.kt)("a",{id:"user-experience"})),(0,i.kt)("p",null,"\ud074\ub808\uc774\ud2bc\uc740 \ubaa8\ubc14\uc77c \ud658\uacbd\uc5d0 \uc801\ud569\ud55c \ube60\ub978 \ud2b8\ub79c\uc7ad\uc158 \ucc98\ub9ac, \ub9ac\uc2a4\ud06c \uc644\ud654\ub97c \uc704\ud55c \ub178\ucd9c\ub41c \ud0a4 \uc5c5\ub370\uc774\ud2b8 \uae30\ub2a5, \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc\ub97c \uc774\uc804\uc2dc\ud0ac \uc218 \uc788\ub294 \uc218\uc218\ub8cc \uc704\uc784 \ub4f1 \uc6b0\uc6d4\ud55c \uc0ac\uc6a9\uc790 \ud658\uacbd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uac1c\ubc1c\uc790-\uacbd\ud5d8"},"\uac1c\ubc1c\uc790 \uacbd\ud5d8",(0,i.kt)("a",{id:"developer-experience"})),(0,i.kt)("p",null,"\ud074\ub808\uc774\ud2bc\uc740 \uc774\ub354\ub9ac\uc6c0 \ub3d9\uc77c\uc131\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0 \uac1c\ubc1c \ub3c4\uad6c\uc758 \uc2a4\ud0dd\uc5d0 \ub300\ud55c \uc811\uadfc\uc744 \uc81c\uacf5\ud558\uba70, \uc774\ub354\ub9ac\uc6c0 \ud504\ub85c\uc81d\ud2b8\uc758 \uc218\uc6d4\ud55c \uc774\ub3d9\uc744 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4. \uc544\uc6b8\ub7ec \ube60\ub974\uace0 \uc800\ub834\ud55c \ub2e4\uc911\uc11c\uba85 \uae30\ub2a5\ub3c4 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uad6c\ud604\uc774 \ud544\uc694\uc5c6\uc774 \ud504\ub85c\ud1a0\ucf5c \uc218\uc900\uc5d0\uc11c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);