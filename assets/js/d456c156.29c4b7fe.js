"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},l="Parameters",i={unversionedId:"apps/transfer/params",id:"version-v6.2.x/apps/transfer/params",title:"Params",description:"The IBC transfer application module contains the following parameters:",source:"@site/versioned_docs/version-v6.2.x/02-apps/01-transfer/07-params.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/params",permalink:"/v6.2.x/apps/transfer/params",draft:!1,tags:[],version:"v6.2.x",sidebarPosition:7,frontMatter:{title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},sidebar:"defaultSidebar",previous:{title:"Metrics",permalink:"/v6.2.x/apps/transfer/metrics"},next:{title:"Authorizations",permalink:"/v6.2.x/apps/transfer/authorizations"}},s={},p=[{value:"<code>SendEnabled</code>",id:"sendenabled",level:2},{value:"<code>ReceiveEnabled</code>",id:"receiveenabled",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The IBC transfer application module contains the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReceiveEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h2",{id:"sendenabled"},(0,r.kt)("inlineCode",{parentName:"h2"},"SendEnabled")),(0,r.kt)("p",null,"The transfers enabled parameter controls send cross-chain transfer capabilities for all fungible tokens."),(0,r.kt)("p",null,"To prevent a single token from being transferred from the chain, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"SendEnabled")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and then, depending on the Cosmos SDK version, do one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"SendEnabled")," parameter")," for the denomination to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},"For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,r.kt)("inlineCode",{parentName:"li"},"SendEnabled")," entry for the denomination to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgSetSendEnabled")," as a governance proposal.")),(0,r.kt)("h2",{id:"receiveenabled"},(0,r.kt)("inlineCode",{parentName:"h2"},"ReceiveEnabled")),(0,r.kt)("p",null,"The transfers enabled parameter controls receive cross-chain transfer capabilities for all fungible tokens."),(0,r.kt)("p",null,"To prevent a single token from being transferred to the chain, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveEnabled")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and then, depending on the Cosmos SDK version, do one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled"},(0,r.kt)("inlineCode",{parentName:"a"},"SendEnabled")," parameter")," for the denomination to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},"For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,r.kt)("inlineCode",{parentName:"li"},"SendEnabled")," entry for the denomination to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgSetSendEnabled")," as a governance proposal.")))}c.isMDXComponent=!0}}]);