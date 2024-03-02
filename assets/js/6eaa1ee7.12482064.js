"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[2940],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=l(r),m=n,u=g["".concat(c,".").concat(m)]||g[m]||y[m]||i;return r?a.createElement(u,s(s({ref:t},p),{},{components:r})):a.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(89575),n=(r(14041),r(82247));const i={date:"2023-03-22T20:00",title:"3.0.0-rc.45",tags:["core","deps","local-server","playwright"]},s="3.0.0-rc.45",o={permalink:"/changelog/3.0.0-rc.45",source:"@site/changelog/source/3.0.0-rc.45.md",title:"3.0.0-rc.45",description:"Summary",date:"2023-03-22T20:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"local-server",permalink:"/changelog/tags/local-server"},{label:"playwright",permalink:"/changelog/tags/playwright"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-22T20:00",title:"3.0.0-rc.45",tags:["core","deps","local-server","playwright"]},prevItem:{title:"3.0.0",permalink:"/changelog/3.0.0"},nextItem:{title:"3.0.0-rc.44",permalink:"/changelog/3.0.0-rc.44"},listPageLink:"/changelog/page/50"},c={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:l},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release addresses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1520"},"#1520")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/local-server"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/local-server"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.44...v3.0.0-rc.45"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," re-implemented the interaction to Debug so that it works in JetBrains IDEs (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/14737f9eaa8cd1a66bce02649f768f4227bf1c27"},"14737f9"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1520"},"#1520")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," removed deprecated API Cast.whereEveryoneCan (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7f2f5b9e642a00b6ce6f66ec06dd32f7a248495e"},"7f2f5b9"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," removed deprecated API List.get (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/6308686cde3e908822265e53e68dd1df05aa2567"},"6308686"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," removed deprecated ContextTag (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d09a6888020f2a7f76c0830b6d2939205cf0b3aa"},"d09a688"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency deepmerge to ^4.3.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d605a6ba034b0d9d5d716c82ea496bd726a86348"},"d605a6b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency graceful-fs to ^4.2.11 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3dc2d0b30e474126c1427238e9440a9f942fbdd9"},"3dc2d0b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency typedoc to ^0.23.28 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5d5b8d706dc885d16c7cfeef96723cd744584c99"},"5d5b8d7"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"local-server:")," removed deprecated API StartLocalServer.onOneOfThePreferredPorts (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/58cc29cae1764e72d9c8e5d9ec26cfc8fe3fc0b7"},"58cc29c"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright:")," it's now easier to inspect PlaywrightPage using the new interaction to Debug (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cbf210a689c5e88b3856a337ecfe92031439a311"},"cbf210a"),")")))}y.isMDXComponent=!0}}]);