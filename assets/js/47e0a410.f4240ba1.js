"use strict";(self.webpackChunkklaytn_docs_test=self.webpackChunkklaytn_docs_test||[]).push([[9639],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Klaytn SDK caver-js/java v1.10.0 Release",description:"This is the test1 description",authors:{name:"Klaytn Knight",title:"Media Team",url:"https://klaytn.foundation/contact-us/",image_url:"https://s2.coinmarketcap.com/static/img/coins/64x64/4256.png",email:"media@klaytn.foundation"},tags:["klaytn","sdk","release"]},i=void 0,l={permalink:"/klaytn-docs/blog/2023/01/01/hello-klaytn1",source:"@site/blog/2023-01-01-hello-klaytn1.md",title:"Klaytn SDK caver-js/java v1.10.0 Release",description:"This is the test1 description",date:"2023-01-01T00:00:00.000Z",formattedDate:"January 1, 2023",tags:[{label:"klaytn",permalink:"/klaytn-docs/blog/tags/klaytn"},{label:"sdk",permalink:"/klaytn-docs/blog/tags/sdk"},{label:"release",permalink:"/klaytn-docs/blog/tags/release"}],readingTime:.67,hasTruncateMarker:!0,authors:[{name:"Klaytn Knight",title:"Media Team",url:"https://klaytn.foundation/contact-us/",image_url:"https://s2.coinmarketcap.com/static/img/coins/64x64/4256.png",email:"media@klaytn.foundation",imageURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/4256.png"}],frontMatter:{title:"Klaytn SDK caver-js/java v1.10.0 Release",description:"This is the test1 description",authors:{name:"Klaytn Knight",title:"Media Team",url:"https://klaytn.foundation/contact-us/",image_url:"https://s2.coinmarketcap.com/static/img/coins/64x64/4256.png",email:"media@klaytn.foundation",imageURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/4256.png"},tags:["klaytn","sdk","release"]},prevItem:{title:"How to use oracles on Klaytn \u2014 VRF\u2019s Explained",permalink:"/klaytn-docs/blog/2023/01/02/hello-klaytn2"}},s={authorsImageUrls:[void 0]},c=[{value:"What\u2019s New in v.1.10.0 (#719, #721)",id:"whats-new-in-v1100-719-721",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*Zol0ss3r_1Fwt0G1.webp",alt:"text for image"})),(0,r.kt)("h1",{id:"notice-klaytn-sdk-caver-js-v1100-release"},"[Notice]"," Klaytn SDK caver-js v1.10.0 Release"),(0,r.kt)("p",null,"With the release of Klaytn v1.10.0, some changes have been applied to caver-js. Klaytn v1.10.0 includes Kore hardfork, with the addition of an API to request data regarding double block reward (kip82Ratio). For RPC service, some frequently used APIs from the governance name are now supported in klay namespace as well."),(0,r.kt)("h2",{id:"whats-new-in-v1100-719-721"},"What\u2019s New in v.1.10.0 (#719, #721)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added klay.getRewards API to retrieve reward related information by block with the new GC reward structure following the abolishment of the Gini coefficient KIP-82")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added governance.getChainConfigAt API to retrieve chain information for a certain block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"getStakingInfo, getNodeAddress, getChainConfig, getChainConfigAt APIs, previously only available from governance namespace, is supported for klay namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added klay.getGovParams, klay.getGovParamsAt APIs, which are functionally identical to governance.getItemsAt"))))}m.isMDXComponent=!0}}]);