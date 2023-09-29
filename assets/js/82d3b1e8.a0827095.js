"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(u,s(s({ref:t},h),{},{components:n})):a.createElement(u,s({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/overview"},s="Overview",r={unversionedId:"ibc/overview",id:"ibc/overview",title:"Overview",description:"Learn about IBC, its components, and IBC use cases.",source:"@site/docs/01-ibc/01-overview.md",sourceDirName:"01-ibc",slug:"/ibc/overview",permalink:"/main/ibc/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/overview"},sidebar:"defaultSidebar",previous:{title:"IBC-Go Documentation",permalink:"/main/"},next:{title:"Integration",permalink:"/main/ibc/integration"}},l={},c=[{value:"What is the Interblockchain Communication Protocol (IBC)?",id:"what-is-the-interblockchain-communication-protocol-ibc",level:2},{value:"Components Overview",id:"components-overview",level:2},{value:"Clients",id:"clients",level:3},{value:"IBC Client Heights",id:"ibc-client-heights",level:3},{value:"Connections",id:"connections",level:3},{value:"Proofs and Paths",id:"proofs-and-paths",level:3},{value:"Capabilities",id:"capabilities",level:3},{value:"Ports",id:"ports",level:3},{value:"Channels",id:"channels",level:3},{value:"Closing channels",id:"closing-channels",level:4},{value:"Packets",id:"packets",level:3},{value:"Receipts and Timeouts",id:"receipts-and-timeouts",level:3},{value:"Acknowledgments",id:"acknowledgments",level:3},{value:"Further Readings and Specs",id:"further-readings-and-specs",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Learn about IBC, its components, and IBC use cases.")),(0,i.kt)("h2",{id:"what-is-the-interblockchain-communication-protocol-ibc"},"What is the Interblockchain Communication Protocol (IBC)?"),(0,i.kt)("p",null,"This document serves as a guide for developers who want to write their own Inter-Blockchain\nCommunication protocol (IBC) applications for custom use cases."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IBC applications must be written as self-contained modules.")),(0,i.kt)("p",null,"Due to the modular design of the IBC protocol, IBC\napplication developers do not need to be concerned with the low-level details of clients,\nconnections, and proof verification."),(0,i.kt)("p",null,"This brief explanation of the lower levels of the\nstack gives application developers a broad understanding of the IBC\nprotocol. Abstraction layer details for channels and ports are most relevant for application developers and describe how to define custom packets and ",(0,i.kt)("inlineCode",{parentName:"p"},"IBCModule")," callbacks."),(0,i.kt)("p",null,"The requirements to have your module interact over IBC are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bind to a port or ports."),(0,i.kt)("li",{parentName:"ul"},"Define your packet data."),(0,i.kt)("li",{parentName:"ul"},"Use the default acknowledgment struct provided by core IBC or optionally define a custom acknowledgment struct."),(0,i.kt)("li",{parentName:"ul"},"Standardize an encoding of the packet data."),(0,i.kt)("li",{parentName:"ul"},"Implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"IBCModule")," interface.")),(0,i.kt)("p",null,"Read on for a detailed explanation of how to write a self-contained IBC application module."),(0,i.kt)("h2",{id:"components-overview"},"Components Overview"),(0,i.kt)("h3",{id:"clients"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client"},"Clients")),(0,i.kt)("p",null,"IBC clients are on-chain light clients. Each light client is identified by a unique client-id.\nIBC clients track the consensus states of other blockchains, along with the proof spec necessary to\nproperly verify proofs against the client's consensus state. A client can be associated with any number\nof connections to the counterparty chain. The client identifier is auto generated using the client type\nand the global client counter appended in the format: ",(0,i.kt)("inlineCode",{parentName:"p"},"{client-type}-{N}"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," should contain chain specific and light client specific information necessary for verifying updates\nand upgrades to the IBC client. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," may contain information such as chain-id, latest height, proof specs,\nunbonding periods or the status of the light client. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," should not contain information that\nis specific to a given block at a certain height, this is the function of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsensusState"),". Each ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsensusState"),"\nshould be associated with a unique block and should be referenced using a height. IBC clients are given a\nclient identifier prefixed store to store their associated client state and consensus states along with\nany metadata associated with the consensus states. Consensus states are stored using their associated height."),(0,i.kt)("p",null,"The supported IBC clients are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine"},"Solo Machine light client"),": Devices such as phones, browsers, or laptops."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint"},"Tendermint light client"),": The default for Cosmos SDK-based chains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/09-localhost"},"Localhost (loopback) client"),": Useful for\ntesting, simulation, and relaying packets to modules on the same application.")),(0,i.kt)("h3",{id:"ibc-client-heights"},"IBC Client Heights"),(0,i.kt)("p",null,"IBC Client Heights are represented by the struct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Height struct {\n  RevisionNumber uint64\n  RevisionHeight uint64\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionNumber")," represents the revision of the chain that the height is representing.\nA revision typically represents a continuous, monotonically increasing range of block-heights.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionHeight")," represents the height of the chain within the given revision."),(0,i.kt)("p",null,"On any reset of the ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionHeight"),"\u2014for example, when hard-forking a Tendermint chain\u2014\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionNumber")," will get incremented. This allows IBC clients to distinguish between a\nblock-height ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," of a previous revision of the chain (at revision ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),") and block-height ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," of the current\nrevision of the chain (at revision ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),")."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Height"),"s that share the same revision number can be compared by simply comparing their respective ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionHeight"),"s.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Height"),"s that do not share the same revision number will only be compared using their respective ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionNumber"),"s.\nThus a height ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," with revision number ",(0,i.kt)("inlineCode",{parentName:"p"},"e+1")," will always be greater than a height ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," with revision number ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),",\n",(0,i.kt)("strong",{parentName:"p"},"REGARDLESS")," of the difference in revision heights."),(0,i.kt)("p",null,"Ex:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"Height{RevisionNumber: 3, RevisionHeight: 0} > Height{RevisionNumber: 2, RevisionHeight: 100000000000}\n")),(0,i.kt)("p",null,"When a Tendermint chain is running a particular revision, relayers can simply submit headers and proofs with the revision number\ngiven by the chain's ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID"),", and the revision height given by the Tendermint block height. When a chain updates using a hard-fork\nand resets its block-height, it is responsible for updating its ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID")," to increment the revision number.\nIBC Tendermint clients then verifies the revision number against their ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID")," and treat the ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionHeight")," as the Tendermint block-height."),(0,i.kt)("p",null,"Tendermint chains wishing to use revisions to maintain persistent IBC connections even across height-resetting upgrades must format their ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID"),"s\nin the following manner: ",(0,i.kt)("inlineCode",{parentName:"p"},"{chainID}-{revision_number}"),". On any height-resetting upgrade, the ",(0,i.kt)("inlineCode",{parentName:"p"},"chainID")," ",(0,i.kt)("strong",{parentName:"p"},"MUST")," be updated with a higher revision number\nthan the previous value."),(0,i.kt)("p",null,"Ex:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before upgrade ",(0,i.kt)("inlineCode",{parentName:"li"},"chainID"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"gaiamainnet-3")),(0,i.kt)("li",{parentName:"ul"},"After upgrade ",(0,i.kt)("inlineCode",{parentName:"li"},"chainID"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"gaiamainnet-4"))),(0,i.kt)("p",null,"Clients that do not require revisions, such as the solo-machine client, simply hardcode ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," into the revision number whenever they\nneed to return an IBC height when implementing IBC interfaces and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RevisionHeight")," exclusively."),(0,i.kt)("p",null,"Other client-types can implement their own logic to verify the IBC heights that relayers provide in their ",(0,i.kt)("inlineCode",{parentName:"p"},"Update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Misbehavior"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"Verify")," functions respectively."),(0,i.kt)("p",null,"The IBC interfaces expect an ",(0,i.kt)("inlineCode",{parentName:"p"},"ibcexported.Height")," interface, however all clients must use the concrete implementation provided in\n",(0,i.kt)("inlineCode",{parentName:"p"},"02-client/types")," and reproduced above."),(0,i.kt)("h3",{id:"connections"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection"},"Connections")),(0,i.kt)("p",null,"Connections encapsulate two ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionEnd")," objects on two separate blockchains. Each\n",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionEnd")," is associated with a client of the other blockchain (for example, the counterparty blockchain).\nThe connection handshake is responsible for verifying that the light clients on each chain are\ncorrect for their respective counterparties. Connections, once established, are responsible for\nfacilitating all cross-chain verifications of IBC state. A connection can be associated with any\nnumber of channels."),(0,i.kt)("h3",{id:"proofs-and-paths"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment"},"Proofs")," and ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/24-host"},"Paths")),(0,i.kt)("p",null,"In IBC, blockchains do not directly pass messages to each other over the network. Instead, to\ncommunicate, a blockchain commits some state to a specifically defined path that is reserved for a\nspecific message type and a specific counterparty. For example, for storing a specific connectionEnd as part\nof a handshake or a packet intended to be relayed to a module on the counterparty chain. A relayer\nprocess monitors for updates to these paths and relays messages by submitting the data stored\nunder the path and a proof to the counterparty chain."),(0,i.kt)("p",null,"Proofs are passed from core IBC to light-clients as bytes. It is up to light client implementation to interpret these bytes appropriately."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The paths that all IBC implementations must use for committing IBC messages is defined in\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ics/tree/master/spec/core/ics-024-host-requirements"},"ICS-24 Host State Machine Requirements"),"."),(0,i.kt)("li",{parentName:"ul"},"The proof format that all implementations must be able to produce and verify is defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ics23"},"ICS-23 Proofs")," implementation.")),(0,i.kt)("h3",{id:"capabilities"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/advanced/10-ocap.md"},"Capabilities")),(0,i.kt)("p",null,"IBC is intended to work in execution environments where modules do not necessarily trust each\nother. Thus, IBC must authenticate module actions on ports and channels so that only modules with the\nappropriate permissions can use them."),(0,i.kt)("p",null,"This module authentication is accomplished using a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-003-dynamic-capability-store.md"},"dynamic\ncapability store"),". Upon binding to a port or\ncreating a channel for a module, IBC returns a dynamic capability that the module must claim in\norder to use that port or channel. The dynamic capability module prevents other modules from using that port or channel since\nthey do not own the appropriate capability."),(0,i.kt)("p",null,"While this background information is useful, IBC modules do not need to interact at all with\nthese lower-level abstractions. The relevant abstraction layer for IBC application developers is\nthat of channels and ports. IBC applications must be written as self-contained ",(0,i.kt)("strong",{parentName:"p"},"modules"),"."),(0,i.kt)("p",null,"A module on one blockchain can communicate with other modules on other blockchains by sending,\nreceiving, and acknowledging packets through channels that are uniquely identified by the\n",(0,i.kt)("inlineCode",{parentName:"p"},"(channelID, portID)")," tuple."),(0,i.kt)("p",null,"A useful analogy is to consider IBC modules as internet applications on\na computer. A channel can then be conceptualized as an IP connection, with the IBC portID being\nanalogous to an IP port and the IBC channelID being analogous to an IP address. Thus, a single\ninstance of an IBC module can communicate on the same port with any number of other modules and\nIBC correctly routes all packets to the relevant module using the (channelID, portID tuple). An\nIBC module can also communicate with another IBC module over multiple ports, with each\n",(0,i.kt)("inlineCode",{parentName:"p"},"(portID<->portID)")," packet stream being sent on a different unique channel."),(0,i.kt)("h3",{id:"ports"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port"},"Ports")),(0,i.kt)("p",null,"An IBC module can bind to any number of ports. Each port must be identified by a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"portID"),".\nSince IBC is designed to be secure with mutually distrusted modules operating on the same ledger,\nbinding a port returns a dynamic object capability. In order to take action on a particular port\n(for example, an open channel with its portID), a module must provide the dynamic object capability to the IBC\nhandler. This requirement prevents a malicious module from opening channels with ports it does not own. Thus,\nIBC modules are responsible for claiming the capability that is returned on ",(0,i.kt)("inlineCode",{parentName:"p"},"BindPort"),"."),(0,i.kt)("h3",{id:"channels"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel"},"Channels")),(0,i.kt)("p",null,"An IBC channel can be established between two IBC ports. Currently, a port is exclusively owned by a\nsingle module. IBC packets are sent over channels. Just as IP packets contain the destination IP\naddress and IP port, and the source IP address and source IP port, IBC packets contain\nthe destination portID and channelID, and the source portID and channelID. This packet structure enables IBC to\ncorrectly route packets to the destination module while allowing modules receiving packets to\nknow the sender module."),(0,i.kt)("p",null,"A channel can be ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDERED"),", where packets from a sending module must be processed by the\nreceiving module in the order they were sent. Or a channel can be ",(0,i.kt)("inlineCode",{parentName:"p"},"UNORDERED"),", where packets\nfrom a sending module are processed in the order they arrive (might be in a different order than they were sent)."),(0,i.kt)("p",null,"Modules can choose which channels they wish to communicate over with, thus IBC expects modules to\nimplement callbacks that are called during the channel handshake. These callbacks can do custom\nchannel initialization logic. If any callback returns an error, the channel handshake fails. Thus, by\nreturning errors on callbacks, modules can programmatically reject and accept channels."),(0,i.kt)("p",null,"The channel handshake is a 4-step handshake. Briefly, if a given chain A wants to open a channel with\nchain B using an already established connection:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"chain A sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"ChanOpenInit")," message to signal a channel initialization attempt with chain B."),(0,i.kt)("li",{parentName:"ol"},"chain B sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"ChanOpenTry")," message to try opening the channel on chain A."),(0,i.kt)("li",{parentName:"ol"},"chain A sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"ChanOpenAck")," message to mark its channel end status as open."),(0,i.kt)("li",{parentName:"ol"},"chain B sends a ",(0,i.kt)("inlineCode",{parentName:"li"},"ChanOpenConfirm")," message to mark its channel end status as open.")),(0,i.kt)("p",null,"If all handshake steps are successful, the channel is opened on both sides. At each step in the handshake, the module\nassociated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelEnd")," executes its callback. So\non ",(0,i.kt)("inlineCode",{parentName:"p"},"ChanOpenInit"),", the module on chain A executes its callback ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit"),"."),(0,i.kt)("p",null,"The channel identifier is auto derived in the format: ",(0,i.kt)("inlineCode",{parentName:"p"},"channel-{N}")," where N is the next sequence to be used."),(0,i.kt)("p",null,"Just as ports came with dynamic capabilities, channel initialization returns a dynamic capability\nthat the module ",(0,i.kt)("strong",{parentName:"p"},"must")," claim so that they can pass in a capability to authenticate channel actions\nlike sending packets. The channel capability is passed into the callback on the first parts of the\nhandshake; either ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit")," on the initializing chain or ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChanOpenTry")," on the other chain."),(0,i.kt)("h4",{id:"closing-channels"},"Closing channels"),(0,i.kt)("p",null,"Closing a channel occurs in 2 handshake steps as defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics"},"ICS 04"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ChanCloseInit")," closes a channel on the executing chain if the channel exists, it is not\nalready closed and the connection it exists upon is OPEN. Channels can only be closed by a\ncalling module or in the case of a packet timeout on an ORDERED channel."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ChanCloseConfirm")," is a response to a counterparty channel executing ",(0,i.kt)("inlineCode",{parentName:"p"},"ChanCloseInit"),". The channel\non the executing chain closes if the channel exists, the channel is not already closed,\nthe connection the channel exists upon is OPEN and the executing chain successfully verifies\nthat the counterparty channel has been closed."),(0,i.kt)("h3",{id:"packets"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel"},"Packets")),(0,i.kt)("p",null,"Modules communicate with each other by sending packets over IBC channels. All\nIBC packets contain the destination ",(0,i.kt)("inlineCode",{parentName:"p"},"portID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"channelID")," along with the source ",(0,i.kt)("inlineCode",{parentName:"p"},"portID")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"channelID"),". This packet structure allows modules to know the sender module of a given packet. IBC packets\ncontain a sequence to optionally enforce ordering."),(0,i.kt)("p",null,"IBC packets also contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutHeight")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutTimestamp")," that determine the deadline before the receiving module must process a packet."),(0,i.kt)("p",null,"Modules send custom application data to each other inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data []byte")," field of the IBC packet.\nThus, packet data is opaque to IBC handlers. It is incumbent on a sender module to encode\ntheir application-specific packet information into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," field of packets. The receiver\nmodule must decode that ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," back to the original application data."),(0,i.kt)("h3",{id:"receipts-and-timeouts"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel"},"Receipts and Timeouts")),(0,i.kt)("p",null,"Since IBC works over a distributed network and relies on potentially faulty relayers to relay messages between ledgers,\nIBC must handle the case where a packet does not get sent to its destination in a timely manner or at all. Packets must\nspecify a non-zero value for timeout height (",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutHeight"),") or timeout timestamp (",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutTimestamp")," ) after which a packet can no longer be successfully received on the destination chain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"timeoutHeight")," indicates a consensus height on the destination chain after which the packet is no longer be processed, and instead counts as having timed-out."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"timeoutTimestamp")," indicates a timestamp on the destination chain after which the packet is no longer be processed, and instead counts as having timed-out.")),(0,i.kt)("p",null,"If the timeout passes without the packet being successfully received, the packet can no longer be\nreceived on the destination chain. The sending module can timeout the packet and take appropriate actions."),(0,i.kt)("p",null,"If the timeout is reached, then a proof of packet timeout can be submitted to the original chain. The original chain can then perform\napplication-specific logic to timeout the packet, perhaps by rolling back the packet send changes (refunding senders any locked funds, etc.)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ORDERED channels, a timeout of a single packet in the channel causes the channel to close."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If packet sequence ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," times out, then a packet at sequence ",(0,i.kt)("inlineCode",{parentName:"li"},"k > n")," cannot be received without violating the contract of ORDERED channels that packets are processed in the order that they are sent."),(0,i.kt)("li",{parentName:"ul"},"Since ORDERED channels enforce this invariant, a proof that sequence ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," has not been received on the destination chain by the specified timeout of packet ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," is sufficient to timeout packet ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," and close the channel."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In UNORDERED channels, the application-specific timeout logic for that packet is applied and the channel is not closed."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Packets can be received in any order.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IBC writes a packet receipt for each sequence receives in the UNORDERED channel. This receipt does not contain information; it is simply a marker intended to signify that the UNORDERED channel has received a packet at the specified sequence.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To timeout a packet on an UNORDERED channel, a proof is required that a packet receipt ",(0,i.kt)("strong",{parentName:"p"},"does not exist")," for the packet's sequence by the specified timeout.  "))))),(0,i.kt)("p",null,"For this reason, most modules should use UNORDERED channels as they require fewer liveness guarantees to function effectively for users of that channel."),(0,i.kt)("h3",{id:"acknowledgments"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel"},"Acknowledgments")),(0,i.kt)("p",null,"Modules can also choose to write application-specific acknowledgments upon processing a packet. Acknowledgments can be done:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Synchronously on ",(0,i.kt)("inlineCode",{parentName:"li"},"OnRecvPacket")," if the module processes packets as soon as they are received from IBC module."),(0,i.kt)("li",{parentName:"ul"},"Asynchronously if module processes packets at some later point after receiving the packet.")),(0,i.kt)("p",null,"This acknowledgment data is opaque to IBC much like the packet ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," and is treated by IBC as a simple byte string ",(0,i.kt)("inlineCode",{parentName:"p"},"[]byte"),". Receiver modules must encode their acknowledgment so that the sender module can decode it correctly. The encoding must be negotiated between the two parties during version negotiation in the channel handshake."),(0,i.kt)("p",null,"The acknowledgment can encode whether the packet processing succeeded or failed, along with additional information that allows the sender module to take appropriate action."),(0,i.kt)("p",null,"After the acknowledgment has been written by the receiving chain, a relayer relays the acknowledgment back to the original sender module."),(0,i.kt)("p",null,"The original sender module then executes application-specific acknowledgment logic using the contents of the acknowledgment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After an acknowledgement fails, packet-send changes can be rolled back (for example, refunding senders in ICS20).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After an acknowledgment is received successfully on the original sender on the chain, the corresponding packet commitment is deleted since it is no longer needed."))),(0,i.kt)("h2",{id:"further-readings-and-specs"},"Further Readings and Specs"),(0,i.kt)("p",null,"If you want to learn more about IBC, check the following specifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/README.md"},"IBC specification overview"))))}d.isMDXComponent=!0}}]);