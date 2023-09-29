"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?s.createElement(m,o(o({ref:t},c),{},{components:n})):s.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const a={title:"Support transfer of coins whose base denom contains slashes",sidebar_label:"Support transfer of coins whose base denom contains slashes",sidebar_position:1,slug:"/migrations/support-denoms-with-slashes"},o="Migrating from not supporting base denoms with slashes to supporting base denoms with slashes",i={unversionedId:"migrations/support-denoms-with-slashes",id:"version-v5.3.x/migrations/support-denoms-with-slashes",title:"Support transfer of coins whose base denom contains slashes",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/versioned_docs/version-v5.3.x/04-migrations/01-support-denoms-with-slashes.md",sourceDirName:"04-migrations",slug:"/migrations/support-denoms-with-slashes",permalink:"/v5.3.x/migrations/support-denoms-with-slashes",draft:!1,tags:[],version:"v5.3.x",sidebarPosition:1,frontMatter:{title:"Support transfer of coins whose base denom contains slashes",sidebar_label:"Support transfer of coins whose base denom contains slashes",sidebar_position:1,slug:"/migrations/support-denoms-with-slashes"},sidebar:"defaultSidebar",previous:{title:"End Users",permalink:"/v5.3.x/middleware/ics29-fee/end-users"},next:{title:"SDK v0.43 to IBC-Go v1",permalink:"/v5.3.x/migrations/sdk-to-v1"}},l={},p=[{value:"Chains",id:"chains",level:2},{value:"ICS20 - Transfer",id:"ics20---transfer",level:3},{value:"Upgrade Proposal",id:"upgrade-proposal",level:3},{value:"Genesis Migration",id:"genesis-migration",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-not-supporting-base-denoms-with-slashes-to-supporting-base-denoms-with-slashes"},"Migrating from not supporting base denoms with slashes to supporting base denoms with slashes"),(0,r.kt)("p",null,"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."),(0,r.kt)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chains"),(0,r.kt)("li",{parentName:"ul"},"IBC Apps"),(0,r.kt)("li",{parentName:"ul"},"Relayers"),(0,r.kt)("li",{parentName:"ul"},"IBC Light Clients")),(0,r.kt)("p",null,"This document is necessary when chains are upgrading from a version that does not support base denoms with slashes (e.g. v3.0.0) to a version that does (e.g. v3.2.0). All versions of ibc-go smaller than v1.5.0 for the v1.x release line, v2.3.0 for the v2.x release line, and v3.1.0 for the v3.x release line do ",(0,r.kt)("strong",{parentName:"p"},"NOT")," support IBC token transfers of coins whose base denoms contain slashes. Therefore the in-place of genesis migration described in this document are required when upgrading."),(0,r.kt)("p",null,"If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect."),(0,r.kt)("p",null,"E.g. If a base denom of ",(0,r.kt)("inlineCode",{parentName:"p"},"testcoin/testcoin/testcoin")," is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: ",(0,r.kt)("inlineCode",{parentName:"p"},'Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"'),"."),(0,r.kt)("p",null,"This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes."),(0,r.kt)("p",null,"To do so, chain binaries should include a migration script that will run when the chain upgrades from not supporting base denominations with slashes to supporting base denominations with slashes."),(0,r.kt)("h2",{id:"chains"},"Chains"),(0,r.kt)("h3",{id:"ics20---transfer"},"ICS20 - Transfer"),(0,r.kt)("p",null,"The transfer module will now support slashes in base denoms, so we must iterate over current traces to check if any of them are incorrectly formed and correct the trace information."),(0,r.kt)("h3",{id:"upgrade-proposal"},"Upgrade Proposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.UpgradeKeeper.SetUpgradeHandler("MigrateTraces",\n    func(ctx sdk.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n        // transfer module consensus version has been bumped to 2\n        return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n    })\n\n')),(0,r.kt)("p",null,"This is only necessary if there are denom traces in the store with incorrect trace information from previously received coins that had a slash in the base denom. However, it is recommended that any chain upgrading to support base denominations with slashes runs this code for safety."),(0,r.kt)("p",null,"For a more detailed sample, please check out the code changes in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/1680"},"this pull request"),"."),(0,r.kt)("h3",{id:"genesis-migration"},"Genesis Migration"),(0,r.kt)("p",null,"If the chain chooses to add support for slashes in base denoms via genesis export, then the trace information must be corrected during genesis migration."),(0,r.kt)("p",null,"The migration code required may look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func migrateGenesisSlashedDenomsUpgrade(appState genutiltypes.AppMap, clientCtx client.Context, genDoc *tmtypes.GenesisDoc) (genutiltypes.AppMap, error) {\n    if appState[ibctransfertypes.ModuleName] != nil {\n        transferGenState := &ibctransfertypes.GenesisState{}\n        clientCtx.Codec.MustUnmarshalJSON(appState[ibctransfertypes.ModuleName], transferGenState)\n\n        substituteTraces := make([]ibctransfertypes.DenomTrace, len(transferGenState.DenomTraces))\n        for i, dt := range transferGenState.DenomTraces {\n            // replace all previous traces with the latest trace if validation passes\n            // note most traces will have same value\n            newTrace := ibctransfertypes.ParseDenomTrace(dt.GetFullDenomPath())\n\n            if err := newTrace.Validate(); err != nil {\n                substituteTraces[i] = dt\n            } else {\n                substituteTraces[i] = newTrace\n            }\n        }\n\n        transferGenState.DenomTraces = substituteTraces\n\n        // delete old genesis state\n        delete(appState, ibctransfertypes.ModuleName)\n\n        // set new ibc transfer genesis state\n        appState[ibctransfertypes.ModuleName] = clientCtx.Codec.MustMarshalJSON(transferGenState)\n    }\n\n    return appState, nil\n}\n")),(0,r.kt)("p",null,"For a more detailed sample, please check out the code changes in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/1528"},"this pull request"),"."))}h.isMDXComponent=!0}}]);